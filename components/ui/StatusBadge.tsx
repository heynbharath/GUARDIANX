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
      text: label || "Nominal",
      dotClass: "bg-gx-citron shadow-[0_0_10px_rgba(212,228,90,0.5)]",
      badgeClass: "bg-gx-carbon/80 text-gx-citron border-gx-citron/30",
    },
    active: {
      text: label || "Active",
      dotClass: "bg-gx-chalk shadow-[0_0_10px_rgba(233,225,210,0.5)]",
      badgeClass: "bg-gx-carbon/80 text-gx-chalk border-gx-chalk/30",
    },
    warning: {
      text: label || "Review Required",
      dotClass: "bg-gx-amber shadow-[0_0_10px_rgba(221,168,94,0.5)]",
      badgeClass: "bg-gx-carbon/90 text-gx-amber border-gx-amber/40",
    },
    critical: {
      text: label || "Alert Triggered",
      dotClass: "bg-gx-vermilion shadow-[0_0_10px_rgba(198,91,61,0.6)]",
      badgeClass: "bg-gx-carbon/90 text-gx-vermilion border-gx-vermilion/50",
    },
    offline: {
      text: label || "Device Offline",
      dotClass: "bg-gx-mineral",
      badgeClass: "bg-gx-carbon/60 text-gx-mineral border-gx-graphite",
    },
    demo: {
      text: label || "Simulated Prototype",
      dotClass: "bg-gx-citron shadow-[0_0_10px_rgba(212,228,90,0.5)]",
      badgeClass: "bg-gx-carbon/80 text-gx-citron border-gx-citron/30",
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
