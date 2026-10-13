"use client";

import React, { useState } from "react";
import { Apple, Activity, AlertTriangle, CheckCircle, Sparkles, ChevronRight, Info } from "lucide-react";
import { DietaryRecommendation, HealthReportDeficiency } from "@/types/guardianx";

interface Props {
  deficiencies: HealthReportDeficiency[];
  recommendations: DietaryRecommendation[];
}

export function DietAndWellnessPanel({ deficiencies, recommendations }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredDiet =
    selectedCategory === "all"
      ? recommendations
      : recommendations.filter((r) => r.category === selectedCategory);

  return (
    <div className="p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gx-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gx-lime/10 border border-gx-lime/30 flex items-center justify-center text-gx-lime">
            <Apple className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-gx-text flex items-center gap-2">
              Dietary Guidance & Health Deficiencies
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gx-lime/10 text-gx-lime border border-gx-lime/30">
                Nutritional Triage
              </span>
            </h4>
            <p className="text-xs text-gx-muted">
              Clinical lab correlation, deficiency alerts, and curated food recommendations
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1 bg-gx-border/40 p-1 rounded-xl border border-gx-border">
          {["all", "breakfast", "lunch", "dinner", "hydration"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono capitalize transition-all ${
                selectedCategory === cat
                  ? "bg-gx-emerald text-[#091713] font-bold"
                  : "text-gx-muted hover:text-gx-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Part 1: Health Report & Deficiency Detection Card */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-gx-muted flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-gx-coral" />
            Lab Biomarkers & Nutritional Deficiencies
          </span>
          <span className="text-[11px] font-mono text-gx-muted">Last Lab Sync: 4 Days Ago</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {deficiencies.map((item) => {
            const isDeficient = item.status === "deficient";
            const isLow = item.status === "low";
            return (
              <div
                key={item.id}
                className={`p-4 rounded-xl border flex flex-col justify-between ${
                  isDeficient
                    ? "bg-rose-950/20 border-rose-500/40 text-left"
                    : isLow
                    ? "bg-amber-950/20 border-amber-500/40 text-left"
                    : "bg-emerald-950/20 border-emerald-500/40 text-left"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="font-display font-semibold text-sm text-gx-text">
                      {item.biomarker}
                    </h5>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        isDeficient
                          ? "bg-rose-500/20 text-rose-300"
                          : isLow
                          ? "bg-amber-500/20 text-amber-300"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-2 text-xs font-mono text-gx-text flex items-center gap-2">
                    <span className="font-bold text-sm">{item.measuredValue}</span>
                    <span className="text-gx-muted text-[11px]">Normal: {item.normalRange}</span>
                  </div>

                  <p className="text-xs text-gx-muted mt-2 leading-relaxed">
                    {item.impactSummary}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.06] text-[11px]">
                  <span className="text-gx-mint font-semibold block mb-0.5">Recommended Dietary Action:</span>
                  <span className="text-gx-muted/90 leading-tight block">{item.dietaryAction}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Curated Food & Meal Guidance */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-gx-muted block mb-3">
          Curated Meal Guidance & Food Prescriptions
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredDiet.map((diet) => (
            <div
              key={diet.id}
              className="p-4 rounded-xl bg-[#0c1e19]/60 border border-gx-border/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-gx-lime/10 text-gx-lime border border-gx-lime/20">
                    {diet.category} · {diet.targetNutrient}
                  </span>
                </div>

                <h5 className="font-display font-bold text-sm text-gx-text mt-2">
                  {diet.title}
                </h5>
                <p className="text-xs text-gx-muted mt-1 leading-relaxed">{diet.benefit}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-gx-border/40 space-y-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gx-emerald font-semibold">
                    ✓ Recommended Foods:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {diet.recommendedFoods.map((f, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-gx-emerald/10 text-gx-mint border border-gx-emerald/20"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {diet.foodsToAvoid.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-rose-400 font-semibold">
                      ✕ Limit / Avoid:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {diet.foodsToAvoid.map((f, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
