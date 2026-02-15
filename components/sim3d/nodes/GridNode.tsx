'use client'

import { Html } from '@react-three/drei'
import { nodeColor, type SceneNodeProps } from '@/components/sim3d/nodes/types'

export function GridNode({ node, position, selected, onHover, onSelect }: SceneNodeProps) {
  return (
    <group
      position={position}
      onPointerOver={() => onHover(node.id)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <mesh position={[0, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1.8, 12]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <boxGeometry args={[0.8, 0.08, 0.08]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[0, 1.28, 0]} castShadow>
        <boxGeometry args={[0.65, 0.07, 0.07]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[0, -0.25, 0]} receiveShadow>
        <cylinderGeometry args={[0.15, 0.18, 0.35, 12]} />
        <meshStandardMaterial color={nodeColor(node.status)} />
      </mesh>
      {selected ? (
        <Html distanceFactor={10} position={[0, 2.0, 0]}>
          <div className="rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white" data-feature="sim3d.node.grid">
            {node.label}: {node.value}{node.unit || ''}
          </div>
        </Html>
      ) : null}
    </group>
  )
}
