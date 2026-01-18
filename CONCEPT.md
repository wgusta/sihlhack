# SIHLHACK Concept

## The Sihlicon Hub: Active Energy Node

The Sihlicon Hub is an **Active Energy Node** combining Battery + Compute + Heat + Resilience. It's not a "water heater" - it's a system that:
- Stores solar energy in batteries (time-shift architecture)
- Runs compute jobs when energy is available (deferred compute)
- Provides heat to buildings (thermal recovery)
- Powers neighborhoods during grid outages (load shedding)

## The Sihl Valley Industrial Heritage

The Sihl Valley (Sihltal) was the cradle of Zurich's industrialization. Today, we face new challenges: energy sovereignty, digital autonomy, decentralized infrastructure.

### What Lies Hidden

- Production optimization strategies from an era of resource scarcity
- Organizational structures that enabled rapid scaling
- Technical innovations that were ahead of their time
- Business models abandoned due to technological limitations
- Social structures and worker welfare programs

### Historical Context

The Sihl river powered factories throughout the 19th and early 20th centuries. Companies like:
- Textile manufacturers
- Machine tool factories
- Paper mills
- Chemical plants
- Precision instrument makers

All kept detailed records that capture not just business data, but the evolution of Swiss industrial thinking.

## The Participant-Oriented Model

### Traditional Hackathon Model

```
Companies pay → Companies set challenges → Participants compete → Company prizes
```

Problems with this model:
- Corporate agenda drives innovation direction
- Participants work on company problems, not their own ideas
- Prize money comes with strings attached
- Solutions often serve company interests, not broader value

### SihlHack Model (Inverted)

```
Participants pay → Participants propose → Participants vote → Collective prizes
```

Benefits:
- Removes corporate agenda from innovation
- Attracts intrinsically motivated participants
- Creates genuine ownership over outcomes
- Ensures alignment between effort and reward
- Democratizes the innovation process

### How It Works

1. **Registration**: Participants pay CHF 150 registration fee
2. **Team Formation**: Self-organized or matched by skills/roles
3. **Challenge Selection**: Each team chooses one mandatory package:
   - **Demo-Kit**: End-to-end energy flow with reproducible demo
   - **Hardware Safety**: BOM, Safety Case, thermal baseline
   - **Grid-OS**: Scheduler with solar budget, fallback policy, API
4. **Thermal Path Choice**: Teams evaluate and choose:
   - **Path A**: Oil Immersion (99% heat capture, complex)
   - **Path B**: Water Loop (60-70% capture, proven)
   - **Path C**: Heat Pump Integration (70°C+ output, ambitious)
5. **Hackathon**: 3 days of building (September 20-22, 2025)
6. **Judging**: Scoring based on deliverables and criteria
7. **Prizes**: 35% Demo-Kit, 35% Hardware Safety, 20% Grid-OS, 10% Best Integration

### Transparency Commitment

- All collected funds visible in real-time
- Expense breakdown public
- Transaction ledger accessible
- Automatic refunds if event cancelled

## The Three Engineering Challenges

### Die Zeit-Frage (Time-Shift Challenge)
Solar energy peaks during the day, but heat is needed at night. How do you bridge this gap?
- **Options**: Batteries buffer day→night, Deferred Compute shifts jobs, or both
- **Teams decide**: The perfect balance is what you build

### Die Wärme-Frage (Thermal Challenge)
How do you extract heat from compute? Three paths, no "right" answer:
- **Path A (Oil Immersion)**: Elegant, 99% capture, but complex handling
- **Path B (Water Loop)**: Proven, standard parts, but only 60-70% capture
- **Path C (Heat Pump)**: 70°C+ output, radiator-ready, but complex and expensive
- **Teams evaluate**: Trade-offs, not prescriptions

### Die Resilienz-Frage (Resilience Challenge)
When the grid fails, what does your server do?
- **Grid stable**: Run compute, charge battery
- **Grid unstable**: Throttle compute, battery ready
- **Grid down**: Pause compute, power the neighborhood
- **Teams build**: The logic doesn't exist yet - you create it

## Target Participants

### Primary Roles

- **Hardware Engineers**: Evaluate thermal architectures, build chosen solution
- **Electrical Engineers**: Design safe systems, RCD/GFCI, safety interlocks
- **Grid-OS Developers**: Build scheduler, deferred compute, load shedding
- **Energy Experts**: Solar APIs, Swissgrid integration, SDL knowledge
- **Sensor/Data Engineers**: Integrate sensors, build data pipelines
- **Backend Developers**: APIs, compute scheduling infrastructure
- **Frontend Developers**: Monitoring dashboards with real-time data
- **Designers**: UX/UI for complex energy data visualization
- **LEG Specialists**: Navigate Swiss energy law (StromVG, EnG)
- **Project Managers**: Coordinate teams, manage timeline
- **Generalists**: Flexible contributors across all areas

