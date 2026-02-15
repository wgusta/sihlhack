# Challenge 2: Multi-Node Safety Coordination (LEG-Verbund)

## Stack
Python safety coordinator over MQTT (QoS 2 for safety)

## Run
```bash
docker-compose up -d  # Mosquitto + Coordinator
python -m src.coordinator.safety_coordinator
```

## Key Files
- `src/coordinator/safety_coordinator.py`: Main entry, ties all subsystems
- `src/coordinator/anomaly_detector.py`: Z-score, rate-of-change, thresholds
- `src/coordinator/estop_state_machine.py`: NORMAL → WARNING → CRITICAL → E_STOP → LOCKOUT
- `src/coordinator/heartbeat_monitor.py`: Hub liveness (2s timeout)
- `src/coordinator/failover_coordinator.py`: Degradation L0-L4, partner defense

## Safety Hierarchy
Hardware interlocks > Local safety > Anomaly detection > Coordinator > Operator

## Rule
Safety has absolute veto over Grid-OS. No exceptions.

License: Apache 2.0 | sihlhack.ch
