"use client";

import React, { useState } from "react";
import { PhoneCall, ShieldAlert, HeartHandshake, Truck, Users, Clock, CheckCircle2 } from "lucide-react";
import { EmergencyContact } from "@/types/guardianx";

interface Props {
  contacts: EmergencyContact[];
  onTriggerEmergencyCall: (contact: EmergencyContact) => void;
}

export function EmergencyCallingHub({ contacts, onTriggerEmergencyCall }: Props) {
  const [callingId, setCallingId] = useState<string | null>(null);

  const handleCall = (contact: EmergencyContact) => {
    setCallingId(contact.id);
    onTriggerEmergencyCall(contact);
    setTimeout(() => setCallingId(null), 3000);
  };

  const getTierIcon = (tier: EmergencyContact["tier"]) => {
    switch (tier) {
      case "family":
        return <Users className="w-5 h-5 text-gx-mint" />;
      case "home_help":
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case "ambulance":
        return <Truck className="w-5 h-5 text-rose-400" />;
      case "neighbour":
        return <PhoneCall className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gx-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-gx-text flex items-center gap-2">
              4-Tier Emergency Calling System
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30">
                Direct Dispatch
              </span>
            </h4>
            <p className="text-xs text-gx-muted">
              Immediate connection for elderly wearer: Family, Home Help, Ambulance & Neighbours
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-gx-muted">
          ⚡ One-touch room console & dashboard dialer
        </div>
      </div>

      {/* Grid of 4 Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contacts.map((c) => {
          const isDialing = callingId === c.id;
          return (
            <div
              key={c.id}
              className={`p-4 rounded-xl border flex flex-col justify-between text-left transition-all ${
                isDialing
                  ? "bg-rose-950/40 border-rose-400 shadow-glow"
                  : "bg-[#0c1e19]/60 border-gx-border/80 hover:border-gx-mint/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-black/40 border border-gx-border flex items-center justify-center">
                    {getTierIcon(c.tier)}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-gx-border/60 text-gx-muted">
                    {c.tierLabel.split(":")[0]}
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-mono text-gx-mint block">
                    {c.tierLabel.split(":")[1]?.trim() || c.tier}
                  </span>
                  <h5 className="font-display font-bold text-base text-gx-text mt-0.5">
                    {c.name}
                  </h5>
                  <p className="text-xs text-gx-muted mt-1 leading-snug">
                    {c.relationship}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-gx-border/40 text-[11px] font-mono text-gx-muted space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Phone:</span>
                    <span className="text-gx-text">{c.phone}</span>
                  </div>
                  {c.etaEstimateMinutes && (
                    <div className="flex items-center justify-between text-gx-mint">
                      <span>Est. Response:</span>
                      <span>~{c.etaEstimateMinutes} mins</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gx-border/40">
                <button
                  onClick={() => handleCall(c)}
                  disabled={isDialing}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
                    isDialing
                      ? "bg-rose-500 text-white animate-pulse"
                      : "bg-rose-500/20 text-rose-200 border border-rose-500/40 hover:bg-rose-500/30"
                  }`}
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  {isDialing ? "Connecting Call..." : `Call ${c.name.split(" ")[0]}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
