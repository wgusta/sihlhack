import type { SimChallengeId, SimRunStatus } from '@/types/sim'

export const SIM_DAILY_RUN_LIMIT = 30
export const SIM_MAX_CONCURRENT_RUNS = 1
export const SIM_MAX_CONFIG_BYTES = 64_000
export const SIM_MAX_OVERRIDE_BYTES = 160_000
export const SIM_MAX_COMMENT_CHARS = 500

export const SIM_TERMINAL_STATUSES: SimRunStatus[] = [
  'succeeded',
  'failed',
  'timeout',
  'cancelled',
]

export const SIM_CHALLENGES: Record<SimChallengeId, {
  label: string
  description: string
  scenarios: string[]
  editablePaths: string[]
  defaultConfig: Record<string, unknown>
}> = {
  'sensor-logic': {
    label: 'Sensor Integration',
    description: 'Sensor data pipeline, monitoring, validation',
    scenarios: ['normal-stream', 'thermal-spike', 'flow-drop', 'gas-alert'],
    editablePaths: [
      'services/pipeline/pipeline_service.ts',
      'config/calibration.json',
    ],
    defaultConfig: {
      topicNamespace: 'sihlhack',
      enableLegacyTopicConsume: true,
      thresholds: {
        T_cpu_die: { warn: 80, crit: 90, direction: 'high' },
        Flow_water: { warn: 0.5, crit: 0.2, direction: 'low' },
      },
    },
  },
  'safety-coordination': {
    label: 'Multi-Node Safety Coordination',
    description: 'Safety interlocks, anomaly detection, fail-closed control',
    scenarios: ['heartbeat-loss', 'sensor-drift', 'thermal-runaway', 'partial-degrade'],
    editablePaths: [
      'src/coordinator/safety_coordinator.py',
      'src/coordinator/anomaly_detector.py',
      'src/coordinator/estop_state_machine.py',
    ],
    defaultConfig: {
      heartbeatTimeoutSeconds: 2,
      maxMissedHeartbeats: 2,
      allowlistedCommands: ['set_actuators'],
      zScoreCritical: 4,
      zScoreWarning: 3,
    },
  },
  'grid-os': {
    label: 'Grid-OS Logic',
    description: 'Scheduler, deferred compute, load shedding policies',
    scenarios: ['clear-sky-day', 'cloudy-volatility', 'grid-unstable', 'winter-heat-demand'],
    editablePaths: [
      'grid_os/scheduler/solar_budget.py',
      'grid_os/shedding/policies.py',
      'grid_os/core/control_loop.py',
    ],
    defaultConfig: {
      seed: 42,
      maxComputeW: 3000,
      cpuTempLimitC: 80,
      waterOutSetpointC: 55,
      shedding: {
        l1: 47.0,
        l2: 46.0,
      },
    },
  },
}

export const SIM_CHALLENGE_ROOTS: Record<SimChallengeId, string> = {
  'sensor-logic': 'solutions/challenge1-sensor-integration',
  'safety-coordination': 'solutions/challenge2-safety',
  'grid-os': 'solutions/challenge3-grid-os',
}
