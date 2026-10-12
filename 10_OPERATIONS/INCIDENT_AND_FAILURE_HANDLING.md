# Incident & Failure Handling

## Prototype
All integrations are simulated. If a demo action fails, show a visible UI error and retain the original state; do not imply anyone has been contacted.

## Future connected system
### Notification provider outage
- Persist pending action before delivery attempt.
- Retry with bounded exponential backoff and jitter.
- Use provider idempotency where available.
- Track delivery status and dead-letter unresolved actions.
- Show operational failure to authorised operators.
- Never mark an alert resolved merely because a notification request was queued.

### Device offline
- Show last-seen timestamp and device-health alert.
- Explain that current safety status cannot be confirmed.
- On reconnection, process delayed events safely and deduplicate.

### Incorrect or suspicious event
- Preserve event and source metadata.
- Permit authorised review and false-positive classification.
- Do not silently delete the record.

### Security incident
- Revoke affected credentials/tokens.
- Preserve necessary audit evidence.
- Contain access, assess scope, notify responsible parties according to applicable requirements.
- Document remediation and review access logs.

### Operational ownership
Before a pilot, identify a named owner for on-call response, provider support, escalation policy changes, user support, data deletion requests, and incident communications. A dashboard without an operational responder is not an emergency service.
