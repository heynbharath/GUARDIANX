import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Watch,
  Cpu,
  ShieldAlert,
  GitBranch,
  LayoutDashboard,
  HeartHandshake,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export function ArchitectureSection() {
  const nodes = [
    {
      num: "01",
      icon: Watch,
      title: "Wearable & Sensors",
      subtitle: "Edge Data Capture",
      desc: "BLE 5.3 wristband with 6-DoF IMU & PPG pulse sensor. Samples gait cadence, impact spikes, and wear status.",
      badge: "INPUT LAYER",
    },
    {
      num: "02",
      icon: Cpu,
      title: "Signal Processing",
      subtitle: "Feature Extraction",
      desc: "Normalizes gravitational offsets, calculates vector magnitude (\u221a[x\u00b2+y\u00b2+z\u00b2]), and discards minor hand gestures.",
      badge: "ANALYSIS",
    },
    {
      num: "03",
      icon: ShieldAlert,
      title: "Safety Rules & AI",
      subtitle: "Confidence Scoring",
      desc: "Evaluates anomaly severity against waking routine baseline and quiet hours to generate calibrated confidence.",
      badge: "ASSESSMENT",
    },
    {
      num: "04",
      icon: GitBranch,
      title: "Alert State Machine",
      subtitle: "Deterministic Logic",
      desc: "Governs atomic state transitions (detected \u2192 pending_check_in \u2192 acknowledged \u2192 resolved) with append-only audit trail.",
      badge: "CORE ENGINE",
    },
    {
      num: "05",
      icon: LayoutDashboard,
      title: "Family Dashboard",
      subtitle: "Care Circle Interface",
      desc: "Live view of device battery, telemetry freshness, active incidents, and next recommended caregiver action.",
      badge: "VISIBILITY",
    },
    {
      num: "06",
      icon: HeartHandshake,
      title: "Human Response",
      subtitle: "Coordinated Escalation",
      desc: "Sequential caregiver outreach, manual phone check-in, verified on-site assistance, and logged incident closure.",
      badge: "RESOLUTION",
    },
  ];

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="architecture">
      <Container>
        <SectionHeading
          eyebrow="System Blueprint"
          title="Proposed technical architecture"
          titleAccent="from edge to family."
          description="A modular, adapter-based system designed for low latency, fault tolerance, and privacy. Built so sensors inform rather than dictate emergency decisions."
        />

        {/* Architecture Pipeline Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={node.num}
                className="p-7 rounded-3xl bg-gradient-to-b from-[#10271e]/80 to-[#091713] border border-gx-border relative flex flex-col justify-between group hover:border-gx-mint/30 transition-all shadow-panel"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-gx-mint font-bold tracking-widest">
                      {node.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/40 border border-gx-border text-[9px] font-mono text-gx-lime uppercase">
                      {node.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-gx-mint/10 border border-gx-mint/20 flex items-center justify-center text-gx-mint mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-gx-text">
                    {node.title}
                  </h3>
                  <div className="text-xs font-mono text-gx-muted/80 mb-2">
                    {node.subtitle}
                  </div>
                  <p className="text-xs text-gx-muted leading-relaxed">
                    {node.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gx-mint">
                  <span>Pipeline Node {node.num}</span>
                  {i < nodes.length - 1 && (
                    <span className="hidden lg:inline text-gx-muted/60">
                      \u2192
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Note Disclaimer */}
        <div className="mt-10 p-6 rounded-2xl bg-black/30 border border-gx-border text-xs font-mono text-gx-muted text-center max-w-3xl mx-auto">
          <span className="text-gx-lime font-bold uppercase">PROPOSED ARCHITECTURE NOTICE:</span>{" "}
          This diagram describes the target multi-tier engineering model. In the current student release, the Wearable and Cloud tiers are executed as an interactive, deterministic browser simulator.
        </div>
      </Container>
    </section>
  );
}
