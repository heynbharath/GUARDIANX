"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Activity,
  Moon,
  Wifi,
  PhoneCall,
  Flame,
  FileText,
  Users2,
  Lock,
} from "lucide-react";

export function FeatureExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "prototype" | "planned">("all");

  const features = [
    {
      id: "fall",
      title: "Potential Fall Detection",
      icon: Activity,
      status: "Prototype",
      statusType: "prototype" as const,
      description:
        "Kinetic impact detection using multi-axis acceleration thresholds followed by sustained zero-motion verification.",
      requirements:
        "IMU accelerometer, calibrated vector sum threshold, high-g dampening filters.",
    },
    {
      id: "inactivity",
      title: "Unusual Inactivity Monitoring",
      icon: Moon,
      status: "Prototype",
      statusType: "prototype" as const,
      description:
        "Evaluates gaps in movement against customary waking hours without invasive optical surveillance cameras.",
      requirements:
        "Learned routine baseline, user-configurable quiet hours, time-window sliding threshold.",
    },
    {
      id: "connectivity",
      title: "Wearable Connectivity Awareness",
      icon: Wifi,
      status: "Prototype",
      statusType: "prototype" as const,
      description:
        "Distinguishes between 'everything is fine' and 'device battery died or Bluetooth disconnected'.",
      requirements:
        "Periodic BLE keep-alive beacons, stale-packet timeout handling, battery telemetry parser.",
    },
    {
      id: "checkin",
      title: "Family Check-in Workflows",
      icon: PhoneCall,
      status: "Prototype",
      statusType: "prototype" as const,
      description:
        "Non-intrusive haptic check-in prompt on wristband allowing wearer to signal safe status before alarms sound.",
      requirements:
        "On-screen capacitive touch target, countdown timer, immediate local dismissal.",
    },
    {
      id: "prioritization",
      title: "Alert Prioritization & Confidence",
      icon: Flame,
      status: "Planned",
      statusType: "planned" as const,
      description:
        "Confidence scoring engine that rates anomaly uncertainty and adjusts escalation urgency accordingly.",
      requirements:
        "Bayesian inference model, historical false-alarm weighting, contextual calendar sync.",
    },
    {
      id: "audit",
      title: "Event History & Audit Trail",
      icon: FileText,
      status: "Prototype",
      statusType: "prototype" as const,
      description:
        "Immutable append-only record of every state transition, actor acknowledgment, and resolution category.",
      requirements:
        "Correlation IDs, deterministic state machine validator, cryptographically verifiable logs.",
    },
    {
      id: "coordination",
      title: "Caregiver Coordination Circle",
      icon: Users2,
      status: "Planned",
      statusType: "planned" as const,
      description:
        "Sequential escalation protocol preventing duplicate panic by assigning explicit ownership to one primary caregiver.",
      requirements:
        "Priority order index, timeout-based fallback to secondary contacts, delivery acknowledgments.",
    },
    {
      id: "privacy",
      title: "Privacy-Conscious Data Handling",
      icon: Lock,
      status: "Future integration",
      statusType: "planned" as const,
      description:
        "Local feature extraction on the edge so sensitive raw motion and biometric data remain private.",
      requirements:
        "On-device TinyML inference, encrypted payload transmission, strict role-based access control.",
    },
  ];

  const filtered =
    selectedCategory === "all"
      ? features
      : features.filter((f) => f.statusType === selectedCategory);

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="features">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Capability Matrix"
            title="Engineered with purpose,"
            titleAccent="transparent in stage."
            description="Explore our modular capabilities. We clearly distinguish between what is interactive in this prototype and what is planned for future hardware and cloud phases."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-gx-panel/40 border border-gx-border self-start shrink-0">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                selectedCategory === "all"
                  ? "bg-gx-mint text-[#08221a] font-bold"
                  : "text-gx-muted hover:text-gx-text"
              }`}
            >
              All (8)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("prototype")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                selectedCategory === "prototype"
                  ? "bg-gx-mint text-[#08221a] font-bold"
                  : "text-gx-muted hover:text-gx-text"
              }`}
            >
              Prototype (5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory("planned")}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                selectedCategory === "planned"
                  ? "bg-gx-mint text-[#08221a] font-bold"
                  : "text-gx-muted hover:text-gx-text"
              }`}
            >
              Planned / Future (3)
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            const isPrototype = item.status === "Prototype";
            const isPlanned = item.status === "Planned";

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-gx-panel/40 border border-gx-border hover:border-gx-mint/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gx-mint/10 border border-gx-mint/20 flex items-center justify-center text-gx-mint group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        isPrototype
                          ? "bg-emerald-950/40 text-gx-emerald border-emerald-500/30"
                          : isPlanned
                          ? "bg-lime-950/40 text-gx-lime border-lime-400/30"
                          : "bg-blue-950/40 text-gx-blue border-blue-400/30"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-gx-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gx-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-gx-muted/80">
                  <span className="text-gx-mint block font-medium mb-0.5">
                    Technical Prerequisite:
                  </span>
                  <span>{item.requirements}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
