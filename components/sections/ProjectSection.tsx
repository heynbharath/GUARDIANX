"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_CONFIG } from "@/lib/project-config";
import {
  GraduationCap,
  GitCommit,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export function ProjectSection() {

  const roadmapStages = [
    {
      step: "01",
      name: "Concept & Problem Definition",
      status: "Completed",
      desc: "Identified caregiver anxiety, unobserved falls, and the need for non-stigmatizing remote safety.",
    },
    {
      step: "02",
      name: "Interactive Frontend Prototype",
      status: "Current Stage",
      desc: "Engineered high-fidelity Next.js prototype with typed alert state machine and scenario simulation.",
    },
    {
      step: "03",
      name: "User Research & Caregiver Feedback",
      status: "Planned",
      desc: "Conduct structured interviews with older adults and adult children in urban Bengaluru households.",
    },
    {
      step: "04",
      name: "Sensor Data & BLE Experimentation",
      status: "Planned",
      desc: "Test wearable BLE 5.3 IMU accelerometer datasets to benchmark fall-detection false alarm rates.",
    },
    {
      step: "05",
      name: "Safety Evaluation & Triage Testing",
      status: "Planned",
      desc: "Simulate failure modes, stale-packet timeouts, and evaluate check-in grace period usability.",
    },
    {
      step: "06",
      name: "Scoped Operational Integrations",
      status: "Planned",
      desc: "Explore compliant family communication channels (WhatsApp Cloud API / SMS fallback) and secure persistence.",
    },
  ];

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="project">
      <Container>
        <SectionHeading
          eyebrow="Academic & Research Context"
          title="Student research & engineering"
          titleAccent="and product roadmap."
          description="GuardianX is an early-stage product concept exploring how wearable sensing, transparent state machines, and coordinated family response workflows can support older adults living independently."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Initiative Identity & Engineering Card (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#122b22] to-[#081511] border border-gx-mint/30 shadow-panel space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gx-border/50">
              <div className="flex items-center gap-2 text-xs font-mono text-gx-mint uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-gx-lime" />
                <span>Project Identity</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-gx-emerald uppercase font-bold">
                Concept Prototype
              </span>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-gx-muted">
                PROJECT INITIATIVE
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gx-text mt-1">
                GuardianX
              </h3>
              <div className="text-xs font-mono text-gx-mint mt-1">
                Created by Sunaina Mohapatra
              </div>
            </div>

            {/* Structured Metadata Rows */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                <span className="text-gx-muted">Creator:</span>
                <span className="font-display font-bold text-gx-text">
                  Sunaina Mohapatra
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                <span className="text-gx-muted">Domain Category:</span>
                <span className="font-mono text-gx-mint">
                  Elderly Remote Safety & Spatial Coordination
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                <span className="text-gx-muted">Development Stage:</span>
                <span className="font-mono text-gx-lime">
                  Concept & Interactive Prototype
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                <span className="text-gx-muted">Signature Metaphor:</span>
                <span className="font-mono text-gx-text">
                  The Living Guardian (Ambient Room Mesh)
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/[0.04]">
                <span className="text-gx-muted">Architecture:</span>
                <span className="font-mono text-gx-mint">
                  Next.js 15 App Router + State Machine
                </span>
              </div>
            </div>

            {/* Ethical statement */}
            <div className="p-4 rounded-2xl bg-black/30 border border-gx-border/40 text-[11px] text-gx-muted leading-relaxed">
              <strong className="text-gx-text block mb-1 font-mono uppercase text-[10px]">
                Responsible Engineering Rationale:
              </strong>
              GuardianX adheres to strict privacy and academic integrity. No inflated clinical performance claims, artificial citations, or mock institutional endorsements are included.
            </div>
          </div>

          {/* Right Column: Incremental Roadmap (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-gx-border/40">
              <h3 className="font-display font-bold text-xl text-gx-text flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gx-mint" />
                <span>Incremental Development Roadmap</span>
              </h3>
              <span className="text-[11px] font-mono text-gx-muted">
                6 PHASES PLANNED
              </span>
            </div>

            <div className="space-y-4">
              {roadmapStages.map((stage) => {
                const isDone = stage.status === "Completed";
                const isCurrent = stage.status === "Current Stage";

                return (
                  <div
                    key={stage.step}
                    className={`p-5 rounded-2xl border transition-all ${
                      isCurrent
                        ? "bg-[#10271e] border-gx-mint/50 shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
                        : "bg-gx-panel/30 border-gx-border/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-gx-mint">
                          PHASE {stage.step}
                        </span>
                        <h4 className="font-display font-bold text-sm text-gx-text">
                          {stage.name}
                        </h4>
                      </div>
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                          isDone
                            ? "bg-emerald-950/40 text-gx-emerald border-emerald-500/30"
                            : isCurrent
                            ? "bg-lime-950/40 text-gx-lime border-lime-400/30"
                            : "bg-black/30 text-gx-muted border-gx-border"
                        }`}
                      >
                        {stage.status}
                      </span>
                    </div>
                    <p className="text-xs text-gx-muted leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
