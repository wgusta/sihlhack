// Hackathon roles definition
// Each role is essential for a successful team

export const HACKATHON_ROLES = [
  {
    id: 'ml-engineer',
    name: 'ML/AI Engineer',
    nameDE: 'ML/AI Engineer',
    icon: '🤖',
    description: 'Builds and trains machine learning models for OCR, NLP, and computer vision tasks.',
    descriptionDE: 'Entwickelt und trainiert ML-Modelle für OCR, NLP und Computer Vision.',
    skills: ['Python', 'PyTorch/TensorFlow', 'Computer Vision', 'NLP', 'OCR'],
    color: 'insight-cyan',
  },
  {
    id: 'data-engineer',
    name: 'Data Engineer',
    nameDE: 'Data Engineer',
    icon: '🔧',
    description: 'Designs data pipelines, handles data cleaning, and manages structured storage.',
    descriptionDE: 'Konzipiert Datenpipelines, bereinigt Daten und verwaltet strukturierte Speicherung.',
    skills: ['SQL', 'ETL', 'Data Modeling', 'Python', 'APIs'],
    color: 'industrial-gold',
  },
  {
    id: 'backend-dev',
    name: 'Backend Developer',
    nameDE: 'Backend Developer',
    icon: '⚙️',
    description: 'Creates APIs, handles authentication, and builds server-side logic.',
    descriptionDE: 'Erstellt APIs, implementiert Authentifizierung und Server-Logik.',
    skills: ['Node.js/Python', 'REST/GraphQL', 'Databases', 'Docker'],
    color: 'fund-green',
  },
  {
    id: 'frontend-dev',
    name: 'Frontend Developer',
    nameDE: 'Frontend Developer',
    icon: '🎨',
    description: 'Builds user interfaces and interactive visualizations for the data.',
    descriptionDE: 'Entwickelt Benutzeroberflächen und interaktive Datenvisualisierungen.',
    skills: ['React/Vue', 'TypeScript', 'CSS', 'D3.js', 'Data Viz'],
    color: 'sihl-red',
  },
  {
    id: 'designer',
    name: 'UX/UI Designer',
    nameDE: 'UX/UI Designer',
    icon: '✏️',
    description: 'Designs intuitive interfaces, creates prototypes, and ensures usability.',
    descriptionDE: 'Gestaltet intuitive Interfaces, erstellt Prototypen und sichert Benutzerfreundlichkeit.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Visual Design'],
    color: 'historic-sepia',
  },
  {
    id: 'historian',
    name: 'Domain Expert',
    nameDE: 'Domänenexperte',
    icon: '📚',
    description: 'Brings historical knowledge, interprets documents, and provides context.',
    descriptionDE: 'Bringt historisches Wissen ein, interpretiert Dokumente und liefert Kontext.',
    skills: ['Archival Research', 'Swiss History', 'Paleography', 'German/French'],
    color: 'historic-cream',
  },
  {
    id: 'pm',
    name: 'Project Manager',
    nameDE: 'Project Manager',
    icon: '📋',
    description: 'Coordinates the team, manages timeline, and ensures deliverables.',
    descriptionDE: 'Koordiniert das Team, managt Zeitplan und stellt Ergebnisse sicher.',
    skills: ['Agile/Scrum', 'Communication', 'Planning', 'Presentation'],
    color: 'refund-amber',
  },
  {
    id: 'generalist',
    name: 'Generalist',
    nameDE: 'Generalist',
    icon: '🌟',
    description: 'Flexible contributor who can help across multiple areas.',
    descriptionDE: 'Flexibler Beitragender, der in mehreren Bereichen unterstützen kann.',
    skills: ['Adaptable', 'Quick Learner', 'Problem Solving'],
    color: 'brand-black',
  },
] as const

export type RoleId = typeof HACKATHON_ROLES[number]['id']

// Skills that can be selected independently of role
export const SKILL_TAGS = [
  // Technical
  'Python', 'JavaScript', 'TypeScript', 'R', 'SQL',
  'PyTorch', 'TensorFlow', 'Scikit-learn',
  'React', 'Vue', 'Next.js',
  'Node.js', 'FastAPI', 'Django',
  'PostgreSQL', 'MongoDB', 'Redis',
  'Docker', 'Kubernetes', 'AWS/GCP',
  // Data Science
  'Machine Learning', 'Deep Learning', 'NLP',
  'Computer Vision', 'OCR', 'Data Visualization',
  'Statistics', 'Data Analysis',
  // Domain
  'Swiss History', 'Industrial History', 'Paleography',
  'German', 'French', 'Italian',
  'Archival Research', 'Document Analysis',
  // Soft Skills
  'Project Management', 'Communication', 'Presentation',
  'UX Research', 'UI Design', 'Figma',
] as const

export type SkillTag = typeof SKILL_TAGS[number]

// Team composition recommendation
export const IDEAL_TEAM_COMPOSITION = [
  { role: 'ml-engineer', count: '1-2', priority: 'essential' },
  { role: 'data-engineer', count: '1', priority: 'essential' },
  { role: 'frontend-dev', count: '1', priority: 'recommended' },
  { role: 'backend-dev', count: '0-1', priority: 'optional' },
  { role: 'designer', count: '0-1', priority: 'recommended' },
  { role: 'historian', count: '1', priority: 'essential' },
  { role: 'pm', count: '0-1', priority: 'optional' },
] as const
