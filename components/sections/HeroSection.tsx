"use client";

import React from "react";
import { ArrowUpRight, ArrowDown, Activity, Heart, ShieldCheck, Radio, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" id="top">
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-400/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[rgba(184,255,217,0.06)] border border-gx-border text-xs font-mono uppercase tracking-[0.15em] text-gx-mint">
              <span className="w-2 h-2 rounded-full bg-gx-emerald animate-pulse" />
              <span>Next-Gen Elderly Remote Safety Concept</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-gx-text leading-[1.02]">
              Independence for them.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gx-mint via-gx-emerald to-gx-lime">
                Peace of mind for you.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-gx-muted leading-relaxed max-w-xl font-normal">
              GuardianX explores a smarter way to support older adults living independently—bringing wearable safety signals, family awareness, and a coordinated response experience into one thoughtful platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#demo">
                <Button size="lg" className="group shadow-glow">
                  <span>Explore Interactive Demo</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button variant="secondary" size="lg" className="group">
                  <span>Discover How It Works</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-gx-mint" />
                </Button>
              </a>
            </div>

            {/* Trust / Value Signals */}
            <div className="pt-6 border-t border-gx-border/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-gx-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gx-emerald shrink-0" />
                <span>Zero-Effort Wearer Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gx-emerald shrink-0" />
                <span>Transparent Family Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gx-emerald shrink-0" />
                <span>Coordinated Human Response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original CSS/SVG Wearable Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
            {/* Halo radar ring */}
            <div className="absolute w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] rounded-full border border-gx-mint/15 bg-radial-gradient flex items-center justify-center pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-full border border-dashed border-gx-mint/20 animate-spin-slow" />
              <div className="absolute w-[60%] h-[60%] rounded-full border border-gx-mint/10" />
            </div>

            {/* Wearable Device Mockup */}
            <div className="relative z-10 w-[170px] sm:w-[185px] h-[220px] sm:h-[230px] flex items-center justify-center -rotate-3 sm:-rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105 active:scale-95 drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] cursor-pointer select-none" title="Tap watch to test wearable interaction">
              {/* Strap behind body */}
              <div className="absolute w-[92px] sm:w-[100px] h-[290px] sm:h-[310px] rounded-[36px] bg-gradient-to-r from-[#1b2b24] via-[#3a5245] to-[#1a2c24] shadow-[inset_4px_0_8px_#0e1b15,inset_-4px_0_8px_#4c6656]" />

              {/* Watch Chassis */}
              <div className="relative z-10 w-[158px] sm:w-[172px] h-[195px] sm:h-[208px] rounded-[40px] sm:rounded-[44px] p-2 bg-gradient-to-br from-[#20362c] to-[#08130f] border-4 border-[#2d493c] shadow-[inset_0_0_0_2px_#597666,0_0_20px_rgba(72,214,162,0.25)] flex flex-col items-center justify-between py-3 sm:py-4 text-center">
                {/* Watch Status Header */}
                <div className="flex items-center justify-between w-full px-2.5 sm:px-3 text-[9px] font-mono text-gx-mint/80">
                  <span>GX-P2</span>
                  <span className="flex items-center gap-1 text-[8px] text-gx-emerald">
                    <Radio className="w-2.5 h-2.5 animate-pulse" />
                    BLE
                  </span>
                </div>

                {/* Heart Rate & Waveform Display */}
                <div className="my-auto space-y-1">
                  <div className="inline-flex p-1.5 rounded-full bg-emerald-500/15 text-gx-mint">
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 fill-current animate-ecg-pulse text-gx-mint" />
                  </div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-none">
                    72
                    <span className="text-[9px] sm:text-[10px] font-mono text-gx-muted uppercase tracking-wider block font-normal mt-0.5">
                      BPM · NOMINAL
                    </span>
                  </div>
                  {/* SVG ECG Waveform */}
                  <div className="w-20 sm:w-24 h-5 sm:h-6 mx-auto pt-1">
                    <svg viewBox="0 0 100 24" className="w-full h-full fill-none">
                      <path
                        d="M0 12H18L24 12L30 3L37 21L45 9L50 12H68L74 12L80 5L86 17L92 12H100"
                        stroke="#B8FFD9"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Device Micro Status Label */}
                <div className="text-[8px] font-mono tracking-widest uppercase text-gx-mint/70 border-t border-gx-border/40 pt-1.5 w-full">
                  SENSOR ACTIVE · WEARER OK
                </div>
              </div>
            </div>

            {/* Floating Telemetry Card 1 (System Status) */}
            <div className="absolute top-2 right-1 sm:top-4 sm:-right-4 z-20 p-2.5 sm:p-3.5 rounded-2xl bg-[#0a1b15]/90 backdrop-blur-md border border-gx-border shadow-panel text-left max-w-[135px] sm:max-w-[170px] animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] font-mono uppercase text-gx-muted tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-gx-emerald shadow-[0_0_8px_#48d6a2]" />
                System Status
              </div>
              <div className="font-display font-bold text-xs sm:text-sm text-gx-text mt-0.5 sm:mt-1">
                Care Circle Active
              </div>
              <div className="text-[9px] sm:text-[10px] text-gx-mint font-mono mt-0.5">
                Wearable · Cloud · Family
              </div>
            </div>

            {/* Floating Telemetry Card 2 (Activity Rhythm) */}
            <div className="absolute bottom-4 left-1 sm:bottom-8 sm:-left-6 z-20 p-2.5 sm:p-3.5 rounded-2xl bg-[#0a1b15]/90 backdrop-blur-md border border-gx-border shadow-panel text-left max-w-[130px] sm:max-w-[165px]">
              <div className="text-[8px] sm:text-[9px] font-mono uppercase text-gx-muted tracking-wider">
                Gait & Rhythm
              </div>
              <div className="font-display font-bold text-xs sm:text-sm text-gx-text mt-0.5 sm:mt-1">
                Morning Routine
              </div>
              {/* Mini visual rhythm bars */}
              <div className="flex items-end gap-1 h-4 sm:h-5 mt-1.5 sm:mt-2">
                <span className="w-1.5 h-2 rounded bg-gx-emerald/70" />
                <span className="w-1.5 h-3 sm:h-3.5 rounded bg-gx-emerald/80" />
                <span className="w-1.5 h-3.5 sm:h-4 rounded bg-gx-mint" />
                <span className="w-1.5 h-4 sm:h-5 rounded bg-gx-emerald" />
                <span className="w-1.5 h-2.5 sm:h-3 rounded bg-gx-emerald/80" />
                <span className="w-1.5 h-3.5 sm:h-4.5 rounded bg-gx-mint" />
                <span className="w-1.5 h-2 rounded bg-gx-emerald/60" />
              </div>
            </div>

            {/* Floating Telemetry Card 3 (Quiet Presence) */}
            <div className="hidden sm:block absolute -bottom-4 right-6 z-20 px-3 py-2 rounded-xl bg-[#0d221b]/80 backdrop-blur-sm border border-gx-border text-[10px] font-mono text-gx-muted">
              <span className="text-gx-lime font-medium">Concept:</span> Non-intrusive safety
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
