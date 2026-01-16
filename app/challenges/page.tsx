import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_CHALLENGES, HACKATHON_ROLES } from '@/lib/roles'

export const metadata = {
  title: 'Challenges | sihlhack',
  description: 'Die fünf Hackathon-Challenges plus Side-Quest: Sihlicon Core, Grid-OS, LEG Toolkit, Energy Dashboard, System Integration und historische Archive.',
}

// Side-Quest: Historic Archive Digitalization
const SIDE_QUEST = {
  id: 'historic-archive',
  name: 'Historische Archive',
  nameDE: 'Historische Archive',
  icon: '📜',
  track: 'Side-Quest',
  description: 'Digitize and analyze historical industrial archives from the Sihl Valley using modern AI methods.',
  descriptionDE: 'Digitalisiere und analysiere historische Industriearchive aus dem Sihltal mit modernen KI-Methoden.',
  longDescription: `Das Sihltal war die Wiege der Zürcher Industrialisierung. Von Textilmühlen bis zu Maschinenfabriken führten Unternehmen akribische Aufzeichnungen: Geschäftsbücher, Fotografien, technische Zeichnungen, Mitarbeiterakten, Produktionsdaten.

Vieles davon schlummert in Archiven – undigitalisiert und unerforscht. Hier liegt verborgenes Wissen: Produktionsstrategien aus einer Ära der Ressourcenknappheit, Organisationsstrukturen, technische Innovationen ihrer Zeit voraus.

Als Bonus-Challenge für Teams mit historischem Interesse oder Data-Science-Background.`,
  technicalDetails: [
    'OCR-Verarbeitung handschriftlicher und getippter Dokumente',
    'Bilderkennung für Objekte, Personen, Maschinen',
    'Strukturierung in abfragbare Formate',
    'Pattern Discovery mit ML-Algorithmen',
    'Cross-Referenzierung über mehrere Firmenarchive',
  ],
  deliverables: [
    'Digitalisierte Dokument-Sammlung',
    'Strukturierte Datenbank',
    'Visualisierung historischer Muster',
    'Dokumentation der Methodik',
  ],
  skills: ['Python', 'OCR/Tesseract', 'Computer Vision', 'Data Science', 'Historisches Interesse'],
  outcome: 'Erschlossenes Industrieerbe mit modernen Analyse-Möglichkeiten',
}

// Team Red: Security Challenge - DANGER ZONE
const TEAM_RED = {
  id: 'team-red',
  name: 'Team Red',
  nameDE: 'Team Red: Hacke unser System',
  icon: '💀',
  track: 'DANGER ZONE',
  longDescription: `An vielen Hackathons wird nicht mehr gehackt. Bei uns schon.

Während die anderen Teams bauen, bist du der Gegner. Dein Job: Finde Schwachstellen, bevor es jemand anderes tut. Teste Hardware, Software, APIs und Netzwerk auf Herz und Nieren.

Ethisches Hacking im kontrollierten Umfeld. Du greifst nur an, was wir dir freigeben. Aber innerhalb dieser Grenzen: Keine Gnade.`,
  technicalDetails: [
    'Penetration Testing der Grid-OS API',
    'Hardware Security Assessment (Sihlicon Core)',
    'Network Traffic Analysis',
    'Social Engineering Simulation',
    'Fuzzing und Input Validation Tests',
    'Authentication & Authorization Bypass Attempts',
  ],
  deliverables: [
    'Security Audit Report',
    'Proof-of-Concept Exploits',
    'Vulnerability Disclosure Documentation',
    'Remediation Recommendations',
  ],
  skills: ['Pentesting', 'Kali Linux', 'Burp Suite', 'Wireshark', 'Python', 'Reverse Engineering'],
  outcome: 'Gehärtetes System und Security-Dokumentation für Production',
}

