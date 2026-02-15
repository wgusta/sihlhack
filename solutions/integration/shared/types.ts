// === Shared Data Models for Sihlicon Hub Hackathon ===
// All teams import from this file to ensure cross-challenge consistency.
// License: Apache 2.0

// === Identifiers ===
type HubId = string;
type LEGId = string;
type JobId = string;

// === Challenge 1: Sensor Data ===
export interface SensorReading {
  hubId: HubId;
  timestamp: string;
  electrical: {
    solarInputW: number;
    gridImportW: number;
    batterySOCPct: number;
    gridFrequencyHz: number;
    lineCurrentA: number;
    lineVoltageV: number;
  };
  thermal: {
    coolantInC: number;
    coolantOutC: number;
    cpuDieC: number;
    ambientC: number;
    flowRateLPM: number;
    oilLevelPct?: number;
  };
  environment: {
    smokeDetected: boolean;
    gasDetected: boolean;
    leakDetected: boolean;
    flameDetected: boolean;
  };
  quality: {
    allSensorsOnline: boolean;
    staleSensorIds: string[];
    validationErrors: string[];
  };
}

// Transitional flat event from Challenge 1 edge/pipeline path.
export interface SensorFlatEvent {
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

// During migration both schemas are supported. Canonical target is SensorReading.
export type SensorEventContract = SensorFlatEvent | SensorReading;

// === Challenge 2: Safety ===
export type SafetySeverity = 'NORMAL' | 'WARNING' | 'CRITICAL' | 'EMERGENCY';

export interface SafetyState {
  hubId: HubId;
  timestamp: string;
  severity: SafetySeverity;
  computeAllowed: boolean;
  maxComputeW: number;
  gridConnectAllowed: boolean;
  batteryChargeAllowed: boolean;
  activeOverrides: SafetyOverride[];
  anomalies: Anomaly[];
}

export interface SafetyClearanceResponse {
  clear: boolean;
  clearance_id?: string;
  reason: string;
  ttl_ms: number;
  safety_state: SafetySeverity | 'E_STOP' | 'LOCKOUT' | 'UNKNOWN';
  timestamp: string;
}

export interface Anomaly {
  id: string;
  detectedAt: string;
  sensor: string;
  type: 'Z_SCORE' | 'RATE_OF_CHANGE' | 'THRESHOLD' | 'CROSS_VALIDATION';
  severity: SafetySeverity;
  message: string;
  currentValue: number;
  threshold: number;
}

export interface SafetyOverride {
  overrideId: string;
  timestamp: string;
  severity: SafetySeverity;
  reason: string;
  triggerMetric: string;
  triggerValue: number;
  actions: SafetyAction[];
  expiresAt?: string;
}

export type SafetyAction =
  | { type: 'THROTTLE_COMPUTE'; maxWatts: number }
  | { type: 'STOP_COMPUTE' }
  | { type: 'SET_PUMP'; dutyCyclePct: number }
  | { type: 'SET_FAN'; dutyCyclePct: number }
  | { type: 'DISCONNECT_GRID' }
  | { type: 'EMERGENCY_STOP' }
  | { type: 'DISCHARGE_BATTERY' }
  | { type: 'STOP_BATTERY_CHARGE' };

// === Challenge 3: Grid-OS ===
export type GridOSMode = 'ISLAND' | 'WINTER_WARM' | 'SUMMER_EARN' | 'ARBITRAGE';
export type EnergySource = 'solar' | 'battery' | 'grid_nt' | 'grid_ht';

// Inter-LEG compute credit: time-limited capacity advertisement (15-min window).
// A hub publishes available kWh, marginal cost, and thermal headroom.
// Another hub's scheduler can claim capacity for a specific job.
export interface ComputeCredit {
  hubId: HubId;
  availableKwh: number;
  marginalCostCHFPerKwh: number;
  thermalHeadroomW: number;
  validUntil: string; // ISO timestamp, 15-min window
  source: EnergySource;
}

// Records a completed cross-hub compute transaction.
// Settlement happens via marketplace (internal credits or CHF).
export interface ComputeTransaction {
  buyerHubId: HubId;
  sellerHubId: HubId;
  jobId: JobId;
  computeKwh: number;
  pricePerKwhCHF: number;
  heatGeneratedKwh: number;
  settledAt?: string; // ISO timestamp, undefined until settled
}

export interface ControlDecision {
  hubId: HubId;
  timestamp: string;
  mode: GridOSMode;
  cpuPowerLimitW: number;
  pumpDutyCyclePct: number;
  fanDutyCyclePct: number;
  batteryAction: 'CHARGE' | 'DISCHARGE' | 'IDLE';
  gridConnected: boolean;
  reasoning: string;
}

export interface ActuatorCommand {
  hubId: HubId;
  command: 'set_actuators' | 'apply_control' | 'compute_limit' | 'battery_cmd' | 'pump_pwm' | 'fan_pwm';
  payload: Record<string, unknown>;
  clearance_id: string;
  timestamp: string;
}

export interface ComputeJob {
  jobId: JobId;
  hubId: HubId;
  jobType: string;
  jobName: string;
  status: 'pending' | 'queued' | 'running' | 'completed' | 'failed' | 'cancelled';
  priority: number;
  estimatedKwh: number;
  actualKwh?: number;
  heatGeneratedKwh?: number;
  submittedAt: string;
  startedAt?: string;
  completedAt?: string;
}

export interface EnergyBudget {
  hubId: HubId;
  timestamp: string;
  solarAvailableW: number;
  solarForecastNextHourW: number;
  batteryAvailableWh: number;
  gridPriceCHFPerKwh: number;
  computeBudgetW: number;
  heatDemandW: number;
  mode: GridOSMode;
}

// === Cross-Challenge: Hub & LEG ===
export interface HubStatus {
  hubId: HubId;
  legId: LEGId;
  name: string;
  thermalPath: 'immersion' | 'water-loop' | 'heat-pump';
  online: boolean;
  lastSeen: string;
  safetyState: SafetySeverity;
  gridOSMode: GridOSMode;
  sensors: {
    solarW: number;
    batteryPct: number;
    cpuTempC: number;
    coolantOutC: number;
    computeLoadW: number;
  };
  compute: {
    activeJobs: number;
    queuedJobs: number;
    totalComputeKwh: number;
    totalHeatKwh: number;
  };
}

export interface LEGStatus {
  legId: LEGId;
  name: string;
  hubs: HubStatus[];
  aggregated: {
    totalSolarW: number;
    totalComputeW: number;
    totalHeatW: number;
    avgBatteryPct: number;
    worstSafetyState: SafetySeverity;
  };
}

// === Challenge 4: Compliance ===
export interface AuditEvent {
  id: string;
  timestamp: string;
  source: 'sensor' | 'safety' | 'grid-os' | 'compliance' | 'manual';
  challengeId: 1 | 2 | 3 | 4;
  eventType: string;
  severity: 'INFO' | 'WARNING' | 'VIOLATION';
  hubId?: HubId;
  legId?: LEGId;
  data: Record<string, unknown>;
  regulationRef?: string;
  description: string;
}

export interface LegalConstraints {
  version: string;
  lastUpdated: string;
  maxGridExportW: number;
  maxBatteryCapacityKwh: number;
  maxOperatingTempC: number;
  requiresEStop: boolean;
  requiresSmokeDetection: boolean;
  requiresLeakDetection: boolean;
  dataRetentionDays: number;
  mustLogAllSafetyEvents: boolean;
  mustLogAllOverrides: boolean;
  logRetentionYears: number;
}
