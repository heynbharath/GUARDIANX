# Acceptance Criteria

## AC-01 Product clarity
Given a first-time viewer, when the landing page loads, then the user can identify the intended audience, wearable concept, and detection-to-response value proposition without reading the whole page.

## AC-02 Demo disclosure
Given any dashboard or simulated alert view, then a persistent visible label identifies data/events as simulated and says no real notifications are sent.

## AC-03 Simulated fall
Given demo mode, when the user triggers a fall simulation, then a `potential_fall` alert appears with timestamp, source, state, and next step; no external call or message occurs.

## AC-04 Simulated inactivity
Given demo mode, when inactivity is simulated, then the UI recommends a check-in and does not state that a medical emergency is confirmed.

## AC-05 Stale data
Given the device has not reported within the configured freshness threshold, then the dashboard shows stale/unknown status and last-seen time rather than “safe.”

## AC-06 Acknowledge
Given an open alert and an authorised demo user, when acknowledge is selected, then the state changes and an audit event is added.

## AC-07 Resolve
Given an acknowledged alert, when resolve is selected without an outcome, then validation prevents resolution. With an outcome, resolution succeeds and audit history remains.

## AC-08 Escalation
Given an unacknowledged demo alert, when simulated escalation is triggered, then fake contacts are processed in priority order and all steps are labelled simulated.

## AC-09 Authorization
Given a user without access to an older adult's relationship, when requesting that profile or alert, then the API returns a safe denial and reveals no private details.

## AC-10 Idempotency
Given the same event is submitted twice with the same idempotency key, then the second request does not create a duplicate alert or notification attempt.

## AC-11 Accessibility
Given a keyboard-only user, when navigating key screens and dialogs, then every action is reachable, focus is visible, and state is conveyed in text.

## AC-12 Honest claims
No screen, README, or demo script claims that a real wearable, doctor, ambulance, or emergency service is connected unless the integration has been implemented, validated, and explicitly enabled.
