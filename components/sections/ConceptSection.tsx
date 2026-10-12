import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Radio, Layers, Users, ArrowRight } from "lucide-react";

export function ConceptSection() {
  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="product">
      <Container>
        <SectionHeading
          eyebrow="The GuardianX Model"
          title="Three foundational principles of"
          titleAccent="connected care."
          description="Detection is only the starting point. GuardianX shifts the focus from noisy panic buttons to an intelligent, contextual, and coordinated safety cycle."
        />

        {/* Distinctive asymmetrical 3-column / highlight layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Pillar 1: Awareness */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-[#10271e]/90 to-[#0a1814]/80 border border-gx-border flex flex-col justify-between relative overflow-hidden group hover:border-gx-mint/30 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gx-mint tracking-wider">
                  01 / SENSE
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[10px] font-mono text-gx-emerald uppercase">
                  Passive Tracking
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gx-mint/10 border border-gx-mint/20 flex items-center justify-center text-gx-mint">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-gx-text pt-2">
                Awareness
              </h3>
              <p className="text-sm text-gx-muted leading-relaxed">
                Continuous telemetry captures wearable kinetic motion, gait changes, and sudden impact spikes. Wearers do not have to remember to push a button when incapacitated.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gx-border/50 text-xs font-mono text-gx-muted/80">
              <span className="text-gx-mint font-semibold">Inputs:</span> IMU Tri-axial Accelerometer · Gyroscope · Heart Rhythm
            </div>
          </div>

          {/* Pillar 2: Context (Centerpiece Highlight) */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-[#143529] to-[#0d221a] border border-gx-mint/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden group">
            {/* Top spotlight tag */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-gx-lime via-gx-mint to-gx-emerald" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gx-lime tracking-wider">
                  02 / UNDERSTAND
                </span>
                <span className="px-2.5 py-1 rounded-full bg-lime-950/40 border border-lime-400/30 text-[10px] font-mono text-gx-lime uppercase">
                  Contextual Engine
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gx-lime/10 border border-gx-lime/30 flex items-center justify-center text-gx-lime">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-gx-text pt-2">
                Context
              </h3>
              <p className="text-sm text-gx-muted leading-relaxed">
                A sensor spike is not an automatic diagnosis. GuardianX cross-checks device freshness, routine baseline hours, and wearer check-in signals to weed out false alarms while highlighting true anomalies.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gx-border/50 text-xs font-mono text-gx-lime/90">
              <span className="text-gx-text font-semibold">Confidence Scoring:</span> Distinguishes dropping the watch from genuine immobility.
            </div>
          </div>

          {/* Pillar 3: Response */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-[#10271e]/90 to-[#0a1814]/80 border border-gx-border flex flex-col justify-between relative overflow-hidden group hover:border-gx-mint/30 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gx-mint tracking-wider">
                  03 / ACT
                </span>
                <span className="px-2.5 py-1 rounded-full bg-teal-950/40 border border-teal-500/20 text-[10px] font-mono text-gx-mint uppercase">
                  Family Workflow
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gx-mint/10 border border-gx-mint/20 flex items-center justify-center text-gx-mint">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-gx-text pt-2">
                Response
              </h3>
              <p className="text-sm text-gx-muted leading-relaxed">
                When an anomaly persists, GuardianX coordinates a stepwise escalation: Wearer check-in → Primary caregiver notification → Secondary family responder → Resolution logging.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gx-border/50 text-xs font-mono text-gx-muted/80">
              <span className="text-gx-mint font-semibold">Audited Workflow:</span> Every acknowledgment and resolution is timestamped.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
