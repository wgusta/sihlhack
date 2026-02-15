import type { FeatureMapEntry } from '@/types/sim'

export const SIM_FEATURE_REGISTRY: FeatureMapEntry[] = [
  {
    featureId: 'sensor.threshold-alerts',
    label: 'Sensor threshold alerts',
    description: 'Warn/critical threshold alert generation for sensor streams.',
    codeAnchors: [
      {
        challengeId: 'sensor-logic',
        path: 'services/pipeline/pipeline_service.ts',
        matchString: 'const ALERT_THRESHOLDS',
      },
      {
        challengeId: 'sensor-logic',
        path: 'services/pipeline/pipeline_service.ts',
        matchString: 'export function evaluateAlerts',
      },
    ],
  },
  {
    featureId: 'sensor.topic-compat',
    label: 'MQTT topic compatibility',
    description: 'Dual-namespace topic compatibility and migration support.',
    codeAnchors: [
      {
        challengeId: 'sensor-logic',
        path: 'services/pipeline/pipeline_service.ts',
        matchString: 'export function getSubscriptionTopics',
      },
      {
        challengeId: 'sensor-logic',
        path: 'tests/test_topic_transition.py',
        matchString: 'def test_sensor_reader_dual_publishes_during_transition',
      },
    ],
  },
  {
    featureId: 'safety.fail-closed',
    label: 'Fail-closed safety clearance',
    description: 'Safety API denies command clearance unless all safety checks pass.',
    codeAnchors: [
      {
        challengeId: 'safety-coordination',
        path: 'src/api/server.py',
        matchString: '@app.get("/api/v1/safety/clearance"',
      },
      {
        challengeId: 'safety-coordination',
        path: 'tests/test_safety_api.py',
        matchString: 'def test_clearance_denied_fail_closed_for_unknown_hub',
      },
    ],
  },
  {
    featureId: 'gridos.shedding-policies',
    label: 'Grid-OS shedding policies',
    description: 'Load shedding levels and allowed classes under stress.',
    codeAnchors: [
      {
        challengeId: 'grid-os',
        path: 'grid_os/shedding/policies.py',
        matchString: 'class LoadSheddingPolicy',
      },
      {
        challengeId: 'grid-os',
        path: 'grid_os/api/server.py',
        matchString: '@app.get("/api/v1/shedding/status")',
      },
    ],
  },
  {
    featureId: 'gridos.scheduler-budget',
    label: 'Grid-OS scheduler budget',
    description: 'Budget and mode/scheduler endpoints for simulation control.',
    codeAnchors: [
      {
        challengeId: 'grid-os',
        path: 'grid_os/api/server.py',
        matchString: '@app.get("/api/v1/scheduler/budget")',
      },
      {
        challengeId: 'grid-os',
        path: 'grid_os/scheduler/solar_budget.py',
        matchString: 'class SolarBudgetScheduler',
      },
    ],
  },
  {
    featureId: 'sim3d.scene.canvas',
    label: '3D simulation canvas',
    description: 'Root 3D scene with guided camera and world layout.',
    codeAnchors: [
      {
        path: 'components/sim3d/SimulationScene3D.tsx',
        matchString: 'export function SimulationScene3D',
      },
      {
        path: 'components/sim3d/hooks/useGuidedCamera.ts',
        matchString: 'export function useGuidedCamera',
      },
    ],
  },
  {
    featureId: 'sim3d.node.solar',
    label: 'Solar node (3D)',
    description: 'Solar panel and sun emitter animation in the 3D layer.',
    codeAnchors: [
      {
        path: 'components/sim3d/nodes/SolarNode.tsx',
        matchString: 'export function SolarNode',
      },
    ],
  },
  {
    featureId: 'sim3d.node.compute',
    label: 'Compute node (3D)',
    description: 'Compute unit with fan rotation tied to load.',
    codeAnchors: [
      {
        path: 'components/sim3d/nodes/ComputeNode.tsx',
        matchString: 'export function ComputeNode',
      },
    ],
  },
  {
    featureId: 'sim3d.node.battery',
    label: 'Battery node (3D)',
    description: 'Battery fill/glow mapped to SOC and status.',
    codeAnchors: [
      {
        path: 'components/sim3d/nodes/BatteryNode.tsx',
        matchString: 'export function BatteryNode',
      },
    ],
  },
  {
    featureId: 'sim3d.node.heating',
    label: 'Heating node (3D)',
    description: 'Heating loop pulse mapped to thermal output.',
    codeAnchors: [
      {
        path: 'components/sim3d/nodes/HeatingNode.tsx',
        matchString: 'export function HeatingNode',
      },
    ],
  },
  {
    featureId: 'sim3d.flow.energy',
    label: '3D energy flow links',
    description: 'Animated flow links for energy/heat/data transfer.',
    codeAnchors: [
      {
        path: 'components/sim3d/effects/FlowLinks.tsx',
        matchString: 'export function FlowLinks',
      },
      {
        path: 'lib/sim/scene-mapper.ts',
        matchString: 'function buildFlows',
      },
    ],
  },
  {
    featureId: 'sim3d.background.rural',
    label: 'Rural animated background',
    description: 'Challenge-specific rural scenery with animated clouds and turbine.',
    codeAnchors: [
      {
        path: 'components/sim3d/SimulationScene3D.tsx',
        matchString: 'function RuralBackdrop',
      },
      {
        path: 'components/sim3d/SimulationScene3D.tsx',
        matchString: 'function SunAndClouds',
      },
    ],
  },
  {
    featureId: 'sim.controls.sensor-values',
    label: 'Sensor live tuning controls',
    description: 'Quick sliders/inputs for sensor count and simulated readings.',
    codeAnchors: [
      {
        path: 'components/sim/SimulationTuningPanel.tsx',
        matchString: 'data-feature="sim.controls.sensor-values"',
      },
    ],
  },
  {
    featureId: 'sim.controls.leg-values',
    label: 'LEG live tuning controls',
    description: 'Quick controls for LEG count and safety heartbeat behavior.',
    codeAnchors: [
      {
        path: 'components/sim/SimulationTuningPanel.tsx',
        matchString: 'data-feature="sim.controls.leg-values"',
      },
    ],
  },
  {
    featureId: 'sim.controls.grid-scenarios',
    label: 'Grid scenario controls',
    description: 'Grid scenario and scheduler/shedding tuning controls.',
    codeAnchors: [
      {
        path: 'components/sim/SimulationTuningPanel.tsx',
        matchString: 'data-feature="sim.controls.grid-scenarios"',
      },
    ],
  },
  {
    featureId: 'sim3d.challenge.sensor-field',
    label: 'Sensor challenge 3D field',
    description: 'Sensor Integration specific data-field visualization.',
    codeAnchors: [
      {
        path: 'components/sim3d/SimulationScene3D.tsx',
        matchString: 'function SensorOperationsField',
      },
    ],
  },
  {
    featureId: 'sim3d.challenge.safety-zone',
    label: 'Safety challenge 3D zone',
    description: 'Multi-Node Safety specific command/safety-zone layout.',
    codeAnchors: [
      {
        path: 'components/sim3d/SimulationScene3D.tsx',
        matchString: 'function SafetyCommandZone',
      },
    ],
  },
  {
    featureId: 'sim3d.challenge.grid-district',
    label: 'Grid challenge 3D district',
    description: 'Grid-OS specific district and substation layout.',
    codeAnchors: [
      {
        path: 'components/sim3d/SimulationScene3D.tsx',
        matchString: 'function GridDistrict',
      },
    ],
  },
]

export function getFeatureById(featureId: string): FeatureMapEntry | undefined {
  return SIM_FEATURE_REGISTRY.find((entry) => entry.featureId === featureId)
}
