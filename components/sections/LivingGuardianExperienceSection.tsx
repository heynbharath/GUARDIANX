"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Compass,
  Radio,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  PhoneCall,
  Eye,
  Activity,
  Layers,
  ArrowRight,
} from "lucide-react";
import { LivingGuardianScene, RoomId } from "@/components/sections/LivingGuardianScene";

type SimulationScenario = "nominal" | "inactivity" | "fall" | "noise";

export function LivingGuardianExperienceSection() {
  const [activeScenario, setActiveScenario] = useState<SimulationScenario>("nominal");
  const [simulationState, setSimulationState] = useState<
    "idle" | "evaluating" | "checkin_prompt" | "acknowledged" | "resolved"
  >("idle");
  const [activeLog, setActiveLog] = useState<string>("Environment operating within customary baseline.");

  const handleTriggerInactivity = () => {
    setActiveScenario("inactivity");
    setSimulationState("evaluating");
    setActiveLog("Evaluating: 180 min gap in living room footfall. Cross-referencing afternoon quiet hours...");
    setTimeout(() => {
      setSimulationState("checkin_prompt");
      setActiveLog("Check-In Prompt Proposed: Sending quiet chime to living room console before alarming family.");
    }, 1800);
  };

  const handleTriggerFall = () => {
    setActiveScenario("fall");
    setSimulationState("evaluating");
    setActiveLog("Evaluating: 3.4g kinetic impact spike detected near hallway table. Postural recovery zero.");
    setTimeout(() => {
      setSimulationState("checkin_prompt");
      setActiveLog("Candidate Fall Detected: Grace period 60s active. Triage pending elder cancellation.");
    }, 1500);
  };

  const handleTriggerNoise = () => {
    setActiveScenario("noise");
    setSimulationState("evaluating");
    setActiveLog("Evaluating: Acoustic anomaly (86 dB crash) captured in kitchen. Classifying sound signature...");
    setTimeout(() => {
      setSimulationState("checkin_prompt");
      setActiveLog("Acoustic Alert: Sound signature consistent with fallen cookware. Initiating verbal check-in.");
    }, 1500);
  };

  const handleElderCheckIn = () => {
    setSimulationState("resolved");
    setActiveLog("Resolved: Elder confirmed 'I am OK' directly via room interface. Event marked nominal.");
    setTimeout(() => {
      setActiveScenario("nominal");
      setSimulationState("idle");
    }, 3000);
  };

  const handleCaregiverAck = () => {
    setSimulationState("acknowledged");
    setActiveLog("Acknowledged: Primary caregiver Kavita Rao claimed ownership of event. Escalation paused.");
  };

  const handleReset = () => {
    setActiveScenario("nominal");
    setSimulationState("idle");
    setActiveLog("Environment reset to nominal morning rhythm.");
  };

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="interactive-guardian">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <Container>
        <SectionHeading
          eyebrow="The Signature Spatial Experience"
          title="The Living Guardian Experience"
          titleAccent="Simulated Environment"
          description="Explore the spatial relationship between physical living rooms, subtle environmental sensing, and family care coordination. Test how the system handles uncertainty without causing panic."
        />

        {/* Live Scenario Control Deck */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gx-carbon border border-gx-border flex flex-wrap items-center justify-between gap-4 shadow-panel">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gx-citron" />
            <span className="text-xs font-mono uppercase tracking-wider text-gx-warmWhite font-bold">
              Simulate Environmental Event:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleTriggerInactivity}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeScenario === "inactivity"
                  ? "bg-gx-amber text-gx-obsidian font-bold"
                  : "bg-gx-obsidian text-gx-mineral border border-gx-border hover:border-gx-citron hover:text-gx-warmWhite"
              }`}
            >
              Simulate Unusual Inactivity
            </button>
            <button
              onClick={handleTriggerFall}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeScenario === "fall"
                  ? "bg-gx-vermilion text-gx-warmWhite font-bold"
                  : "bg-gx-obsidian text-gx-mineral border border-gx-border hover:border-gx-vermilion hover:text-gx-warmWhite"
              }`}
            >
              Simulate Kinetic Fall Spike
            </button>
            <button
              onClick={handleTriggerNoise}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeScenario === "noise"
                  ? "bg-gx-citron text-gx-obsidian font-bold"
                  : "bg-gx-obsidian text-gx-mineral border border-gx-border hover:border-gx-citron hover:text-gx-warmWhite"
              }`}
            >
              Simulate Acoustic Anomaly
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl text-xs font-mono text-gx-mineral hover:text-gx-warmWhite border border-gx-border/60 hover:bg-gx-graphite flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* State Banner */}
        <div className="mt-3 p-3.5 rounded-xl bg-gx-obsidian/80 border border-gx-border/70 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                simulationState === "checkin_prompt"
                  ? "bg-gx-vermilion animate-ping"
                  : simulationState === "evaluating"
                  ? "bg-gx-amber animate-pulse"
                  : simulationState === "acknowledged"
                  ? "bg-gx-citron"
                  : "bg-gx-citron"
              }`}
            />
            <span className="text-gx-warmWhite font-medium">{activeLog}</span>
          </div>

          {/* Interactive Response Triggers if alert active */}
          {simulationState === "checkin_prompt" && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleElderCheckIn}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-gx-citron text-gx-obsidian font-bold hover:bg-lime-400 transition-colors"
              >
                Elder: Tap &quot;I Am OK&quot;
              </button>
              <button
                onClick={handleCaregiverAck}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-gx-carbon text-gx-amber border border-gx-amber/40 hover:bg-gx-amber/10 transition-colors"
              >
                Caregiver: Acknowledge
              </button>
            </div>
          )}
        </div>

        {/* Signature Spatial Scene Mount */}
        <div className="mt-6">
          <LivingGuardianScene
            activeSimulatedEvent={
              activeScenario !== "nominal"
                ? {
                    room: activeScenario === "noise" ? "kitchen" : "living",
                    type: activeScenario === "fall" ? "fall" : activeScenario === "inactivity" ? "inactivity" : "noise",
                    timestamp: "Just now",
                    state: simulationState,
                  }
                : null
            }
          />
        </div>

        {/* Conceptual Transparency Notice */}
        <div className="mt-4 p-4 rounded-2xl bg-gx-obsidian/60 border border-gx-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-gx-mineral">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-gx-citron shrink-0" />
            <span>INTERACTIVE PROTOTYPE · SIMULATED DATA · ZERO REAL EXTERNAL DISPATCHES</span>
          </div>
          <span>Independent Residence Simulation</span>
        </div>
      </Container>
    </section>
  );
}
