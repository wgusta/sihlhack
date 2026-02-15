/**
 * pipeline_service.ts — MQTT subscriber, validation, InfluxDB writer, WebSocket broadcaster.
 */
import mqtt from "mqtt";
import { InfluxDB, Point, WriteApi } from "@influxdata/influxdb-client";
import { WebSocketServer, WebSocket } from "ws";

type EnvLike = Record<string, string | undefined>;

interface PipelineConfig {
  mqttUrl: string;
  influxUrl: string;
  influxToken: string;
  influxOrg: string;
  influxBucket: string;
  wsPort: number;
  canonicalTopicNamespace: string;
  enableLegacyTopicConsume: boolean;
  secureMode: boolean;
  allowInsecureLocalDev: boolean;
}

export interface SensorReading {
  node_id: string;
  sensor_id: string;
  measurement: string;
  value: number;
  raw_value: number;
  unit: string;
  quality: number;
  timestamp: string;
  location?: string;
}

export interface Alert {
  id: string;
  severity: "info" | "warning" | "critical";
  node_id: string;
  sensor_id: string;
  rule: string;
  message: string;
  value: number;
  threshold: number;
  timestamp: string;
}

type ThresholdDirection = "high" | "low";

interface ThresholdRule {
  warn: number;
  crit: number;
  direction: ThresholdDirection;
}

const ALERT_THRESHOLDS: Record<string, ThresholdRule> = {
  T_coolant_in: { warn: 50, crit: 60, direction: "high" },
  T_coolant_out: { warn: 65, crit: 75, direction: "high" },
  T_cpu_die: { warn: 80, crit: 90, direction: "high" },
  Flow_water: { warn: 0.5, crit: 0.2, direction: "low" },
  Gas_battery: { warn: 200, crit: 400, direction: "high" },
  Smoke_room: { warn: 100, crit: 150, direction: "high" },
};

// State
export const latestReadings = new Map<string, SensorReading>();
export const activeAlerts = new Map<string, Alert>();
const rollingStats = new Map<string, { values: number[]; maxLen: number }>();
let alertCounter = 0;

function alertKey(reading: SensorReading): string {
  return `${reading.node_id}/${reading.sensor_id}`;
}

export function resetPipelineState(): void {
  latestReadings.clear();
  activeAlerts.clear();
  rollingStats.clear();
  alertCounter = 0;
}

export function resolveConfig(env: EnvLike = process.env as EnvLike): PipelineConfig {
  const secureMode = (env.SECURE_MODE || "true").toLowerCase() === "true";
  const allowInsecureLocalDev = (env.ALLOW_INSECURE_LOCAL_DEV || "false").toLowerCase() === "true";

  const mqttUrl = env.MQTT_URL || (allowInsecureLocalDev ? "mqtt://localhost:1883" : "");
  const influxUrl = env.INFLUX_URL || (allowInsecureLocalDev ? "http://localhost:8086" : "");
  const influxToken = env.INFLUX_TOKEN || "";
  const influxOrg = env.INFLUX_ORG || "sihlhub";
  const influxBucket = env.INFLUX_BUCKET || "sihlhub";
  const wsPort = Number.parseInt(env.WS_PORT || "8080", 10);
  const canonicalTopicNamespace = env.CANONICAL_TOPIC_NAMESPACE || "sihlhack";
  const enableLegacyTopicConsume = (env.ENABLE_LEGACY_TOPIC_CONSUME || "true").toLowerCase() === "true";

  if (!mqttUrl) throw new Error("MQTT_URL is required (or enable ALLOW_INSECURE_LOCAL_DEV=true)");
  if (!influxUrl) throw new Error("INFLUX_URL is required (or enable ALLOW_INSECURE_LOCAL_DEV=true)");

  if (secureMode && !allowInsecureLocalDev) {
    if (!influxToken) throw new Error("INFLUX_TOKEN is required when SECURE_MODE=true");
    if (mqttUrl.startsWith("mqtt://")) throw new Error("MQTT_URL must use a secure transport in SECURE_MODE");
    if (influxUrl.startsWith("http://")) throw new Error("INFLUX_URL must use HTTPS in SECURE_MODE");
  }

  if (Number.isNaN(wsPort) || wsPort <= 0) throw new Error("WS_PORT must be a positive integer");

  return {
    mqttUrl,
    influxUrl,
    influxToken,
    influxOrg,
    influxBucket,
    wsPort,
    canonicalTopicNamespace,
    enableLegacyTopicConsume,
    secureMode,
    allowInsecureLocalDev,
  };
}

function writeToInflux(reading: SensorReading, writeApi: WriteApi): void {
  const point = new Point(reading.measurement)
    .tag("node_id", reading.node_id)
    .tag("sensor_id", reading.sensor_id)
    .tag("location", reading.location || "unknown")
    .floatField("value", reading.value)
    .floatField("raw_value", reading.raw_value)
    .intField("quality", reading.quality)
    .timestamp(new Date(reading.timestamp));
  writeApi.writePoint(point);
}

