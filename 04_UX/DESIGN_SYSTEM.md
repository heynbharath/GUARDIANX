# GuardianX Design System

## Brand character
Premium, calm, precise, humane, quietly futuristic. Avoid fear-based marketing, hospital clichés, overbearing dashboards, and claims of perfect protection.

## Colour tokens
- `--gx-ink: #071311` — primary background.
- `--gx-panel: #10271E` — panel surface.
- `--gx-mint: #B8FFD9` — primary accent.
- `--gx-emerald: #48D6A2` — positive / active.
- `--gx-lime: #D7FF8F` — restrained highlight.
- `--gx-coral: #FF9B87` — alert emphasis (pair with icon/text).
- `--gx-blue: #9DD8FF` — informational accent.
- `--gx-text: #F2FBF5` — primary text.
- `--gx-muted: #9BB4A8` — secondary text.
- `--gx-border: rgba(205,255,229,.12)` — dividers.

Use semantic tokens rather than hardcoded colours in components. Alert state must never be indicated by colour alone.

## Typography
- Display/headings: Manrope or a similar legible geometric sans.
- Body: DM Sans or system sans fallback.
- Technical labels: DM Mono, used sparingly.
- Body text target 14–16px on desktop and mobile; do not shrink essential labels to tiny mono text.
- Respect system font loading failure.

## Layout
- Content max width around 1180px.
- Generous vertical spacing and clear section hierarchy.
- Responsive dashboard: sidebar on wide screens, compact navigation on mobile.
- Cards use 14–24px radius; avoid every element looking like a floating card.
- Charts must have labels, accessible summaries, and sample-data disclosures.

## Components
- `StatusBadge`: icon + text + semantic state.
- `DeviceHealthCard`: status, last seen, battery if available, capability list.
- `AlertCard`: type, timestamp, severity, state, recommended action.
- `EventTimeline`: newest-first, accessible list.
- `AlertDetailPanel`: event source, quality metadata, timeline, actions.
- `ContactList`: contact order and verification state; no real contact seeded.
- `DemoModeBanner`: persistent and unmistakable.
- `EmptyState`, `LoadingState`, `ErrorState`, `OfflineState`.
- `ConfirmationDialog`: for state-changing actions.
- `AuditTimeline`: actor, action, time, reason.

## Motion
- Short subtle transitions only.
- Honor `prefers-reduced-motion`.
- Never use animation to imply a real sensor is live.
- No pulsing emergency indicator without accompanying text.

## Accessibility
Target WCAG 2.2 AA. Use semantic headings, landmarks, skip link, labels, keyboard access, visible focus, minimum comfortable touch targets, contrast, text scaling, accessible error messages, reduced motion, and non-colour-only state communication. Charts need a textual summary.

## Voice and content
Prefer:
- “Potential fall detected”
- “Check-in recommended”
- “Device data is stale”
- “We can’t confirm current status”
- “Simulate escalation”
Avoid:
- “Fall confirmed” without human/validated confirmation
- “You are safe” when no current data exists
- “Ambulance dispatched” unless a real verified integration confirms it
- “AI prevented a medical emergency”
