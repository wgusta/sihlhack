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

License: Apache 2.0 | sihlhack.ch
