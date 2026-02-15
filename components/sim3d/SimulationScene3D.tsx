'use client'

import { Suspense, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Html, RoundedBox } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import type { SimSceneFrame, SimSceneNodeId, SimSceneNodeState } from '@/types/sim'
import { useGuidedCamera } from '@/components/sim3d/hooks/useGuidedCamera'
import { useReducedMotion } from '@/components/sim3d/hooks/useReducedMotion'
import { SolarNode } from '@/components/sim3d/nodes/SolarNode'
import { HouseNode } from '@/components/sim3d/nodes/HouseNode'
import { BatteryNode } from '@/components/sim3d/nodes/BatteryNode'
import { ComputeNode } from '@/components/sim3d/nodes/ComputeNode'
import { HeatingNode } from '@/components/sim3d/nodes/HeatingNode'
import { GridNode } from '@/components/sim3d/nodes/GridNode'
import { FlowLinks } from '@/components/sim3d/effects/FlowLinks'
import { StatusParticles } from '@/components/sim3d/effects/StatusParticles'
import { nodeColor } from '@/components/sim3d/nodes/types'
import { Color } from 'three'

const BASE_NODE_POSITIONS: Record<SimSceneNodeId, [number, number, number]> = {
  solar: [-4.1, 0.1, 1.7],
  grid: [-4.6, 0.0, -1.8],
  compute: [0, 0.1, 0],
  battery: [0.2, 0, 2.1],
  house: [4.0, 0.1, 1.4],
  heating: [3.6, 0, -1.6],
  sensor: [-0.9, 0.1, -2.1],
  safety: [1.3, 0.1, -2.2],
}

const SCENE_THEME = {
  'sensor-logic': {
    sky: '#c7e7ff',
    fog: '#d9efff',
    ground: '#dcefc8',
    environment: 'sunset' as const,
  },
  'safety-coordination': {
    sky: '#c5d4f5',
    fog: '#d7e2fb',
    ground: '#d8e4d2',
    environment: 'city' as const,
  },
  'grid-os': {
    sky: '#b6d9ff',
    fog: '#d0e6ff',
    ground: '#cee7bf',
    environment: 'dawn' as const,
  },
}

interface SimulationScene3DProps {
  frame: SimSceneFrame
}

export function SimulationScene3D({ frame }: SimulationScene3DProps) {
  const reducedMotion = useReducedMotion()
  const lowPower = useLowPowerDevice()

  const [hoveredNode, setHoveredNode] = useState<SimSceneNodeId | null>(null)
  const [selectedNode, setSelectedNode] = useState<SimSceneNodeId | null>(null)
  const [freezeUntil, setFreezeUntil] = useState(0)

  const nodePositions = useMemo(() => getNodePositions(frame.challengeId), [frame.challengeId])
  const focusedPosition = selectedNode ? nodePositions[selectedNode] : null
  const theme = SCENE_THEME[frame.challengeId]

  const selectedNodeState = frame.nodes.find((node) => node.id === selectedNode) || null

  const onNodeSelect = (id: SimSceneNodeId) => {
    setSelectedNode(id)
    setFreezeUntil(Date.now() + 4000)
  }

  return (
    <div className="h-[380px] w-full overflow-hidden rounded-xl border border-historic-sepia/25 bg-gradient-to-b from-slate-100 to-slate-200" data-feature="sim3d.scene.canvas">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [6.5, 3.2, 6.8], fov: 44 }}
        gl={{ antialias: true, powerPreference: lowPower ? 'low-power' : 'high-performance' }}
      >
        <Suspense fallback={null}>
          <SceneContent
            frame={frame}
            theme={theme}
            nodePositions={nodePositions}
            reducedMotion={reducedMotion}
            lowPower={lowPower}
            hoveredNode={hoveredNode}
            selectedNode={selectedNode}
            selectedNodeState={selectedNodeState}
            focusedPosition={focusedPosition}
            freezeUntil={freezeUntil}
            onNodeHover={setHoveredNode}
            onNodeSelect={onNodeSelect}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

