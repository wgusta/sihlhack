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
   - **Grid-OS Logic**: Scheduler with solar budget, deferred compute, load shedding policies
   - **Sensor Integration**: Data pipelines, real-time monitoring, sensor validation
   - **Operational Safety Logic**: Software safety interlocks, anomaly detection, emergency stop logic
4. **Thermal Path Choice**: Teams evaluate and choose (hardware provided):
   - **Path A**: Oil Immersion (99% heat capture, complex)
   - **Path B**: Water Loop (60-70% capture, proven)
   - **Path C**: Heat Pump Integration (70°C+ output, ambitious)
5. **Hackathon**: 3 days of coding and integration (September 2026)
   - **Develop**: Code against the AI Simulator (Local)
   - **Test**: Book 15-minute slot on 5V "Safety Avatar" (low-power validation)
   - **Deploy**: Finalists run code on Supervised Reference Node (The Beast)
6. **Judging**: Scoring based on deliverables and criteria
7. **Prizes**: 35% Grid-OS Logic, 35% Sensor Integration, 20% Operational Safety Logic, 10% Best Integration

### Transparency Commitment

- All collected funds visible in real-time
- Expense breakdown public
- Transaction ledger accessible
- Automatic refunds if event cancelled

## Competitive Landscape

SihlHack sits at the intersection of three existing industries, yet occupies a unique "Civic Infrastructure" niche.

| Feature | SihlHack (The Sihlicon Hub) | Blockheating / Qarnot / Heata | Traditional Hackathons | Standard Cloud (AWS/Azure) |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Goal** | Energy Sovereignty & Education | Profit via Heat/Compute Sales | Recruitment & PR | Scale & Reliability |
| **Hardware Ownership** | **Participant / Citizen** | Company (Leased to host) | Company / Sponsor | Company |
| **Thermal Model** | Open (Immersion/Water/Pump) | Proprietary / Closed Box | N/A | Air Cooled (Heat Wasted) |
| **Grid Logic** | **Open Source (Grid-OS)** | Proprietary Algorithms | N/A | Proprietary |
| **Financial Model** | Participants Pay & Own | B2B Service Contracts | Sponsors Pay & Own | Pay-per-use |
| **Social Structure** | **Decentralized Militia** | Centralized Service Provider | Temporary Teams | Centralized Corp |

### Why this matters
Existing "Server Heater" startups (Qarnot, Blockheating) treat the host as a passive landlord. They install a black box, pay a small fee, and keep the profits. **SihlHack inverts this:** You program the logic, you own the code, you control the system. The hardware remains with organizers as a platform, but teams own the Grid-OS code that makes it intelligent. We are building an active citizenry, not passive consumers.

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

## The Simulation Gap

Why do we use simulations? **Time compression**: Test 10 years of grid stress in 10 minutes. Real-world deployment requires months of validation, but a Digital Twin (AI Simulator) lets teams iterate rapidly, test edge cases, and validate logic before touching physical hardware.

The Sihl-Sim (Digital Twin API) accepts solar/grid data inputs and outputs fan/battery commands. Teams develop against this simulator locally, then deploy their validated code to supervised Reference Hardware at the main event.

### Ownership Model

- **Teams own the Code (Grid-OS)**: All code is Apache 2.0 - participants can fork, compete, commercialize
- **Hardware remains with organizers**: Reference Nodes are provided as a platform for testing and deployment
- **Prize may include dev-kit**: Winners might receive a development kit to continue work post-event

## Target Participants

### Primary Roles

- **Grid-OS Developers**: Build scheduler, deferred compute, load shedding logic
- **Sensor/Data Engineers**: Integrate sensors, build data pipelines, real-time monitoring
- **Backend Developers**: APIs, compute scheduling infrastructure, simulator integration
- **Frontend Developers**: Monitoring dashboards with real-time data visualization
- **Energy Experts**: Solar APIs, Swissgrid integration, SDL knowledge
- **Safety Logic Engineers**: Software safety interlocks, anomaly detection, emergency stop logic
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

- **Phase 1 - Snackathons (April/May 2026)**: Build the Sihl-Sim (Digital Twin API)
  - 2 days, 10-20 participants, free
  - Goal: Functional simulation API that teams will use at main event
  - Output: Sihl-Sim API ready for main event

- **Phase 2 - Main Event (September 2026)**: Code on Sim, deploy to Reference Hardware
  - **Friday**: Kickoff, team formation, simulator access
  - **Saturday**: Coding against simulator, booking Safety Avatar slots, iteration
  - **Sunday**: Finalist deployments to Reference Hardware, presentations, judging, prize distribution

### Physical Setup

- **Venue**: To be announced (industrial heritage site preferred)
- **Hardware**: 3-5 safety-certified Reference Nodes provided (Immersion, Water Loop, Heat Pump)
- **Simulator**: Sihl-Sim API (Digital Twin) - teams code against this locally
- **Safety Avatar**: 5V low-power validation system for 15-minute test slots
- **Reference Hardware**: Supervised high-end nodes for finalist deployments
- **Safety**: Professional supervisors on-site for all hardware operations
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

"Du programmierst es" - participants own the code. Not "we build hardware" but "you write the logic." Teams breathe life into provided hardware through their Grid-OS code and sensor integration. This creates genuine ownership and commitment. Apache 2.0 means you can fork, compete, commercialize. We encourage that.

### Open Architecture

Three thermal paths, teams choose. No prescribed solution, only constraints. This attracts real engineers who want to solve problems, not assemble kits.

### Swiss Precision vs Silicon Valley Scale

Silicon Valley builds datacenters that heat rivers. We build servers that heat houses. Small, precise, coordinated. The Sihlvalley challenges Silicon Valley with Swiss precision.

### Energy Sovereignty

Decentralized infrastructure, local-first, no cloud dependency. Data stays in Switzerland. Compute runs on Swiss solar. Heat warms Swiss buildings. This is sovereignty, not convenience.
