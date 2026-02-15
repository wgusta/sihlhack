"""Grid-OS REST API Server (FastAPI) backed by live runtime state."""
import time
from dataclasses import asdict

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

from ..compute.deferred import ComputeJob, JobClass
from ..core.state_machine import OperationalMode
from ..runtime import get_control_loop

app = FastAPI(title="Grid-OS API", description="REST API for Sihlicon Hub Grid-OS", version="1.0.0")


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
    version: str = "1.0.0"


def _require_loop():
    loop = get_control_loop()
    if not loop:
        raise HTTPException(503, "Grid-OS control loop not initialized")
    return loop


@app.get("/api/v1/health", response_model=HealthResponse)
async def health():
    loop = get_control_loop()
    if not loop:
        return HealthResponse(status="degraded", uptime_ticks=0, avg_tick_ms=0.0, mode="BOOT", shedding_level=0)
    status = loop.get_full_status()
    return HealthResponse(
        status="ok",
        uptime_ticks=status["uptime_ticks"],
        avg_tick_ms=status["avg_tick_ms"],
        mode=status["mode"]["mode"],
        shedding_level=status["shedding"]["level"],
    )


@app.get("/api/v1/sensors")
async def get_sensors():
    loop = _require_loop()
    payload = asdict(loop.sensors)
    payload["timestamp"] = time.time()
    return payload


@app.get("/api/v1/sensors/electrical")
async def get_electrical():
    loop = _require_loop()
    s = loop.sensors
    return {"p_solar_w": s.p_solar_w, "p_grid_w": s.p_grid_w, "p_compute_w": s.p_compute_w, "soc": s.soc}


@app.get("/api/v1/sensors/thermal")
async def get_thermal():
    loop = _require_loop()
    s = loop.sensors
    return {"t_cpu": s.t_cpu, "t_water_in": s.t_water_in, "t_water_out": s.t_water_out, "flow_rate_lpm": s.flow_rate_lpm}


@app.get("/api/v1/scheduler/status")
async def scheduler_status():
    loop = _require_loop()
    status = loop.get_full_status()
    return {
        "mode": status["mode"]["mode"],
        "shedding_level": status["shedding"]["level"],
        "shedding_name": loop.shedding.current_level.name,
        "compute_budget_w": status["budget"]["compute_w"],
        "running_jobs": status["scheduler"]["running"],
        "queued_jobs": status["scheduler"]["queued"],
    }


@app.get("/api/v1/scheduler/budget")
async def get_budget():
    loop = _require_loop()
    status = loop.get_full_status()
    return {
        "compute_w": status["budget"]["compute_w"],
        "battery_w": status["budget"]["battery_w"],
        "grid_w": status["budget"]["grid_w"],
        "heat_w": status["budget"]["heat_w"],
        "utility_chf_h": status["utility_chf_h"],
    }


@app.post("/api/v1/scheduler/mode")
async def change_mode(mode: str, reason: str = ""):
    loop = _require_loop()
    normalized = mode.upper()
    if normalized == "AUTO":
        loop.set_manual_mode(None)
        return {"status": "ok", "mode": "AUTO", "reason": reason}
    if normalized not in ("MAINTENANCE", "EMERGENCY_STOP"):
        raise HTTPException(400, "Can only force: AUTO, MAINTENANCE, EMERGENCY_STOP")
    loop.set_manual_mode(OperationalMode[normalized])
    return {"status": "ok", "mode": normalized, "reason": reason}


@app.post("/api/v1/jobs", status_code=201)
async def submit_job(req: JobSubmitRequest):
    loop = _require_loop()
    try:
        job_class = JobClass(req.job_class.lower())
    except ValueError as exc:
        raise HTTPException(400, f"Invalid job_class: {req.job_class}") from exc

    job_id = f"j_{int(time.time() * 1000)}"
    job = ComputeJob(
        job_id=job_id,
        job_class=job_class,
        job_type=req.job_type,
        name=req.name,
        priority=req.priority,
        estimated_watts=req.estimated_watts,
        estimated_hours=req.estimated_hours,
        checkpointable=req.checkpointable,
    )
    loop.scheduler.submit(job)
    return {"job_id": job_id, "state": "queued", "position_in_queue": len(loop.scheduler.queue) - 1}


@app.get("/api/v1/jobs")
async def list_jobs():
    loop = _require_loop()
    jobs = []
    jobs.extend({"job_id": j.job_id, "state": j.state.value, "name": j.name} for j in loop.scheduler.queue)
    jobs.extend({"job_id": j.job_id, "state": j.state.value, "name": j.name} for j in loop.scheduler.running.values())
    jobs.extend({"job_id": j.job_id, "state": j.state.value, "name": j.name} for j in loop.scheduler.checkpointed.values())
    return {"jobs": jobs}


@app.delete("/api/v1/jobs/{job_id}")
async def cancel_job(job_id: str):
    loop = _require_loop()
    if not loop.scheduler.cancel_job(job_id):
        raise HTTPException(404, f"Unknown job_id: {job_id}")
    return {"status": "cancelled", "job_id": job_id}


@app.get("/api/v1/shedding/status")
async def shedding_status():
    loop = _require_loop()
    return {
        "level": loop.shedding.current_level.value,
        "level_name": loop.shedding.current_level.name,
        "compute_multiplier": loop.shedding.get_compute_multiplier(),
        "allowed_job_classes": [job_class.value for job_class in loop.shedding.get_allowed_classes()],
    }


@app.post("/api/v1/actuators")
async def set_actuators(body: dict):
    loop = _require_loop()
    if not loop.sim_client:
        raise HTTPException(503, "No sim/hardware client available")

    clear, clearance = loop.safety_client.request_clearance(loop.config.hub_id, "set_actuators")
    loop.last_clearance = clearance
    if not clear:
        return {
            "status": "blocked",
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "applied": False,
            "reason": clearance.get("reason", "clearance_denied"),
        }

    command = dict(body)
    if clearance.get("clearance_id"):
        command["clearance_id"] = clearance["clearance_id"]
    loop.last_actuators = command
    loop.sim_client.set_actuators(command)
    return {"status": "accepted", "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ"), "applied": True}


@app.get("/api/v1/vpp/status")
async def vpp_status():
    loop = get_control_loop()
    if not loop:
        return {"active_hubs": 0, "total_hubs": 0, "flex_up_kw": 0, "flex_down_kw": 0, "avg_soc_pct": 0}

    return {
        "active_hubs": 1,
        "total_hubs": 1,
        "flex_up_kw": round(max(0, loop.config.max_compute_w - loop.budget.compute_w) / 1000, 3),
        "flex_down_kw": round(max(0, loop.budget.compute_w) / 1000, 3),
        "avg_soc_pct": loop.sensors.soc,
    }