function SceneContent({
  frame,
  theme,
  nodePositions,
  reducedMotion,
  lowPower,
  hoveredNode,
  selectedNode,
  selectedNodeState,
  focusedPosition,
  freezeUntil,
  onNodeHover,
  onNodeSelect,
}: {
  frame: SimSceneFrame
  theme: (typeof SCENE_THEME)[SimSceneFrame['challengeId']]
  nodePositions: Record<SimSceneNodeId, [number, number, number]>
  reducedMotion: boolean
  lowPower: boolean
  hoveredNode: SimSceneNodeId | null
  selectedNode: SimSceneNodeId | null
  selectedNodeState: SimSceneNodeState | null
  focusedPosition: [number, number, number] | null
  freezeUntil: number
  onNodeHover: (id: SimSceneNodeId | null) => void
  onNodeSelect: (id: SimSceneNodeId) => void
}) {
  useGuidedCamera({ challengeId: frame.challengeId, focusPosition: focusedPosition, freezeUntil, reducedMotion })

  const safety = frame.nodes.find((node) => node.id === 'safety')
  const sensor = frame.nodes.find((node) => node.id === 'sensor')

  return (
    <>
      <color attach="background" args={[theme.sky]} />
      <fog attach="fog" args={[theme.fog, 7, 26]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 9, 2]} intensity={1.05} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <directionalLight position={[-6, 5, -2]} intensity={0.45} />
      <Environment preset={theme.environment} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]} receiveShadow>
        <planeGeometry args={[20, 14]} />
        <meshStandardMaterial color={theme.ground} />
      </mesh>

      <RuralBackdrop challengeId={frame.challengeId} reducedMotion={reducedMotion} />

      <Float speed={reducedMotion ? 0 : 0.6} rotationIntensity={0.03} floatIntensity={0.06}>
        <SolarNode
          node={findNode(frame.nodes, 'solar')}
          position={nodePositions.solar}
          selected={selectedNode === 'solar' || hoveredNode === 'solar'}
          onHover={onNodeHover}
          onSelect={onNodeSelect}
        />
      </Float>

      <GridNode
        node={findNode(frame.nodes, 'grid')}
        position={nodePositions.grid}
        selected={selectedNode === 'grid' || hoveredNode === 'grid'}
        onHover={onNodeHover}
        onSelect={onNodeSelect}
      />

      <ComputeNode
        node={findNode(frame.nodes, 'compute')}
        position={nodePositions.compute}
        selected={selectedNode === 'compute' || hoveredNode === 'compute'}
        onHover={onNodeHover}
        onSelect={onNodeSelect}
      />

      <BatteryNode
        node={findNode(frame.nodes, 'battery')}
        position={nodePositions.battery}
        selected={selectedNode === 'battery' || hoveredNode === 'battery'}
        onHover={onNodeHover}
        onSelect={onNodeSelect}
      />

      <HouseNode
        node={findNode(frame.nodes, 'house')}
        position={nodePositions.house}
        selected={selectedNode === 'house' || hoveredNode === 'house'}
        onHover={onNodeHover}
        onSelect={onNodeSelect}
      />

      <HeatingNode
        node={findNode(frame.nodes, 'heating')}
        position={nodePositions.heating}
        selected={selectedNode === 'heating' || hoveredNode === 'heating'}
        onHover={onNodeHover}
        onSelect={onNodeSelect}
      />

      <FlowLinks flows={frame.flows} nodePositions={nodePositions} />
      <StatusParticles nodes={frame.nodes} nodePositions={nodePositions} reducedMotion={reducedMotion} />

      {frame.challengeId === 'sensor-logic' ? (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]}>
          <ringGeometry args={[1.4, 1.58, 40]} />
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.2 + (sensor?.pulse || 0.2) * 0.45} transparent opacity={0.78} />
        </mesh>
      ) : null}

      {frame.challengeId === 'safety-coordination' ? (
        <group position={nodePositions.safety} data-feature="sim3d.node.safety-beacon">
          <mesh position={[0, 0.8, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 1.6, 12]} />
            <meshStandardMaterial color="#334155" />
          </mesh>
          <mesh position={[0, 1.75, 0]}>
            <sphereGeometry args={[0.24, 14, 14]} />
            <meshStandardMaterial
              color={nodeColor(safety?.status || 'active')}
              emissive={nodeColor(safety?.status || 'active')}
              emissiveIntensity={0.35 + (safety?.pulse || 0.3) * 0.7}
            />
          </mesh>
        </group>
      ) : null}

      {frame.challengeId === 'grid-os' ? (
        <group data-feature="sim3d.flow.shedding-lane">
          <RoundedBox args={[6.8, 0.08, 0.6]} radius={0.08} position={[0, -0.35, -2.7]}>
            <meshStandardMaterial color="#1e3a8a" emissive="#3b82f6" emissiveIntensity={0.18} />
          </RoundedBox>
          <Html distanceFactor={11} position={[0, 0.15, -2.7]}>
            <div className="rounded bg-black/70 px-2 py-1 font-mono text-[11px] text-sky-200" data-feature="sim3d.mode-banner">
              Mode: {frame.mode}
            </div>
          </Html>
        </group>
      ) : null}

      {(hoveredNode || selectedNodeState) ? (
        <Html position={[0, 2.75, 0]} distanceFactor={12}>
          <div className="rounded bg-black/70 px-3 py-1.5 font-mono text-xs text-white" data-feature="sim3d.node.tooltip">
            {(selectedNodeState || findNode(frame.nodes, hoveredNode || 'compute')).label}: {(selectedNodeState || findNode(frame.nodes, hoveredNode || 'compute')).value}
            {(selectedNodeState || findNode(frame.nodes, hoveredNode || 'compute')).unit || ''}
          </div>
        </Html>
      ) : null}

      {!reducedMotion && !lowPower ? (
        <EffectComposer>
          <Bloom luminanceThreshold={0.25} luminanceSmoothing={0.35} intensity={0.55} />
        </EffectComposer>
      ) : null}

      <FramePulse reducedMotion={reducedMotion} />
    </>
  )
}

