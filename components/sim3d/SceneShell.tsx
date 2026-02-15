'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { SimSceneFrame } from '@/types/sim'

const SimulationScene3D = dynamic(
  () => import('@/components/sim3d/SimulationScene3D').then((module) => module.SimulationScene3D),
  { ssr: false }
)

interface SceneShellProps {
  frame: SimSceneFrame
  enabled: boolean
}

export function SceneShell({ frame, enabled }: SceneShellProps) {
  const webGlAvailable = useMemo(() => {
    if (typeof window === 'undefined') {
      return true
    }
    try {
      const canvas = document.createElement('canvas')
      return Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    } catch {
      return false
    }
  }, [])

  const show3d = enabled && webGlAvailable

  return (
    <Card>
      <CardHeader>
        <CardTitle>3D Simulation Layer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {show3d ? (
          <SimulationScene3D key={frame.challengeId} frame={frame} />
        ) : (
          <div className="rounded-lg border border-historic-sepia/25 bg-white p-4">
            <p className="font-mono text-xs text-historic-sepia">
              {enabled
                ? 'WebGL unavailable: falling back to 2D visualization.'
                : '3D layer disabled by feature flag (NEXT_PUBLIC_ENABLE_SIM_3D=false).'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4" data-feature="sim3d.legend.nodes">
          {frame.nodes.map((node) => (
            <div key={node.id} className="rounded border border-historic-sepia/20 bg-white px-2 py-1.5" data-feature={`sim3d.node.${node.id}`}>
              <p className="font-mono text-[11px] text-brand-black">{node.label}</p>
              <p className="font-mono text-[10px] text-historic-sepia">{node.value}{node.unit || ''}</p>
            </div>
          ))}
        </div>

        <div className="rounded border border-historic-sepia/20 bg-white px-3 py-2" data-feature="sim3d.legend.flows">
          <p className="font-mono text-[11px] text-brand-black">Flows: {frame.flows.length}</p>
          <p className="font-mono text-[10px] text-historic-sepia">
            Energy, heat and data links animate based on run metrics and event severity.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
