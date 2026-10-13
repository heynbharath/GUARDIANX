"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Compass,
  Calendar,
  Sparkles,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Activity,
  Heart,
  Eye,
  Bell,
} from "lucide-react";

interface Capability {
  id: string;
  category: "prototype" | "planned" | "research";
  title: string;
  scopeLabel: string;
  description: string;
  techEnabler: string;
  roadmapStage: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "cap_01",
    category: "prototype",
    title: "Personal Routine Baseline Modeling",
    scopeLabel: "Interactive Prototype Available",
    description: "Evaluates day-to-day activity cadence against configured waking and resting windows.",
    techEnabler: "Deterministic time-window thresholds and sliding inactivity counters.",
    roadmapStage: "Stage 02 — Interactive Prototype",
  },
  {
    id: "cap_02",
    category: "prototype",
    title: "Unusual Inactivity & Footfall Awareness",
    scopeLabel: "Interactive Prototype Available",
    description: "Detects unexplained gaps in daily movement during customary morning and afternoon windows.",
    techEnabler: "Room presence state transitions and local grace-period check-in counters.",
    roadmapStage: "Stage 02 — Interactive Prototype",
  },
  {
    id: "cap_03",
    category: "prototype",
    title: "Candidate Kinetic Fall Impact Detection",
    scopeLabel: "Interactive Prototype Available",
    description: "Flags high-g acceleration spikes followed by zero postural motion as candidate triage events.",
    techEnabler: "Vector sum magnitude calculations with dampening filters in simulation.",
    roadmapStage: "Stage 02 — Interactive Prototype",
  },
  {
    id: "cap_04",
    category: "prototype",
    title: "Sensor Connectivity & Keep-Alive Tracking",
    scopeLabel: "Interactive Prototype Available",
    description: "Strictly distinguishes 'everything is fine' from 'sensor battery died or wireless node went offline'.",
    techEnabler: "Periodic keep-alive heartbeat parser with stale-state timeouts.",
    roadmapStage: "Stage 02 — Interactive Prototype",
  },
  {
    id: "cap_05",
    category: "prototype",
    title: "Non-Intrusive Family Check-in Workflows",
    scopeLabel: "Interactive Prototype Available",
    description: "Prompts elder via room audio chime and on-screen tap target before alerting family circle.",
    techEnabler: "Interactive grace-period timer and atomic state machine cancellation.",
    roadmapStage: "Stage 02 — Interactive Prototype",
  },
  {
    id: "cap_06",
    category: "prototype",
    title: "Append-Only Audit Trail & History",
    scopeLabel: "Interactive Prototype Available",
    description: "Maintains an immutable chronological record of every state transition, rationale, and actor.",
    techEnabler: "Typed audit event data structures with correlation IDs.",
    roadmapStage: "Stage 02 — Interactive Prototype",
  },
  {
    id: "cap_07",
    category: "planned",
    title: "Bayesian Multi-Sensor Fusion Engine",
    scopeLabel: "Planned Architecture",
    description: "Combines thermal ambient grid, acoustic decibel spikes, and kinetic vectors into calibrated uncertainty scores.",
    techEnabler: "Edge inference models running on local home hub hardware.",
    roadmapStage: "Stage 04 — Sensor Experimentation",
  },
  {
    id: "cap_08",
    category: "planned",
    title: "Compliant Family Messaging Integrations",
    scopeLabel: "Planned Architecture",
    description: "Delivers urgent triage cards to primary children via official WhatsApp Cloud API and automated voice calls.",
    techEnabler: "Webhook adapters with fallback to SMS gateway and priority voice alerts.",
    roadmapStage: "Stage 06 — Scoped Integrations",
  },
  {
    id: "cap_09",
    category: "research",
    title: "Subtle Gait Degradation & Frailty Trend Analysis",
    scopeLabel: "Future Research Initiative",
    description: "Long-term longitudinal analysis of daily transit speeds to detect gradual physical frailty weeks before a fall occurs.",
    techEnabler: "Longitudinal gait velocity indexing and academic clinical research partnerships.",
    roadmapStage: "Stage 05 — Safety Evaluation",
  },
];

export function FutureCapabilitiesSection() {
  const [filter, setFilter] = useState<"all" | "prototype" | "planned" | "research">("all");

  const filteredItems = filter === "all" ? CAPABILITIES : CAPABILITIES.filter((c) => c.category === filter);

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="capabilities">
      <Container>
        <SectionHeading
          eyebrow="Technology Roadmap"
          title="Future Capabilities & Research Horizon"
          titleAccent="Honest Scope Separation"
          description="We maintain rigorous academic and engineering honesty. Explore which capabilities are currently implemented in the interactive prototype, and which represent planned development and future research."
        />

        {/* Filter Navigation */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#091713] border border-gx-border max-w-xl mx-auto justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === "all"
                ? "bg-gx-emerald text-[#091713] font-bold shadow-sm"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            All Capabilities (9)
          </button>
          <button
            onClick={() => setFilter("prototype")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === "prototype"
                ? "bg-gx-emerald text-[#091713] font-bold shadow-sm"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Interactive Prototype (6)
          </button>
          <button
            onClick={() => setFilter("planned")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === "planned"
                ? "bg-amber-400 text-[#091713] font-bold shadow-sm"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Planned Architecture (2)
          </button>
          <button
            onClick={() => setFilter("research")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === "research"
                ? "bg-cyan-400 text-[#091713] font-bold shadow-sm"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Future Research (1)
          </button>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isProto = item.category === "prototype";
            const isPlanned = item.category === "planned";
            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-[#0a1b16]/70 border border-gx-border/80 hover:border-gx-mint/40 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[9px] font-mono uppercase px-2.5 py-1 rounded-full border font-bold ${
                        isProto
                          ? "bg-emerald-500/10 text-gx-emerald border-emerald-500/30"
                          : isPlanned
                          ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                          : "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                      }`}
                    >
                      {item.scopeLabel}
                    </span>
                    <span className="text-[10px] font-mono text-gx-muted">
                      {item.roadmapStage.split("—")[0]}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-gx-text mt-3.5 group-hover:text-gx-mint transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gx-muted mt-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gx-border/40 text-[11px] font-mono">
                  <span className="text-gx-mint font-semibold block mb-0.5">Underlying Enabler:</span>
                  <span className="text-gx-muted/90 leading-tight block">{item.techEnabler}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
