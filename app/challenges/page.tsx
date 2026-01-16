import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_PACKAGES, HACKATHON_ROLES, PRE_CHALLENGE } from '@/lib/roles'
import { PackageCard, PackageCardCompact } from '@/components/challenges/PackageCard'
import { PreChallengeSection } from '@/components/challenges/PreChallengeSection'
import { DemoKitVisualization } from '@/components/visualizations/DemoKitVisualization'
import { SafetyVisualization } from '@/components/visualizations/SafetyVisualization'
import { GridOSVisualization } from '@/components/visualizations/GridOSVisualization'

export const metadata = {
  title: 'Pakete & Competition | sihlhack',
  description: 'Die drei Pflicht-Pakete und optionalen Challenges: End-to-End Demo-Kit, Hardware Safety, Grid-OS Controller. Competition-Style mit 30-36 Teams.',
}

// Get packages by type
const mandatoryPackages = HACKATHON_PACKAGES.filter(p => p.type === 'mandatory')
const optionalPackages = HACKATHON_PACKAGES.filter(p => p.type === 'optional')

// Team Red: Security Challenge - SEPARATE GROUP with selection
const TEAM_RED = {
  id: 'team-red',
  name: 'Team Red',
  nameDE: 'Team Red: Hacke unser System',
  icon: '💀',
  description: 'Ethisches Hacking: Teste Hardware, Software und APIs auf Schwachstellen. Inklusive physischer Sicherheitsanalyse der Hubs.',
  digitalAttacks: [
    'API-Schwachstellen (Injection, Auth Bypass)',
    'Grid-OS Scheduler Exploits',
    'Dashboard XSS/CSRF',
    'Netzwerk-Sniffing & MitM',
    'Firmware-Analyse',
  ],
  physicalAttacks: [
    'Gehäuse-Manipulation (Tamper Detection)',
    'USB/Serial Port Angriffe',
    'Sensor-Spoofing (Temp, Flow)',
    'Stromversorgung-Manipulation',
    'Physischer Zugang zu Öl/Kühlkreislauf',
  ],
  hardeningMeasures: [
    'Tamper-evident Seals & Sensoren',
    'Gehäuse-Verriegelung mit Alarm',
    'Port-Deaktivierung & Epoxy',
    'Anomalie-Detection bei Sensoren',
    'Fail-Safe bei physischer Manipulation',
  ],
  deliverables: [
    'Security Audit Report (Digital + Physical)',
    'Proof-of-Concept Exploits',
    'Hardening Recommendations',
    'Tamper-Detection Konzept',
  ],
  skills: ['Pentesting', 'Kali Linux', 'Burp Suite', 'Python', 'Hardware Hacking', 'Lock Picking', 'Electronics'],
  teamSize: '3-5 Personen',
  selectionProcess: true,
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
              Wähle dein Paket. Bau die Lösung.
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Die Challenges
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              3 Pflicht-Pakete. 30-36 Teams. Mehrere Teams pro Paket. Beste Lösung gewinnt.
            </p>
            
            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="font-mono text-3xl font-bold text-thermal-orange">150+</div>
                <div className="font-mono text-xs text-gray-400">Teilnehmer</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="font-mono text-3xl font-bold text-compute-blue">30-36</div>
                <div className="font-mono text-xs text-gray-400">Teams</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="font-mono text-3xl font-bold text-grid-green">3</div>
                <div className="font-mono text-xs text-gray-400">Tage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Package Overview */}
        <section className="py-12 bg-white border-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-brand-black text-center mb-8">
              Übersicht
            </h2>
            
            {/* Pre-Challenge Link - Snack-Hackathon */}
            <div className="flex justify-center mb-6">
              <a
                href="#pre-challenge"
                className="p-4 rounded-xl border-2 border-dashed border-historic-sepia/40 hover:border-historic-sepia hover:bg-historic-cream/30 transition-all relative group"
              >
                {/* Snack-Hackathon Label */}
                <div className="absolute -top-2 -right-2 bg-historic-sepia text-white text-[9px] font-mono px-2 py-0.5 rounded-full shadow-sm">
                  🍿 Snack-Hackathon
                </div>
                {/* Optional Badge */}
                <div className="absolute -top-2 left-3 bg-gray-200 text-gray-600 text-[8px] font-mono px-2 py-0.5 rounded">
                  OPTIONAL
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-3xl">{PRE_CHALLENGE.icon}</span>
                  <div>
                    <div className="font-mono text-sm font-semibold text-historic-sepia">Pre-Challenge</div>
                    <div className="font-accent text-xs text-historic-sepia/70">{PRE_CHALLENGE.nameDE}</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Mandatory Packages */}
            <div className="mb-6">
              <h3 className="font-mono text-xs text-sihl-red uppercase tracking-wider text-center mb-4">
                Pflicht-Pakete
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {mandatoryPackages.map((pkg) => (
                  <PackageCardCompact key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            {/* Optional Packages */}
            <div className="mb-6">
              <h3 className="font-mono text-xs text-gray-500 uppercase tracking-wider text-center mb-4">
                Optional-Pakete
              </h3>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {optionalPackages.map((pkg) => (
                  <PackageCardCompact key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>

            {/* Team Red - Separate Group */}
            <div>
              <h3 className="font-mono text-xs text-red-500 uppercase tracking-wider text-center mb-4">
                Spezialeinheit · Mit Bewerbung
              </h3>
              <div className="flex justify-center">
                <a
                  href="#team-red"
                  className="p-4 rounded-xl border-2 border-red-500 bg-red-500/10 hover:bg-red-500/20 transition-all text-center relative overflow-hidden group"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,0,0,0.03) 10px, rgba(255,0,0,0.03) 20px)',
                  }}
                >
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] font-mono px-2 py-0.5 rounded-bl">
                    SELEKTION
                  </div>
                  <span className="text-3xl mb-2 block">{TEAM_RED.icon}</span>
                  <span className="font-mono text-sm font-bold text-red-500 block">Team Red</span>
                  <span className="block font-mono text-[10px] text-red-400 mt-1">Security & Physical Hardening</span>
                  <span className="block font-mono text-[9px] text-red-500/60 mt-2 group-hover:text-red-500 transition-colors">
                    Separate Bewerbung →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Challenge Section */}
        <div id="pre-challenge">
          <PreChallengeSection />
        </div>

        {/* Thermal Architecture Challenge */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Die Wärme-Frage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Drei Pfade. Euer Team entscheidet.
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Kein Pfad ist &quot;richtig&quot;. Nur Trade-offs. Ihr evaluiert und wählt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Path A: Oil Immersion */}
              <div className="bg-white rounded-2xl border-2 border-thermal-orange/30 p-6 hover:border-thermal-orange transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wide text-thermal-orange">Pfad A</span>
                    <h3 className="font-display text-xl font-bold text-brand-black">Der Öltank</h3>
                    <p className="font-mono text-xs text-historic-sepia">Immersion Cooling</p>
                  </div>
                  <span className="text-3xl">🛢️</span>
                </div>
                <p className="font-mono text-sm text-historic-sepia mb-4 leading-relaxed">
                  Server baden in dielektrischem Öl. Lautlos, effizient, fast 100% Wärmeabfuhr. 
                  Aber: Öl muss gehandhabt werden. Brandschutz ist real. Wartung ist komplex.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <p className="font-semibold text-grid-green mb-1">Pro</p>
                    <ul className="space-y-1 text-historic-sepia">
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> 99% Wärmeabfuhr</li>
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> Lautlos</li>
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> GPU-Lebensdauer</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sihl-red mb-1">Contra</p>
                    <ul className="space-y-1 text-historic-sepia">
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Öl-Handling</li>
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Brandschutz</li>
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Komplexe Wartung</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Path B: Water Loop */}
              <div className="bg-white rounded-2xl border-2 border-compute-blue/30 p-6 hover:border-compute-blue transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wide text-compute-blue">Pfad B</span>
                    <h3 className="font-display text-xl font-bold text-brand-black">Die Wasserschleife</h3>
                    <p className="font-mono text-xs text-historic-sepia">Direct-to-Chip</p>
                  </div>
                  <span className="text-3xl">💧</span>
                </div>
                <p className="font-mono text-sm text-historic-sepia mb-4 leading-relaxed">
                  Direct-to-Chip Kühlung mit Standard-Komponenten. Bewährt, verfügbar, reparierbar. 
                  Aber: Nur 60-70% Wärmeabfuhr. Nicht so elegant.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <p className="font-semibold text-grid-green mb-1">Pro</p>
                    <ul className="space-y-1 text-historic-sepia">
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> Bewährte Technik</li>
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> Standard-Teile</li>
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> Einfache Reparatur</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sihl-red mb-1">Contra</p>
                    <ul className="space-y-1 text-historic-sepia">
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> 60-70% Capture</li>
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Leckage-Risiko</li>
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Pumpen-Geräusch</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Path C: Heat Pump */}
              <div className="bg-white rounded-2xl border-2 border-grid-green/30 p-6 hover:border-grid-green transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wide text-grid-green">Pfad C</span>
                    <h3 className="font-display text-xl font-bold text-brand-black">Der Boost</h3>
                    <p className="font-mono text-xs text-historic-sepia">Heat Pump Integration</p>
                  </div>
                  <span className="text-3xl">♨️</span>
                </div>
                <p className="font-mono text-sm text-historic-sepia mb-4 leading-relaxed">
                  Server-Wärme als Quelle für eine Wärmepumpe. Niedrige Temperaturen werden auf 70°C+ gehoben, 
                  genug für Radiatoren. Aber: Komplexität und COP-Trade-offs.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <p className="font-semibold text-grid-green mb-1">Pro</p>
                    <ul className="space-y-1 text-historic-sepia">
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> 70°C+ Output</li>
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> Radiator-tauglich</li>
                      <li className="flex items-start gap-1"><span className="text-grid-green">+</span> Höchste Nutzung</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sihl-red mb-1">Contra</p>
                    <ul className="space-y-1 text-historic-sepia">
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Komplexität</li>
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> Strom für Pumpe</li>
                      <li className="flex items-start gap-1"><span className="text-sihl-red">−</span> COP-Verluste</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-brand-black rounded-xl p-6 text-center">
              <p className="font-mono text-sm text-gray-300">
                Profis vor Ort, damit ihr euch auf die Lösung konzentrieren könnt.
              </p>
            </div>
          </div>
        </section>

        {/* Mandatory Packages Detail */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">
                Pflicht-Pakete
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Die drei Haupt-Challenges
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Jedes Team wählt ein Pflicht-Paket als Hauptfokus.
                Mehrere Teams arbeiten parallel am gleichen Paket. Beste Lösung gewinnt.
              </p>
            </div>

            <div className="space-y-12">
              {/* Package 1: Demo-Kit */}
              <div id="demo-kit" className="scroll-mt-24">
                <PackageCard 
                  pkg={mandatoryPackages.find(p => p.id === 'demo-kit')!}
                  showVisualization={true}
                  visualization={<DemoKitVisualization />}
                />
              </div>

              {/* Package 2: Hardware Safety */}
              <div id="hardware-safety" className="scroll-mt-24">
                <PackageCard 
                  pkg={mandatoryPackages.find(p => p.id === 'hardware-safety')!}
                  showVisualization={true}
                  visualization={<SafetyVisualization />}
                />
              </div>

              {/* Package 3: Grid-OS */}
              <div id="grid-os" className="scroll-mt-24">
                <PackageCard 
                  pkg={mandatoryPackages.find(p => p.id === 'grid-os')!}
                  showVisualization={true}
                  visualization={<GridOSVisualization />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Optional Packages */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                Optional-Pakete
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Bonus-Challenges
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Teams können zusätzlich Optional-Pakete liefern für Bonus-Punkte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {optionalPackages.map((pkg) => (
                <div key={pkg.id} id={pkg.id} className="scroll-mt-24">
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Red: Danger Zone - SEPARATE GROUP */}
        <section id="team-red" className="py-16 bg-brand-black scroll-mt-24 relative overflow-hidden">
          {/* Warning stripes */}
          <div className="absolute top-0 left-0 right-0 h-4" style={{
            background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
          
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-block bg-red-500 text-white text-xs font-mono px-4 py-1 rounded-full mb-4">
                🎯 EINZIGE CHALLENGE MIT SELEKTION
                    </div>
              <span className="font-mono text-xs text-red-500 uppercase tracking-[0.5em] animate-pulse block">
                ⚠ DANGER ZONE ⚠
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-red-500 mt-4">
                {TEAM_RED.icon} {TEAM_RED.nameDE}
                        </h2>
              <p className="mt-4 text-gray-400 font-mono max-w-2xl mx-auto">
                {TEAM_RED.description}
              </p>
              <p className="mt-2 text-gray-500 font-mono text-sm">
                Team-Grösse: {TEAM_RED.teamSize}
                    </p>
                  </div>

            {/* Attack Vectors Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Digital Attacks */}
              <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
                <h3 className="font-mono text-sm text-red-500 uppercase mb-4 flex items-center gap-2">
                  <span>💻</span> Digitale Angriffsvektoren
                </h3>
                        <ul className="space-y-2">
                  {TEAM_RED.digitalAttacks.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-mono text-gray-400">
                      <span className="text-red-500">→</span>
                      {item}
                            </li>
                          ))}
                        </ul>
              </div>

              {/* Physical Attacks */}
              <div className="bg-orange-500/10 border-2 border-orange-500/30 rounded-xl p-6">
                <h3 className="font-mono text-sm text-orange-500 uppercase mb-4 flex items-center gap-2">
                  <span>🔧</span> Physische Angriffsvektoren
                </h3>
                <ul className="space-y-2">
                  {TEAM_RED.physicalAttacks.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-mono text-gray-400">
                      <span className="text-orange-500">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
              </div>
            </div>

            {/* Hardening Measures */}
            <div className="bg-green-500/10 border-2 border-green-500/30 rounded-xl p-6 mb-8">
              <h3 className="font-mono text-sm text-green-500 uppercase mb-4 flex items-center gap-2">
                <span>🛡️</span> Hardening-Massnahmen entwickeln
              </h3>
              <p className="text-gray-400 font-mono text-sm mb-4">
                Nach dem Finden von Schwachstellen: Wie können die Hubs gehärtet werden?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {TEAM_RED.hardeningMeasures.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-green-500/5 px-3 py-2 rounded-lg">
                    <span className="text-green-500">✓</span>
                    {item}
                  </div>
                ))}
              </div>
                  </div>

            {/* Deliverables & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-mono text-sm text-white uppercase mb-4">📦 Deliverables</h3>
                <ul className="space-y-2">
                  {TEAM_RED.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-mono text-gray-400">
                      <span className="text-red-500">[✓]</span>
                      {item}
                    </li>
                  ))}
                </ul>
                        </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-mono text-sm text-white uppercase mb-4">🛠️ Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {TEAM_RED.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono">
                      {skill}
                    </span>
                      ))}
                    </div>
              </div>
            </div>

            {/* Selection Process & CTA */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/50 rounded-xl p-6 sm:p-8">
              <div className="text-center">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                  🎯 Bewerbungsverfahren
                </h3>
                <p className="text-gray-300 font-mono text-sm max-w-2xl mx-auto mb-6">
                  Team Red ist die <strong className="text-red-400">einzige Challenge mit Selektionsverfahren</strong>. 
                  Wir suchen erfahrene Security-Researcher mit nachweisbarer Expertise. 
                  Die reguläre Hackathon-Anmeldung gilt hier nicht. Bewirb dich separat.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <ButtonLink 
                    href="/register/team-red" 
                    variant="primary" 
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 border-red-500"
                  >
                    💀 Für Team Red bewerben
                  </ButtonLink>
                  <span className="text-gray-500 font-mono text-xs">
                    Bewerbungsschluss: 2 Wochen vor Event
                  </span>
                </div>

                <div className="mt-6 p-4 bg-black/30 rounded-lg inline-block">
                  <p className="text-gray-400 font-mono text-xs">
                    Bewerbung beinhaltet: CV/Portfolio · Security-Erfahrung · Motivation · GitHub/CTF-Profile
                      </p>
                    </div>
                  </div>
                </div>
              
            {/* Disclaimer */}
            <div className="mt-8 p-4 border border-yellow-500/50 bg-yellow-500/10 rounded-lg text-center">
              <p className="font-mono text-xs text-yellow-400 uppercase">
                ⚠ Nur mit expliziter Genehmigung · Responsible Disclosure Required · NDA wird unterzeichnet ⚠
              </p>
            </div>
          </div>

          {/* Warning stripes bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-4" style={{
            background: 'repeating-linear-gradient(-45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
        </section>

        {/* Competition Model */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Competition-Modell
              </h2>
              <p className="mt-4 text-historic-sepia font-mono">
                Wie die Bewertung funktioniert
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Team Distribution */}
              <div className="bg-off-white rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-brand-black mb-4">
                  📊 Team-Verteilung
                </h3>
                <div className="space-y-3">
                  {mandatoryPackages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{pkg.icon}</span>
                        <span className="font-mono text-sm">{pkg.nameDE}</span>
                      </div>
                      <span className="font-mono text-sm text-historic-sepia">10-12 Teams</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prize Distribution */}
              <div className="bg-off-white rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-brand-black mb-4">
                  🏆 Preisgeld-Verteilung
                </h3>
                <div className="space-y-3">
                  {mandatoryPackages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{pkg.icon}</span>
                        <span className="font-mono text-sm">{pkg.nameDE}</span>
                      </div>
                      <span className="font-mono text-sm font-bold text-thermal-orange">{pkg.prizeShare}%</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="font-mono text-sm">🔗 Best Integration</span>
                    <span className="font-mono text-sm font-bold text-grid-green">10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scoring per Position */}
            <div className="mt-8 bg-brand-black rounded-2xl p-6 text-center">
              <h3 className="font-display text-lg font-bold text-white mb-4">
                Punkte pro Platzierung
              </h3>
              <div className="flex justify-center gap-8">
                <div>
                  <div className="text-3xl mb-2">🥇</div>
                  <div className="font-mono text-2xl font-bold text-solar-yellow">40%</div>
                  <div className="font-mono text-xs text-gray-400">1. Platz</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🥈</div>
                  <div className="font-mono text-2xl font-bold text-gray-300">30%</div>
                  <div className="font-mono text-xs text-gray-400">2. Platz</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🥉</div>
                  <div className="font-mono text-2xl font-bold text-thermal-orange">20%</div>
                  <div className="font-mono text-xs text-gray-400">3. Platz</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-thermal-orange to-compute-blue">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Welches Paket packst du an?
            </h2>
            <p className="mt-4 text-white/90 font-mono max-w-xl mx-auto">
              Wähle deine Rolle bei der Anmeldung und finde ein Team für dein Paket.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Platz sichern: CHF 150
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Mehr über sihlhack
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
