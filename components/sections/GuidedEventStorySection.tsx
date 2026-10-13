"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AlertCircle,
  HelpCircle,
  PhoneCall,
  CheckCircle2,
  RotateCcw,
  ShieldAlert,
  ArrowRight,
  Clock,
  Sparkles,
  User,
  Users,
} from "lucide-react";

export type EventStoryState =
  | "NORMAL"
  | "SIGNAL_DETECTED"
  | "AWAITING_CHECK_IN"
  | "ACKNOWLEDGED"
  | "SIMULATED_ESCALATION"
  | "RESOLVED";

interface StoryStepMeta {
  state: EventStoryState;
  label: string;
  badgeColor: string;
  summary: string;
  detail: string;
  systemAction: string;
}

const STATE_METAS: Record<EventStoryState, StoryStepMeta> = {
  NORMAL: {
    state: "NORMAL",
    label: "Baseline Rhythm Nominal",
    badgeColor: "bg-gx-carbon text-gx-citron border-gx-citron/30",
    summary: "Ambient environmental sensors reflect ordinary routine cadence. No anomalies logged.",
    detail: "Living room reading chair pressure matches custom afternoon quiet hours (13:30–15:30).",
    systemAction: "Passive monitoring. Zero family alerts.",
  },
  SIGNAL_DETECTED: {
    state: "SIGNAL_DETECTED",
    label: "Unusual Inactivity Pattern Surfaced",
    badgeColor: "bg-gx-carbon text-gx-amber border-gx-amber/40",
    summary: "180-minute lack of footfall transition detected after customary rest window passed.",
    detail: "Sensor notes: Ananya usually visits the kitchen for 04:30 PM tea. Transit has not occurred by 05:15 PM.",
    systemAction: "Context evaluation active. Not declared as an emergency.",
  },
  AWAITING_CHECK_IN: {
    state: "AWAITING_CHECK_IN",
    label: "Local Living Room Check-in Prompt",
    badgeColor: "bg-gx-carbon text-gx-amber border-gx-amber/50",
    summary: "Gentle room chime emitted; 60-second non-intrusive grace period active.",
    detail: "Ananya can tap 'I am OK' on the living room console, immediately resetting state without disturbing family.",
    systemAction: "Grace period countdown running. Escalation queued if no response.",
  },
  ACKNOWLEDGED: {
    state: "ACKNOWLEDGED",
    label: "Primary Caregiver Claimed Event",
    badgeColor: "bg-gx-carbon text-gx-citron border-gx-citron/40",
    summary: "Daughter Kavita Rao claimed ownership in family response console.",
    detail: "Automatic emergency escalation paused. Kavita is calling Ananya's landline/home console to verify.",
    systemAction: "Escalation paused. Care circle notified that Kavita has ownership.",
  },
  SIMULATED_ESCALATION: {
    state: "SIMULATED_ESCALATION",
    label: "Escalated to Secondary Contact",
    badgeColor: "bg-gx-carbon text-gx-vermilion border-gx-vermilion/50",
    summary: "Primary contact unreached; simulated dispatch forwarded to Dr. Arvind Rao.",
    detail: "Secondary contact (son & physician) notified with room telemetry and last known activity timestamp.",
    systemAction: "Simulated dispatch sent to Contact #2. Zero real cellular calls placed.",
  },
  RESOLVED: {
    state: "RESOLVED",
    label: "Incident Audited & Resolved",
    badgeColor: "bg-gx-carbon text-gx-chalk border-gx-chalk/30",
    summary: "Check-in completed. Outcome documented with timestamped audit note.",
    detail: "Outcome verified: 'Ananya was reading peacefully on the balcony enjoying the cool evening breeze.'",
    systemAction: "Event closed. Nominal baseline restored.",
  },
};

