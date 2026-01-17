# sihlhack Project Update - January 2025

## Strategic Pivot: Active Energy Node

### From "Water Heater" to "Active Energy Node"

The project narrative has shifted from a naive "water heater" concept to a sophisticated **Active Energy Node** architecture:

**Core Components:**
- **Battery**: Time-shift solar energy, provide UPS/resilience
- **Compute**: Deferred compute jobs, batch processing
- **Heat**: Thermal recovery (three paths: Immersion, Water Loop, Heat Pump)
- **Resilience**: Load shedding, community backup

**Key Principle**: The thermal path is NOT prescribed. Teams evaluate three options and choose. This is the engineering challenge, not a kit assembly.

---

## Messaging Strategy Update

### Participant Voice (Du/Ihr)

All messaging now uses "du" (singular) or "ihr" (plural) to emphasize participant agency:
- "Du baust es" (not "wir bauen")
- "Ihr entscheidet" (not "wir entscheiden")
- "Dein Code. Deine Entscheidung." (not "unser Code")

### Sihlvalley vs Silicon Valley

Cheeky, confident attitude throughout:
- "Silicon Valley baut Rechenzentren, die Flüsse erhitzen. Wir bauen Server, die Häuser heizen."
- "Silicon Valley optimiert Werbung. Wir optimieren Wärmeflüsse."
- "Der kleine Sihlvalley will mit Silicon Valley konkurrieren."

### Open Architecture Messaging

- **Not**: "We use immersion cooling"
- **Instead**: "Drei thermische Pfade. Euer Team entscheidet."

- **Not**: "Here's the solution"
- **Instead**: "Ihr bekommt Constraints, ihr findet den Weg."

### Trust Through Ownership

- Apache 2.0 means participants can fork, compete, commercialize
- "Du kannst morgen eine Firma gründen, die mit dem Code konkurriert, den du hier schreibst. Wir ermutigen das."
- No hidden agendas, no ecosystem seeding

---

## New Features

### 1. Open-Source Resources Integration

**Per Challenge:**
- **Demo-Kit**: Prometheus, VictoriaMetrics, Home Assistant, Mosquitto
- **Hardware Safety**: LibreSolar BMS, Charge Controller, Zephyr RTOS
- **Grid-OS**: Node-RED, NATS, Ollama, llama.cpp, Chronos-T5, k3s
- **Dashboard**: OpenTelemetry Collector, Prometheus

**License Policy:**
- Only Apache-2.0/MIT tools recommended
- AGPL-3.0 excluded (OpenEMS, Grafana) - copyleft incompatible with commercial LEGs
- BSL-1.1 excluded (emqx) - not open source per OSI definition
- CC BY-NC-SA excluded (diyBMSv4) - non-commercial restriction

### 2. Resource Submission Form

- Participants can suggest additional repos
- Form sends to `hello@sihlhack.ch` via Resend API
- Integrated into each PackageCard

### 3. Glossary Accordion

26 technical terms explained in 4 categories:
- **Thermal & Hardware**: Immersion Cooling, Direct-to-Chip, Heat Pump, COP, Thermal Baseline, BOM, Safety Case, RCD/GFCI
- **Energie & Grid**: LEG, Grid-OS, Deferred Compute, Load Shedding, Solar-Budget, Fallback-Policy, Swissgrid, VPP, Demand Response, PUE, SDL
- **Software & APIs**: API Spec, Replay-Modus, Scheduler, Sensor-Map
- **Recht & Regulierung**: StromVG, EnG, VEVEE

### 4. New Hero Tagline

**Previous:**
- "Der Hackathon, bei dem am Ende etwas Warmes rauskommt. Buchstäblich."

**Current:**
- "Server, die Häuser heizen. Batterien, die das Quartier versorgen."
- "Aus Sonnenlicht wird Rechenleistung."
- "Aus Rechenleistung wird Wärme. Aus Wärme wird Zukunft."
- Subhead: "Drei Tage. Ein System. Unendlich viele Möglichkeiten."

### 6. Challenge Evaluation Infrastructure

**Architecture:**
```
Teilnehmer → MCP-Server (Capability Gateway) → Node-RED (Orchestrator) → Evaluator/Scorer/Leaderboard
```

**Components:**
- **Node-RED**: Orchestrator for submissions, evaluations, scoring, leaderboard
- **MCP-Server**: Capability gateway with RBAC, audit logging, rate limiting
- **MCP Tools**: challenge.list, challenge.validateSubmission, challenge.dryRun, challenge.submit, challenge.run, challenge.score, leaderboard.get

**Submission Formats:**
- **Policy-Config (JSON/YAML)**: Recommended for MVP - simple, safe, reproducible
- **Container (OCI)**: Later - more freedom, but sandbox complexity
- **Node-RED-Flow**: Not recommended - multi-tenancy/security risks

---

## Updated Pages

### Homepage (/)
- New hero tagline (combined Option 1 + 2)
- Three engineering challenges (Zeit-Frage, Wärme-Frage, Resilienz-Frage)
- Participant-focused messaging
- Open-source ownership message

### About Page (/about)
- Vision: Sihlvalley vs Silicon Valley
- Problem → Solution visualization
- Endgame section: Decentralized AI compute network
- Updated FAQ with du/ihr voice

### Challenges Page (/challenges)
- Thermal Architecture Challenge section
- Open-source resources per package
- Resource submission form
- Glossary accordion (26 terms)
- Team Red security challenge

### Team Page (/team)
- Team member profiles

---

## Technical Updates

### New Components
- `GlossaryAccordion.tsx` - Categorized technical terms
- `ResourceSubmissionForm.tsx` - Repo suggestion form
- `EndgameSection.tsx` - Decentralized AI vision

### New API Routes
- `/api/submit-resource` - Resource submission endpoint

### Updated Components
- `HeroSection.tsx` - New tagline
- `PackageCard.tsx` - Resources section
- `FAQSection.tsx` - Du/ihr voice, shortened answers
- `EnergyTrilemmaSection.tsx` - 4-pillar model, thermal challenge, load shedding

### Updated Data
- `lib/roles.ts` - Resources array per package, updated role descriptions

---

## Documentation Updates

All documentation files updated to reflect:
- Active Energy Node narrative
- Open-source resources strategy
- Challenge evaluation infrastructure
- Messaging strategy (du/ihr voice)
- Current event details (September 20-22, 2025, CHF 150)

**Files Updated:**
- README.md
- STRATEGY.md
- CONCEPT.md
- SITE-STRUCTURE.md
- TECHNICAL-REQUIREMENTS.md
- IMPLEMENTATION-ROADMAP.md

---

## Event Details

- **Date**: September 20-22, 2025 (3 days)
- **Registration**: CHF 150 per participant
- **Teams**: 30-36 teams (10-12 per mandatory package)
- **Participants**: 150+ expected
- **Prize Distribution**: 35% Demo-Kit, 35% Hardware Safety, 20% Grid-OS, 10% Best Integration

---

## Next Steps

1. **Challenge Evaluation**: Implement Node-RED flows and MCP-Server
2. **Verein Setup**: Establish legal entity for post-event governance
3. **Hardware Procurement**: Source server hardware, GPUs, thermal components
4. **Safety Planning**: Professional electrical engineers on-site
5. **Event Execution**: September 20-22, 2025
