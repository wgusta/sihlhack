"""Failover coordinator: hub failure handling, degradation levels, partner defensive mode."""
import json
import time
import logging
from dataclasses import dataclass
from typing import Optional
import paho.mqtt.client as mqtt
from .heartbeat_monitor import HeartbeatMonitor, HubStatus

logger = logging.getLogger("failover")

@dataclass
class HubCapacity:
    hub_id: str
    leg_id: str
    max_compute_watts: float
    current_compute_watts: float
    max_thermal_watts: float
    current_thermal_watts: float
    battery_soc_pct: float
    is_online: bool = True
    anomaly_count: int = 0

class DegradationLevel:
    LEVEL_0 = 0  # All 4 hubs online
    LEVEL_1 = 1  # 3 hubs
    LEVEL_2 = 2  # 2 hubs
    LEVEL_3 = 3  # 1 hub
    LEVEL_4 = 4  # 0 hubs
    ALLOWED_MODES = {
        0: ["MODE_ISLAND", "MODE_WINTER_WARM", "MODE_SUMMER_EARN", "MODE_ARBITRAGE"],
        1: ["MODE_ISLAND", "MODE_WINTER_WARM", "MODE_SUMMER_EARN", "MODE_ARBITRAGE"],
        2: ["MODE_ISLAND", "MODE_WINTER_WARM"],
        3: ["MODE_ISLAND"],
        4: [],
    }

class FailoverCoordinator:
    def __init__(self, mqtt_client: mqtt.Client, heartbeat_monitor: HeartbeatMonitor):
        self.mqtt = mqtt_client
        self.heartbeat_monitor = heartbeat_monitor
        self.capacities: dict[str, HubCapacity] = {}
        self.degradation_level = DegradationLevel.LEVEL_0
        self.failed_hubs: set[str] = set()
        for hub_id in ["hub_a", "hub_b", "hub_c", "hub_d"]:
            leg_id = "leg1" if hub_id in ("hub_a", "hub_b") else "leg2"
            self.capacities[hub_id] = HubCapacity(hub_id=hub_id, leg_id=leg_id,
                max_compute_watts=5000, current_compute_watts=0,
                max_thermal_watts=8000, current_thermal_watts=0, battery_soc_pct=100)

    def on_hub_status_change(self, hub_id: str, old: HubStatus, new: HubStatus):
        if new == HubStatus.FAILED:
            self._handle_hub_failure(hub_id)
        elif new == HubStatus.UNREACHABLE:
            self._publish_failover_event(hub_id, "UNREACHABLE")
        elif new == HubStatus.ALIVE and old in (HubStatus.FAILED, HubStatus.UNREACHABLE):
            self._handle_hub_recovery(hub_id)

    def _handle_hub_failure(self, hub_id: str):
        logger.critical(f"Hub {hub_id} declared FAILED")
        self.failed_hubs.add(hub_id)
        self.capacities[hub_id].is_online = False
        self._recalculate_degradation()
        self._isolate_hub(hub_id)
        self._publish_failover_event(hub_id, "FAILED")

    def _handle_hub_recovery(self, hub_id: str):
        logger.info(f"Hub {hub_id} recovered")
        self.failed_hubs.discard(hub_id)
        self.capacities[hub_id].is_online = True
        self._recalculate_degradation()
        self._publish_failover_event(hub_id, "RECOVERED")

    def _isolate_hub(self, hub_id: str):
        self.mqtt.publish(f"sihlhack/command/{hub_id}/isolate",
            json.dumps({"command": "isolate", "hub_id": hub_id, "reason": "hub_failed", "timestamp": time.time()}), qos=1)
        partner = self._get_leg_partner(hub_id)
        if partner:
            self.mqtt.publish(f"sihlhack/command/{partner}/partner_failed",
                json.dumps({"failed_hub": hub_id, "action": "defensive_mode", "reduce_compute_pct": 50}), qos=1)

    def _get_leg_partner(self, hub_id: str) -> Optional[str]:
        partners = {"hub_a": "hub_b", "hub_b": "hub_a", "hub_c": "hub_d", "hub_d": "hub_c"}
        partner = partners.get(hub_id)
        if partner and self.capacities.get(partner, HubCapacity("", "", 0, 0, 0, 0, 0)).is_online:
            return partner
        return None

    def _recalculate_degradation(self):
        online_count = sum(1 for c in self.capacities.values() if c.is_online)
        old_level = self.degradation_level
        self.degradation_level = 4 - online_count
        if self.degradation_level != old_level:
            logger.warning(f"Degradation: Level {old_level} -> Level {self.degradation_level} ({online_count}/4 online)")
            self.mqtt.publish("sihlhack/safety/global/degradation",
                json.dumps({"level": self.degradation_level, "online_hubs": online_count,
                    "allowed_modes": DegradationLevel.ALLOWED_MODES[self.degradation_level],
                    "failed_hubs": list(self.failed_hubs), "timestamp": time.time()}),
                qos=1, retain=True)

    def _publish_failover_event(self, hub_id: str, event_type: str):
        self.mqtt.publish("sihlhack/safety/global/failover",
            json.dumps({"hub_id": hub_id, "event": event_type, "degradation_level": self.degradation_level,
                "online_hubs": [h for h, c in self.capacities.items() if c.is_online], "timestamp": time.time()}), qos=1)
