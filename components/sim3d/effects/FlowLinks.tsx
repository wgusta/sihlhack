'use client'

import { useMemo, useRef } from 'react'
import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { Vector3 } from 'three'
import type { SimSceneFlow, SimSceneNodeId } from '@/types/sim'

interface FlowLinksProps {
  flows: SimSceneFlow[]
  nodePositions: Record<SimSceneNodeId, [number, number, number]>
}

export function FlowLinks({ flows, nodePositions }: FlowLinksProps) {
  const orbs = useRef<Array<Mesh | null>>([])

  const segments = useMemo(() => {
    return flows
      .filter((flow) => nodePositions[flow.from] && nodePositions[flow.to])
      .map((flow) => {
        const from = new Vector3(...nodePositions[flow.from])
        const to = new Vector3(...nodePositions[flow.to])
        const mid = from.clone().lerp(to, 0.5)
        mid.y += flow.type === 'heat' ? 0.9 : 0.45
        return {
          flow,
          points: [from.toArray(), mid.toArray(), to.toArray()] as [number, number, number][],
        }
      })
  }, [flows, nodePositions])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    segments.forEach((segment, index) => {
      const orb = orbs.current[index]
      if (!orb) {
        return
      }
      const [a, b, c] = segment.points.map((p) => new Vector3(...p))
      const phase = (t * (0.28 + segment.flow.intensity * 0.9)) % 1
      const ab = a.clone().lerp(b, phase)
      const bc = b.clone().lerp(c, phase)
      const point = ab.lerp(bc, phase)
      orb.position.copy(point)
      orb.visible = segment.flow.active
    })
  })

  return (
    <group data-feature="sim3d.flow.energy">
      {segments.map((segment, index) => {
        const color = flowColor(segment.flow.type)
        return (
          <group key={segment.flow.id}>
            <Line
              points={segment.points}
              color={color}
              lineWidth={1 + segment.flow.intensity * 1.3}
              opacity={0.18 + segment.flow.intensity * 0.6}
              transparent
            />
            <mesh ref={(mesh) => { orbs.current[index] = mesh }}>
              <sphereGeometry args={[0.08, 12, 12]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function flowColor(type: SimSceneFlow['type']): string {
  if (type === 'heat') {
    return '#fb7185'
  }
  if (type === 'data') {
    return '#38bdf8'
  }
  return '#86efac'
}
