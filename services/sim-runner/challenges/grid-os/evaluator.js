module.exports = async function evaluateGridOs({ scenario, config }) {
  const maxCompute = Number(config?.maxComputeW || 3000)
  const cpuLimit = Number(config?.cpuTempLimitC || 80)
  const seed = Number(config?.seed || 42)

  const cloudy = scenario.id === 'cloudy-volatility' || scenario.id === 'grid-unstable'
  const heatDemand = scenario.id === 'winter-heat-demand'

  const computeBase = cloudy ? maxCompute * 0.6 : maxCompute * 0.82
  const gridBase = cloudy ? 540 : 180
  const cpuMax = Math.min(cpuLimit + (cloudy ? 3 : -2), 95)

  const events = [
    { t: 0, level: 'info', message: `Simulation seed ${seed}`, featureId: 'gridos.scheduler-budget' },
  ]
  if (cloudy) {
    events.push({ t: 24, level: 'warning', message: 'Solar drop triggered shedding L1', featureId: 'gridos.shedding-policies' })
  }
  if (scenario.id === 'grid-unstable') {
    events.push({ t: 32, level: 'critical', message: 'Grid frequency unstable, shedding escalated', featureId: 'gridos.shedding-policies' })
  }

  return {
    summary: {
      headline: `Grid-OS simulation: ${scenario.id}`,
      checks: [
        {
          key: 'thermal.cpu_limit',
          pass: cpuMax <= cpuLimit,
          message: `max cpu ${cpuMax.toFixed(1)}C / limit ${cpuLimit.toFixed(1)}C`,
        },
        {
          key: 'grid.shedding_response',
          pass: scenario.id !== 'grid-unstable' || events.some((event) => event.message.includes('shedding')),
          message: 'Shedding transitions were emitted under unstable conditions',
        },
      ],
      metrics: {
        mode: heatDemand ? 'WINTER_WARM' : 'SUMMER_EARN',
        shedding: scenario.id === 'grid-unstable' ? 'L2' : cloudy ? 'L1' : 'L0',
        compute_w: Math.round(computeBase),
        grid_w: Math.round(gridBase),
      },
    },
    artifacts: {
      events,
      series: [
        {
          key: 'compute_w',
          label: 'Compute (W)',
          unit: 'W',
          points: buildSeries(computeBase, cloudy ? 180 : 100),
        },
        {
          key: 'grid_w',
          label: 'Grid (W)',
          unit: 'W',
          points: buildSeries(gridBase, cloudy ? 140 : 70),
        },
        {
          key: 'cpu_temp',
          label: 'CPU Temp',
          unit: '°C',
          points: buildSeries(cpuMax - 8, cloudy ? 5 : 3),
        },
      ],
    },
    logs: `scenario=${scenario.id}\nmode=${heatDemand ? 'WINTER_WARM' : 'SUMMER_EARN'}\nmax_compute=${maxCompute}`,
    extraFiles: {
      'scheduler-report.json': JSON.stringify({ scenario: scenario.id, events, cpuMax, computeBase }, null, 2),
    },
  }
}

function buildSeries(base, amplitude) {
  const points = []
  for (let t = 0; t <= 60; t += 5) {
    const value = base + Math.sin(t / 10) * amplitude
    points.push({ t, value: Number(value.toFixed(2)) })
  }
  return points
}
