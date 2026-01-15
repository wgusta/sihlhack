import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_CHALLENGES, HACKATHON_ROLES } from '@/lib/roles'

export const metadata = {
  title: 'Challenges | sihlhack',
  description: 'Die fünf Hackathon-Challenges: Sihlicon Core, Grid-OS, LEG Toolkit, Energy Dashboard und System Integration.',
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
