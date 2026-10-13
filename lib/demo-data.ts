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

// ----------------------------------------------------
// Extended Mock Data for New Project Modules
// ----------------------------------------------------

export const INITIAL_MEDICATIONS: import("@/types/guardianx").MedicationItem[] = [
  {
    id: "med_01",
    name: "Amlodipine (Blood Pressure)",
    dosage: "5 mg • 1 tablet",
    scheduledTime: "08:30 AM",
    status: "taken",
    takenAt: "08:35 AM",
    instructions: "Take with water after breakfast",
  },
  {
    id: "med_02",
    name: "Metformin (Glycemic Control)",
    dosage: "500 mg • 1 tablet",
    scheduledTime: "01:30 PM",
    status: "taken",
    takenAt: "01:42 PM",
    instructions: "Take midway during lunch",
  },
  {
    id: "med_03",
    name: "Calcium + Vitamin D3",
    dosage: "500 mg / 400 IU",
    scheduledTime: "08:00 PM",
    status: "pending",
    instructions: "Take with warm water after dinner",
  },
  {
    id: "med_04",
    name: "Atorvastatin (Lipid Management)",
    dosage: "10 mg • 1 tablet",
    scheduledTime: "09:30 PM",
    status: "pending",
    instructions: "Bedtime dose",
  },
];

export const INITIAL_APPOINTMENTS: import("@/types/guardianx").AppointmentItem[] = [
  {
    id: "apt_01",
    title: "Cardiology Review & ECG",
    doctor: "Dr. Arvind Rao (Consultant)",
    specialty: "Preventive Cardiology",
    dateTime: "Tomorrow, 10:30 AM",
    location: "Apollo Cradle & Clinic, Indiranagar",
    status: "upcoming",
  },
  {
    id: "apt_02",
    title: "Routine Diabetic HbA1c Panel",
    doctor: "Dr. Sumitra Sen",
    specialty: "Endocrinology",
    dateTime: "Next Tuesday, 08:00 AM",
    location: "Home Phlebotomy Visit (Lal PathLabs)",
    status: "upcoming",
  },
];

export const INITIAL_DEFICIENCIES: import("@/types/guardianx").HealthReportDeficiency[] = [
  {
    id: "def_01",
    biomarker: "Serum 25(OH) Vitamin D",
    status: "deficient",
    measuredValue: "18.2 ng/mL",
    normalRange: "30.0 – 100.0 ng/mL",
    impactSummary: "Increases risk of bone fragility, muscle weakness, and postural instability.",
    dietaryAction: "Increase fortified dairy, egg yolks, mushrooms, and 20 mins morning balcony sun exposure.",
  },
  {
    id: "def_02",
    biomarker: "Serum Ferritin / Iron",
    status: "low",
    measuredValue: "24 ng/mL",
    normalRange: "30 – 150 ng/mL",
    impactSummary: "Mild fatigue in afternoons and occasional dizzy spells upon standing.",
    dietaryAction: "Incorporate spinach dal, beetroot salad, pomegranate, and sprouted legumes.",
  },
  {
    id: "def_03",
    biomarker: "Electrolytes (Serum Sodium)",
    status: "optimal",
    measuredValue: "138 mEq/L",
    normalRange: "135 – 145 mEq/L",
    impactSummary: "Hydration balance and cellular osmolarity are stable.",
    dietaryAction: "Maintain daily 1.8L fluid target with tender coconut water and warm broths.",
  },
];

export const INITIAL_DIET_RECOMMENDATIONS: import("@/types/guardianx").DietaryRecommendation[] = [
  {
    id: "diet_01",
    category: "breakfast",
    title: "Bone & Joint Vitality Breakfast",
    benefit: "Rich in calcium, plant protein, and healthy fats for morning sustained energy.",
    targetNutrient: "Calcium & Vitamin D Synergy",
    recommendedFoods: ["Ragi (Finger Millet) Dosa", "Boiled egg white / Chia pudding", "Warm almond milk", "Papaya slices"],
    foodsToAvoid: ["High-sodium packaged pickles", "Heavy fried pooris"],
  },
  {
    id: "diet_02",
    category: "lunch",
    title: "Iron & Fiber Rich Balanced Thali",
    benefit: "Counteracts midday glucose dips and supports haemoglobin synthesis.",
    targetNutrient: "Non-Heme Iron & Soluble Fiber",
    recommendedFoods: ["Brown rice / Foxtail millet", "Palak Moong Dal", "Fresh cucumber-tomato raita", "Methi subzi"],
    foodsToAvoid: ["Excess white polished rice", "Deep-fried papads"],
  },
  {
    id: "diet_03",
    category: "dinner",
    title: "Light Digestible Recovery Supper",
    benefit: "Promotes restorative sleep and prevents gastroesophageal reflux at night.",
    targetNutrient: "Magnesium & Tryptophan",
    recommendedFoods: ["Bottle gourd (Lauki) soup", "Phulka with steamed vegetables", "Turmeric golden milk"],
    foodsToAvoid: ["Caffeinated teas after 6 PM", "Spicy curries"],
  },
  {
    id: "diet_04",
    category: "hydration",
    title: "Optimal Hydration Schedule",
    benefit: "Prevents orthostatic hypotension and dry skin while living independently.",
    targetNutrient: "Electrolytes & Fluid Balance",
    recommendedFoods: ["Tender coconut water (11 AM)", "Warm jeera water", "Buttermilk with crushed ginger"],
    foodsToAvoid: ["Sugary aerated drinks", "Excess black coffee"],
  },
];

