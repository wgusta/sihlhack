# Grid-OS: Deep Technical Specification (v1.0)

## 1. System Architecture: The "Sihl-Kernel"

The Grid-OS is a real-time control system running on the local node (e.g., Raspberry Pi 5 or NUC). It orchestrates three physical domains: **Electrical** (Power), **Thermal** (Heat), and **Digital** (Compute).

### The Control Loop (10Hz)

```mermaid
graph TD
    subgraph Inputs [Sensors & Signals]
        GridFreq[Grid Frequency (Hz)]
        Solar[Solar PV Shunt (Amps)]
        TempIn[Coolant Temp In (°C)]
        TempOut[Coolant Temp Out (°C)]
        SpotPrice[Day-Ahead Price ($/kWh)]
        HeatDemand[Thermostat Signal (0/1)]
    end

    subgraph Kernel [Sihl-Kernel State Machine]
        Safety[Safety Watchdog]
        Optimizer[Multi-Objective Optimizer]
        PID[Thermal PID Controller]
    end

    subgraph Actuators [Hardware Control]
        CPUPower[CPU/GPU Power Limit (PL1/PL2)]
        PumpPWM[Pump Speed (PWM)]
        FanPWM[Radiator Fan (PWM)]
        BatteryRelay[Battery Charge/Discharge]
        GridRelay[Grid Connect/Disconnect]
    end

    Inputs --> Safety
    Safety --> Optimizer
    Optimizer --> PID
    PID --> Actuators
```

## 2. The Optimization Core (The "Brain")

The core problem is a multi-objective optimization. We need to solve for `Decision Vector D` at every timestep `t`.

### The Formula
We maximize the **Economic & Utility Function `U`**:

$$ U(t) = (P_{compute} \cdot V_{compute}) + (P_{heat} \cdot V_{heat}) - (P_{grid} \cdot C_{grid}) + (P_{solar} \cdot \epsilon) $$

Where:
*   $P_{compute}$: Compute Power (Watts).
*   $V_{compute}$: Value of compute (Crypto yield or Job bounty).
*   $P_{heat}$: Thermal Output (Watts).
*   $V_{heat}$: Value of heat (Avoided cost of Gas/Oil).
*   $P_{grid}$: Power drawn from Grid.
*   $C_{grid}$: Cost of Grid Power (Spot price + Fees).
*   $P_{solar}$: Solar Power available.
*   $\epsilon$: Efficiency factor (DC-DC losses).

### Operational Modes (State Machine)

1.  **MODE_ISLAND (Survival):**
    *   *Trigger:* Grid Freq < 49.8Hz OR > 50.2Hz.
    *   *Action:* Disconnect Grid Relay. CPU -> Low Power (Telemetry only). Battery -> Discharge to Local Load.
2.  **MODE_WINTER_WARM (Thermal Priority):**
    *   *Trigger:* $V_{heat} > C_{grid}$ OR Thermostat = ON.
    *   *Action:* Maximize $P_{compute}$ regardless of compute value (burning power for heat). Enable "Dummy/Donation" workloads (e.g., Folding@Home) if no paid jobs exist.
3.  **MODE_SUMMER_EARN (Compute Priority):**
    *   *Trigger:* Thermostat = OFF AND Solar > 0.
    *   *Action:* Maximize $P_{compute}$ based on cooling capacity. Store excess Solar in Battery.
4.  **MODE_ARBITRAGE (Economic):**
    *   *Trigger:* $C_{grid}$ is Negative or Low.
    *   *Action:* Charge Battery from Grid + Maximize Compute.

## 3. Thermal Control (The PID Loop)

We are not just "running fans". We are targeting a specific $\Delta T$ to ensure the heat is *useful* (e.g., capable of heating a radiator).

**Goal:** Maintain $T_{out} = 60^{\circ}C$.

**The Actuator:** Pump Speed ($PWM_{pump}$).
*   *Physics:* Slower flow = Higher $\Delta T$ (Hotter water), but higher CPU die temp.
*   *Constraint:* $T_{cpu} < 85^{\circ}C$.

### PID Logic (Pseudocode)

