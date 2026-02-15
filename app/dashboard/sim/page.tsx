'use client'

import { useEffect, useMemo, useState } from 'react'
import { ConfigEditor } from '@/components/sim/ConfigEditor'
import { RunPanel } from '@/components/sim/RunPanel'
import { RunHistory } from '@/components/sim/RunHistory'
import { EventLog } from '@/components/sim/EventLog'
import { LineChart } from '@/components/sim/LineChart'
import { SimulationTuningPanel } from '@/components/sim/SimulationTuningPanel'
import { DevInspectorOverlay } from '@/components/sim/DevInspectorOverlay'
import { CodeEditorPanel } from '@/components/sim/CodeEditorPanel'
import { SceneShell } from '@/components/sim3d/SceneShell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GridOSVisualization } from '@/components/visualizations/GridOSVisualization'
import { SIM_CHALLENGES } from '@/lib/sim/constants'
import { buildSceneFrame } from '@/lib/sim/scene-mapper'
import type {
  SimArtifacts,
  SimChallengeId,
  SimRunDetail,
  SimRunSummary,
} from '@/types/sim'

interface OpenCodeTarget {
  path: string
  line?: number
  nonce: number
}

export default function SimulationDashboardPage() {
  const [challengeId, setChallengeId] = useState<SimChallengeId>('sensor-logic')
  const [scenarioId, setScenarioId] = useState(SIM_CHALLENGES['sensor-logic'].scenarios[0])
  const [configText, setConfigText] = useState(JSON.stringify(SIM_CHALLENGES['sensor-logic'].defaultConfig, null, 2))
  const [configError, setConfigError] = useState<string | null>(null)

  const [runs, setRuns] = useState<SimRunSummary[]>([])
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null)
  const [selectedRun, setSelectedRun] = useState<SimRunDetail | null>(null)
  const [isLoadingRuns, setIsLoadingRuns] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [runComment, setRunComment] = useState('')

  const [devModeAllowed, setDevModeAllowed] = useState(false)
  const [devModeEnabled, setDevModeEnabled] = useState(false)
  const [devOverrides, setDevOverrides] = useState<Record<string, string>>({})
  const [openCodeTarget, setOpenCodeTarget] = useState<OpenCodeTarget | null>(null)

  const activeRun = selectedRun || runs.find((run) => run.id === selectedRunId) || null
  const artifacts = (selectedRun?.artifacts || null) as SimArtifacts | null
  const previewConfig = useMemo(() => {
    try {
      return JSON.parse(configText) as Record<string, unknown>
    } catch {
      return null
    }
  }, [configText])
  const sceneFrame = useMemo(
    () => buildSceneFrame(challengeId, activeRun, artifacts, previewConfig, scenarioId),
    [activeRun, artifacts, challengeId, previewConfig, scenarioId]
  )
  const is3dEnabled = process.env.NEXT_PUBLIC_ENABLE_SIM_3D === 'true'

  useEffect(() => {
    setScenarioId(SIM_CHALLENGES[challengeId].scenarios[0])
    setConfigText(JSON.stringify(SIM_CHALLENGES[challengeId].defaultConfig, null, 2))
    setConfigError(null)
    setSelectedRunId(null)
    setSelectedRun(null)
    setDevOverrides({})
    setRunComment('')
  }, [challengeId])

  useEffect(() => {
    void fetchRuns(challengeId)
  }, [challengeId])

  useEffect(() => {
    if (!selectedRunId) {
      return
    }
    void fetchRunDetail(selectedRunId)
  }, [selectedRunId])

  useEffect(() => {
    if (!selectedRunId || !activeRun) {
      return
    }

    const isLive = activeRun.status === 'queued' || activeRun.status === 'running'
    if (!isLive) {
      return
    }

    const timer = setInterval(() => {
      void fetchRunDetail(selectedRunId)
      void fetchRuns(challengeId)
    }, 2500)

    return () => clearInterval(timer)
  }, [activeRun, challengeId, selectedRunId])

  const canRun = useMemo(() => {
    try {
      JSON.parse(configText)
      return true
    } catch {
      return false
    }
  }, [configText])

  async function fetchRuns(nextChallengeId: SimChallengeId) {
    setIsLoadingRuns(true)
    try {
      const response = await fetch(`/api/sim/runs?challengeId=${encodeURIComponent(nextChallengeId)}&limit=40`, {
        credentials: 'include',
      })
      if (!response.ok) {
        return
      }
      const payload = await response.json()
      setRuns(payload.runs || [])
      setDevModeAllowed(Boolean(payload.devModeAllowed))
      if (!payload.devModeAllowed) {
        setDevModeEnabled(false)
      }
    } finally {
      setIsLoadingRuns(false)
    }
  }

  async function fetchRunDetail(runId: string) {
    const response = await fetch(`/api/sim/runs/${encodeURIComponent(runId)}`, { credentials: 'include' })
    if (!response.ok) {
      return
    }
    const payload = await response.json()
    setSelectedRun(payload.run || null)
  }

  async function submitRun() {
    setConfigError(null)

    let config: Record<string, unknown>
    try {
      config = JSON.parse(configText) as Record<string, unknown>
    } catch {
      setConfigError('Invalid JSON')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/sim/runs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          challengeId,
          scenarioId,
          config,
          comment: runComment.trim() || undefined,
          devOverrides: devModeEnabled ? devOverrides : undefined,
        }),
      })

      const payload = await response.json().catch(() => ({}))
      if (!response.ok) {
        setConfigError(payload.error || 'Run submission failed')
        return
      }

      await fetchRuns(challengeId)
      if (payload.runId) {
        setRunComment('')
        setSelectedRunId(payload.runId)
        await fetchRunDetail(payload.runId)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  async function cancelRun() {
    if (!selectedRunId) {
      return
    }

    const response = await fetch(`/api/sim/runs/${encodeURIComponent(selectedRunId)}/cancel`, {
      method: 'POST',
      credentials: 'include',
    })

    if (!response.ok) {
      return
    }

    await fetchRuns(challengeId)
    await fetchRunDetail(selectedRunId)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-brand-black">Simulation Dashboard</h1>
        <p className="mt-2 font-mono text-sm text-historic-sepia">Run challenge scenarios in sandbox and inspect code-feature mapping.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3" data-feature="sim.challenge-tabs">
        {(Object.keys(SIM_CHALLENGES) as SimChallengeId[]).map((id) => (
          <button
            key={id}
            onClick={() => setChallengeId(id)}
            className={`rounded-lg border px-4 py-3 text-left ${
              challengeId === id
                ? 'border-compute-blue bg-compute-blue/5'
                : 'border-historic-sepia/20 bg-white'
            }`}
          >
            <p className="font-display text-lg text-brand-black">{SIM_CHALLENGES[id].label}</p>
            <p className="font-mono text-xs text-historic-sepia">{SIM_CHALLENGES[id].description}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <SimulationTuningPanel
            challengeId={challengeId}
            scenarioId={scenarioId}
            onScenarioChange={setScenarioId}
            configText={configText}
            onConfigTextChange={setConfigText}
          />
          <ConfigEditor value={configText} onChange={setConfigText} error={configError} />
          <SceneShell frame={sceneFrame} enabled={is3dEnabled} />
          <ChallengeView challengeId={challengeId} run={activeRun} artifacts={artifacts} />
          <LineChart series={artifacts?.series || []} title="Simulation Signals" />
          <EventLog events={artifacts?.events || []} />
        </div>

        <div className="space-y-6">
          <RunPanel
            challengeId={challengeId}
            scenarioId={scenarioId}
            onScenarioChange={setScenarioId}
            comment={runComment}
            onCommentChange={setRunComment}
            onRun={submitRun}
            onCancel={cancelRun}
            currentRunStatus={activeRun?.status || null}
            canRun={canRun}
            isSubmitting={isSubmitting}
            devModeAllowed={devModeAllowed}
            devModeEnabled={devModeEnabled}
            onDevModeEnabledChange={setDevModeEnabled}
          />

          <RunHistory
            runs={runs}
            selectedRunId={selectedRunId}
            onSelectRun={setSelectedRunId}
          />

          {isLoadingRuns ? <p className="font-mono text-xs text-historic-sepia">Loading runs...</p> : null}

          {selectedRun?.logsUrl ? (
            <Button variant="outline" size="sm" onClick={() => window.open(selectedRun.logsUrl || '', '_blank')}>
              Open Logs
            </Button>
          ) : null}
        </div>
      </div>

      <CodeEditorPanel
        enabled={devModeAllowed && devModeEnabled}
        challengeId={challengeId}
        overrides={devOverrides}
        onOverridesChange={setDevOverrides}
        openTarget={openCodeTarget}
      />

      <DevInspectorOverlay
        enabled={devModeAllowed && devModeEnabled}
        challengeId={challengeId}
        onOpenCode={(path, line) => setOpenCodeTarget({ path, line, nonce: Date.now() })}
      />
    </div>
  )
}

function ChallengeView({
  challengeId,
  run,
  artifacts,
}: {
  challengeId: SimChallengeId
  run: SimRunSummary | SimRunDetail | null
  artifacts: SimArtifacts | null
}) {
  if (challengeId === 'sensor-logic') {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sensor Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4" data-feature="sensor.threshold-alerts">
            <Step label="Sensors" detail="13 sensors @1Hz" />
            <Step label="MQTT" detail="dual namespace" />
            <Step label="Validation" detail="threshold + z-score" />
            <Step label="Alerts" detail={`${artifacts?.events?.length || 0} events`} />
          </div>
        </CardContent>
      </Card>
    )
  }

  if (challengeId === 'safety-coordination') {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Inter-LEG Safety</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5" data-feature="safety.fail-closed">
            <Step label="NORMAL" detail="steady" />
            <Step label="WARNING" detail="degradation" />
            <Step label="CRITICAL" detail="restrict" />
            <Step label="E-STOP" detail="clearance denied" />
            <Step label="LOCKOUT" detail="manual reset" />
          </div>
        </CardContent>
      </Card>
    )
  }

  const metrics = run?.summary?.metrics || {}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grid-OS Visualization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-feature="gridos.scheduler-budget">
        <GridOSVisualization />
        <div className="grid grid-cols-2 gap-3 font-mono text-xs text-brand-black">
          <Metric label="Mode" value={String(metrics.mode || 'n/a')} />
          <Metric label="Shedding" value={String(metrics.shedding || 'n/a')} />
          <Metric label="Compute W" value={String(metrics.compute_w || 'n/a')} />
          <Metric label="Grid W" value={String(metrics.grid_w || 'n/a')} />
        </div>
      </CardContent>
    </Card>
  )
}

function Step({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-md border border-historic-sepia/20 bg-white p-3">
      <p className="font-mono text-xs text-brand-black">{label}</p>
      <p className="mt-1 text-xs text-historic-sepia">{detail}</p>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-historic-sepia/20 bg-white p-2">
      <p className="text-historic-sepia">{label}</p>
      <p className="font-semibold text-brand-black">{value}</p>
    </div>
  )
}
