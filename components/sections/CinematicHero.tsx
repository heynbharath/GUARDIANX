"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LivingGuardianScene } from "@/components/sections/LivingGuardianScene";
import { ArrowDown, ArrowUpRight, Compass, Shield, Sparkles, CheckCircle2 } from "lucide-react";

export function CinematicHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[92vh] flex flex-col justify-center" id="top">
      {/* Deep Midnight Green & Forest Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-teal-400/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        {/* Editorial Monumental Headline Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[rgba(184,255,217,0.06)] border border-gx-border text-xs font-mono uppercase tracking-[0.2em] text-gx-mint">
            <span className="w-2 h-2 rounded-full bg-gx-emerald animate-pulse" />
            <span>A New Perspective on Independent Living</span>
          </div>

          {/* Main Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-gx-text leading-[1.01]">
            Care that sees{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gx-mint via-gx-emerald to-gx-lime block sm:inline">
              the bigger picture.
            </span>
          </h1>

          {/* Supporting Philosophy */}
          <p className="text-base sm:text-xl text-gx-muted leading-relaxed max-w-2xl mx-auto font-normal">
            GuardianX explores a more thoughtful way to support older adults living independently—connecting everyday patterns, potential safety signals, and coordinated family response in one intelligent experience.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#interactive-guardian">
              <Button size="lg" className="group shadow-glow text-sm">
                <span>Explore the Living Guardian</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="#human-truth">
              <Button variant="secondary" size="lg" className="group text-sm">
                <span>Discover the Vision</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-gx-mint" />
              </Button>
            </a>
          </div>

          {/* Core Guarantees of the Philosophy */}
          <div className="pt-6 border-t border-gx-border/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gx-muted max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gx-emerald shrink-0" />
              <span>Dignity Over Surveillance</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gx-emerald shrink-0" />
              <span>Rhythm & Context Awareness</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gx-emerald shrink-0" />
              <span>Coordinated Family Response</span>
            </div>
          </div>
        </div>

        {/* The Signature Visual: The Living Guardian Architectural Environment */}
        <div className="mt-8 max-w-6xl mx-auto relative" id="living-guardian-hero">
          <LivingGuardianScene />
        </div>

        {/* Discreet Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center text-gx-muted/70 text-xs font-mono gap-2">
          <span>SCROLL TO DISCOVER THE STORY</span>
          <ArrowDown className="w-4 h-4 text-gx-mint animate-bounce" />
        </div>
      </Container>
    </section>
  );
}
