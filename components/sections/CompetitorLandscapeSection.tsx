"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink, Check, Layers, TableProperties, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CompetitorLandscapeSection() {
  const [showMatrix, setShowMatrix] = useState(false);
  const adjacentSolutions = [
    {
      name: "Apple Watch Fall Detection",
      vendor: "Apple Inc.",
      url: "https://support.apple.com/en-in/108896",
      focus: "Consumer Smartwatch · Automatic 911 / Emergency SOS Countdown",
      description:
        "Apple Watch detects hard falls, initiates a vibration and audio alarm, and dials emergency services automatically if the user remains immobile. Excellent hardware integration, but primarily tailored for individual wearer SOS rather than a dedicated family caregiving loop.",
    },
    {
      name: "Lively Mobile2",
      vendor: "Best Buy Health",
      url: "https://shop.lively.com/pages/personal-emergency-response",
      focus: "Dedicated Medical Alert Pendant · Professional Response Agent",
      description:
        "Pendant-style alert system with optional fall detection that connects wearers to a certified response call center. Provides peace of mind, but often feels clinical or stigmatizing for active older adults who dislike traditional panic pendants.",
    },
    {
      name: "Medical Guardian Flex",
      vendor: "Medical Guardian",
      url: "https://www.medicalguardian.com/medical-alert-systems/guardian-flex-fall-detection",
      focus: "Two-way Voice Cellular Device · Emergency Monitoring",
      description:
        "Wearable unit featuring two-way cellular voice and optional fall sensors. Primarily focused on third-party dispatcher routing rather than rich, collaborative family coordination workflows.",
    },
  ];

  const hypotheses = [
    {
      title: "Family-First Ownership",
      detail:
        "Rather than delegating immediately to a remote call center, GuardianX empowers adult children and trusted neighbors with clear, actionable context first.",
    },
    {
      title: "Explicit State Transparency",
      detail:
        "Unlike systems that simply report 'All Good' when a battery dies, GuardianX strictly distinguishes 'No Anomaly' from 'Device Stale' or 'Bluetooth Disconnected'.",
    },
    {
      title: "Device-Agnostic Adapter Model",
      detail:
        "Designed to ingest telemetry from consumer wearables (WearOS/Apple) or low-cost BLE bands, rather than locking families into proprietary medical hardware.",
    },
    {
      title: "Closed-Loop Escalation",
      detail:
        "Every event follows a deterministic state machine requiring an audited caregiver resolution, ensuring no check-in is forgotten or lost in family group chats.",
    },
  ];

  return (
    <section className="py-24 border-t border-gx-border/40 relative" id="landscape">
      <Container>
        <SectionHeading
          eyebrow="Market Context & Hypotheses"
          title="Standing on the shoulders of"
          titleAccent="existing safety solutions."
          description="We acknowledge existing wearable and personal emergency services. Our goal is not to reinvent the accelerometer, but to test whether a family-first response experience solves a distinct human problem better."
        />

        {/* Existing Market Landscape */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {adjacentSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-gx-panel/30 border border-gx-border hover:border-gx-mint/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-gx-mint uppercase tracking-wider">
                    {item.vendor}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gx-muted hover:text-gx-text inline-flex items-center gap-1 font-mono text-[10px]"
                    aria-label={`Official documentation for ${item.name}`}
                  >
                    <span>Official Doc</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h3 className="font-display font-bold text-lg text-gx-text mb-2">
                  {item.name}
                </h3>
                <div className="text-[11px] font-mono text-gx-lime mb-3">
                  {item.focus}
                </div>
                <p className="text-xs text-gx-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiation Hypotheses */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e241c] to-[#071311] border border-gx-mint/20 shadow-panel mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gx-lime uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Research Hypothesis</span>
            </div>
            <button
              type="button"
              onClick={() => setShowMatrix(!showMatrix)}
              className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl border border-gx-mint/30 bg-gx-panel/70 text-xs font-mono text-gx-mint hover:bg-gx-mint hover:text-[#08221a] transition-all flex items-center gap-2"
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>{showMatrix ? "Hide Feature Matrix" : "Inspect Feature Matrix Table"}</span>
            </button>
          </div>
          <h3 className="font-display font-bold text-2xl text-gx-text mb-3">
            Where GuardianX Proposes to Differentiate
          </h3>
          <p className="text-xs sm:text-sm text-gx-muted max-w-3xl mb-8 leading-relaxed">
            These four hypotheses represent our guiding research questions as we iterate with older adults and their families:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hypotheses.map((hypo, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-gx-mint/15 text-gx-mint flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-gx-text">
                    {hypo.title}
                  </h4>
                  <p className="text-xs text-gx-muted leading-relaxed mt-1">
                    {hypo.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Comparison Matrix Drawer */}
          {showMatrix && (
            <div className="mt-8 pt-8 border-t border-gx-border/50 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="text-xs font-mono text-gx-mint uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Side-by-Side Dimension Comparison</span>
                <span className="text-[10px] text-gx-muted">Horizontal scrollable on mobile</span>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-gx-border/60 bg-black/40">
                <table className="w-full text-left text-xs font-mono border-collapse min-w-[620px]">
                  <thead>
                    <tr className="border-b border-gx-border/60 bg-[#071612]">
                      <th className="p-3.5 text-gx-muted font-normal">Feature / Dimension</th>
                      <th className="p-3.5 text-gx-mint font-bold bg-gx-mint/5 border-x border-gx-mint/20">
                        GuardianX (Proposed)
                      </th>
                      <th className="p-3.5 text-gx-text">Apple Watch</th>
                      <th className="p-3.5 text-gx-text">Lively Mobile2</th>
                      <th className="p-3.5 text-gx-text">Medical Guardian</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    <tr>
                      <td className="p-3.5 text-gx-text font-medium">Primary Response Route</td>
                      <td className="p-3.5 text-gx-mint font-bold bg-gx-mint/5 border-x border-gx-mint/20">
                        Family Care Circle First
                      </td>
                      <td className="p-3.5 text-gx-muted">Direct 911 / EMS</td>
                      <td className="p-3.5 text-gx-muted">Call Center Agent</td>
                      <td className="p-3.5 text-gx-muted">Call Center Agent</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-gx-text font-medium">Form Factor Dignity</td>
                      <td className="p-3.5 text-gx-mint font-bold bg-gx-mint/5 border-x border-gx-mint/20">
                        Everyday Smart Band
                      </td>
                      <td className="p-3.5 text-gx-muted">Consumer Smartwatch</td>
                      <td className="p-3.5 text-gx-muted">Medical Panic Pendant</td>
                      <td className="p-3.5 text-gx-muted">Medical Clip/Pendant</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-gx-text font-medium">Stale / Disconnected Awareness</td>
                      <td className="p-3.5 text-gx-mint font-bold bg-gx-mint/5 border-x border-gx-mint/20">
                        Explicit Stale Alerting
                      </td>
                      <td className="p-3.5 text-gx-muted">Passive Bluetooth sync</td>
                      <td className="p-3.5 text-gx-muted">Periodic Battery Warn</td>
                      <td className="p-3.5 text-gx-muted">Periodic Battery Warn</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-gx-text font-medium">Immutable Resolution Audit</td>
                      <td className="p-3.5 text-gx-mint font-bold bg-gx-mint/5 border-x border-gx-mint/20">
                        Append-Only State Machine
                      </td>
                      <td className="p-3.5 text-gx-muted">Basic Health log</td>
                      <td className="p-3.5 text-gx-muted">Internal Dispatch log</td>
                      <td className="p-3.5 text-gx-muted">Internal Dispatch log</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-gx-text font-medium">Elder Grace Window Before Alarm</td>
                      <td className="p-3.5 text-gx-mint font-bold bg-gx-mint/5 border-x border-gx-mint/20">
                        Customizable 30-90s
                      </td>
                      <td className="p-3.5 text-gx-muted">Fixed 60s Haptic</td>
                      <td className="p-3.5 text-gx-muted">Immediate Call Hub</td>
                      <td className="p-3.5 text-gx-muted">Immediate Call Hub</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
