// Hackathon roles definition for Digital Hearth Infrastructure Hackathon
// Each role is essential for building the complete Sihlicon Stack

export const HACKATHON_ROLES = [
  {
    id: 'hardware-engineer',
    name: 'Hardware Engineer',
    nameDE: 'Hardware-Ingenieur',
    icon: '🔧',
    description: 'Designs and builds the immersion cooling system, thermal integration, and physical infrastructure.',
    descriptionDE: 'Entwickelt Immersionskühlung, thermische Anbindung und physische Infrastruktur des Sihlicon Core.',
    skills: ['Thermodynamik', 'CAD/3D-Design', 'Fluidmechanik', 'Elektronik', 'Löten'],
    color: 'thermal-orange',
  },
  {
    id: 'grid-os-dev',
    name: 'Grid-OS Developer',
    nameDE: 'Grid-OS Entwickler',
    icon: '⚡',
    description: 'Builds the intelligent load scheduling software that balances solar input, compute jobs, and grid stability.',
    descriptionDE: 'Entwickelt die Laststeuerung: Solar-Watcher, Compute-Scheduler und Swissgrid-Integration.',
    skills: ['Python', 'Rust/Go', 'Real-time Systems', 'APIs', 'Energy Protocols'],
    color: 'compute-blue',
  },
  {
    id: 'backend-dev',
    name: 'Backend Developer',
    nameDE: 'Backend-Entwickler',
    icon: '⚙️',
    description: 'Creates APIs, handles data storage, and builds the compute marketplace infrastructure.',
    descriptionDE: 'Erstellt APIs, Datenbank-Architektur und Compute-Marktplatz Backend.',
    skills: ['Node.js/Python', 'REST/GraphQL', 'PostgreSQL', 'Docker', 'MQTT'],
    color: 'fund-green',
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
  },
] as const

export type RoleId = typeof HACKATHON_ROLES[number]['id']

// Skills that can be selected independently of role
export const SKILL_TAGS = [
  // Hardware / Thermal
  'Thermodynamik', 'Fluidmechanik', 'CAD/3D-Druck', 'Elektronik', 'Löten',
  'Wärmetauscher', 'Immersion Cooling', 'Pumpen/Hydraulik',
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

// Team composition recommendation for Digital Hearth hackathon
export const IDEAL_TEAM_COMPOSITION = [
  { role: 'hardware-engineer', count: '1-2', priority: 'essential' },
  { role: 'grid-os-dev', count: '1-2', priority: 'essential' },
  { role: 'frontend-dev', count: '1', priority: 'essential' },
  { role: 'backend-dev', count: '0-1', priority: 'recommended' },
  { role: 'leg-specialist', count: '1', priority: 'essential' },
  { role: 'designer', count: '0-1', priority: 'recommended' },
  { role: 'pm', count: '0-1', priority: 'optional' },
] as const

// Hackathon Challenges - the main tracks teams can work on
export const HACKATHON_CHALLENGES = [
  {
    id: 'sihlicon-core',
    name: 'Sihlicon Core',
    nameDE: 'Sihlicon Core',
    icon: '🔧',
    track: 'Hardware',
    description: 'Design and build the immersion-cooled compute module with heat extraction to a water circuit.',
    descriptionDE: 'Entwickle das immersionsgekühlte Compute-Modul mit Wärmeauskopplung zum Wasserkreislauf.',
    deliverables: [
      'Funktionierender Immersionstank',
      'Wärmetauscher-Integration',
      'Temperatur-Monitoring',
      'Bauanleitung & Stückliste',
    ],
    requiredRoles: ['hardware-engineer', 'backend-dev'],
    difficulty: 'advanced',
    color: 'thermal-orange',
  },
  {
    id: 'grid-os',
    name: 'Grid-OS',
    nameDE: 'Grid-OS',
    icon: '⚡',
    track: 'Software',
    description: 'Build the intelligent scheduling system that balances solar production, compute demand, and grid stability.',
    descriptionDE: 'Entwickle die intelligente Laststeuerung: Solar-Watcher, Compute-Scheduler, Grid-Balance.',
    deliverables: [
      'Solar Inverter API Integration',
      'Load Scheduling Algorithm',
      'Swissgrid SDL Mock',
      'API Dokumentation',
    ],
    requiredRoles: ['grid-os-dev', 'backend-dev'],
    difficulty: 'advanced',
    color: 'compute-blue',
  },
  {
    id: 'leg-toolkit',
    name: 'LEG Toolkit',
    nameDE: 'LEG-Werkzeugkasten',
    icon: '⚖️',
    track: 'Legal',
    description: 'Create the complete legal framework for LEG formation: statutes, contracts, regulatory filings.',
    descriptionDE: 'Erstelle das rechtliche Framework für LEG-Gründung: Statuten, Verträge, Behörden-Templates.',
    deliverables: [
      'LEG-Musterstatuten (AG/ZH)',
      'Teilnehmer-Vertrag Template',
      'Behörden-Checkliste',
      'FAQ für Genossenschaften',
    ],
    requiredRoles: ['leg-specialist', 'pm'],
    difficulty: 'intermediate',
    color: 'industrial-gold',
  },
  {
    id: 'dashboard',
    name: 'Energy Dashboard',
    nameDE: 'Energie-Dashboard',
    icon: '📊',
    track: 'Frontend',
    description: 'Build the real-time monitoring dashboard showing energy flow, thermal output, and compute status.',
    descriptionDE: 'Entwickle das Echtzeit-Dashboard: Energiefluss, Wärmeabgabe, Compute-Status.',
    deliverables: [
      'Sankey-Diagramm Energiefluss',
      'Temperatur-Heatmap',
      'Compute Job Queue',
      'Mobile-responsive Design',
    ],
    requiredRoles: ['frontend-dev', 'designer'],
    difficulty: 'intermediate',
    color: 'grid-green',
  },
  {
    id: 'integration',
    name: 'System Integration',
    nameDE: 'System-Integration',
    icon: '🔗',
    track: 'Integration',
    description: 'Connect all components into a working prototype and create deployment documentation.',
    descriptionDE: 'Verbinde alle Komponenten zum funktionierenden Prototyp mit Deployment-Dokumentation.',
    deliverables: [
      'End-to-End Integration Test',
      'Docker Compose Setup',
      'Deployment Guide',
      'Troubleshooting FAQ',
    ],
    requiredRoles: ['backend-dev', 'pm', 'hardware-engineer'],
    difficulty: 'advanced',
    color: 'sihl-red',
  },
] as const

export type ChallengeId = typeof HACKATHON_CHALLENGES[number]['id']