### Secondary Audience

- Students (ETHZ, UZH, ZHAW, HSLU)
- DIY makers and hardware hackers
- Energy enthusiasts with own PV systems
- Open-source contributors

## The Dual-License Model: "Open but Sovereign"

We discovered a dangerous loop: If we simply open-source everything under Apache 2.0, bad actors could strip the grid-protection logic and build "Vampire Heaters" that burn energy just for subsidies, ignoring grid needs.

To prevent this **Cobra Effect**, we are pioneering a Dual-License Model:

### 1. The Body: Sihl Open Hardware License (Permissive)
**Applies to:** Thermal architecture, CAD files, schematics, BOMs.
**License:** **CERN-OHL-P (Permissive) / MIT**
**Philosophy:** "Anyone can build the machine."
- You can build it, sell it, modify it.
- We want these heaters in every basement.
- Zero restrictions on the physical artifact.

### 2. The Conscience: Sihl Sovereignty License (Civic/Constrained)
**Applies to:** Grid-OS, Scheduler, Orchestrator, Negotiation Logic.
**License:** **Sihl Valley Common-Good License (SVG-L)**
**Philosophy:** "You cannot remove the machine's conscience."
- **The Thermodynamic Truth Clause:** Modifying the software to run "dummy loops" (generating heat without economic/scientific value) is a license violation.
- **The Grid Obedience Clause:** You cannot strip the code that allows the grid operator to throttle your device during emergencies.
- **The Anti-Vampire Clause:** You cannot deploy this software on hardware with <500 MFLOPS/Watt efficiency (preventing e-waste burning), unless designated as "Historical/Heritage".

### For Participants
- **You still own your code.** The code you write for challenges is yours.
- **You are protected.** This license prevents your work from being weaponized by "Energy Grifters" who want to destabilize the Swiss grid for quick profit.
- **You are building infrastructure.** Real infrastructure requires rules of the road. This is ours.

### For LEGs (Lokale Elektrizitätsgemeinschaften)

- **Commercial use allowed**: Apache 2.0 enables commercial LEG operations
- **Three revenue streams**: Energy, compute, heat (not just one)
- **Grid stability**: Server can throttle/boost based on grid signals
- **Resilience**: Community backup when grid fails
- **Open-source stack**: No vendor lock-in, full control

### For Switzerland

- **Energy sovereignty**: Decentralized infrastructure, not cloud-dependent
- **Swiss precision advantage**: Small, precise, coordinated (vs. Silicon Valley scale)
- **Data sovereignty**: Local compute, no data leaves Switzerland
- **Innovation model**: Participant-driven, not corporate-driven

## Event Format

### Timeline

- **September 20-22, 2025**: 3-day hackathon
- **Friday**: Kickoff, team formation, hardware setup
- **Saturday**: Building, testing, iteration
- **Sunday**: Demo day, presentations, judging, prize distribution

### Physical Setup

- **Venue**: To be announced (industrial heritage site preferred)
- **Hardware**: Server hardware, GPUs, thermal components provided
- **Safety**: Professional electrical engineers on-site
- **Tools**: Open-source stack (Prometheus, Node-RED, k3s, etc.)
- **Catering**: Covered by operating budget
- **Documentation**: Professional photography/video

### Challenge Evaluation Infrastructure

- **Node-RED**: Orchestrator for submissions, evaluations, scoring, leaderboard
- **MCP-Server**: Capability gateway with RBAC, audit logging, rate limiting
- **Submission Format**: Policy-Config (JSON/YAML) for MVP, Container (OCI) later
- **Scoring**: Deterministic formula (Comfort, Resilience, Cost, SLA)
- **Anti-Scam**: Node identity, signed receipts, random audits, reputation system

## Why This Works

### Participant Agency

"Du baust es" - participants own the solutions. Not "we build" but "you build." This creates genuine ownership and commitment. Apache 2.0 means you can fork, compete, commercialize. We encourage that.

### Open Architecture

Three thermal paths, teams choose. No prescribed solution, only constraints. This attracts real engineers who want to solve problems, not assemble kits.

### Swiss Precision vs Silicon Valley Scale

Silicon Valley builds datacenters that heat rivers. We build servers that heat houses. Small, precise, coordinated. The Sihlvalley challenges Silicon Valley with Swiss precision.

### Energy Sovereignty

Decentralized infrastructure, local-first, no cloud dependency. Data stays in Switzerland. Compute runs on Swiss solar. Heat warms Swiss buildings. This is sovereignty, not convenience.
