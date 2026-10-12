import React from "react";
import Link from "next/link";
import { Shield, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PROJECT_CONFIG } from "@/lib/project-config";

export function Footer() {
  return (
    <footer className="border-t border-gx-border bg-[#050e0c] pt-16 pb-12 text-gx-muted text-xs">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gx-border/50">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#top" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gx-lime to-gx-emerald flex items-center justify-center text-[#08221a]">
                <Shield className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-gx-text">
                guardian<span className="text-gx-mint">x</span>
              </span>
            </Link>
            <p className="text-gx-muted max-w-sm leading-relaxed">
              Detect a potential emergency. Understand the situation. Coordinate a
              response. Keep families informed. A dignified elderly remote safety
              platform concept.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={PROJECT_CONFIG.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gx-mint hover:underline font-mono text-[11px]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase text-gx-text tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="hover:text-gx-mint transition-colors">
                  Product Overview
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gx-mint transition-colors">
                  5-Stage Workflow
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-gx-mint transition-colors">
                  Interactive Dashboard
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-gx-mint transition-colors">
                  System Architecture
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-gx-mint transition-colors">
                  Safety & Ethics
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-gx-mint transition-colors">
                  Project & Research
                </a>
              </li>
            </ul>
          </div>

          {/* Concept Attribution & Context */}
          <div>
            <h4 className="font-mono text-xs uppercase text-gx-text tracking-wider mb-3">
              Project Context
            </h4>
            <div className="space-y-2 text-gx-muted">
              <p>
                <strong className="text-gx-text block">Initiative:</strong>
                GuardianX Safety Labs
              </p>
              <p>
                <strong className="text-gx-text block">Category:</strong>
                {PROJECT_CONFIG.category}
              </p>
              <p>
                <strong className="text-gx-text block">Status:</strong>
                {PROJECT_CONFIG.stage}
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Medical Simulation Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gx-muted/80">
          <div>
            © {new Date().getFullYear()} GuardianX · Elderly Remote Safety Concept Prototype.
          </div>
          <div className="max-w-xl text-center md:text-right">
            <span className="text-gx-lime font-mono">SIMULATION DISCLOSURE:</span> All
            sensor readings, fall detections, and notifications in this prototype are
            illustrative and simulated in-browser. This prototype does not connect to real
            emergency services, phone networks, or medical equipment.
          </div>
        </div>
      </Container>
    </footer>
  );
}
