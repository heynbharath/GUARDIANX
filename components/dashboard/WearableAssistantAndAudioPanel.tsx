"use client";

import React, { useState } from "react";
import { Mic, Volume2, AlertOctagon, Radio, MessageSquare, Play, Sparkles } from "lucide-react";
import { AcousticEvent, VoiceAssistantQuery } from "@/types/guardianx";

interface Props {
  acousticEvents: AcousticEvent[];
  voiceQueries: VoiceAssistantQuery[];
  onSimulateVoiceCommand: (phrase: string) => void;
  onSimulateAcousticAnomaly: () => void;
}

export function WearableAssistantAndAudioPanel({
  acousticEvents,
  voiceQueries,
  onSimulateVoiceCommand,
  onSimulateAcousticAnomaly,
}: Props) {
  const [subTab, setSubTab] = useState<"voice" | "noise">("voice");
  const [customSpokenInput, setCustomSpokenInput] = useState("");

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSpokenInput.trim()) return;
    onSimulateVoiceCommand(customSpokenInput);
    setCustomSpokenInput("");
  };

  return (
    <div className="p-6 rounded-2xl bg-gx-panel/30 border border-gx-border/60">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gx-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-gx-text flex items-center gap-2">
              Ambient Voice Assistant & Acoustic Sentinel
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30">
                Living Guardian Spatial Audio
              </span>
            </h4>
            <p className="text-xs text-gx-muted">
              Hands-free voice recognition, room wellness dialogue & environmental noise anomaly detection
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex rounded-xl bg-gx-border/40 p-1 border border-gx-border">
          <button
            onClick={() => setSubTab("voice")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              subTab === "voice"
                ? "bg-gx-emerald text-[#091713] font-bold"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Voice Assistant Feed
          </button>
          <button
            onClick={() => setSubTab("noise")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              subTab === "noise"
                ? "bg-gx-emerald text-[#091713] font-bold"
                : "text-gx-muted hover:text-gx-text"
            }`}
          >
            Noise & Acoustic Monitor
          </button>
        </div>
      </div>

      {subTab === "voice" ? (
        <div className="space-y-4">
          {/* Quick Speak Simulation Shortcuts */}
          <div className="p-4 rounded-xl bg-[#091713]/80 border border-gx-border/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-gx-muted">
                Simulate Ambient Room Voice Commands (Living Guardian Spatial Mic Array)
              </span>
              <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1">
                <Radio className="w-3 h-3 animate-pulse" /> Always-Listening Hotword &quot;Guardian&quot;
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <button
                onClick={() => onSimulateVoiceCommand("Guardian, I feel a little dizzy, can you alert my daughter?")}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-200 hover:bg-purple-500/20 transition-colors text-left"
              >
                🗣️ &quot;Guardian, I feel dizzy, alert my daughter&quot;
              </button>
              <button
                onClick={() => onSimulateVoiceCommand("Guardian, what time is my dinner medicine?")}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-gx-border/60 border border-gx-border text-gx-text hover:bg-gx-border transition-colors text-left"
              >
                🗣️ &quot;What time is my dinner medicine?&quot;
              </button>
              <button
                onClick={() => onSimulateVoiceCommand("Guardian, connect me to Saraswathiamma (home helper)")}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-gx-border/60 border border-gx-border text-gx-text hover:bg-gx-border transition-colors text-left"
              >
                🗣️ &quot;Call Saraswathiamma (Home Help)&quot;
              </button>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSubmit} className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Or type a spoken command e.g. 'Guardian, call an ambulance now'..."
                value={customSpokenInput}
                onChange={(e) => setCustomSpokenInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-black/40 border border-gx-border text-gx-text focus:outline-none focus:border-gx-mint font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition-colors"
              >
                Speak
              </button>
            </form>
          </div>

          {/* Interaction History List */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-gx-muted block">
              Recent Voice Assistant Logs
            </span>
            {voiceQueries.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#0c1e19]/60 border border-gx-border/80 space-y-2 text-left"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gx-mint font-semibold flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-purple-400" /> &quot;{item.userSpokenText}&quot;
                  </span>
                  <span className="text-gx-muted text-[11px]">{item.timestamp}</span>
                </div>

                <div className="p-3 rounded-lg bg-black/30 border border-gx-border/40 text-xs text-gx-text flex items-start gap-2">
                  <Volume2 className="w-4 h-4 text-gx-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-gx-emerald uppercase block mb-0.5">
                      Assistant Audio Response:
                    </span>
                    <p className="leading-relaxed text-gx-text/90">{item.assistantResponse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Noise & Acoustic Monitoring */
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#091713]/80 border border-gx-border/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-gx-muted uppercase">
                Environmental Acoustic Sentinel
              </span>
              <div className="text-lg font-display font-bold text-gx-text mt-0.5">
                Multi-Band Acoustic Classifier
              </div>
              <p className="text-xs text-gx-muted mt-1 max-w-md">
                Detects household sound anomalies (heavy falls, breaking glassware, smoke alarms, distress cries) without recording continuous voice eavesdropping.
              </p>
            </div>

            <button
              onClick={onSimulateAcousticAnomaly}
              className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors flex items-center gap-2"
            >
              <AlertOctagon className="w-4 h-4" /> Simulate Loud Crash (88 dB)
            </button>
          </div>

          {/* List of Acoustic Readings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {acousticEvents.map((evt) => {
              const isFlagged = evt.flaggedForTriage;
              return (
                <div
                  key={evt.id}
                  className={`p-4 rounded-xl border flex flex-col justify-between text-left ${
                    isFlagged
                      ? "bg-amber-950/20 border-amber-500/40"
                      : "bg-[#0c1e19]/60 border-gx-border/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-gx-muted">{evt.timestamp}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                          isFlagged
                            ? "bg-amber-500/20 text-amber-300"
                            : "bg-gx-border/60 text-gx-mint"
                        }`}
                      >
                        {evt.decibelLevel} dB
                      </span>
                    </div>

                    <h5 className="font-display font-bold text-sm text-gx-text mt-2 capitalize">
                      {evt.soundType.replace("_", " ")}
                    </h5>

                    <p className="text-xs text-gx-muted mt-1 font-mono">
                      Classifier Confidence: {Math.round(evt.confidenceScore * 100)}%
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/[0.06] text-[11px] font-mono">
                    {isFlagged ? (
                      <span className="text-amber-300 flex items-center gap-1">
                        ⚠️ Triaged alongside IMU kinetic vector
                      </span>
                    ) : (
                      <span className="text-gx-emerald flex items-center gap-1">
                        ✓ Ambient safe threshold
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
