# Test Strategy

## Unit tests
- Valid/invalid event schema.
- Duplicate event idempotency.
- Alert state transitions and invalid transitions.
- Resolve requires outcome code.
- Acknowledgement does not imply resolution.
- Device freshness state calculation.
- Inactivity logic refuses to infer inactivity when data is stale.
- Contact order and escalation rules.
- Role/permission policy.
- Timezone and daylight-saving edge cases.

## Integration tests
- API authentication and relationship authorization.
- Event creation → alert creation → audit event.
- Queue/job retry behavior.
- Notification fake adapter delivery outcomes.
- Database transaction rollback on failed transition.
- Webhook signature and replay protection if provider integration is added.

## End-to-end tests
- Open dashboard and see demo disclosure.
- Simulate fall; inspect alert details.
- Simulate no response; see contact sequence (fake only).
- Acknowledge alert; ensure no further demo escalation.
- Resolve with outcome; audit timeline remains.
- Simulate offline device; UI does not say “safe.”
- Test mobile navigation and alert actions.
- Keyboard-only path through dashboard and dialogs.

## Accessibility checks
- Keyboard navigation and focus order.
- Visible focus indicators.
- Form labels and accessible errors.
- Contrast checks.
- Screen reader names for icon buttons.
- Reduced motion.
- Status conveyed by icon + text, not colour alone.
- Charts include text summary.
- Dialog focus management and escape handling.

## Resilience tests
- Duplicate and out-of-order events.
- Device clock skew.
- Provider timeout, rate limit, and failure.
- Queue unavailable.
- App refresh during an alert transition.
- Contact missing/unverified.
- No location permission.
- Low battery, disconnected, stale, unknown state.
- Long periods with no sensor messages.

## Release gates
- Lint, typecheck, unit, integration, and E2E results documented.
- No known critical/high security defects.
- Demo never reaches real providers.
- No secrets committed.
- No misleading safety claims.
- Responsive layout and keyboard smoke test pass.
