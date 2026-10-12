# Event Detection & AI Research Plan

## Principle
Start with deterministic, interpretable rules and a simulator. Add machine learning only if data quality, consent, validation data, and evaluation design justify it.

## Potential fall candidate pipeline
1. Acquire sensor window with known sampling rate and quality.
2. Check data completeness, clock skew, and device wearing state if available.
3. Detect candidate abrupt movement / impact / orientation transition.
4. Evaluate post-event immobility or recovery pattern.
5. Apply context rules and confidence threshold.
6. Trigger an accessible check-in or candidate alert according to policy.
7. Record raw event references, model/rule version, confidence, and data-quality flags.
8. Evaluate false positives and false negatives in a controlled dataset.

Do not present any particular threshold as validated before experiments.

## Inactivity candidate pipeline
1. Define user-approved expected routine windows, including quiet/sleep periods.
2. Evaluate data freshness first.
3. Distinguish no movement from no data.
4. Check device removal, battery, connectivity, and recent activity context.
5. If data quality is insufficient, raise device-health status rather than infer inactivity.
6. If configured rule is met, recommend a check-in.
7. Escalate only according to the reviewed policy.

## Evaluation
- Precision, recall/sensitivity, specificity, false alerts per user-day.
- Detection latency and end-to-end response latency.
- Performance by device placement, age range, mobility patterns, environment, and sensor quality.
- Confidence intervals and error analysis.
- Calibration and drift monitoring if ML is used.
- Separate offline dataset performance from prospective pilot performance.

## Data governance
- Explicit consent and ethical approval where required.
- Data minimisation and retention policy.
- De-identification/pseudonymisation; recognise that motion data may still be sensitive.
- No training on identifiable data by default.
- Dataset access controls and documented provenance.
- Human review for high-impact outcomes.

## AI claims
Avoid “AI predicts emergencies,” “guarantees fall detection,” or “prevents injuries.” A safer statement is “the prototype explores sensor-based event detection and a structured response workflow; performance has not yet been validated.”
