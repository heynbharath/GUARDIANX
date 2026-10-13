"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  Sun,
  Moon,
  Coffee,
  Activity,
  Heart,
  Shield,
  ShieldAlert,
  Sparkles,
  Info,
  Radio,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Compass,
} from "lucide-react";

export type RoomId = "living" | "bedroom" | "kitchen" | "corridor";

interface RoomMeta {
  id: RoomId;
  name: string;
  sqft: string;
  ambientStatus: "nominal" | "active" | "quiet" | "review_candidate";
  lightLevel: string;
  lastPresence: string;
  sensorNodes: number;
  activityDescription: string;
  normalPattern: string;
}

const ROOMS: Record<RoomId, RoomMeta> = {
  living: {
    id: "living",
    name: "Living Room & Balcony",
    sqft: "280 sq ft",
    ambientStatus: "nominal",
    lightLevel: "Natural Morning Ambient · 420 lux",
    lastPresence: "Active 4m ago (Reading chair / Garden window)",
    sensorNodes: 3,
    activityDescription: "Gentle cadence around morning seating area. Thermal ambient readings and acoustic levels are within customary daytime bounds.",
    normalPattern: "Customary window: 08:00 – 12:30. Tea on balcony followed by newspaper reading.",
  },
  bedroom: {
    id: "bedroom",
    name: "Master Bedroom & En-Suite",
    sqft: "220 sq ft",
    ambientStatus: "quiet",
    lightLevel: "Soft Amber · Night Stand 60 lux",
    lastPresence: "Vacated at 07:15 AM (Wake transition)",
    sensorNodes: 2,
    activityDescription: "Resting cycle completed at 07:12 AM with standard postural rising acceleration. Zero acoustic or kinetic anomalies logged during nocturnal window.",
    normalPattern: "Customary window: 22:30 – 07:00. Sleep duration avg 7h 20m.",
  },
  kitchen: {
    id: "kitchen",
    name: "Kitchen & Breakfast Nook",
    sqft: "160 sq ft",
    ambientStatus: "active",
    lightLevel: "Task Illumination · 540 lux",
    lastPresence: "Breakfast prep completed at 08:35 AM",
    sensorNodes: 2,
    activityDescription: "Cabinet doors and appliance ambient sensors registered morning breakfast preparation and hydration cycle without sudden decibel or impact events.",
    normalPattern: "Customary window: 07:30 – 09:00 & 13:00 – 14:00. Kettle use and medication box opening.",
  },
  corridor: {
    id: "corridor",
    name: "Central Hallway & Entryway",
    sqft: "110 sq ft",
    ambientStatus: "nominal",
    lightLevel: "Passive Low-Glance · 180 lux",
    lastPresence: "Transit at 09:02 AM (Living to Kitchen)",
    sensorNodes: 2,
    activityDescription: "Gait transition cadence verified nominal. Nighttime path lighting enabled automatically on footfall sensing.",
    normalPattern: "Connecting artery: transit occurs across waking hours with 1.1m/s average gait speed.",
  },
};

interface Props {
  activeSimulatedEvent?: {
    room: RoomId;
    type: "fall" | "inactivity" | "noise" | null;
    timestamp: string;
    state: string;
  } | null;
  interactive?: boolean;
}

