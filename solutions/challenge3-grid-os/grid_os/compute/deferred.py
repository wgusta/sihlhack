"""Deferred Compute Scheduler with priority queue, checkpoint/resume."""
import time
import logging
import heapq
from enum import Enum
from dataclasses import dataclass, field
from typing import Optional

logger = logging.getLogger("grid_os.compute")

class JobState(Enum):
    QUEUED = "queued"
    RUNNING = "running"
    CHECKPOINTED = "checkpointed"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELLED = "cancelled"

class JobClass(Enum):
    REALTIME = "realtime"
    INTERACTIVE = "interactive"
    BATCH = "batch"
    OPPORTUNISTIC = "opportunistic"

CLASS_PRIORITY = {JobClass.REALTIME: 0, JobClass.INTERACTIVE: 1, JobClass.BATCH: 2, JobClass.OPPORTUNISTIC: 3}

@dataclass
class ComputeJob:
    job_id: str
    job_class: JobClass = JobClass.BATCH
    job_type: str = "generic"
    name: str = ""
    priority: int = 0
    estimated_watts: float = 100.0
    estimated_hours: float = 1.0
    checkpointable: bool = True
    checkpoint_interval_s: int = 300
    container_image: str = ""
    command: list = field(default_factory=list)
    env: dict = field(default_factory=dict)
    state: JobState = JobState.QUEUED
    actual_watts: float = 0.0
    actual_kwh: float = 0.0
    submitted_at: float = field(default_factory=time.time)
    started_at: Optional[float] = None
    last_checkpoint_at: Optional[float] = None

    def effective_priority(self) -> float:
        age_hours = (time.time() - self.submitted_at) / 3600
        aging_bonus = min(age_hours * 2, 20)
        class_weight = CLASS_PRIORITY.get(self.job_class, 2) * 10
        return class_weight - self.priority - aging_bonus

class DeferredComputeScheduler:
    def __init__(self, max_concurrent: int = 4):
        self.max_concurrent = max_concurrent
        self.queue: list[ComputeJob] = []
        self.running: dict[str, ComputeJob] = {}
        self.completed: list[ComputeJob] = []
        self.checkpointed: dict[str, ComputeJob] = {}

    def submit(self, job: ComputeJob) -> str:
        job.state = JobState.QUEUED
        self.queue.append(job)
        self.queue.sort(key=lambda j: j.effective_priority())
        logger.info(f"Job {job.job_id} ({job.name}) queued, priority={job.priority}")
        return job.job_id

    def schedule(self, available_watts: float, allowed_classes: list[JobClass]) -> list[ComputeJob]:
        started = []
        remaining_watts = available_watts
        for job_id, job in list(self.checkpointed.items()):
            if job.job_class in allowed_classes and job.estimated_watts <= remaining_watts:
                if len(self.running) < self.max_concurrent:
                    job.state = JobState.RUNNING
                    self.running[job_id] = job
                    del self.checkpointed[job_id]
                    remaining_watts -= job.estimated_watts
                    started.append(job)
                    logger.info(f"Resumed checkpointed job {job_id}")
        new_queue = []
        for job in self.queue:
            if (job.job_class in allowed_classes and job.estimated_watts <= remaining_watts
                    and len(self.running) < self.max_concurrent):
                job.state = JobState.RUNNING
                job.started_at = time.time()
                self.running[job.job_id] = job
                remaining_watts -= job.estimated_watts
                started.append(job)
                logger.info(f"Started job {job.job_id}")
            else:
                new_queue.append(job)
        self.queue = new_queue
        return started

    def checkpoint_job(self, job_id: str) -> bool:
        job = self.running.get(job_id)
        if not job or not job.checkpointable:
            return False
        job.state = JobState.CHECKPOINTED
        job.last_checkpoint_at = time.time()
        self.checkpointed[job_id] = job
        del self.running[job_id]
        logger.info(f"Checkpointed job {job_id}")
        return True

    def checkpoint_class(self, job_class: JobClass):
        for job_id in list(self.running.keys()):
            if self.running[job_id].job_class == job_class:
                self.checkpoint_job(job_id)

    def stop_class(self, job_class: JobClass):
        for job_id in list(self.running.keys()):
            job = self.running[job_id]
            if job.job_class == job_class:
                if job.checkpointable:
                    self.checkpoint_job(job_id)
                else:
                    job.state = JobState.CANCELLED
                    self.completed.append(job)
                    del self.running[job_id]

    def complete_job(self, job_id: str, success: bool = True):
        job = self.running.get(job_id)
        if not job:
            return
        job.state = JobState.COMPLETED if success else JobState.FAILED
        self.completed.append(job)
        del self.running[job_id]

    def get_total_watts(self) -> float:
        return sum(j.estimated_watts for j in self.running.values())

    def get_status(self) -> dict:
        return {
            "running": len(self.running),
            "queued": len(self.queue),
            "checkpointed": len(self.checkpointed),
            "completed": len(self.completed),
            "total_watts": self.get_total_watts(),
        }
