import assert from "node:assert/strict";

process.env.PIPELINE_TEST_MODE = "1";

async function run(): Promise<void> {
  const pipeline = await import("../pipeline_service.ts");

  function buildReading(overrides: Partial<pipeline.SensorReading> = {}): pipeline.SensorReading {
    return {
      node_id: "hub-001",
      sensor_id: "Flow_water",
      measurement: "flow",
      value: 2.0,
      raw_value: 2.0,
      unit: "L/min",
      quality: 0,
      timestamp: "2026-02-15T00:00:00.000Z",
      ...overrides,
    };
  }

  pipeline.resetPipelineState();
  const normalFlow = pipeline.evaluateAlerts(buildReading({ value: 2.0 }));
  assert.equal(normalFlow, null, "normal flow must not trigger alert");

  const lowFlow = pipeline.evaluateAlerts(buildReading({ value: 0.1 }));
  assert.ok(lowFlow, "low flow must trigger alert");
  assert.equal(lowFlow?.severity, "critical", "low flow critical threshold must be directional (<=)");

  pipeline.resetPipelineState();
  pipeline.evaluateAlerts(
    buildReading({
      node_id: "hub-001",
      sensor_id: "T_cpu_die",
      measurement: "temperature",
      value: 95,
      unit: "°C",
    }),
  );
  pipeline.evaluateAlerts(
    buildReading({
      node_id: "hub-002",
      sensor_id: "T_cpu_die",
      measurement: "temperature",
      value: 96,
      unit: "°C",
    }),
  );
  assert.equal(pipeline.activeAlerts.size, 2, "alerts must be isolated by node_id/sensor_id key");

  assert.throws(
    () =>
      pipeline.resolveConfig({
        SECURE_MODE: "true",
        ALLOW_INSECURE_LOCAL_DEV: "false",
        MQTT_URL: "mqtts://broker:8883",
        INFLUX_URL: "https://influx.local",
      }),
    /INFLUX_TOKEN is required when SECURE_MODE=true/,
    "secure mode must fail without required secrets",
  );

  console.log("pipeline_service tests passed");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
