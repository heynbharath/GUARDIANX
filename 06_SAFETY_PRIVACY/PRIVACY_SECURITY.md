# Privacy & Security Requirements

## Data minimisation
Collect only what is needed for a defined feature. Prefer event summaries over continuous raw sensor streams. Exact location, health data, contact details, and behavioural patterns are sensitive and require stronger justification and controls.

## Consent and control
- Explain what is collected, why, who can access it, and how long it is retained.
- Record consent for monitoring, contact escalation, location sharing, and any future research use.
- Support revocation and relationship removal.
- Do not assume a family member can consent on behalf of an older adult without an appropriate legal/ethical basis.
- Make the older adult's agency visible in the product.

## Access control
- Deny by default.
- Enforce authorisation server-side on every request.
- Scope access to explicit care relationships.
- Separate caregiver, older adult, responder/operator, and administrator roles.
- Do not rely on unguessable IDs or UI hiding.
- Log access to sensitive records with appropriate minimisation.

## Technical controls
- HTTPS everywhere.
- Secure, HttpOnly, SameSite cookies if cookie sessions are used.
- CSRF protection where relevant.
- Runtime input validation and output encoding.
- Rate limiting and abuse controls.
- Secrets only in server environment/secret manager.
- Database encryption at rest and backups with controlled access.
- Audit logging with redaction.
- Dependency updates and vulnerability scanning.
- Secure provider webhooks: signature verification, replay protection, idempotency.
- Device credentials must be revocable and scoped.
- Avoid putting health details in push notification previews by default.

## Data retention
Define retention by data class: raw telemetry, derived events, alerts, audit records, contact details, consent records. Deletion should follow legal and operational requirements; audit corrections should be append-only without retaining unnecessary sensitive payloads.

## Threats to model
- Account takeover.
- Caregiver relationship abuse or stalking.
- Cross-user/tenant data leakage.
- Fake device event injection.
- Replay and duplicate events.
- Alert suppression or tampering.
- Notification provider compromise.
- Location leakage.
- Denial of service / alert flooding.
- Secrets in client bundle or Git history.
- Demo-to-production contamination.

## Security verification
Use OWASP ASVS as a checklist reference for web application security; choose an appropriate target level after a threat model. Run dependency scanning, static analysis, authz tests, secret scanning, and manual review. Do not claim compliance merely because a checklist exists.
