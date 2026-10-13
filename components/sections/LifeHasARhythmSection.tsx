"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Sun,
  Coffee,
  BookOpen,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface Moment {
  id: string;
  time: string;
  period: string;
  title: string;
  icon: any;
  observedSignal: string;
  whatCannotBeKnown: string;
  contextSignificance: string;
  reasonableNextStep: string;
  status: "nominal" | "calm" | "uncertainty" | "triage";
}

const MOMENTS: Moment[] = [
  {
    id: "m_01",
    time: "07:30 AM",
    period: "Morning Wake Window",
    title: "Balcony Tea & Footfall Transition",
    icon: Sun,
    observedSignal: "Bedroom to kitchen transit logged at 07:14 AM. Balcony sliding door contact cycled once.",
    whatCannotBeKnown: "The system does not know her mental mood or hydration level from this sensor alone.",
    contextSignificance: "Aligns with her daily routine of morning balcony gardening.",
    reasonableNextStep: "No action. Mark morning rhythm nominal.",
    status: "nominal",
  },
  {
    id: "m_02",
    time: "02:15 PM",
    period: "Afternoon Rest Window",
    title: "Quiet Reading Hour in Armchair",
    icon: BookOpen,
    observedSignal: "Zero kinetic transitions in hallway for 75 minutes. Reading chair ambient pressure active.",
    whatCannotBeKnown: "Whether she has fallen asleep deeply or is reading quietly.",
    contextSignificance: "This window is configured as her customary afternoon quiet time (13:30 – 15:30).",
    reasonableNextStep: "Maintain silent monitoring. Suppress false alarms during designated quiet hours.",
    status: "calm",
  },
  {
    id: "m_03",
    time: "05:10 PM",
    period: "Active Evening Window",
    title: "Missed Scheduled Kitchen Visit",
    icon: Clock,
    observedSignal: "No movement recorded since 04:00 PM. Customary evening tea preparation did not occur.",
    whatCannotBeKnown: "Whether she stepped out to chat with neighbor Mrs. Kulkarni or is unwell.",
    contextSignificance: "Gait transition usually occurs by 04:45 PM. The delay is anomalous.",
    reasonableNextStep: "Send gentle audio check-in prompt to living room console before alerting family.",
    status: "uncertainty",
  },
  {
    id: "m_04",
    time: "06:45 PM",
    period: "Post-Transit Window",
    title: "Kinetic Vector Anomaly & Zero Posture Change",
    icon: ShieldAlert,
    observedSignal: "Sudden acceleration spike (3.4g) followed by immediate stillness near hallway table.",
    whatCannotBeKnown: "Whether she tripped and fell or dropped a stack of books.",
    contextSignificance: "Coincides with lack of subsequent movement. High risk of genuine fall incident.",
    reasonableNextStep: "Initiate 60s haptic/voice check-in. Prepare primary contact dispatch for Kavita Rao.",
    status: "triage",
  },
];

export function LifeHasARhythmSection() {
  const [selectedMomentId, setSelectedMomentId] = useState<string>("m_03");

  const currentMoment = MOMENTS.find((m) => m.id === selectedMomentId) || MOMENTS[0];

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="rhythm">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container>
        <SectionHeading
          eyebrow="Routines & Context Engine"
          title="Not every signal is an emergency."
          titleAccent="Context changes everything."
          description="A prolonged silence during an afternoon nap is peaceful rest. The same silence during morning kitchen prep demands thoughtful inquiry. Explore how context transforms raw data into intelligent care."
        />

        {/* Interactive Timeline Bar */}
        <div className="mt-12 p-3 sm:p-4 rounded-2xl bg-[#091713] border border-gx-border flex flex-col md:flex-row items-center justify-between gap-3 shadow-panel">
          {MOMENTS.map((m, idx) => {
            const isSelected = m.id === selectedMomentId;
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMomentId(m.id)}
                className={`w-full md:w-auto flex-1 p-3.5 sm:p-4 rounded-xl text-left transition-all relative ${
                  isSelected
                    ? "bg-[#10271e] border border-gx-mint/40 shadow-sm"
                    : "bg-black/30 border border-transparent hover:border-gx-border"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`${isSelected ? "text-gx-mint font-bold" : "text-gx-muted"}`}>
                    {m.time}
                  </span>
                  <span
                    className={`text-[9px] uppercase px-1.5 py-0.5 rounded ${
                      m.status === "triage"
                        ? "bg-rose-500/20 text-rose-300"
                        : m.status === "uncertainty"
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? "text-gx-mint" : "text-gx-muted"
                    }`}
                  />
                  <span
                    className={`font-display font-semibold text-xs truncate ${
                      isSelected ? "text-gx-text" : "text-gx-muted"
                    }`}
                  >
                    {m.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Context Deep-Dive Comparison Display */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: What GuardianX Observes (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c221b] to-[#081512] border border-gx-border flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-gx-mint">{currentMoment.period}</span>
                <span className="text-gx-muted">{currentMoment.time}</span>
              </div>

              <h4 className="font-display font-bold text-xl text-gx-text mt-3">
                {currentMoment.title}
              </h4>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-black/40 border border-gx-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gx-mint block mb-1">
                    1. Observed Signal Telemetry
                  </span>
                  <p className="text-xs text-gx-text leading-relaxed">
                    {currentMoment.observedSignal}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-gx-border/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 block mb-1">
                    2. What The Signal Cannot Prove
                  </span>
                  <p className="text-xs text-gx-muted leading-relaxed">
                    A raw sensor cannot distinguish between peaceful resting, a forgotten task, or a serious stumble without contextual priors.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gx-border/40 text-[11px] font-mono text-gx-muted">
              Sample scenario data for research demonstration
            </div>
          </div>

          {/* Right Column: Context & Recommended Next Step (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#091814] border border-gx-border flex flex-col justify-between text-left space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-gx-emerald block mb-2">
                Why Additional Context Changes Everything
              </span>

              <h4 className="font-display font-extrabold text-2xl text-gx-text">
                Context-Aware Triage Engine
              </h4>
              <p className="text-sm text-gx-muted mt-2 leading-relaxed">
                {currentMoment.contextSignificance}
              </p>
            </div>

            {/* Step Action Box */}
            <div className="p-5 rounded-2xl bg-[#0c261e]/80 border border-gx-mint/30 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gx-mint flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Proposed GuardianX Response Protocol
              </span>
              <p className="text-sm font-display font-medium text-gx-text leading-snug">
                {currentMoment.reasonableNextStep}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gx-muted pt-2 border-t border-gx-border/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gx-emerald" />
                <span>Zero premature 911 / EMS alarms</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gx-emerald" />
                <span>Non-invasive check-in grace period</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
