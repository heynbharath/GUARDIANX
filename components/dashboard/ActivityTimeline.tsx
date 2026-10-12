"use client";

import React from "react";
import { AuditEvent } from "@/types/guardianx";
import { formatTimeAgo } from "@/lib/utils";
import { History, Shield, AlertTriangle, CheckCircle, Info, Download, Copy, Check } from "lucide-react";

interface ActivityTimelineProps {
  auditLogs: AuditEvent[];
}

export function ActivityTimeline({ auditLogs }: ActivityTimelineProps) {
  const [filter, setFilter] = React.useState<"all" | "alerts" | "resolved">("all");
  const [copied, setCopied] = React.useState(false);

  const filteredLogs = auditLogs.filter((log) => {
    if (filter === "alerts") return log.nextState === "detected" || log.nextState === "escalating";
    if (filter === "resolved") return log.nextState === "resolved" || log.nextState === "false_positive";
    return true;
  });

  const handleCopyLogs = () => {
    navigator.clipboard.writeText(JSON.stringify(auditLogs, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadLogs = () => {
    const blob = new Blob([JSON.stringify(auditLogs, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `guardianx_audit_trail_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs pb-2 border-b border-gx-border/40">
        <div className="flex items-center gap-2">
          <History className="w-3.5 h-3.5 text-gx-mint" />
          <span className="font-display font-semibold text-gx-text">
            Audit Trail & Event Log
          </span>
          <span className="font-mono text-[10px] text-gx-muted">
            ({filteredLogs.length}/{auditLogs.length})
          </span>
        </div>

        {/* Filter Pills and Export actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-gx-border/50 text-[10px] font-mono">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-2 py-0.5 rounded-lg transition-colors ${
                filter === "all" ? "bg-gx-mint text-[#08221a] font-bold" : "text-gx-muted hover:text-white"
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("alerts")}
              className={`px-2 py-0.5 rounded-lg transition-colors ${
                filter === "alerts" ? "bg-rose-500/30 text-rose-300 font-bold" : "text-gx-muted hover:text-white"
              }`}
            >
              Alerts
            </button>
            <button
              type="button"
              onClick={() => setFilter("resolved")}
              className={`px-2 py-0.5 rounded-lg transition-colors ${
                filter === "resolved" ? "bg-emerald-500/30 text-emerald-300 font-bold" : "text-gx-muted hover:text-white"
              }`}
            >
              Resolved
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopyLogs}
            className="px-2 py-1 rounded-lg bg-gx-panel/70 border border-gx-border text-[10px] font-mono text-gx-muted hover:text-gx-mint flex items-center gap-1 transition-colors"
            title="Copy audit log as JSON"
          >
            {copied ? <Check className="w-3 h-3 text-gx-mint" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? "Copied" : "JSON"}</span>
          </button>
          <button
            type="button"
            onClick={handleDownloadLogs}
            className="px-2 py-1 rounded-lg bg-gx-panel/70 border border-gx-border text-[10px] font-mono text-gx-muted hover:text-gx-mint flex items-center gap-1 transition-colors"
            title="Download audit log JSON file"
          >
            <Download className="w-3 h-3" />
            <span className="hidden xs:inline">Export</span>
          </button>
        </div>
      </div>

      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
        {filteredLogs.length === 0 ? (
          <div className="p-4 rounded-xl bg-gx-panel/30 border border-gx-border text-center text-xs text-gx-muted">
            No events match the selected filter.
          </div>
        ) : (
          filteredLogs.map((log) => {
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
