'use client'

import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { SimChallengeId, SimRunStatus } from '@/types/sim'
import { SIM_CHALLENGES } from '@/lib/sim/constants'

interface RunPanelProps {
  challengeId: SimChallengeId
  scenarioId: string
  onScenarioChange: (scenarioId: string) => void
  comment: string
  onCommentChange: (comment: string) => void
  onRun: () => void
  onCancel: () => void
  currentRunStatus: SimRunStatus | null
  canRun: boolean
  isSubmitting: boolean
  devModeAllowed: boolean
  devModeEnabled: boolean
  onDevModeEnabledChange: (value: boolean) => void
}

export function RunPanel({
  challengeId,
  scenarioId,
  onScenarioChange,
  comment,
  onCommentChange,
  onRun,
  onCancel,
  currentRunStatus,
  canRun,
  isSubmitting,
  devModeAllowed,
  devModeEnabled,
  onDevModeEnabledChange,
}: RunPanelProps) {
  const scenarios = SIM_CHALLENGES[challengeId].scenarios
  const isActive = currentRunStatus === 'queued' || currentRunStatus === 'running'

  return (
    <Card>
      <CardHeader>
        <CardTitle>Run Control</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm font-mono text-brand-black">Scenario</span>
          <select
            value={scenarioId}
            onChange={(event) => onScenarioChange(event.target.value)}
            className="w-full rounded-md border border-historic-sepia/30 px-3 py-2 font-mono text-sm"
            data-feature="sim.scenario-selector"
          >
            {scenarios.map((scenario) => (
              <option key={scenario} value={scenario}>{scenario}</option>
            ))}
          </select>
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-mono text-brand-black">Run comment</span>
          <textarea
            value={comment}
            onChange={(event) => onCommentChange(event.target.value)}
            className="min-h-[74px] w-full rounded-md border border-historic-sepia/30 px-3 py-2 font-mono text-sm"
            placeholder="What did you change in this run?"
            maxLength={500}
            data-feature="sim.run-comment"
          />
          <p className="text-[11px] font-mono text-historic-sepia">{comment.length}/500</p>
        </label>

        {devModeAllowed ? (
          <label className="flex items-center justify-between rounded-md border border-historic-sepia/20 px-3 py-2">
            <span className="text-sm font-mono text-brand-black">Dev mode</span>
            <input
              type="checkbox"
              checked={devModeEnabled}
              onChange={(event) => onDevModeEnabledChange(event.target.checked)}
              className="h-4 w-4"
              data-feature="sim.dev-mode-toggle"
            />
          </label>
        ) : null}

        <div className="flex gap-2">
          <Button
            variant="primary"
            onClick={onRun}
            disabled={!canRun || isActive}
            isLoading={isSubmitting}
            className="flex-1"
            data-feature="sim.run-button"
          >
            Run
          </Button>
          <Button
            variant="outline"
            onClick={onCancel}
            disabled={!isActive}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>

        <p className="text-xs font-mono text-historic-sepia">
          Status: <span className="text-brand-black">{currentRunStatus || 'idle'}</span>
        </p>
      </CardContent>
    </Card>
  )
}
