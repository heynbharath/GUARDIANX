"use client";

import React from "react";
import { GuardianContact } from "@/types/guardianx";
import { Users, Phone, ShieldCheck, Clock, CheckCircle2, AlertCircle } from "lucide-react";

interface GuardianPanelProps {
  contacts: GuardianContact[];
  currentEscalationLevel: number;
}

export function GuardianPanel({
  contacts,
  currentEscalationLevel,
}: GuardianPanelProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs pb-1 border-b border-gx-border/40">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-gx-mint" />
          <span className="font-display font-semibold text-gx-text">
            Care Circle & Escalation Order
          </span>
        </div>
        <span className="font-mono text-[10px] text-gx-lime">
          DEMO FICTIONAL CONTACTS
        </span>
      </div>

      <div className="space-y-3">
        {contacts.map((contact) => {
          const isTargeted = currentEscalationLevel >= contact.priorityOrder;
          const statusConfig = {
            idle: { label: "Standby", class: "text-gx-muted border-gx-border" },
            notified: { label: "Dispatched (Simulated)", class: "text-amber-300 border-amber-500/40 bg-amber-950/30" },
            acknowledged: { label: "Active Responder", class: "text-gx-mint border-gx-mint/40 bg-teal-950/40" },
            failed: { label: "Offline", class: "text-zinc-500 border-zinc-700" },
          }[contact.deliveryStatus];

          return (
            <div
              key={contact.id}
              className={`p-3.5 rounded-xl border transition-all ${
                isTargeted
                  ? "bg-gx-panel/80 border-gx-mint/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  : "bg-gx-panel/30 border-gx-border/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm text-gx-text">
                      {contact.name}
                    </span>
                    {contact.isPrimary && (
                      <span className="text-[9px] font-mono uppercase bg-gx-mint/10 text-gx-mint px-1.5 py-0.5 rounded border border-gx-mint/20">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gx-muted mt-0.5">
                    {contact.relationship}
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${statusConfig.class}`}
                  >
                    {statusConfig.label}
                  </span>
                  <div className="text-[10px] font-mono text-gx-muted mt-1">
                    Priority #{contact.priorityOrder}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-gx-muted">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-gx-mint" />
                  {contact.phoneMasked}
                </span>
                <span className="text-[10px] text-gx-muted/70">
                  {contact.deliveryStatus === "notified"
                    ? "SMS sent (Simulated)"
                    : "No notifications triggered"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
