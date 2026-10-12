"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { AlertPanel } from "@/components/dashboard/AlertPanel";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { GuardianPanel } from "@/components/dashboard/GuardianPanel";
import { DemoControls } from "@/components/dashboard/DemoControls";
import { OutcomeModal } from "@/components/dashboard/OutcomeModal";
import {
  INITIAL_ELDER_PROFILE,
  INITIAL_DEVICE_TELEMETRY,
  INITIAL_GUARDIAN_CONTACTS,
  INITIAL_ACTIVITY_TRENDS,
  INITIAL_AUDIT_LOGS,
  createSimulatedFallAlert,
  createSimulatedInactivityAlert,
} from "@/lib/demo-data";
import {
  SafetyAlert,
  DeviceTelemetry,
  GuardianContact,
  AuditEvent,
  AlertState,
} from "@/types/guardianx";
import { transitionAlert, canTransition } from "@/lib/alert-state-machine";
import {
  Activity,
  Battery,
  Heart,
  Radio,
  User,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export function SafetyDashboard() {
  const [profile] = useState(INITIAL_ELDER_PROFILE);
  const [telemetry, setTelemetry] = useState<DeviceTelemetry>(INITIAL_DEVICE_TELEMETRY);
  const [contacts, setContacts] = useState<GuardianContact[]>(INITIAL_GUARDIAN_CONTACTS);
  const [activeAlert, setActiveAlert] = useState<SafetyAlert | null>(null);
  const [auditLogs, setAuditLogs] = useState<AuditEvent[]>(INITIAL_AUDIT_LOGS);
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLiveTelemetry, setIsLiveTelemetry] = useState(false);
  const [gracePeriod, setGracePeriod] = useState<number | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3800);
  };

  // Live telemetry pulse effect
  React.useEffect(() => {
    if (!isLiveTelemetry) return;
    const interval = setInterval(() => {
      setTelemetry((prev) => {
        if (prev.connectionState === "offline") return prev;
        const deltaHr = Math.floor(Math.random() * 5) - 2; // -2 to +2 bpm
        const baseBpm = activeAlert ? 104 : 72;
        const newBpm = Math.max(55, Math.min(130, baseBpm + deltaHr));
        const deltaSteps = Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
        return {
          ...prev,
          heartRateBpm: newBpm,
          stepCount: prev.stepCount + deltaSteps,
          lastHeartbeat: new Date().toISOString(),
        };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isLiveTelemetry, activeAlert]);

  // Grace period timer effect for active check-ins
  React.useEffect(() => {
    if (gracePeriod === null || !activeAlert) return;
    if (activeAlert.state !== "detected" && activeAlert.state !== "pending_check_in") return;

    if (gracePeriod <= 0) {
      // Grace period expired without wearer check-in: Auto-escalate to primary contact
      setGracePeriod(null);
      const escalationResult = transitionAlert({
        alert: activeAlert,
        nextState: "pending_check_in",
        actor: { type: "system", id: "grace_timer", name: "Grace Period Engine" },
        reason: "Elder grace period window (30s) expired without cancellation",
        note: "System dispatched urgent push to primary caregiver Kavita Rao.",
      });

      if (escalationResult.success) {
        setActiveAlert(escalationResult.alert);
        if (escalationResult.auditEvent) {
          setAuditLogs((prev) => [escalationResult.auditEvent!, ...prev]);
        }
        setContacts((prev) =>
          prev.map((c) => (c.isPrimary ? { ...c, deliveryStatus: "notified" } : c))
        );
        showToast("Grace period elapsed! Caregiver notification dispatched to Kavita Rao.");
      }
      return;
    }

    const timer = setTimeout(() => {
      setGracePeriod((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [gracePeriod, activeAlert]);

  // 1. Simulate Fall Event
  const handleSimulateFall = () => {
    const newAlert = createSimulatedFallAlert();
    setActiveAlert(newAlert);
    setGracePeriod(30); // 30s countdown for demo
    setTelemetry((prev) => ({
      ...prev,
      heartRateBpm: 104, // elevated stress/fall signature
      lastMovementTime: "Abrupt kinetic halt detected",
    }));

    const auditEntry: AuditEvent = {
      id: `audit_fall_${Date.now()}`,
      alertId: newAlert.id,
      timestamp: new Date().toISOString(),
      actor: { type: "system", id: "imu_sensor_core", name: "Wearable IMU Core" },
      previousState: "detected",
      nextState: "detected",
      reason: "High-G impact vector (3.8g) detected on wrist band",
      note: "Kinetic threshold exceeded. Grace period check-in timer activated (30s).",
      correlationId: `corr_${Date.now()}`,
    };
    setAuditLogs((prev) => [auditEntry, ...prev]);
    showToast("Simulated Fall Alert triggered. 30s grace period active on wristband.");
  };

  // 2. Simulate Inactivity Event
  const handleSimulateInactivity = () => {
    const newAlert = createSimulatedInactivityAlert();
    setActiveAlert(newAlert);
    setTelemetry((prev) => ({
      ...prev,
      heartRateBpm: 62,
      lastMovementTime: "No movement recorded for 180 min",
    }));

    const auditEntry: AuditEvent = {
      id: `audit_inact_${Date.now()}`,
      alertId: newAlert.id,
      timestamp: new Date().toISOString(),
      actor: { type: "system", id: "rule_engine", name: "Inactivity Monitor" },
      previousState: "detected",
      nextState: "detected",
      reason: "No step transitions recorded for 180m during active window",
      note: "Candidate inactivity alert queued for family overview.",
      correlationId: `corr_${Date.now()}`,
    };
    setAuditLogs((prev) => [auditEntry, ...prev]);
    showToast("Simulated Inactivity Alert triggered. In-app notice created.");
  };

  // 3. Toggle Wearable Offline
  const handleToggleOffline = () => {
    if (telemetry.connectionState === "offline") {
      setTelemetry((prev) => ({
        ...prev,
        connectionState: "connected",
        signalQuality: "strong",
      }));
      showToast("Wearable connection restored (Simulated BLE link active).");
    } else {
      setTelemetry((prev) => ({
        ...prev,
        connectionState: "offline",
        signalQuality: "none",
      }));
      showToast("Wearable simulated offline. Health state marked stale/unknown.");
    }
  };

  // 4. Normal Check-in by Wearer
  const handleSimulateCheckIn = () => {
    setGracePeriod(null);
    if (activeAlert) {
      const result = transitionAlert({
        alert: activeAlert,
        nextState: "false_positive",
        actor: { type: "wearer", id: profile.id, name: profile.name },
        reason: "Wearer tapped 'I am OK' check-in prompt on watch screen",
        note: "Ananya Rao confirmed safe status directly on wrist band.",
      });

      if (result.success) {
        setActiveAlert(null);
        if (result.auditEvent) setAuditLogs((prev) => [result.auditEvent!, ...prev]);
        setContacts((prev) => prev.map((c) => ({ ...c, deliveryStatus: "idle" })));
        setTelemetry(INITIAL_DEVICE_TELEMETRY);
        showToast("Check-in received! Alert cancelled by elder confirmation.");
        return;
      }
    }

    // Nominal routine check-in without existing alert
    const checkInAudit: AuditEvent = {
      id: `audit_checkin_${Date.now()}`,
      alertId: "routine_checkin",
      timestamp: new Date().toISOString(),
      actor: { type: "wearer", id: profile.id, name: profile.name },
      previousState: "detected",
      nextState: "resolved",
      reason: "Daily scheduled check-in acknowledged by elder",
      note: "Routine well-being confirmation recorded.",
      correlationId: `corr_${Date.now()}`,
    };
    setAuditLogs((prev) => [checkInAudit, ...prev]);
    showToast("Routine check-in logged: Ananya confirmed she is having a great morning.");
  };

  // 5. Acknowledge Alert by Caregiver
  const handleAcknowledge = () => {
    if (!activeAlert) return;
    setGracePeriod(null);
    const result = transitionAlert({
      alert: activeAlert,
      nextState: "acknowledged",
      actor: { type: "caregiver", id: "guardian_kavita", name: "Kavita Rao" },
      reason: "Caregiver Kavita Rao acknowledged alert in family dashboard",
      note: "Kavita accepted responsibility for calling and visiting mother.",
    });

    if (result.success) {
      setActiveAlert(result.alert);
      if (result.auditEvent) setAuditLogs((prev) => [result.auditEvent!, ...prev]);
      setContacts((prev) =>
        prev.map((c) => (c.isPrimary ? { ...c, deliveryStatus: "acknowledged" } : c))
      );
      showToast("Alert acknowledged by Kavita Rao. Escalation paused.");
    }
  };

  // 6. Simulate Escalation to Contact 2
  const handleEscalate = () => {
    if (!activeAlert) return;
    setGracePeriod(null);
    const result = transitionAlert({
      alert: activeAlert,
      nextState: "escalating",
      actor: { type: "escalation_engine", id: "engine", name: "Escalation Policy" },
      reason: "Primary contact unreached; escalated to secondary guardian",
      note: "Simulated dispatch sent to Dr. Arvind Rao (Contact #2).",
    });

    if (result.success) {
      setActiveAlert(result.alert);
      if (result.auditEvent) setAuditLogs((prev) => [result.auditEvent!, ...prev]);
      setContacts((prev) =>
        prev.map((c) =>
          c.priorityOrder === 2
            ? { ...c, deliveryStatus: "notified" }
            : { ...c, deliveryStatus: "failed" }
        )
      );
      showToast("Escalated to Contact #2: Dr. Arvind Rao (Simulated notification dispatched).");
    }
  };

  // 7. Resolve Alert with Outcome
  const handleConfirmResolve = (
    category: SafetyAlert["outcomeCategory"],
    note: string
  ) => {
    if (!activeAlert) return;

    // Transition directly or through acknowledged if needed
    const nextState: AlertState = "resolved";
    let targetAlert = activeAlert;

    // If currently detected or pending_check_in, acknowledge first in state machine
    if (activeAlert.state === "detected" || activeAlert.state === "pending_check_in") {
      const ackResult = transitionAlert({
        alert: activeAlert,
        nextState: "acknowledged",
        actor: { type: "caregiver", id: "guardian_kavita", name: "Kavita Rao" },
        reason: "Reviewed before resolution",
      });
      if (ackResult.success) {
        targetAlert = ackResult.alert;
        if (ackResult.auditEvent) setAuditLogs((prev) => [ackResult.auditEvent!, ...prev]);
      }
    }

    const result = transitionAlert({
      alert: targetAlert,
      nextState: "resolved",
      actor: { type: "caregiver", id: "guardian_kavita", name: "Kavita Rao" },
      reason: "Incident resolved and verified by caregiver",
      note,
      outcomeCategory: category,
    });

    if (result.success) {
      setActiveAlert(null);
      setGracePeriod(null);
      if (result.auditEvent) setAuditLogs((prev) => [result.auditEvent!, ...prev]);
      setContacts((prev) => prev.map((c) => ({ ...c, deliveryStatus: "idle" })));
      setTelemetry(INITIAL_DEVICE_TELEMETRY);
      showToast(`Incident resolved: [${category}] - "${note}"`);
    }
  };

  // Mark False Alarm directly
  const handleMarkFalseAlarm = () => {
    if (!activeAlert) return;
    setGracePeriod(null);
    const result = transitionAlert({
      alert: activeAlert,
      nextState: "false_positive",
      actor: { type: "caregiver", id: "guardian_kavita", name: "Kavita Rao" },
      reason: "Caregiver marked event as false alarm after video check",
      note: "Wearer was adjusting shoes near bedside table.",
    });

    if (result.success) {
      setActiveAlert(null);
      if (result.auditEvent) setAuditLogs((prev) => [result.auditEvent!, ...prev]);
      setContacts((prev) => prev.map((c) => ({ ...c, deliveryStatus: "idle" })));
      setTelemetry(INITIAL_DEVICE_TELEMETRY);
      showToast("Event closed as False Alarm with documented rationale.");
    }
  };

  // 8. Reset Demo
  const handleResetDemo = () => {
    setActiveAlert(null);
    setGracePeriod(null);
    setTelemetry(INITIAL_DEVICE_TELEMETRY);
    setContacts(INITIAL_GUARDIAN_CONTACTS);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    showToast("Dashboard reset to initial nominal state.");
  };

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="demo">
      <Container>
        {/* Section Heading with Demo Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-gx-mint mb-3">
              <span className="w-6 h-[1px] bg-gx-emerald/60" />
              <span>Interactive Working Prototype</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-gx-text">
              Family Safety Dashboard{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gx-mint to-gx-emerald">
                Live Preview
              </span>
            </h2>
          </div>

          {/* Prominent Persistent Demo Mode Banner */}
          <div className="px-4 py-2.5 rounded-2xl bg-[#122e23] border border-gx-lime/30 flex items-center gap-3 shrink-0 shadow-glow">
            <span className="w-2.5 h-2.5 rounded-full bg-gx-lime animate-pulse" />
            <div className="text-left font-mono">
              <div className="text-xs font-bold text-gx-lime uppercase tracking-wider">
                DEMO MODE · SIMULATED DATA
              </div>
              <div className="text-[10px] text-gx-muted">
                Zero external dispatches or network calls
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Frame Shell */}
        <div className="rounded-3xl bg-[#091713] border border-gx-border overflow-hidden shadow-panel">
          {/* Top Bar: Profile & Connection Meta */}
          <div className="p-5 sm:p-6 border-b border-gx-border bg-[#0b1d18]/60 flex flex-wrap items-center justify-between gap-4">
            {/* Elder Profile Information */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gx-emerald/20 to-gx-mint/10 border border-gx-mint/30 flex items-center justify-center text-gx-mint font-display font-bold text-lg">
                AR
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-gx-text">
                    {profile.name}
                  </h3>
                  <span className="text-xs font-mono text-gx-muted">
                    Age {profile.age} · {profile.city}
                  </span>
                </div>
                <div className="text-xs text-gx-muted flex items-center gap-2 mt-0.5">
                  <span>{profile.livingStatus}</span>
                  <span className="text-gx-mint/60">•</span>
                  <span className="font-mono text-[11px] text-gx-mint">
                    {profile.deviceModel}
                  </span>
                </div>
              </div>
            </div>

            {/* Connection & Battery Telemetry Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <StatusBadge
                status={
                  telemetry.connectionState === "connected"
                    ? "stable"
                    : telemetry.connectionState === "stale"
                    ? "warning"
                    : "offline"
                }
                label={
                  telemetry.connectionState === "connected"
                    ? "BLE Connected*"
                    : telemetry.connectionState === "stale"
                    ? "Data Stale"
                    : "Device Offline"
                }
              />
              <div className="px-3 py-1.5 rounded-xl bg-gx-panel/80 border border-gx-border flex items-center gap-2 text-xs font-mono text-gx-text">
                <Battery className="w-4 h-4 text-gx-mint" />
                <span>{telemetry.batteryPercentage}%</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-gx-panel/80 border border-gx-border flex items-center gap-2 text-xs font-mono text-gx-text">
                <Radio className="w-4 h-4 text-gx-emerald" />
                <span className="uppercase text-[11px]">{telemetry.wornState}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gx-border/40 border-b border-gx-border">
            {/* Metric 1: Safety Status */}
            <div className="p-3.5 sm:p-5 bg-[#091713] text-left">
              <div className="text-[10px] font-mono text-gx-muted uppercase tracking-wider truncate">
                Overall Safety Status
              </div>
              <div className="text-lg sm:text-2xl font-display font-bold mt-1 text-gx-text flex items-center gap-1.5 sm:gap-2">
                {activeAlert ? (
                  <span className="text-gx-coral flex items-center gap-1.5 text-base sm:text-2xl">
                    <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                    Review Needed
                  </span>
                ) : (
                  <span className="text-gx-emerald flex items-center gap-1.5 text-base sm:text-2xl">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                    Stable & Safe
                  </span>
                )}
              </div>
              <div className="text-[10px] sm:text-[11px] text-gx-muted mt-0.5 sm:mt-1 truncate">
                {activeAlert ? "Active candidate alert" : "Routine patterns nominal"}
              </div>
            </div>

            {/* Metric 2: Today's Movement */}
            <div className="p-3.5 sm:p-5 bg-[#091713] text-left">
              <div className="text-[10px] font-mono text-gx-muted uppercase tracking-wider truncate">
                Today&apos;s Step Cadence
              </div>
              <div className="text-lg sm:text-2xl font-display font-bold mt-1 text-gx-text">
                {telemetry.stepCount.toLocaleString()}{" "}
                <span className="text-xs font-mono text-gx-muted font-normal">steps</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-gx-emerald mt-0.5 sm:mt-1 truncate">
                Active morning walk logged
              </div>
            </div>

            {/* Metric 3: Current Heart Rate */}
            <div className="p-3.5 sm:p-5 bg-[#091713] text-left">
              <div className="text-[10px] font-mono text-gx-muted uppercase tracking-wider truncate">
                Heart Rhythm Telemetry
              </div>
              <div className="text-lg sm:text-2xl font-display font-bold mt-1 text-gx-text flex items-center gap-1.5 sm:gap-2">
                <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-gx-mint animate-pulse" />
                <span>{telemetry.heartRateBpm}</span>
                <span className="text-xs font-mono text-gx-muted font-normal">BPM</span>
              </div>
              <div className="text-[10px] sm:text-[11px] text-gx-muted mt-0.5 sm:mt-1 truncate">
                Resting sinus baseline
              </div>
            </div>

            {/* Metric 4: Open Alerts Queue */}
            <div className="p-3.5 sm:p-5 bg-[#091713] text-left">
              <div className="text-[10px] font-mono text-gx-muted uppercase tracking-wider truncate">
                Care Circle Alerts
              </div>
              <div className="text-lg sm:text-2xl font-display font-bold mt-1 text-gx-text">
                {activeAlert ? "01 Active" : "00 Open"}
              </div>
              <div className="text-[10px] sm:text-[11px] text-gx-muted mt-0.5 sm:mt-1 truncate">
                {activeAlert ? "Escalation in progress" : "Queue clear"}
              </div>
            </div>
          </div>

          {/* Main Dashboard Body */}
          <div className="p-4 sm:p-8 space-y-6">
            {/* Active Alert Panel */}
            <AlertPanel
              alert={activeAlert}
              onAcknowledge={handleAcknowledge}
              onEscalate={handleEscalate}
              onOpenResolveModal={() => setIsResolveModalOpen(true)}
              onMarkFalsePositive={handleMarkFalseAlarm}
              onWearerCheckIn={handleSimulateCheckIn}
              gracePeriodSeconds={gracePeriod ?? undefined}
            />

            {/* Working Scenario Simulator Controls */}
            <DemoControls
              onSimulateFall={handleSimulateFall}
              onSimulateInactivity={handleSimulateInactivity}
              onSimulateOffline={handleToggleOffline}
              onSimulateCheckIn={handleSimulateCheckIn}
              onAcknowledge={handleAcknowledge}
              onEscalate={handleEscalate}
              onOpenResolveModal={() => setIsResolveModalOpen(true)}
              onResetDemo={handleResetDemo}
              hasActiveAlert={!!activeAlert}
              canEscalate={!!activeAlert && activeAlert.escalationLevel < 2}
              canAcknowledge={!!activeAlert && activeAlert.state !== "acknowledged"}
              isOffline={telemetry.connectionState === "offline"}
              isLiveTelemetry={isLiveTelemetry}
              onToggleLiveTelemetry={() => setIsLiveTelemetry(!isLiveTelemetry)}
            />

            {/* Two-Column Middle Section: Rhythm Chart & Contacts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Activity Chart & Telemetry (7 cols) */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
                <ActivityChart data={INITIAL_ACTIVITY_TRENDS} />
                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-gx-muted flex items-center justify-between">
                  <span>Wearable: Nordic nRF5340 IMU Profile</span>
                  <span className="text-gx-mint">Sample Telemetry Feed</span>
                </div>
              </div>

              {/* Right Column: Care Circle Contacts (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
                <GuardianPanel
                  contacts={contacts}
                  currentEscalationLevel={activeAlert?.escalationLevel ?? 0}
                />
              </div>
            </div>

            {/* Event Audit History Timeline */}
            <div className="p-6 rounded-2xl bg-gx-panel/20 border border-gx-border/60">
              <ActivityTimeline auditLogs={auditLogs} />
            </div>
          </div>
        </div>

        {/* Explicit Disclosure Footer */}
        <p className="mt-4 text-center text-xs font-mono text-gx-muted/70">
          *“BLE Connected” and telemetry values are illustrative. GuardianX is an elderly remote safety research and product concept. No real sensors, phones, or emergency services are connected.
        </p>

        {/* Resolution Outcome Modal */}
        <OutcomeModal
          isOpen={isResolveModalOpen}
          onClose={() => setIsResolveModalOpen(false)}
          onSubmit={handleConfirmResolve}
          alertTitle={activeAlert?.title || "Active Incident"}
        />

        {/* In-App Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#10271e] border border-gx-mint/30 shadow-panel max-w-sm text-xs text-gx-text animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-gx-lime shrink-0" />
              <strong className="font-display font-semibold text-gx-mint">
                Simulation Event
              </strong>
            </div>
            <p className="text-gx-muted leading-relaxed">{toastMessage}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
