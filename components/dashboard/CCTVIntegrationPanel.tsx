"use client";

import React, { useState } from "react";
import { Video, ShieldCheck, EyeOff, Lock, RefreshCw, AlertCircle } from "lucide-react";
import { CCTVCameraFeed } from "@/types/guardianx";

interface Props {
  cameras: CCTVCameraFeed[];
  onToggleConsent: (cameraId: string) => void;
  onAuditAccessLog: (room: string) => void;
}

export function CCTVIntegrationPanel({ cameras, onToggleConsent, onAuditAccessLog }: Props) {
  const [activeCamId, setActiveCamId] = useState<string>(cameras[0]?.id || "");
  const [isVerifying, setIsVerifying] = useState(false);

  const currentCam = cameras.find((c) => c.id === activeCamId) || cameras[0];

  const handleLiveCheck = (room: string) => {
    setIsVerifying(true);
    onAuditAccessLog(room);
    setTimeout(() => setIsVerifying(false), 1200);
  };

  return (
    <div className="p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gx-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-gx-text flex items-center gap-2">
              CCTV Camera Integration & Safety Feed
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Privacy-First Consent
              </span>
            </h4>
            <p className="text-xs text-gx-muted">
              Remote visual verification for family during alerts with elder-controlled privacy masking
            </p>
          </div>
        </div>

        {/* Room Switcher */}
        <div className="flex flex-wrap gap-1 bg-gx-border/40 p-1 rounded-xl border border-gx-border">
          {cameras.map((cam) => (
            <button
              key={cam.id}
              onClick={() => setActiveCamId(cam.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCamId === cam.id
                  ? "bg-gx-emerald text-[#091713] font-bold"
                  : "text-gx-muted hover:text-gx-text"
              }`}
            >
              {cam.roomName.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stream Mock Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Stream Screen Viewport (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl bg-black/60 border border-gx-border/80 p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-gx-mint flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${currentCam.consentGranted ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"}`} />
              {currentCam.roomName}
            </span>
            <span className="text-gx-muted text-[11px]">{currentCam.lastSnapshotAt}</span>
          </div>

          {/* Video Placeholder Simulation Box */}
          <div className="aspect-video w-full rounded-xl bg-gradient-to-b from-[#0a1a15] to-[#040907] border border-gx-border/40 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Background scan lines effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,38,32,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

            {currentCam.consentGranted ? (
              <div className="space-y-3 z-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Video className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-display font-semibold text-gx-text">
                    Encrypted Remote Video Stream Active
                  </div>
                  <p className="text-xs text-gx-muted mt-1 max-w-sm">
                    {currentCam.streamUrlPlaceholder}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleLiveCheck(currentCam.roomName)}
                    disabled={isVerifying}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 flex items-center gap-2 transition-all"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? "animate-spin" : ""}`} />
                    {isVerifying ? "Verifying..." : "Request Snapshot Frame"}
                  </button>
                </div>
              </div>
            ) : (
              /* Privacy Masked State */
              <div className="space-y-3 z-10">
                <div className="w-14 h-14 mx-auto rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400">
                  <EyeOff className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-display font-semibold text-zinc-300">
                    Camera Masked: Elder Privacy Policy Enabled
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 max-w-sm">
                    Video feed is blocked by Ananya Rao&apos;s privacy preferences. Remote camera access is disabled unless an emergency SOS is triggered.
                  </p>
                </div>
              </div>
            )}

            {/* Corner Metadata Overlay */}
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-gx-muted/70 z-10">
              REC // RTSP-TLS 256-BIT ENCRYPTION
            </div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-gx-muted/70 z-10">
              CAMERA ID: {currentCam.id.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Right Column: Privacy Governance Controls (4 cols) */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-[#0c1e19]/60 border border-gx-border/80 space-y-4 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Lock className="w-4 h-4" />
            <span>Privacy & Consent Controls</span>
          </div>

          <p className="text-xs text-gx-muted leading-relaxed">
            As outlined in project requirements, CCTV integration enforces strict consent controls so dignity and privacy are preserved while still enabling emergency visual safety.
          </p>

          <div className="p-3.5 rounded-xl bg-black/40 border border-gx-border/60 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-display font-medium text-gx-text">
                Elder Consent Status
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                  currentCam.consentGranted
                    ? "bg-emerald-500/20 text-emerald-300"
                    : "bg-zinc-800 text-zinc-400"
                }`}
              >
                {currentCam.consentGranted ? "Granted" : "Masked"}
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onToggleConsent(currentCam.id)}
                className={`w-full py-2 px-3 rounded-xl text-xs font-mono font-medium transition-colors ${
                  currentCam.consentGranted
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                }`}
              >
                {currentCam.consentGranted ? "Revoke Room Consent" : "Grant Room Consent"}
              </button>
            </div>
          </div>

          <div className="text-[11px] font-mono text-gx-muted space-y-1">
            <div className="text-gx-mint font-semibold">Audit Logging Rule:</div>
            <div>• Every caregiver video check creates an immutable timestamp in the audit timeline.</div>
            <div>• No recording stored on public cloud servers without encryption keys.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
