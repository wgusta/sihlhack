'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { SIM_CHALLENGES } from '@/lib/sim/constants'
import type { SimChallengeId } from '@/types/sim'

interface SimulationTuningPanelProps {
  challengeId: SimChallengeId
  scenarioId: string
  onScenarioChange: (scenarioId: string) => void
  configText: string
  onConfigTextChange: (value: string) => void
}

export function SimulationTuningPanel({
  challengeId,
  scenarioId,
  onScenarioChange,
  configText,
  onConfigTextChange,
}: SimulationTuningPanelProps) {
  const challenge = SIM_CHALLENGES[challengeId]

  const updateConfig = (mutate: (draft: Record<string, unknown>) => void) => {
    const parsedConfig = parseConfig(configText, challenge.defaultConfig)
    mutate(parsedConfig)
    onConfigTextChange(JSON.stringify(parsedConfig, null, 2))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Tuning</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challengeId === 'sensor-logic' ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2" data-feature="sim.controls.sensor-values">
            <NumberControl
              label="Sensors"
              min={1}
              max={40}
              step={1}
              value={readNumber(configText, challenge.defaultConfig, ['sensorCount'], 13)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['sensorCount'], value))}
            />
            <NumberControl
              label="CPU Temp °C"
              min={20}
              max={120}
              step={1}
              value={readNumber(configText, challenge.defaultConfig, ['simulatedSensors', 'tempC'], 72)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['simulatedSensors', 'tempC'], value))}
            />
            <NumberControl
              label="Flow L/s"
              min={0}
              max={2}
              step={0.05}
              value={readNumber(configText, challenge.defaultConfig, ['simulatedSensors', 'flowLps'], 0.62)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['simulatedSensors', 'flowLps'], value))}
            />
            <NumberControl
              label="Gas ppm"
              min={0}
              max={600}
              step={5}
              value={readNumber(configText, challenge.defaultConfig, ['simulatedSensors', 'gasPpm'], 120)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['simulatedSensors', 'gasPpm'], value))}
            />
          </div>
        ) : null}

        {challengeId === 'safety-coordination' ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2" data-feature="sim.controls.leg-values">
            <NumberControl
              label="LEG Nodes"
              min={1}
              max={12}
              step={1}
              value={readNumber(configText, challenge.defaultConfig, ['legCount'], 3)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['legCount'], value))}
            />
            <NumberControl
              label="Heartbeat s"
              min={1}
              max={10}
              step={0.5}
              value={readNumber(configText, challenge.defaultConfig, ['heartbeatTimeoutSeconds'], 2)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['heartbeatTimeoutSeconds'], value))}
            />
            <NumberControl
              label="Missed Heartbeats"
              min={1}
              max={10}
              step={1}
              value={readNumber(configText, challenge.defaultConfig, ['maxMissedHeartbeats'], 2)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['maxMissedHeartbeats'], value))}
            />
            <ToggleControl
              label="Force E-Stop"
              checked={readBoolean(configText, challenge.defaultConfig, ['forceEstop'], false)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['forceEstop'], value))}
            />
          </div>
        ) : null}

        {challengeId === 'grid-os' ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2" data-feature="sim.controls.grid-scenarios">
            <label className="block space-y-1">
              <span className="font-mono text-xs text-brand-black">Scenario</span>
              <select
                value={scenarioId}
                onChange={(event) => onScenarioChange(event.target.value)}
                className="w-full rounded-md border border-historic-sepia/30 px-2 py-1.5 font-mono text-sm"
              >
                {challenge.scenarios.map((scenario) => (
                  <option key={scenario} value={scenario}>{scenario}</option>
                ))}
              </select>
            </label>
            <NumberControl
              label="Max Compute W"
              min={500}
              max={6000}
              step={100}
              value={readNumber(configText, challenge.defaultConfig, ['maxComputeW'], 3000)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['maxComputeW'], value))}
            />
            <NumberControl
              label="CPU Temp Limit °C"
              min={45}
              max={95}
              step={1}
              value={readNumber(configText, challenge.defaultConfig, ['cpuTempLimitC'], 80)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['cpuTempLimitC'], value))}
            />
            <NumberControl
              label="Shedding L1 °C"
              min={35}
              max={60}
              step={0.5}
              value={readNumber(configText, challenge.defaultConfig, ['shedding', 'l1'], 47)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['shedding', 'l1'], value))}
            />
            <NumberControl
              label="Shedding L2 °C"
              min={35}
              max={60}
              step={0.5}
              value={readNumber(configText, challenge.defaultConfig, ['shedding', 'l2'], 46)}
              onChange={(value) => updateConfig((draft) => setPath(draft, ['shedding', 'l2'], value))}
            />
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

function NumberControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
}) {
  return (
    <label className="block space-y-1">
      <span className="font-mono text-xs text-brand-black">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-20 rounded-md border border-historic-sepia/30 px-2 py-1 font-mono text-xs"
        />
      </div>
    </label>
  )
}

function ToggleControl({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <label className="flex items-center justify-between rounded-md border border-historic-sepia/30 px-2 py-2">
      <span className="font-mono text-xs text-brand-black">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="h-4 w-4"
      />
    </label>
  )
}

function parseConfig(
  configText: string,
  fallbackConfig: Record<string, unknown>
): Record<string, unknown> {
  try {
    const parsed = JSON.parse(configText) as Record<string, unknown>
    return cloneJson(parsed)
  } catch {
    return cloneJson(fallbackConfig)
  }
}

function readNumber(
  configText: string,
  fallbackConfig: Record<string, unknown>,
  path: string[],
  fallbackValue: number
): number {
  const parsedConfig = parseConfig(configText, fallbackConfig)
  const resolved = getPath(parsedConfig, path)
  return typeof resolved === 'number' ? resolved : fallbackValue
}

function readBoolean(
  configText: string,
  fallbackConfig: Record<string, unknown>,
  path: string[],
  fallbackValue: boolean
): boolean {
  const parsedConfig = parseConfig(configText, fallbackConfig)
  const resolved = getPath(parsedConfig, path)
  return typeof resolved === 'boolean' ? resolved : fallbackValue
}

function getPath(root: Record<string, unknown>, path: string[]): unknown {
  let cursor: unknown = root
  for (const key of path) {
    if (!cursor || typeof cursor !== 'object' || !(key in cursor)) {
      return undefined
    }
    cursor = (cursor as Record<string, unknown>)[key]
  }
  return cursor
}

function setPath(root: Record<string, unknown>, path: string[], value: unknown): void {
  if (path.length === 0) {
    return
  }

  let cursor: Record<string, unknown> = root
  for (let index = 0; index < path.length - 1; index += 1) {
    const key = path[index]
    const nextValue = cursor[key]
    if (!nextValue || typeof nextValue !== 'object' || Array.isArray(nextValue)) {
      cursor[key] = {}
    }
    cursor = cursor[key] as Record<string, unknown>
  }

  cursor[path[path.length - 1]] = value
}

function cloneJson(value: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(JSON.stringify(value)) as Record<string, unknown>
}
