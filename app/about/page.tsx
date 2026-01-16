'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_ROLES, HACKATHON_PACKAGES, PACKAGE_TEAM_COMPOSITIONS } from '@/lib/roles'
import { PostEventPathSection } from '@/components/landing/PostEventPathSection'

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
              150+ Teilnehmer, 30-36 Teams, 3 Pflicht-Pakete. 
              Open Source Hardware und Software für die dezentrale Energiezukunft der Schweiz.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-4 gap-4 max-w-lg mx-auto">
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="font-mono text-2xl font-bold text-thermal-orange">150+</div>
                <div className="font-mono text-[10px] text-gray-400">Teilnehmer</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="font-mono text-2xl font-bold text-compute-blue">30-36</div>
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
                100% der Elektrizität in einem Server wird zu Wärme. Warum diese Wärme verschwenden?
              </p>
            </div>

            {/* Problem → Solution - Enhanced */}
            <div className="relative mb-12">
              {/* Before/After Labels */}
              <div className="flex justify-between mb-4 px-4">
                <span className="font-mono text-xs text-red-500 uppercase tracking-widest font-bold">VORHER</span>
                <span className="font-mono text-xs text-grid-green uppercase tracking-widest font-bold">NACHHER</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                {/* Problem Card - Enhanced */}
                <Card className="border-2 border-red-500 bg-gradient-to-br from-red-50 to-red-100/50 shadow-lg relative overflow-hidden">
                  {/* Warning pattern overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M50 10 L90 90 L10 90 Z" fill="red" />
                      <text x="50" y="65" textAnchor="middle" fontSize="30" fill="red">!</text>
                    </svg>
                  </div>
                  
                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-xl text-red-600 flex items-center gap-3">
                      <span className="text-3xl">🔥</span> Das Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <ul className="space-y-3 text-sm font-mono">
                      <li className="flex items-start gap-3 text-red-700">
                        <span className="text-red-500 mt-0.5 text-lg">✗</span>
                        <span>Datacenter verschwenden <strong>Abwärme</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-red-700">
                        <span className="text-red-500 mt-0.5 text-lg">✗</span>
                        <span>Häuser verbrennen <strong>fossile Energie</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-red-700">
                        <span className="text-red-500 mt-0.5 text-lg">✗</span>
                        <span>Solarstrom wird zu Spitzenzeiten <strong>verschenkt</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-red-700">
                        <span className="text-red-500 mt-0.5 text-lg">✗</span>
                        <span>Compute-Power ist <strong>zentral und teuer</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Animated Arrow - Desktop */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white rounded-full p-4 shadow-xl border-2 border-thermal-orange">
                    <div className="text-4xl text-thermal-orange animate-pulse">→</div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="font-mono text-xs text-thermal-orange uppercase tracking-wider font-bold">Sihlicon Hub</span>
                  </div>
                </div>

                {/* Mobile Arrow */}
                <div className="md:hidden flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 shadow-lg border-2 border-thermal-orange">
                    <div className="text-3xl text-thermal-orange transform rotate-90">→</div>
                  </div>
                </div>

                {/* Solution Card - Enhanced */}
                <Card className="border-2 border-grid-green bg-gradient-to-br from-green-50 to-green-100/50 shadow-lg relative overflow-hidden">
                  {/* Success pattern overlay */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="green" />
                      <path d="M30 50 L45 65 L70 35" stroke="white" strokeWidth="8" fill="none" />
                    </svg>
                  </div>
                  
                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-xl text-grid-green flex items-center gap-3">
                      <span className="text-3xl">🏠</span> Die Lösung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <ul className="space-y-3 text-sm font-mono">
                      <li className="flex items-start gap-3 text-green-700">
                        <span className="text-grid-green mt-0.5 text-lg">✓</span>
                        <span>Server heizen Gebäude <span className="font-bold text-grid-green bg-grid-green/10 px-1 rounded">(99% Effizienz)</span></span>
                      </li>
                      <li className="flex items-start gap-3 text-green-700">
                        <span className="text-grid-green mt-0.5 text-lg">✓</span>
                        <span><strong>Solarüberschuss</strong> powert Compute</span>
                      </li>
                      <li className="flex items-start gap-3 text-green-700">
                        <span className="text-grid-green mt-0.5 text-lg">✓</span>
                        <span>LEGs profitieren von <strong>Wärme + Compute</strong></span>
                      </li>
                      <li className="flex items-start gap-3 text-green-700">
                        <span className="text-grid-green mt-0.5 text-lg">✓</span>
                        <span><strong>Dezentrale</strong>, resiliente Infrastruktur</span>
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
                  <div className="font-mono text-3xl font-bold text-compute-blue">99%</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Wärmerückgewinnung möglich</div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-grid-green">0 dB</div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">Keine Lüfter, kein Lärm</div>
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
                Hardware-Hacker arbeiten mit Grid-Devs, Rechtsexperten mit Designern.
              </p>
              <p className="mt-2 text-sm text-historic-sepia font-mono max-w-2xl mx-auto">
                Auch ohne qualifizierte Kenntnisse können Teilnehmerinnen sich für eine Rolle anmelden – 
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
                      <div className="text-3xl">{role.icon}</div>
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
            </div>

            {/* Package-Based Team Composition */}
            <div className="bg-brand-black rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white text-center mb-6">
                Team-Zusammensetzung pro Paket (5 Personen)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {HACKATHON_PACKAGES.filter(p => p.type === 'mandatory').map((pkg) => {
                  const teamComp = PACKAGE_TEAM_COMPOSITIONS[pkg.id as keyof typeof PACKAGE_TEAM_COMPOSITIONS]
                  return (
                    <div key={pkg.id} className="bg-white/5 rounded-xl p-4">
                      <div className="text-center mb-4">
                        <span className="text-2xl">{pkg.icon}</span>
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
                              <span className="text-sm">{role.icon}</span>
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
                LEG-Gründung als Challenge
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Das Schweizer StromVG Art. 18 ermöglicht Lokale Elektrizitätsgemeinschaften.
                Wir entwickeln die Templates für die Gründung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-brand-black flex items-center gap-2">
                    <span>⚖️</span> Was eine LEG ist
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
                      <span>Kann das öffentliche Netz nutzen (StromVG Art. 18)</span>
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
                      <span>Musterstatuten für AG und ZH</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Teilnehmerverträge (Producer/Consumer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>Behörden-Checklisten und Formulare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-thermal-orange">→</span>
                      <span>FAQ für zukünftige LEG-Gründer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-brand-black rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Warum LEG + Compute?
              </h3>
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <p>
                  <strong className="text-white">Doppelte Monetarisierung:</strong> Die LEG verkauft nicht nur Strom, sondern auch Compute-Zeit und Wärme. Drei Revenue-Streams statt einem.
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
                Replizierbar by Design
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Jedes Teil des Sihlicon Stack wird unter Apache 2.0 veröffentlicht.
                Hardware-Schematics, Software, Dokumentation.
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
                    <li>• LEG-Gründungsvorlagen</li>
                    <li>• Thermische Berechnungen</li>
                    <li>• API-Dokumentation</li>
                    <li>• Troubleshooting Guides</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="font-mono text-sm text-historic-sepia">
                Lizenz: <span className="text-brand-black font-semibold">Apache 2.0</span> ·
                Jeder kann den Stack nutzen, anpassen und weitergeben.
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
                    <strong className="text-white">Grundprinzip:</strong> Alle Teilnehmer behalten die vollen Rechte an ihren Beiträgen.
                  </p>
                  <p>
                    Gemäss <strong className="text-white">Art. 2 URG</strong> (Schweizer Urheberrechtsgesetz) entstehen Urheberrechte automatisch bei der Schöpfung eines Werks. 
                    Du als Entwickler bist und bleibst der <strong className="text-white">Urheber</strong> deines Codes.
                  </p>
                  <p>
                    Durch die Veröffentlichung unter <strong className="text-thermal-orange">Apache 2.0</strong> erteilst du eine <strong className="text-white">nicht-exklusive, weltweite, gebührenfreie Lizenz</strong> – 
                    du gibst also Nutzungsrechte weiter, ohne deine eigenen Rechte zu verlieren.
                  </p>
                  <p className="pt-2 border-t border-white/10 text-xs text-gray-400">
                    ℹ️ Das bedeutet: Du kannst deinen Code später auch für andere Projekte nutzen, verkaufen oder anders lizenzieren.
                  </p>
                </div>
              </div>

              {/* Apache 2.0 License */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-compute-blue mb-4 flex items-center gap-3">
                  <span>📜</span>
                  Warum Apache 2.0?
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    Die <strong className="text-white">Apache 2.0 Lizenz</strong> ist eine der meistgenutzten Open-Source-Lizenzen weltweit und wurde speziell für die Schweiz durch 
                    <strong className="text-white"> Art. 19 URG</strong> (Bearbeitung und Änderung) sowie 
                    <strong className="text-white"> Art. 62 OR</strong> (Vertragsfreiheit) abgesichert.
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Patent-Grant:</strong> Schützt Nutzer vor Patent-Klagen (wichtig bei Hardware)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Disclaimer of Warranty:</strong> Haftungsausschluss nach Schweizer OR (Art. 100 OR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Commercial Use:</strong> LEGs dürfen damit kommerziell arbeiten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-1">✓</span>
                      <span><strong className="text-white">Modification:</strong> Jeder darf den Code anpassen und weiterentwickeln</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contributor Agreement */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-sihl-red mb-4 flex items-center gap-3">
                  <span>✍️</span>
                  Contributor Agreement
                </h3>
                <div className="space-y-3 text-sm font-mono text-gray-300">
                  <p>
                    Beim Einreichen deines Codes bestätigst du:
                  </p>
                  <ol className="space-y-2 pl-4 list-decimal">
                    <li><strong className="text-white">Originalität:</strong> Du hast den Code selbst geschrieben oder hast die Rechte daran.</li>
                    <li><strong className="text-white">Lizenzierung:</strong> Du stimmst der Veröffentlichung unter Apache 2.0 zu.</li>
                    <li><strong className="text-white">Keine Drittrechte:</strong> Der Code verletzt keine Rechte Dritter (z.B. keine Copy-Paste von proprietärem Code).</li>
                  </ol>
                  <p className="pt-2 border-t border-white/10">
                    Dies entspricht dem Standard-CLA (Contributor License Agreement), wie er auch bei Linux, Kubernetes und anderen Open-Source-Projekten verwendet wird.
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
                    <strong className="text-white">Gerichtsstand:</strong> Bei Streitigkeiten ist das Gericht am Sitz des Veranstalters zuständig (Zürich/Aargau).
                  </p>
                  <p>
                    <strong className="text-white">Haftungsausschluss:</strong> Software wird "AS IS" bereitgestellt (Art. 100 OR – Wegbedingung der Haftung).
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
                    <p className="text-gray-300 text-xs">Dein Code gehört dir, auch nach dem Hackathon.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Kommerzielle Nutzung erlaubt</p>
                    <p className="text-gray-300 text-xs">Du darfst deine Arbeit später verkaufen oder damit Geld verdienen.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Keine Haftung für Fehler</p>
                    <p className="text-gray-300 text-xs">Rechtlich abgesichert durch Apache 2.0 Disclaimer.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-grid-green font-semibold">✓ Community profitiert</p>
                    <p className="text-gray-300 text-xs">Andere LEGs können deine Lösung nachbauen.</p>
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

        {/* Post-Event Paths */}
        <PostEventPathSection />

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
                  a: 'Nicht unbedingt. Wir brauchen Hardware-Engineers, Rechtsexperten, Designer genauso wie Software-Devs. Wähle bei der Anmeldung deine Rolle.',
                },
                {
                  q: 'Was passiert mit dem Prototyp nach dem Hackathon?',
                  a: 'Nach dem Event gibt es mehrere Wege: (1) Follow-up Hackathon für 1:1 Prototypen, (2) Association & Open Source Governance, (3) LEG DIY-Bauanleitungen, (4) Unternehmen können als zertifizierte Partner Service anbieten. Alle Wege bleiben Open Source und community-getrieben.',
                },
                {
                  q: 'Wer stellt die Hardware?',
                  a: 'Wir suchen aktuell noch Sponsoren für Hardware (Server, GPUs, Immersion-Cooling-Equipment). Du bringst nur Laptop und Skills mit.',
                },
                {
                  q: 'Was kostet die Teilnahme?',
                  a: 'CHF 150 pro Person. Der gesamte Überschuss nach Betriebskosten wird als Preisgeld (35/35/20/10 pro Paket) ausgeschüttet. Vollständige Rückerstattung bei Absage.',
                },
                {
                  q: 'Was ist eine LEG?',
                  a: 'Eine Lokale Elektrizitätsgemeinschaft ist ein rechtlicher Zusammenschluss nach StromVG Art. 18. Ähnlich wie ein ZEV, aber kann das öffentliche Netz nutzen.',
                },
                {
                  q: 'Muss ich beim Hackathon übernachten?',
                  a: 'Nein, es ist ein Tages-Event (Fr Abend bis So Nachmittag). Du kannst pendeln oder wir helfen bei der Organisation von Unterkünften.',
                },
                {
                  q: 'Was passiert, wenn mein Code später in einem kommerziellen Produkt verwendet wird?',
                  a: 'Apache 2.0 erlaubt kommerzielle Nutzung – das ist gewollt. LEGs dürfen (und sollen) damit Geld verdienen. Du behältst aber alle Rechte an deinem Original-Code und kannst ihn auch selbst kommerziell nutzen.',
                },
                {
                  q: 'Hafte ich, wenn mein Code einen Fehler hat und etwas kaputt geht?',
                  a: 'Nein. Die Apache 2.0 Lizenz enthält einen Haftungsausschluss ("AS IS" - Software wird ohne Gewährleistung bereitgestellt), der nach Schweizer Recht (Art. 100 OR) rechtlich wirksam ist. Du haftest nur bei Vorsatz oder grober Fahrlässigkeit.',
                },
                {
                  q: 'Kann ich meinen Code später unter einer anderen Lizenz verwenden?',
                  a: 'Ja! Du behältst alle Urheberrechte. Du kannst denselben Code parallel unter einer anderen Lizenz (z.B. proprietär) für andere Projekte nutzen. Dies nennt sich "Dual Licensing" und ist völlig legal.',
                },
                {
                  q: 'Was ist, wenn ich Code von Stack Overflow oder GitHub kopiere?',
                  a: 'Du darfst nur Code einreichen, für den du die Rechte hast. Stack Overflow Code ist meist CC BY-SA lizenziert (kompatibel mit Apache 2.0). Bei GitHub-Code: Prüfe die Lizenz. Im Zweifelsfall: Frag uns vorher.',
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
                Jetzt anmelden
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
