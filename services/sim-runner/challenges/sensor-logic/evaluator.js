function buildSeries(baseValue, amplitude) {
  const points = []
  for (let t = 0; t <= 60; t += 5) {
    const wave = Math.sin(t / 8) * amplitude
    points.push({ t, value: Number((baseValue + wave).toFixed(2)) })
  }
  return points
}

module.exports = async function evaluateSensorLogic({ scenario, config }) {
  const threshold = Number(config?.thresholds?.T_cpu_die?.warn || 80)
  const spike = scenario.id === 'thermal-spike' ? 18 : scenario.id === 'gas-alert' ? 10 : 6
  const maxCpu = threshold + spike

  const events = []
  if (scenario.id === 'flow-drop') {
    events.push({ t: 25, level: 'warning', message: 'Flow below warning threshold', featureId: 'sensor.threshold-alerts' })
  }
  if (scenario.id === 'gas-alert') {
    events.push({ t: 30, level: 'critical', message: 'Battery gas concentration spike detected', featureId: 'sensor.threshold-alerts' })
  }
  if (scenario.id === 'thermal-spike') {
    events.push({ t: 35, level: 'critical', message: 'CPU thermal critical threshold reached', featureId: 'sensor.threshold-alerts' })
  }

  const checks = [
    {
      key: 'topic.compatibility',
      pass: Boolean(config?.enableLegacyTopicConsume),
      message: config?.enableLegacyTopicConsume ? 'Legacy topic compatibility enabled' : 'Legacy topic compatibility disabled',
    },
    {
      key: 'alert.pipeline',
      pass: events.length > 0 || scenario.id === 'normal-stream',
      message: events.length > 0 ? 'Alerts generated during scenario' : 'No alerts generated',
    },
  ]

  const csvRows = ['t,cpu_temp,flow_rate,gas_ppm']
  for (let t = 0; t <= 60; t += 5) {
    csvRows.push(`${t},${(62 + Math.sin(t / 8) * spike).toFixed(2)},${(3 - Math.cos(t / 9) * 0.4).toFixed(2)},${(120 + Math.sin(t / 7) * 35).toFixed(2)}`)
  }

  return {
    summary: {
      headline: `Sensor pipeline simulation: ${scenario.id}`,
      checks,
      metrics: {
        scenario: scenario.id,
        max_cpu_c: maxCpu,
        alert_count: events.length,
      },
    },
    artifacts: {
      series: [
        { key: 'cpu_temp', label: 'CPU Temp', unit: '°C', points: buildSeries(62, spike) },
        { key: 'flow_rate', label: 'Flow Rate', unit: 'L/min', points: buildSeries(3, 0.4) },
      ],
      events,
      raw: {
        topicNamespace: config?.topicNamespace || 'sihlhack',
      },
    },
    logs: `scenario=${scenario.id}\nthreshold_warn=${threshold}\nalerts=${events.length}`,
    extraFiles: {
      'metrics.csv': csvRows.join('\n'),
      'metrics.json': JSON.stringify({ scenario: scenario.id, checks }, null, 2),
    },
  }
}
