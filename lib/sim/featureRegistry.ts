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
]

export function getFeatureById(featureId: string): FeatureMapEntry | undefined {
  return SIM_FEATURE_REGISTRY.find((entry) => entry.featureId === featureId)
}
