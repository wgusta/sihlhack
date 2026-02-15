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
- `grid_os/core/pid.py`: Thermal PID (setpoint 60C, CPU override 80C)
- `grid_os/scheduler/solar_budget.py`: Mode-specific power allocation + U(t) utility
- `grid_os/compute/deferred.py`: Job scheduler with checkpoint/resume
- `grid_os/shedding/policies.py`: L0-L4 load shedding with hysteresis
- `grid_os/api/server.py`: FastAPI REST endpoints

## Economic Function
U(t) = P_compute*V_compute + P_heat*V_heat - P_grid*C_grid + P_solar*epsilon

License: Apache 2.0 | sihlhack.ch
