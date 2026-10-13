"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Eye, Sparkles, PhoneForwarded, CheckCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyBuySection() {
  const sellingPoints = [
    {
      title: "Wearable Kinetic & Fall Detection",
      subtitle: "Multi-axis IMU + high-G spike triage",
      desc: "Immediate detection of hard impacts and prolonged post-fall immobility without requiring the senior to press a button.",
      category: "Safety Hardware",
    },
    {
      title: "Alexa-Style Voice Assistant",
      subtitle: "Hands-free voice recognition on wrist",
      desc: "Older adults can speak directly to the band to ask for medications, inquire about time, or speak hands-free with loved ones.",
      category: "Zero-Friction UX",
    },
    {
      title: "Acoustic & Noise Anomaly Sentinel",
      subtitle: "Detects breaking glass, crashes & cries",
      desc: "Listens for sudden acoustic spikes and distress sounds while strictly honoring privacy without continuous room recording.",
      category: "Contextual Sensing",
    },
    {
      title: "Medication & Clinic Appointment Reminders",
      subtitle: "Closed-loop adherence tracking",
      desc: "Real-time verification of whether daily blood pressure and diabetes doses were taken, giving children clarity from miles away.",
      category: "Health Management",
    },
    {
      title: "Dietary Guidance & Deficiency Alerts",
      subtitle: "Nutrition tailored to clinical lab reports",
      desc: "Identifies nutritional deficiencies (e.g. Vitamin D, Iron) and translates doctor advice into meal plans and hydration reminders.",
      category: "Wellness & Nutrition",
    },
    {
      title: "4-Tier Coordinated Emergency Escalation",
      subtitle: "Family · Home-Help · Ambulance · Neighbours",
      desc: "Ensures immediate, deterministic assistance is dispatched so no emergency is left unacknowledged or lost in group chats.",
      category: "Coordinated Response",
    },
    {
      title: "Caregiver & Home Help Dashboard",
      subtitle: "Real-time awareness for children & aides",
      desc: "A clean, shared view for working sons, daughters, and visiting home nurses to log care actions and review elder wellness.",
      category: "Family Peace of Mind",
    },
    {
      title: "Consent-Governed CCTV Visual Check",
      subtitle: "Dignity-first visual verification",
      desc: "Family can visually check on safety during alerts without violating privacy in private bedrooms or daily routines.",
      category: "Privacy & Oversight",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#06110e] border-t border-gx-border relative overflow-hidden" id="why-buy">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <SectionHeading
          eyebrow="Value Proposition & Business Case"
          title="Why Will Families & Seniors Buy GuardianX?"
          description="Addressing the deep anxiety adult children face when parents live alone, while providing elders with dignity, voice-driven ease, and comprehensive health support."
        />

        {/* Big Central Value Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0c221b] via-[#0e2c23] to-[#0c221b] border border-gx-mint/30 shadow-panel text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gx-emerald/10 border border-gx-emerald/30 text-xs font-mono text-gx-mint mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Core Value Proposition
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-gx-text leading-tight">
            &quot;Independence for them. Peace of mind for you.&quot;
          </h3>
          <p className="mt-4 text-base sm:text-lg text-gx-muted max-w-2xl mx-auto leading-relaxed">
            GuardianX bridges the gap between active independent living and medical emergency safety. Instead of a sterile panic pendant, it delivers an intelligent, voice-powered wellness and safety companion backed by trusted family response.
          </p>
        </div>

        {/* 8 Feature Buying Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sellingPoints.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60 hover:border-gx-mint/40 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gx-mint px-2 py-0.5 rounded bg-gx-mint/10 border border-gx-mint/20">
                  {item.category}
                </span>

                <h4 className="font-display font-bold text-base text-gx-text mt-3 group-hover:text-gx-mint transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs font-mono text-gx-emerald mt-1">{item.subtitle}</p>

                <p className="text-xs text-gx-muted mt-2.5 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gx-border/40 flex items-center justify-between text-[11px] font-mono text-gx-muted">
                <span>Pillar #{index + 1}</span>
                <CheckCircle className="w-4 h-4 text-gx-emerald" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