function findNode(nodes: SimSceneNodeState[], id: SimSceneNodeId): SimSceneNodeState {
  const found = nodes.find((node) => node.id === id)
  if (found) {
    return found
  }
  return {
    id,
    label: id,
    health: 80,
    value: 0,
    status: 'idle',
    pulse: 0,
  }
}

function FramePulse({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame(({ clock, scene }) => {
    if (reducedMotion) {
      return
    }
    const elapsed = clock.getElapsedTime()
    scene.rotation.y = Math.sin(elapsed * 0.08) * 0.02
  })

  return null
}

function useLowPowerDevice(): boolean {
  return useMemo(() => {
    if (typeof navigator === 'undefined') {
      return false
    }

    const cores = navigator.hardwareConcurrency || 8
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 8

    return cores <= 4 || memory <= 4
  }, [])
}

function getNodePositions(challengeId: SimSceneFrame['challengeId']): Record<SimSceneNodeId, [number, number, number]> {
  if (challengeId === 'sensor-logic') {
    return {
      ...BASE_NODE_POSITIONS,
      sensor: [-1.3, 0.1, -2.35],
      compute: [-0.2, 0.1, -0.25],
    }
  }
  if (challengeId === 'safety-coordination') {
    return {
      ...BASE_NODE_POSITIONS,
      safety: [1.9, 0.1, -2.45],
      house: [3.45, 0.1, 1.1],
      heating: [3.2, 0, -1.95],
    }
  }
  return {
    ...BASE_NODE_POSITIONS,
    grid: [-4.15, 0.0, -2.05],
    battery: [0.45, 0, 2.35],
  }
}

function RuralBackdrop({
  challengeId,
  reducedMotion,
}: {
  challengeId: SimSceneFrame['challengeId']
  reducedMotion: boolean
}) {
  return (
    <group data-feature="sim3d.background.rural">
      <SunAndClouds reducedMotion={reducedMotion} challengeId={challengeId} />
      <MountainRange />
      <VillageEdge challengeId={challengeId} />
      <WindTurbine reducedMotion={reducedMotion} />
      {challengeId === 'sensor-logic' ? <SensorFence /> : null}
      {challengeId === 'safety-coordination' ? <SafetyFence /> : null}
      {challengeId === 'grid-os' ? <PowerLines /> : null}
    </group>
  )
}

function MountainRange() {
  const peaks: Array<[number, number, number, number]> = [
    [-8.2, 1.1, -4.5, 1.8],
    [-5.8, 1.4, -4.9, 2.2],
    [-2.8, 1.2, -4.3, 1.9],
    [0.9, 1.5, -4.8, 2.35],
    [3.9, 1.1, -4.4, 1.95],
    [7.2, 1.35, -4.9, 2.15],
  ]

  return (
    <group>
      {peaks.map(([peakX, peakY, peakZ, peakScale], index) => (
        <mesh key={`${peakX}-${peakZ}-${index}`} position={[peakX, peakY, peakZ]} scale={[peakScale, peakScale, peakScale]}>
          <coneGeometry args={[1, 2, 5]} />
          <meshStandardMaterial color={index % 2 === 0 ? '#9bb9a2' : '#87a28e'} />
        </mesh>
      ))}
    </group>
  )
}

function VillageEdge({ challengeId }: { challengeId: SimSceneFrame['challengeId'] }) {
  const homeColor = challengeId === 'safety-coordination' ? '#bda78b' : '#caa98b'
  return (
    <group position={[4.8, -0.52, -2.7]} data-feature="sim3d.background.village">
      <RoundedBox args={[1.2, 0.85, 1]} radius={0.06}>
        <meshStandardMaterial color={homeColor} />
      </RoundedBox>
      <mesh position={[0, 0.74, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.86, 0.72, 4]} />
        <meshStandardMaterial color="#8f5f43" />
      </mesh>
      <mesh position={[-1.5, 0.05, 0.15]}>
        <cylinderGeometry args={[0.25, 0.35, 0.5, 10]} />
        <meshStandardMaterial color="#6e8f53" />
      </mesh>
    </group>
  )
}

function WindTurbine({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <group position={[-6.3, 0.1, -3.1]} data-feature="sim3d.background.wind">
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.08, 0.11, 2.6, 12]} />
        <meshStandardMaterial color="#d7dee9" />
      </mesh>
      <WindBlades reducedMotion={reducedMotion} />
    </group>
  )
}

