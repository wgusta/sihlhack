# Scheduling Architecture: The Unifying Challenge

## Why Scheduling Is the Core Problem

The Sihlicon Hub is not a datacenter. Traditional cloud scheduling optimizes for GEOMETRIC-SPATIAL placement: which jobs fit on which machines. The Sihlicon Hub scheduling problem is ENERGY-TEMPORAL: WHEN to compute given solar, battery, grid, and heat constraints.

Every package at SihlHack confronts scheduling, but each from a different angle.

## The Scheduling Hierarchy

Three scheduling layers, strict priority order:

### Priority 1: Safety Scheduling (Multi-Node Safety Coordination)

Heartbeat intervals, consensus checks, emergency stop propagation. Safety scheduling guarantees latency bounds REGARDLESS of energy state. When a node detects thermal runaway or grid collapse, the safety scheduler overrides everything.

- Guaranteed worst-case response: < 100ms for emergency stop
- Heartbeat frequency: fixed, never throttled by energy budget
- Consensus: distributed agreement on node health before any mode transition
- This layer CANNOT be deferred or energy-optimized; it runs at full budget always

### Priority 2: Energy-Temporal Scheduling (Grid-OS Logic)

The primary scheduler. Multi-objective optimization across:

- Energy price (day-ahead spot market)
- Solar availability (PV shunt current)
- Battery state of charge
- Heat demand (thermostat signal)
- Compute queue depth and job deadlines

The 10Hz control loop evaluates the utility function U(t) every 100ms and produces a ControlDecision: compute throttle, battery action, fan speed. This is the "brain" that decides WHEN to compute.

Key operational modes:

| Mode | Trigger | Behavior |
|------|---------|----------|
| MODE_ISLAND | Grid failure | Battery + solar only, safety-critical loads |
| MODE_WINTER_WARM | Heat demand high, solar low | Maximize thermal output, grid-powered compute |
| MODE_SUMMER_EARN | Solar surplus, heat demand low | Maximize compute throughput, export excess |
| MODE_ARBITRAGE | Price signal favorable | Shift compute to cheap energy windows |

### Priority 3: Data Scheduling (Sensor Integration)

Scheduling of sensor data ingestion, validation, aggregation, and forwarding. Sensors produce continuous data (10Hz+ for thermal, 1Hz for electrical, variable for grid signals). The scheduling challenge:

- WHEN to process: aggregate raw readings into actionable state updates
- HOW MUCH to process: energy budget constrains sensor processing depth
- Degraded modes: when energy is scarce, reduce aggregation frequency but maintain safety-critical sensor feeds

## The Circular Dependency

Sensors feed state to Grid-OS. Grid-OS decides compute budget. Compute budget constrains sensor processing. This creates a feedback loop:

```
Sensors → State → Grid-OS Scheduler → Energy Budget → Sensor Processing Budget → Sensors
```

Teams must break this loop. Possible strategies:

1. **Floor reservation**: guarantee a minimum sensor processing budget that Grid-OS cannot reduce below
2. **Two-phase scheduling**: coarse sensor pass first, then Grid-OS decision, then detailed sensor processing with remaining budget
3. **Priority channels**: safety-critical sensors always at full rate, analytics sensors throttled based on energy state

## What This Means for Each Package

### Grid-OS Logic Teams

You build the central scheduler. Your optimizer must balance five+ objectives in real-time. The 10Hz loop is your canvas. You consume state from Sensor Integration teams and respect constraints from Safety Coordination teams.

**Key deliverables:**
- Utility function U(t) implementation
- Mode transition logic
- Compute throttle and battery control decisions
- Energy budget allocation to other subsystems

### Sensor Integration Teams

You build the data pipeline that feeds the scheduler. Your challenge: deliver accurate state under variable energy budgets. When solar drops, your pipeline must degrade gracefully, maintaining safety-critical feeds while throttling analytics.

**Key deliverables:**
- Sensor ingestion and validation pipeline
- Graceful degradation strategy under energy constraints
- State aggregation that Grid-OS consumes
- Feedback loop resolution (how you handle budget changes mid-cycle)

### Multi-Node Safety Coordination Teams

You build the override layer. Your heartbeat and consensus scheduling must guarantee worst-case latency. You define the constraints that Grid-OS must respect. Your emergency paths bypass all energy optimization.

**Key deliverables:**
- Heartbeat protocol with guaranteed timing
- Consensus mechanism for multi-node state agreement
- Emergency stop propagation path
- Safety constraint API that Grid-OS queries before every mode transition

## Why This Is Different from Cloud Scheduling

| Dimension | Cloud/Neocloud Scheduling | SihlHack Energy-Temporal Scheduling |
|-----------|--------------------------|-------------------------------------|
| Primary constraint | Hardware capacity (GPUs, RAM) | Energy availability (solar, battery, grid price) |
| Optimization target | Throughput, utilization | Multi-objective: cost, heat, resilience, compute |
| Time dimension | Job duration, queuing delay | Solar curves, price curves, thermal demand cycles |
| Safety layer | SLA, redundancy | Physical safety (thermal runaway, grid collapse) |
| Deferral strategy | Queue and retry | Shift compute to solar peaks, store in battery |
| Failure mode | Job timeout, retry | Physical damage, grid instability, heat loss |

## Further Reading

- `CONCEPT.md`: Package descriptions and hackathon structure
- `TECHNICAL-REQUIREMENTS.md`: Stack and evaluation infrastructure
- `docs/compute-workloads.md`: Workload categories and Grid-OS integration
- `docs/service-apis.md`: API surface for compute, storage, heat
