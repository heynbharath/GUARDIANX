"use client";

import React from "react";
import { ActivityHourSample } from "@/types/guardianx";

interface ActivityChartProps {
  data: ActivityHourSample[];
}

export function ActivityChart({ data }: ActivityChartProps) {
  // SVG Area & Line Chart
  const width = 460;
  const height = 110;
  const paddingX = 15;
  const paddingY = 15;

  const points = data.map((item, idx) => {
    const x = paddingX + (idx / (data.length - 1)) * (width - 2 * paddingX);
    const y = height - paddingY - (item.movementIndex / 100) * (height - 2 * paddingY);
    return { x, y, ...item };
  });

  const pathD = points.reduce((acc, pt, idx) => {
    if (idx === 0) return `M ${pt.x} ${pt.y}`;
    const prev = points[idx - 1];
    const midX = (prev.x + pt.x) / 2;
    return `${acc} C ${midX} ${prev.y}, ${midX} ${pt.y}, ${pt.x} ${pt.y}`;
  }, "");

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-display font-semibold text-gx-text">
          12-Hour Movement Rhythm
        </span>
        <span className="font-mono text-[10px] text-gx-muted">
          SAMPLE TREND · 06:00 - 17:00
        </span>
      </div>

      <div className="relative w-full h-[120px] bg-gradient-to-b from-gx-panel/30 to-transparent rounded-xl border border-gx-border/40 p-2 overflow-hidden">
        {/* Subtle background horizontal grid lines */}
        <div className="absolute inset-x-2 top-1/4 h-[1px] bg-white/[0.03]" />
        <div className="absolute inset-x-2 top-2/4 h-[1px] bg-white/[0.03]" />
        <div className="absolute inset-x-2 top-3/4 h-[1px] bg-white/[0.03]" />

        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          role="img"
          aria-label="Graph of elder daily movement intensity"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#48d6a2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#48d6a2" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <path d={areaD} fill="url(#chartGradient)" />
          <path
            d={pathD}
            fill="none"
            stroke="#b8ffd9"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Points */}
          {points.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="2.5"
              fill="#b8ffd9"
              className="hover:r-4 transition-all"
            />
          ))}
        </svg>
      </div>

      {/* Axis time labels */}
      <div className="flex justify-between text-[9px] font-mono text-gx-muted px-1">
        {data.filter((_, i) => i % 2 === 0).map((d) => (
          <span key={d.timeLabel}>{d.timeLabel}</span>
        ))}
      </div>
    </div>
  );
}
