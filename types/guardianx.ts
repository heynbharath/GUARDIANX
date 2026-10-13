export type AlertState =
  | 'detected'
  | 'pending_check_in'
  | 'acknowledged'
  | 'escalating'
  | 'resolved'
  | 'false_positive'
  | 'system_failed';

export type AlertSeverity = 'low' | 'medium' | 'high' | 'critical';

export type EventType =
  | 'fall'
  | 'inactivity'
  | 'offline'
  | 'check_in'
  | 'battery_low'
  | 'routine';

export type ActorType = 'system' | 'caregiver' | 'wearer' | 'escalation_engine';

export interface AuditEvent {
  id: string;
  alertId: string;
  timestamp: string;
  actor: {
    type: ActorType;
    id: string;
    name: string;
  };
  previousState: AlertState;
  nextState: AlertState;
  reason: string;
  note?: string;
  correlationId: string;
}

export interface GuardianContact {
  id: string;
  name: string;
  relationship: string;
  phoneMasked: string;
  isPrimary: boolean;
  priorityOrder: number;
  deliveryStatus: 'idle' | 'notified' | 'acknowledged' | 'failed';
  lastNotifiedAt?: string;
}

export interface ElderProfile {
  id: string;
  name: string;
  age: number;
  city: string;
  livingStatus: string;
  baselineRoutine: string;
  deviceId: string;
  deviceModel: string;
}

export interface DeviceTelemetry {
  connectionState: 'connected' | 'stale' | 'offline';
  batteryPercentage: number;
  lastHeartbeat: string;
  wornState: 'worn' | 'removed' | 'unknown';
  signalQuality: 'strong' | 'moderate' | 'degraded' | 'none';
  heartRateBpm: number;
  stepCount: number;
  lastMovementTime: string;
}

export interface SafetyAlert {
  id: string;
  type: EventType;
  title: string;
  description: string;
  severity: AlertSeverity;
  state: AlertState;
  detectedAt: string;
  updatedAt: string;
  recommendedAction: string;
  confidenceScore: number; // e.g. 0.88 (hypothetical model confidence)
  checkInDueAt?: string;
  escalationLevel: number; // 0 = none, 1 = contact 1, 2 = contact 2
  outcomeCategory?: 'fall_assisted' | 'false_alarm_movement' | 'inactivity_resting' | 'device_issue' | 'other';
  outcomeNotes?: string;
}

export interface ActivityHourSample {
  timeLabel: string;
  movementIndex: number; // 0 to 100
  heartRate: number;
  status: 'active' | 'rest' | 'inactivity_window' | 'nominal';
}

// ----------------------------------------------------
// New Extended Modules (From Project Notes)
// ----------------------------------------------------

export interface MedicationItem {
  id: string;
  name: string;
  dosage: string;
  scheduledTime: string;
  status: 'taken' | 'pending' | 'overdue';
  takenAt?: string;
  instructions: string;
}

export interface AppointmentItem {
  id: string;
  title: string;
  doctor: string;
  specialty: string;
  dateTime: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface DietaryRecommendation {
  id: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'hydration';
  title: string;
  benefit: string;
  targetNutrient: string;
  recommendedFoods: string[];
  foodsToAvoid: string[];
}

export interface HealthReportDeficiency {
  id: string;
  biomarker: string;
  status: 'deficient' | 'low' | 'optimal' | 'elevated';
  measuredValue: string;
  normalRange: string;
  impactSummary: string;
  dietaryAction: string;
}

export interface AcousticEvent {
  id: string;
  timestamp: string;
  decibelLevel: number;
  soundType: 'normal_ambient' | 'loud_crash' | 'glass_break' | 'distress_shout' | 'appliance_alarm';
  confidenceScore: number;
  flaggedForTriage: boolean;
}

export interface VoiceAssistantQuery {
  id: string;
  timestamp: string;
  userSpokenText: string;
  assistantResponse: string;
  intent: 'call_help' | 'medication_query' | 'time_query' | 'wellness_chat' | 'home_help';
  deviceStatus: 'processed' | 'active_listening';
}

export interface CCTVCameraFeed {
  id: string;
  roomName: string;
  status: 'live' | 'standby' | 'privacy_masked';
  consentGranted: boolean;
  lastSnapshotAt: string;
  streamUrlPlaceholder: string;
}

export interface EmergencyContact {
  id: string;
  tier: 'family' | 'home_help' | 'ambulance' | 'neighbour';
  tierLabel: string;
  name: string;
  relationship: string;
  phone: string;
  etaEstimateMinutes?: number;
  available24x7: boolean;
  quickDialEnabled: boolean;
}

export interface ProjectConfig {
  projectName: string;
  category: string;
  stage: string;
  creator: {
    name: string;
    usn: string;
    showUsnPublicly: boolean; // Privacy switch
  };
  githubRepoUrl: string;
  simulationDisclaimer: string;
}
