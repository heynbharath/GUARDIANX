import {
  AlertState,
  SafetyAlert,
  AuditEvent,
  ActorType,
} from "@/types/guardianx";

export const ALLOWED_TRANSITIONS: Record<AlertState, AlertState[]> = {
  detected: ["pending_check_in", "acknowledged", "false_positive", "system_failed"],
  pending_check_in: ["acknowledged", "escalating", "false_positive", "system_failed"],
  acknowledged: ["resolved", "escalating", "false_positive", "system_failed"],
  escalating: ["acknowledged", "resolved", "system_failed"],
  resolved: [], // Terminal
  false_positive: [], // Terminal
  system_failed: ["detected", "pending_check_in", "acknowledged"], // Recoverable
};

export function canTransition(from: AlertState, to: AlertState): boolean {
  if (from === to) return false;
  const allowed = ALLOWED_TRANSITIONS[from];
  return allowed ? allowed.includes(to) : false;
}

export interface TransitionPayload {
  alert: SafetyAlert;
  nextState: AlertState;
  actor: {
    type: ActorType;
    id: string;
    name: string;
  };
  reason: string;
  note?: string;
  outcomeCategory?: SafetyAlert["outcomeCategory"];
}

export function transitionAlert(payload: TransitionPayload): {
  success: boolean;
  alert: SafetyAlert;
  auditEvent?: AuditEvent;
  error?: string;
} {
  const { alert, nextState, actor, reason, note, outcomeCategory } = payload;
  const previousState = alert.state;

  if (!canTransition(previousState, nextState)) {
    return {
      success: false,
      alert,
      error: `Invalid transition from "${previousState}" to "${nextState}".`,
    };
  }

  // Enforce required reasons for false_positive
  if (nextState === "false_positive" && (!reason || reason.trim().length === 0)) {
    return {
      success: false,
      alert,
      error: `A valid review reason is required to mark an alert as false positive.`,
    };
  }

  const now = new Date().toISOString();
  const correlationId = `corr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const auditEvent: AuditEvent = {
    id: `audit_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    alertId: alert.id,
    timestamp: now,
    actor,
    previousState,
    nextState,
    reason,
    note,
    correlationId,
  };

  const updatedAlert: SafetyAlert = {
    ...alert,
    state: nextState,
    updatedAt: now,
    escalationLevel:
      nextState === "escalating"
        ? Math.min(2, alert.escalationLevel + 1)
        : alert.escalationLevel,
    outcomeCategory: outcomeCategory ?? alert.outcomeCategory,
    outcomeNotes: note ?? alert.outcomeNotes,
  };

  return {
    success: true,
    alert: updatedAlert,
    auditEvent,
  };
}
