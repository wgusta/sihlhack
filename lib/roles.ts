// Hackathon roles definition for Sihlicon Hub Infrastructure Hackathon
// Each role is essential for building the complete Sihlicon Stack

export const HACKATHON_ROLES = [
  {
    id: 'hardware-engineer',
    name: 'Hardware Engineer',
    nameDE: 'Hardware Engineer',
    icon: '🔧',
    description: 'Evaluates three thermal architectures (Immersion, Water Loop, Heat Pump) and integrates sensors with provided Reference Hardware.',
    descriptionDE: 'Evaluiert drei thermische Architekturen (Öl-Immersion, Wasser-Loop, Wärmepumpe) und integriert Sensoren mit bereitgestellter Reference Hardware. Entscheidet mit dem Team, welcher Pfad zu eurem Kontext passt.',
    skills: ['Thermodynamik', 'CAD/3D-Design', 'Fluidmechanik', 'Elektronik', 'Sensor-Integration'],
    color: 'thermal-orange',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Maschinenbau-Studium', 'Mechatronik-Lehre', 'Thermodynamik-Kenntnisse', 'Ingenieurwesen'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['CAD-Software (Fusion 360, FreeCAD)', '3D-Druck-Erfahrung', 'Löten & Elektronik-Basics', 'DIY-Projekte'],
      },
    },
  },
  {
    id: 'electrical-engineer',
    name: 'Electrical Engineer',
    nameDE: 'Electrical Engineer',
    icon: '🔌',
    description: 'Designs software safety interlocks, anomaly detection, and operational safety logic for Grid-OS integration.',
    descriptionDE: 'Entwickelt Software-Sicherheitsverriegelungen, Anomalie-Erkennung und Operational Safety Logik für Grid-OS Integration.',
    skills: ['Elektrotechnik', 'RCD/GFCI', 'Niederspannung', 'Safety Systems', 'Schaltpläne'],
    color: 'sihl-red',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Elektrotechnik-Studium', 'Elektriker-Lehre', 'Sicherheitstechnik-Kenntnisse'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Arduino/Raspberry Pi Erfahrung', 'Schaltpläne lesen können', 'Sicherheitsbewusstsein', 'Interesse an Elektrotechnik'],
      },
    },
  },
  {
    id: 'sensor-data-engineer',
    name: 'Sensor/Data Engineer',
    nameDE: 'Sensor/Data Engineer',
    icon: '📡',
    description: 'Integrates sensors, validates calibration data, runs secure telemetry pipelines, and documents sensor maps.',
    descriptionDE: 'Integriert Sensoren (Temp, Flow, Power), validiert `calibration.json`, betreibt sichere Telemetrie-Pipelines und dokumentiert die Sensor-Map.',
    skills: ['Messtechnik', 'InfluxDB/TimescaleDB', 'Grafana', 'Python', 'Raspberry Pi', 'I2C/SPI'],
    color: 'compute-blue',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Informatik-Studium', 'Data Engineering-Beruf', 'Messtechnik-Kenntnisse'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Python-Grundkenntnisse', 'Raspberry Pi/Arduino Erfahrung', 'Datenbanken (SQL)', 'Interesse an Sensoren'],
      },
    },
  },
  {
    id: 'energy-expert',
    name: 'Energy Domain Expert',
    nameDE: 'Energy Expert',
    icon: '☀️',
    description: 'Deep knowledge of solar systems, load profiles, Swissgrid integration, SDL, and energy protocols (non-legal).',
    descriptionDE: 'Tiefes Wissen über Solarsysteme, Lastprofile, Inverter-APIs, Swissgrid-Integration, SDL (Systemdienstleistungen) und Energieprotokolle (technisch, nicht rechtlich).',
    skills: ['Solar-APIs', 'Fronius/SMA', 'Lastprofile', 'Modbus', 'Energy Protocols', 'PV-Simulation'],
    color: 'solar-yellow',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Energietechnik-Studium', 'Solar-Installateur', 'Energieberater'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Eigene PV-Anlage', 'Interesse an Solartechnik', 'API-Erfahrung', 'Energie-Enthusiasmus'],
      },
    },
  },
  {
    id: 'grid-os-dev',
    name: 'Grid-OS Developer',
    nameDE: 'Grid-OS Developer',
    icon: '⚡',
    description: 'Builds the intelligent load scheduling software with Deferred Compute, Load Shedding, and Swissgrid integration.',
    descriptionDE: 'Entwickelt die Laststeuerung: Solar-Budget, Compute-Scheduler, Deferred Compute, Load Shedding und Swissgrid-Integration. Definiert Fallback-Policies.',
    skills: ['Python', 'Rust/Go', 'Real-time Systems', 'APIs', 'Energy Protocols'],
    color: 'compute-blue',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Informatik-Studium', 'Software-Engineering-Beruf', 'System-Programmierung'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Python-Kenntnisse', 'API-Erfahrung', 'Interesse an Energie-Systemen', 'Algorithmen-Denken'],
      },
    },
  },
  {
    id: 'backend-dev',
    name: 'Backend Developer',
    nameDE: 'Backend Developer',
    icon: '⚙️',
    description: 'Creates APIs, handles data storage, and builds compute scheduling infrastructure.',
    descriptionDE: 'Erstellt APIs, Datenbank-Architektur und Compute-Scheduling Backend. Integriert Sensor-Daten, baut Logging-Infrastruktur.',
    skills: ['Node.js/Python', 'REST/GraphQL', 'PostgreSQL', 'Docker', 'MQTT'],
    color: 'fund-green',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Informatik-Studium', 'Backend Developer', 'Software-Engineering'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Programmieren (Python/Node.js)', 'API-Erfahrung', 'Datenbanken (SQL)', 'Docker-Basics'],
      },
    },
  },
  {
    id: 'frontend-dev',
    name: 'Frontend Developer',
    nameDE: 'Frontend Developer',
    icon: '📊',
    description: 'Builds the monitoring dashboard with real-time energy flow and compute job visualization.',
    descriptionDE: 'Entwickelt das Monitoring-Dashboard mit Echtzeit-Energiefluss und Compute-Visualisierung.',
    skills: ['React/Vue', 'TypeScript', 'D3.js', 'WebSockets', 'Data Viz'],
    color: 'sihl-red',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Informatik-Studium', 'Frontend Developer', 'Web-Development'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['React/Vue Kenntnisse', 'JavaScript/TypeScript', 'Data Visualization Interesse', 'Web-APIs'],
      },
    },
  },
  {
    id: 'designer',
    name: 'UX/UI Designer',
    nameDE: 'UX/UI Designer',
    icon: '✏️',
    description: 'Designs intuitive interfaces for complex energy and compute data, creates hardware documentation.',
    descriptionDE: 'Gestaltet intuitive Interfaces für Energie- und Compute-Daten, erstellt Hardware-Dokumentation.',
    skills: ['Figma', 'Technical Illustration', 'User Research', 'Documentation'],
    color: 'historic-sepia',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Design-Studium', 'UX/UI Designer', 'Grafik-Designer'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Figma/Sketch Kenntnisse', 'Interesse an Data Visualization', 'Dokumentations-Erfahrung', 'Technisches Verständnis'],
      },
    },
  },
  {
    id: 'leg-specialist',
    name: 'LEG/Energy Law Specialist',
    nameDE: 'LEG/Energy Law Specialist',
    icon: '⚖️',
    description: 'Navigates Swiss energy regulations, drafts LEG formation documents, and ensures legal compliance.',
    descriptionDE: 'Navigiert Schweizer Energierecht (StromVG), erstellt LEG-Gründungsdokumente und Vertragsvorlagen.',
    skills: ['Energierecht', 'Vertragsrecht', 'StromVG/EnG', 'Genossenschaftsrecht', 'Compliance'],
    color: 'industrial-gold',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Jura-Studium', 'Legal Expert', 'Energierecht-Kenntnisse'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Interesse an Energierecht', 'Vertrags-Erfahrung', 'Genossenschafts-Kenntnisse', 'Compliance-Bewusstsein'],
      },
    },
  },
  {
    id: 'pm',
    name: 'Project Manager',
    nameDE: 'Project Manager',
    icon: '📋',
    description: 'Coordinates teams, manages timeline, and ensures all components integrate properly.',
    descriptionDE: 'Koordiniert Teams, managt Zeitplan und stellt Integration aller Komponenten sicher.',
    skills: ['Agile/Scrum', 'Technical Writing', 'Coordination', 'Presentation'],
    color: 'refund-amber',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Projektmanagement-Studium', 'Project Manager', 'Scrum Master'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Organisations-Talent', 'Kommunikations-Skills', 'Agile-Methoden', 'Technisches Interesse'],
      },
    },
  },
  {
    id: 'generalist',
    name: 'Generalist',
    nameDE: 'Generalist',
    icon: '🌟',
    description: 'Flexible contributor who can help across hardware, software, or documentation.',
    descriptionDE: 'Flexibler Beitragender für Hardware, Software oder Dokumentation.',
    skills: ['Adaptable', 'Quick Learner', 'Problem Solving', 'DIY Maker'],
    color: 'brand-black',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Interdisziplinäres Studium', 'Maker/Hobbyist', 'Technik-Enthusiast'],
      },
      quereinsteiger: {
        title: 'Systeme/Tools/Wissen für Quereinsteiger',
        items: ['Lernbereitschaft', 'DIY-Erfahrung', 'Problemlösungs-Skills', 'Flexibilität'],
      },
    },
  },
] as const

