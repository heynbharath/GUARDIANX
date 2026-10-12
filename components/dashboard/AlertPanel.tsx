"use client";

import React from "react";
import { SafetyAlert, AlertState } from "@/types/guardianx";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldAlert, Sparkles, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface AlertPanelProps {
  alert: SafetyAlert | null;
  onAcknowledge: () => void;
  onEscalate: () => void;
  onOpenResolveModal: () => void;
  onMarkFalsePositive: () => void;
  isSimulating?: boolean;
}

export function AlertPanel({
  alert,
  onAcknowledge,
  onEscalate,
  onOpenResolveModal,
  onMarkFalsePositive,
  isSimulating,
}: AlertPanelProps) {
  if (!alert) {
    return (
      <div className="p-6 rounded-2xl bg-[rgba(184,255,217,0.02)] border border-gx-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-gx-emerald shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-gx-text">
              All Telemetry Systems Stable
            </div>
            <div className="text-xs text-gx-muted">
              No active safety alerts or pending check-ins for Ananya Rao.
            </div>
          </div>
        </div>
        <div className="font-mono text-xs text-gx-emerald/90 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gx-emerald animate-pulse" />
          Care Circle Standby
        </div>
      </div>
    );
  }

  const isCritical = alert.severity === "critical";
  const isPendingCheckIn = alert.state === "pending_check_in" || alert.state === "detected";
  const isEscalating = alert.state === "escalating";
  const isAcknowledged = alert.state === "acknowledged";

  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
        isCritical
          ? "bg-gradient-to-r from-rose-950/40 via-[#1a1215]/80 to-[#10271e]/70 border-rose-500/40 shadow-coralGlow"
          : "bg-gradient-to-r from-amber-950/40 via-[#181914]/80 to-[#10271e]/70 border-amber-500/40"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        {/* Left Side: Alert Header & Context */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge
              status={isCritical ? "critical" : "warning"}
              label={`State: ${alert.state.toUpperCase().replace("_", " ")}`}
            />
            <span className="text-xs font-mono text-gx-muted">
              Severity: <strong className="text-gx-text uppercase">{alert.severity}</strong>
            </span>
            <span className="text-xs font-mono text-gx-mint bg-gx-mint/10 px-2 py-0.5 rounded border border-gx-mint/20">
              Confidence: {Math.round(alert.confidenceScore * 100)}% (Simulated AI)
            </span>
            {alert.escalationLevel > 0 && (
              <span className="text-xs font-mono text-gx-lime bg-lime-950/50 px-2 py-0.5 rounded border border-lime-400/30">
                Escalation Level {alert.escalationLevel}
              </span>
            )}
          </div>

          <div className="flex items-start gap-3.5 pt-1">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isCritical
                  ? "bg-rose-500/20 text-gx-coral border border-rose-500/30"
                  : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
              }`}
            >
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-gx-text">
                {alert.title}
              </h4>
              <p className="text-xs sm:text-sm text-gx-muted leading-relaxed mt-1">
                {alert.description}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] text-xs font-mono flex items-center gap-2 text-gx-text">
            <span className="text-gx-lime font-bold uppercase shrink-0">
              Recommended Action:
            </span>
            <span>{alert.recommendedAction}</span>
          </div>
        </div>

        {/* Right Side: Working Alert Transition Controls */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 pt-2 lg:pt-0">
          {/* Acknowledge Button */}
          {alert.state !== "acknowledged" && (
            <Button
              size="sm"
              variant="primary"
              onClick={onAcknowledge}
              disabled={isSimulating}
              className="w-full sm:w-auto text-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
              <span>Acknowledge Alert</span>
            </Button>
          )}

          {/* Simulate Escalation to next contact */}
          {alert.state !== "resolved" && alert.escalationLevel < 2 && (
            <Button
              size="sm"
              variant="outline"
              onClick={onEscalate}
              disabled={isSimulating}
              className="w-full sm:w-auto text-xs"
            >
              <ArrowRight className="w-3.5 h-3.5 mr-1.5" />
              <span>Escalate to Contact {alert.escalationLevel + 1}</span>
            </Button>
          )}

          {/* Resolve Alert Button */}
          <Button
            size="sm"
            variant="secondary"
            onClick={onOpenResolveModal}
            disabled={isSimulating}
            className="w-full sm:w-auto text-xs border-gx-emerald/40 text-gx-emerald hover:bg-emerald-950/40"
          >
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            <span>Resolve & Log Outcome</span>
          </Button>

          {/* Mark False Positive */}
          <Button
            size="sm"
            variant="ghost"
            onClick={onMarkFalsePositive}
            disabled={isSimulating}
            className="w-full sm:w-auto text-xs text-zinc-400 hover:text-zinc-200"
          >
            <XCircle className="w-3.5 h-3.5 mr-1.5" />
            <span>Mark False Alarm</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
