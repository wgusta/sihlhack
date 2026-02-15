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
    sky: '#b8f0ff',
    fog: '#d3f7ff',
    ground: '#cbeed8',
    environment: 'sunset' as const,
    ambient: 0.68,
    keyLight: 1.1,
    fillLight: 0.4,
  },
  'safety-coordination': {
    sky: '#d3d7ea',
    fog: '#e3e7f4',
    ground: '#d6d9de',
    environment: 'city' as const,
    ambient: 0.5,
    keyLight: 0.85,
    fillLight: 0.3,
  },
  'grid-os': {
    sky: '#b7dcff',
    fog: '#d3e8ff',
    ground: '#c5e4b8',
    environment: 'dawn' as const,
    ambient: 0.62,
    keyLight: 1.02,
    fillLight: 0.47,
  },
}

const CHALLENGE_VISIBLE_NODES: Record<SimSceneFrame['challengeId'], SimSceneNodeId[]> = {
  'sensor-logic': ['solar', 'grid', 'compute', 'sensor'],
  'safety-coordination': ['compute', 'house', 'heating', 'safety'],
  'grid-os': ['solar', 'grid', 'compute', 'battery', 'house', 'heating'],
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
  const visibleNodes = CHALLENGE_VISIBLE_NODES[frame.challengeId]
  const visibleNodeSet = new Set(visibleNodes)
  const visibleFlows = frame.flows.filter((flow) => visibleNodeSet.has(flow.from) && visibleNodeSet.has(flow.to))

  return (
    <>
      <color attach="background" args={[theme.sky]} />
      <fog attach="fog" args={[theme.fog, 7, 26]} />
      <ambientLight intensity={theme.ambient} />
      <directionalLight position={[5, 9, 2]} intensity={theme.keyLight} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <directionalLight position={[-6, 5, -2]} intensity={theme.fillLight} />
      <Environment preset={theme.environment} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]} receiveShadow>
        <planeGeometry args={[20, 14]} />
        <meshStandardMaterial color={theme.ground} />
      </mesh>

      <RuralBackdrop challengeId={frame.challengeId} reducedMotion={reducedMotion} />

      {visibleNodeSet.has('solar') ? (
        <Float speed={reducedMotion ? 0 : 0.6} rotationIntensity={0.03} floatIntensity={0.06}>
          <SolarNode
            node={findNode(frame.nodes, 'solar')}
            position={nodePositions.solar}
            selected={selectedNode === 'solar' || hoveredNode === 'solar'}
            onHover={onNodeHover}
            onSelect={onNodeSelect}
          />
        </Float>
      ) : null}

      {visibleNodeSet.has('grid') ? (
        <GridNode
          node={findNode(frame.nodes, 'grid')}
          position={nodePositions.grid}
          selected={selectedNode === 'grid' || hoveredNode === 'grid'}
          onHover={onNodeHover}
          onSelect={onNodeSelect}
        />
      ) : null}

      {visibleNodeSet.has('compute') ? (
        <ComputeNode
          node={findNode(frame.nodes, 'compute')}
          position={nodePositions.compute}
          selected={selectedNode === 'compute' || hoveredNode === 'compute'}
          onHover={onNodeHover}
          onSelect={onNodeSelect}
        />
      ) : null}

      {visibleNodeSet.has('battery') ? (
        <BatteryNode
          node={findNode(frame.nodes, 'battery')}
          position={nodePositions.battery}
          selected={selectedNode === 'battery' || hoveredNode === 'battery'}
          onHover={onNodeHover}
          onSelect={onNodeSelect}
        />
      ) : null}

      {visibleNodeSet.has('house') ? (
        <HouseNode
          node={findNode(frame.nodes, 'house')}
          position={nodePositions.house}
          selected={selectedNode === 'house' || hoveredNode === 'house'}
          onHover={onNodeHover}
          onSelect={onNodeSelect}
        />
      ) : null}

      {visibleNodeSet.has('heating') ? (
        <HeatingNode
          node={findNode(frame.nodes, 'heating')}
          position={nodePositions.heating}
          selected={selectedNode === 'heating' || hoveredNode === 'heating'}
          onHover={onNodeHover}
          onSelect={onNodeSelect}
        />
      ) : null}

      <FlowLinks flows={visibleFlows} nodePositions={nodePositions} />
      <StatusParticles nodes={frame.nodes.filter((node) => visibleNodeSet.has(node.id))} nodePositions={nodePositions} reducedMotion={reducedMotion} />

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
      solar: [-4.8, 0.1, 1.95],
      grid: [-4.9, 0.0, -1.95],
      sensor: [-1.5, 0.1, -1.45],
      compute: [1.15, 0.1, -0.2],
      battery: [1.9, 0, 2.35],
      house: [4.9, 0.1, 1.85],
      heating: [4.6, 0, -1.45],
    }
  }
  if (challengeId === 'safety-coordination') {
    return {
      ...BASE_NODE_POSITIONS,
      solar: [-5.1, 0.1, 2.1],
      grid: [-4.95, 0.0, -2.2],
      compute: [-0.25, 0.1, -0.35],
      battery: [0.55, 0, 2.45],
      safety: [2.8, 0.1, -1.5],
      house: [3.1, 0.1, 0.75],
      heating: [2.95, 0, -2.25],
      sensor: [-0.95, 0.1, -2.35],
    }
  }
  return {
    ...BASE_NODE_POSITIONS,
    solar: [-4.25, 0.1, 2.2],
    grid: [-4.15, 0.0, -2.2],
    compute: [-0.05, 0.1, 0.35],
    battery: [1.1, 0, 2.6],
    house: [4.35, 0.1, 1.6],
    heating: [4.1, 0, -1.95],
    sensor: [-1.35, 0.1, -2.6],
    safety: [1.75, 0.1, -2.5],
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
      {challengeId === 'sensor-logic' ? (
        <>
          <SensorFence />
          <SensorOperationsField reducedMotion={reducedMotion} />
        </>
      ) : null}
      {challengeId === 'safety-coordination' ? (
        <>
          <SafetyFence />
          <SafetyCommandZone />
        </>
      ) : null}
      {challengeId === 'grid-os' ? (
        <>
          <PowerLines />
          <GridDistrict reducedMotion={reducedMotion} />
        </>
      ) : null}
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

function SensorOperationsField({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame((state) => {
    if (reducedMotion) {
      return
    }
    const beacon = state.scene.getObjectByName('sensor-data-beacon')
    if (!beacon) {
      return
    }
    beacon.scale.y = 0.7 + (Math.sin(state.clock.elapsedTime * 2.2) + 1) * 0.2
  })

  return (
    <group position={[-1.4, -0.48, -1.35]} data-feature="sim3d.challenge.sensor-field">
      <RoundedBox args={[3.5, 0.02, 2.6]} radius={0.04}>
        <meshStandardMaterial color="#cffafe" />
      </RoundedBox>
      <group position={[0, 0.02, 0]}>
        {[-1.2, -0.4, 0.4, 1.2].map((offsetX) => (
          <mesh key={offsetX} position={[offsetX, 0.02, 0]}>
            <boxGeometry args={[0.12, 0.02, 2.1]} />
            <meshStandardMaterial color="#67e8f9" emissive="#0891b2" emissiveIntensity={0.22} />
          </mesh>
        ))}
      </group>
      <mesh name="sensor-data-beacon" position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.07, 0.11, 1.1, 10]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0369a1" emissiveIntensity={0.42} transparent opacity={0.85} />
      </mesh>
    </group>
  )
}

function SafetyCommandZone() {
  return (
    <group position={[1.8, -0.5, -1.2]} data-feature="sim3d.challenge.safety-zone">
      <RoundedBox args={[3.3, 0.06, 2.5]} radius={0.07}>
        <meshStandardMaterial color="#e5e7eb" />
      </RoundedBox>
      <RoundedBox args={[1.4, 0.9, 1]} radius={0.06} position={[-0.85, 0.48, 0.35]}>
        <meshStandardMaterial color="#94a3b8" />
      </RoundedBox>
      <RoundedBox args={[1.2, 0.55, 0.55]} radius={0.05} position={[0.75, 0.3, -0.35]}>
        <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" emissiveIntensity={0.18} />
      </RoundedBox>
      {[-1.4, -0.5, 0.4, 1.3].map((offsetX) => (
        <mesh key={offsetX} position={[offsetX, 0.13, 1.15]}>
          <boxGeometry args={[0.06, 0.26, 0.06]} />
          <meshStandardMaterial color="#475569" />
        </mesh>
      ))}
    </group>
  )
}

function GridDistrict({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame((state) => {
    if (reducedMotion) {
      return
    }
    const district = state.scene.getObjectByName('grid-district-core')
    if (!district) {
      return
    }
    district.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.04
  })

  return (
    <group position={[0.9, -0.5, -1.65]} data-feature="sim3d.challenge.grid-district">
      <RoundedBox args={[4.6, 0.04, 3.2]} radius={0.08}>
        <meshStandardMaterial color="#dbeafe" />
      </RoundedBox>
      <group name="grid-district-core" position={[0, 0.12, 0]}>
        {[
          [-1.4, 0.35, 0.8, '#60a5fa'],
          [-0.2, 0.48, 0.25, '#2563eb'],
          [1.0, 0.4, -0.6, '#3b82f6'],
          [1.7, 0.52, 0.7, '#1d4ed8'],
        ].map(([x, h, z, color]) => (
          <mesh key={`${x}-${z}`} position={[Number(x), Number(h) / 2, Number(z)]}>
            <boxGeometry args={[0.6, Number(h), 0.6]} />
            <meshStandardMaterial color={String(color)} emissive={String(color)} emissiveIntensity={0.22} />
          </mesh>
        ))}
      </group>
      <mesh position={[0, 0.1, -1.2]}>
        <boxGeometry args={[3.6, 0.03, 0.12]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0, 0.1, -1.15]}>
        <boxGeometry args={[3.6, 0.02, 0.03]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  )
}