export type RoleId = typeof HACKATHON_ROLES[number]['id']

// Skills that can be selected independently of role
export const SKILL_TAGS = [
  // Hardware / Thermal
  'Thermodynamik', 'Fluidmechanik', 'CAD/3D-Druck', 'Elektronik',
  'Wärmetauscher', 'Immersion Cooling', 'Pumpen/Hydraulik',
  // Electrical / Safety
  'Elektrotechnik', 'RCD/GFCI', 'Niederspannung', 'Safety Systems', 'Schaltpläne',
  // Sensors / Data
  'Messtechnik', 'I2C/SPI', 'Grafana', 'PV-Simulation',
  // Software / Grid
  'Python', 'Rust', 'Go', 'TypeScript', 'JavaScript',
  'React', 'Vue', 'Next.js',
  'Node.js', 'FastAPI', 'MQTT', 'WebSockets',
  'PostgreSQL', 'TimescaleDB', 'InfluxDB',
  'Docker', 'Linux', 'Raspberry Pi',
  // Energy / Grid
  'Solar-API', 'Fronius/SMA Inverter', 'Swissgrid',
  'Modbus', 'Smart Meter', 'Energy Protocols',
  'Lastmanagement', 'VPP', 'Demand Response',
  // Legal / Regulatory
  'Energierecht', 'StromVG', 'EnG', 'LEG-Gründung',
  'Vertragsrecht', 'Genossenschaftsrecht', 'Compliance',
  'Datenschutz', 'DSG/nDSG',
  // Soft Skills
  'Project Management', 'Technical Writing', 'Presentation',
  'UX Research', 'UI Design', 'Figma',
  'Documentation', 'Open Source',
] as const

