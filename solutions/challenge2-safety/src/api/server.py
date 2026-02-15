"""Challenge 2 Safety REST API."""
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, Field

from ..coordinator.safety_coordinator import SafetyCoordinator


class SafetyClearanceResponse(BaseModel):
    clear: bool
    reason: str
    ttl_ms: int
    safety_state: str
    timestamp: str
    clearance_id: str | None = None


class SafetyHubStateResponse(BaseModel):
    hub_id: str
    safety_state: str
    heartbeat_status: str
    missed_heartbeats: int | None = None
    sensor_health: float
    sensors_valid: int
    sensors_total: int
    timestamp: str


class SafetySummaryResponse(BaseModel):
    global_state: str
    degradation_level: int
    hubs: dict
    timestamp: str


def create_app(coordinator: SafetyCoordinator | None = None) -> FastAPI:
    app = FastAPI(
        title="SihlHack Safety API",
        description="Fail-closed safety clearance and status endpoints",
        version="1.0.0",
    )
    app.state.coordinator = coordinator or SafetyCoordinator()

    @app.get("/api/v1/safety/clearance", response_model=SafetyClearanceResponse)
    async def get_clearance(
        hub_id: str = Query(..., min_length=1),
        command: str = Query(..., min_length=1),
    ):
        result = app.state.coordinator.evaluate_clearance(hub_id=hub_id, command=command)
        return SafetyClearanceResponse(**result)

    @app.get("/api/v1/safety/state/{hub_id}", response_model=SafetyHubStateResponse)
    async def get_hub_state(hub_id: str):
        state = app.state.coordinator.get_hub_state(hub_id)
        if state is None:
            raise HTTPException(status_code=404, detail=f"Unknown hub_id: {hub_id}")
        return SafetyHubStateResponse(**state)

    @app.get("/api/v1/safety/summary", response_model=SafetySummaryResponse)
    async def get_summary():
        return SafetySummaryResponse(**app.state.coordinator.get_summary())

    return app


app = create_app()
