# Roadmap & Metrics

## Now — Faculty-ready prototype
- Premium landing page and responsive app shell.
- Clearly labelled simulated data.
- Interactive dashboard and deterministic simulated alerts.
- Event timeline and simulated escalation workflow.
- Project/architecture/limitations page.
- Tests and documentation.

## Next — Software MVP
- Authentication and relationship-based authorisation.
- Database persistence and audit log.
- Contact preferences and consent records.
- Notification provider sandbox.
- Device simulator with event replay.
- Offline/stale-state handling and monitoring.

## Later — Hardware proof of concept
- Select hardware based on wearability, battery, sensor quality, connectivity, cost, and accessibility.
- Implement sensor adapter and timestamp/sequence validation.
- Collect consented, representative data under an approved protocol.
- Evaluate fall candidate precision/recall and latency; test different users, device placements, daily activities, and false positives.
- Test charging, removal, water resistance, dropped device, network loss, and firmware updates.

## Later — Controlled pilot
- Involve older adults, family caregivers, clinicians, and safety experts.
- Complete privacy impact and threat assessments.
- Validate workflow with a monitoring partner.
- Establish incident response, support, training, and operational responsibility.
- Seek legal/regulatory review for intended claims and jurisdictions.

## Metrics
### Product usability
- Time to understand current status.
- Time to acknowledge a simulated alert.
- Task completion rate for resolving an event.
- Contact setup completion rate.
- Accessibility defects by severity.

### System reliability
- Event ingestion success rate.
- Duplicate event suppression rate.
- Alert processing latency.
- Notification adapter delivery/timeout rates (sandbox first).
- Device freshness detection latency.
- Queue retry and dead-letter counts.

### Safety evaluation (only with validated study design)
- Fall candidate sensitivity/recall and precision.
- False alerts per user-day.
- Missed event rate under defined protocol.
- Median/p95 time from event to contact acknowledgement.
- Percentage of periods with unknown device state.
- Battery/connectivity uptime.
Metrics must be reported with methodology and confidence limits; never market a target as achieved before measurement.