export const INITIAL_ACOUSTIC_EVENTS: import("@/types/guardianx").AcousticEvent[] = [
  {
    id: "snd_01",
    timestamp: "10:14 AM",
    decibelLevel: 42,
    soundType: "normal_ambient",
    confidenceScore: 0.96,
    flaggedForTriage: false,
  },
  {
    id: "snd_02",
    timestamp: "02:45 PM",
    decibelLevel: 78,
    soundType: "appliance_alarm",
    confidenceScore: 0.88,
    flaggedForTriage: false,
  },
  {
    id: "snd_03",
    timestamp: "04:10 PM",
    decibelLevel: 84,
    soundType: "loud_crash",
    confidenceScore: 0.91,
    flaggedForTriage: true,
  },
];

export const INITIAL_VOICE_QUERIES: import("@/types/guardianx").VoiceAssistantQuery[] = [
  {
    id: "vox_01",
    timestamp: "08:32 AM",
    userSpokenText: "Guardian, did I take my blood pressure pill today?",
    assistantResponse: "Yes Ananya, your Amlodipine 5mg was marked taken at 8:35 AM. Your evening calcium is due at 8:00 PM.",
    intent: "medication_query",
    deviceStatus: "processed",
  },
  {
    id: "vox_02",
    timestamp: "11:15 AM",
    userSpokenText: "Call my daughter Kavita please.",
    assistantResponse: "Connecting hands-free call to Kavita Rao via your pulse band...",
    intent: "call_help",
    deviceStatus: "processed",
  },
  {
    id: "vox_03",
    timestamp: "03:40 PM",
    userSpokenText: "What appointments do I have this week?",
    assistantResponse: "You have a Cardiology review with Dr. Arvind tomorrow at 10:30 AM at Apollo Indiranagar.",
    intent: "wellness_chat",
    deviceStatus: "processed",
  },
];

export const INITIAL_CCTV_FEEDS: import("@/types/guardianx").CCTVCameraFeed[] = [
  {
    id: "cam_living",
    roomName: "Living Room & Corridor",
    status: "live",
    consentGranted: true,
    lastSnapshotAt: "Just now (Synced)",
    streamUrlPlaceholder: "Encrypted stream • Resolution 1080p @ 15fps",
  },
  {
    id: "cam_kitchen",
    roomName: "Kitchen & Dining Area",
    status: "live",
    consentGranted: true,
    lastSnapshotAt: "2 mins ago",
    streamUrlPlaceholder: "Encrypted stream • Resolution 1080p @ 15fps",
  },
  {
    id: "cam_bedroom",
    roomName: "Master Bedroom",
    status: "privacy_masked",
    consentGranted: false,
    lastSnapshotAt: "Masked for Privacy (Elder consent disabled)",
    streamUrlPlaceholder: "Privacy Shield Active • Video feed disabled by wearer policy",
  },
];

export const INITIAL_TIERED_EMERGENCY_CONTACTS: import("@/types/guardianx").EmergencyContact[] = [
  {
    id: "emg_01",
    tier: "family",
    tierLabel: "Tier 1: Family Member (Child)",
    name: "Kavita Rao (Daughter)",
    relationship: "Primary Guardian · Resides 15 mins away",
    phone: "+91 98450 11223",
    etaEstimateMinutes: 15,
    available24x7: true,
    quickDialEnabled: true,
  },
  {
    id: "emg_02",
    tier: "home_help",
    tierLabel: "Tier 2: Home Help & Caregiver",
    name: "Saraswathiamma (Daily Care Aide)",
    relationship: "Home Assistant (On-Duty 09:00 - 18:00)",
    phone: "+91 97410 44556",
    etaEstimateMinutes: 5,
    available24x7: false,
    quickDialEnabled: true,
  },
  {
    id: "emg_03",
    tier: "ambulance",
    tierLabel: "Tier 3: Ambulance & Emergency Dispatch",
    name: "Manipal / Apollo EMS Response Dispatch",
    relationship: "24x7 Critical Care Ambulance Service",
    phone: "108 / +91 80 2502 4444",
    etaEstimateMinutes: 8,
    available24x7: true,
    quickDialEnabled: true,
  },
  {
    id: "emg_04",
    tier: "neighbour",
    tierLabel: "Tier 4: Immediate Neighbour",
    name: "Mr. & Mrs. Kulkarni (Flat 202)",
    relationship: "Adjacent Floor Neighbour · Keyholder",
    phone: "+91 98860 77889",
    etaEstimateMinutes: 2,
    available24x7: true,
    quickDialEnabled: true,
  },
];
