const path = require('path')

const CHALLENGES = {
  'sensor-logic': {
    id: 'sensor-logic',
    root: path.resolve(__dirname, '../../../solutions/challenge1-sensor-integration'),
    editablePaths: [
      'services/pipeline/pipeline_service.ts',
      'config/calibration.json',
    ],
    scenariosDir: path.resolve(__dirname, './sensor-logic/scenarios'),
    evaluator: require('./sensor-logic/evaluator'),
  },
  'safety-coordination': {
    id: 'safety-coordination',
    root: path.resolve(__dirname, '../../../solutions/challenge2-safety'),
    editablePaths: [
      'src/coordinator/safety_coordinator.py',
      'src/coordinator/anomaly_detector.py',
      'src/coordinator/estop_state_machine.py',
    ],
    scenariosDir: path.resolve(__dirname, './safety-coordination/scenarios'),
    evaluator: require('./safety-coordination/evaluator'),
  },
  'grid-os': {
    id: 'grid-os',
    root: path.resolve(__dirname, '../../../solutions/challenge3-grid-os'),
    editablePaths: [
      'grid_os/scheduler/solar_budget.py',
      'grid_os/shedding/policies.py',
      'grid_os/core/control_loop.py',
    ],
    scenariosDir: path.resolve(__dirname, './grid-os/scenarios'),
    evaluator: require('./grid-os/evaluator'),
  },
}

module.exports = {
  CHALLENGES,
}
