"""Grid-OS REST API Server (FastAPI)."""
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, Field
from typing import List, Optional
import time

app = FastAPI(title="Grid-OS API", description="REST API for Sihlicon Hub Grid-OS", version="0.1.0")

class JobSubmitRequest(BaseModel):
    job_class: str = Field("batch")
    job_type: str = Field(...)
    name: str = Field(..., min_length=1, max_length=200)
    priority: int = Field(0, ge=0, le=100)
    estimated_watts: float = Field(100, ge=0)
    estimated_hours: float = Field(1.0, ge=0.01)
    checkpointable: bool = True

class HealthResponse(BaseModel):
    status: str
    uptime_ticks: int
    avg_tick_ms: float
    mode: str
    shedding_level: int
    version: str = "0.1.0"

@app.get("/api/v1/health", response_model=HealthResponse)
async def health():
    return HealthResponse(status="ok", uptime_ticks=0, avg_tick_ms=0, mode="BOOT", shedding_level=0)

@app.get("/api/v1/sensors")
async def get_sensors():
    return {"timestamp": time.time(), "p_solar_w": 0, "p_compute_w": 0, "p_grid_w": 0,
        "soc": 50, "t_cpu": 50, "t_water_in": 25, "t_water_out": 40, "t_ambient": 20,
        "grid_freq": 50, "grid_voltage": 230, "grid_price": 0.20, "heat_output_w": 0}

@app.get("/api/v1/sensors/electrical")
async def get_electrical(): return {"p_solar_w": 0, "p_grid_w": 0, "p_compute_w": 0, "soc": 50}

@app.get("/api/v1/sensors/thermal")
async def get_thermal(): return {"t_cpu": 50, "t_water_in": 25, "t_water_out": 40, "flow_rate_lpm": 5}

@app.get("/api/v1/scheduler/status")
async def scheduler_status():
    return {"mode": "SUMMER_EARN", "shedding_level": 0, "shedding_name": "L0_NORMAL",
        "compute_budget_w": 0, "running_jobs": 0, "queued_jobs": 0}

@app.get("/api/v1/scheduler/budget")
async def get_budget(): return {"compute_w": 0, "battery_w": 0, "grid_w": 0, "heat_w": 0, "utility_chf_h": 0}

@app.post("/api/v1/scheduler/mode")
async def change_mode(mode: str, reason: str = ""):
    if mode not in ["MAINTENANCE", "EMERGENCY_STOP"]:
        raise HTTPException(400, f"Can only force: MAINTENANCE, EMERGENCY_STOP")
    return {"status": "ok", "mode": mode}

@app.post("/api/v1/jobs", status_code=201)
async def submit_job(req: JobSubmitRequest):
    job_id = f"j_{int(time.time())}"
    return {"job_id": job_id, "state": "queued", "position_in_queue": 0}

@app.get("/api/v1/jobs")
async def list_jobs(): return {"jobs": []}

@app.delete("/api/v1/jobs/{job_id}")
async def cancel_job(job_id: str): return {"status": "cancelled", "job_id": job_id}

@app.get("/api/v1/shedding/status")
async def shedding_status():
    return {"level": 0, "level_name": "L0_NORMAL", "compute_multiplier": 1.0,
        "allowed_job_classes": ["realtime", "interactive", "batch", "opportunistic"]}

@app.post("/api/v1/actuators")
async def set_actuators(body: dict):
    return {"status": "accepted", "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ"), "applied": True}

@app.get("/api/v1/vpp/status")
async def vpp_status():
    return {"active_hubs": 0, "total_hubs": 0, "flex_up_kw": 0, "flex_down_kw": 0, "avg_soc_pct": 0}
