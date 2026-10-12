# Safety Case & Hazard Register

## Safety position
GuardianX is currently a concept prototype. It must not be relied on for emergency detection or response. Future real-world use requires hazard analysis, validation, operational ownership, and regulatory review.

## Top hazards
### H-01 Missed fall
**Cause:** sensor placement, model failure, no power, device not worn, poor connectivity.  
**Impact:** delayed assistance.  
**Mitigation:** clear limitations, alternative SOS route, device-worn/freshness signals, test across conditions, no guarantee language.

### H-02 False fall alert
**Cause:** device drop, abrupt sitting, sports/activity, algorithm threshold.  
**Impact:** anxiety, alert fatigue, unnecessary response.  
**Mitigation:** candidate wording, check-in stage where appropriate, configurable policy, event review, measure false alert rate.

### H-03 Inactivity mistaken for emergency
**Cause:** sleep, quiet routine, device removal, missing packets.  
**Impact:** unnecessary escalation.  
**Mitigation:** separate data freshness from activity; user-defined quiet hours; check-in; contextual rules.

### H-04 Stale/offline device shown as safe
**Cause:** UI hides connection loss or stale data.  
**Impact:** false reassurance.  
**Mitigation:** explicit stale/disconnected/unknown states and last-seen timestamps; never equate no alert with safety.

### H-05 Notification not delivered
**Cause:** network/provider outage, invalid contact, expired credentials.  
**Impact:** intended contact is not reached.  
**Mitigation:** durable queue, retries, delivery status, fallback contacts, operational monitoring, no false delivery claims.

### H-06 Duplicate escalation
**Cause:** retries without idempotency.  
**Impact:** alert fatigue or duplicate emergency contact.  
**Mitigation:** idempotency keys, transactional outbox, dedupe, provider delivery reconciliation.

### H-07 Unauthorised access to sensitive information
**Cause:** broken access control, leaked credentials, insecure logs.  
**Impact:** privacy and safety harm.  
**Mitigation:** relationship-scoped authorization, encryption, least privilege, audit, redaction, security testing.

### H-08 Incorrect location or outdated profile
**Cause:** stale GNSS, address change, inaccurate setup.  
**Impact:** responders sent to wrong place.  
**Mitigation:** timestamp/location confidence, confirmation workflow, user-editable profile, no dispatch without validated location and integration.

### H-09 User assumes real emergency response exists
**Cause:** demo UI says “called” or “dispatched.”  
**Impact:** reliance on non-existent service.  
**Mitigation:** persistent demo labels; use “simulate”; no external calls in demo; explicit project limitations.

### H-10 Unsafe automatic dispatch
**Cause:** unvalidated thresholds or wrong jurisdiction/provider workflow.  
**Impact:** resource misuse or delayed appropriate care.  
**Mitigation:** out of current scope; require clinical/legal/operational review, consent, agreements, simulation and staged pilot.

## Safety invariants
- No real contact is reached by demo controls.
- No unknown/stale state is rendered as safe.
- Alert detection is not diagnosis.
- Alert acknowledgement and resolution are different.
- Every state transition is recorded.
- Device/notification failure is surfaced.
- Human review remains possible.
- Emergency integration cannot be enabled by a frontend toggle alone.

## Review gates before pilot
1. Hazard analysis reviewed by qualified stakeholders.
2. Device and algorithm verification plan completed.
3. Privacy impact and consent flow reviewed.
4. Incident ownership and escalation policy agreed.
5. Provider agreements and jurisdictional workflow verified.
6. End-to-end failure tests passed.
7. Regulatory/legal review completed for intended claims.
