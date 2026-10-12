# API Contract (Proposed)

This contract is a starting point. Antigravity should align endpoint names to the selected framework and document any changes.

## General
- JSON over HTTPS.
- Authenticate all private endpoints.
- Authorize by active care relationship and granular permission.
- Validate requests at runtime.
- Return a correlation ID.
- Do not return raw provider payloads or secrets.
- Idempotent writes use `Idempotency-Key` where appropriate.

## Endpoints
### `GET /api/v1/dashboard/summary`
Returns authorised profile summaries, device freshness, open alert counts, and recent events. Must not label stale/unknown data as safe.

### `GET /api/v1/devices`
Returns devices accessible to the current user with status, last seen, battery, and capabilities.

### `GET /api/v1/events?from=&to=&type=&cursor=`
Returns paginated events accessible to the current user. Enforce time-window limits and pagination.

### `POST /api/v1/demo/events`
Demo-only endpoint; disabled outside demo environment. Body conforms to `schemas/device-event.schema.json`. Creates simulated event and alert workflow. Must never call external notification provider.

### `GET /api/v1/alerts?state=&type=&cursor=`
Returns paginated alerts accessible to the current user.

### `GET /api/v1/alerts/{id}`
Returns alert detail, state, event references, escalation attempts, and audit timeline.

### `POST /api/v1/alerts/{id}/acknowledge`
Body: `{ "note"?: string }`. Requires `acknowledge_alert` permission. Idempotent if already acknowledged by same/compatible workflow.

### `POST /api/v1/alerts/{id}/resolve`
Body: `{ "resolutionCode": "help_not_needed|contact_reached|support_arranged|false_positive|other", "note"?: string }`. Requires `resolve_alert` permission. Resolution code is required.

### `POST /api/v1/alerts/{id}/simulate-escalation`
Demo-only. Advances fake escalation steps; must reject in production mode.

### `GET /api/v1/contacts`
Returns authorised trusted contacts with only fields needed by the UI.

### `POST /api/v1/contacts` / `PATCH /api/v1/contacts/{id}` / `DELETE /api/v1/contacts/{id}`
Requires `manage_contacts`, validates contact fields, verifies relationship scope, and records audit event. Delete should deactivate/revoke, not destroy historical alert references.

### `GET /api/v1/audit?entityType=&entityId=`
Returns authorised audit events, with sensitive metadata redacted.

## Error shape
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request could not be processed.",
    "correlationId": "server-generated-id"
  }
}
```

## Status codes
- `200` successful read/update.
- `201` created.
- `400` invalid payload/query.
- `401` unauthenticated.
- `403` not authorised.
- `404` missing or inaccessible entity (avoid leaking existence).
- `409` conflicting transition or idempotency conflict.
- `422` semantically invalid transition.
- `429` rate limited.
- `500` generic unexpected error; no stack trace to client.
