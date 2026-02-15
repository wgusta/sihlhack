# MQTT Topic Contracts

## Canonical Namespace
- `sihlhack/*`

## Transitional Legacy Namespace
- `sihlhub/*` (supported during migration window)

## Sensor Data (Challenge 1)
Publish:
- `sihlhack/{node_id}/sensors/{measurement}` (canonical)
- `sihlhub/{node_id}/sensors/{measurement}` (legacy transition)

Payload (flat event):
- `node_id`, `sensor_id`, `measurement`, `value`, `raw_value`, `unit`, `quality`, `timestamp`, `location?`

QoS:
- Sensor data: QoS0

## Heartbeats (Challenge 1 -> Challenge 2)
- `sihlhack/safety/{hub_id}/heartbeat`
- Transitional consume support: `sihlhub/safety/{hub_id}/heartbeat`

QoS:
- Heartbeat: QoS1

## Safety Outputs (Challenge 2)
- `sihlhack/safety/{entity_id}/status` (QoS2, retain)
- `sihlhack/safety/{hub_id}/anomaly` (QoS1)
- `sihlhack/safety/global/degradation` (QoS2, retain)
- `sihlhack/safety/global/failover` (QoS2)

## Failover Commands
- `sihlhack/command/{hub_id}/isolate` (QoS2)
- `sihlhack/command/{partner_hub}/partner_failed` (QoS2)

## Migration Timeline
- Dual publish/consume active through **2026-06-30**.
- Remove `sihlhub/*` producers/consumers on **2026-07-01**.
