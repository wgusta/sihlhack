'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { Html } from '@react-three/drei'
import { nodeColor, type SceneNodeProps } from '@/components/sim3d/nodes/types'

export function HeatingNode({ node, position, selected, onHover, onSelect }: SceneNodeProps) {
  const ringRef = useRef<Mesh>(null)

  useFrame(() => {
    if (ringRef.current) {
      const pulse = 1 + Math.sin(Date.now() / 350) * (0.04 + node.pulse * 0.08)
      ringRef.current.scale.setScalar(pulse)
      ringRef.current.rotation.y += 0.01
    }
  })

  return (
    <group
      position={position}
      onPointerOver={() => onHover(node.id)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.55, 1.2, 18]} />
        <meshStandardMaterial color="#334155" metalness={0.25} roughness={0.6} />
      </mesh>
      <mesh ref={ringRef} position={[0, 1.05, 0]}>
        <torusGeometry args={[0.48, 0.1, 12, 26]} />
        <meshStandardMaterial color={nodeColor(node.status)} emissive={nodeColor(node.status)} emissiveIntensity={0.1 + node.pulse * 0.5} />
      </mesh>
      {selected ? (
        <Html distanceFactor={10} position={[0, 1.7, 0]}>
          <div className="rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white" data-feature="sim3d.node.heating">
            {node.label}: {node.value}{node.unit || ''}
          </div>
        </Html>
      ) : null}
    </group>
  )
}
