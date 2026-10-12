# Alert State Machine

## States
- `detected`: candidate event recorded; not yet triaged.
- `pending_check_in`: check-in action initiated or waiting for configured response.
- `acknowledged`: authorised person accepted responsibility for follow-up.
- `escalating`: escalation workflow is progressing through configured contacts.
- `resolved`: response completed and outcome recorded.
- `false_positive`: reviewed and marked as a non-incident.
- `cancelled`: cancelled by an authorised actor before escalation; reason required.
- `system_failed`: workflow cannot continue due to an operational failure; must surface as an operational issue, not a resolved safety event.

## Allowed transitions
- detected → pending_check_in
- detected → acknowledged (manual review may acknowledge immediately)
- detected → false_positive (requires reason)
- pending_check_in → acknowledged
- pending_check_in → escalating
- pending_check_in → false_positive (requires reason)
- escalating → acknowledged
- escalating → resolved
- acknowledged → resolved
- acknowledged → escalating (if acknowledgement is not a resolution and the workflow policy requires more support)
- any non-terminal state → system_failed (with recovery metadata)
- system_failed → prior recoverable state after successful retry
- acknowledged → false_positive only with review reason
- resolved/false_positive/cancelled are terminal for ordinary actions; corrections must be appended as new audit events, not destructive rewrites.

## Required fields on every transition
- alert ID
- previous state
- next state
- timestamp (server-side)
- actor type and actor ID (or system actor)
- reason / policy key
- correlation ID
- optional note (avoid unnecessary sensitive details)

## Invariants
- State transitions are atomic.
- Every transition creates an append-only audit event.
- Duplicate requests are idempotent.
- Only authorised caregivers/responders may acknowledge or resolve.
- The demo simulation never sends a real notification.
- Acknowledgement is not equivalent to resolution.
- “Resolved” requires an outcome category.
- A device-health warning is not automatically a medical emergency.
- A missing response must not be presented as confirmation of harm; it means the system could not confirm status.

## Demo escalation
1. Create simulated candidate event.
2. Start simulated check-in.
3. If user presses “acknowledge,” record acknowledgement and stop demo escalation.
4. If user presses “simulate no response,” advance to contact 1, then contact 2, each with fake delivery outcome.
5. Show “simulation only — no messages sent” persistently.
6. Let demo user record outcome and resolve.
