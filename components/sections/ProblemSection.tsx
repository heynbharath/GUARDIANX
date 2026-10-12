import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UserCheck, EyeOff, Clock, HelpCircle } from "lucide-react";

export function ProblemSection() {
  const problemCards = [
    {
      icon: UserCheck,
      number: "01",
      title: "The Desire for Independence",
      description:
        "Older adults value their autonomy and desire to live in their own homes. Yet adult children and caregivers carry quiet, constant anxiety about whether everything is genuinely alright.",
    },
    {
      icon: EyeOff,
      number: "02",
      title: "Unnoticed Potential Falls",
      description:
        "When an unexpected stumble or fall occurs, a phone or emergency pendant across the room may be completely out of reach. Minutes turn into hours without anyone being alerted.",
    },
    {
      icon: Clock,
      number: "03",
      title: "Ambiguous Inactivity",
      description:
        "Is grandma resting peacefully with an afternoon book, or is she immobilized? Without continuous contextual awareness, distinguishing normal rest from emergency inactivity is nearly impossible remotely.",
    },
    {
      icon: HelpCircle,
      number: "04",
      title: "Fragmented Family Response",
      description:
        "When a suspicion arises, families face panic: Who calls first? Did someone check in? Who visits? Most families have no coordinated response plan or escalation protocol.",
    },
  ];

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="problem">
      <Container>
        <SectionHeading
          eyebrow="The Human Reality"
          title="Aging independently should not mean"
          titleAccent="worrying in isolation."
          description="Most safety systems rely on fear or constant surveillance. GuardianX explores a dignified, low-friction balance between individual privacy and compassionate family awareness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problemCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gx-panel/70 to-[#0b1915]/50 border border-gx-border hover:border-gx-mint/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent top gradient */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gx-mint/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[rgba(184,255,217,0.06)] border border-gx-border flex items-center justify-center text-gx-mint group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-gx-muted/70 tracking-widest">
                    ISSUE {card.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-gx-text mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gx-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
