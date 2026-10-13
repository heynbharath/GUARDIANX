"use client";

import React, { useState } from "react";
import { Pill, Calendar, Clock, CheckCircle2, AlertCircle, Plus, ChevronRight, Bell } from "lucide-react";
import { MedicationItem, AppointmentItem } from "@/types/guardianx";

interface Props {
  medications: MedicationItem[];
  appointments: AppointmentItem[];
  onToggleMedicationStatus: (medId: string) => void;
  onRequestReminder: (medName: string) => void;
}

export function MedicationAppointmentTracker({
  medications,
  appointments,
  onToggleMedicationStatus,
  onRequestReminder,
}: Props) {
  const [activeTab, setActiveTab] = useState<"medications" | "appointments">("medications");

  const takenCount = medications.filter((m) => m.status === "taken").length;
  const adherencePercent = Math.round((takenCount / medications.length) * 100);

  return (
    <div className="p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
      {/* Header with Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gx-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gx-mint/10 border border-gx-mint/30 flex items-center justify-center text-gx-mint">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-gx-text flex items-center gap-2">
              Medication & Appointment Manager
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gx-emerald/10 text-gx-emerald border border-gx-emerald/30">
                Caregiver Sync
              </span>
            </h4>
            <p className="text-xs text-gx-muted">
              Adherence monitoring, dose verification & upcoming doctor consultations
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex rounded-xl bg-gx-border/40 p-1 border border-gx-border">
          <button
            onClick={() => setActiveTab("medications")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === "medications"
                ? "bg-gx-emerald text-[#091713] font-bold shadow-sm"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Daily Medications ({takenCount}/{medications.length})
          </button>
          <button
            onClick={() => setActiveTab("appointments")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              activeTab === "appointments"
                ? "bg-gx-emerald text-[#091713] font-bold shadow-sm"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Appointments ({appointments.length})
          </button>
        </div>
      </div>

      {activeTab === "medications" ? (
        <div className="space-y-4">
          {/* Adherence Progress Bar */}
          <div className="p-4 rounded-xl bg-[#091713]/80 border border-gx-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono text-gx-muted uppercase tracking-wider">
                Today&apos;s Medication Adherence
              </div>
              <div className="text-xl font-display font-bold text-gx-text mt-0.5">
                {adherencePercent}% Completed
                <span className="text-xs font-mono font-normal text-gx-mint ml-2">
                  ({takenCount} of {medications.length} doses logged)
                </span>
              </div>
            </div>
            {/* Visual Bar */}
            <div className="w-full sm:w-48 bg-gx-border/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-gx-emerald to-gx-mint h-full rounded-full transition-all duration-500"
                style={{ width: `${adherencePercent}%` }}
              />
            </div>
          </div>

          {/* List of Medications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {medications.map((med) => {
              const isTaken = med.status === "taken";
              return (
                <div
                  key={med.id}
                  className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                    isTaken
                      ? "bg-gx-emerald/[0.04] border-gx-emerald/30"
                      : "bg-[#0c1e19]/60 border-gx-border/80"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isTaken ? "bg-gx-emerald" : "bg-amber-400 animate-pulse"
                          }`}
                        />
                        <h5 className="font-display font-semibold text-sm text-gx-text">
                          {med.name}
                        </h5>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-gx-panel border border-gx-border text-gx-mint">
                        {med.scheduledTime}
                      </span>
                    </div>

                    <div className="text-xs text-gx-muted mt-1.5 flex items-center gap-2">
                      <span className="font-mono text-gx-text">{med.dosage}</span>
                      <span>•</span>
                      <span>{med.instructions}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gx-border/40 flex items-center justify-between">
                    <div className="text-[11px] font-mono">
                      {isTaken ? (
                        <span className="text-gx-emerald flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Taken at {med.takenAt}
                        </span>
                      ) : (
                        <span className="text-amber-300 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> Pending dose
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {!isTaken && (
                        <button
                          onClick={() => onRequestReminder(med.name)}
                          className="px-2 py-1 rounded-lg text-[10px] font-mono bg-gx-border/60 hover:bg-gx-border text-gx-mint flex items-center gap-1 transition-colors"
                          title="Trigger Living Guardian room chime reminder"
                        >
                          <Bell className="w-3 h-3" /> Remind
                        </button>
                      )}
                      <button
                        onClick={() => onToggleMedicationStatus(med.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                          isTaken
                            ? "bg-gx-border/50 text-gx-muted hover:text-gx-text"
                            : "bg-gx-emerald text-[#091713] hover:bg-gx-mint font-semibold shadow-sm"
                        }`}
                      >
                        {isTaken ? "Mark Unread" : "Mark Taken"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Upcoming Appointments */
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 rounded-xl bg-[#0c1e19]/60 border border-gx-border/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gx-mint px-2 py-0.5 rounded bg-gx-mint/10 border border-gx-mint/20">
                      {apt.specialty}
                    </span>
                    <span className="text-xs font-mono text-gx-emerald font-semibold">
                      {apt.dateTime}
                    </span>
                  </div>
                  <h5 className="font-display font-bold text-sm text-gx-text mt-2">
                    {apt.title}
                  </h5>
                  <p className="text-xs text-gx-muted mt-1">{apt.doctor}</p>
                  <p className="text-xs font-mono text-gx-muted/80 mt-1 flex items-center gap-1">
                    📍 {apt.location}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gx-border/40 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-gx-emerald flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> SMS & Room Console Synced
                  </span>
                  <button
                    onClick={() => onRequestReminder(apt.title)}
                    className="text-xs text-gx-mint hover:underline font-mono"
                  >
                    Send Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
