# Device & Sensor Plan

## Important
No hardware has been selected or integrated. This is a discovery plan, not a hardware specification.

## Candidate signals
- Accelerometer: movement and impact patterns.
- Gyroscope: rotational movement / orientation changes.
- Barometer: possible elevation change, where available.
- GNSS/location: only where appropriate, consented, and technically available.
- Heart-rate / optical sensors: optional; do not treat as reliable medical measurements without validation.
- SOS button: explicit help request.
- Battery, charging, connection, and wear/on-body status: critical operational telemetry.

## Candidate form factors
- Wrist wearable: familiar but may be removed or not worn during charging.
- Pendant: may support a dedicated emergency button and can be worn differently; comfort and sensor placement must be evaluated.
- Phone + wearable: cheaper prototype path but depends on phone proximity, charging, permissions, and connectivity.
- Independent cellular device: may improve autonomy but increases cost, power, SIM/network, and certification complexity.

## Selection criteria
- Battery life and charging friction.
- Water resistance and use during bathing.
- Reliable connectivity indoors/outdoors.
- Sensor sampling access and raw-data availability.
- SDK/API maturity and data ownership.
- Comfort, skin sensitivity, accessibility, and ease of donning.
- Cost and availability in target geography.
- Privacy/security update policy.
- Ability to test failure modes safely.

## Data contract principles
- Include device ID, event ID, device timestamp, server receipt timestamp, sequence number when possible, firmware version, sensor quality, battery, connectivity, and idempotency key.
- Do not upload high-frequency raw sensor data unless justified by a defined research protocol.
- Use signed/authenticated device messages where supported.
- Detect stale telemetry separately from inactivity.
- Preserve source and quality metadata for all derived events.

## Hardware validation matrix
Test normal walking, sitting, lying down, abrupt sitting, device drop, device removal, charging, bathing/water exposure if rated, weak signal, low battery, clock drift, duplicate packets, delayed packets, and power cycle. No human fall testing without an approved, safe protocol and appropriate supervision.
