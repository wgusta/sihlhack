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

// Team Red: Security Challenge
const TEAM_RED = {
  id: 'team-red',
  name: 'Team Red',
  nameDE: 'Team Red: Hacke unser System',
  icon: '💀',
  description: 'Ethisches Hacking: Teste Hardware, Software und APIs auf Schwachstellen.',
  deliverables: [
    'Security Audit Report',
    'Proof-of-Concept Exploits',
    'Remediation Recommendations',
  ],
  skills: ['Pentesting', 'Kali Linux', 'Burp Suite', 'Python'],
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
              Competition-Style Hackathon
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mt-4">
              Die Pakete
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              3 Pflicht-Pakete, 2 Optional-Pakete. 30-36 Teams arbeiten parallel.
              Beste Lösung pro Paket gewinnt.
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
            
            {/* Pre-Challenge Link */}
            <div className="flex justify-center mb-6">
              <a
                href="#pre-challenge"
                className="p-4 rounded-xl border-2 border-dashed border-historic-sepia/40 hover:border-historic-sepia hover:bg-historic-cream/30 transition-all"
              >
                <div className="flex items-center gap-3">
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
            <div>
              <h3 className="font-mono text-xs text-gray-500 uppercase tracking-wider text-center mb-4">
                Optional-Pakete
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {optionalPackages.map((pkg) => (
                  <PackageCardCompact key={pkg.id} pkg={pkg} />
                ))}
                {/* Team Red */}
                <a
                  href="#team-red"
                  className="p-4 rounded-xl border-2 border-red-500/30 bg-red-500/5 hover:bg-red-500/10 transition-all text-center"
                >
                  <span className="text-2xl mb-2 block">{TEAM_RED.icon}</span>
                  <span className="font-mono text-xs font-semibold text-red-500">Team Red</span>
                  <span className="block font-mono text-[10px] text-red-500/70 mt-1">Security</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Challenge Section */}
        <div id="pre-challenge">
          <PreChallengeSection />
        </div>

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
                Mehrere Teams arbeiten parallel am gleichen Paket — beste Lösung gewinnt.
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

        {/* Team Red: Danger Zone */}
        <section id="team-red" className="py-16 bg-brand-black scroll-mt-24 relative overflow-hidden">
          {/* Warning stripes */}
          <div className="absolute top-0 left-0 right-0 h-3" style={{
            background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-8">
              <span className="font-mono text-xs text-red-500 uppercase tracking-[0.5em] animate-pulse">
                ⚠ DANGER ZONE ⚠
              </span>
              <h2 className="font-display text-4xl font-bold text-red-500 mt-4">
                {TEAM_RED.icon} {TEAM_RED.nameDE}
              </h2>
              <p className="mt-4 text-gray-400 font-mono max-w-xl mx-auto">
                {TEAM_RED.description}
              </p>
            </div>

            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono text-sm text-red-500 uppercase mb-4">Deliverables</h3>
                  <ul className="space-y-2">
                    {TEAM_RED.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-mono text-gray-400">
                        <span className="text-red-500">[✓]</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-red-500 uppercase mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {TEAM_RED.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-3 border border-yellow-500/50 bg-yellow-500/10 text-center">
                <p className="font-mono text-xs text-yellow-400 uppercase">
                  ⚠ Nur mit expliziter Genehmigung · Responsible Disclosure Required ⚠
                </p>
              </div>
            </div>
          </div>

          {/* Warning stripes bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-3" style={{
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
                Jetzt anmelden — CHF 150
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
