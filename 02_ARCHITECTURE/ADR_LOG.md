# Architecture Decision Records (ADR Log)

## ADR-001 — Demo-first, integration boundaries
**Status:** Accepted  
**Decision:** Build the UI and deterministic event simulator before connecting hardware or messaging providers.  
**Reason:** Enables faculty demonstration while avoiding false claims or accidental contact.  
**Consequence:** The first build is not a live safety system.

## ADR-002 — TypeScript for application domain
**Status:** Proposed  
**Decision:** Prefer TypeScript for shared typed domain contracts and validation.  
**Reason:** Reduces drift between UI, API, simulator, and tests.  
**Consequence:** Requires strict typecheck and runtime validation; TypeScript types alone do not validate network input.

## ADR-003 — PostgreSQL for durable event/audit data
**Status:** Proposed  
**Decision:** Use relational storage for users, relationships, devices, events, alerts, contacts, and audit events.  
**Reason:** Transactional state transitions and audit history are core requirements.  
**Consequence:** Migrations and retention policies are required.

## ADR-004 — Adapter pattern for devices and notifications
**Status:** Accepted  
**Decision:** Define interfaces with simulator/fake adapters as the default.  
**Reason:** Hardware and provider choices are open and vary by market.  
**Consequence:** No real provider calls in tests or default dev mode.

## ADR-005 — No automatic emergency dispatch in student prototype
**Status:** Accepted  
**Decision:** Do not implement real calls to ambulance/doctor/emergency services in the current scope.  
**Reason:** Emergency dispatch requires validated event handling, consent, jurisdiction-specific integration, operational agreements, and a safe test plan.  
**Consequence:** Demonstrate the workflow with simulation only.
