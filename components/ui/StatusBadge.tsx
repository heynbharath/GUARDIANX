import React from "react";
import { cn } from "@/lib/utils";

export interface StatusBadgeProps {
  status: "stable" | "active" | "warning" | "critical" | "offline" | "demo";
  label?: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const configs = {
    stable: {
      text: label || "Stable",
      dotClass: "bg-gx-emerald shadow-[0_0_10px_#48d6a2]",
      badgeClass: "bg-emerald-950/40 text-gx-emerald border-emerald-500/20",
    },
    active: {
      text: label || "Active",
      dotClass: "bg-gx-mint shadow-[0_0_10px_#b8ffd9]",
      badgeClass: "bg-teal-950/40 text-gx-mint border-teal-400/20",
    },
    warning: {
      text: label || "Review Required",
      dotClass: "bg-amber-400 shadow-[0_0_10px_#fbbf24]",
      badgeClass: "bg-amber-950/40 text-amber-300 border-amber-500/30",
    },
    critical: {
      text: label || "Alert Triggered",
      dotClass: "bg-gx-coral shadow-[0_0_10px_#ff9b87]",
      badgeClass: "bg-rose-950/50 text-gx-coral border-rose-500/30",
    },
    offline: {
      text: label || "Device Offline",
      dotClass: "bg-zinc-500",
      badgeClass: "bg-zinc-900/60 text-zinc-400 border-zinc-700/40",
    },
    demo: {
      text: label || "Simulated Demo",
      dotClass: "bg-gx-lime shadow-[0_0_10px_#d7ff8f]",
      badgeClass: "bg-lime-950/30 text-gx-lime border-lime-400/30",
    },
  };

  const current = configs[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border font-medium select-none",
        current.badgeClass,
        className
      )}
    >
      <span className={cn("w-2 h-2 rounded-full", current.dotClass)} />
      {current.text}
    </span>
  );
}
