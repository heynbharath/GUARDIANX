# Domain Model

## Main entities
### User
- `id: UUID`
- `displayName`
- `email` (unique if used)
- `role: older_adult | caregiver | responder | admin`
- `createdAt`, `updatedAt`
- Authentication secrets are managed by the auth system, not stored in this entity.

### CareRelationship
- `id`
- `olderAdultId`
- `caregiverId`
- `relationshipLabel`
- `status: pending | active | revoked`
- `permissions: view_status, view_events, acknowledge_alert, resolve_alert, manage_contacts`
- `consentedAt`, `revokedAt`

### Device
- `id`
- `olderAdultId`
- `deviceType`
- `manufacturer`, `model`, `firmwareVersion` (optional)
- `status: connected | stale | disconnected | low_battery | unknown`
- `lastSeenAt`
- `batteryPercent` (nullable)
- `capabilities: string[]`
- `createdAt`, `updatedAt`

### DeviceEvent
- `id`
- `deviceId`
- `olderAdultId`
- `eventType: heartbeat | motion_sample | potential_fall | inactivity_candidate | sos_pressed | battery_low | device_offline | device_online`
- `eventTime` (device timestamp)
- `receivedAt` (server timestamp)
- `sequenceNumber` (optional)
- `idempotencyKey`
- `payload` (minimised validated JSON)
- `dataQuality: valid | degraded | unknown`
- `source: simulator | device_adapter`
- `createdAt`

### Alert
- `id`
- `olderAdultId`
- `sourceEventId`
- `type: potential_fall | inactivity_check | device_health | sos`
- `severity: info | low | medium | high | critical` (prototype labels are not clinical severity)
- `state` from `ALERT_STATE_MACHINE.md`
- `summary`
- `openedAt`, `acknowledgedAt`, `resolvedAt`
- `assignedToUserId` (nullable)
- `policyVersion`
- `resolutionCode`, `resolutionNote` (nullable; minimised)
- `idempotencyKey`

### TrustedContact
- `id`
- `olderAdultId`
- `displayName`
- `relationshipLabel`
- `phone` / `email` (encrypted or managed appropriately if persisted)
- `preferredChannels`
- `priorityOrder`
- `verifiedAt`
- `consentStatus`
- `active`

### EscalationAttempt
- `id`
- `alertId`
- `contactId` (nullable for check-in)
- `step: check_in | contact_notify | operator_review | emergency_partner`
- `status: queued | simulated | sent | delivered | failed | acknowledged | skipped`
- `attemptedAt`, `completedAt`
- `providerMessageId` (nullable)
- `idempotencyKey`
- `failureCode` (nullable)

### AuditEvent
- `id`
- `actorType: user | system | provider`
- `actorId` (nullable)
- `action`
- `entityType`, `entityId`
- `previousState`, `newState` (nullable)
- `reasonCode`
- `correlationId`
- `createdAt`
- `metadata` (redacted/minimised)

## Relationships
- Older adult has one or more devices.
- Older adult has zero or more caregivers via CareRelationship.
- Older adult has trusted contacts.
- Device produces many DeviceEvents.
- DeviceEvent may create an Alert.
- Alert has many EscalationAttempts and AuditEvents.
- CareRelationship defines access; possession of an alert ID is never sufficient for access.

## Data principles
- Keep medical history out of the MVP unless a validated use case requires it.
- Avoid collecting exact location continuously. Location sharing needs explicit consent and purpose limitation.
- Separate demo seed data from production data.
- Retention/deletion policy must be defined before real user onboarding.
