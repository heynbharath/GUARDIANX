"use client";

import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SafetyAlert } from "@/types/guardianx";

interface OutcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (category: SafetyAlert["outcomeCategory"], note: string) => void;
  alertTitle: string;
}

export function OutcomeModal({
  isOpen,
  onClose,
  onSubmit,
  alertTitle,
}: OutcomeModalProps) {
  const [category, setCategory] = useState<SafetyAlert["outcomeCategory"]>("fall_assisted");
  const [note, setNote] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(category, note || "Situation reviewed and resolved by family.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-3xl bg-[#0f241c] border border-gx-border p-6 shadow-2xl relative text-left">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-gx-muted hover:text-white hover:bg-gx-panel border border-gx-border"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <CheckCircle className="w-5 h-5 text-gx-emerald" />
          <h3 className="font-display font-bold text-lg text-gx-text">
            Resolve Safety Alert
          </h3>
        </div>
        <p className="text-xs text-gx-muted mb-5">
          Record resolution details for audit history: <strong className="text-gx-text">{alertTitle}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-gx-muted uppercase mb-1.5">
              Outcome Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as SafetyAlert["outcomeCategory"])}
              className="w-full bg-[#081512] border border-gx-border rounded-xl px-3.5 py-2.5 text-xs text-gx-text focus:outline-none focus:ring-1 focus:ring-gx-mint font-sans"
            >
              <option value="fall_assisted">Fall Assisted (Caregiver / Neighbor checked)</option>
              <option value="inactivity_resting">Inactivity Resolved (Elder was resting peacefully)</option>
              <option value="false_alarm_movement">False Alarm (Transient vibration or bed transition)</option>
              <option value="device_issue">Device Issue (Low battery / Connection restored)</option>
              <option value="other">Other Outcome Documented</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-gx-muted uppercase mb-1.5">
              Caregiver Note
            </label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g., Called Ananya on phone; she is seated having tea and confirmed she is safe."
              className="w-full bg-[#081512] border border-gx-border rounded-xl p-3 text-xs text-gx-text placeholder:text-gx-muted/40 focus:outline-none focus:ring-1 focus:ring-gx-mint font-sans resize-none"
            />
          </div>

          <div className="p-2.5 rounded-xl bg-black/30 border border-gx-border/40 text-[11px] font-mono text-gx-muted">
            <span className="text-gx-lime">Audit Invariant:</span> Every resolution appends an unalterable timestamped event.
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <Button type="button" variant="ghost" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Confirm Resolution
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
