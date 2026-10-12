# GuardianX — Elderly Remote Safety Platform Concept

> **"Independence for them. Peace of mind for you."**  
> A wearable-powered elderly remote safety and coordinated response platform concept created by **Sunaina Mohapatra**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Tests](https://img.shields.io/badge/Tests-8%20Passed-48D6A2?style=flat&logo=vitest)](https://vitest.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-heynbharath%2FGUARDIANX-white?style=flat&logo=github)](https://github.com/heynbharath/GUARDIANX)

---

## 1. Product Overview

**GuardianX** is an early-stage product concept exploring how wearable kinetic sensing, contextual triage rules, and structured family response workflows can help older adults continue living independently while giving their families genuine peace of mind.

The central philosophy is:
> **Detect a potential emergency. Understand the situation. Coordinate a response. Keep families informed.**

### Core Pillars
1. **Awareness:** Ingest subtle passive signals (kinetic motion, gait cadence, heart rhythm, and wear status) from wristbands without demanding continuous operation from the wearer.
2. **Context:** Distinguish between genuine emergencies, routine rest, and device disconnections through learned baselines and non-intrusive haptic check-ins.
3. **Coordinated Response:** Guide authorized caregivers through an audited, deterministic escalation workflow with explicit ownership—stopping panic and preventing missed emergencies.

---

## 2. Project & Creator Information

- **Project:** GuardianX
- **Creator:** Sunaina Mohapatra
- **Category:** Elderly Remote Safety
- **Stage:** Concept & Interactive Prototype
- **University Seat Number (USN):** `ENG24CT0058`
  - *Privacy Policy:* The USN is placed behind a configuration switch in `lib/project-config.ts` that defaults to hidden on public pages, and can be revealed by evaluators and faculty using the interactive toggle in the Project section.
- **GitHub Repository:** [https://github.com/heynbharath/GUARDIANX](https://github.com/heynbharath/GUARDIANX)

---

## 3. Technology Stack

- **Framework:** Next.js 15 (App Router, React Server Components + Client interactivity)
- **Language:** TypeScript 5.7 with strict type checking
- **Styling:** Tailwind CSS with custom GuardianX emerald & forest-green design tokens
- **Icons:** Lucide React
- **Unit Testing:** Vitest 3.0 (covering the Alert State Machine & transition invariants)
- **Deployment Target:** Vercel & GitHub

---

## 4. Key Interactive Features & Alert State Machine

The centerpiece of GuardianX is the **Interactive Family Safety Dashboard**, powered by an explicit, deterministic state machine (`lib/alert-state-machine.ts`):

```
       [detected]
        /   |    \
       /    |     \
      v     |      v
[pending_check_in] | [false_positive]* (with reason)
      |     |      ^
      |     v     /
      +--> [acknowledged]
      |     |      ^
      v     v     /
    [escalating] /
      |     |   /
      v     v  /
    [resolved]* (requires outcome category & notes)
```

*\*Terminal states.*

### Working Demo Controls
The dashboard includes live browser-based scenario triggers:
1. **Simulate Fall Alert:** Triggers high-G kinetic spike (3.8g) and initiates the candidate triage workflow.
2. **Simulate Inactivity:** Triggers alert for lack of gait transition during waking window.
3. **Wearable Offline Toggle:** Simulates Bluetooth disconnection or dead battery, marking telemetry stale.
4. **Normal Wearer Check-in:** Simulates the older adult tapping *"I am OK"* on the watch screen, cancelling active alerts.
5. **Caregiver Acknowledgment:** Claims ownership of an alert, pausing escalation.
6. **Escalation Dispatch:** Simulates progressing notification from Primary Contact (Kavita Rao) to Secondary Contact (Dr. Arvind Rao).
7. **Resolution Modal:** Prompts caregiver to document an outcome category (`fall_assisted`, `inactivity_resting`, `false_alarm_movement`, `device_issue`) and note.
8. **Reset Simulation:** Returns the entire dashboard and telemetry to nominal seed state.

---

## 5. Local Setup & Commands

Clone the repository and run:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Run unit tests (Vitest)
npm run test

# 4. Check linting (ESLint)
npm run lint

# 5. Build for production (Next.js)
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. How to Push to GitHub & Deploy to Vercel

### Step 1: Push to GitHub
The project is configured to push to [https://github.com/heynbharath/GUARDIANX](https://github.com/heynbharath/GUARDIANX).

```bash
git add .
git commit -m "feat: complete production-quality GuardianX website prototype"
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** \> **"Import Git Repository"**.
3. Select `heynbharath/GUARDIANX`.
4. Framework Preset will automatically detect **Next.js**.
5. No custom environment variables are needed for this frontend demo.
6. Click **"Deploy"**. The site will be live on your Vercel URL in ~60 seconds.

---

## 7. Safety, Clinical & Simulation Disclosures

- **Prototype Scope:** GuardianX is currently an interactive student concept prototype.
- **No Real Dispatches:** All notifications, check-ins, sensor telemetry, and escalations run exclusively in the browser memory. No real phone calls, SMS, WhatsApp messages, or emergency dispatches are triggered.
- **Non-Medical Device:** GuardianX is not certified as a medical device (FDA, CE, CDSCO) and does not provide clinical diagnosis. In a real emergency, call local emergency services immediately.

---

© 2026 GuardianX · Designed and developed by **Sunaina Mohapatra**.
