# Antigravity Task 03 — Backend, Persistence, Security

Only begin after the demo dashboard and domain state machine are stable.

Implement the smallest maintainable backend that supports the PRD:
- database schema and migrations;
- authentication and relationship-scoped authorization;
- runtime validation;
- event ingestion with idempotency;
- transactional alert transitions and append-only audit events;
- fake notification adapter as default;
- tests for unauthorised cross-profile access, duplicate events, invalid transitions, and provider failure;
- `.env.example` with placeholders only.

Do not implement real emergency dispatch. Do not use real patient data. Document any architecture decisions and limitations.
