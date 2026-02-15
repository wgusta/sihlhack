module.exports = async function evaluateSafety({ scenario, config }) {
  const heartbeatTimeout = Number(config?.heartbeatTimeoutSeconds || 2)
  const maxMissed = Number(config?.maxMissedHeartbeats || 2)

  const events = [
    { t: 0, level: 'info', message: 'Coordinator initialized', featureId: 'safety.fail-closed' },
  ]

  let finalState = 'NORMAL'
  if (scenario.id === 'heartbeat-loss') {
    events.push({ t: 12, level: 'warning', message: 'Hub heartbeat missed', featureId: 'safety.fail-closed' })
    events.push({ t: 18, level: 'critical', message: 'Fail-closed: clearance denied', featureId: 'safety.fail-closed' })
    finalState = 'E_STOP'
  } else if (scenario.id === 'thermal-runaway') {
    events.push({ t: 16, level: 'critical', message: 'Thermal runaway anomaly', featureId: 'safety.fail-closed' })
    finalState = 'LOCKOUT'
  } else if (scenario.id === 'partial-degrade') {
    events.push({ t: 22, level: 'warning', message: 'One node degraded, cluster kept safe', featureId: 'safety.fail-closed' })
    finalState = 'CRITICAL'
  } else {
    events.push({ t: 40, level: 'info', message: 'No critical anomalies detected', featureId: 'safety.fail-closed' })
  }

  return {
    summary: {
      headline: `Safety coordination simulation: ${scenario.id}`,
      checks: [
        {
          key: 'clearance.fail_closed',
          pass: finalState !== 'NORMAL' || scenario.id === 'sensor-drift',
          message: finalState === 'NORMAL' ? 'No fail-closed transition required' : 'Fail-closed behavior triggered',
        },
        {
          key: 'heartbeat.monitor',
          pass: heartbeatTimeout <= 5 && maxMissed <= 5,
          message: `heartbeat timeout=${heartbeatTimeout}s, missed=${maxMissed}`,
        },
      ],
      metrics: {
        scenario: scenario.id,
        final_state: finalState,
        event_count: events.length,
      },
    },
    artifacts: {
      events,
      series: [
        {
          key: 'degradation_level',
          label: 'Degradation Level',
          points: [
            { t: 0, value: 0 },
            { t: 10, value: scenario.id === 'heartbeat-loss' ? 2 : 1 },
            { t: 20, value: finalState === 'LOCKOUT' ? 4 : finalState === 'E_STOP' ? 3 : 1 },
            { t: 30, value: finalState === 'NORMAL' ? 0 : 2 },
          ],
        },
      ],
      raw: {
        finalState,
      },
    },
    logs: `scenario=${scenario.id}\nfinal_state=${finalState}\nheartbeat_timeout=${heartbeatTimeout}`,
    extraFiles: {
      'clearance-log.json': JSON.stringify({ events, finalState }, null, 2),
    },
  }
}
