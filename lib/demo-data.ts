import {
  ElderProfile,
  DeviceTelemetry,
  GuardianContact,
  SafetyAlert,
  AuditEvent,
  ActivityHourSample,
} from "@/types/guardianx";

export const INITIAL_ELDER_PROFILE: ElderProfile = {
  id: "elder_ananya_01",
  name: "Ananya Rao",
  age: 74,
  city: "Bengaluru, Karnataka",
  livingStatus: "Independent living, 2nd floor apartment",
  baselineRoutine: "Morning garden stroll (07:30), quiet afternoon reading, evening balcony tea",
  deviceId: "GX-DEV-9024-BLE",
  deviceModel: "GuardianX Pulse Band v2 (Simulated Prototype)",
};

export const INITIAL_DEVICE_TELEMETRY: DeviceTelemetry = {
  connectionState: "connected",
  batteryPercentage: 84,
  lastHeartbeat: new Date(Date.now() - 3 * 60000).toISOString(),
  wornState: "worn",
  signalQuality: "strong",
  heartRateBpm: 71,
  stepCount: 4120,
  lastMovementTime: new Date(Date.now() - 5 * 60000).toISOString(),
};

export const INITIAL_GUARDIAN_CONTACTS: GuardianContact[] = [
  {
    id: "guardian_kavita",
    name: "Kavita Rao",
    relationship: "Daughter (Primary)",
    phoneMasked: "+91 98450 •••••",
    isPrimary: true,
    priorityOrder: 1,
    deliveryStatus: "idle",
  },
  {
    id: "guardian_arvind",
    name: "Dr. Arvind Rao",
    relationship: "Son (Secondary / Physician)",
    phoneMasked: "+91 94480 •••••",
    isPrimary: false,
    priorityOrder: 2,
    deliveryStatus: "idle",
  },
];

export const INITIAL_ACTIVITY_TRENDS: ActivityHourSample[] = [
  { timeLabel: "06:00", movementIndex: 12, heartRate: 64, status: "rest" },
  { timeLabel: "07:00", movementIndex: 45, heartRate: 72, status: "active" },
  { timeLabel: "08:00", movementIndex: 78, heartRate: 88, status: "active" },
  { timeLabel: "09:00", movementIndex: 65, heartRate: 79, status: "active" },
  { timeLabel: "10:00", movementIndex: 38, heartRate: 72, status: "nominal" },
  { timeLabel: "11:00", movementIndex: 28, heartRate: 70, status: "nominal" },
  { timeLabel: "12:00", movementIndex: 22, heartRate: 68, status: "nominal" },
  { timeLabel: "13:00", movementIndex: 10, heartRate: 65, status: "rest" },
  { timeLabel: "14:00", movementIndex: 15, heartRate: 67, status: "nominal" },
  { timeLabel: "15:00", movementIndex: 32, heartRate: 71, status: "nominal" },
  { timeLabel: "16:00", movementIndex: 54, heartRate: 76, status: "active" },
  { timeLabel: "17:00", movementIndex: 42, heartRate: 73, status: "nominal" },
];

export const INITIAL_AUDIT_LOGS: AuditEvent[] = [
  {
    id: "audit_init_01",
    alertId: "alert_nominal_baseline",
    timestamp: new Date(Date.now() - 4 * 3600000).toISOString(),
    actor: { type: "system", id: "engine_cron", name: "GuardianX Sensor Core" },
    previousState: "detected",
    nextState: "resolved",
    reason: "Baseline morning activity verified",
    note: "Normal acceleration profiles detected during morning routine window.",
    correlationId: "corr_boot_01",
  },
];

// Helper generator functions for simulations
export function createSimulatedFallAlert(): SafetyAlert {
  const now = new Date().toISOString();
  return {
    id: `alert_fall_${Date.now()}`,
    type: "fall",
    title: "Potential Impact Event Detected",
    description:
      "A high-g acceleration vector (3.8g) followed by immediate cessation of movement was captured on wearable IMU sensor (simulated data).",
    severity: "critical",
    state: "detected",
    detectedAt: now,
    updatedAt: now,
    recommendedAction: "Initiate voice/app check-in immediately. Escalate to Kavita Rao if unconfirmed.",
    confidenceScore: 0.89,
    checkInDueAt: new Date(Date.now() + 90000).toISOString(),
    escalationLevel: 0,
  };
}

export function createSimulatedInactivityAlert(): SafetyAlert {
  const now = new Date().toISOString();
  return {
    id: `alert_inact_${Date.now()}`,
    type: "inactivity",
    title: "Unusual Prolonged Inactivity Notice",
    description:
      "No measurable gait or postural transition recorded for 180 minutes during expected active waking hours (simulated threshold exceeded).",
    severity: "medium",
    state: "detected",
    detectedAt: now,
    updatedAt: now,
    recommendedAction: "Send gentle check-in prompt to device; request elder tap confirmation.",
    confidenceScore: 0.74,
    checkInDueAt: new Date(Date.now() + 180000).toISOString(),
    escalationLevel: 0,
  };
}
