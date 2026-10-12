"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Watch, AlertTriangle, Cpu, Bell, CheckSquare, ChevronRight } from "lucide-react";

export function HowItWorksSection() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      icon: Watch,
      title: "Wearable Signal Generation",
      tag: "SENSOR INGESTION",
      description:
        "The wearable gathers high-frequency inertial movement, step cadence, and device wear status. Low-power telemetry streams to the local hub or mobile bridge.",
      scopeBadge: "Simulated in Demo · Planned for BLE Hardware",
      detail:
        "Raw 3-axis accelerometer and gyro data identify anomalous vectors (such as sudden deceleration followed by complete posture cessation).",
    },
    {
      step: "02",
      icon: Cpu,
      title: "Potential Event Identification",
      tag: "FEATURE EXTRACTION",
      description:
        "The safety engine evaluates the signature against safety thresholds, time of day, and prior activity baseline to determine whether the event warrants review.",
      scopeBadge: "Core Prototype Logic · Rule Evaluator",
      detail:
        "The system explicitly tags the event as 'candidate detected' rather than asserting a confirmed medical event.",
    },
    {
      step: "03",
      icon: AlertTriangle,
      title: "Triage & Check-in Prompt",
      tag: "CONTEXT & DISPATCH",
      description:
        "Before alarming family members, an optional haptic tap and screen prompt gives the older adult a configured window (e.g. 60–90s) to tap 'I am okay'.",
      scopeBadge: "Simulated State Machine · Active in Demo",
      detail:
        "If the elder cancels the prompt within the grace period, the event logs as a non-emergency. If no cancellation occurs, escalation begins.",
    },
    {
      step: "04",
      icon: Bell,
      title: "Caregiver Alert Transmission",
      tag: "ESCALATION DISPATCH",
      description:
        "The primary guardian receives an immediate notification with contextual telemetry (last known movement, battery, location confidence, and time).",
      scopeBadge: "Simulated in Demo · Future WhatsApp/SMS Adapter",
      detail:
        "In this prototype, notifications update the in-browser family dashboard and audit log without sending real external SMS or WhatsApp messages.",
    },
    {
      step: "05",
      icon: CheckSquare,
      title: "Acknowledgment & Resolution",
      tag: "HUMAN-IN-THE-LOOP",
      description:
        "A caregiver claims ownership with one tap, initiates a phone check-in, coordinates with family or neighbors, and closes the incident with a documented outcome.",
      scopeBadge: "Interactive in Demo · Append-only Audit",
      detail:
        "Acknowledgment stops automated escalation. The safety loop is not marked resolved until a human caregiver logs the outcome.",
    },
  ];

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="how-it-works">
      <Container>
        <SectionHeading
          eyebrow="End-to-End Flow"
          title="From first kinetic signal to"
          titleAccent="family resolution."
          description="Explore the five discrete stages of the GuardianX safety workflow. Transparent, auditable, and designed with human dignity at every step."
        />

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stage Selection List (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? "bg-[#122e23] border-gx-mint/50 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                      : "bg-gx-panel/40 border-gx-border/70 hover:bg-gx-panel/70 hover:border-gx-border"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-gx-mint text-[#08221a]"
                          : "bg-gx-panel text-gx-mint border border-gx-border group-hover:border-gx-mint/40"
                      }`}
                    >
                      {stage.step}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-wider text-gx-muted uppercase">
                        {stage.tag}
                      </div>
                      <div
                        className={`font-display font-bold text-sm sm:text-base ${
                          isActive ? "text-gx-text" : "text-gx-muted group-hover:text-gx-text"
                        }`}
                      >
                        {stage.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-gx-mint translate-x-1" : "text-gx-muted/40 group-hover:text-gx-muted"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Card (Right Column) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#10271e] to-[#091713] border border-gx-border relative shadow-panel">
            {/* Top Badge & Number */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gx-border/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gx-emerald shadow-[0_0_8px_#48d6a2]" />
                <span className="font-mono text-xs text-gx-mint uppercase tracking-wider font-semibold">
                  Stage {stages[activeStage].step} of 05
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-gx-panel border border-gx-border text-[11px] font-mono text-gx-lime">
                {stages[activeStage].scopeBadge}
              </span>
            </div>

            {/* Stage Title & Icon */}
            <div className="my-8 flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gx-mint/10 border border-gx-mint/20 flex items-center justify-center text-gx-mint shrink-0">
                {React.createElement(stages[activeStage].icon, { className: "w-7 h-7" })}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gx-text">
                  {stages[activeStage].title}
                </h3>
                <p className="mt-3 text-base text-gx-muted leading-relaxed">
                  {stages[activeStage].description}
                </p>
              </div>
            </div>

            {/* In-Depth Technical Rationale */}
            <div className="p-5 rounded-2xl bg-[#081512]/90 border border-gx-border/60 text-xs font-mono text-gx-muted leading-relaxed space-y-2">
              <div className="text-gx-text font-bold uppercase tracking-wider">
                Engineering Specification
              </div>
              <p>{stages[activeStage].detail}</p>
            </div>

            {/* Step sequence dots */}
            <div className="mt-8 pt-6 border-t border-gx-border/40 flex items-center justify-between text-xs font-mono text-gx-muted">
              <span>Timeline navigation</span>
              <div className="flex gap-2">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveStage(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeStage === i ? "w-6 bg-gx-mint" : "w-2 bg-gx-panel hover:bg-gx-muted"
                    }`}
                    aria-label={`Go to stage ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
