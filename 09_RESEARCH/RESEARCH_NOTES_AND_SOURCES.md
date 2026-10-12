# Research Notes & Sources

Research snapshot: 12 October 2026. Re-check before public claims, submission, or integration work.

## 1. Apple Watch fall detection
Apple Support, “Use Fall Detection with Apple Watch” (India support page). Describes fall alerts, countdown and emergency calling conditions, emergency contacts, connectivity/settings dependencies, and limitations.
https://support.apple.com/en-in/108896

Product implication: fall detection and emergency response already exist in a mainstream wearable. GuardianX must not position “first wearable to detect falls” as its novelty.

## 2. Lively fall detection and urgent response
Lively help centre explains that its Mobile2 can use an accelerometer and algorithms to detect potential falls and connect to an urgent response agent, while warning that fall detection may not always be accurate.
https://shop.lively.com/blogs/help-center/fall-detection
https://shop.lively.com/pages/personal-emergency-response

Product implication: a response workflow linked to fall detection is also an existing pattern. Differentiation must be evidence-based.

## 3. Medical Guardian
Medical Guardian product page describes automatic fall detection, two-way communication, water resistance, and activity tracking.
https://www.medicalguardian.com/medical-alert-systems/guardian-flex-fall-detection

Product implication: competitor matrix should compare user journey, setup, pricing, geography, contact workflow, device dependency, and family dashboard—not only raw feature presence.

## 4. India Emergency Response Support System (ERSS)
Government of India ERSS describes 112 as a pan-India single emergency number and describes requests via calls, app, and other channels. Any future automated integration must be confirmed with relevant authorities/providers; the existence of a public emergency number does not imply a third-party API is available or that automated dispatch is permitted.
https://112.gov.in/about
https://112.gov.in/features

Product implication: in a student prototype, simulate the pathway. Do not place automated calls or imply dispatch without an approved, tested integration and operational agreement.

## 5. FDA general wellness policy (US reference only)
FDA's January 2026 guidance describes its policy for low-risk general wellness products. This is not a legal determination for GuardianX and is not applicable as a substitute for Indian legal/regulatory advice.
https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices

Product implication: intended claims and actual functions can affect regulatory treatment. Seek jurisdiction-specific review before clinical or emergency claims.

## 6. HL7 FHIR
HL7 FHIR is a standard for electronic healthcare information exchange.
https://fhir.hl7.org/fhir/overview.html

Product implication: consider FHIR only if a real interoperability need arises; it is not required for the first prototype.

## 7. OWASP ASVS
OWASP's stable ASVS 5.0.0 release is available; the project describes it as a verification standard for web application security.
https://github.com/OWASP/ASVS/releases

Product implication: use a suitable subset/level as a security verification checklist, alongside a project-specific threat model.

## 8. WCAG 2.2
W3C identifies WCAG 2.2 as a web standard recommendation.
https://www.w3.org/WAI/news/2023-10-05/wcag22rec/

Product implication: use WCAG 2.2 AA as the accessibility target; older adults may have vision, motor, hearing, or cognitive accessibility needs.

## Research limitations
- This is a focused initial scan, not an exhaustive systematic review or patent search.
- Vendor feature pages are self-published claims and may change.
- No independent clinical performance claims are made here.
- No patent freedom-to-operate opinion is provided.
- Market differentiation and target geography require further user research.