export function evaluateAlerts(reading: SensorReading): Alert | null {
  const rule = ALERT_THRESHOLDS[reading.sensor_id];
  const key = alertKey(reading);
  if (!rule) return null;

  const isCritical = rule.direction === "high" ? reading.value >= rule.crit : reading.value <= rule.crit;
  const isWarning = rule.direction === "high" ? reading.value >= rule.warn : reading.value <= rule.warn;

  if (isCritical) {
    return createAlert(
      "critical",
      reading,
      "threshold",
      `${reading.sensor_id} at ${reading.value}${reading.unit} exceeded critical threshold`,
      rule.crit,
    );
  }
  if (isWarning) {
    return createAlert(
      "warning",
      reading,
      "threshold",
      `${reading.sensor_id} at ${reading.value}${reading.unit} exceeded warning threshold`,
      rule.warn,
    );
  }
  activeAlerts.delete(key);
  return null;
}

export function evaluateStatisticalAnomaly(reading: SensorReading): Alert | null {
  const key = alertKey(reading);
  if (!rollingStats.has(key)) rollingStats.set(key, { values: [], maxLen: 300 });
  const stats = rollingStats.get(key)!;

  stats.values.push(reading.value);
  if (stats.values.length > stats.maxLen) stats.values.shift();
  if (stats.values.length < 30) return null;

  const mean = stats.values.reduce((a, b) => a + b, 0) / stats.values.length;
  const std = Math.sqrt(stats.values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / stats.values.length);
  if (std === 0) return null;

  const zscore = Math.abs((reading.value - mean) / std);
  if (zscore > 4) return createAlert("critical", reading, "zscore", `${reading.sensor_id} z-score ${zscore.toFixed(1)} (4σ)`, 4);
  if (zscore > 3) return createAlert("warning", reading, "zscore", `${reading.sensor_id} z-score ${zscore.toFixed(1)} (3σ)`, 3);
  return null;
}

function createAlert(
  severity: Alert["severity"],
  reading: SensorReading,
  rule: string,
  message: string,
  threshold: number,
): Alert {
  const key = alertKey(reading);
  const alert: Alert = {
    id: `alert-${++alertCounter}`,
    severity,
    node_id: reading.node_id,
    sensor_id: reading.sensor_id,
    rule,
    message,
    value: reading.value,
    threshold,
    timestamp: reading.timestamp,
  };
  activeAlerts.set(key, alert);
  return alert;
}

export function getSubscriptionTopics(config: PipelineConfig): string[] {
  const topics = [`${config.canonicalTopicNamespace}/+/sensors/#`];
  if (config.enableLegacyTopicConsume && config.canonicalTopicNamespace !== "sihlhub") topics.push("sihlhub/+/sensors/#");
  return topics;
}

export function startPipelineService(env: EnvLike = process.env as EnvLike): { stop: () => void } {
  const config = resolveConfig(env);
  const influxDB = new InfluxDB({ url: config.influxUrl, token: config.influxToken });
  const writeApi = influxDB.getWriteApi(config.influxOrg, config.influxBucket, "s");

  const wss = new WebSocketServer({ port: config.wsPort });
  const wsClients: Set<WebSocket> = new Set();
  wss.on("connection", (ws) => {
    wsClients.add(ws);
    ws.send(JSON.stringify({ type: "snapshot", readings: Object.fromEntries(latestReadings), alerts: Array.from(activeAlerts.values()) }));
    ws.on("close", () => wsClients.delete(ws));
  });

  const broadcast = (data: unknown): void => {
    const msg = JSON.stringify(data);
    for (const ws of wsClients) {
      if (ws.readyState === WebSocket.OPEN) ws.send(msg);
    }
  };

  const mqttClient = mqtt.connect(config.mqttUrl);
  mqttClient.on("connect", () => {
    console.log("[Pipeline] Connected to MQTT");
    for (const topic of getSubscriptionTopics(config)) mqttClient.subscribe(topic);
  });

  mqttClient.on("message", (_topic: string, payload: Uint8Array) => {
    try {
      const reading: SensorReading = JSON.parse(payload.toString());
      const key = alertKey(reading);
      latestReadings.set(key, reading);
      writeToInflux(reading, writeApi);
      const alert = evaluateAlerts(reading) || evaluateStatisticalAnomaly(reading);
      broadcast({ type: "reading", data: reading, alert: alert || undefined });
    } catch (err) {
      console.error("[Pipeline] Failed:", err);
    }
  });

  const flushTimer = setInterval(() => {
    void writeApi.flush();
  }, 5000);

  console.log(`[Pipeline] WebSocket on :${config.wsPort}, listening for MQTT...`);

  return {
    stop: () => {
      clearInterval(flushTimer);
      mqttClient.end(true);
      wss.close();
      void writeApi.close();
    },
  };
}

if (process.env.PIPELINE_TEST_MODE !== "1") {
  startPipelineService();
}
