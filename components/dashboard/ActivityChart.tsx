"use client";

import React from "react";
import { ActivityHourSample } from "@/types/guardianx";

interface ActivityChartProps {
  data: ActivityHourSample[];
}

export function ActivityChart({ data }: ActivityChartProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(2); // Default to 08:00 (peak active)
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

  const activePoint = selectedIndex !== null ? points[selectedIndex] : null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-gx-text">
            12-Hour Movement Rhythm
          </span>
          {activePoint && (
            <span className="px-2 py-0.5 rounded-full bg-gx-mint/15 text-gx-mint text-[10px] font-mono border border-gx-mint/30 animate-in fade-in">
              {activePoint.timeLabel} · {activePoint.movementIndex}% ({activePoint.status})
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] text-gx-muted">
          TAP TO INSPECT · 06:00 - 17:00
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

          {/* Interactive Points and large touch targets */}
          {points.map((pt, i) => {
            const isSelected = selectedIndex === i;
            return (
              <g
                key={i}
                className="cursor-pointer"
                onClick={() => setSelectedIndex(i)}
                onMouseEnter={() => setSelectedIndex(i)}
              >
                {/* Invisible large touch hit area */}
                <circle cx={pt.x} cy={pt.y} r="14" fill="transparent" />
                {isSelected && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="6.5"
                    fill="none"
                    stroke="#d7ff8f"
                    strokeWidth="2"
                    className="animate-ping"
                  />
                )}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isSelected ? "4.5" : "2.5"}
                  fill={isSelected ? "#d7ff8f" : "#b8ffd9"}
                  className="transition-all"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Axis time labels with interactive buttons */}
      <div className="flex justify-between text-[9px] font-mono text-gx-muted px-1">
        {data.filter((_, i) => i % 2 === 0).map((d) => (
          <button
            key={d.timeLabel}
            type="button"
            onClick={() => {
              const idx = data.findIndex((item) => item.timeLabel === d.timeLabel);
              if (idx !== -1) setSelectedIndex(idx);
            }}
            className="hover:text-gx-mint transition-colors cursor-pointer py-0.5"
          >
            {d.timeLabel}
          </button>
        ))}
      </div>
    </div>
  );
}
