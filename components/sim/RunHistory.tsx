'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { SimRunSummary } from '@/types/sim'

interface RunHistoryProps {
  runs: SimRunSummary[]
  selectedRunId: string | null
  onSelectRun: (runId: string) => void
}

export function RunHistory({ runs, selectedRunId, onSelectRun }: RunHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Run History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {runs.length === 0 ? (
          <p className="text-sm font-mono text-historic-sepia">No runs yet.</p>
        ) : (
          runs.map((run) => (
            <button
              key={run.id}
              className={`w-full rounded-md border px-3 py-2 text-left ${
                selectedRunId === run.id
                  ? 'border-compute-blue bg-compute-blue/5'
                  : 'border-historic-sepia/20 bg-white'
              }`}
              onClick={() => onSelectRun(run.id)}
            >
              <p className="text-xs font-mono text-brand-black">{run.scenarioId}</p>
              <p className="text-xs font-mono text-historic-sepia">{run.status} · {new Date(run.createdAt).toLocaleString()}</p>
            </button>
          ))
        )}
      </CardContent>
    </Card>
  )
}
