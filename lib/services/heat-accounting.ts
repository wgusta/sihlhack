/**
 * Heat Accounting Ledger
 * 
 * Tracks heat generation from compute jobs and other sources,
 * calculates credits, and handles settlement for Sihlicon Hubs.
 */

import { db, heatAccounting, computeJobs, sihliconHubs } from '@/lib/db'
import { eq, and, gte, lte, desc } from 'drizzle-orm'

export type HeatSourceType = 'compute' | 'battery-charge' | 'direct-heating'

export interface HeatGeneration {
  hubId: string
  heatGeneratedKwh: number // Heat in Wh
  periodStart: Date
  periodEnd: Date
  sourceType: HeatSourceType
  sourceJobId?: string
  metadata?: Record<string, unknown>
}

export interface HeatCredit {
  hubId: string
  periodStart: Date
  periodEnd: Date
  totalHeatKwh: number
  heatCreditChf: number // Credit in centimes
  settled: boolean
}

/**
 * Record heat generation
 * 
 * Called by Grid-OS or monitoring system when heat is generated
 */
export async function recordHeatGeneration(
  generation: HeatGeneration
): Promise<string> {
  // Calculate heat credit (if monetized)
  // Default: CHF 0.05 per kWh thermal (CHF 0.00005 per Wh)
  const heatCreditChf = Math.round(generation.heatGeneratedKwh * 0.00005)

  const [accounting] = await db
    .insert(heatAccounting)
    .values({
      hubId: generation.hubId,
      heatGeneratedKwh: generation.heatGeneratedKwh,
      periodStart: generation.periodStart,
      periodEnd: generation.periodEnd,
      sourceType: generation.sourceType,
      sourceJobId: generation.sourceJobId,
      heatCreditChf,
      metadata: generation.metadata ? JSON.stringify(generation.metadata) : null,
    })
    .returning({ id: heatAccounting.id })

  return accounting.id
}

/**
 * Record heat from compute job completion
 * 
 * Automatically called when compute job completes
 */
export async function recordHeatFromJob(
  jobId: string
): Promise<void> {
  const [job] = await db
    .select({
      hubId: computeJobs.hubId,
      heatGeneratedKwh: computeJobs.heatGeneratedKwh,
      startedAt: computeJobs.startedAt,
      completedAt: computeJobs.completedAt,
    })
    .from(computeJobs)
    .where(eq(computeJobs.id, jobId))
    .limit(1)

  if (!job || !job.heatGeneratedKwh || !job.startedAt || !job.completedAt) {
    return // Job not completed or no heat data
  }

  await recordHeatGeneration({
    hubId: job.hubId,
    heatGeneratedKwh: job.heatGeneratedKwh,
    periodStart: job.startedAt,
    periodEnd: job.completedAt,
    sourceType: 'compute',
    sourceJobId: jobId,
  })
}

/**
 * Get heat credits for a hub in a time period
 */
export async function getHeatCredits(
  hubId: string,
  periodStart: Date,
  periodEnd: Date
): Promise<HeatCredit> {
  const records = await db
    .select()
    .from(heatAccounting)
    .where(
      and(
        eq(heatAccounting.hubId, hubId),
        gte(heatAccounting.periodStart, periodStart),
        lte(heatAccounting.periodEnd, periodEnd)
      )
    )

  const totalHeatKwh = records.reduce((sum, r) => sum + r.heatGeneratedKwh, 0)
  const totalCreditChf = records.reduce((sum, r) => sum + (r.heatCreditChf || 0), 0)
  const allSettled = records.every((r) => r.settled)

  return {
    hubId,
    periodStart,
    periodEnd,
    totalHeatKwh,
    heatCreditChf: totalCreditChf,
    settled: allSettled,
  }
}

/**
 * Get all heat credits for a hub (aggregated by period)
 */
export async function getAllHeatCredits(
  hubId: string,
  limit = 100
): Promise<HeatCredit[]> {
  const records = await db
    .select()
    .from(heatAccounting)
    .where(eq(heatAccounting.hubId, hubId))
    .orderBy(desc(heatAccounting.periodStart))
    .limit(limit)

  // Group by period (simplified: each record is a period)
  return records.map((r) => ({
    hubId: r.hubId,
    periodStart: r.periodStart,
    periodEnd: r.periodEnd,
    totalHeatKwh: r.heatGeneratedKwh,
    heatCreditChf: r.heatCreditChf || 0,
    settled: r.settled,
  }))
}

/**
 * Settle heat credits (mark as paid)
 * 
 * Called when heat credits are actually paid out to hub operator
 */
export async function settleHeatCredits(
  hubId: string,
  periodStart: Date,
  periodEnd: Date
): Promise<number> {
  const records = await db
    .select()
    .from(heatAccounting)
    .where(
      and(
        eq(heatAccounting.hubId, hubId),
        gte(heatAccounting.periodStart, periodStart),
        lte(heatAccounting.periodEnd, periodEnd),
        eq(heatAccounting.settled, false)
      )
    )

  const totalCreditChf = records.reduce((sum, r) => sum + (r.heatCreditChf || 0), 0)

  // Mark all records as settled
  await db
    .update(heatAccounting)
    .set({
      settled: true,
      settledAt: new Date(),
    })
    .where(
      and(
        eq(heatAccounting.hubId, hubId),
        gte(heatAccounting.periodStart, periodStart),
        lte(heatAccounting.periodEnd, periodEnd),
        eq(heatAccounting.settled, false)
      )
    )

  return totalCreditChf
}

/**
 * Get heat generation statistics for a hub
 */
export interface HeatStats {
  totalHeatKwh: number
  totalCreditChf: number
  unsettledCreditChf: number
  periodCount: number
  lastPeriodEnd: Date | null
}

export async function getHeatStats(hubId: string): Promise<HeatStats> {
  const records = await db
    .select()
    .from(heatAccounting)
    .where(eq(heatAccounting.hubId, hubId))
    .orderBy(desc(heatAccounting.periodEnd))

  if (records.length === 0) {
    return {
      totalHeatKwh: 0,
      totalCreditChf: 0,
      unsettledCreditChf: 0,
      periodCount: 0,
      lastPeriodEnd: null,
    }
  }

  const totalHeatKwh = records.reduce((sum, r) => sum + r.heatGeneratedKwh, 0)
  const totalCreditChf = records.reduce((sum, r) => sum + (r.heatCreditChf || 0), 0)
  const unsettledCreditChf = records
    .filter((r) => !r.settled)
    .reduce((sum, r) => sum + (r.heatCreditChf || 0), 0)

  return {
    totalHeatKwh,
    totalCreditChf,
    unsettledCreditChf,
    periodCount: records.length,
    lastPeriodEnd: records[0]?.periodEnd || null,
  }
}
