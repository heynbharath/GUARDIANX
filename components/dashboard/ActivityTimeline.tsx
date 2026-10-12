"use client";

import React from "react";
import { AuditEvent } from "@/types/guardianx";
import { formatTimeAgo } from "@/lib/utils";
import { History, Shield, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface ActivityTimelineProps {
  auditLogs: AuditEvent[];
}

export function ActivityTimeline({ auditLogs }: ActivityTimelineProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs pb-1 border-b border-gx-border/40">
        <div className="flex items-center gap-2">
          <History className="w-3.5 h-3.5 text-gx-mint" />
          <span className="font-display font-semibold text-gx-text">
            Audit Trail & Event Log
          </span>
        </div>
        <span className="font-mono text-[10px] text-gx-muted">
          APPEND-ONLY LOG ({auditLogs.length})
        </span>
      </div>

      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
        {auditLogs.length === 0 ? (
          <div className="p-4 rounded-xl bg-gx-panel/30 border border-gx-border text-center text-xs text-gx-muted">
            No events recorded yet.
          </div>
        ) : (
          auditLogs.map((log) => {
            const isAlert = log.nextState === "detected" || log.nextState === "escalating";
            const isResolved = log.nextState === "resolved";

            return (
              <div
                key={log.id}
                className="p-3.5 rounded-xl bg-gx-panel/40 border border-gx-border/50 text-xs space-y-1.5 transition-colors hover:border-gx-mint/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold text-gx-mint flex items-center gap-1.5">
                    {isAlert ? (
                      <AlertTriangle className="w-3 h-3 text-gx-coral" />
                    ) : isResolved ? (
                      <CheckCircle className="w-3 h-3 text-gx-emerald" />
                    ) : (
                      <Info className="w-3 h-3 text-gx-blue" />
                    )}
                    {log.previousState.toUpperCase()} → {log.nextState.toUpperCase()}
                  </span>
                  <time className="font-mono text-[10px] text-gx-muted">
                    {formatTimeAgo(log.timestamp)}
                  </time>
                </div>

                <div className="font-medium text-gx-text">{log.reason}</div>

                {log.note && (
                  <p className="text-[11px] text-gx-muted italic border-l-2 border-gx-mint/40 pl-2 py-0.5">
                    &ldquo;{log.note}&rdquo;
                  </p>
                )}

                <div className="flex items-center justify-between text-[10px] font-mono text-gx-muted/70 pt-1 border-t border-white/[0.04]">
                  <span>Actor: {log.actor.name} ({log.actor.type})</span>
                  <span>ID: {log.correlationId}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
