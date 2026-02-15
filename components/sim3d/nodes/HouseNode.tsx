'use client'

import { Html } from '@react-three/drei'
import { nodeColor, type SceneNodeProps } from '@/components/sim3d/nodes/types'

export function HouseNode({ node, position, selected, onHover, onSelect }: SceneNodeProps) {
  return (
    <group
      position={position}
      onPointerOver={() => onHover(node.id)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(node.id)}
    >
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[1.3, 0.8, 1.1]} />
        <meshStandardMaterial color="#f5f5f4" />
      </mesh>
      <mesh position={[0, 0.95, 0]} castShadow>
        <coneGeometry args={[0.95, 0.65, 4]} />
        <meshStandardMaterial color="#9a3412" />
      </mesh>
      <mesh position={[0, -0.4, 0]} receiveShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 12]} />
        <meshStandardMaterial color={nodeColor(node.status)} />
      </mesh>
      {selected ? (
        <Html distanceFactor={10} position={[0, 1.7, 0]}>
          <div className="rounded bg-black/80 px-2 py-1 font-mono text-[11px] text-white" data-feature="sim3d.node.house">
            {node.label}: {node.value}{node.unit || ''}
          </div>
        </Html>
      ) : null}
    </group>
  )
}
