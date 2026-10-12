import { describe, it, expect } from "vitest";
import {
  canTransition,
  transitionAlert,
} from "@/lib/alert-state-machine";
import { SafetyAlert } from "@/types/guardianx";

const mockBaseAlert: SafetyAlert = {
  id: "test_alert_01",
  type: "fall",
  title: "Test Potential Fall",
  description: "Test description",
  severity: "critical",
  state: "detected",
  detectedAt: "2026-10-12T10:00:00Z",
  updatedAt: "2026-10-12T10:00:00Z",
  recommendedAction: "Check on elder",
  confidenceScore: 0.88,
  escalationLevel: 0,
};

describe("GuardianX Alert State Machine", () => {
  it("allows valid forward transition from detected to pending_check_in", () => {
    expect(canTransition("detected", "pending_check_in")).toBe(true);

    const result = transitionAlert({
      alert: mockBaseAlert,
      nextState: "pending_check_in",
      actor: { type: "system", id: "sys_01", name: "Automation Rule" },
      reason: "Automated check-in timer initiated",
    });

    expect(result.success).toBe(true);
    expect(result.alert.state).toBe("pending_check_in");
    expect(result.auditEvent).toBeDefined();
    expect(result.auditEvent?.previousState).toBe("detected");
    expect(result.auditEvent?.nextState).toBe("pending_check_in");
    expect(result.auditEvent?.reason).toBe("Automated check-in timer initiated");
  });

  it("allows direct caregiver acknowledgement from detected", () => {
    expect(canTransition("detected", "acknowledged")).toBe(true);

    const result = transitionAlert({
      alert: mockBaseAlert,
      nextState: "acknowledged",
      actor: { type: "caregiver", id: "c_01", name: "Kavita Rao" },
      reason: "Caregiver contacted mother directly",
      note: "Mother confirmed she stumbled near chair but is unhurt.",
    });

    expect(result.success).toBe(true);
    expect(result.alert.state).toBe("acknowledged");
    expect(result.auditEvent?.note).toContain("Mother confirmed");
  });

  it("allows escalation from pending_check_in if no response received", () => {
    const pendingAlert: SafetyAlert = {
      ...mockBaseAlert,
      state: "pending_check_in",
    };

    expect(canTransition("pending_check_in", "escalating")).toBe(true);

    const result = transitionAlert({
      alert: pendingAlert,
      nextState: "escalating",
      actor: { type: "escalation_engine", id: "esc_01", name: "Escalation Policy" },
      reason: "Check-in window expired without wearer confirmation",
    });

    expect(result.success).toBe(true);
    expect(result.alert.state).toBe("escalating");
    expect(result.alert.escalationLevel).toBe(1);
  });

  it("enforces resolution outcome and note", () => {
    const ackAlert: SafetyAlert = {
      ...mockBaseAlert,
      state: "acknowledged",
    };

    expect(canTransition("acknowledged", "resolved")).toBe(true);

    const result = transitionAlert({
      alert: ackAlert,
      nextState: "resolved",
      actor: { type: "caregiver", id: "c_01", name: "Kavita Rao" },
      reason: "Situation safely resolved after phone check",
      outcomeCategory: "fall_assisted",
      note: "Neighbor visited apartment and verified elder is safe.",
    });

    expect(result.success).toBe(true);
    expect(result.alert.state).toBe("resolved");
    expect(result.alert.outcomeCategory).toBe("fall_assisted");
  });

  it("rejects false_positive without a valid reason", () => {
    const result = transitionAlert({
      alert: mockBaseAlert,
      nextState: "false_positive",
      actor: { type: "caregiver", id: "c_01", name: "Kavita Rao" },
      reason: "", // Empty reason
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain("A valid review reason is required");
  });

  it("prevents illegal transition directly from detected to resolved without review", () => {
    expect(canTransition("detected", "resolved")).toBe(false);

    const result = transitionAlert({
      alert: mockBaseAlert,
      nextState: "resolved",
      actor: { type: "caregiver", id: "c_01", name: "Kavita Rao" },
      reason: "Skipping review",
    });

    expect(result.success).toBe(false);
    expect(result.error).toContain("Invalid transition");
  });

  it("treats resolved as a terminal state", () => {
    const resolvedAlert: SafetyAlert = {
      ...mockBaseAlert,
      state: "resolved",
    };

    expect(canTransition("resolved", "detected")).toBe(false);
    expect(canTransition("resolved", "escalating")).toBe(false);
  });

  it("handles operational system_failed and recovery", () => {
    expect(canTransition("pending_check_in", "system_failed")).toBe(true);
    expect(canTransition("system_failed", "pending_check_in")).toBe(true);
  });
});
