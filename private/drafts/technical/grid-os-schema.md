# Grid-OS Architecture & Thermal Schema Draft

## 1. Grid-OS Core Logic (The "Conscience")

The Grid-OS is the brain of the Sihlicon Hub. It dictates *when* to compute and *when* to store/release energy.

### Architecture Overview

```mermaid
graph TD
    SolarInput[Solar PV Input] --> EnergyManager
    GridSignal[Grid Frequency/Signal] --> EnergyManager
    Battery[Battery State] <--> EnergyManager
    
    EnergyManager --> Scheduler
    
    JobQueue[Deferred Job Queue] --> Scheduler
    RealTime[Real-time Workload] --> Scheduler
    
    Scheduler --> ComputeNode[Compute Node (CPU/GPU)]
    ComputeNode --> ThermalController
    ThermalController --> HeatOutput[Heating System]
```

### Core Interfaces (TypeScript Draft)

```typescript
// The "Conscience" - Rules for operating the node
interface GridConscience {
  mode: 'SELF_CONSUMPTION' | 'GRID_SUPPORT' | 'EMERGENCY_SHEDDING';
  minBatteryReserve: number; // Percentage (e.g., 20%)
  thermalPriority: boolean; // If true, burn compute just for heat (Winter mode)
}

// The Input State
interface EnergyState {
  solarInputWatts: number;
  gridFrequencyHz: number; // 50.0Hz is nominal
  batteryLevel: number; // 0-100%
  currentHeatDemand: number; // 0-100% (based on thermostat)
}

// The Decision Output
interface ControlDecision {
  allowCompute: boolean;
  computeThrottle: number; // 0-1.0 (Throttle CPU/GPU)
  batteryAction: 'CHARGE' | 'DISCHARGE' | 'IDLE';
  fanSpeed: number; // 0-100%
  auxHeater: boolean; // Turn on resistive backup if compute heat isn't enough?
}

// The Scheduler Logic
class SihlScheduler {
  decide(state: EnergyState, rules: GridConscience): ControlDecision {
    // 1. Safety First: Grid Frequency Check
    if (state.gridFrequencyHz < 49.8) {
       return { allowCompute: false, batteryAction: 'DISCHARGE', computeThrottle: 0, fanSpeed: 0, auxHeater: false };
    }

    // 2. Heat Demand Logic
    if (rules.thermalPriority && state.currentHeatDemand > 0) {
       // Run "Ethical Heater" workloads (Fold@Home, etc.)
       return { allowCompute: true, computeThrottle: 1.0, batteryAction: 'IDLE', fanSpeed: 80, auxHeater: false };
    }

    // 3. Solar Budgeting (Default)
    if (state.solarInputWatts > 500) {
       return { allowCompute: true, computeThrottle: 1.0, batteryAction: 'CHARGE', fanSpeed: 50, auxHeater: false };
    }

    return { allowCompute: false, computeThrottle: 0, batteryAction: 'IDLE', fanSpeed: 0, auxHeater: false };
  }
}
```

## 2. Drizzle Schema: Thermal Paths

This schema defines how we track the physical configuration of each team's hub.

```typescript
import { pgTable, serial, text, integer, boolean, jsonb, timestamp } from 'drizzle-orm/pg-core';

export const thermalPaths = pgTable('thermal_paths', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id').notNull(), // Foreign Key to Team
  
  // The Three Paths
  pathType: text('path_type', { enum: ['IMMERSION_OIL', 'WATER_LOOP', 'HEAT_PUMP'] }).notNull(),
  
  // Technical Specs
  coolantVolumeLiters: integer('coolant_volume_liters').notNull(),
  targetOutputTemp: integer('target_output_temp').notNull(), // e.g., 60 (Celsius)
  maxDissipationWy: integer('max_dissipation_watts').notNull(), // e.g., 800W
  
  // Safety Validation (The "Hardware Safety" Challenge)
  safetyCaseUrl: text('safety_case_url'), // Link to PDF/Docs
  hasOverheatProtection: boolean('has_overheat_protection').default(false),
  hasLeakDetection: boolean('has_leak_detection').default(false),
  
  // Performance Metrics (Verified during Hackathon)
  verifiedDeltaT: integer('verified_delta_t'), // Temp difference In/Out
  efficiencyRating: text('efficiency_rating'), // A, B, C (Calculated)
  
  // Metadata
  configurationJson: jsonb('configuration_json'), // Specific parts list (BOM)
  createdAt: timestamp('created_at').defaultNow(),
});

export const energyLog = pgTable('energy_logs', {
  id: serial('id').primaryKey(),
  nodeId: integer('node_id').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
  
  inputWatts: integer('input_watts'),
  computeLoadPercent: integer('compute_load_percent'),
  thermalOutputTemp: integer('thermal_output_temp'),
  flowRate: integer('flow_rate'), // Liters per minute
});
```
