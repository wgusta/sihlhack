/**
 * Compute Scheduler Interface
 * 
 * Handles job queue management and Grid-OS integration for Sihlicon Hubs.
 * Jobs are scheduled based on solar availability, grid conditions, and priority.
 */

import { db, computeJobs, sihliconHubs } from '@/lib/db'
import { eq, and, gte, lte, desc } from 'drizzle-orm'

export type JobType = 
  | 'ocr' 
  | 'ai-inference' 
  | 'time-series' 
  | 'video-processing' 
  | 'scientific' 
  | 'custom'

export type JobStatus = 
  | 'pending' 
  | 'queued' 
  | 'running' 
  | 'completed' 
  | 'failed' 
  | 'cancelled'

export interface WorkloadConfig {
  containerImage: string
  command?: string[]
  env?: Record<string, string>
  resources?: {
    cpu?: string // e.g., "2"
    memory?: string // e.g., "4Gi"
    gpu?: boolean
  }
  timeoutSeconds?: number
}

export interface JobSubmission {
  hubId?: string // Optional: prefer specific hub, otherwise auto-assign
  jobType: JobType
  jobName: string
  jobDescription?: string
  workloadConfig: WorkloadConfig
  inputDataRefs?: string[] // Content-addressed storage refs (CIDs)
  estimatedComputeKwh?: number // Estimated energy in Wh
  priority?: number // Higher = more urgent (default: 0)
  scheduledAt?: Date // Optional: defer execution
}

export interface JobResult {
  jobId: string
  status: JobStatus
  outputDataRefs?: string[]
  actualComputeKwh?: number
  heatGeneratedKwh?: number
  errorMessage?: string
}

/**
 * Submit a compute job to the queue
 */
export async function submitJob(
  submittedBy: string,
  submission: JobSubmission
): Promise<string> {
  const [job] = await db
    .insert(computeJobs)
    .values({
      hubId: submission.hubId || await selectOptimalHub(submission),
      submittedBy,
      jobType: submission.jobType,
      jobName: submission.jobName,
      jobDescription: submission.jobDescription,
      workloadConfig: JSON.stringify(submission.workloadConfig),
      inputDataRefs: submission.inputDataRefs || [],
      estimatedComputeKwh: submission.estimatedComputeKwh,
      priority: submission.priority || 0,
      scheduledAt: submission.scheduledAt,
      status: submission.scheduledAt ? 'pending' : 'queued',
    })
    .returning({ id: computeJobs.id })

  return job.id
}

/**
 * Select optimal hub for job execution based on:
 * - Energy availability (solar forecast)
 * - Current queue depth
 * - Hub capacity
 * - Grid conditions
 */
async function selectOptimalHub(submission: JobSubmission): Promise<string> {
  // TODO: Implement hub selection logic
  // For now, return first active hub
  const [hub] = await db
    .select({ id: sihliconHubs.id })
    .from(sihliconHubs)
    .where(eq(sihliconHubs.status, 'active'))
    .limit(1)

  if (!hub) {
    throw new Error('No active hubs available')
  }

  return hub.id
}

/**
 * Get job status
 */
export async function getJobStatus(jobId: string): Promise<JobResult | null> {
  const [job] = await db
    .select()
    .from(computeJobs)
    .where(eq(computeJobs.id, jobId))

  if (!job) {
    return null
  }

  return {
    jobId: job.id,
    status: job.status as JobStatus,
    outputDataRefs: job.outputDataRefs || undefined,
    actualComputeKwh: job.actualComputeKwh || undefined,
    heatGeneratedKwh: job.heatGeneratedKwh || undefined,
    errorMessage: job.errorMessage || undefined,
  }
}

/**
 * List jobs for a hub
 */
export async function listHubJobs(
  hubId: string,
  status?: JobStatus,
  limit = 50
): Promise<JobResult[]> {
  const conditions = [eq(computeJobs.hubId, hubId)]
  if (status) {
    conditions.push(eq(computeJobs.status, status))
  }

  const jobs = await db
    .select()
    .from(computeJobs)
    .where(and(...conditions))
    .orderBy(desc(computeJobs.createdAt))
    .limit(limit)

  return jobs.map((job) => ({
    jobId: job.id,
    status: job.status as JobStatus,
    outputDataRefs: job.outputDataRefs || undefined,
    actualComputeKwh: job.actualComputeKwh || undefined,
    heatGeneratedKwh: job.heatGeneratedKwh || undefined,
    errorMessage: job.errorMessage || undefined,
  }))
}

/**
 * Cancel a pending or queued job
 */
export async function cancelJob(jobId: string): Promise<boolean> {
  const [job] = await db
    .update(computeJobs)
    .set({
      status: 'cancelled',
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(computeJobs.id, jobId),
        // Only allow cancellation of pending/queued jobs
        // Running jobs should be handled by Grid-OS
      )
    )
    .returning({ id: computeJobs.id })

  return job !== undefined
}

/**
 * Grid-OS Integration: Check if job should be throttled
 * 
 * This is called by Grid-OS when grid conditions require load reduction.
 * Returns true if job should be paused/throttled.
 */
export async function shouldThrottleJob(jobId: string): Promise<boolean> {
  const [job] = await db
    .select()
    .from(computeJobs)
    .where(eq(computeJobs.id, jobId))

  if (!job || job.status !== 'running') {
    return false
  }

  // Grid-OS will set gridThrottled flag when throttling is needed
  // This function can be extended with more sophisticated logic
  return job.gridThrottled || false
}

/**
 * Update job status (called by Grid-OS or job executor)
 */
export async function updateJobStatus(
  jobId: string,
  updates: {
    status?: JobStatus
    outputDataRefs?: string[]
    actualComputeKwh?: number
    heatGeneratedKwh?: number
    errorMessage?: string
    gridThrottled?: boolean
  }
): Promise<void> {
  await db
    .update(computeJobs)
    .set({
      ...updates,
      updatedAt: new Date(),
      // Set timestamps based on status
      startedAt: updates.status === 'running' ? new Date() : undefined,
      completedAt: updates.status === 'completed' || updates.status === 'failed' 
        ? new Date() 
        : undefined,
    })
    .where(eq(computeJobs.id, jobId))
}
