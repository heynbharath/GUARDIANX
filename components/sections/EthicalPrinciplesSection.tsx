"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UserCheck, Compass, HeartHandshake, EyeOff, Shield } from "lucide-react";

export function EthicalPrinciplesSection() {
  const principles = [
    {
      num: "01",
      title: "Dignity",
      tagline: "Agency over obedience",
      icon: UserCheck,
      description:
        "Technology should respect the independence and self-determination of older adults. Systems must never make an autonomous person feel like a patient under surveillance in their own living room.",
      accent: "from-gx-mint/20 to-transparent",
    },
    {
      num: "02",
      title: "Context",
      tagline: "Caution over presumption",
      icon: Compass,
      description:
        "A sensor reading is an ambiguous signal, never clinical proof. A quiet afternoon is celebrated as restful recovery rather than falsely triggering emergency dispatches to children.",
      accent: "from-amber-400/20 to-transparent",
    },
    {
      num: "03",
      title: "Human Oversight",
      tagline: "Caregivers remain central",
      icon: HeartHandshake,
      description:
        "Algorithms never replace human inquiry, empathy, and family judgment. The platform guides communication and ownership; people make the compassionate care decisions.",
      accent: "from-gx-emerald/20 to-transparent",
    },
    {
      num: "04",
      title: "Privacy",
      tagline: "Data minimization by design",
      icon: EyeOff,
      description:
        "Sensitive biological patterns and personal movements are minimized, encrypted, and isolated to verified family relationships. No continuous optical feeds or invasive bedroom listening.",
      accent: "from-cyan-400/20 to-transparent",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-t border-gx-border/40 relative overflow-hidden" id="principles">
      <Container>
        <SectionHeading
          eyebrow="Ethical Foundations"
          title="Four core principles of"
          titleAccent="human-centered care."
          description="We reject fear-based marketing and intrusive surveillance. GuardianX is built upon four non-negotiable commitments to older adults and their families."
        />

        {/* Asymmetrical 4-Principle Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c221b] via-[#081713] to-[#050e0c] border border-gx-border/80 hover:border-gx-mint/40 transition-all relative overflow-hidden flex flex-col justify-between text-left group"
              >
                {/* Corner Gradient Accent */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${p.accent} blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-gx-mint tracking-widest font-bold">
                      PRINCIPLE // {p.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-black/40 border border-gx-border flex items-center justify-center text-gx-mint group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gx-text tracking-tight">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono text-gx-emerald mt-1 uppercase tracking-wider">
                    {p.tagline}
                  </div>

                  <p className="text-sm text-gx-muted mt-4 leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gx-border/40 text-[11px] font-mono text-gx-muted/80">
                  GuardianX Core Commitment
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
