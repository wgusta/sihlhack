import unittest

from grid_os.compute.deferred import ComputeJob, DeferredComputeScheduler, JobClass, JobState


class SchedulerHardeningTests(unittest.TestCase):
    def test_schedule_accounts_for_running_watts(self):
        scheduler = DeferredComputeScheduler(max_concurrent=4)
        running = ComputeJob(job_id="run-1", estimated_watts=900, state=JobState.RUNNING)
        scheduler.running[running.job_id] = running

        queued = ComputeJob(job_id="q-1", job_class=JobClass.BATCH, estimated_watts=200)
        scheduler.submit(queued)

        started = scheduler.schedule(available_watts=1000, allowed_classes=[JobClass.BATCH])

        self.assertEqual(started, [])
        self.assertIn("q-1", [j.job_id for j in scheduler.queue])

    def test_periodic_rerank_prevents_starvation(self):
        scheduler = DeferredComputeScheduler(max_concurrent=1)
        j1 = ComputeJob(job_id="j1", job_class=JobClass.BATCH, estimated_watts=100)
        j2 = ComputeJob(job_id="j2", job_class=JobClass.BATCH, estimated_watts=100)
        scheduler.submit(j1)
        scheduler.submit(j2)

        # j2 becomes much older after initial queueing; rerank should pick it first.
        j2.submitted_at -= 24 * 3600
        scheduler._last_rerank = 0

        started = scheduler.schedule(available_watts=200, allowed_classes=[JobClass.BATCH])

        self.assertEqual(len(started), 1)
        self.assertEqual(started[0].job_id, "j2")


if __name__ == "__main__":
    unittest.main()
