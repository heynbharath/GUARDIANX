"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Compass, ShieldCheck, Heart } from "lucide-react";

export function FutureOfCareSection() {
  return (
    <section className="py-24 md:py-36 border-t border-gx-border/40 relative overflow-hidden bg-gradient-to-b from-gx-obsidian via-gx-carbon to-gx-obsidian" id="vision">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gx-vermilion/8 rounded-full blur-[180px] pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gx-carbon border border-gx-border text-xs font-mono uppercase tracking-[0.2em] text-gx-chalk">
            <ShieldCheck className="w-4 h-4 text-gx-vermilion" />
            <span>The Horizon of Dignified Living</span>
          </div>

          {/* Monumental Concluding Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-gx-warmWhite tracking-tight leading-[1.05]">
            Technology should protect independence—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gx-chalk via-gx-vermilion to-gx-amber block mt-2">
              not replace it.
            </span>
          </h2>

          {/* Supporting Statement */}
          <p className="text-base sm:text-xl text-gx-mineral max-w-2xl mx-auto leading-relaxed font-normal">
            GuardianX is exploring a more thoughtful relationship between independent living, safety awareness, and the people who care.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="#interactive-guardian">
              <Button size="lg" className="group shadow-vermilionGlow text-sm">
                <span>Explore the Interactive Experience</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="#project">
              <Button variant="secondary" size="lg" className="text-sm">
                <span>Explore the Project & Creator</span>
              </Button>
            </a>
          </div>

          {/* Closing Quotation */}
          <div className="pt-12 border-t border-gx-border/40 text-xs font-mono text-gx-mineral flex items-center justify-center gap-2">
            <span>&ldquo;Independence for them. Peace of mind for you.&rdquo;</span>
            <span className="text-gx-vermilion">•</span>
            <span>Independent-Living Safety Intelligence</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
