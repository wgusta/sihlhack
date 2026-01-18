/**
 * Compute API Routes
 * 
 * Handles compute job submission, status queries, and management
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import {
  submitJob,
  getJobStatus,
  listHubJobs,
  cancelJob,
  type JobSubmission,
} from '@/lib/compute/scheduler'
import { z } from 'zod'

// Job submission schema
const jobSubmissionSchema = z.object({
  hubId: z.string().uuid().optional(),
  jobType: z.enum(['ocr', 'ai-inference', 'time-series', 'video-processing', 'scientific', 'custom']),
  jobName: z.string().min(1).max(200),
  jobDescription: z.string().optional(),
  workloadConfig: z.object({
    containerImage: z.string(),
    command: z.array(z.string()).optional(),
    env: z.record(z.string(), z.string()).optional(),
    resources: z.object({
      cpu: z.string().optional(),
      memory: z.string().optional(),
      gpu: z.boolean().optional(),
    }).optional(),
    timeoutSeconds: z.number().int().positive().optional(),
  }),
  inputDataRefs: z.array(z.string()).optional(),
  estimatedComputeKwh: z.number().nonnegative().optional(),
  priority: z.number().int().default(0),
  scheduledAt: z.string().datetime().optional(),
})

/**
 * POST /api/compute - Submit a compute job
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validated = jobSubmissionSchema.parse(body)

    const submission: JobSubmission = {
      hubId: validated.hubId,
      jobType: validated.jobType,
      jobName: validated.jobName,
      jobDescription: validated.jobDescription,
      workloadConfig: validated.workloadConfig,
      inputDataRefs: validated.inputDataRefs,
      estimatedComputeKwh: validated.estimatedComputeKwh,
      priority: validated.priority,
      scheduledAt: validated.scheduledAt ? new Date(validated.scheduledAt) : undefined,
    }

    const jobId = await submitJob(session.id, submission)

    return NextResponse.json({
      success: true,
      jobId,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Error submitting job:', error)
    return NextResponse.json(
      { error: 'Failed to submit job' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/compute - List compute jobs
 * 
 * Query params:
 * - hubId: Filter by hub
 * - status: Filter by status
 * - limit: Max results (default: 50)
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const hubId = searchParams.get('hubId')
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50', 10)

    if (!hubId) {
      return NextResponse.json(
        { error: 'hubId query parameter required' },
        { status: 400 }
      )
    }

    const jobs = await listHubJobs(
      hubId,
      status as any, // Type assertion for status filter
      limit
    )

    return NextResponse.json({
      success: true,
      jobs,
    })
  } catch (error) {
    console.error('Error listing jobs:', error)
    return NextResponse.json(
      { error: 'Failed to list jobs' },
      { status: 500 }
    )
  }
}
