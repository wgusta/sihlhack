import type {
  SimArtifacts,
  SimChallengeId,
  SimRunDetail,
  SimRunSummary,
  SimSceneFlow,
  SimSceneFrame,
  SimSceneNodeState,
  SimSceneNodeStatus,
} from '@/types/sim'

const BASE_NODE_LAYOUT: SimSceneNodeState[] = [
  { id: 'solar', label: 'Solar', health: 88, value: 1.2, unit: 'kW', status: 'active', pulse: 0.6 },
  { id: 'grid', label: 'Grid', health: 92, value: 0.18, unit: 'kW', status: 'idle', pulse: 0.25 },
  { id: 'compute', label: 'Compute', health: 85, value: 2.4, unit: 'kW', status: 'active', pulse: 0.7 },
  { id: 'battery', label: 'Battery', health: 90, value: 64, unit: '%', status: 'active', pulse: 0.4 },
  { id: 'house', label: 'House', health: 95, value: 1.1, unit: 'kW', status: 'active', pulse: 0.35 },
  { id: 'heating', label: 'Heating', health: 86, value: 45, unit: '°C', status: 'active', pulse: 0.55 },
  { id: 'sensor', label: 'Sensor', health: 90, value: 0, unit: 'events', status: 'idle', pulse: 0.2 },
  { id: 'safety', label: 'Safety', health: 94, value: 0, unit: 'state', status: 'active', pulse: 0.2 },
]

export function buildSceneFrame(
  challengeId: SimChallengeId,
  run: SimRunSummary | SimRunDetail | null,
  artifacts: SimArtifacts | null,
  previewConfig: Record<string, unknown> | null = null,
  scenarioId?: string
): SimSceneFrame {
  const metrics = (run?.summary?.metrics || {}) as Record<string, unknown>
  const events = artifacts?.events || []
  const warningCount = events.filter((event) => event.level === 'warning').length
  const criticalCount = events.filter((event) => event.level === 'critical').length
  const sensorCount = clampFloor(readConfigNumber(previewConfig, ['sensorCount'], 13), 1)
  const previewTempC = readConfigNumber(previewConfig, ['simulatedSensors', 'tempC'], 72)
  const previewFlowLps = readConfigNumber(previewConfig, ['simulatedSensors', 'flowLps'], 0.62)
  const previewGasPpm = readConfigNumber(previewConfig, ['simulatedSensors', 'gasPpm'], 120)
  const legCount = clampFloor(readConfigNumber(previewConfig, ['legCount'], 3), 1)
  const configuredComputeW = readConfigNumber(previewConfig, ['maxComputeW'], 3000)
  const configuredCpuLimit = readConfigNumber(previewConfig, ['cpuTempLimitC'], 80)
  const configuredSheddingL1 = readConfigNumber(previewConfig, ['shedding', 'l1'], 47)
  const configuredSheddingL2 = readConfigNumber(previewConfig, ['shedding', 'l2'], 46)

  const nodes = BASE_NODE_LAYOUT.map((base) => ({ ...base }))

  const setNode = (
    id: SimSceneNodeState['id'],
    updates: Partial<Omit<SimSceneNodeState, 'id'>>
  ) => {
    const node = nodes.find((entry) => entry.id === id)
    if (node) {
      Object.assign(node, updates)
    }
  }

  const computeFallback = challengeId === 'grid-os'
    ? configuredComputeW * 0.72
    : challengeId === 'sensor-logic'
      ? Math.max(1200, previewTempC * 28)
      : 2400
  const computeW = readMetricNumber(metrics, 'compute_w', toSeriesPeak(artifacts, ['compute_w', 'p_compute_w'], computeFallback))
  const gridFallback = challengeId === 'grid-os' ? Math.max(120, configuredComputeW * 0.08) : 180
  const gridW = readMetricNumber(metrics, 'grid_w', toSeriesPeak(artifacts, ['grid_w', 'p_grid_w'], gridFallback))
  const solarW = toSeriesPeak(artifacts, ['solar_w', 'p_solar_w'], Math.max(250, computeW * 0.45))
  const batterySoc = toSeriesPeak(artifacts, ['soc', 'battery_soc'], 62)
  const heatingTemp = toSeriesPeak(
    artifacts,
    ['heat_w', 't_water_out'],
    challengeId === 'sensor-logic' ? Math.max(35, previewTempC - 18) : challengeId === 'grid-os' ? 55 : 43
  )

  setNode('solar', {
    value: round(solarW / 1000, 2),
    unit: 'kW',
    pulse: clamp01(solarW / 3500),
    status: statusFromSeverity(warningCount, criticalCount),
  })
  setNode('grid', {
    value: round(gridW / 1000, 2),
    unit: 'kW',
    pulse: clamp01(Math.abs(gridW) / 1200),
    status: criticalCount > 0 ? 'warning' : 'idle',
  })
  setNode('compute', {
    value: round(computeW / 1000, 2),
    unit: 'kW',
    pulse: clamp01(computeW / 3000),
    status: criticalCount > 0
      ? 'critical'
      : challengeId === 'grid-os' && configuredCpuLimit <= 70
        ? 'warning'
        : warningCount > 0
          ? 'warning'
          : 'active',
  })
  setNode('battery', {
    value: round(batterySoc, 1),
    unit: '%',
    pulse: clamp01(Math.abs(50 - batterySoc) / 60),
    status: batterySoc < 25 ? 'warning' : 'active',
  })
  setNode('house', {
    value: round(Math.max(0.6, challengeId === 'sensor-logic' ? previewFlowLps * 1.8 : computeW / 2600), 2),
    unit: 'kW',
    pulse: clamp01(computeW / 3200),
    status: 'active',
  })
  setNode('heating', {
    value: round(heatingTemp, 1),
    unit: challengeId === 'grid-os' ? 'Wth' : '°C',
    pulse: clamp01(heatingTemp / 100),
    status: heatingTemp > 70 ? 'warning' : 'active',
  })
  setNode('sensor', {
    value: events.length || sensorCount,
    unit: 'events',
    pulse: clamp01((events.length + previewGasPpm / 80) / 12),
    status: previewGasPpm > 260 ? 'warning' : statusFromSeverity(warningCount, criticalCount),
  })

  const safetyState = String(metrics.final_state || metrics.mode || 'NORMAL').toUpperCase()
  setNode('safety', {
    value: legCount,
    unit: `${safetyState} · ${legCount} LEG`,
    pulse: safetyState.includes('LOCKOUT') || safetyState.includes('E_STOP') ? 0.95 : 0.35,
    status:
      safetyState.includes('LOCKOUT') || safetyState.includes('E_STOP')
        ? 'critical'
        : safetyState.includes('CRITICAL') || safetyState.includes('WARNING')
          ? 'warning'
          : 'active',
  })

  const flows = buildFlows(challengeId, nodes)

  const mode =
    challengeId === 'grid-os'
      ? String(metrics.mode || scenarioId || `AUTO · L1:${configuredSheddingL1} L2:${configuredSheddingL2}`)
      : challengeId === 'safety-coordination'
        ? String(metrics.final_state || `NORMAL · ${legCount} LEG`)
        : `SENSOR · ${sensorCount}ch · ${round(previewFlowLps, 2)}L/s`

  return {
    challengeId,
    mode,
    nodes,
    flows,
    timestamp: Date.now(),
  }
}

