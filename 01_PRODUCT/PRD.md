# Product Requirements Document (PRD)

## 1. Summary
GuardianX is a proposed wearable-powered elderly remote safety platform for older adults who live alone or spend substantial time without immediate assistance. It aims to detect potential safety events, assess context, and coordinate a response rather than merely displaying an alert.

## 2. Problem
Families may worry about a parent living alone but cannot continuously check in. An older adult may be unable to press a button or operate an app after a fall or sudden emergency. Existing safety workflows can be fragmented across a wearable, phone, family chats, and emergency services. The product hypothesis is that a simple family dashboard plus a structured escalation workflow can reduce coordination friction.

This is a hypothesis to validate with users, not a proven clinical outcome.

## 3. Product vision
“Quietly support independence. Make the next step clearer when something seems wrong.”

## 4. Target users
- Primary: adult children or relatives supporting an older adult remotely.
- Secondary: older adult wearing/using the device.
- Secondary: trusted neighbour, caregiver, or guardian.
- Future: clinician, monitoring operator, emergency response partner.
- Internal: project administrator / researcher.

## 5. Jobs to be done
- As a family member, I want a quick, trustworthy summary of the person's last-known device state and recent events.
- As a family member, I want a potential incident to have an owner, status, and clear next action.
- As a trusted contact, I want to know why I am being contacted and what action is expected.
- As an older adult, I want everyday safety support without needing to operate a complicated app.
- As a project evaluator, I want to distinguish implemented features from simulated and future capabilities.

## 6. Core product principles
1. Detection is the beginning; response is the product.
2. Near-zero interaction for routine monitoring; simple accessible check-in when needed.
3. Older-adult dignity, consent, autonomy, and privacy.
4. No silent failure: stale/offline devices must not appear safe.
5. Every alert and escalation transition is auditable.
6. Conservative language: a model flags a possible event; it does not diagnose.
7. Family clarity over notification volume.
8. Safety integrations must be validated and explicitly configured.

## 7. Extended Prototype Scope (Incorporating Project Notes)
- Premium responsive landing page & design system with dynamic micro-interactions.
- Demo dashboard with fictitious person (`Ananya Rao`) and simulated wearable pulse band.
- Multi-tier Safety Triage & Rhythm: fall detection, prolonged inactivity, and BLE keep-alive state machine.
- **Medication & Appointment Manager:** Daily dose schedule, adherence tracking (% completed), mark taken/unread, and clinic consultation reminders.
- **Dietary Guidance & Health Deficiencies:** Clinical lab biomarker correlation (Vitamin D, Iron, Electrolytes), deficiency alerts, and curated meal plans / food avoidance recommendations.
- **Wearable Voice Assistant & Noise Detection:** Hands-free speech interaction feed (Alexa-style band microphone) and acoustic anomaly classifier (loud crashes, appliance alarms, glass breaks).
- **4-Tier Emergency Calling System:** One-touch rapid connection for Family, Home Help, Ambulance, and Neighbours with simulated response ETAs.
- **CCTV Integration & Privacy Shield:** Remote visual verification with elder consent controls and immutable access audit logging.
- **Value Proposition & Business Case:** Strategic rationale on why families and seniors buy GuardianX.
- Sequential caregiver escalation, false alarm verification, and resolution documentation.
- Automated unit tests for all state transitions and invariants.

## 8. Out of scope for current concept prototype
- Actual wearable hardware integration.
- Validated fall detection or clinical risk models.
- Real health monitoring, diagnosis, or medical advice.
- Actual SMS, push, voice, doctor, ambulance, or emergency-service calls.
- Production user accounts or real patient data until auth/privacy architecture is reviewed.
- Claims of clinical efficacy, guaranteed detection, guaranteed response, or prevention of harm.
- Insurance, billing, medical record integration, or hospital workflow.
- Automatic emergency dispatch without explicit consent, operational agreements, regulatory review, and rigorous testing.

## 9. Functional requirements
### FR-01 Dashboard
Display current demo status, last-seen timestamp, device health, active alerts, recent events, and contact overview. Label demo data in persistent UI.

### FR-02 Event ingestion boundary
Accept a typed event from a simulator initially. Validate schema, timestamp, device identity, and idempotency key. Reject malformed/duplicate events safely.

### FR-03 Potential fall
Create a `potential_fall` event; do not state that a fall is confirmed. Start the configured demo workflow.

### FR-04 Unusual inactivity
Evaluate missing expected activity only when data quality and schedule context are sufficient. Show “check-in recommended,” not a medical conclusion.

### FR-05 Check-in
Represent an attempt to contact the older adult via a future configured channel. In demo mode, record a simulated check-in only.

### FR-06 Escalation
If check-in is not acknowledged within the configured demo grace period, progress through contacts in configured order. Use a durable job queue in any backend-enabled version; demo-only timers may be local.

### FR-07 Human acknowledgement
Authorised demo user can acknowledge an alert and record what happened.

### FR-08 Resolve
An alert can be resolved with outcome category and optional note. Resolution must not delete its audit history.

### FR-09 Contact management
Create/edit/reorder/remove contacts in demo state. Validate phone/email formats, but do not send messages.

### FR-10 Device health
Represent stale data, low battery, connectivity loss, unknown state, and last-seen time distinctly.

### FR-11 Event history
List and filter events by type, status, time, and severity. Provide detail panel.

### FR-12 Accessibility
Keyboard-operable controls, visible focus, semantic structure, accessible names, reduced-motion support, and status cues that are not colour-only.

### FR-13 Auditability
Record who/what changed alert status, when, prior state, new state, and reason/source.

### FR-14 Honest state
No view may show “live monitoring” unless a real, tested integration exists. Demo mode must remain obvious.

## 10. Non-functional requirements
- Performance: fast initial load; avoid unnecessary charting libraries.
- Reliability: deterministic simulation and explicit failure states.
- Security: server-side authz, input validation, secrets on server only.
- Privacy: collect minimal data, consent/retention controls, least privilege.
- Accessibility: WCAG 2.2 AA target.
- Maintainability: typed domain layer, documented API, migrations, tests.
- Observability: correlation IDs and safe structured logs without unnecessary health/location details.
- Deployment: reproducible environment and documented rollback.

## 11. Success metrics for prototype
- Faculty/user can explain the product after a 2-minute walkthrough.
- User can find current status and open alerts in under 10 seconds.
- User can simulate an event and follow the response flow without guidance.
- 100% of demo event states visibly identify simulated data.
- All alert transition tests pass.
- No real messages/calls are triggered by demo actions.
- Accessibility keyboard smoke test passes.

## 12. Risks and assumptions
- Fall detection depends on sensor location, quality, and validation data.
- Inactivity can mean sleep, routine variation, device removal, or connectivity loss.
- Connectivity and battery failures can create blind spots.
- False alarms may reduce trust; missed events may create serious risk.
- Emergency-service integration varies by geography and service provider.
- Older adults and family members need different permissions and UI needs.
- “Prevention” is too strong as a guaranteed claim; use “earlier awareness and coordinated response” unless evidence supports stronger claims.

## 13. Open decisions
- Final product name and brand.
- Initial geography and language support.
- Whether first hardware prototype is a wrist wearable, pendant, or phone-paired device.
- Which sensors are available (accelerometer, gyroscope, barometer, GNSS, heart-rate sensor, SOS button).
- Whether the device has independent cellular connectivity or depends on a phone/gateway.
- Contact escalation timings and acknowledgement channels.
- Data retention and consent policy.
- Regulatory classification and clinical validation plan.
