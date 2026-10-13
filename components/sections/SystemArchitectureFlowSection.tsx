"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Radio,
  Cpu,
  HelpCircle,
  ShieldAlert,
  PhoneForwarded,
  HeartHandshake,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface LayerItem {
  id: string;
  stageNum: string;
  name: string;
  subtitle: string;
  icon: any;
  purpose: string;
  implementationStatus: "Prototype Implemented" | "Planned Rule Architecture" | "Future Research Integration";
  statusColor: string;
  details: string;
  honestLimitation: string;
}

const LAYERS: LayerItem[] = [
  {
    id: "layer_01",
    stageNum: "01",
    name: "Environmental & Ambient Signals",
    subtitle: "Passive Room & Kinetic Telemetry",
    icon: Radio,
    purpose: "Ingests passive ambient presence, doorway contact switches, bed pressure nodes, and acoustic thresholds without optical cameras.",
    implementationStatus: "Prototype Implemented",
    statusColor: "text-gx-emerald bg-emerald-500/10 border-emerald-500/30",
    details: "Simulated in browser with deterministic room models (accelerometer vector magnitude, BLE keep-alives, and ambient sound classification).",
    honestLimitation: "Hardware units are conceptual. No real radio transceivers or physical apartment sensors are active in this browser demo.",
  },
  {
    id: "layer_02",
    stageNum: "02",
    name: "Signal Interpretation",
    subtitle: "Feature Extraction & Anomaly Isolation",
    icon: Cpu,
    purpose: "Distinguishes trivial transients (dropped utensils, adjusting slippers) from sustained physical immobility or high-g deceleration.",
    implementationStatus: "Prototype Implemented",
    statusColor: "text-gx-emerald bg-emerald-500/10 border-emerald-500/30",
    details: "Evaluates multi-axis kinetic vectors (3.8g candidate threshold) and time-window sliding gap counters.",
    honestLimitation: "Uses deterministic mathematical heuristics. Does not claim medical diagnostic accuracy or FDA-cleared fall detection.",
  },
  {
    id: "layer_03",
    stageNum: "03",
    name: "Context & Uncertainty Calibration",
    subtitle: "Routine Priors & Quiet Hours Weighting",
    icon: HelpCircle,
    purpose: "Scores uncertainty rather than asserting a medical emergency. Evaluates whether inactivity coincides with customary rest windows.",
    implementationStatus: "Planned Rule Architecture",
    statusColor: "text-amber-300 bg-amber-500/10 border-amber-500/30",
    details: "Applies personal baseline calendar profiles (e.g. 13:30–15:30 quiet reading hours) to weight alert confidence.",
    honestLimitation: "Model confidence percentages in the prototype are simulated illustrative indices, not clinically validated Bayesian posteriors.",
  },
  {
    id: "layer_04",
    stageNum: "04",
    name: "Alert State Machine",
    subtitle: "Deterministic Atomic Transition Engine",
    icon: ShieldAlert,
    purpose: "Guarantees that no incident is left in an unhandled state. Governs state transitions with an append-only audit trail.",
    implementationStatus: "Prototype Implemented",
    statusColor: "text-gx-emerald bg-emerald-500/10 border-emerald-500/30",
    details: "Fully verified via Vitest automated test suite (`lib/alert-state-machine.ts`). Rejects illegal state jumps and mandates documented outcomes.",
    honestLimitation: "Operates in-memory in the client browser. Production persistence with cryptographic event signing is planned.",
  },
  {
    id: "layer_05",
    stageNum: "05",
    name: "Family Check-In & Grace Period",
    subtitle: "Non-Intrusive Local Cancellation",
    icon: PhoneForwarded,
    purpose: "Prompts the older adult via gentle living room chime or console tap before sounding alarms, preserving dignity and avoiding false panic.",
    implementationStatus: "Prototype Implemented",
    statusColor: "text-gx-emerald bg-emerald-500/10 border-emerald-500/30",
    details: "60 to 90-second configurable grace window allowing elder 'I am OK' dismissal before secondary escalation.",
    honestLimitation: "Check-in confirmation in the prototype is browser-simulated. Real-world dispatch requires regional telecom validation.",
  },
  {
    id: "layer_06",
    stageNum: "06",
    name: "Human Response & Escalation",
    subtitle: "Closed-Loop Care Circle Dispatch",
    icon: HeartHandshake,
    purpose: "Guides designated adult children, trusted neighbors, and home care aides through an audited response workflow with single ownership.",
    implementationStatus: "Future Research Integration",
    statusColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
    details: "4-tier contact tree (Primary Child -> Home Nurse -> EMS Emergency Dispatch -> Adjacent Keyholder Neighbour).",
    honestLimitation: "Automated SMS/WhatsApp dispatches are simulated. Zero external cellular messages or emergency 108/911 calls are placed.",
  },
];

