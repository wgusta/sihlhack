import type { SimArtifacts, SimRunDetail, SimRunSummary, SimSummary } from '@/types/sim'

export function parseJsonSafe<T>(value: string | null, fallback: T): T {
  if (!value) {
    return fallback
  }
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export function toRunSummary(record: {
  id: string
  challengeId: string
  scenarioId: string
  status: string
  createdAt: Date
  finishedAt: Date | null
  summaryJson: string | null
}): SimRunSummary {
  return {
    id: record.id,
    challengeId: record.challengeId as SimRunSummary['challengeId'],
    scenarioId: record.scenarioId,
    status: record.status as SimRunSummary['status'],
    createdAt: record.createdAt.toISOString(),
    finishedAt: record.finishedAt ? record.finishedAt.toISOString() : null,
    summary: parseJsonSafe<SimSummary | null>(record.summaryJson, null),
  }
}

export function toRunDetail(record: {
  id: string
  challengeId: string
  scenarioId: string
  status: string
  createdAt: Date
  finishedAt: Date | null
  summaryJson: string | null
  configJson: string
  artifactsJson: string | null
  logsUrl: string | null
}): SimRunDetail {
  return {
    ...toRunSummary(record),
    config: parseJsonSafe<Record<string, unknown>>(record.configJson, {}),
    artifacts: parseJsonSafe<SimArtifacts | null>(record.artifactsJson, null),
    logsUrl: record.logsUrl,
  }
}