// Extended challenge details for the dedicated page
const challengeDetails = {
  'sihlicon-core': {
    longDescription: `Das Herzstück des Digital Hearth Systems: Ein immersionsgekühlter Server, der in dielektrischem Öl läuft.
    Die Abwärme wird über einen Wärmetauscher an einen Wasserkreislauf abgegeben und kann direkt für Heizung oder Warmwasser genutzt werden.

    Das Ziel ist ein kompaktes, leises Modul das in einem Keller oder Technikraum installiert werden kann.`,
    technicalDetails: [
      'Tank aus Edelstahl oder Kunststoff (ca. 60L Volumen)',
      'Dielektrisches Öl (z.B. Midel 7131 oder Shell Diala)',
      'Plattenwärmetauscher für Öl-zu-Wasser Transfer',
      'Umwälzpumpe für Ölzirkulation',
      'Temperatursensoren (Einlass, Auslass, Ambient)',
      'Notabschaltung bei Übertemperatur',
    ],
    skills: ['Thermodynamik', 'CAD/3D-Design', 'Fluidmechanik', 'Elektronik', 'Löten'],
    outcome: 'Funktionierender Prototyp mit Bauanleitung und Stückliste für Nachbau',
  },
  'grid-os': {
    longDescription: `Die intelligente Steuerungssoftware die Solar-Produktion, Compute-Last und Netzstabilität orchestriert.

    Grid-OS entscheidet in Echtzeit: Wann sollen Server hochfahren? Wann drosseln? Wie viel Wärme braucht das Gebäude gerade?
    Die Software integriert sich mit Wechselrichtern (Fronius, SMA) und kann perspektivisch am Swissgrid SDL-Markt teilnehmen.`,
    technicalDetails: [
      'Solar Inverter API (Fronius Solar API, SMA Sunny Portal)',
      'Modbus/MQTT für Gerätekommunikation',
      'Scheduling-Algorithmus (Constraint-basiert)',
      'Preis-Signal Integration (Day-Ahead Spotpreise)',
      'Swissgrid SDL Mock für Regelenergie-Simulation',
      'REST API für Dashboard-Anbindung',
    ],
    skills: ['Python', 'Rust/Go', 'Real-time Systems', 'APIs', 'Energy Protocols'],
    outcome: 'Lauffähige Software mit API-Dokumentation und Deployment-Guide',
  },
  'leg-toolkit': {
    longDescription: `Der komplette rechtliche Werkzeugkasten für die Gründung einer Lokalen Elektrizitätsgemeinschaft (LEG) nach StromVG Art. 18.

    Eine LEG ist wie ein ZEV (Zusammenschluss zum Eigenverbrauch), kann aber das öffentliche Netz nutzen. Das ermöglicht Quartier-übergreifende Energiegemeinschaften.
    Wir entwickeln die Vorlagen, die jede Gemeinde oder Genossenschaft braucht um eine LEG zu gründen.`,
    technicalDetails: [
      'Musterstatuten für Aargau und Zürich',
      'Teilnehmervertrag (Producer mit PV-Anlage)',
      'Teilnehmervertrag (Consumer ohne eigene Erzeugung)',
      'Abrechnungsmodell für interne Verrechnung',
      'Behörden-Checkliste (ESTI, Netzbetreiber, Handelsregister)',
      'FAQ-Dokument für zukünftige LEG-Gründer',
    ],
    skills: ['Energierecht', 'Vertragsrecht', 'StromVG/EnG', 'Genossenschaftsrecht', 'Compliance'],
    outcome: 'Komplettes Template-Set unter Creative Commons Lizenz',
  },
  'dashboard': {
    longDescription: `Das Echtzeit-Monitoring-Dashboard das alle Datenströme visualisiert: Energiefluss, Wärmeabgabe, Compute-Auslastung, Revenue.

    Das Dashboard macht das unsichtbare sichtbar: Wie fliesst die Energie? Wie viel Wärme produzieren wir gerade? Welche Compute-Jobs laufen?
    Es ist die Schnittstelle zwischen Technik und Mensch.`,
    technicalDetails: [
      'Sankey-Diagramm für Energiefluss (Solar → Compute → Wärme)',
      'Temperatur-Heatmap des Immersionstanks',
      'Compute Job Queue (aktiv, wartend, abgeschlossen)',
      'Revenue-Tracking (Compute-Einnahmen, Wärme-Kredit)',
      'Historische Daten und Trends',
      'Mobile-responsive Design',
    ],
    skills: ['React/Vue', 'TypeScript', 'D3.js', 'WebSockets', 'Data Viz'],
    outcome: 'Deploybare Web-App mit WebSocket-Anbindung an Grid-OS',
  },
  'integration': {
    longDescription: `Die Königsdisziplin: Alle Komponenten zu einem funktionierenden System verbinden.

    Hardware, Software, Dashboard müssen nahtlos zusammenarbeiten. Das Integration-Team sorgt dafür, dass aus einzelnen Puzzleteilen ein Ganzes wird.
    Dazu gehört auch die Dokumentation für den realen Deploy nach dem Hackathon.`,
    technicalDetails: [
      'End-to-End Integration Tests',
      'Docker Compose Setup für alle Services',
      'Deployment Guide für LEG-Standorte',
      'Troubleshooting FAQ',
      'Monitoring und Alerting Setup',
      'Backup und Recovery Prozeduren',
    ],
    skills: ['Docker', 'Linux', 'DevOps', 'Technical Writing', 'Testing'],
    outcome: 'Produktionsreifes System mit vollständiger Deployment-Dokumentation',
  },
}

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
              Was wir bauen
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Die Challenges
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Fünf parallele Tracks, ein gemeinsames Ziel: Der komplette Sihlicon Stack für dezentrale Energie-Infrastruktur.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 bg-white border-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              {HACKATHON_CHALLENGES.map((challenge) => (
                <a
                  key={challenge.id}
                  href={`#${challenge.id}`}
                  className="p-4 rounded-xl border border-gray-200 hover:border-thermal-orange/50 hover:shadow-lg transition-all text-center group"
                >
                  <div className="text-3xl mb-2">{challenge.icon}</div>
                  <div className="font-mono text-sm font-semibold text-brand-black group-hover:text-thermal-orange transition-colors">
                    {challenge.nameDE}
                  </div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">
                    {challenge.track}
                  </div>
                </a>
              ))}
            </div>
            {/* Side-Quest & Team Red Links */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#historic-archive"
                className="p-4 rounded-xl border-2 border-dashed border-historic-sepia/40 hover:border-historic-sepia hover:bg-historic-cream/30 transition-all text-center group"
              >
                <div className="text-3xl mb-2">{SIDE_QUEST.icon}</div>
                <div className="font-mono text-sm font-semibold text-historic-sepia group-hover:text-brand-black transition-colors">
                  {SIDE_QUEST.nameDE}
                </div>
                <div className="font-accent text-xs text-historic-sepia/70 mt-1">
                  Side-Quest
                </div>
              </a>
              
              {/* Team Red - Danger Zone styling */}
              <a
                href="#team-red"
                className="p-4 rounded-none border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 transition-all text-center group relative overflow-hidden"
                style={{ transform: 'skewX(-2deg)' }}
              >
                <div className="absolute inset-0 opacity-20" style={{
                  background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,0,0,0.1) 5px, rgba(255,0,0,0.1) 10px)',
                }} />
                <div className="relative">
                  <div className="text-3xl mb-2">{TEAM_RED.icon}</div>
                  <div className="font-mono text-sm font-semibold text-red-500 group-hover:text-red-400 transition-colors">
                    Team Red
                  </div>
                  <div className="font-mono text-[10px] text-red-500/70 mt-1 uppercase tracking-wider animate-pulse">
                    ⚠ Danger Zone
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Challenge Details */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
            {HACKATHON_CHALLENGES.map((challenge) => {
              const details = challengeDetails[challenge.id as keyof typeof challengeDetails]
              const requiredRoleData = challenge.requiredRoles.map(
                roleId => HACKATHON_ROLES.find(r => r.id === roleId)
              ).filter(Boolean)

              return (
                <div key={challenge.id} id={challenge.id} className="scroll-mt-24">
                  {/* Challenge Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${
                      challenge.track === 'Hardware' ? 'bg-thermal-orange/20' :
                      challenge.track === 'Software' ? 'bg-compute-blue/20' :
                      challenge.track === 'Legal' ? 'bg-industrial-gold/20' :
                      challenge.track === 'Frontend' ? 'bg-grid-green/20' :
                      'bg-sihl-red/20'
                    }`}>
                      {challenge.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="font-display text-2xl font-bold text-brand-black">
                          {challenge.nameDE}
                        </h2>
                        <span className={`text-xs font-mono px-2 py-1 rounded ${
                          challenge.difficulty === 'advanced'
                            ? 'bg-thermal-orange/20 text-thermal-orange'
                            : 'bg-compute-blue/20 text-compute-blue'
                        }`}>
                          {challenge.difficulty === 'advanced' ? 'Fortgeschritten' : 'Mittel'}
                        </span>
                      </div>
                      <p className="font-mono text-sm text-thermal-orange mt-1">
                        Track: {challenge.track}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-sm max-w-none mb-8">
                    <p className="text-historic-sepia font-mono whitespace-pre-line">
                      {details.longDescription}
                    </p>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Technical Details */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <span>🔧</span> Technische Details
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {details.technicalDetails.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm font-mono text-historic-sepia">
                              <span className="w-1.5 h-1.5 rounded-full bg-thermal-orange mt-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Deliverables */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <span>📦</span> Deliverables
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {challenge.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm font-mono text-historic-sepia">
                              <span className="text-grid-green">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-gray-200">
                          <p className="text-xs font-mono text-historic-sepia">
                            <strong className="text-brand-black">Outcome:</strong> {details.outcome}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Required Roles */}
                  <div className="bg-brand-black rounded-xl p-6">
                    <h3 className="font-mono text-sm text-gray-400 uppercase tracking-wider mb-4">
                      Benötigte Rollen
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {requiredRoleData.map((role) => role && (
                        <div
                          key={role.id}
                          className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg"
                        >
                          <span className="text-xl">{role.icon}</span>
                          <span className="font-mono text-sm text-white">{role.nameDE}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="font-mono text-xs text-gray-400">
                        Skills: {details.skills.join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Side-Quest: Historic Archive */}
        <section id="historic-archive" className="py-16 bg-historic-cream/50 scroll-mt-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Vintage Paper Card */}
            <div className="relative">
              {/* Decorative corner flourishes */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-historic-sepia/40" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-historic-sepia/40" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-historic-sepia/40" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-historic-sepia/40" />

              <div 
                className="relative bg-gradient-to-br from-historic-cream via-[#F8F4E8] to-historic-cream border-2 border-historic-sepia/30 rounded-sm p-8 md:p-12"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundBlendMode: 'overlay',
                }}
              >
                {/* Side-Quest Badge */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <span className="font-accent text-lg text-historic-sepia tracking-wider">
                      ~~~ SIDE-QUEST ~~~
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <span className="text-5xl mb-4 block">{SIDE_QUEST.icon}</span>
                  <h2 className="font-display text-3xl font-bold text-historic-sepia">
                    {SIDE_QUEST.nameDE}
                  </h2>
                  <p className="font-mono text-sm text-historic-sepia/70 mt-2 italic">
                    Bonus-Challenge für Geschichts- und Data-Science-Enthusiasten
                  </p>
                </div>

                {/* Description */}
                <div className="prose prose-sm max-w-none mb-8">
                  <p className="text-historic-sepia font-mono whitespace-pre-line text-center max-w-2xl mx-auto leading-relaxed">
                    {SIDE_QUEST.longDescription}
                  </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Technical Details */}
                  <div className="bg-white/50 border border-historic-sepia/20 rounded p-6">
                    <h3 className="font-display text-lg font-semibold text-historic-sepia mb-4 flex items-center gap-2">
                      <span>🔍</span> KI-Methoden
                    </h3>
                    <ul className="space-y-2">
                      {SIDE_QUEST.technicalDetails.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-mono text-historic-sepia">
                          <span className="w-1.5 h-1.5 rounded-full bg-historic-sepia mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-white/50 border border-historic-sepia/20 rounded p-6">
                    <h3 className="font-display text-lg font-semibold text-historic-sepia mb-4 flex items-center gap-2">
                      <span>📦</span> Deliverables
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {SIDE_QUEST.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm font-mono text-historic-sepia">
                          <span className="text-historic-sepia">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-historic-sepia/20">
                      <p className="text-xs font-mono text-historic-sepia">
                        <strong>Outcome:</strong> {SIDE_QUEST.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="text-center">
                  <p className="font-mono text-xs text-historic-sepia/70">
                    Skills: {SIDE_QUEST.skills.join(' · ')}
                  </p>
                </div>

                {/* Decorative stamp */}
                <div className="absolute bottom-4 right-4 opacity-20">
                  <div className="w-16 h-16 border-2 border-historic-sepia rounded-full flex items-center justify-center rotate-12">
                    <span className="font-mono text-[8px] text-historic-sepia text-center leading-tight">
                      SIHLTAL<br/>ARCHIV
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Red: DANGER ZONE */}
        <section id="team-red" className="py-16 bg-brand-black scroll-mt-24 relative overflow-hidden">
          {/* Animated scan lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)',
              animation: 'scan 8s linear infinite',
            }} />
          </div>
          
          {/* Warning stripes top */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-repeating-linear-gradient" style={{
            background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
            {/* Glitchy header */}
            <div className="text-center mb-8 relative">
              <div className="inline-block relative">
                <span 
                  className="font-mono text-xs text-red-500 uppercase tracking-[0.5em] animate-pulse"
                  style={{ textShadow: '0 0 10px rgba(255,0,0,0.8)' }}
                >
                  ⚠ DANGER ZONE ⚠
                </span>
              </div>
              
              <h2 
                className="font-futuristic text-4xl sm:text-5xl font-bold text-red-500 mt-4 relative"
                style={{ 
                  textShadow: '2px 2px 0 #ff0000, -2px -2px 0 #00ffff, 0 0 20px rgba(255,0,0,0.5)',
                }}
              >
                <span className="relative inline-block" style={{ transform: 'skewX(-5deg)' }}>
                  {TEAM_RED.icon} TEAM RED
                </span>
              </h2>
              
              <p className="font-mono text-lg text-red-400 mt-2" style={{ transform: 'skewX(-2deg)' }}>
                Hacke unser System
              </p>
            </div>

            {/* Main card with chaotic styling */}
            <div 
              className="relative border-2 border-red-500/50 rounded-none p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(139,0,0,0.3) 0%, rgba(26,26,26,0.9) 50%, rgba(139,0,0,0.2) 100%)',
                boxShadow: '0 0 30px rgba(255,0,0,0.3), inset 0 0 30px rgba(255,0,0,0.1)',
                transform: 'skewY(-0.5deg)',
              }}
            >
              {/* Decorative corner brackets */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-red-500" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-red-500" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-red-500" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-red-500" />

              {/* Terminal-style intro */}
              <div className="mb-6 p-4 bg-black/50 border border-red-500/30 font-mono text-sm">
                <div className="text-green-500 mb-2">
                  <span className="text-red-500">root@sihlhack</span>:<span className="text-blue-400">~</span># cat /challenges/team-red.txt
                </div>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {TEAM_RED.longDescription}
                </p>
                <div className="text-green-500 mt-2 animate-pulse">█</div>
              </div>

              {/* Two column grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Attack Vectors */}
                <div className="border border-red-500/30 bg-black/30 p-4">
                  <h3 className="font-mono text-sm text-red-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="animate-pulse">▶</span> ATTACK VECTORS
                  </h3>
                  <ul className="space-y-2">
                    {TEAM_RED.technicalDetails.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-mono text-gray-400">
                        <span className="text-red-500 font-bold">[{String(i+1).padStart(2, '0')}]</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="border border-red-500/30 bg-black/30 p-4">
                  <h3 className="font-mono text-sm text-red-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="animate-pulse">▶</span> DELIVERABLES
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {TEAM_RED.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-mono text-gray-400">
                        <span className="text-green-500">[✓]</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-red-500/20">
                    <p className="text-xs font-mono text-gray-500">
                      <span className="text-red-400">OUTPUT:</span> {TEAM_RED.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills bar */}
              <div className="border-t border-red-500/30 pt-4">
                <div className="flex flex-wrap gap-2">
                  {TEAM_RED.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-mono"
                      style={{ transform: `rotate(${(i % 3 - 1) * 1}deg)` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warning message */}
              <div className="mt-6 p-3 border border-yellow-500/50 bg-yellow-500/10 text-center" style={{ transform: 'skewX(-1deg)' }}>
                <p className="font-mono text-xs text-yellow-400 uppercase tracking-wider">
                  ⚠ Nur mit expliziter Genehmigung · Responsible Disclosure Required ⚠
                </p>
              </div>
            </div>

            {/* Glitchy decorative elements */}
            <div className="absolute -right-4 top-1/4 font-mono text-6xl text-red-500/10 font-bold" style={{ transform: 'rotate(90deg)' }}>
              BREACH
            </div>
          </div>
          
          {/* Warning stripes bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-3" style={{
            background: 'repeating-linear-gradient(-45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
        </section>

        {/* How Teams Work */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Wie Teams arbeiten
              </h2>
              <p className="mt-4 text-historic-sepia font-mono">
                Teams können sich auf eine Challenge fokussieren oder übergreifend arbeiten.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">
                    🎯 Fokussierte Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Ein Team arbeitet an einer spezifischen Challenge und liefert ein tiefes, ausgereiftes Ergebnis.
                  </p>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• Hardware-Team baut den Sihlicon Core</li>
                    <li>• Software-Team entwickelt Grid-OS</li>
                    <li>• Legal-Team erstellt LEG Toolkit</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black">
                    🔗 Cross-Challenge Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Ein Team mit breitem Skillset arbeitet an der Integration mehrerer Challenges.
                  </p>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• Hardware + Software Integration</li>
                    <li>• Dashboard + Grid-OS Anbindung</li>
                    <li>• End-to-End Prototyp</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-thermal-orange to-compute-blue">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Welche Challenge packst du an?
            </h2>
            <p className="mt-4 text-white/90 font-mono max-w-xl mx-auto">
              Wähle deine Rolle bei der Anmeldung und finde ein Team für deine Challenge.
            </p>
            <div className="mt-8">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Jetzt anmelden
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
