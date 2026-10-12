# Build Order & Definition of Done

## Phase 0 — Reconnaissance
- Inspect all existing files and preserve the current GuardianX static site as a reference.
- Identify existing stack, package manager, commands, tests, and deployment setup.
- Return a short architecture proposal before large edits.
**Done when:** repository state and implementation plan are documented.

## Phase 1 — Experience foundation
- Establish design tokens, typography, buttons, cards, badges, form fields, empty/error states.
- Build landing page and app shell.
- Add demo-mode banner and accessible navigation.
**Done when:** responsive page works at 360px, 768px, 1024px, and 1440px widths; no horizontal overflow; keyboard focus is visible.

## Phase 2 — Demo dashboard
- Seed fictional profile “Ananya Rao” or another clearly fictitious sample profile.
- Show device connectivity, battery sample, last-seen time, activity summary, recent events, open alerts.
- Simulate fall, inactivity, stale device, disconnected device, and low-battery states.
**Done when:** each simulated state is labelled and repeatable; reset returns to seed state.

## Phase 3 — Alert state machine
- `detected → pending_check_in → acknowledged | escalated → resolved | false_positive`
- Add event history and idempotency key in the domain model.
- Simulate sequential contact notifications with fake delivery outcomes.
- Provide manual acknowledge/resolve actions and outcome notes.
**Done when:** valid transitions pass unit tests; invalid transitions are rejected; all transitions produce audit events.

## Phase 4 — Persistence and identity (only after demo workflow works)
- Add database and migrations.
- Add authentication and roles: older adult, caregiver, responder/operator, administrator.
- Enforce relationship-based authorization server-side.
- Keep the demo dataset isolated from any real user data.
**Done when:** cross-account access tests fail safely; seed/demo mode is explicit.

## Phase 5 — Integrations behind adapters
- Define wearable adapter interface and simulator.
- Define notification adapter interface with fake provider as default.
- Add provider sandbox adapters only after configuration and tests.
- No real emergency dispatch or automatic doctor calling in student prototype.
**Done when:** adapter failures, retries, timeouts, duplicate messages, and offline cases are testable without contacting real people.

## Phase 6 — hardening and faculty handoff
- Accessibility audit, responsive QA, security review, logs without sensitive payloads.
- Prepare faculty demo, architecture diagram, status report, and limitations.
- Verify deployment environment and no secret leaks.
**Done when:** all acceptance criteria in `07_TESTING/ACCEPTANCE_CRITERIA.md` are checked or explicitly marked not implemented.

## Final definition of done for the first build
A faculty member can open the deployed app, understand the concept in under two minutes, explore the dashboard, trigger a simulated fall/inactivity event, follow the simulated response workflow, inspect the event history, and clearly see that no real sensor or emergency integration is connected.
