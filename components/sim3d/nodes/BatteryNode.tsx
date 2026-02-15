'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { Html } from '@react-three/drei'
import { nodeColor, type SceneNodeProps } from '@/components/sim3d/nodes/types'

export function BatteryNode({ node, position, selected, onHover, onSelect }: SceneNodeProps) {
  const fillRef = useRef<Mesh>(null)
  const ratio = Math.max(0.05, Math.min(1, node.value / 100))

  useFrame(() => {
    if (fillRef.current) {
      fillRef.current.scale.y += (ratio - fillRef.current.scale.y) * 0.12
      fillRef.current.position.y = -0.4 + fillRef.current.scale.y * 0.8 * 0.5
    }
  })

  return (
    <group
      position={position}
      onPointerOver={() => onHover(node.id)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.2, 1.6, 0.8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.65} metalness={0.35} />
      </mesh>
      <mesh ref={fillRef} position={[0, -0.15, 0.41]}>
        <boxGeometry args={[1.02, 1.28, 0.08]} />
        <meshStandardMaterial color={nodeColor(node.status)} emissive={nodeColor(node.status)} emissiveIntensity={0.12 + node.pulse * 0.45} />
      </mesh>
      <mesh position={[0, 0.95, 0]} castShadow>
        <boxGeometry args={[0.35, 0.2, 0.35]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>
      {selected ? (
        <Html distanceFactor={10} position={[0, 1.55, 0]}>
          <div className="rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white" data-feature="sim3d.node.battery">
            {node.label}: {node.value}{node.unit || ''}
          </div>
        </Html>
      ) : null}
    </group>
  )
}
