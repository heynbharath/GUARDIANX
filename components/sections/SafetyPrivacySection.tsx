import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldAlert, Lock, UserCheck, HeartHandshake, EyeOff, Scale } from "lucide-react";

export function SafetyPrivacySection() {
  const principles = [
    {
      icon: ShieldAlert,
      title: "Signals \u2260 Clinical Diagnosis",
      description:
        "A sudden accelerometer vector indicates anomalous kinetic movement, not a verified bone fracture or loss of consciousness. GuardianX treats sensor data as cues for human inquiry, never as automated medical declarations.",
    },
    {
      icon: UserCheck,
      title: "Human Confirmation is Primary",
      description:
        "A missed check-in suggests that the system cannot confirm safety\u2014it does not confirm harm. Human judgment, caregiver communication, and verified on-the-ground checks remain irreplaceable.",
    },
    {
      icon: EyeOff,
      title: "Strict Data Minimisation",
      description:
        "GuardianX is designed to reject continuous camera surveillance and intrusive audio recording. We evaluate edge features (motion cadence and check-in taps) rather than streaming invasive personal feeds.",
    },
    {
      icon: Lock,
      title: "Relationship-Scoped Access",
      description:
        "Elderly health and activity patterns belong solely to the wearer and their designated family circle. Authorization rules restrict access exclusively to verified family relationships.",
    },
    {
      icon: Scale,
      title: "Jurisdictional & Operational Realism",
      description:
        "Automated emergency dispatch cannot be activated with a simple software toggle. Real-world dispatch requires regional operational partnerships, PSAP validation, and explicit legal consent.",
    },
    {
      icon: HeartHandshake,
      title: "Co-Design with Older Adults",
      description:
        "Safety technology must respect elderly dignity. Interfaces are crafted with high contrast, large touch targets, tactile vibration cues, and clear controls that avoid feelings of helplessness.",
    },
  ];

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="safety">
      <Container>
        <SectionHeading
          eyebrow="Safety, Trust & Ethics"
          title="Responsible technology for"
          titleAccent="vulnerable moments."
          description="We take safety, privacy, and clinical boundaries seriously. Here is how GuardianX navigates the ethical imperatives of remote monitoring."
        />

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-3xl bg-gx-panel/30 border border-gx-border hover:border-gx-mint/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-gx-mint/10 border border-gx-mint/20 flex items-center justify-center text-gx-mint mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gx-text mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gx-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Medical & Regulatory Disclaimer Callout Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-rose-950/30 via-[#141d19] to-emerald-950/20 border border-rose-500/30 text-xs leading-relaxed space-y-3">
          <div className="flex items-center gap-2 font-mono text-gx-coral font-bold uppercase tracking-wider text-sm">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Important Medical & Emergency Disclaimer</span>
          </div>
          <p className="text-gx-muted">
            GuardianX is an academic and product concept prototype created by Sunaina Mohapatra. It is not a certified medical device (FDA, CE, or CDSCO), nor is it an active 911/112 emergency response dispatch service. It does not provide medical diagnoses, treatment, or clinical patient monitoring. In the event of a real medical emergency, individuals must immediately dial their local emergency services.
          </p>
        </div>
      </Container>
    </section>
  );
}
