# System Architecture

## Architectural goal
Separate sensing, event interpretation, alert orchestration, notification delivery, and the user interface. Each boundary must be testable with a simulator and later replaceable with real adapters.

## Logical components
1. **Wearable / device firmware** — sensors, device clock, battery, connectivity, optional SOS input. Not implemented in current prototype.
2. **Device adapter / gateway** — normalises device-specific messages into GuardianX event contracts.
3. **Ingestion API** — authentication/device identity, schema validation, timestamp validation, idempotency.
4. **Event store** — immutable raw event envelope plus normalised event record.
5. **Rules and risk service** — deterministic rules first; ML only after validation. Produces candidate event and confidence/quality metadata, not diagnosis.
6. **Alert orchestrator** — state machine, check-in window, contact order, retries, escalation deadlines.
7. **Job queue / worker** — durable scheduled transitions and notification retries; no in-memory-only timers for production.
8. **Notification adapters** — fake/demo adapter by default; future SMS/push/voice/email providers behind interfaces.
9. **Application API** — dashboard queries, contact management, alert acknowledgement/resolution, settings.
10. **Web app** — landing page, caregiver dashboard, event detail, settings, audit timeline.
11. **Audit/observability** — trace IDs, status transitions, adapter outcomes, safe logs and metrics.

## Data flow
Device signal → authenticated ingestion → validation/deduplication → event store → risk/rule evaluation → alert state machine → durable job → check-in/contact notification adapter → acknowledgement/outcome → audit log → dashboard.

## Suggested deployment for MVP
- Web application: Next.js + TypeScript.
- API: Next.js server routes initially; split service only when scale/reliability needs justify it.
- Database: PostgreSQL.
- ORM/migrations: Prisma or equivalent.
- Queue: managed queue or PostgreSQL-backed job system for initial pilot; document delivery guarantees.
- Auth: managed provider or secure server-side sessions.
- Observability: structured logs, error monitoring, uptime/queue checks.
- Deployment: Vercel for web/API where suitable; managed database and worker/queue service.
- Local dev: Docker Compose only if it simplifies setup; avoid unnecessary infra for first demo.

## Trust boundaries
- Device → ingestion: device identity, replay, spoofing, malformed data.
- Browser → API: unauthenticated/unauthorised access, CSRF/XSS, request abuse.
- API → database: tenant isolation and query authorisation.
- Worker → notification provider: credentials, retries, duplicate sends.
- Application → emergency services: out of scope until approved integration and safety review.
- Demo environment → real users: strict separation; never reuse fake contact data as production contacts.

## Failure modes
- No signal: mark stale/unknown, not safe.
- Duplicate event: idempotently ignore duplicate processing while retaining diagnostics.
- Queue unavailable: persist pending action, retry, surface operational health.
- Provider timeout: retry according to policy; avoid duplicate real notifications via idempotency where supported.
- Invalid timestamp/device identity: quarantine/reject, alert operations.
- Clock drift: store server receipt time and device event time separately.
- Device battery low: create device-health event, not a fall event.
- Contact unreachable: continue configured escalation and record outcomes; do not imply emergency services were reached.

## Proposed service interfaces
- `DeviceAdapter.parse(payload) -> NormalizedDeviceEvent`
- `EventIngestion.accept(event, idempotencyKey) -> accepted | duplicate | rejected`
- `RiskEvaluator.evaluate(event, context) -> CandidateAssessment`
- `AlertOrchestrator.start(assessment) -> Alert`
- `NotificationProvider.send(message, idempotencyKey) -> deliveryResult`
- `AuditWriter.append(actor, action, entity, before, after, reason)`

## Standards / interoperability
FHIR may be considered for future exchange of appropriate healthcare-related data, but it is not required for the student prototype and should not be adopted just to appear enterprise-grade. See research sources.
