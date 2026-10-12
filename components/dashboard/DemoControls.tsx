"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import {
  AlertTriangle,
  Clock,
  WifiOff,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface DemoControlsProps {
  onSimulateFall: () => void;
  onSimulateInactivity: () => void;
  onSimulateOffline: () => void;
  onSimulateCheckIn: () => void;
  onAcknowledge: () => void;
  onEscalate: () => void;
  onOpenResolveModal: () => void;
  onResetDemo: () => void;
  hasActiveAlert: boolean;
  canEscalate: boolean;
  canAcknowledge: boolean;
  isOffline: boolean;
}

export function DemoControls({
  onSimulateFall,
  onSimulateInactivity,
  onSimulateOffline,
  onSimulateCheckIn,
  onAcknowledge,
  onEscalate,
  onOpenResolveModal,
  onResetDemo,
  hasActiveAlert,
  canEscalate,
  canAcknowledge,
  isOffline,
}: DemoControlsProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#091814] border border-gx-mint/20 shadow-panel">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-gx-border/40">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gx-lime" />
            <h4 className="font-display font-bold text-base text-gx-text">
              Interactive Scenario Simulator
            </h4>
          </div>
          <p className="text-xs text-gx-muted mt-0.5">
            Trigger deterministic synthetic scenarios to observe state transitions, triage rules, and care circle dispatch.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={onResetDemo}
          className="shrink-0 text-xs border-gx-border hover:border-gx-mint"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
          <span>Reset Simulation</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Simulate Fall */}
        <Button
          variant="danger"
          size="sm"
          onClick={onSimulateFall}
          disabled={hasActiveAlert}
          className="w-full text-xs py-3 justify-start px-4"
        >
          <AlertTriangle className="w-4 h-4 mr-2 shrink-0" />
          <div className="text-left">
            <div className="font-bold">1. Simulate Fall Alert</div>
            <div className="text-[10px] opacity-80 font-normal">Kinetic spike trigger</div>
          </div>
        </Button>

        {/* Simulate Inactivity */}
        <Button
          variant="secondary"
          size="sm"
          onClick={onSimulateInactivity}
          disabled={hasActiveAlert}
          className="w-full text-xs py-3 justify-start px-4 border-amber-500/30 text-amber-300 hover:bg-amber-950/40"
        >
          <Clock className="w-4 h-4 mr-2 shrink-0 text-amber-400" />
          <div className="text-left">
            <div className="font-bold">2. Simulate Inactivity</div>
            <div className="text-[10px] opacity-80 font-normal">Waking window breach</div>
          </div>
        </Button>

        {/* Simulate Offline */}
        <Button
          variant="secondary"
          size="sm"
          onClick={onSimulateOffline}
          className="w-full text-xs py-3 justify-start px-4 text-gx-text hover:bg-zinc-800/60"
        >
          <WifiOff className="w-4 h-4 mr-2 shrink-0 text-zinc-400" />
          <div className="text-left">
            <div className="font-bold">
              {isOffline ? "Restore Connection" : "3. Wearable Offline"}
            </div>
            <div className="text-[10px] text-gx-muted font-normal">
              {isOffline ? "Reconnect device" : "Stale telemetry trigger"}
            </div>
          </div>
        </Button>

        {/* Normal Check-in */}
        <Button
          variant="secondary"
          size="sm"
          onClick={onSimulateCheckIn}
          className="w-full text-xs py-3 justify-start px-4 border-gx-emerald/30 text-gx-emerald hover:bg-emerald-950/40"
        >
          <UserCheck className="w-4 h-4 mr-2 shrink-0" />
          <div className="text-left">
            <div className="font-bold">4. Normal Check-in</div>
            <div className="text-[10px] opacity-80 font-normal">Elder tapped &lsquo;I&rsquo;m OK&rsquo;</div>
          </div>
        </Button>
      </div>

      {/* Response controls if active alert exists */}
      {hasActiveAlert && (
        <div className="mt-4 pt-4 border-t border-gx-border/40 flex flex-wrap items-center justify-between gap-3 text-xs bg-black/20 p-3 rounded-xl">
          <span className="font-mono text-gx-mint text-[11px]">
            Active Incident Workflow:
          </span>
          <div className="flex flex-wrap gap-2">
            {canAcknowledge && (
              <Button size="sm" variant="primary" onClick={onAcknowledge} className="text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                Acknowledge Alert
              </Button>
            )}
            {canEscalate && (
              <Button size="sm" variant="outline" onClick={onEscalate} className="text-xs">
                <ArrowRight className="w-3.5 h-3.5 mr-1" />
                Simulate Escalation
              </Button>
            )}
            <Button size="sm" variant="secondary" onClick={onOpenResolveModal} className="text-xs">
              Resolve Incident
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
