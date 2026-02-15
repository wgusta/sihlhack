# Challenge 3: Grid-OS Logic (Netzanschluss)

## Stack
Python 10Hz control loop + FastAPI REST API

## Run
```bash
pip install -r requirements.txt
python -m grid_os.main                    # Mock sensors
python -m grid_os.main --api-only         # API only
```

## Key Files
- `grid_os/core/control_loop.py`: 10Hz _tick() pipeline
- `grid_os/core/state_machine.py`: ISLAND / WINTER_WARM / SUMMER_EARN / ARBITRAGE
- `grid_os/core/pid.py`: Thermal PID (setpoint 55°C, CPU override 80°C)
- `grid_os/scheduler/solar_budget.py`: Mode-specific power allocation + U(t) utility
- `grid_os/compute/deferred.py`: Job scheduler with checkpoint/resume
- `grid_os/shedding/policies.py`: L0-L4 load shedding with hysteresis
- `grid_os/sim/client.py`: Physics-coupled simulator (energy balance, thermal dynamics)
- `grid_os/api/server.py`: FastAPI REST endpoints

## Simulator Physics
All feedback paths coupled (conservation of energy verified):
- Pump PWM → flow rate → heat removal → coolant temperature
- Compute load → heat input → coolant temperature → CPU temperature
- Battery commands → SOC (coulomb counting, 92% round-trip efficiency)
- Solar: 5kWp Swiss irradiation (2500W peak, 12h day, cloud noise)
- Grid: power balance (P_grid = P_compute + P_pump + P_battery - P_solar)

## Thermal Constraints
At 3kW compute with immersion cooling (R=0.008 °C/W):
- t_cpu = t_water_out + 24°C
- Max safe water output: ~54°C (keeping t_cpu < 80°C)
- For 60°C water: use heat pump booster (COP ~10 at 5°C lift) or reduce compute

## Economic Function
U(t) = P_compute × V_compute + P_heat × V_heat - P_grid × C_grid + P_solar × ε

Default parameters (viable with AI inference workloads):
- Compute value: 0.35 CHF/kWh
- Heat value: 0.10 CHF/kWh (displaced heating)
- Grid import: 0.22 CHF/kWh (Swiss avg incl. network)
- Grid export: 0.12 CHF/kWh (Rückliefertarif)
- Net margin: 0.23 CHF/kWh → CHF 6'044/year at 3kW 24/7
- Payback: 2.5-4 years depending on hardware cost

## Arbitrage (Swiss HT/NT)
- NT (night): 0.16 CHF/kWh → charge battery
- HT (peak): 0.26 CHF/kWh → discharge + export
- Spread: 0.06-0.10 CHF/kWh (realistic Swiss tariff structure)

## Inter-LEG Compute Credits

Grid-OS can advertise available capacity as **ComputeCredits**: time-limited (15-min) offers specifying available kWh, marginal cost, thermal headroom, and energy source.

### How It Works

1. **Advertise:** Grid-OS computes excess capacity from solar budget. Publishes `ComputeCredit` via REST API with `availableKwh`, `marginalCostCHFPerKwh`, `thermalHeadroomW`, `source`, `validUntil`.
2. **Claim:** Another hub's scheduler sees the credit, matches a pending job, claims partial or full capacity.
3. **Safety gate:** Cross-LEG execution requires `SafetyClearanceResponse.clear == true` from Challenge 2 API before any remote job starts. No clearance, no execution.
4. **Execute:** Job runs on seller hub. Actual kWh metered. Heat stays at seller (thermal locality).
5. **Settle:** `ComputeTransaction` recorded. Settlement via marketplace (internal credits Phase 1, CHF via Stripe Phase 2).

### Thermal Locality Constraint

All compute becomes heat (1st law). When Hub A runs a job for Hub B, Hub A captures the heat credit (CHF 0.10/kWh). This means inter-LEG routing is primarily rational in **summer** (no heating demand, excess solar) and rarely in **winter** (heat too valuable to give away).

Breakeven: inter-LEG routing makes sense when `marginalCost_remote + lostHeatCredit < marginalCost_local`, i.e., the remote hub's cheap solar surplus outweighs the 0.10 CHF/kWh heat credit the local hub would lose.

### Scheduler Integration

The existing `solar_budget.py` mode-specific allocation extends naturally:
- **SUMMER_EARN mode:** Publish excess capacity as ComputeCredits
- **WINTER_WARM mode:** Keep all compute local (heat value too high)
- **ISLAND mode:** No cross-LEG activity (disconnected)
- **ARBITRAGE mode:** Publish credits only during NT periods when local demand is low

### Types

See `solutions/integration/shared/types.ts` for `ComputeCredit` and `ComputeTransaction` interfaces.

## Offene Risiken / Naechste Tasks
- Hardware-in-the-loop Dauerlauf fuer Scheduler-Fairness/Starvation unter Last fehlt.
- Clearance-Latenz und Ausfallpfade gegen echte Safety API in End-to-End Tests absichern.
- Manuelle Moduswechsel brauchen Betriebsrichtlinie (Operator SOP + Rollback-Regeln).

License: Apache 2.0 | sihlhack.ch