function readConfigNumber(
  config: Record<string, unknown> | null,
  path: string[],
  fallback: number
): number {
  if (!config) {
    return fallback
  }

  let cursor: unknown = config
  for (const key of path) {
    if (!cursor || typeof cursor !== 'object' || !(key in cursor)) {
      return fallback
    }
    cursor = (cursor as Record<string, unknown>)[key]
  }

  if (typeof cursor === 'number') {
    return cursor
  }
  if (typeof cursor === 'string') {
    const parsed = Number.parseFloat(cursor)
    return Number.isNaN(parsed) ? fallback : parsed
  }
  return fallback
}

function clampFloor(value: number, minimum: number): number {
  return Math.max(minimum, Math.floor(value))
}

function buildFlows(
  challengeId: SimChallengeId,
  nodes: SimSceneNodeState[]
): SimSceneFlow[] {
  const getPulse = (id: SimSceneNodeState['id']) => nodes.find((node) => node.id === id)?.pulse || 0.2

  const energyFlow = Math.max(getPulse('solar'), getPulse('compute'))
  const heatFlow = Math.max(getPulse('compute'), getPulse('heating'))

  const base: SimSceneFlow[] = [
    { id: 'flow-solar-compute', from: 'solar', to: 'compute', type: 'energy', intensity: energyFlow, active: true },
    { id: 'flow-solar-battery', from: 'solar', to: 'battery', type: 'energy', intensity: getPulse('solar') * 0.7, active: true },
    { id: 'flow-battery-compute', from: 'battery', to: 'compute', type: 'energy', intensity: getPulse('battery') * 0.55, active: true },
    { id: 'flow-compute-heating', from: 'compute', to: 'heating', type: 'heat', intensity: heatFlow, active: true },
    { id: 'flow-grid-house', from: 'grid', to: 'house', type: 'energy', intensity: getPulse('grid') * 0.6, active: true },
  ]

  if (challengeId === 'sensor-logic') {
    base.push({
      id: 'flow-sensor-compute',
      from: 'sensor',
      to: 'compute',
      type: 'data',
      intensity: getPulse('sensor'),
      active: true,
    })
  }

  if (challengeId === 'safety-coordination') {
    base.push({
      id: 'flow-safety-compute',
      from: 'safety',
      to: 'compute',
      type: 'data',
      intensity: getPulse('safety'),
      active: true,
    })
  }

  return base
}

function toSeriesPeak(artifacts: SimArtifacts | null, keys: string[], fallback: number): number {
  if (!artifacts?.series) {
    return fallback
  }

  let max = -Infinity
  for (const series of artifacts.series) {
    if (!keys.includes(series.key)) {
      continue
    }
    for (const point of series.points) {
      max = Math.max(max, point.value)
    }
  }

  return Number.isFinite(max) ? max : fallback
}

function readMetricNumber(metrics: Record<string, unknown>, key: string, fallback: number): number {
  const value = metrics[key]
  if (typeof value === 'number') {
    return value
  }
  if (typeof value === 'string') {
    const parsed = Number.parseFloat(value)
    return Number.isNaN(parsed) ? fallback : parsed
  }
  return fallback
}

function statusFromSeverity(warningCount: number, criticalCount: number): SimSceneNodeStatus {
  if (criticalCount > 0) {
    return 'critical'
  }
  if (warningCount > 0) {
    return 'warning'
  }
  return 'active'
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value))
}

function round(value: number, precision: number): number {
  const factor = 10 ** precision
  return Math.round(value * factor) / factor
}
