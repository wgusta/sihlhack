import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Icon } from '@/components/ui/Icon'
import { Accordion } from '@/components/ui/Accordion'
import { HACKATHON_PACKAGES, HACKATHON_ROLES, PRE_CHALLENGE } from '@/lib/roles'
import { PackageCard, PackageCardCompact } from '@/components/challenges/PackageCard'
import { PreChallengeSection } from '@/components/challenges/PreChallengeSection'
import { GlossaryAccordion } from '@/components/challenges/GlossaryAccordion'
import { DemoKitVisualization } from '@/components/visualizations/DemoKitVisualization'
import { SafetyVisualization } from '@/components/visualizations/SafetyVisualization'
import { GridOSVisualization } from '@/components/visualizations/GridOSVisualization'
import { ComputeScenariosSection } from '@/components/landing/ComputeScenariosSection'
import { PrototypeVisualization } from '@/components/ui/PrototypeVisualization'
import Image from 'next/image'

export const metadata = {
  title: 'Pakete & Competition | sihlhack',
  description: 'Die drei Pflicht-Pakete und optionalen Challenges: End-to-End Demo-Kit, Hardware Safety, Grid-OS Controller. Competition-Style mit ~20 Teams.',
}

// Get packages by type (all are now mandatory/equal)
const mandatoryPackages = HACKATHON_PACKAGES.filter(p => p.type === 'mandatory')

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
  teamSize: '10-15 Personen (ein Team)',
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
              4 Challenges. ~20 Teams. Hardware wird bereitgestellt. Ihr programmiert die Logik. Beste Lösung gewinnt.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#compute-scenarios"
                className="inline-block font-mono text-sm text-compute-blue hover:text-compute-blue/80 underline"
              >
                → Was läuft auf dem Hub? Compute-Szenarien anschauen
              </a>
              <span className="text-gray-500 font-mono text-sm hidden sm:inline">|</span>
              <a
                href="/safety#challenge-risks"
                className="inline-block font-mono text-sm text-thermal-orange hover:text-thermal-orange/80 underline"
              >
                → Sicherheitsrisiken pro Paket
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="font-mono text-3xl font-bold text-thermal-orange">150</div>
                <div className="font-mono text-xs text-gray-400">Teilnehmende</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="font-mono text-3xl font-bold text-compute-blue">20</div>
                <div className="font-mono text-xs text-gray-400">Teams</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="font-mono text-3xl font-bold text-grid-green">3</div>
                <div className="font-mono text-xs text-gray-400">Tage</div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Sensor Integration', src: '/images/pkg_sensor_integration_cover.webp' },
                { title: 'Multi-Node Safety Coordination', src: '/images/pkg_multi_node_safety_cover.webp' },
                { title: 'Grid-OS Logic', src: '/images/pkg_grid_os_logic_cover.webp' },
              ].map((challengeImage) => (
                <div key={challengeImage.title} className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/20">
                  <Image
                    src={challengeImage.src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-brand-black/45" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-mono text-xs text-white">{challengeImage.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Non-Technical People */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-historic-sepia uppercase tracking-widest">
                Für Nicht-Techniker
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Was ist ein Sihlicon Hub?
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Einfache Erklärungen für alle, die noch nie von Active Energy Nodes gehört haben.
              </p>
            </div>

            <div className="space-y-4">
              <Accordion
                id="what-is-hub"
                title="Was ist ein Sihlicon Hub?"
                icon="🏠"
                color="thermal-orange"
                defaultOpen={true}
              >
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  Ein Sihlicon Hub ist wie ein intelligentes Energiesystem, das viel mehr kann als nur heizen. 
                  Stell dir vor: Du hast eine Solaranlage auf dem Dach, die tagsüber viel Energie produziert. 
                  Normalerweise geht diese Energie ins Netz oder wird verschwendet.
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  Ein Sihlicon Hub nutzt diese Energie intelligent:
                </p>
                <ul className="font-mono text-sm text-historic-sepia space-y-2 ml-4 list-disc">
                  <li><strong className="text-brand-black">Batterie:</strong> Speichert Sonnenenergie für die Nacht</li>
                  <li><strong className="text-brand-black">Computer:</strong> Erledigt Aufgaben, wenn viel Solar-Energie da ist</li>
                  <li><strong className="text-brand-black">Wärme:</strong> Die Abwärme vom Computer heizt dein Haus</li>
                  <li><strong className="text-brand-black">Resilienz:</strong> Bei Stromausfall versorgt die Batterie dein Quartier</li>
                </ul>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mt-4">
                  Es ist kein "Wasserkocher" – es ist ein <strong className="text-brand-black">Aktiver Energie-Knoten</strong>, 
                  der alle diese Funktionen intelligent kombiniert.
                </p>
              </Accordion>

              <Accordion
                id="why-do-we-need"
                title="Warum brauchen wir das?"
                icon="🌍"
                color="compute-blue"
              >
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  Die Schweiz braucht mehr dezentrale Energie-Infrastruktur. Statt riesige Rechenzentren zu bauen, 
                  die Flüsse erhitzen, können wir kleine, intelligente Systeme in geeigneten Räumen installieren, die Häuser heizen 
                  und gleichzeitig Computer-Aufgaben erledigen.
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  <strong className="text-brand-black">Energie-Souveränität:</strong> Wir werden weniger abhängig von 
                  grossen Energie-Konzernen und Cloud-Anbietern. Jeder kann seinen eigenen kleinen Energie-Knoten betreiben.
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  <strong className="text-brand-black">Resilienz:</strong> Wenn das Stromnetz ausfällt, können 
                  Nachbarschaften sich gegenseitig mit Energie versorgen. Die Batterien im Hub werden zu Notstromquellen.
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                  <strong className="text-brand-black">Effizienz:</strong> Statt Computer-Abwärme zu verschwenden, 
                  nutzen wir sie zum Heizen. Das ist viel effizienter als separate Systeme.
                </p>
              </Accordion>

              <Accordion
                id="how-does-hackathon-work"
                title="Wie funktioniert der Hackathon?"
                icon="⚡"
                color="grid-green"
              >
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  <strong className="text-brand-black">3 Tage, 4 Challenges:</strong> Jedes Team wählt ein Challenge-Paket
                  und programmiert daran. Hardware wird bereitgestellt – ihr schreibt die Grid-OS Logik.
                  Mehrere Teams arbeiten parallel am gleichen Paket – die beste Lösung gewinnt.
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  <strong className="text-brand-black">Simulation-to-Reality:</strong> Ihr entwickelt gegen den Sihl-Sim
                  (Digital Twin) lokal, testet auf dem 5V Safety Avatar, und finalisiert auf der supervised Reference Hardware.
                  Kein Pfad ist "richtig" – nur Trade-offs.
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-4">
                  <strong className="text-brand-black">Euer Code:</strong> Alles, was ihr programmiert, gehört euch.
                  Hardware-Designs unter <strong className="text-thermal-orange">CERN-OHL-P/MIT</strong> (vollständig frei),
                  Grid-OS Code unter <strong className="text-compute-blue">SVG-L</strong> (schützt das Netz).
                  Ihr könnt es forken, kommerzialisieren, oder in eurem eigenen Projekt nutzen. Wir ermutigen das.
                  <a href="/licensing" className="text-sihl-red hover:underline ml-1">→ Mehr zum Dual-Lizenz-Modell</a>
                </p>
                <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                  <strong className="text-brand-black">Preisgeld:</strong> Alle vier Challenges sind gleichwertig. Teilnahmegebühren fließen in den Prize Pool. Bewertung durch Jury nach technischer Qualität, Vollständigkeit, und Integration.
                </p>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Package Overview with Architecture */}
        <section className="bg-white py-16 border-b">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-display text-2xl font-bold mb-4">
              Übersicht
            </h2>
            <p className="text-center font-mono text-sm text-gray-600 max-w-3xl mx-auto mb-4">
              Vier Challenges bauen aufeinander auf: Von lokalen Sensoren über Multi-Node-Koordination bis zur Grid-Integration und rechtlichen Grundlagen.
            </p>
            <div className="text-center mb-12">
              <div className="inline-block bg-sihl-red/10 border-2 border-sihl-red/30 rounded-lg px-4 py-2">
                <p className="font-mono text-sm text-sihl-red font-bold">
                  ⚠️ Pro Team nur 1 Challenge
                </p>
              </div>
            </div>

            {/* Onion Layer Visualization - Rectangular */}
            <div className="mb-12">
              {/* Desktop Version - Simplified Horizontal Layers */}
              <div className="hidden md:block w-full max-w-6xl mx-auto space-y-6">
                {/* Layer 1 (Innermost): Sensor Integration */}
                <div className="border-4 border-dashed border-thermal-orange/60 bg-thermal-orange/5 rounded-lg p-10">
                  <div className="flex items-center justify-between gap-12">
                    <div className="flex-1">
                      <div className="font-mono text-lg text-thermal-orange font-bold mb-2">📡 Sensor Integration</div>
                      <div className="font-mono text-xs text-gray-500 mb-4">Einzelne LEG · Innerste Schicht</div>
                      <ul className="font-mono text-sm text-gray-600 space-y-2 mb-4">
                        <li>• Temperatursensoren auslesen und kalibrieren</li>
                        <li>• Thermische Daten in Echtzeit verarbeiten</li>
                        <li>• Lokale Speicherung der Sensor-Logs</li>
                        <li>• Node Dashboard für Monitoring bauen</li>
                      </ul>
                      <a
                        href="#sensor-integration"
                        className="inline-block px-4 py-2 bg-thermal-orange text-white font-mono text-xs rounded-lg hover:bg-thermal-orange/90 transition-colors"
                      >
                        Details zur Challenge →
                      </a>
                    </div>
                    <div className="flex flex-col items-center gap-3 min-w-[200px]">
                      <div className="relative">
                        {/* Main Hub */}
                        <div className="w-24 h-24 bg-thermal-orange/20 border-2 border-thermal-orange rounded-xl flex items-center justify-center relative">
                          <div className="text-4xl">🏠</div>
                          <div className="absolute -top-3 -right-3 text-2xl">⚡</div>
                        </div>

                        {/* Solar Panel - top left */}
                        <div className="absolute -top-6 -left-8 flex flex-col items-center">
                          <div className="w-10 h-10 bg-solar-yellow/20 border border-solar-yellow/40 rounded flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="fill-solar-yellow">
                              <rect x="4" y="8" width="16" height="12" rx="1" className="fill-solar-yellow/60" />
                              <line x1="4" y1="11" x2="20" y2="11" stroke="currentColor" strokeWidth="0.5" className="stroke-solar-yellow" />
                              <line x1="4" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="0.5" className="stroke-solar-yellow" />
                              <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="0.5" className="stroke-solar-yellow" />
                              <line x1="8" y1="8" x2="8" y2="20" stroke="currentColor" strokeWidth="0.5" className="stroke-solar-yellow" />
                              <line x1="12" y1="8" x2="12" y2="20" stroke="currentColor" strokeWidth="0.5" className="stroke-solar-yellow" />
                              <line x1="16" y1="8" x2="16" y2="20" stroke="currentColor" strokeWidth="0.5" className="stroke-solar-yellow" />
                            </svg>
                          </div>
                          <div className="font-mono text-[7px] text-gray-500 mt-0.5">Solar</div>
                        </div>

                        {/* Battery - bottom left */}
                        <div className="absolute -bottom-6 -left-8 flex flex-col items-center">
                          <div className="w-10 h-10 bg-grid-green/20 border border-grid-green/40 rounded flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                              <rect x="5" y="6" width="10" height="8" rx="1" className="fill-none stroke-grid-green" strokeWidth="1.5" />
                              <rect x="7" y="4" width="6" height="2" className="fill-grid-green" />
                              <rect x="6.5" y="8" width="1.5" height="4" className="fill-grid-green" />
                              <rect x="9" y="8" width="1.5" height="4" className="fill-grid-green" />
                              <rect x="11.5" y="8" width="1.5" height="4" className="fill-grid-green" />
                            </svg>
                          </div>
                          <div className="font-mono text-[7px] text-gray-500 mt-0.5">Batterie</div>
                        </div>

                        {/* Heat/Wärmepumpe - bottom right */}
                        <div className="absolute -bottom-6 -right-8 flex flex-col items-center">
                          <div className="w-10 h-10 bg-thermal-orange/20 border border-thermal-orange/40 rounded flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                              <path d="M10 4 Q8 6 10 8 Q12 6 10 4" className="fill-thermal-orange opacity-60" />
                              <path d="M10 7 Q8 9 10 11 Q12 9 10 7" className="fill-thermal-orange opacity-80" />
                              <path d="M10 10 Q8 12 10 14 Q12 12 10 10" className="fill-thermal-orange" />
                            </svg>
                          </div>
                          <div className="font-mono text-[7px] text-gray-500 mt-0.5">Wärme</div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-gray-600 text-center mt-8">
                        Single Sihlicon Hub
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow down with animated connection */}
                <div className="text-center py-3">
                  <svg width="60" height="50" className="mx-auto">
                    <line x1="30" y1="0" x2="30" y2="45" stroke="#dc2626" strokeWidth="3" className="animated-line" />
                    <polygon points="30,45 22,35 38,35" fill="#dc2626" />
                  </svg>
                  <div className="font-mono text-xs text-gray-500 font-semibold">Koordination</div>
                </div>

                {/* Layer 2: Multi-Node Safety */}
                <div className="border-4 border-dashed border-sihl-red/60 bg-sihl-red/5 rounded-lg p-10">
                  <div className="flex items-center justify-between gap-12">
                    <div className="flex-1">
                      <div className="font-mono text-lg text-sihl-red font-bold mb-2">🛡️ Multi-Node Safety</div>
                      <div className="font-mono text-xs text-gray-500 mb-4">LEG-Verbund · Mehrere LEGs</div>
                      <ul className="font-mono text-sm text-gray-600 space-y-2 mb-4">
                        <li>• Mehrere Nodes koordinieren und synchronisieren</li>
                        <li>• Failover-Logik bei Ausfall eines Nodes</li>
                        <li>• Netzwerk-Synchronisation zwischen LEGs</li>
                        <li>• Koordinations-Dashboard für Überwachung</li>
                      </ul>
                      <a
                        href="#operational-safety-logic"
                        className="inline-block px-4 py-2 bg-sihl-red text-white font-mono text-xs rounded-lg hover:bg-sihl-red/90 transition-colors"
                      >
                        Details zur Challenge →
                      </a>
                    </div>
                    <div className="relative min-w-[220px]">
                      <svg width="220" height="120" className="absolute top-0 left-0">
                        <line x1="70" y1="50" x2="150" y2="50" stroke="#dc2626" strokeWidth="2" className="animated-line" />
                      </svg>
                      <div className="flex gap-6 justify-center relative z-10">
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 bg-sihl-red/20 border-2 border-sihl-red rounded-lg flex items-center justify-center">
                            <div className="text-3xl">🏠</div>
                          </div>
                          <div className="font-mono text-[10px] text-gray-600 mt-2">LEG 1</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 bg-sihl-red/20 border-2 border-sihl-red rounded-lg flex items-center justify-center">
                            <div className="text-3xl">🏠</div>
                          </div>
                          <div className="font-mono text-[10px] text-gray-600 mt-2">LEG 2</div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-gray-600 text-center mt-3">Synchronized</div>
                    </div>
                  </div>
                </div>

                {/* Arrow down with animated connection */}
                <div className="text-center py-3">
                  <svg width="60" height="50" className="mx-auto">
                    <line x1="30" y1="0" x2="30" y2="45" stroke="#2563eb" strokeWidth="3" className="animated-line" />
                    <polygon points="30,45 22,35 38,35" fill="#2563eb" />
                  </svg>
                  <div className="font-mono text-xs text-gray-500 font-semibold">Grid Integration</div>
                </div>

                {/* Layer 3: Grid-OS Logic - 3x3 Matrix */}
                <div className="border-4 border-dashed border-compute-blue/60 bg-compute-blue/5 rounded-lg p-10">
                  <div className="flex items-start justify-between gap-12">
                    <div className="flex-1">
                      <div className="font-mono text-lg text-compute-blue font-bold mb-2">⚡ Grid-OS Logic</div>
                      <div className="font-mono text-xs text-gray-500 mb-4">Netzanschluss · System-Ebene</div>
                      <ul className="font-mono text-sm text-gray-600 space-y-2 mb-4">
                        <li>• Load Balancing über mehrere LEG-Gruppen</li>
                        <li>• VPP Integration für Strommarkt-Teilnahme</li>
                        <li>• Inter-LEG Compute Credits: Hubs handeln Rechenkapazität in kWh</li>
                        <li>• System Dashboard für Gesamtübersicht</li>
                      </ul>
                      <a
                        href="#grid-os-logic"
                        className="inline-block px-4 py-2 bg-compute-blue text-white font-mono text-xs rounded-lg hover:bg-compute-blue/90 transition-colors"
                      >
                        Details zur Challenge →
                      </a>
                    </div>
                    <div className="relative min-w-[300px]">
                      {/* SVG layer for connecting lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        {/* Connect all houses with dotted lines - full mesh network */}
                        {/* Row 1 to Row 1 */}
                        <line x1="82" y1="36" x2="138" y2="36" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="138" y1="36" x2="194" y2="36" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        {/* Row 1 to Row 2 */}
                        <line x1="82" y1="36" x2="82" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="138" y1="36" x2="138" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="194" y1="36" x2="194" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        {/* Row 2 to Row 2 */}
                        <line x1="82" y1="92" x2="138" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="138" y1="92" x2="194" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        {/* Row 2 to Row 3 */}
                        <line x1="82" y1="92" x2="82" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="138" y1="92" x2="138" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="194" y1="92" x2="194" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        {/* Row 3 to Row 3 */}
                        <line x1="82" y1="148" x2="138" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        <line x1="138" y1="148" x2="194" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.3" />
                        {/* Diagonal cross-connections */}
                        <line x1="82" y1="36" x2="138" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.2" />
                        <line x1="138" y1="36" x2="194" y2="92" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.2" />
                        <line x1="82" y1="92" x2="138" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.2" />
                        <line x1="138" y1="92" x2="194" y2="148" stroke="#2563eb" strokeWidth="1" className="animated-line" opacity="0.2" />
                      </svg>
                      <div className="relative z-10">
                        {/* 3x3 Matrix - Rows are LEG groups, Columns are nodes */}
                        <div className="space-y-3">
                          {/* Row 1: LEG Group A */}
                          <div className="flex items-center gap-2">
                            <div className="font-mono text-[8px] text-gray-500 w-12">LEG A</div>
                            <div className="flex gap-2 bg-blue-100/50 p-2 rounded">
                              <div className="w-12 h-12 bg-blue-200 border-2 border-blue-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                              <div className="w-12 h-12 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                              <div className="w-12 h-12 bg-purple-200 border-2 border-purple-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                            </div>
                          </div>
                          {/* Row 2: LEG Group B */}
                          <div className="flex items-center gap-2">
                            <div className="font-mono text-[8px] text-gray-500 w-12">LEG B</div>
                            <div className="flex gap-2 bg-red-100/50 p-2 rounded">
                              <div className="w-12 h-12 bg-blue-200 border-2 border-blue-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                              <div className="w-12 h-12 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                              <div className="w-12 h-12 bg-purple-200 border-2 border-purple-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                            </div>
                          </div>
                          {/* Row 3: LEG Group C */}
                          <div className="flex items-center gap-2">
                            <div className="font-mono text-[8px] text-gray-500 w-12">LEG C</div>
                            <div className="flex gap-2 bg-yellow-100/50 p-2 rounded">
                              <div className="w-12 h-12 bg-blue-200 border-2 border-blue-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                              <div className="w-12 h-12 bg-green-200 border-2 border-green-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                              <div className="w-12 h-12 bg-purple-200 border-2 border-purple-400 rounded flex items-center justify-center">
                                <div className="text-lg">🏠</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center mt-4">
                          <div className="text-3xl">⚡</div>
                          <div className="font-mono text-[9px] text-gray-600 mt-1 text-center">Grid Connected</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow down with animated connection */}
                <div className="text-center py-3">
                  <svg width="60" height="50" className="mx-auto">
                    <line x1="30" y1="0" x2="30" y2="45" stroke="#ca8a04" strokeWidth="3" className="animated-line" />
                    <polygon points="30,45 22,35 38,35" fill="#ca8a04" />
                  </svg>
                  <div className="font-mono text-xs text-gray-500 font-semibold">Rechtlicher Rahmen</div>
                </div>

                {/* Layer 4: LEG Legal */}
                <div className="border-4 border-dashed border-industrial-gold/60 bg-industrial-gold/5 rounded-lg p-10">
                  <div className="flex items-center justify-between gap-12">
                    <div className="flex-1">
                      <div className="font-mono text-lg text-industrial-gold font-bold mb-2">⚖️ LEG Legal & Hardware Compliance</div>
                      <div className="font-mono text-xs text-gray-500 mb-4">Rechtliche Grundlagen · Gesamtsystem</div>
                      <ul className="font-mono text-sm text-gray-600 space-y-2 mb-4">
                        <li>• LEG-Statuten und Vertragsvorlagen erstellen</li>
                        <li>• StromVG/EnG Compliance sicherstellen</li>
                        <li>• Hardware Reuse (CE-Kennzeichnung, PrSG)</li>
                        <li>• Haftungsklärung und Versicherungsfragen</li>
                      </ul>
                      <a
                        href="#leg-starter"
                        className="inline-block px-4 py-2 bg-industrial-gold text-white font-mono text-xs rounded-lg hover:bg-industrial-gold/90 transition-colors"
                      >
                        Details zur Challenge →
                      </a>
                    </div>
                    <div className="flex flex-col items-center gap-3 min-w-[180px]">
                      <div className="text-6xl opacity-30">📜</div>
                      <div className="font-mono text-xs text-gray-500 text-center">Rechtlicher Rahmen</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Version - Stacked Cards */}
              <div className="md:hidden space-y-3 max-w-md mx-auto px-4">
                <div className="p-3 rounded-lg border-2 border-dashed border-thermal-orange/60 bg-thermal-orange/5">
                  <div className="font-mono text-xs text-thermal-orange font-bold mb-1">📡 Sensor Integration</div>
                  <div className="font-mono text-[9px] text-gray-500">Einzelne LEG · Sensoren, Thermal Mgmt, Local Storage</div>
                </div>
                <div className="text-center font-mono text-xs text-gray-400">↓</div>
                <div className="p-3 rounded-lg border-2 border-dashed border-sihl-red/60">
                  <div className="font-mono text-xs text-sihl-red font-bold mb-1">🛡️ Multi-Node Safety</div>
                  <div className="font-mono text-[9px] text-gray-500">LEG-Verbund · Multi-Node, Failover, Network Sync</div>
                </div>
                <div className="text-center font-mono text-xs text-gray-400">↓</div>
                <div className="p-3 rounded-lg border-2 border-dashed border-compute-blue/60">
                  <div className="font-mono text-xs text-compute-blue font-bold mb-1">⚡ Grid-OS Logic</div>
                  <div className="font-mono text-[9px] text-gray-500">Netzanschluss · Load Balancing, VPP, Compute Credits</div>
                </div>
                <div className="text-center font-mono text-xs text-gray-400">↓</div>
                <div className="p-3 rounded-lg border-2 border-dashed border-industrial-gold/60">
                  <div className="font-mono text-xs text-industrial-gold font-bold mb-1">⚖️ LEG Legal</div>
                  <div className="font-mono text-[9px] text-gray-500">Rechtliche Grundlagen</div>
                </div>
              </div>

              <p className="text-center font-mono text-[10px] text-gray-500 mt-6 max-w-xl mx-auto">
                Jedes Team wählt eine Ebene. Alle drei lösen Scheduling-Probleme, aber auf verschiedenen Layern:
                Safety-Scheduling hat absolute Priorität, Grid-OS plant die Energie-Nutzung, Sensoren liefern Daten unter variablem Energiebudget.
              </p>
            </div>

            {/* Snackathons - Optional */}
            <div className="mb-6">
              <h3 className="font-mono text-xs text-historic-sepia uppercase tracking-wider text-center mb-4">
                🍿 Snackathons <span className="text-gray-500">(OPTIONAL · CHF 80)</span>
              </h3>
              <p className="text-center font-mono text-[10px] text-gray-500 mb-4">
                Pilot-Events im Frühling 2026 · <a href="/snackathons" className="text-sihl-red hover:underline">Alle Details →</a>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                {/* April 2026 Snackathons */}
                <a
                  href="/snackathons#april-2026"
                  className="p-4 rounded-xl border-2 border-sihl-red/40 hover:border-sihl-red hover:bg-sihl-red/10 transition-all relative group"
                >
                  <div className="absolute -top-2 -right-2 bg-sihl-red text-white text-[9px] font-mono px-2 py-0.5 rounded-full shadow-sm">
                    🍿 Pilot #1
                  </div>
                  <div className="absolute -top-2 left-3 bg-gray-200 text-gray-600 text-[8px] font-mono px-2 py-0.5 rounded">
                    CHF 80
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-2xl">🍿</span>
                    <div>
                      <div className="font-mono text-sm font-semibold text-brand-black">April 2026</div>
                      <div className="font-accent text-xs text-historic-sepia/70">Sihl-Sim API</div>
                      <div className="font-mono text-[10px] text-sihl-red mt-1">Erster Pilot-Event →</div>
                    </div>
                  </div>
                </a>

                {/* Mai 2026 Snackathons */}
                <a
                  href="/snackathons#mai-2026"
                  className="p-4 rounded-xl border-2 border-historic-sepia/40 hover:border-historic-sepia hover:bg-historic-cream/30 transition-all relative group"
                >
                  <div className="absolute -top-2 -right-2 bg-historic-sepia text-white text-[9px] font-mono px-2 py-0.5 rounded-full shadow-sm">
                    🍿 Pilot #2
                  </div>
                  <div className="absolute -top-2 left-3 bg-gray-200 text-gray-600 text-[8px] font-mono px-2 py-0.5 rounded">
                    CHF 80
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="text-2xl">🍿</span>
                    <div>
                      <div className="font-mono text-sm font-semibold text-brand-black">Mai 2026</div>
                      <div className="font-accent text-xs text-historic-sepia/70">Sihl-Sim API (Iteration)</div>
                      <div className="font-mono text-[10px] text-historic-sepia mt-1">Zweiter Pilot-Event →</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Team Red - Single Card */}
            <div>
              <h3 className="font-mono text-xs text-red-500 uppercase tracking-wider text-center mb-4">
                Spezialeinheit · Mit Bewerbung
              </h3>
              <div className="flex justify-center">
                <a
                  href="#team-red"
                  className="p-4 rounded-xl border-2 border-red-500 bg-red-500/10 hover:bg-red-500/20 transition-all text-center relative overflow-hidden group max-w-xs w-full"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,0,0,0.03) 10px, rgba(255,0,0,0.03) 20px)',
                  }}
                >
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] font-mono px-2 py-0.5 rounded-bl">
                    SELEKTION
                  </div>
                  <div className="mb-2 flex justify-center">
                    <Icon emoji={TEAM_RED.icon} size="xl" color="text-sihl-red" />
                  </div>
                  <span className="font-mono text-sm font-bold text-red-500 block">Team Red</span>
                  <span className="block font-mono text-[10px] text-red-400 mt-1">
                    {TEAM_RED.nameDE}
                  </span>
                  <span className="block font-mono text-[9px] text-red-500/60 mt-2 group-hover:text-red-500 transition-colors">
                    Separate Bewerbung →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduling: The Unifying Thread */}
        <section className="py-16 bg-brand-black text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="font-mono text-sm text-grid-green uppercase tracking-widest">
                Der gemeinsame Nenner
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
                Scheduling auf jeder Ebene
              </h2>
              <p className="mt-4 text-gray-300 font-mono max-w-2xl mx-auto">
                Das Sihlicon Hub ist kein Rechenzentrum. Clouds optimieren, welche Jobs auf welche Maschinen passen.
                Wir optimieren, WANN gerechnet wird: abhängig von Solar, Batterie, Netz und Wärmebedarf.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 border border-sihl-red/30 rounded-xl p-6">
                <div className="font-mono text-xs text-sihl-red uppercase tracking-wider mb-2">Priorität 1</div>
                <h3 className="font-mono text-lg font-bold text-sihl-red mb-3">Safety Scheduling</h3>
                <p className="font-mono text-sm text-gray-300">
                  Heartbeats, Konsens-Checks, Not-Aus: garantierte Latenz, egal wie das Energiebudget aussieht.
                  Safety übersteuert alles. Immer.
                </p>
              </div>

              <div className="bg-white/5 border border-compute-blue/30 rounded-xl p-6">
                <div className="font-mono text-xs text-compute-blue uppercase tracking-wider mb-2">Priorität 2</div>
                <h3 className="font-mono text-lg font-bold text-compute-blue mb-3">Energie-Scheduling</h3>
                <p className="font-mono text-sm text-gray-300">
                  Der 10Hz-Regelkreis: WANN rechnen, WANN laden, WANN heizen. Solar-Kurven, Spot-Preise,
                  Batterie-Zustand, Wärmebedarf. Fünf Ziele gleichzeitig optimieren.
                </p>
              </div>

              <div className="bg-white/5 border border-thermal-orange/30 rounded-xl p-6">
                <div className="font-mono text-xs text-thermal-orange uppercase tracking-wider mb-2">Priorität 3</div>
                <h3 className="font-mono text-lg font-bold text-thermal-orange mb-3">Daten-Scheduling</h3>
                <p className="font-mono text-sm text-gray-300">
                  Sensoren liefern kontinuierlich Daten. Aber wieviel darf verarbeitet werden, wenn die Energie knapp ist?
                  Safety-Sensoren laufen immer. Analytics werden gedrosselt.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-grid-green/30 rounded-xl p-6 max-w-3xl mx-auto">
              <h4 className="font-mono text-sm font-bold text-grid-green mb-3">Saisonalität ist kein Bug, sondern das Design.</h4>
              <p className="font-mono text-sm text-gray-300">
                Im Sommer: viel Solar, wenig Wärmebedarf. Der Scheduler maximiert Compute-Durchsatz und exportiert Überschuss.
                Im Winter: wenig Solar, hoher Wärmebedarf. Der Scheduler priorisiert Wärmeerzeugung und nutzt günstige Netzfenster.
                Der Jahresrhythmus ist kein Problem, das gelöst werden muss. Er ist der Taktgeber eures Schedulers.
              </p>
            </div>
          </div>
        </section>

        {/* Thermal Architecture Challenge */}
        <section id="thermal-architecture" className="py-16 bg-gradient-to-br from-thermal-orange/5 via-off-white to-compute-blue/5">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4">
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
                <div className="space-y-2">
                  <Accordion id="path-a-what" title="Was bedeutet das?" icon="❓" color="thermal-orange">
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                      Die Server-Komponenten (CPU, GPU) werden vollständig in spezielles, nicht-leitfähiges Öl getaucht. 
                      Das Öl leitet Wärme direkt von den Chips ab – viel effizienter als Luftkühlung. 
                      Es ist wie ein Ölbad für Computer: Die Wärme wird direkt ins Öl übertragen und dann über 
                      einen Wärmetauscher ins Heizungssystem geleitet.
                    </p>
                  </Accordion>
                  <Accordion id="path-a-why" title="Warum diesen Pfad wählen?" icon="💡" color="thermal-orange">
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                      Wähle diesen Pfad, wenn:
                    </p>
                    <ul className="font-mono text-sm text-historic-sepia space-y-1 ml-4 list-disc">
                      <li>Du maximale Wärmeausbeute brauchst (99%)</li>
                      <li>Lautlosigkeit wichtig ist (keine Lüfter)</li>
                      <li>Du bereit bist, mit Öl-Handling umzugehen</li>
                      <li>Du professionelle Wartung planst</li>
                    </ul>
                  </Accordion>
                  <Accordion id="path-a-challenges" title="Was sind die Herausforderungen?" icon="⚠️" color="thermal-orange">
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                          <strong className="text-brand-black">Öl-Handling:</strong> Dielektrisches Öl (z.B. Midel 7131) 
                          muss fachgerecht gehandhabt werden. Leckagen müssen sofort erkannt werden.
                        </p>
                        <div className="bg-sihl-red/5 border border-sihl-red/20 rounded-lg p-3 mt-2">
                          <p className="text-xs font-mono text-sihl-red font-semibold mb-1">⚠️ Spezifische Risiken:</p>
                          <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                            <li>• Öl-Leckage: Umweltverschmutzung, Rutschgefahr</li>
                            <li>• Brandrisiko: Öl ist brennbar (Flashpoint &gt;200°C)</li>
                            <li>• Öl-Dämpfe: Gesundheitsrisiko bei Einatmung</li>
                          </ul>
                          <p className="text-xs font-mono text-grid-green font-semibold mt-2 mb-1">✓ Schutzmassnahmen:</p>
                          <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                            <li>• Leckwanne (Auffangbehälter) für alle Ölsysteme</li>
                            <li>• Brandschutzsystem kompatibel mit Öl</li>
                            <li>• Belüftungssystem für Dampf-Abzug</li>
                          </ul>
                        </div>
                      </div>
                      <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                        <strong className="text-brand-black">Brandschutz:</strong> Öl ist brennbar. Leckwannen, 
                        Brandschutz-Massnahmen und Not-Aus-Schalter sind Pflicht.
                      </p>
                      <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                        <strong className="text-brand-black">Wartung:</strong> Komplexer als Wasser-Systeme. 
                        Öl muss regelmässig überprüft und eventuell gewechselt werden.
                      </p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <a href="/safety#challenge-risks" className="text-thermal-orange hover:underline font-mono text-xs">
                          → Detaillierte Risikoanalyse auf der Safety-Seite
                        </a>
                      </div>
                    </div>
                  </Accordion>
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
                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4">
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
                <div className="space-y-2">
                  <Accordion id="path-b-what" title="Was bedeutet das?" icon="❓" color="compute-blue">
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                      Kühlwasser wird direkt auf die CPU/GPU-Chips geleitet über spezielle Kühlplatten. 
                      Die Wärme wird ins Wasser übertragen und dann über einen Wärmetauscher ins Heizungssystem. 
                      Es ist wie eine Auto-Kühlung: Bewährt, Standard-Komponenten, einfach zu reparieren. 
                      Aber nicht alle Wärme wird erfasst – ein Teil geht über die Luft verloren.
                    </p>
                  </Accordion>
                  <Accordion id="path-b-why" title="Warum diesen Pfad wählen?" icon="💡" color="compute-blue">
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                      Wähle diesen Pfad, wenn:
                    </p>
                    <ul className="font-mono text-sm text-historic-sepia space-y-1 ml-4 list-disc">
                      <li>Du bewährte, einfache Technik bevorzugst</li>
                      <li>Standard-Komponenten wichtig sind (einfache Beschaffung)</li>
                      <li>Einfache Wartung und Reparatur Priorität haben</li>
                      <li>60-70% Wärmeausbeute ausreichend ist</li>
                    </ul>
                  </Accordion>
                  <Accordion id="path-b-challenges" title="Was sind die Herausforderungen?" icon="⚠️" color="compute-blue">
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                          <strong className="text-brand-black">Wärmeausbeute:</strong> Nur 60-70% der Wärme wird erfasst. 
                          Der Rest geht über die Luft verloren. Nicht so effizient wie Immersion.
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                          <strong className="text-brand-black">Leckage-Risiko:</strong> Wasser und Elektronik sind eine 
                          gefährliche Kombination. Leckwannen und Überwachung sind Pflicht.
                        </p>
                        <div className="bg-sihl-red/5 border border-sihl-red/20 rounded-lg p-3 mt-2">
                          <p className="text-xs font-mono text-sihl-red font-semibold mb-1">⚠️ Spezifische Risiken:</p>
                          <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                            <li>• Elektrokontakt: Wasser + Strom = Lebensgefahr (tödliche Ströme möglich)</li>
                            <li>• Leckage: Wasserschaden, Kurzschluss, Systemausfall</li>
                            <li>• Pumpen-Ausfall: Führt zu Überhitzung und möglichem Systemausfall</li>
                          </ul>
                          <p className="text-xs font-mono text-grid-green font-semibold mt-2 mb-1">✓ Schutzmassnahmen:</p>
                          <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                            <li>• Vollständig isolierte Systeme (Wasser nie in Kontakt mit Strom)</li>
                            <li>• Leckage-Erkennungssensoren mit sofortiger Abschaltung</li>
                            <li>• Redundante Pumpen für Ausfallsicherheit</li>
                            <li>• RCD/GFCI-Schutz für alle wassernahen Systeme</li>
                          </ul>
                        </div>
                      </div>
                      <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                        <strong className="text-brand-black">Geräusch:</strong> Pumpen machen Geräusche. 
                        Nicht so lautlos wie Immersion-Cooling.
                      </p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <a href="/safety#challenge-risks" className="text-compute-blue hover:underline font-mono text-xs">
                          → Detaillierte Risikoanalyse auf der Safety-Seite
                        </a>
                      </div>
                    </div>
                  </Accordion>
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
                  Server-Wärme (45-55°C) als Quelle für eine Wärmepumpe. Wird auf 70°C+ gehoben,
                  genug für Radiatoren. Aber: Komplexität und COP-Trade-offs.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4">
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
                <div className="space-y-2">
                  <Accordion id="path-c-what" title="Was bedeutet das?" icon="❓" color="grid-green">
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                      Die Abwärme vom Server (45-55°C) wird als Quelle für eine Wärmepumpe genutzt.
                      Die Pumpe "pumpt" die Temperatur auf 70°C+ hoch – genug für normale Radiatoren. 
                      Es ist wie eine umgekehrte Klimaanlage: Statt Kälte zu erzeugen, erzeugt sie höhere Wärme. 
                      Die höchste Nutzung der Server-Wärme, aber auch die komplexeste Lösung.
                    </p>
                  </Accordion>
                  <Accordion id="path-c-why" title="Warum diesen Pfad wählen?" icon="💡" color="grid-green">
                    <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                      Wähle diesen Pfad, wenn:
                    </p>
                    <ul className="font-mono text-sm text-historic-sepia space-y-1 ml-4 list-disc">
                      <li>Du hohe Temperaturen brauchst (70°C+ für Radiatoren)</li>
                      <li>Maximale Wärmenutzung wichtig ist</li>
                      <li>Du bereit bist, mit komplexer Technik umzugehen</li>
                      <li>Du die zusätzlichen Kosten für die Wärmepumpe akzeptierst</li>
                    </ul>
                  </Accordion>
                  <Accordion id="path-c-challenges" title="Was sind die Herausforderungen?" icon="⚠️" color="grid-green">
                    <div className="space-y-4">
                      <div>
                        <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                          <strong className="text-brand-black">Komplexität:</strong> Wärmepumpen sind komplexe Systeme. 
                          Mehr Komponenten = mehr Fehlerquellen. Professionelle Installation empfohlen.
                        </p>
                        <div className="bg-sihl-red/5 border border-sihl-red/20 rounded-lg p-3 mt-2">
                          <p className="text-xs font-mono text-sihl-red font-semibold mb-1">⚠️ Spezifische Risiken:</p>
                          <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                            <li>• Hochdruck: Kältemittel unter hohem Druck (professionelle Überwachung erforderlich)</li>
                            <li>• Kältemittel-Austritt: Umweltgefahr, Gesundheitsrisiko, Ozonabbau</li>
                            <li>• Komplexe Fehlerketten: Mehrere Systeme müssen zusammenarbeiten</li>
                          </ul>
                          <p className="text-xs font-mono text-grid-green font-semibold mt-2 mb-1">✓ Schutzmassnahmen:</p>
                          <ul className="space-y-1 text-xs font-mono text-historic-sepia">
                            <li>• Druck-Überwachung mit automatischer Abschaltung</li>
                            <li>• Dichtheitsprüfung vor Inbetriebnahme</li>
                            <li>• Professionelle Installation durch zertifizierte Techniker</li>
                            <li>• Redundante Sicherheitssysteme</li>
                          </ul>
                        </div>
                      </div>
                      <p className="font-mono text-sm text-historic-sepia leading-relaxed mb-2">
                        <strong className="text-brand-black">Stromverbrauch:</strong> Die Wärmepumpe braucht selbst Strom. 
                        COP (Coefficient of Performance) bestimmt, wie effizient das ist. COP 3 = 1 kWh Strom erzeugt 3 kWh Wärme.
                      </p>
                      <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                        <strong className="text-brand-black">Kosten:</strong> Wärmepumpen sind teuer. 
                        Die Investition muss sich durch höhere Wärmenutzung lohnen.
                      </p>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <a href="/safety#challenge-risks" className="text-grid-green hover:underline font-mono text-xs">
                          → Detaillierte Risikoanalyse auf der Safety-Seite
                        </a>
                      </div>
                    </div>
                  </Accordion>
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

        {/* Challenge Details */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-brand-black uppercase tracking-widest">
                Die vier Challenges
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Details zu allen Challenges
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Jedes Team wählt eine Challenge als Hauptfokus.
                Mehrere Teams arbeiten parallel an der gleichen Challenge. Beste Lösung gewinnt.
              </p>
            </div>

            <div className="space-y-12">
              {/* Challenge 1: Sensor Integration */}
              <div id="sensor-integration" className="scroll-mt-24">
                <PackageCard
                  pkg={mandatoryPackages.find(p => p.id === 'sensor-integration')!}
                  showVisualization={true}
                  visualization={<DemoKitVisualization />}
                />
                <div className="mt-4 text-center">
                  <a
                    href="/#compute-scenarios"
                    className="inline-block font-mono text-sm text-compute-blue hover:text-compute-blue/80 underline"
                  >
                    → Welche Compute-Workloads laufen auf dem Hub?
                  </a>
                </div>
              </div>

              {/* Challenge 2: Multi-Node Safety Coordination */}
              <div id="operational-safety-logic" className="scroll-mt-24">
                <PackageCard
                  pkg={mandatoryPackages.find(p => p.id === 'operational-safety-logic')!}
                  showVisualization={true}
                  visualization={<SafetyVisualization />}
                />
              </div>

              {/* Challenge 3: Grid-OS Logic */}
              <div id="grid-os-logic" className="scroll-mt-24">
                <PackageCard
                  pkg={mandatoryPackages.find(p => p.id === 'grid-os-logic')!}
                  showVisualization={true}
                  visualization={<GridOSVisualization />}
                />
              </div>

              {/* Challenge 4: LEG Legal & Hardware Compliance */}
              <div id="leg-starter" className="scroll-mt-24">
                <PackageCard
                  pkg={mandatoryPackages.find(p => p.id === 'leg-starter')!}
                />
              </div>
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
                🎯 3 TEAM REDS · EINZIGE CHALLENGE MIT SELEKTION
              </div>
              <span className="font-mono text-xs text-red-500 uppercase tracking-[0.5em] animate-pulse block">
                ⚠ DANGER ZONE ⚠
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-red-500 mt-4">
                <span className="inline-flex items-center gap-2">
                  <Icon emoji={TEAM_RED.icon} size="md" color="text-sihl-red" />
                  {TEAM_RED.nameDE}
                </span>
                        </h2>
              <p className="mt-4 text-gray-400 font-mono max-w-2xl mx-auto">
                {TEAM_RED.description}
              </p>
                <p className="mt-2 text-gray-500 font-mono text-sm">
                Team-Grösse: {TEAM_RED.teamSize} · Ein einziges Team
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
                  Wir suchen erfahrene Security-Researcher mit nachweisbarer Expertise für <strong className="text-red-400">ein einziges Team mit 10-15 Personen</strong>. 
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

        {/* Glossary Accordion */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-historic-sepia uppercase tracking-widest">
                Fachbegriffe
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Was bedeutet das eigentlich?
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Technische Begriffe, die in den Challenges verwendet werden, kurz erklärt.
              </p>
            </div>
            <GlossaryAccordion />
          </div>
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

            {/* Team Distribution */}
            <div className="bg-off-white rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-lg font-bold text-brand-black mb-6 text-center">
                📊 Team-Verteilung
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon emoji="📡" size="lg" color="text-thermal-orange" />
                    <span className="font-mono text-sm">Sensor Integration</span>
                  </div>
                  <span className="font-mono text-sm text-historic-sepia">~7 Teams</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon emoji="🛡️" size="lg" color="text-sihl-red" />
                    <span className="font-mono text-sm">Multi-Node Safety</span>
                  </div>
                  <span className="font-mono text-sm text-historic-sepia">~7 Teams</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon emoji="⚡" size="lg" color="text-compute-blue" />
                    <span className="font-mono text-sm">Grid-OS Logic</span>
                  </div>
                  <span className="font-mono text-sm text-historic-sepia">~7 Teams</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon emoji="⚖️" size="lg" color="text-industrial-gold" />
                    <span className="font-mono text-sm">LEG Legal & Hardware</span>
                  </div>
                  <span className="font-mono text-sm text-historic-sepia">~4 Teams</span>
                </div>
              </div>
            </div>

            {/* Scoring Info */}
            <div className="mt-8 bg-brand-black rounded-2xl p-6 text-center">
              <p className="font-mono text-sm text-gray-300">
                Alle Challenges sind gleichwertig. Bewertung erfolgt durch Jury nach technischer Qualität, Vollständigkeit, und Integration.
              </p>
            </div>
          </div>
        </section>

        {/* Prototype Visualization */}
        <section className="py-24 bg-off-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="font-mono text-sm text-compute-blue uppercase tracking-widest">
                Vom Konzept zum Prototyp
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
                Der Sihlicon Hub v1.0
              </h2>
              <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
                Hardware, die heizt. Software, die steuert. Ein komplettes System für die Energiewende.
              </p>
            </div>

            <PrototypeVisualization />
          </div>
        </section>

        {/* Compute Scenarios: What runs on the Hub */}
        <ComputeScenariosSection />

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