export type SkillTag = typeof SKILL_TAGS[number]

// Resource type for open-source tools
export type PackageResource = {
  name: string
  url: string
  license: string
  description: string
}

// Hackathon Packages - the deliverable packages teams compete on
export const HACKATHON_PACKAGES = [
  {
    id: 'grid-os-logic',
    name: 'Grid-OS Logic',
    nameDE: 'Grid-OS Logik',
    icon: '⚡',
    type: 'mandatory' as const,
    teamSize: 5,
    description: 'Scheduler development with solar budget algorithms, deferred compute logic, and load shedding policies.',
    descriptionDE: 'Scheduler-Entwicklung mit Solar-Budget-Algorithmen, Deferred Compute Logik und Load Shedding Policies.',
    deliverables: [
      'Scheduler v0 (Solar-Budget → Compute-Limit)',
      'Deferred Compute Algorithmus',
      'Load Shedding Policies',
      'API Spec + Implementation',
      'Integration mit Sihl-Sim (Digital Twin)',
    ],
    scoringCriteria: [
      { name: 'Scheduler funktioniert', weight: 40 },
      { name: 'Deferred Compute Logik', weight: 25 },
      { name: 'Load Shedding Policies', weight: 20 },
      { name: 'API-Integration Qualität', weight: 15 },
    ],
    requiredRoles: ['grid-os-dev', 'energy-expert', 'backend-dev'],
    recommendedRoles: ['sensor-data-engineer', 'pm'],
    color: 'compute-blue',
    prizeShare: 35,
    resources: [
      {
        name: 'Prometheus',
        url: 'https://github.com/prometheus/prometheus',
        license: 'Apache-2.0',
        description: 'Metriken-Sammlung fuer P_solar, P_compute, Temperaturen',
      },
      {
        name: 'VictoriaMetrics',
        url: 'https://github.com/VictoriaMetrics/VictoriaMetrics',
        license: 'Apache-2.0',
        description: 'Time-Series DB fuer Sensor-Zeitreihen',
      },
      {
        name: 'Home Assistant',
        url: 'https://github.com/home-assistant/core',
        license: 'Apache-2.0',
        description: 'IoT-Plattform mit Inverter-APIs (Fronius, SMA)',
      },
      {
        name: 'Mosquitto',
        url: 'https://github.com/eclipse-mosquitto/mosquitto',
        license: 'EPL-2.0',
        description: 'MQTT-Broker fuer Sensor-Kommunikation',
      },
    ],
  },
  {
    id: 'operational-safety-logic',
    name: 'Multi-Node Safety Coordination',
    nameDE: 'Multi-Node Safety Koordination',
    icon: '🛡️',
    type: 'mandatory' as const,
    teamSize: 5,
    description: 'Multi-node safety interlocks, anomaly detection algorithms, emergency stop logic, and network-wide sensor validation.',
    descriptionDE: 'Multi-Node-Sicherheitsverriegelungen, Anomalie-Erkennungs-Algorithmen, Not-Aus-Logik und netzwerkweite Sensor-Validierung.',
    deliverables: [
      'Safety Interlock Software (Anomalie-Erkennung)',
      'Emergency Stop Logic',
      'Sensor Validation Framework',
      'Safety Case (Software-basiert)',
      'Integration mit Reference Hardware',
    ],
    scoringCriteria: [
      { name: 'Safety Interlocks funktionieren', weight: 40 },
      { name: 'Anomalie-Erkennung Qualität', weight: 30 },
      { name: 'Emergency Stop Logik', weight: 20 },
      { name: 'Sensor-Validierung', weight: 10 },
    ],
    requiredRoles: ['grid-os-dev', 'sensor-data-engineer', 'backend-dev'],
    recommendedRoles: ['designer', 'pm'],
    color: 'sihl-red',
    prizeShare: 35,
    resources: [
      {
        name: 'LibreSolar BMS',
        url: 'https://github.com/LibreSolar/bms-firmware',
        license: 'Apache-2.0',
        description: 'Battery Management System Firmware',
      },
      {
        name: 'LibreSolar Charge Controller',
        url: 'https://github.com/LibreSolar/charge-controller-firmware',
        license: 'Apache-2.0',
        description: 'MPPT Solar Charge Controller mit Schematics',
      },
      {
        name: 'Zephyr RTOS',
        url: 'https://github.com/zephyrproject-rtos/zephyr',
        license: 'Apache-2.0',
        description: 'Echtzeit-OS fuer Safety-kritische Embedded-Systeme',
      },
    ],
  },
  {
    id: 'sensor-integration',
    name: 'Sensor Integration',
    nameDE: 'Sensor Integration',
    icon: '📡',
    type: 'mandatory' as const,
    teamSize: 5,
    description: 'Sensor data pipelines, real-time monitoring dashboard with live data, data validation, and API integration.',
    descriptionDE: 'Sensor-Daten-Pipelines mit Live-Monitoring, Daten-Validierung, Dual-Topic-Migration (`sihlhack/*`/`sihlhub/*`) und API-Integration.',
    deliverables: [
      'Sensor Data Pipeline (Temp, Flow, Power, Battery SOC)',
      'Real-Time Monitoring Dashboard (nur echte Daten)',
      'Data Validation Framework',
      'API Integration mit Grid-OS',
      'Sensor-Map mit Kalibrierhinweisen',
      'CSV/JSON Export für alle Metriken',
    ],
    scoringCriteria: [
      { name: 'Sensor-Pipeline funktioniert', weight: 35 },
      { name: 'Real-Time Monitoring Qualität', weight: 30 },
      { name: 'Daten-Validierung', weight: 20 },
      { name: 'API-Integration', weight: 10 },
      { name: 'Dashboard & Export', weight: 5 },
    ],
    requiredRoles: ['sensor-data-engineer', 'backend-dev', 'frontend-dev'],
    recommendedRoles: ['grid-os-dev', 'designer', 'pm'],
    color: 'thermal-orange',
    prizeShare: 25,
    resources: [
      {
        name: 'Prometheus',
        url: 'https://github.com/prometheus/prometheus',
        license: 'Apache-2.0',
        description: 'Metriken-Sammlung fuer P_solar, P_compute, Temperaturen',
      },
      {
        name: 'InfluxDB',
        url: 'https://github.com/influxdata/influxdb',
        license: 'Apache-2.0',
        description: 'Time-Series DB fuer Sensor-Zeitreihen und Alert-Auswertung',
      },
      {
        name: 'Home Assistant',
        url: 'https://github.com/home-assistant/core',
        license: 'Apache-2.0',
        description: 'IoT-Plattform mit Inverter-APIs (Fronius, SMA)',
      },
      {
        name: 'Mosquitto',
        url: 'https://github.com/eclipse-mosquitto/mosquitto',
        license: 'EPL-2.0',
        description: 'MQTT-Broker fuer Sensor-Kommunikation',
      },
    ],
  },
  {
    id: 'leg-starter',
    name: 'LEG Legal & Hardware Compliance',
    nameDE: 'LEG Rechtsgrundlagen & Hardware-Compliance',
    icon: '⚖️',
    type: 'mandatory' as const,
    teamSize: 4,
    description: 'Legal templates for LEG formation and hardware reuse compliance (CE marking, warranty, liability).',
    descriptionDE: 'Rechtliche Templates für LEG-Gründung und Hardware-Wiederverwendungs-Compliance (CE-Kennzeichnung, Gewährleistung, Haftung).',
    deliverables: [
      'Template-Set (Statuten + Vertrag + FAQ)',
      'Regulatorische Checkliste',
      'Risiko-/Haftungsklärung',
      'Hardware-Reuse Compliance (CE-Kennzeichnung, Gewährleistung, Haftung)',
      'Versicherungs-Checkliste',
      'PrSG-Leitfaden (Produktsicherheit)',
    ],
    scoringCriteria: [
      { name: 'Rechtliche Korrektheit', weight: 40 },
      { name: 'Vollständigkeit', weight: 30 },
      { name: 'Verständlichkeit', weight: 15 },
      { name: 'Hardware Compliance', weight: 15 },
    ],
    requiredRoles: ['leg-specialist'],
    recommendedRoles: ['pm', 'hardware-engineer'],
    color: 'industrial-gold',
    prizeShare: 5,
  },
] as const

