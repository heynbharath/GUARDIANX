import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 border-t border-gx-border/40 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <Container>
        <div className="p-10 sm:p-16 rounded-[36px] bg-gradient-to-b from-[#133025] to-[#071311] border border-gx-mint/25 text-center relative shadow-panel max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gx-mint/10 border border-gx-mint/20 text-xs font-mono uppercase tracking-widest text-gx-mint">
            <ShieldCheck className="w-4 h-4 text-gx-emerald" />
            <span>The GuardianX Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-gx-text tracking-tight leading-[1.08] max-w-2xl mx-auto">
            Technology should help people live independently—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gx-mint via-gx-emerald to-gx-lime block mt-1">
              not make independence feel out of reach.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gx-muted max-w-xl mx-auto leading-relaxed">
            GuardianX is an exploration into calmer, dignified elder care. Test the interactive safety dashboard to experience the proposed alert state machine in action.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="#demo">
              <Button size="lg" className="group shadow-glow">
                <span>Explore the Interactive Demo</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
            <a href="#project">
              <Button variant="secondary" size="lg">
                <span>Review Academic Project</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
