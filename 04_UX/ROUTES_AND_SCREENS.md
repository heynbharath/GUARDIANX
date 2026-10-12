# Routes & Screen Requirements

## Public
### `/` — Landing
- Product statement and core promise.
- Explain sensing → assessment → response.
- Feature grid, response architecture, principles, roadmap.
- Clear “concept prototype” disclosure.
- CTA opens demo dashboard.

### `/project` — Academic project
- Problem, objectives, proposed approach, architecture, implementation status, future work.
- Academic details may be included in private faculty view; public deployment should not expose USN by default.

## Demo app
### `/dashboard`
- Persistent DEMO MODE banner.
- Older adult sample profile and “sample data” label.
- Current device status and last seen.
- Active alerts and event timeline.
- Demo event controls: potential fall, unusual inactivity, device offline, low battery, reset.
- Show explicit “No real notifications sent.”

### `/alerts`
- Filters: state, type, date.
- Sort newest first.
- Empty and error states.
- Accessible keyboard operation.

### `/alerts/[id]`
- Candidate event summary.
- Timestamp, source, device, quality, state.
- Suggested next step.
- Timeline of state transitions.
- Acknowledge, simulate escalation, resolve, false-positive actions.
- Confirmation before terminal action.
- Outcome required to resolve.

### `/contacts`
- Fictional demo contacts.
- Priority order and verified/unverified state.
- Edit/reorder controls in demo state.
- No provider messaging.

### `/settings`
- Demo-only grace period, quiet hours, and event thresholds.
- Explain that thresholds are illustrative, not clinically validated.
- Notification preferences in simulation only.

### `/architecture`
- Interactive or static architecture view.
- Mark implemented, simulated, and future integration layers distinctly.

## Global states
- Loading, empty, error, stale, disconnected, unknown, no permission, expired session.
- Mobile responsive behavior.
- Accessible focus management in dialogs and side panels.
