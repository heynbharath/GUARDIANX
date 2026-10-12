# Implementation Plan

## Recommended stack
- Next.js App Router + TypeScript strict mode.
- Tailwind CSS plus accessible primitives (choose a maintained library if useful).
- Zod or equivalent runtime schema validation.
- PostgreSQL + Prisma (or equivalent).
- Managed authentication or secure server-side sessions.
- Vitest/Jest + React Testing Library; Playwright for end-to-end checks.
- ESLint + Prettier.
- Vercel for web deployment; managed database/queue/worker as needed.

Antigravity may adjust this based on the existing repository. Avoid a rewrite until current code has been inspected.

## Suggested repository structure
```text
guardianx/
  app/
    (marketing)/page.tsx
    (app)/dashboard/page.tsx
    (app)/alerts/page.tsx
    (app)/alerts/[id]/page.tsx
    (app)/contacts/page.tsx
    (app)/settings/page.tsx
    (app)/project/page.tsx
    api/
  components/
    ui/
    dashboard/
    alerts/
    layout/
  domain/
    events/
    alerts/
    escalation/
    devices/
    contacts/
  adapters/
    devices/simulator.ts
    notifications/fake-provider.ts
  server/
    auth/
    db/
    services/
    jobs/
  lib/
    validation/
    time/
    logging/
  prisma/
    schema.prisma
    seed.ts
  tests/
    unit/
    integration/
    e2e/
  docs/
  public/
  .env.example
  README.md
```

## Build sequence
1. Inventory current files, identify the existing static prototype and preserve it.
2. Create design tokens and reusable layout.
3. Build landing page sections from `04_UX/ROUTES_AND_SCREENS.md`.
4. Build demo dashboard with seeded fictional data.
5. Implement domain state machine independent of UI.
6. Implement deterministic simulator and demo controls.
7. Add unit tests for transitions, idempotency, role permissions.
8. Add persistent database only after the in-memory domain model is tested.
9. Add authentication and tenant/relationship checks.
10. Add API endpoints with runtime schemas.
11. Add notification adapter interface; fake adapter remains default.
12. Add device simulator adapter and offline/stale scenarios.
13. Add settings, audit history, filters, empty/loading/error states.
14. Run responsive and accessibility checks.
15. Write current implementation status and faculty demo instructions.
16. Deploy only after secrets and demo disclosures are verified.

## Coding conventions
- Domain logic must not live only inside React components.
- Use explicit enums/unions for alert/device states.
- Keep time handling timezone-aware; persist timestamps in UTC and render in user locale.
- Use server receipt time and device event time separately.
- Avoid floating-point comparisons for threshold logic where integer/normalised values suffice.
- Use a stable idempotency key for event ingestion and notification requests.
- Do not log exact location, health details, phone numbers, or message bodies by default.
- Every async state has loading/error/empty/success UI.
- Every API route performs authentication, relationship authorization, validation, and safe error handling.
- No hardcoded secrets; `.env.example` contains placeholders only.
