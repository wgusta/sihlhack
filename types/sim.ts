export type SimChallengeId = 'sensor-logic' | 'safety-coordination' | 'grid-os'

export type SimRunStatus =
  | 'queued'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'timeout'
  | 'cancelled'

export interface SimSeriesPoint {
  t: number
  value: number
}

export interface SimSeries {
  key: string
  label: string
  unit?: string
  points: SimSeriesPoint[]
}

export interface SimEvent {
  t: number
  level: 'info' | 'warning' | 'critical'
  message: string
  featureId?: string
}

export interface SimSummary {
  headline: string
  score?: number
  checks?: Array<{
    key: string
    pass: boolean
    message: string
  }>
  metrics?: Record<string, number | string>
}

export interface SimArtifacts {
  series?: SimSeries[]
  events?: SimEvent[]
  exports?: Array<{
    label: string
    url: string
  }>
  links?: Array<{
    label: string
    url: string
  }>
  overridesPatchUrl?: string
  raw?: Record<string, unknown>
}

export interface SimRunRecord {
  id: string
  participantId: string
  challengeId: SimChallengeId
  scenarioId: string
  status: SimRunStatus
  configJson: string
  runnerRunId: string | null
  runnerImageDigest: string | null
  summaryJson: string | null
  artifactsJson: string | null
  logsUrl: string | null
  createdAt: string
  startedAt: string | null
  finishedAt: string | null
  updatedAt: string
}

export interface SimRunSummary {
  id: string
  challengeId: SimChallengeId
  scenarioId: string
  status: SimRunStatus
  createdAt: string
  finishedAt: string | null
  summary: SimSummary | null
}

export interface SimRunDetail extends SimRunSummary {
  config: Record<string, unknown>
  artifacts: SimArtifacts | null
  logsUrl: string | null
}

export type SimDevOverrides = Record<string, string>

export interface CreateSimRunRequest {
  challengeId: SimChallengeId
  scenarioId: string
  config: Record<string, unknown>
  devOverrides?: SimDevOverrides
}

export interface CreateSimRunResponse {
  runId: string
  status: SimRunStatus
}

export interface SimWebhookCompleteRequest {
  runId: string
  status: SimRunStatus
  summary?: SimSummary
  artifacts?: SimArtifacts
  logsUrl?: string
  runnerImageDigest?: string
}

export interface FeatureCodeAnchor {
  challengeId?: SimChallengeId
  path: string
  matchString: string
}

export interface FeatureMapEntry {
  featureId: string
  label: string
  description: string
  codeAnchors: FeatureCodeAnchor[]
}