export function LivingGuardianScene({ activeSimulatedEvent, interactive = true }: Props) {
  const [selectedRoom, setSelectedRoom] = useState<RoomId>("living");
  const [hoveredRoom, setHoveredRoom] = useState<RoomId | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<"morning" | "afternoon" | "evening">("morning");
  const [pulseRhythm, setPulseRhythm] = useState(0);

  // Gentle rhythm pulse counter
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseRhythm((p) => (p + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const currentRoom = ROOMS[selectedRoom];
  const isAlertInThisRoom = activeSimulatedEvent && activeSimulatedEvent.room === selectedRoom;

  return (
    <div className="relative w-full rounded-3xl bg-gx-obsidian border border-gx-border/80 overflow-hidden shadow-panel">
      {/* Cinematic Studio Backdrop Grid & Directional Amber/Vermilion Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(198,91,61,0.08)_0%,rgba(34,34,31,0.95)_70%,#171715_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,225,210,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,225,210,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

      {/* Top Atmosphere Status Bar */}
      <div className="relative z-10 px-5 py-4 border-b border-gx-border/50 flex flex-wrap items-center justify-between gap-3 bg-gx-carbon/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gx-vermilion/20 to-gx-clay/10 border border-gx-vermilion/30 flex items-center justify-center text-gx-vermilion">
            <Compass className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gx-chalk font-semibold">
                The Living Guardian
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gx-carbon text-gx-citron border border-gx-citron/30">
                Spatial Architecture Layer
              </span>
            </div>
            <div className="text-[11px] text-gx-mineral">
              Conceptual Architectural Environment · Independent Residence Simulation
            </div>
          </div>
        </div>

        {/* Time of Day Cycle Preview Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-gx-obsidian border border-gx-border/60 text-xs font-mono">
          <button
            onClick={() => setTimeOfDay("morning")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              timeOfDay === "morning"
                ? "bg-gx-amber/20 text-gx-amber border border-gx-amber/40 font-bold"
                : "text-gx-mineral hover:text-gx-warmWhite"
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-gx-amber" /> Morning Rhythm
          </button>
          <button
            onClick={() => setTimeOfDay("afternoon")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              timeOfDay === "afternoon"
                ? "bg-gx-citron/20 text-gx-citron border border-gx-citron/40 font-bold"
                : "text-gx-mineral hover:text-gx-warmWhite"
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-gx-citron" /> Afternoon Rest
          </button>
          <button
            onClick={() => setTimeOfDay("evening")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
              timeOfDay === "evening"
                ? "bg-gx-vermilion/20 text-gx-vermilion border border-gx-vermilion/40 font-bold"
                : "text-gx-mineral hover:text-gx-warmWhite"
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-gx-vermilion" /> Nocturnal Safety
          </button>
        </div>
      </div>

      {/* Main Architectural Visual Composition */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">
        {/* Isometric SVG / Spatial Cutaway Canvas (8 Columns) */}
        <div className="lg:col-span-8 p-4 sm:p-8 flex flex-col justify-between relative select-none">
          {/* Spatial Cutaway Canvas */}
          <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full max-w-[720px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <defs>
                {/* Linear and Radial Gradients for Rooms */}
                <linearGradient id="wallGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C65B3D" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22221F" stopOpacity="0.1" />
                </linearGradient>

                <linearGradient id="livingFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom === "living" ? "#39382F" : "#22221F"} />
                  <stop offset="100%" stopColor="#171715" />
                </linearGradient>

                <linearGradient id="bedroomFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom === "bedroom" ? "#34332B" : "#1F1F1C"} />
                  <stop offset="100%" stopColor="#141412" />
                </linearGradient>

                <linearGradient id="kitchenFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom === "kitchen" ? "#38362D" : "#21201D"} />
                  <stop offset="100%" stopColor="#151513" />
                </linearGradient>

                <linearGradient id="corridorFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={selectedRoom === "corridor" ? "#32312A" : "#1E1E1B"} />
                  <stop offset="100%" stopColor="#131311" />
                </linearGradient>

                <radialGradient id="sunlightPool" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DDA85E" stopOpacity={timeOfDay === "morning" ? "0.28" : "0.1"} />
                  <stop offset="100%" stopColor="#171715" stopOpacity="0" />
                </radialGradient>

                <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Architectural Ground Shadow */}
              <ellipse cx="400" cy="340" rx="340" ry="110" fill="rgba(0,0,0,0.65)" />

              {/* Isometric Architectural Room Slabs */}

              {/* 1. MASTER BEDROOM (Top-Left Quad) */}
              <g
                onClick={() => setSelectedRoom("bedroom")}
                onMouseEnter={() => setHoveredRoom("bedroom")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* Floor Polygon */}
                <polygon
                  points="210,170 380,85 430,135 260,220"
                  fill="url(#bedroomFloor)"
                  stroke={selectedRoom === "bedroom" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={selectedRoom === "bedroom" ? "2.5" : "1"}
                  strokeDasharray={selectedRoom === "bedroom" ? "none" : "3,3"}
                  filter={selectedRoom === "bedroom" ? "url(#softGlow)" : undefined}
                />
                {/* Architectural Wall Cutaways */}
                <polyline
                  points="210,170 210,110 380,25 380,85"
                  fill="none"
                  stroke={selectedRoom === "bedroom" ? "#C65B3D" : "#39382F"}
                  strokeWidth="1.5"
                />
                <polyline
                  points="380,25 430,75 430,135"
                  fill="none"
                  stroke={selectedRoom === "bedroom" ? "#C65B3D" : "#39382F"}
                  strokeWidth="1"
                />
                {/* Bed Furniture Glyph */}
                <polygon
                  points="260,160 330,125 365,160 295,195"
                  fill="#2A2A26"
                  stroke="#4E4D43"
                  strokeWidth="1"
                />
                <ellipse cx="330" cy="145" rx="14" ry="7" fill="#39382F" />
                {/* Bedroom Ambient Light Pool */}
                <circle cx="310" cy="160" r="45" fill="url(#sunlightPool)" pointerEvents="none" />
                {/* Room Label Anchor */}
                <text x="270" y="130" fill="#77766E" fontSize="11" fontFamily="DM Mono">
                  BEDROOM
                </text>
              </g>

              {/* 2. KITCHEN & DINING (Top-Right Quad) */}
              <g
                onClick={() => setSelectedRoom("kitchen")}
                onMouseEnter={() => setHoveredRoom("kitchen")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* Floor Polygon */}
                <polygon
                  points="380,85 550,170 490,230 320,145"
                  fill="url(#kitchenFloor)"
                  stroke={selectedRoom === "kitchen" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={selectedRoom === "kitchen" ? "2.5" : "1"}
                  strokeDasharray={selectedRoom === "kitchen" ? "none" : "3,3"}
                  filter={selectedRoom === "kitchen" ? "url(#softGlow)" : undefined}
                />
                {/* Wall Cutaway */}
                <polyline
                  points="550,170 550,110 380,25"
                  fill="none"
                  stroke={selectedRoom === "kitchen" ? "#C65B3D" : "#39382F"}
                  strokeWidth="1.5"
                />
                {/* Kitchen Countertop Cutaway */}
                <polygon
                  points="460,165 520,135 535,150 475,180"
                  fill="#2A2A26"
                  stroke="#4E4D43"
                  strokeWidth="1"
                />
                {/* Kitchen Ambient Light Pool */}
                <circle cx="430" cy="150" r="40" fill="url(#sunlightPool)" pointerEvents="none" />
                <text x="410" y="125" fill="#77766E" fontSize="11" fontFamily="DM Mono">
                  KITCHEN
                </text>
              </g>

              {/* 3. CENTRAL CORRIDOR & FOYER (Middle Connector) */}
              <g
                onClick={() => setSelectedRoom("corridor")}
                onMouseEnter={() => setHoveredRoom("corridor")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <polygon
                  points="260,220 430,135 480,185 310,270"
                  fill="url(#corridorFloor)"
                  stroke={selectedRoom === "corridor" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={selectedRoom === "corridor" ? "2.5" : "1"}
                  filter={selectedRoom === "corridor" ? "url(#softGlow)" : undefined}
                />
                <text x="350" y="195" fill="#77766E" fontSize="10" fontFamily="DM Mono">
                  CORRIDOR
                </text>
              </g>

              {/* 4. LIVING ROOM & BALCONY (Bottom-Center Signature Quad) */}
              <g
                onClick={() => setSelectedRoom("living")}
                onMouseEnter={() => setHoveredRoom("living")}
                onMouseLeave={() => setHoveredRoom(null)}
                className="cursor-pointer transition-all duration-300"
              >
                {/* Floor Polygon */}
                <polygon
                  points="190,290 360,205 600,325 430,410"
                  fill="url(#livingFloor)"
                  stroke={selectedRoom === "living" ? "#E9E1D2" : "#39382F"}
                  strokeWidth={selectedRoom === "living" ? "3" : "1.2"}
                  filter={selectedRoom === "living" ? "url(#softGlow)" : undefined}
                />
                {/* Balcony Railing Line */}
                <polyline
                  points="190,290 190,260 270,220 270,250"
                  fill="none"
                  stroke="#C65B3D"
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                />
                {/* Seating / Coffee Table Geometry */}
                <polygon
                  points="330,300 400,265 440,285 370,320"
                  fill="#2A2A26"
                  stroke="#4E4D43"
                  strokeWidth="1"
                />
                <ellipse cx="385" cy="292" rx="18" ry="9" fill="#39382F" />
                {/* Reading Chair / Window Alcove */}
                <ellipse cx="280" cy="310" rx="16" ry="10" fill="#32312A" stroke="#C65B3D" strokeWidth="0.8" />
                {/* Generous Warm Light Pool for Living Room */}
                <circle cx="360" cy="290" r="75" fill="url(#sunlightPool)" pointerEvents="none" />
                <text x="320" y="360" fill="#E9E1D2" fontSize="12" fontWeight="bold" fontFamily="DM Mono">
                  LIVING ROOM & BALCONY
                </text>
              </g>

              {/* Intelligent Flow Lines: Path of Daily Rhythm */}
              <g pointerEvents="none" opacity="0.85">
                {/* Morning Journey: Bedroom -> Corridor -> Kitchen -> Living Room */}
                <path
                  d="M 310,160 Q 360,180 370,200 T 430,160 T 360,220 T 370,290"
                  fill="none"
                  stroke="#D4E45A"
                  strokeWidth="2"
                  strokeDasharray="6,4"
                  strokeDashoffset={-pulseRhythm}
                  opacity="0.85"
                />
                {/* Dynamic Pulsing Luminous Sensor Nodes */}
                <circle cx="310" cy="160" r="4" fill="#D4E45A" className="animate-ping" opacity="0.3" />
                <circle cx="310" cy="160" r="3" fill="#D4E45A" />

                <circle cx="440" cy="155" r="4" fill="#D4E45A" className="animate-ping" opacity="0.3" />
                <circle cx="440" cy="155" r="3" fill="#D4E45A" />

                <circle cx="370" cy="200" r="4" fill="#D4E45A" className="animate-ping" opacity="0.3" />
                <circle cx="370" cy="200" r="3" fill="#D4E45A" />

                <circle cx="370" cy="290" r="5" fill="#D4E45A" className="animate-ping" opacity="0.5" />
                <circle cx="370" cy="290" r="3.5" fill="#F5F1E8" />
              </g>

              {/* Active Simulated Alert Marker (if room has candidate event) */}
              {activeSimulatedEvent && (
                <g pointerEvents="none">
                  <circle
                    cx={activeSimulatedEvent.room === "living" ? 370 : 310}
                    cy={activeSimulatedEvent.room === "living" ? 290 : 160}
                    r="28"
                    fill="none"
                    stroke="#C65B3D"
                    strokeWidth="2"
                    className="animate-ping"
                  />
                  <circle
                    cx={activeSimulatedEvent.room === "living" ? 370 : 310}
                    cy={activeSimulatedEvent.room === "living" ? 290 : 160}
                    r="8"
                    fill="#C65B3D"
                  />
                  <text
                    x={activeSimulatedEvent.room === "living" ? 410 : 350}
                    y={activeSimulatedEvent.room === "living" ? 295 : 165}
                    fill="#C65B3D"
                    fontSize="11"
                    fontFamily="DM Mono"
                    fontWeight="bold"
                  >
                    SIGNAL REVIEW CANDIDATE
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Quick Room Selectors along bottom of cutaway */}
          <div className="pt-3 border-t border-gx-border/40 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="text-gx-muted flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-gx-mint" /> Tap a room to explore its ambient rhythm
            </span>
            <div className="flex gap-1.5">
              {(["living", "bedroom", "kitchen", "corridor"] as RoomId[]).map((rId) => (
                <button
                  key={rId}
                  onClick={() => setSelectedRoom(rId)}
                  className={`px-3 py-1 rounded-lg capitalize transition-all ${
                    selectedRoom === rId
                      ? "bg-gx-vermilion text-gx-warmWhite font-bold shadow-sm"
                      : "bg-gx-carbon text-gx-mineral hover:text-gx-warmWhite border border-gx-border/60"
                  }`}
                >
                  {rId}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Architectural Data & Intelligence Panel (4 Columns) */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-gx-carbon/90 border-t lg:border-t-0 lg:border-l border-gx-border/60 flex flex-col justify-between text-left space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gx-chalk px-2 py-0.5 rounded bg-gx-carbon border border-gx-chalk/20">
                Spatial Node Inspection
              </span>
              <span className="text-xs font-mono text-gx-mineral">
                {currentRoom.sqft}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-xl text-gx-warmWhite mt-2.5">
              {currentRoom.name}
            </h4>
            <p className="text-xs text-gx-mineral mt-1 leading-relaxed">
              {currentRoom.activityDescription}
            </p>
          </div>

          {/* Ambient Metric Tiles */}
          <div className="space-y-2.5">
            <div className="p-3 rounded-xl bg-gx-obsidian/70 border border-gx-border/60 text-xs">
              <div className="text-[10px] font-mono uppercase text-gx-mineral">
                Customary Daily Rhythm
              </div>
              <div className="text-gx-warmWhite font-medium mt-1 leading-snug">
                {currentRoom.normalPattern}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gx-obsidian/70 border border-gx-border/60 text-xs flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-gx-mineral">
                  Light & Ambient Illumination
                </div>
                <div className="text-gx-amber font-mono mt-0.5">
                  {currentRoom.lightLevel}
                </div>
              </div>
              <Sun className="w-4 h-4 text-gx-amber" />
            </div>

            <div className="p-3 rounded-xl bg-gx-obsidian/70 border border-gx-border/60 text-xs flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-gx-mineral">
                  Room Presence Telemetry
                </div>
                <div className="text-gx-chalk font-mono mt-0.5">
                  {currentRoom.lastPresence}
                </div>
              </div>
              <Activity className="w-4 h-4 text-gx-citron" />
            </div>
          </div>

          {/* Conceptual Honest Transparency Notice */}
          <div className="pt-3 border-t border-gx-border/40 text-[11px] font-mono text-gx-mineral leading-normal">
            <span className="text-gx-mint font-semibold">Concept Disclosure:</span> Architectural model presents a spatial visualization of environmental telemetry. GuardianX does not employ optical surveillance in private living spaces.
          </div>
        </div>
      </div>
    </div>
  );
}
