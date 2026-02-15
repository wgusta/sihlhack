"""
heartbeat_monitor.py
Monitors heartbeats from all hubs in the LEG-Verbund.
"""
import json
import time
import logging
from enum import Enum
from dataclasses import dataclass, field
from typing import Callable, Optional
import paho.mqtt.client as mqtt

logger = logging.getLogger("heartbeat")

HEARTBEAT_INTERVAL_S = 2.0
HEARTBEAT_TIMEOUT_S = 6.0
FAILURE_THRESHOLD = 3

class HubStatus(Enum):
    ALIVE = "ALIVE"
    UNREACHABLE = "UNREACHABLE"
    FAILED = "FAILED"

@dataclass
class HubState:
    hub_id: str
    status: HubStatus = HubStatus.ALIVE
    last_heartbeat: float = 0.0
    missed_count: int = 0
    metadata: dict = field(default_factory=dict)

class HeartbeatMonitor:
    def __init__(self, mqtt_client: mqtt.Client, hub_ids: list[str],
                 on_status_change: Optional[Callable] = None):
        self.mqtt = mqtt_client
        self.hub_ids = hub_ids
        self.on_status_change = on_status_change
        self.hubs: dict[str, HubState] = {}
        for hub_id in hub_ids:
            self.hubs[hub_id] = HubState(hub_id=hub_id, last_heartbeat=time.monotonic())
        self.mqtt.message_callback_add("sihlhack/safety/+/heartbeat", self._on_heartbeat)
        self.mqtt.message_callback_add("sihlhub/safety/+/heartbeat", self._on_heartbeat)

    def _on_heartbeat(self, client, userdata, msg):
        try:
            data = json.loads(msg.payload)
            hub_id = data.get("hub_id")
            if hub_id not in self.hubs:
                return
            state = self.hubs[hub_id]
            old_status = state.status
            state.last_heartbeat = time.monotonic()
            state.missed_count = 0
            state.metadata = data
            if old_status != HubStatus.ALIVE:
                state.status = HubStatus.ALIVE
                logger.info(f"Hub {hub_id}: {old_status.value} -> ALIVE")
                if self.on_status_change:
                    self.on_status_change(hub_id, old_status, HubStatus.ALIVE)
        except (json.JSONDecodeError, KeyError) as e:
            logger.warning(f"Invalid heartbeat: {e}")

    def check_all(self):
        now = time.monotonic()
        for hub_id, state in self.hubs.items():
            elapsed = now - state.last_heartbeat
            if elapsed > HEARTBEAT_TIMEOUT_S:
                state.missed_count += 1
                old_status = state.status
                if state.missed_count >= FAILURE_THRESHOLD:
                    if state.status != HubStatus.FAILED:
                        state.status = HubStatus.FAILED
                        logger.critical(f"Hub {hub_id}: FAILED (missed {state.missed_count})")
                        if self.on_status_change:
                            self.on_status_change(hub_id, old_status, HubStatus.FAILED)
                elif state.status == HubStatus.ALIVE:
                    state.status = HubStatus.UNREACHABLE
                    logger.warning(f"Hub {hub_id}: UNREACHABLE ({elapsed:.1f}s)")
                    if self.on_status_change:
                        self.on_status_change(hub_id, old_status, HubStatus.UNREACHABLE)

    def get_hub_state(self, hub_id: str) -> Optional[HubState]:
        return self.hubs.get(hub_id)

def publish_heartbeat(mqtt_client: mqtt.Client, hub_id: str):
    mqtt_client.publish(
        f"sihlhack/safety/{hub_id}/heartbeat",
        json.dumps({"hub_id": hub_id, "timestamp": time.time(), "status": "alive"}),
        qos=1,
    )