export type PackageId = typeof HACKATHON_PACKAGES[number]['id']
export type PackageType = 'mandatory' | 'optional'

// Team composition recommendation per package
export const PACKAGE_TEAM_COMPOSITIONS = {
  'demo-kit': [
    { role: 'hardware-engineer', count: 1, priority: 'essential' as const },
    { role: 'sensor-data-engineer', count: 1, priority: 'essential' as const },
    { role: 'backend-dev', count: 1, priority: 'essential' as const },
    { role: 'grid-os-dev', count: 1, priority: 'recommended' as const },
    { role: 'pm', count: 1, priority: 'recommended' as const },
  ],
  'hardware-safety': [
    { role: 'hardware-engineer', count: 1, priority: 'essential' as const },
    { role: 'electrical-engineer', count: 1, priority: 'essential' as const },
    { role: 'sensor-data-engineer', count: 1, priority: 'essential' as const },
    { role: 'designer', count: 1, priority: 'recommended' as const },
    { role: 'pm', count: 1, priority: 'recommended' as const },
  ],
  'grid-os': [
    { role: 'grid-os-dev', count: 1, priority: 'essential' as const },
    { role: 'energy-expert', count: 1, priority: 'essential' as const },
    { role: 'backend-dev', count: 1, priority: 'essential' as const },
    { role: 'sensor-data-engineer', count: 1, priority: 'recommended' as const },
    { role: 'pm', count: 1, priority: 'recommended' as const },
  ],
  'dashboard': [
    { role: 'frontend-dev', count: 1, priority: 'essential' as const },
    { role: 'backend-dev', count: 1, priority: 'essential' as const },
    { role: 'designer', count: 1, priority: 'recommended' as const },
  ],
  'leg-starter': [
    { role: 'leg-specialist', count: 1, priority: 'essential' as const },
    { role: 'pm', count: 1, priority: 'recommended' as const },
    { role: 'designer', count: 1, priority: 'optional' as const },
  ],
} as const

