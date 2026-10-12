# Personas & User Journeys

## Persona A — Older adult living independently
**Needs:** independence, comfort, simple interactions, privacy, clear way to request help.  
**Risks:** device forgotten/removed, charging burden, confusing alerts, stigma, false alarms.  
**Design implications:** unobtrusive hardware, long battery life, simple SOS, accessible audio/haptic cues, no requirement to use a smartphone for every event.

## Persona B — Adult child / family caregiver
**Needs:** reassurance without constant checking, trustworthy last-seen status, clear next action, alert history.  
**Risks:** alert fatigue, uncertainty, guilt, unclear responsibility, overreliance on a dashboard.  
**Design implications:** concise status summary, meaningful alerts, contact escalation order, acknowledgement ownership, clear offline warnings.

## Persona C — Trusted contact / neighbour
**Needs:** concise explanation of event, contact details, location only when consented and necessary, what to do next.  
**Risks:** being contacted without agreement, unclear urgency, outdated contact details.  
**Design implications:** explicit opt-in, contact verification, minimal data sharing, contact-order controls.

## Journey 1 — Normal day
1. Wearable sends supported device/usage signals.
2. Platform displays last-seen timestamp and device health.
3. Routine activity is summarised conservatively.
4. Family sees “No active alerts” only if data is sufficiently recent; otherwise sees “Status unavailable/stale.”
5. No action is required from older adult.

## Journey 2 — Potential fall
1. Sensor adapter emits a potential fall candidate with timestamp, device ID, and quality metadata.
2. Event is deduplicated and stored.
3. Risk workflow evaluates configured rules; system avoids calling it a confirmed fall.
4. Older adult is prompted for a simple check-in if supported and safe.
5. If no acknowledgement within the configured period, trusted contacts are notified in order.
6. An authorised person acknowledges and records action taken.
7. Alert is resolved with an outcome and immutable audit history.

## Journey 3 — Unusual inactivity
1. The system notices a gap relative to an opted-in expected activity window.
2. It first checks data freshness, device connectivity, sleep/quiet hours, and whether the device may be off-body.
3. If data quality is insufficient, show a device-status issue instead of inferring inactivity.
4. If configured criteria are met, create a “check-in recommended” event.
5. Follow check-in/escalation workflow.

## Journey 4 — Device goes offline
1. No device heartbeat arrives within configured threshold.
2. System changes status to stale, then disconnected if appropriate.
3. Family sees last-seen time and explicit “cannot confirm safety” language.
4. A device-health alert may be created; it must not be disguised as an incident detection.
5. On reconnection, reconcile delayed events and deduplicate.

## Journey 5 — False positive
1. A potential event is raised.
2. Family/older adult confirms no help is needed.
3. Alert is marked false positive with reason.
4. Event remains in audit history and may support future tuning only with appropriate consent and governance.