function WindBlades({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame((state, delta) => {
    if (reducedMotion) {
      return
    }
    state.scene.getObjectByName('wind-blades')?.rotateZ(delta * 1.7)
  })

  return (
    <group name="wind-blades" position={[0, 2.53, 0]}>
      {[0, Math.PI * 0.67, Math.PI * 1.33].map((angle) => (
        <mesh key={angle} rotation={[0, 0, angle]} position={[0.4, 0, 0]}>
          <boxGeometry args={[0.78, 0.08, 0.05]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>
    </group>
  )
}

function SunAndClouds({
  challengeId,
  reducedMotion,
}: {
  challengeId: SimSceneFrame['challengeId']
  reducedMotion: boolean
}) {
  const base = challengeId === 'safety-coordination' ? '#fde68a' : '#fef08a'
  return (
    <group>
      <mesh position={[-5.9, 4.3, -5.6]}>
        <sphereGeometry args={[0.58, 18, 18]} />
        <meshStandardMaterial color={base} emissive={new Color(base)} emissiveIntensity={0.33} />
      </mesh>
      <CloudBank reducedMotion={reducedMotion} />
    </group>
  )
}

function CloudBank({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame((state) => {
    if (reducedMotion) {
      return
    }
    const clouds = state.scene.getObjectByName('cloud-bank')
    if (!clouds) {
      return
    }
    clouds.position.x = -2.4 + Math.sin(state.clock.elapsedTime * 0.11) * 1.25
  })

  return (
    <group name="cloud-bank" position={[-2.4, 3.5, -5.1]}>
      {[-1.1, -0.4, 0.35, 1.1].map((offsetX) => (
        <mesh key={offsetX} position={[offsetX, 0, 0]}>
          <sphereGeometry args={[0.43, 12, 12]} />
          <meshStandardMaterial color="#f8fafc" transparent opacity={0.88} />
        </mesh>
      ))}
    </group>
  )
}

function SensorFence() {
  return (
    <group data-feature="sim3d.background.sensor-fence">
      {[-2.8, -1.8, -0.8].map((offsetX, index) => (
        <group key={`${offsetX}-${index}`} position={[offsetX, -0.3, -2.9]}>
          <mesh>
            <cylinderGeometry args={[0.04, 0.04, 0.7, 8]} />
            <meshStandardMaterial color="#0f766e" />
          </mesh>
          <mesh position={[0, 0.42, 0]}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function SafetyFence() {
  return (
    <group data-feature="sim3d.background.safety-zone">
      <RoundedBox args={[3.3, 0.04, 1.9]} radius={0.05} position={[1.65, -0.42, -2.55]}>
        <meshStandardMaterial color="#dbe4f2" />
      </RoundedBox>
      {[-0.9, 0, 0.9].map((offset) => (
        <mesh key={offset} position={[1.65 + offset, -0.08, -1.7]}>
          <boxGeometry args={[0.06, 0.65, 0.06]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      ))}
    </group>
  )
}

function PowerLines() {
  return (
    <group data-feature="sim3d.background.power-lines">
      {[-3.5, -2.2, -0.9].map((offsetX) => (
        <mesh key={offsetX} position={[offsetX, 0.25, -2.65]}>
          <boxGeometry args={[0.08, 1.2, 0.08]} />
          <meshStandardMaterial color="#475569" />
        </mesh>
      ))}
      <mesh position={[-2.2, 0.86, -2.65]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.03, 0.03]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
    </group>
  )
}
