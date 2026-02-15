/**
 * pipeline_service.ts — MQTT subscriber, validation, InfluxDB writer, WebSocket broadcaster.
 */
import mqtt from "mqtt";
import { InfluxDB, Point, WriteApi } from "@influxdata/influxdb-client";
import { WebSocketServer, WebSocket } from "ws";

const MQTT_URL = process.env.MQTT_URL || "mqtt://localhost:1883";
const INFLUX_URL = process.env.INFLUX_URL || "http://localhost:8086";
const INFLUX_TOKEN = process.env.INFLUX_TOKEN || "my-token";
const INFLUX_ORG = process.env.INFLUX_ORG || "sihlhub";
const INFLUX_BUCKET = process.env.INFLUX_BUCKET || "sihlhub";
const WS_PORT = parseInt(process.env.WS_PORT || "8080");

interface SensorReading {
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

interface Alert {
  id: string;
  severity: "info" | "warning" | "critical";
  sensor_id: string;
  rule: string;
  message: string;
  value: number;
  threshold: number;
  timestamp: string;
}

// State
const latestReadings = new Map<string, SensorReading>();
const activeAlerts = new Map<string, Alert>();
const rollingStats = new Map<string, { values: number[]; maxLen: number }>();
let alertCounter = 0;

// InfluxDB
const influxDB = new InfluxDB({ url: INFLUX_URL, token: INFLUX_TOKEN });
const writeApi: WriteApi = influxDB.getWriteApi(INFLUX_ORG, INFLUX_BUCKET, "s");

function writeToInflux(reading: SensorReading): void {
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

// Threshold alerts
const ALERT_THRESHOLDS: Record<string, { warn: number; crit: number }> = {
  T_coolant_in: { warn: 50, crit: 60 },
  T_coolant_out: { warn: 65, crit: 75 },
  T_cpu_die: { warn: 80, crit: 90 },
  Flow_water: { warn: 0.5, crit: 0.2 },
  Gas_battery: { warn: 200, crit: 400 },
  Smoke_room: { warn: 100, crit: 150 },
};

function evaluateAlerts(reading: SensorReading): Alert | null {
  const thresholds = ALERT_THRESHOLDS[reading.sensor_id];
  if (!thresholds) return null;
  if (reading.value >= thresholds.crit) {
    return createAlert("critical", reading, "threshold",
      `${reading.sensor_id} at ${reading.value}${reading.unit} exceeds critical (${thresholds.crit})`, thresholds.crit);
  }
  if (reading.value >= thresholds.warn) {
    return createAlert("warning", reading, "threshold",
      `${reading.sensor_id} at ${reading.value}${reading.unit} approaching limit`, thresholds.warn);
  }
  activeAlerts.delete(reading.sensor_id);
  return null;
}

function evaluateStatisticalAnomaly(reading: SensorReading): Alert | null {
  const key = `${reading.node_id}/${reading.sensor_id}`;
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

function createAlert(severity: Alert["severity"], reading: SensorReading, rule: string, message: string, threshold: number): Alert {
  const alert: Alert = { id: `alert-${++alertCounter}`, severity, sensor_id: reading.sensor_id, rule, message, value: reading.value, threshold, timestamp: reading.timestamp };
  activeAlerts.set(reading.sensor_id, alert);
  return alert;
}

// WebSocket
const wss = new WebSocketServer({ port: WS_PORT });
const wsClients: Set<WebSocket> = new Set();
wss.on("connection", (ws) => {
  wsClients.add(ws);
  ws.send(JSON.stringify({ type: "snapshot", readings: Object.fromEntries(latestReadings), alerts: Array.from(activeAlerts.values()) }));
  ws.on("close", () => wsClients.delete(ws));
});

function broadcast(data: unknown): void {
  const msg = JSON.stringify(data);
  for (const ws of wsClients) { if (ws.readyState === WebSocket.OPEN) ws.send(msg); }
}

// MQTT
const mqttClient = mqtt.connect(MQTT_URL);
mqttClient.on("connect", () => { console.log("[Pipeline] Connected to MQTT"); mqttClient.subscribe("sihlhub/+/sensors/#"); });
mqttClient.on("message", (_topic: string, payload: Buffer) => {
  try {
    const reading: SensorReading = JSON.parse(payload.toString());
    const key = `${reading.node_id}/${reading.sensor_id}`;
    latestReadings.set(key, reading);
    writeToInflux(reading);
    const alert = evaluateAlerts(reading) || evaluateStatisticalAnomaly(reading);
    broadcast({ type: "reading", data: reading, alert: alert || undefined });
  } catch (err) { console.error("[Pipeline] Failed:", err); }
});

setInterval(() => writeApi.flush(), 5000);
console.log(`[Pipeline] WebSocket on :${WS_PORT}, listening for MQTT...`);

export { latestReadings, activeAlerts };