```typescript
class ThermalController {
  targetOutTemp: number = 60.0;
  maxCpuTemp: number = 85.0;
  
  update(currentOut: number, currentCpu: number) {
    // 1. Safety Override
    if (currentCpu > this.maxCpuTemp) {
      return { pump: 100, cpu_throttle: true }; // Emergency cooling
    }

    // 2. PID Calculation for Target Temp
    const error = this.targetOutTemp - currentOut;
    const output = (this.Kp * error) + (this.Ki * this.integral) + (this.Kd * derivative);

    // 3. Inverse Logic: 
    // If Water is too COLD, SLOW DOWN the pump (let it soak heat).
    // If Water is too HOT, SPEED UP the pump.
    let newPumpSpeed = baseSpeed + output;
    
    return { pump: clamp(newPumpSpeed, 10, 100), cpu_throttle: false };
  }
}
```

## 4. Hardware Abstraction Layer (HAL)

The Grid-OS must be hardware agnostic. We define a standard JSON interface for the hardware drivers.

### `GET /api/v1/sensors`
```json
{
  "electrical": {
    "solar_input_w": 450.5,
    "grid_import_w": 120.2,
    "battery_soc_pct": 85.0,
    "grid_frequency_hz": 50.01
  },
  "thermal": {
    "coolant_in_c": 35.0,
    "coolant_out_c": 58.5,
    "cpu_die_c": 72.0,
    "flow_rate_lpm": 2.5
  }
}
```

### `POST /api/v1/actuators`
```json
{
  "cpu_power_limit_w": 65,
  "pump_duty_cycle": 0.45,
  "fan_duty_cycle": 0.0,
  "relays": {
    "aux_heater": false,
    "battery_charge": true
  }
}
```

## 5. Drizzle Schema: Telemetry & Audits

We need high-fidelity logging to prove the "Useful Work" and debug thermal events.

```typescript
import { pgTable, serial, text, integer, boolean, doublePrecision, timestamp, jsonb, index } from 'drizzle-orm/pg-core';

// 1. High-Frequency Telemetry (Partitioned by Day ideally)
export const telemetry = pgTable('telemetry_events', {
  id: serial('id').primaryKey(),
  nodeId: text('node_id').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
  
  // The Control Vector
  mode: text('mode').notNull(), // 'ISLAND', 'WINTER', 'SUMMER'
  
  // Core Metrics
  solarWatts: doublePrecision('solar_watts'),
  gridWatts: doublePrecision('grid_watts'),
  cpuTemp: doublePrecision('cpu_temp'),
  coolantOutTemp: doublePrecision('coolant_out_temp'),
  flowRate: doublePrecision('flow_rate'),
  
  // Calculated Efficiency
  cop: doublePrecision('coefficient_of_performance'), // Thermal Output / Electrical Input
});

// 2. Job Ledger (Proof of Useful Work)
export const jobLedger = pgTable('job_ledger', {
  id: serial('id').primaryKey(),
  nodeId: text('node_id').notNull(),
  
  jobType: text('job_type'), // 'RENDER', 'AI_INFERENCE', 'FOLDING', 'DUMMY_HEAT'
  wattsConsumed: doublePrecision('watts_consumed'),
  heatGeneratedJoules: doublePrecision('heat_generated_joules'),
  
  // The "Conscience" Check
  wasThrottledForGrid: boolean('was_throttled_for_grid').default(false),
  revenueEarned: doublePrecision('revenue_earned'), // In Credits/CHF
});

// 3. Safety Incidents
export const safetyLog = pgTable('safety_logs', {
  id: serial('id').primaryKey(),
  nodeId: text('node_id').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
  
  severity: text('severity').notNull(), // 'WARN', 'CRITICAL', 'PANIC'
  trigger: text('trigger').notNull(), // 'T_CPU > 95', 'LEAK_DETECTED'
  actionTaken: text('action_taken').notNull(), // 'HARD_SHUTDOWN'
});
```

## 6. Anti-Vampire Logic (The Conscience)

To prevent users from modifying the OS to just burn electricity (Vampire Mode), the OS calculates a **Thermal Efficiency Ratio (TER)**.

$$ TER = \frac{UsefulComputeOps}{JoulesHeat} $$

*   If `TER < Threshold` for > 1 hour:
    *   **Level 1:** Warning sent to Dashboard.
    *   **Level 2:** Node flagged as "Inefficient" (Prize eligibility revoked).
    *   **Level 3:** Grid-OS refuses to engage "Boost Mode" (PL2) until efficiency improves.
