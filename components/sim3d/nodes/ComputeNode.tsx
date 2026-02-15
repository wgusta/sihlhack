'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { Html } from '@react-three/drei'
import { nodeColor, type SceneNodeProps } from '@/components/sim3d/nodes/types'

export function ComputeNode({ node, position, selected, onHover, onSelect }: SceneNodeProps) {
  const fanGroup = useRef<Group>(null)

  useFrame((_state, delta) => {
    if (fanGroup.current) {
      fanGroup.current.rotation.z += delta * (1 + node.pulse * 3.2)
    }
  })

  return (
    <group
      position={position}
      onPointerOver={() => onHover(node.id)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.7, 1.1, 1.3]} />
        <meshStandardMaterial color="#1f2937" roughness={0.5} metalness={0.4} />
      </mesh>
      <group ref={fanGroup} position={[0, 0.2, 0.67]}>
        <mesh>
          <cylinderGeometry args={[0.28, 0.28, 0.08, 20]} />
          <meshStandardMaterial color={nodeColor(node.status)} emissive={nodeColor(node.status)} emissiveIntensity={0.08 + node.pulse * 0.4} />
        </mesh>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.55, 0.05, 0.06]} />
          <meshStandardMaterial color="#e2e8f0" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.55, 0.05, 0.06]} />
          <meshStandardMaterial color="#e2e8f0" />
        </mesh>
      </group>
      {selected ? (
        <Html distanceFactor={10} position={[0, 1.4, 0]}>
          <div className="rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white" data-feature="sim3d.node.compute">
            {node.label}: {node.value}{node.unit || ''}
          </div>
        </Html>
      ) : null}
    </group>
  )
}