export function SystemArchitectureFlowSection() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>("layer_03");

  const currentLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[0];

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="architecture">
      <Container>
        <SectionHeading
          eyebrow="Proposed Technical Architecture"
          title="A system designed around"
          titleAccent="human clarity."
          description="A layered, deterministic architecture that transitions gently from physical room telemetry to human caregiver resolution. Select any layer to inspect its technical role and honest implementation status."
        />

        {/* Spatial Layer Stack Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Vertical Stack (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {LAYERS.map((layer, idx) => {
              const isSelected = layer.id === selectedLayerId;
              const Icon = layer.icon;
              return (
                <div key={layer.id} className="relative">
                  <button
                    onClick={() => setSelectedLayerId(layer.id)}
                    className={`w-full p-4 sm:p-5 rounded-2xl text-left transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-[#10271e] border-2 border-gx-mint/50 shadow-glow"
                        : "bg-[#091713] border border-gx-border/80 hover:border-gx-mint/30"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-gx-emerald/20 border-gx-mint text-gx-mint"
                            : "bg-black/40 border-gx-border text-gx-muted"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-gx-mint font-bold">
                            LAYER {layer.stageNum}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-2 py-0.2 rounded border ${layer.statusColor}`}
                          >
                            {layer.implementationStatus}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-gx-text mt-0.5">
                          {layer.name}
                        </h4>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-gx-muted hidden sm:block">
                      {layer.subtitle}
                    </div>
                  </button>

                  {/* Flow arrow between layers */}
                  {idx < LAYERS.length - 1 && (
                    <div className="flex justify-center my-1 pointer-events-none opacity-40">
                      <ArrowDown className="w-3.5 h-3.5 text-gx-mint" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Layer Deep Dive Inspection Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c221b] to-[#071311] border border-gx-mint/30 shadow-panel text-left space-y-6 sticky top-28">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gx-mint px-2 py-0.5 rounded bg-gx-mint/10 border border-gx-mint/20">
                  Layer Deep Dive · Stage {currentLayer.stageNum}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${currentLayer.statusColor}`}
                >
                  {currentLayer.implementationStatus}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-gx-text mt-3">
                {currentLayer.name}
              </h3>
              <p className="text-xs font-mono text-gx-emerald mt-1">
                {currentLayer.subtitle}
              </p>

              <p className="text-sm text-gx-text/90 mt-4 leading-relaxed">
                {currentLayer.purpose}
              </p>
            </div>

            {/* Implementation Reality vs Limitation */}
            <div className="space-y-3 pt-4 border-t border-gx-border/50">
              <div className="p-3.5 rounded-xl bg-black/40 border border-gx-border/60">
                <span className="text-[10px] font-mono uppercase text-gx-mint block mb-1">
                  Technical Implementation Scope
                </span>
                <p className="text-xs text-gx-muted leading-relaxed">
                  {currentLayer.details}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
                <span className="text-[10px] font-mono uppercase text-rose-300 block mb-1">
                  Honest Scope Limitation
                </span>
                <p className="text-xs text-rose-200/80 leading-relaxed">
                  {currentLayer.honestLimitation}
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono text-gx-muted flex items-center gap-1.5 pt-2">
              <Sparkles className="w-3.5 h-3.5 text-gx-lime" />
              <span>Designed with strict deterministic state boundaries</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
