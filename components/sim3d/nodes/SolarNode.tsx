'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { Html } from '@react-three/drei'
import { nodeColor, type SceneNodeProps } from '@/components/sim3d/nodes/types'

export function SolarNode({ node, position, selected, onHover, onSelect }: SceneNodeProps) {
  const sunRef = useRef<Mesh>(null)
  const panelRef = useRef<Mesh>(null)

  useFrame((_state, delta) => {
    if (sunRef.current) {
      sunRef.current.scale.setScalar(1 + node.pulse * 0.2)
      sunRef.current.rotation.y += delta * 0.45
    }
    if (panelRef.current) {
      panelRef.current.rotation.z = Math.sin(Date.now() / 700) * 0.02
    }
  })

  return (
    <group
      position={position}
      onPointerOver={() => onHover(node.id)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <mesh ref={sunRef} position={[0, 1.15, 0]} castShadow>
        <sphereGeometry args={[0.33, 24, 24]} />
        <meshStandardMaterial color="#facc15" emissive="#f59e0b" emissiveIntensity={0.25 + node.pulse * 0.8} />
      </mesh>
      <mesh ref={panelRef} rotation={[-0.9, 0, 0]} castShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.55, 0]} receiveShadow>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color={nodeColor(node.status)} />
      </mesh>
      {selected ? (
        <Html distanceFactor={10} position={[0, 1.9, 0]}>
          <div className="rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white" data-feature="sim3d.node.solar">
            {node.label}: {node.value}{node.unit || ''}
          </div>
        </Html>
      ) : null}
    </group>
  )
}