export function GuidedEventStorySection() {
  const [currentState, setCurrentState] = useState<EventStoryState>("NORMAL");
  const [timeline, setTimeline] = useState<
    Array<{ state: EventStoryState; timestamp: string; note: string }>
  >([
    {
      state: "NORMAL",
      timestamp: "04:30 PM",
      note: "Baseline morning & afternoon telemetry nominal.",
    },
  ]);

  const transitionTo = (nextState: EventStoryState, note: string) => {
    setCurrentState(nextState);
    const newEntry = {
      state: nextState,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      note,
    };
    setTimeline((prev) => [newEntry, ...prev]);
  };

  const handleStartSignal = () => {
    transitionTo(
      "SIGNAL_DETECTED",
      "Gait transition delayed past 04:30 PM customary tea window. Context engine reviewing priors."
    );
  };

  const handlePromptCheckIn = () => {
    transitionTo(
      "AWAITING_CHECK_IN",
      "Living room console audio chime sent. 60s local elder check-in prompt running."
    );
  };

  const handleElderDismiss = () => {
    transitionTo(
      "RESOLVED",
      "Elder Ananya tapped 'I am OK' directly in living room. False alarm resolved locally."
    );
  };

  const handleCaregiverAck = () => {
    transitionTo(
      "ACKNOWLEDGED",
      "Kavita Rao (Daughter) claimed ownership in family console. Escalation paused."
    );
  };

  const handleEscalateSecondary = () => {
    transitionTo(
      "SIMULATED_ESCALATION",
      "Primary contact unreached after 3 minutes. Dispatched simulated alert to Dr. Arvind Rao."
    );
  };

  const handleCaregiverResolve = () => {
    transitionTo(
      "RESOLVED",
      "Kavita spoke to Ananya; verified she was reading peacefully on the balcony."
    );
  };

  const handleReset = () => {
    setCurrentState("NORMAL");
    setTimeline([
      {
        state: "NORMAL",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        note: "Simulation reset to nominal baseline state.",
      },
    ]);
  };

  const currentMeta = STATE_METAS[currentState];

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="event-story">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        <SectionHeading
          eyebrow="Interactive Event Simulation"
          title="From Signal to Response"
          titleAccent="Guided Event Workflow"
          description="Walk through a step-by-step hypothetical scenario. Experience how GuardianX distinguishes between uncertainty and genuine emergencies, provides local grace periods, and coordinates audited family responses."
        />

        {/* State Machine Status & Controls */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gx-carbon border border-gx-border shadow-panel text-left">
          {/* Top State Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gx-border/50">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gx-mineral">
                Current State Machine Phase
              </div>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-gx-warmWhite">
                  {currentMeta.label}
                </span>
                <span
                  className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase font-bold ${currentMeta.badgeColor}`}
                >
                  {currentMeta.state}
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono text-gx-mineral hover:text-gx-warmWhite border border-gx-border/60 hover:bg-gx-graphite flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Scenario
            </button>
          </div>

          {/* Interactive Action Controls per State */}
          <div className="py-6 border-b border-gx-border/50">
            <span className="text-xs font-mono uppercase text-gx-chalk block mb-3 font-semibold">
              Available Simulated Next Actions:
            </span>

            <div className="flex flex-wrap gap-2.5">
              {currentState === "NORMAL" && (
                <button
                  onClick={handleStartSignal}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-obsidian text-gx-amber border border-gx-amber/50 hover:bg-gx-amber/10 transition-all flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-gx-amber" />
                  1. Trigger Signal: Inactivity Past Customary Tea Time
                </button>
              )}

              {currentState === "SIGNAL_DETECTED" && (
                <>
                  <button
                    onClick={handlePromptCheckIn}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-obsidian text-gx-amber border border-gx-amber/50 hover:bg-gx-amber/10 transition-all flex items-center gap-2"
                  >
                    <Clock className="w-4 h-4 text-gx-amber" />
                    2. Initiate Local 60s Living Room Check-in Prompt
                  </button>
                  <button
                    onClick={handleElderDismiss}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-obsidian text-gx-citron border border-gx-citron/50 hover:bg-gx-citron/10 transition-all"
                  >
                    Elder Tap: &quot;I Am OK&quot;
                  </button>
                </>
              )}

              {currentState === "AWAITING_CHECK_IN" && (
                <>
                  <button
                    onClick={handleElderDismiss}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-citron text-gx-obsidian hover:bg-lime-400 transition-all"
                  >
                    Elder: Confirms Safe on Console
                  </button>
                  <button
                    onClick={handleCaregiverAck}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-vermilion text-gx-warmWhite hover:bg-gx-clay transition-all flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Caregiver: Claim Ownership & Call
                  </button>
                </>
              )}

              {currentState === "ACKNOWLEDGED" && (
                <>
                  <button
                    onClick={handleCaregiverResolve}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-vermilion text-gx-warmWhite hover:bg-gx-clay transition-all"
                  >
                    4. Resolve Event with Documented Outcome
                  </button>
                  <button
                    onClick={handleEscalateSecondary}
                    className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-obsidian text-gx-amber border border-gx-amber/50 hover:bg-gx-amber/10 transition-all flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-gx-amber" />
                    Simulate Escalation: Contact #2 (Dr. Arvind Rao)
                  </button>
                </>
              )}

              {currentState === "SIMULATED_ESCALATION" && (
                <button
                  onClick={handleCaregiverResolve}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-gx-vermilion text-gx-warmWhite hover:bg-gx-clay transition-all"
                >
                  Verify Secondary Contact Check & Resolve Incident
                </button>
              )}

              {currentState === "RESOLVED" && (
                <div className="flex items-center gap-2 text-xs font-mono text-gx-citron">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Scenario successfully completed. State machine terminal state reached.</span>
                </div>
              )}
            </div>
          </div>

          {/* Context Details Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-gx-obsidian/70 border border-gx-border/60 space-y-2">
              <span className="text-[10px] font-mono uppercase text-gx-chalk font-semibold block">
                Contextual Assessment
              </span>
              <p className="text-sm font-display text-gx-warmWhite leading-snug">
                {currentMeta.summary}
              </p>
              <p className="text-xs text-gx-mineral leading-relaxed">
                {currentMeta.detail}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gx-obsidian/70 border border-gx-border/60 space-y-2">
              <span className="text-[10px] font-mono uppercase text-gx-citron font-semibold block">
                Current GuardianX Protocol Execution
              </span>
              <p className="text-sm font-display text-gx-warmWhite leading-snug">
                {currentMeta.systemAction}
              </p>
              <div className="pt-2 text-[11px] font-mono text-gx-mineral">
                Strict state-machine invariant: illegal state bypasses are prevented by type checking.
              </div>
            </div>
          </div>

          {/* Event History Audit Timeline */}
          <div className="mt-6 pt-6 border-t border-gx-border/50">
            <span className="text-xs font-mono uppercase text-gx-mineral block mb-3">
              Event History Audit Trail ({timeline.length} Transitions)
            </span>

            <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-gx-obsidian border border-gx-border/60 flex items-center justify-between gap-3 text-xs font-mono"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gx-citron" />
                    <span className="text-gx-chalk font-bold uppercase">{item.state}</span>
                    <span className="text-gx-warmWhite text-xs font-sans truncate max-w-md">
                      {item.note}
                    </span>
                  </div>
                  <span className="text-gx-mineral text-[11px] shrink-0">{item.timestamp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Persistent Honest Disclosure */}
          <div className="mt-6 pt-4 border-t border-gx-border/40 text-[11px] font-mono text-gx-mineral flex items-center justify-between">
            <span>INTERACTIVE PROTOTYPE — SIMULATED DATA.</span>
            <span className="text-gx-citron">Zero external dispatches</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
