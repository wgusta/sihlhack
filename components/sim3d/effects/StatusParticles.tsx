'use client'

import { Sparkles } from '@react-three/drei'
import type { SimSceneNodeId, SimSceneNodeState } from '@/types/sim'

interface StatusParticlesProps {
  nodes: SimSceneNodeState[]
  nodePositions: Record<SimSceneNodeId, [number, number, number]>
  reducedMotion: boolean
}

export function StatusParticles({ nodes, nodePositions, reducedMotion }: StatusParticlesProps) {
  if (reducedMotion) {
    return null
  }

  return (
    <group data-feature="sim3d.flow.status-particles">
      {nodes
        .filter((node) => node.status === 'warning' || node.status === 'critical')
        .map((node) => {
          const position = nodePositions[node.id]
          if (!position) {
            return null
          }

          const isCritical = node.status === 'critical'
          return (
            <Sparkles
              key={node.id}
              count={isCritical ? 24 : 14}
              scale={1.9}
              size={isCritical ? 4 : 2.2}
              speed={isCritical ? 0.75 : 0.35}
              color={isCritical ? '#ef4444' : '#f59e0b'}
              position={[position[0], position[1] + 0.8, position[2]]}
            />
          )
        })}
    </group>
  )
}
