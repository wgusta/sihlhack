'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Icon } from '@/components/ui/Icon'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_ROLES, HACKATHON_PACKAGES, PACKAGE_TEAM_COMPOSITIONS } from '@/lib/roles'
import { EnergyTrilemmaSection } from '@/components/landing/EnergyTrilemmaSection'
import { DataProvidersSection } from '@/components/landing/DataProvidersSection'

export default function AboutPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null)
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
              Das Konzept
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              150 Teilnehmende, 20 Teams, 3 Pflicht-Pakete.
              Open Source Hardware und Software für die dezentrale Energiezukunft der Schweiz.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-4 gap-4 max-w-lg mx-auto">
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="font-mono text-2xl font-bold text-thermal-orange">150</div>
                <div className="font-mono text-[10px] text-gray-400">Teilnehmende</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="font-mono text-2xl font-bold text-compute-blue">20</div>
                <div className="font-mono text-[10px] text-gray-400">Teams</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="font-mono text-2xl font-bold text-grid-green">3</div>
                <div className="font-mono text-[10px] text-gray-400">Tage</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="font-mono text-2xl font-bold text-solar-yellow">11</div>
                <div className="font-mono text-[10px] text-gray-400">Rollen</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Die Vision
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Sihlicon Hub
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Silicon Valley baut Rechenzentren, die Flüsse erhitzen. Wir bauen Server, die Häuser heizen. 
                Der Unterschied? Wir machen Kühlung zum Feature, nicht zum Problem.
              </p>
              <div className="mt-6">
                <a
                  href="/challenges#compute-scenarios"
                  className="inline-block font-mono text-sm text-compute-blue hover:text-compute-blue/80 underline"
                >
                  → Was läuft auf dem Hub? Compute-Szenarien anschauen
                </a>
              </div>
            </div>

            {/* Problem → Solution - Fixed */}
            <div className="relative mb-12">
              {/* Before/After Labels - Larger */}
              <div className="flex justify-between mb-6 px-2 md:px-16">
                <span className="font-mono text-sm text-red-600 uppercase tracking-widest font-bold">VORHER</span>
                <span className="font-mono text-sm text-grid-green uppercase tracking-widest font-bold">NACHHER</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 relative">
                {/* Problem Card - Better contrast */}
                <Card className="border-2 border-red-500 bg-gradient-to-br from-red-50 to-red-100 shadow-lg relative">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-red-700 flex items-center gap-3">
                      <span className="text-3xl">🔥</span> Das Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 text-sm font-mono">
                      <li className="flex items-start gap-3 text-red-800">
                        <span className="text-red-600 mt-0.5 text-xl font-bold">✗</span>
                        <span className="leading-relaxed">Datacenter verschwenden <strong className="text-red-900">Abwärme</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-red-800">
                        <span className="text-red-600 mt-0.5 text-xl font-bold">✗</span>
                        <span className="leading-relaxed">Häuser verbrennen <strong className="text-red-900">fossile Energie</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-red-800">
                        <span className="text-red-600 mt-0.5 text-xl font-bold">✗</span>
                        <span className="leading-relaxed"><strong className="text-red-900">Solarstrom</strong> wird zu Spitzenzeiten <strong className="text-red-900">verschenkt</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-red-800">
                        <span className="text-red-600 mt-0.5 text-xl font-bold">✗</span>
                        <span className="leading-relaxed">Compute-Power ist <strong className="text-red-900">zentral und teuer</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Animated Arrow - Desktop - Larger and more prominent */}
                <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white rounded-full p-5 shadow-2xl border-3 border-thermal-orange">
                    <div className="text-5xl text-thermal-orange animate-pulse">→</div>
                  </div>
                  <div className="mt-3 whitespace-nowrap" />
                </div>

                {/* Mobile Arrow - Better placement */}
                <div className="md:hidden flex flex-col items-center justify-center my-6">
                  <div className="bg-white rounded-full p-4 shadow-xl border-2 border-thermal-orange">
                    <div className="text-4xl text-thermal-orange transform rotate-90">→</div>
                  </div>
                  <div className="mt-3" />
                </div>

                {/* Solution Card - Better contrast, 1:1 mapping with problems */}
                <Card className="border-2 border-grid-green bg-gradient-to-br from-green-50 to-green-100 shadow-lg relative">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-green-700 flex items-center gap-3">
                      <span className="text-3xl">🏠</span> Die Lösung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4 text-sm font-mono">
                      <li className="flex items-start gap-3 text-green-800">
                        <span className="text-grid-green mt-0.5 text-xl font-bold">✓</span>
                        <span className="leading-relaxed">Server erzeugen Wärme (Strom → Wärme)</span>
                      </li>
                      <li className="flex items-start gap-3 text-green-800">
                        <span className="text-grid-green mt-0.5 text-xl font-bold">✓</span>
                        <span className="leading-relaxed"><strong className="text-green-900">Solarüberschuss</strong> powert Compute</span>
                      </li>
                      <li className="flex items-start gap-3 text-green-800">
                        <span className="text-grid-green mt-0.5 text-xl font-bold">✓</span>
                        <span className="leading-relaxed">
                          <a href="/leg" className="text-sihl-red hover:underline">LEGs</a> profitieren von <strong className="text-green-900">Wärme + Compute</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-3 text-green-800">
                        <span className="text-grid-green mt-0.5 text-xl font-bold">✓</span>
                        <span className="leading-relaxed"><strong className="text-green-900">Dezentrale</strong>, resiliente Infrastruktur</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Physics */}
            <div className="bg-gradient-to-r from-thermal-orange/20 to-compute-blue/20 rounded-2xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold text-brand-black text-center mb-6">
                Die Physik dahinter
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="font-mono text-3xl font-bold text-solar-yellow">100%</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">der Elektrizität wird zu Wärme</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-thermal-orange">60°C</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Wassertemperatur aus Immersion</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-compute-blue">hoch</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Wärmerückgewinnung (designabhängig)</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-grid-green">leise</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Ziel: ohne Serverlüfter</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role-Based Hackathon Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Nicht nur für Coder
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-2">
                Jede Rolle zählt
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Erfolgreiche Teams brauchen verschiedene Expertisen.
                Hardware Engineers arbeiten mit Grid-OS Developers, Legal Experts mit Designers.
              </p>
              <p className="mt-2 text-sm text-historic-sepia font-mono max-w-2xl mx-auto">
                Auch ohne qualifizierte Kenntnisse können Teilnehmende sich für eine Rolle anmelden. 
                <strong className="text-brand-black"> klick auf die Karte</strong> um herauszufinden, was es benötigt.
              </p>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {HACKATHON_ROLES.map((role) => {
                const isExpanded = expandedRole === role.id
                return (
                  <div
                    key={role.id}
                    onClick={() => setExpandedRole(isExpanded ? null : role.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 group cursor-pointer relative ${
                      isExpanded
                        ? 'border-thermal-orange bg-thermal-orange/5 shadow-lg'
                        : 'border-gray-200 hover:border-thermal-orange/50 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Icon emoji={role.icon} size="xl" color={`text-${role.color}`} />
                      <div className={`text-xs font-mono text-gray-400 transition-all duration-300 ${
                        isExpanded ? 'rotate-180 text-thermal-orange' : 'group-hover:text-thermal-orange'
                      }`}>
                        ▼
                      </div>
                    </div>
                    <h3 className={`font-display font-semibold transition-colors duration-200 ${
                      isExpanded ? 'text-thermal-orange' : 'text-brand-black group-hover:text-thermal-orange'
                    }`}>
                      {role.nameDE}
                    </h3>
                    <p className="text-sm font-mono text-historic-sepia mt-2">
                      {role.descriptionDE}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {role.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Subtle hint when not expanded */}
                    {!isExpanded && (
                      <div className="mt-3 text-[10px] font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Klick für Details →
                      </div>
                    )}

                    {/* Expanded Content */}
                    {isExpanded && role.tracks && (
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-4 animate-fade-in">
                        {/* Track 1: Basis */}
                        <div>
                          <h4 className="font-mono text-xs font-bold text-brand-black mb-2 flex items-center gap-2">
                            <span className="text-thermal-orange">→</span>
                            {role.tracks.basis.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {role.tracks.basis.items.map((item, i) => (
                              <li key={i} className="text-xs font-mono text-historic-sepia flex items-start gap-2">
                                <span className="text-thermal-orange mt-0.5 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Track 2: Quereinsteiger */}
                        <div>
                          <h4 className="font-mono text-xs font-bold text-brand-black mb-2 flex items-center gap-2">
                            <span className="text-compute-blue">→</span>
                            {role.tracks.quereinsteiger.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {role.tracks.quereinsteiger.items.map((item, i) => (
                              <li key={i} className="text-xs font-mono text-historic-sepia flex items-start gap-2">
                                <span className="text-compute-blue mt-0.5 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
              
              {/* Suggest a Role Card */}
              <a
                href="/suggest-role"
                className="p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-thermal-orange/50 transition-all duration-300 group cursor-pointer relative dotted-corner bg-white/50 block"
              >
                <div className="flex items-center justify-center mb-3">
                  <Icon emoji="💡" size="xl" color="text-thermal-orange" />
                </div>
                <h3 className="font-display font-semibold text-brand-black text-center group-hover:text-thermal-orange transition-colors duration-200">
                  Schlage eine Rolle vor, an die wir nicht gedacht haben
                </h3>
                <p className="text-sm font-mono text-historic-sepia mt-2 text-center">
                  Klick auf die Karte um herauszufinden, was es benötigt.
                </p>
              </a>
            </div>

            {/* Package-Based Team Composition */}
            <div className="bg-brand-black rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white text-center mb-6">
                Team-Zusammensetzung pro Challenge (5 Personen)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {HACKATHON_PACKAGES.filter(p => p.type === 'mandatory').map((pkg) => {
                  const teamComp = PACKAGE_TEAM_COMPOSITIONS[pkg.id as keyof typeof PACKAGE_TEAM_COMPOSITIONS]
                  return (
                    <div key={pkg.id} className="bg-white/5 rounded-xl p-4">
                      <div className="text-center mb-4">
                        <Icon emoji={pkg.icon} size="lg" color={`text-${pkg.color}`} />
                        <h4 className="font-mono text-sm font-bold text-white mt-2">{pkg.nameDE}</h4>
                      </div>
                      <div className="space-y-2">
                        {teamComp?.map((member) => {
                          const role = HACKATHON_ROLES.find(r => r.id === member.role)
                          if (!role) return null
                          return (
                            <div 
                              key={member.role}
                              className={`flex items-center gap-2 px-2 py-1 rounded ${
                                member.priority === 'essential' 
                                  ? 'bg-grid-green/20' 
                                  : 'bg-white/5'
                              }`}
                            >
                              <Icon emoji={role.icon} size="sm" className="text-white" />
                              <span className="font-mono text-[10px] text-white flex-1">{role.nameDE}</span>
                              <span className={`text-[8px] font-mono ${
                                member.priority === 'essential' ? 'text-grid-green' : 'text-gray-500'
                              }`}>
                                {member.priority === 'essential' ? '●' : '○'}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-center text-gray-400 font-mono text-xs mt-6">
                <span className="text-grid-green">●</span> Essential · 
                <span className="text-gray-500 ml-2">○</span> Recommended
              </p>
              <p className="text-center text-gray-500 font-mono text-xs mt-2">
                Essential-Rollen sind für das Paket zwingend erforderlich. 
                Recommended-Rollen werden empfohlen, sind aber nicht zwingend.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <ButtonLink href="/challenges" variant="primary" size="sm">
                Alle Challenges ansehen →
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* LEG Legal Framework */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Rechtlicher Rahmen
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                <a href="/leg" className="text-sihl-red hover:underline">LEG</a>-Gründung als Challenge
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Schweizer Recht ermöglicht <a href="/leg" className="text-sihl-red hover:underline">Lokale Elektrizitätsgemeinschaften</a>.
                Wir entwickeln die Templates für die Gründung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>⚖️</span> Was eine <a href="/leg" className="text-sihl-red hover:underline">LEG</a> ist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Zusammenschluss zum Eigenverbrauch (ZEV) auf Steroiden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Kann je nach Modell das öffentliche Netz nutzen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Typisch als Genossenschaft organisiert</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green">✓</span>
                      <span>Perfekt für Quartiere und Mehrfamilienhäuser</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>📋</span> Was wir entwickeln
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm font-mono text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>LEG-Statuten und Vertragsvorlagen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Compliance-Checklisten (Netzbetreiber, Steuern, Haftung)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Hardware Reuse (CE-Kennzeichnung, PrSG)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Haftungsklärung und Versicherungsfragen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>FAQ für zukünftige <a href="/leg" className="text-sihl-red hover:underline">LEG</a>-Gründer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-brand-black rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Warum <a href="/leg" className="text-thermal-orange hover:underline">LEG</a> + Compute?
              </h3>
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <p>
                  <strong className="text-white">Doppelte Monetarisierung:</strong> Die <a href="/leg" className="text-thermal-orange hover:underline">LEG</a> verkauft nicht nur Strom, sondern auch Compute-Zeit und Wärme. Drei Revenue-Streams statt einem.
                </p>
                <p>
                  <strong className="text-white">Netzstabilität:</strong> Server können bei Überproduktion hochfahren und bei Engpässen drosseln. Perfekt für SDL-Integration mit Swissgrid.
                </p>
                <p>
                  <strong className="text-white">Lokale Wertschöpfung:</strong> Die Abwärme heizt Gebäude in der Nachbarschaft. Geld bleibt in der Gemeinschaft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Alles Open Source
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Dein Code. Deine Entscheidung.
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Dual-Lizenz-Modell bedeutet: Du behältst alle Rechte. Hardware (CERN-OHL-P/MIT) ist vollständig frei, 
                Grid-OS (SVG-L) schützt das Netz. Du kannst morgen eine Firma gründen, die mit dem Code konkurriert, 
                den du hier schreibst. Wir ermutigen das. Je mehr Forks, desto besser.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">🔧</div>
                  <CardTitle className="text-lg text-brand-black">Hardware</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• CAD-Dateien für Immersionstank</li>
                    <li>• Stücklisten (BOM) mit Bezugsquellen</li>
                    <li>• Bauanleitungen Schritt für Schritt</li>
                    <li>• Temperatur-Monitoring-Schaltpläne</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">💻</div>
                  <CardTitle className="text-lg text-brand-black">Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• Grid-OS Scheduling-Algorithmen</li>
                    <li>• Solar Inverter API-Integration</li>
                    <li>• Dashboard-Komponenten</li>
                    <li>• Docker Compose für Deployment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-3xl mb-2">📖</div>
                  <CardTitle className="text-lg text-brand-black">Dokumentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm font-mono text-historic-sepia">
                    <li>• <a href="/leg" className="text-sihl-red hover:underline">LEG</a>-Gründungsvorlagen</li>
                    <li>• Thermische Berechnungen</li>
                    <li>• API-Dokumentation</li>
                    <li>• Troubleshooting Guides</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-historic-sepia">
                Sihlhack ist ein Event, kein Unternehmen. Teilnahmegebühr finanziert Betrieb + Preisgeld. Details gemäss AGB.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Framework: Open Source under Swiss Law */}
        <section className="py-16 bg-brand-black text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Rechtliches Framework
              </span>
              <h2 className="font-display text-3xl font-bold text-white mt-2">
                Open Source unter Schweizer Recht
              </h2>
              <p className="mt-4 text-gray-300 font-mono max-w-2xl mx-auto">
                Wie wir sicherstellen, dass das Open-Source-Modell rechtlich sauber funktioniert.
              </p>
            </div>

            <div className="space-y-8">
              {/* IP Rights */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-thermal-orange mb-4 flex items-center gap-3">
                  <span>⚖️</span>
                  Geistiges Eigentum (IP-Rechte)
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    <strong className="text-white">Grundprinzip:</strong> Alle Teilnehmende behalten die vollen Rechte an ihren Beiträgen.
                  </p>
                  <p>
                    Gemäss <strong className="text-white">Art. 2 URG</strong> (Schweizer Urheberrechtsgesetz) entstehen Urheberrechte automatisch bei der Schöpfung eines Werks. 
                    Du als Entwicklerin oder Entwickler bist und bleibst der <strong className="text-white">Urheber</strong> deines Codes.
                  </p>
                  <p>
                    sihlhack verwendet ein <strong className="text-thermal-orange">Dual-Lizenz-Modell</strong>: 
                    Hardware unter <strong className="text-white">CERN-OHL-P/MIT</strong> (vollständig frei), 
                    Grid-OS unter <strong className="text-white">SVG-L</strong> (verantwortungsvoll, schützt das Netz). 
                    Du erteilst eine <strong className="text-white">nicht-exklusive, weltweite, gebührenfreie Lizenz</strong>: 
                    Nutzungsrechte werden weitergegeben, ohne dass deine eigenen Rechte verloren gehen.
                  </p>
                  <p className="pt-2 border-t border-white/10 text-xs text-gray-400">
                    ℹ️ Das bedeutet: Du kannst deinen Code später auch für andere Projekte nutzen, verkaufen oder anders lizenzieren. 
                    <a href="/licensing" className="text-thermal-orange hover:underline ml-1">→ Mehr zum Dual-Lizenz-Modell</a>
                  </p>
                </div>
              </div>

              {/* The Body: Open Hardware */}
              <div className="bg-gradient-to-r from-thermal-orange/20 to-thermal-orange/10 border border-thermal-orange/30 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-thermal-orange mb-4 flex items-center gap-3">
                  <span>🔧</span>
                  Der Körper: Open Hardware
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    <strong className="text-white">Lizenz:</strong> <strong className="text-thermal-orange">CERN-OHL-P (Permissive)</strong> oder <strong className="text-thermal-orange">MIT</strong>
                  </p>
                  <p className="text-lg font-semibold text-white mb-2">
                    Philosophie: "Jeder kann die Maschine bauen."
                  </p>
                  <p>
                    <strong className="text-white">Gilt für:</strong> Thermische Architektur, CAD-Dateien, Schematics, Stücklisten (BOM)
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span>Du kannst es bauen, verkaufen, modifizieren</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span>Kommerzielle Nutzung ohne Einschränkungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span>Wir wollen diese Heizungen in jedem Keller</span>
                    </li>
                  </ul>
                  <p className="pt-2 border-t border-white/10 text-xs text-gray-400">
                    Null Einschränkungen am physischen Artefakt.
                  </p>
                </div>
              </div>

              {/* The Conscience: Grid-OS License */}
              <div className="bg-gradient-to-r from-compute-blue/20 to-compute-blue/10 border border-compute-blue/30 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-compute-blue mb-4 flex items-center gap-3">
                  <span>🧠</span>
                  Das Gewissen: Grid-OS Lizenz
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    <strong className="text-white">Lizenz:</strong> <strong className="text-compute-blue">Sihl Valley Common-Good License (SVG-L)</strong>
                  </p>
                  <p className="text-lg font-semibold text-white mb-2">
                    Philosophie: "Du kannst das Gewissen der Maschine nicht entfernen."
                  </p>
                  <p>
                    <strong className="text-white">Gilt für:</strong> Grid-OS, Scheduler, Orchestrator, Verhandlungslogik, Grid-Interface Code
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="border-l-4 border-sihl-red pl-3">
                      <p className="font-semibold text-white text-xs mb-1">
                        Thermodynamische Wahrheit
                      </p>
                      <p className="text-xs text-gray-400">
                        Keine "Dummy Loops" nur zur Wärmeerzeugung ohne Wert. Lizenzverletzung.
                      </p>
                    </div>
                    <div className="border-l-4 border-grid-green pl-3">
                      <p className="font-semibold text-white text-xs mb-1">
                        Netzgehorsam
                      </p>
                      <p className="text-xs text-gray-400">
                        Grid-Curtailment-Signale müssen befolgt werden. Code entfernen = Lizenz beendet.
                      </p>
                    </div>
                    <div className="border-l-4 border-thermal-orange pl-3">
                      <p className="font-semibold text-white text-xs mb-1">
                        Anti-Vampir
                      </p>
                      <p className="text-xs text-gray-400">
                        Minimum 500 MFLOPS/Watt Effizienz. Keine E-Waste-Verbrennung für Subventionen.
                      </p>
                    </div>
                  </div>
                  <p className="pt-2 border-t border-white/10 text-xs text-gray-400">
                    <a href="/licensing" className="text-compute-blue hover:underline">→ Vollständige Lizenz-Erklärung</a>
                  </p>
                </div>
              </div>

              {/* Why Dual-License */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-sihl-red mb-4 flex items-center gap-3">
                  <span>⚡</span>
                  Warum Dual-Lizenz?
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    Wir kämpfen gegen den <strong className="text-white">Cobra-Effekt</strong>: Ohne diese Regeln könnten 
                    schlechte Akteure die Netzschutz-Logik entfernen und "Vampir-Heizungen" bauen, die nur Energie 
                    verbrennen für Subventionen – und dabei das Schweizer Netz ignorieren.
                  </p>
                  <p>
                    <strong className="text-white">Wir bauen Denker, die heizen – nicht Heizungen, die denken.</strong>
                  </p>
                  <p className="pt-2 border-t border-white/10 text-xs text-gray-400 italic">
                      Gute Ingenieur/innen begrüßen diese Regeln. Nur Grifter fürchten sie.
                  </p>
                </div>
              </div>

              {/* Contributor Agreement */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-industrial-gold mb-4 flex items-center gap-3">
                  <span>✍️</span>
                  Contributor Agreement
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    Beim Einreichen deines Codes bestätigst du:
                  </p>
                  <ol className="space-y-2 pl-4 list-decimal">
                    <li><strong className="text-white">Originalität:</strong> Du hast den Code selbst geschrieben oder hast die Rechte daran.</li>
                    <li><strong className="text-white">Lizenzierung:</strong> Du stimmst der Veröffentlichung unter der entsprechenden Lizenz zu (CERN-OHL-P/MIT für Hardware, SVG-L für Grid-OS).</li>
                    <li><strong className="text-white">Keine Drittrechte:</strong> Der Code verletzt keine Rechte Dritter (z.B. keine Copy-Paste von proprietärem Code).</li>
                    <li><strong className="text-white">Compliance:</strong> Du verpflichtest dich, die SVG-L Klauseln einzuhalten (falls Grid-OS Code).</li>
                  </ol>
                  <p className="pt-2 border-t border-white/10">
                    Dies entspricht dem Standard-CLA (Contributor License Agreement), angepasst für das Dual-Lizenz-Modell.
                  </p>
                </div>
              </div>

              {/* Swiss Law Compliance */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-industrial-gold mb-4 flex items-center gap-3">
                  <span>🇨🇭</span>
                  Schweizer Rechtskonformität
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    <strong className="text-white">Anwendbares Recht:</strong> Alle Vereinbarungen unterliegen Schweizer Recht (Art. 116-120 IPRG).
                  </p>
                  <p>
                    <strong className="text-white">Gerichtsstand:</strong> Baden (AG), Schweiz.
                  </p>
                  <p>
                    <strong className="text-white">Haftungsausschluss:</strong> Software wird "AS IS" bereitgestellt (Art. 100 OR, Wegbedingung der Haftung).
                    Dies ist in der Schweiz rechtlich zulässig, sofern keine Absicht oder grobe Fahrlässigkeit vorliegt.
                  </p>
                  <p>
                    <strong className="text-white">Datenschutz:</strong> Alle personenbezogenen Daten werden gemäss 
                    <strong className="text-thermal-orange"> DSG (Datenschutzgesetz)</strong> und 
                    <strong className="text-thermal-orange"> DSGVO</strong> (wo anwendbar) verarbeitet.
                  </p>
                </div>
              </div>

              {/* What This Means for You */}
              <div className="bg-gradient-to-r from-thermal-orange/20 to-compute-blue/20 border border-thermal-orange/30 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>💡</span>
                  Was das für dich bedeutet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Du behältst alle Rechte</p>
                    <p className="text-gray-300 text-xs">Dein Code gehört dir, auch nach dem Hackathon (Art. 2 URG).</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Kommerzielle Nutzung erlaubt</p>
                    <p className="text-gray-300 text-xs">Hardware frei, Grid-OS kommerziell nutzbar (mit SVG-L Compliance).</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Du bist geschützt</p>
                    <p className="text-gray-300 text-xs">SVG-L verhindert Waffenisierung deiner Arbeit durch "Energy Grifter".</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Community profitiert</p>
                    <p className="text-gray-300 text-xs">Andere <a href="/leg" className="text-thermal-orange hover:underline">LEGs</a> können deine Lösung nachbauen, das Netz bleibt geschützt.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-mono text-sm text-gray-400">
                📧 Rechtliche Fragen? Schreib uns an{' '}
                <a href="mailto:legal@sihlhack.ch" className="text-thermal-orange hover:underline">
                  legal@sihlhack.ch
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Energy Quadrilemma & Thermal Paths */}
        <EnergyTrilemmaSection />

        {/* Ecosystem: Partners & Sponsors */}
        <DataProvidersSection />

        {/* FAQ */}
        <section id="faq" className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-brand-black text-center mb-12">
              Häufige Fragen
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Brauche ich Programmierkenntnisse?',
                  a: 'Nicht unbedingt. Wir brauchen Hardware Engineers, Legal Experts, Designer genauso wie Software Developers. Wähle bei der Anmeldung deine Rolle.',
                },
                {
                  q: 'Was passiert mit dem Prototyp nach dem Hackathon?',
                  a: (
                    <>
                      Nach dem Event gibt es mehrere Wege: (1) Follow-up Hackathon für 1:1 Prototypen, (2) Association & Open Source Governance, (3){' '}
                      <a href="/leg" className="text-sihl-red hover:underline">LEG</a> DIY-Bauanleitungen, (4) Unternehmen können als zertifizierte Partner Service anbieten. Alle Wege bleiben Open Source und community-getrieben.
                    </>
                  ),
                },
                {
                  q: 'Wer stellt die Hardware?',
                  a: 'Wir stellen die Hardware bereit: 3-5 safety-zertifizierte Reference Nodes (Immersion, Water Loop, Heat Pump). Du programmierst die Grid-OS Logik und integrierst Sensoren. Du bringst nur Laptop und Skills mit.',
                },
                {
                  q: 'Was kostet die Teilnahme?',
                  a: 'CHF 150 pro Person (inkl. allfälliger MWST). Rückerstattung gemäss AGB.',
                },
                {
                  q: (
                    <>
                      Was ist eine <a href="/leg" className="text-sihl-red hover:underline">LEG</a>?
                    </>
                  ),
                  a: (
                    <>
                      Eine <a href="/leg" className="text-sihl-red hover:underline">Lokale Elektrizitätsgemeinschaft</a> ist ein rechtlicher Zusammenschluss nach Schweizer Recht. Details & Grenzen: siehe /leg.
                    </>
                  ),
                },
                {
                  q: 'Muss ich beim Hackathon übernachten?',
                  a: 'Nein, es ist ein Tages-Event (Fr Abend bis So Nachmittag). Du kannst pendeln oder wir helfen bei der Organisation von Unterkünften.',
                },
                {
                  q: 'Was ist das Dual-Lizenz-Modell?',
                  a: (
                    <>
                      Hardware (Körper) ist vollständig frei unter <strong>CERN-OHL-P/MIT</strong> – jeder kann die Maschine bauen. 
                      Grid-OS Software (Gewissen) hat verantwortungsvolle Einschränkungen unter <strong>SVG-L</strong>, um das Schweizer 
                      Netz zu schützen. <a href="/licensing" className="text-sihl-red hover:underline">→ Vollständige Erklärung</a>
                    </>
                  ),
                },
                {
                  q: 'Warum braucht Grid-OS eine spezielle Lizenz?',
                  a: (
                    <>
                      Ohne diese Regeln könnten schlechte Akteure die Netzschutz-Logik entfernen und "Vampir-Heizungen" bauen, 
                      die nur Energie verbrennen für Subventionen. Das würde das Schweizer Netz destabilisieren. 
                      Wir verhindern den <strong>Cobra-Effekt</strong>.
                    </>
                  ),
                },
                {
                  q: 'Was passiert, wenn mein Code später in einem kommerziellen Produkt verwendet wird?',
                  a: (
                    <>
                      Kommerzielle Nutzung ist erlaubt und gewollt. <a href="/leg" className="text-sihl-red hover:underline">LEGs</a> dürfen (und sollen) damit Geld verdienen. 
                      Hardware ist vollständig frei, Grid-OS kann kommerziell genutzt werden (mit SVG-L Compliance). 
                      Du behältst alle Rechte an deinem Original-Code und kannst ihn auch selbst kommerziell nutzen.
                    </>
                  ),
                },
                {
                  q: 'Hafte ich, wenn mein Code einen Fehler hat und etwas kaputt geht?',
                  a: 'Nein. Die Lizenzen (CERN-OHL-P/MIT und SVG-L) enthalten Haftungsausschlüsse ("AS IS", also ohne Gewährleistung), die nach Schweizer Recht (Art. 100 OR) rechtlich wirksam sind. Du haftest nur bei Vorsatz oder grober Fahrlässigkeit.',
                },
                {
                  q: 'Kann ich meinen Code später unter einer anderen Lizenz verwenden?',
                  a: (
                    <>
                      Ja! Du behältst alle Urheberrechte (Art. 2 URG). Du kannst denselben Code parallel unter einer anderen 
                      Lizenz (z.B. proprietär) für andere Projekte nutzen. Dies nennt sich "Dual Licensing" und ist völlig legal. 
                      Wichtig: Wenn du Grid-OS Code unter SVG-L veröffentlicht hast, gelten die SVG-L Klauseln weiterhin für 
                      Kopien dieses Codes.
                    </>
                  ),
                },
                {
                  q: 'Welche Lizenz gilt für welches Challenge-Paket?',
                  a: (
                    <>
                      <strong>Hardware Safety & Thermal Architecture:</strong> CERN-OHL-P/MIT (Hardware). 
                      <strong>Grid-OS Controller:</strong> SVG-L (Software). 
                      <strong>Demo-Kit:</strong> Je nach Komponente – Hardware-Teile frei, Grid-OS-Teile SVG-L.
                    </>
                  ),
                },
                {
                  q: 'Was ist, wenn ich Code von Stack Overflow oder GitHub kopiere?',
                  a: 'Du darfst nur Code einreichen, für den du die Rechte hast. Code von Stack Overflow/GitHub kann Lizenzpflichten auslösen (z.B. Attribution/Share-Alike). Prüfe die Lizenz. Im Zweifel: nicht kopieren oder vorher fragen.',
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-display font-semibold text-brand-black mb-2">
                      {item.q}
                    </h3>
                    <p className="text-sm font-mono text-historic-sepia">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-thermal-orange to-compute-blue">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Bau mit uns die dezentrale Energiezukunft
            </h2>
            <p className="mt-4 text-white/90 font-mono max-w-xl mx-auto">
              Hardware-Hacker, Software-Devs, Thermodynamik-Nerds, Rechtsexperten: Wir brauchen euch alle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/register" variant="secondary" size="lg">
                Platz sichern
              </ButtonLink>
              <ButtonLink
                href="https://github.com/sihlicon"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                GitHub ansehen
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
