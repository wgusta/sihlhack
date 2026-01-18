// Hackathon roles definition for Sihlicon Hub Infrastructure Hackathon
// Each role is essential for building the complete Sihlicon Stack

export const HACKATHON_ROLES = [
  {
    id: 'hardware-engineer',
    name: 'Hardware Engineer',
    nameDE: 'Hardware-Ingenieur',
    icon: '🔧',
    description: 'Evaluates three thermal architectures (Immersion, Water Loop, Heat Pump) and builds the chosen solution.',
    descriptionDE: 'Evaluiert drei thermische Architekturen (Öl-Immersion, Wasser-Loop, Wärmepumpe) und baut die gewählte Lösung. Entscheidet mit dem Team, welcher Pfad zu eurem Kontext passt.',
    skills: ['Thermodynamik', 'CAD/3D-Design', 'Fluidmechanik', 'Elektronik', 'Löten'],
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
    nameDE: 'Elektro-Ingenieur',
    icon: '🔌',
    description: 'Designs safe electrical systems, power distribution, and safety interlocks (RCD/GFCI, emergency stop, leak containment).',
    descriptionDE: 'Entwickelt sichere Elektrosysteme, Stromverteilung und Sicherheitsverriegelungen. Baut Safety Case: RCD/GFCI-Schutz, Not-Aus, Leckwanne für Öl/Wasser.',
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
    description: 'Integrates sensors, builds data pipelines, creates logging infrastructure, and documents sensor maps.',
    descriptionDE: 'Integriert Sensoren (Temp, Flow, Power), baut Daten-Pipelines, Logging-Infrastruktur und dokumentiert Sensor-Map mit Kalibrierhinweisen.',
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
    nameDE: 'Energie-Experte',
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
    nameDE: 'Grid-OS Entwickler',
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
    nameDE: 'Backend-Entwickler',
    icon: '⚙️',
    description: 'Creates APIs, handles data storage, and builds compute scheduling infrastructure.',
    descriptionDE: 'Erstellt APIs, Datenbank-Architektur und Compute-Scheduling Backend. Integriert Sensor-Daten, baut Logging-Infrastruktur.',
    skills: ['Node.js/Python', 'REST/GraphQL', 'PostgreSQL', 'Docker', 'MQTT'],
    color: 'fund-green',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Informatik-Studium', 'Backend-Entwickler', 'Software-Engineering'],
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
    nameDE: 'Frontend-Entwickler',
    icon: '📊',
    description: 'Builds the monitoring dashboard with real-time energy flow and compute job visualization.',
    descriptionDE: 'Entwickelt das Monitoring-Dashboard mit Echtzeit-Energiefluss und Compute-Visualisierung.',
    skills: ['React/Vue', 'TypeScript', 'D3.js', 'WebSockets', 'Data Viz'],
    color: 'sihl-red',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Informatik-Studium', 'Frontend-Entwickler', 'Web-Development'],
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
    nameDE: 'LEG-Rechtsexperte',
    icon: '⚖️',
    description: 'Navigates Swiss energy regulations, drafts LEG formation documents, and ensures legal compliance.',
    descriptionDE: 'Navigiert Schweizer Energierecht (StromVG), erstellt LEG-Gründungsdokumente und Vertragsvorlagen.',
    skills: ['Energierecht', 'Vertragsrecht', 'StromVG/EnG', 'Genossenschaftsrecht', 'Compliance'],
    color: 'industrial-gold',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Jura-Studium', 'Rechtsexperte', 'Energierecht-Kenntnisse'],
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
    nameDE: 'Projektleiter',
    icon: '📋',
    description: 'Coordinates teams, manages timeline, and ensures all components integrate properly.',
    descriptionDE: 'Koordiniert Teams, managt Zeitplan und stellt Integration aller Komponenten sicher.',
    skills: ['Agile/Scrum', 'Technical Writing', 'Coordination', 'Presentation'],
    color: 'refund-amber',
    tracks: {
      basis: {
        title: 'Ausbildung/Beruf als Basis',
        items: ['Projektmanagement-Studium', 'Projektleiter', 'Scrum Master'],
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
  'Thermodynamik', 'Fluidmechanik', 'CAD/3D-Druck', 'Elektronik', 'Löten',
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
    id: 'demo-kit',
    name: 'End-to-End Demo-Kit',
    nameDE: 'End-to-End Demo-Kit',
    icon: '🎯',
    type: 'mandatory' as const,
    teamSize: 5,
    description: 'Complete measurable energy flow with reproducible one-button demo.',
    descriptionDE: 'Messbarer Energie-Flow mit reproduzierbarer One-Button Demo.',
    deliverables: [
      'Logging: P_solar, P_compute, Durchfluss, ΔT',
      'One-Button Demo Script',
      'Demo-Protokoll mit erwarteten Werten',
      '1-Seite Skalierbarkeits-Analyse',
    ],
    scoringCriteria: [
      { name: 'End-to-End Flow funktioniert', weight: 40 },
      { name: 'Demo reproduzierbar', weight: 30 },
      { name: 'Dokumentationsqualität', weight: 20 },
      { name: 'Skalierbarkeits-Analyse', weight: 10 },
    ],
    requiredRoles: ['hardware-engineer', 'sensor-data-engineer', 'backend-dev'],
    recommendedRoles: ['grid-os-dev', 'pm'],
    color: 'thermal-orange',
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
    id: 'hardware-safety',
    name: 'Hardware Safety & Thermal Baseline',
    nameDE: 'Hardware Safety & Thermal Baseline',
    icon: '🛡️',
    type: 'mandatory' as const,
    teamSize: 5,
    description: 'BOM, Safety Case, and thermal characterization.',
    descriptionDE: 'BOM, Safety Case und thermische Charakterisierung.',
    deliverables: [
      'BOM + Build Guide (CH/EU Bezugsquellen)',
      'Safety Case Lite (RCD, Not-Aus, Leckwanne)',
      'Thermal Baseline Report (ΔT vs Load vs Flow)',
      'Sensor-Map mit Kalibrierhinweisen',
    ],
    scoringCriteria: [
      { name: 'Safety-Checkliste vollständig', weight: 30 },
      { name: 'Thermal Baseline Qualität', weight: 30 },
      { name: 'BOM Nachbaubarkeit', weight: 20 },
      { name: 'Sensor-Integration', weight: 20 },
    ],
    requiredRoles: ['hardware-engineer', 'electrical-engineer', 'sensor-data-engineer'],
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
    id: 'grid-os',
    name: 'Grid-OS Minimal Controller',
    nameDE: 'Grid-OS Minimal Controller',
    icon: '⚡',
    type: 'mandatory' as const,
    teamSize: 5,
    description: 'Scheduler with solar budget, fallback policy, and API.',
    descriptionDE: 'Scheduler mit Solar-Budget, Fallback-Policy und API.',
    deliverables: [
      'Scheduler v0 (Solar-Budget → Compute-Limit)',
      'Fallback-Policy Definition',
      'API Spec + Stub',
      'Replay-Modus für Solar-Zeitreihen',
    ],
    scoringCriteria: [
      { name: 'Scheduler funktioniert', weight: 40 },
      { name: 'API-Spec Qualität', weight: 25 },
      { name: 'Fallback-Policy sinnvoll', weight: 20 },
      { name: 'Replay-Modus funktioniert', weight: 15 },
    ],
    requiredRoles: ['grid-os-dev', 'energy-expert', 'backend-dev'],
    recommendedRoles: ['sensor-data-engineer', 'pm'],
    color: 'compute-blue',
    prizeShare: 20,
    resources: [
      {
        name: 'Node-RED',
        url: 'https://github.com/node-red/node-red',
        license: 'Apache-2.0',
        description: 'Flow-basierte Programmierung fuer Regeln und Automationen',
      },
      {
        name: 'NATS',
        url: 'https://github.com/nats-io/nats-server',
        license: 'Apache-2.0',
        description: 'High-Performance Messaging zwischen Komponenten',
      },
      {
        name: 'Ollama',
        url: 'https://github.com/ollama/ollama',
        license: 'MIT',
        description: 'Lokale LLM-Inferenz fuer intelligentes Scheduling',
      },
      {
        name: 'llama.cpp',
        url: 'https://github.com/ggml-org/llama.cpp',
        license: 'MIT',
        description: 'LLM-Inferenz auf CPU ohne GPU-Abhaengigkeit',
      },
      {
        name: 'Chronos-T5',
        url: 'https://huggingface.co/amazon/chronos-t5-small',
        license: 'Apache-2.0',
        description: 'Time-Series Forecasting fuer Solar-Vorhersage',
      },
      {
        name: 'k3s',
        url: 'https://github.com/k3s-io/k3s',
        license: 'Apache-2.0',
        description: 'Lightweight Kubernetes fuer Edge-Deployment',
      },
    ],
  },
  {
    id: 'dashboard',
    name: 'Dashboard Truth Layer',
    nameDE: 'Dashboard Truth Layer',
    icon: '📊',
    type: 'optional' as const,
    teamSize: 3,
    description: 'Live panel with real data only, no fake visualizations.',
    descriptionDE: 'Live Panel mit echten Daten, keine Fake-Visualisierungen.',
    deliverables: [
      'Live Panel: Solar/Compute/Heat + Ampel',
      'Nur echte Messdaten (kein Fake)',
      'CSV/JSON Export',
    ],
    scoringCriteria: [
      { name: 'Live-Daten funktionieren', weight: 50 },
      { name: 'Export funktioniert', weight: 30 },
      { name: 'UI-Qualität', weight: 20 },
    ],
    requiredRoles: ['frontend-dev', 'backend-dev'],
    recommendedRoles: ['designer'],
    color: 'grid-green',
    prizeShare: 5,
    resources: [
      {
        name: 'OpenTelemetry Collector',
        url: 'https://github.com/open-telemetry/opentelemetry-collector',
        license: 'Apache-2.0',
        description: 'Telemetrie-Pipeline fuer Metriken/Logs/Traces',
      },
      {
        name: 'Prometheus',
        url: 'https://github.com/prometheus/prometheus',
        license: 'Apache-2.0',
        description: 'Metriken-Backend mit PromQL-Abfragen',
      },
    ],
  },
  {
    id: 'leg-starter',
    name: 'LEG Starter Pack',
    nameDE: 'LEG Starter Pack',
    icon: '⚖️',
    type: 'optional' as const,
    teamSize: 3,
    description: 'Legal templates for LEG formation (AG or ZH).',
    descriptionDE: 'Rechtliche Templates für LEG-Gründung (AG oder ZH).',
    deliverables: [
      'Template-Set (Statuten + Vertrag + FAQ)',
      'Regulatorische Checkliste',
      'Risiko-/Haftungsklärung',
    ],
    scoringCriteria: [
      { name: 'Rechtliche Korrektheit', weight: 50 },
      { name: 'Vollständigkeit', weight: 30 },
      { name: 'Verständlichkeit', weight: 20 },
    ],
    requiredRoles: ['leg-specialist'],
    recommendedRoles: ['pm'],
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