// Pre-Challenge definition
export const PRE_CHALLENGE = {
  id: 'historic-archive',
  name: 'Historic Archive',
  nameDE: 'Historisches Archiv',
  subtitle: 'Snackathons',
  icon: '📜',
  format: 'online',
  duration: '2-4 Wochen vor Event',
  type: 'optional' as const,
  description: 'Optionale asynchrone Online-Recherche: Standort-Scouting und historische Energie-Baupläne sammeln.',
  deliverables: [
    'Dokumentierte Fundstücke (Karte, Quellen)',
    'Relevante historische Dokumente',
    'Standort-Analyse für Sihlicon Hubs',
  ],
  bonusPoints: 10,
} as const

// Legacy export for backward compatibility (deprecated)
export const HACKATHON_CHALLENGES = HACKATHON_PACKAGES
export type ChallengeId = PackageId

// General team composition (legacy, use PACKAGE_TEAM_COMPOSITIONS instead)
export const IDEAL_TEAM_COMPOSITION = [
  { role: 'hardware-engineer', count: '1-2', priority: 'essential' },
  { role: 'sensor-data-engineer', count: '1', priority: 'essential' },
  { role: 'grid-os-dev', count: '1-2', priority: 'essential' },
  { role: 'backend-dev', count: '0-1', priority: 'recommended' },
  { role: 'electrical-engineer', count: '0-1', priority: 'recommended' },
  { role: 'energy-expert', count: '0-1', priority: 'recommended' },
  { role: 'pm', count: '0-1', priority: 'optional' },
] as const
