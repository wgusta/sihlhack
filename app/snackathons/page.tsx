'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_ROLES } from '@/lib/roles'
import { PreChallengeSection } from '@/components/challenges/PreChallengeSection'
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  CheckCircleIcon,
  BoltIcon,
  BeakerIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid'

export default function SnackathonsPage() {
  const [juneFormState, setJuneFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [julyFormState, setJulyFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [juneFormData, setJuneFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    experience: '',
    motivation: '',
  })
  const [julyFormData, setJulyFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    experience: '',
    motivation: '',
  })

  const handleJuneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setJuneFormState('submitting')

    // For now, just simulate success (connect to actual API later)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setJuneFormState('success')
  }

  const handleJulySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setJulyFormState('submitting')

    // For now, just simulate success (connect to actual API later)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setJulyFormState('success')
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 bg-grid-green/20 border border-grid-green/40 rounded-full mb-6">
              <span className="font-mono text-sm text-grid-green uppercase tracking-wide">
                Gratis Pilot-Event
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">
              Snackathons
            </h1>
            <p className="mt-4 text-xl font-mono text-gray-300">
              Baue den Sihl-Sim. Das Digital Twin API für den Hauptevent.
            </p>

            <p className="mt-6 text-lg font-mono text-gray-400 max-w-2xl mx-auto">
              Bevor wir 100 Leute einladen, bauen wir den Simulator. Coding, Pizza, "Game Design" für Energie-Systeme.
              Keine Teilnahmegebühr. Keine Verpflichtungen. Nur echte Arbeit an echten Problemen.
            </p>
            <div className="mt-6 inline-block px-4 py-2 bg-thermal-orange/20 border border-thermal-orange/40 rounded-full">
              <span className="font-mono text-sm text-thermal-orange">
                🎁 Bonus: 30% Rabatt auf sihlhack September 2026
              </span>
            </div>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="p-4 bg-white/5 rounded-xl">
                <CalendarIcon className="w-6 h-6 mx-auto mb-2 text-thermal-orange" />
                <div className="font-mono text-sm text-white">April/Mai 2026</div>
                <div className="font-mono text-xs text-gray-400">2 Events</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <ClockIcon className="w-6 h-6 mx-auto mb-2 text-compute-blue" />
                <div className="font-mono text-sm text-white">18 Stunden</div>
                <div className="font-mono text-xs text-gray-400">Pro Event</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <UserGroupIcon className="w-6 h-6 mx-auto mb-2 text-grid-green" />
                <div className="font-mono text-sm text-white">10-20</div>
                <div className="font-mono text-xs text-gray-400">Teilnehmer</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <MapPinIcon className="w-6 h-6 mx-auto mb-2 text-solar-yellow" />
                <div className="font-mono text-sm text-white">Zürich</div>
                <div className="font-mono text-xs text-gray-400">Ort folgt</div>
              </div>
            </div>
          </div>
        </section>

        {/* What is this */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Warum ein Pilot?
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Wir testen, bevor wir skalieren
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl">
                <BeakerIcon className="w-10 h-10 text-thermal-orange mb-4" />
                <h3 className="font-display text-lg font-bold text-brand-black mb-2">
                  Konzept validieren
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Funktioniert der Simulation-to-Reality Ansatz? Wer kommt wirklich? Was läuft schief? Wir finden es heraus.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <WrenchIcon className="w-10 h-10 text-compute-blue mb-4" />
                <h3 className="font-display text-lg font-bold text-brand-black mb-2">
                  Logistik testen
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  API-Design, Simulation-Logik, Integration. Besser mit 10-20 Leuten scheitern als mit 100.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <BoltIcon className="w-10 h-10 text-grid-green mb-4" />
                <h3 className="font-display text-lg font-bold text-brand-black mb-2">
                  Community aufbauen
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Die ersten 10-20 werden Botschafter. Ihr formt mit, wie sihlhack im September aussieht.
                  Plus: 30% Rabatt auf die Teilnahmegebühr für den Hauptevent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview: Both Snackathons */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Die beiden Pilot-Events
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Zwei Snackathons im Frühling 2026
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Wir bauen den Sihl-Sim (Digital Twin API) zweimal, um sicherzustellen, dass er für den Hauptevent bereit ist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Snackathons 1: June */}
              <div className="bg-white rounded-2xl border-2 border-sihl-red/40 p-6 hover:border-sihl-red hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="inline-block bg-sihl-red text-white text-xs font-mono px-2 py-1 rounded-full mb-2">
                      🍿 Pilot #1
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-black">April 2026</h3>
                    <p className="font-mono text-sm text-historic-sepia">Sihl-Sim API</p>
                  </div>
                  <span className="text-3xl">🍿</span>
                </div>
                <div className="space-y-2 font-mono text-sm text-historic-sepia">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-compute-blue" />
                    <span>18 Stunden Hackathon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4 text-grid-green" />
                    <span>10-20 Teilnehmer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-solar-yellow" />
                    <span>Zürich (Ort folgt)</span>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs text-historic-sepia">
                  Erster Pilot-Event: Wir bauen den Sihl-Sim (Digital Twin API) mit einer kleinen Gruppe von Pionieren.
                </p>
                <div className="mt-3 pt-3 border-t border-sihl-red/20">
                  <p className="font-mono text-xs text-sihl-red font-semibold">
                    🎁 30% Rabatt auf sihlhack September 2026
                  </p>
                </div>
              </div>

              {/* Snackathons 2: July */}
              <div className="bg-white rounded-2xl border-2 border-historic-sepia/40 p-6 hover:border-historic-sepia hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="inline-block bg-historic-sepia text-white text-xs font-mono px-2 py-1 rounded-full mb-2">
                      🍿 Pilot #2
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-black">Mai 2026</h3>
                    <p className="font-mono text-sm text-historic-sepia">Sihl-Sim API (Iteration)</p>
                  </div>
                  <span className="text-3xl">📜</span>
                </div>
                <div className="space-y-2 font-mono text-sm text-historic-sepia">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-compute-blue" />
                    <span>18 Stunden Hackathon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4 text-grid-green" />
                    <span>10-20 Teilnehmer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-solar-yellow" />
                    <span>Zürich (Ort folgt)</span>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs text-historic-sepia">
                  Zweiter Pilot-Event basierend auf den Learnings vom ersten Snackathons. Finalisierung des Sihl-Sim APIs.
                </p>
                <div className="mt-3 pt-3 border-t border-historic-sepia/20">
                  <p className="font-mono text-xs text-historic-sepia font-semibold">
                    🎁 30% Rabatt auf sihlhack September 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-compute-blue uppercase tracking-widest">
                Fokussiert, nicht verwässert
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Was wir bauen: Der Sihl-Sim
              </h2>
              <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
                Das Digital Twin API, das Teams beim Hauptevent verwenden werden, um ihre Grid-OS Logik zu entwickeln.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-grid-green" />
                    Im Scope
                  </h3>
                  <ul className="space-y-3 font-mono text-sm text-historic-sepia">
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Sihl-Sim API</strong>: Input (Solar/Grid-Daten), Output (Fan/Battery Commands)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Simulation-Logik</strong>: Zeitkompression (10 Jahre Grid-Stress in 10 Minuten testen)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Grid-OS Integration</strong>: API-kompatibel mit Scheduler für Hauptevent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Dokumentation</strong>: Onboarding-Guide für Teams im September</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 text-gray-400">✗</span>
                    Nicht im Scope
                  </h3>
                  <ul className="space-y-3 font-mono text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Physische Hardware (wird beim Hauptevent bereitgestellt)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Team Red (Security Challenge)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>LEG-Rechtsdokumentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Preisgeld (ist gratis, erinnert ihr euch?)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Forms */}
        <section className="py-16 bg-brand-black text-white" id="register">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-grid-green uppercase tracking-widest">
                Gratis Anmeldung
              </span>
              <h2 className="font-display text-3xl font-bold mt-2">
                Interesse bekunden
              </h2>
              <p className="mt-4 font-mono text-gray-400">
                10-20 Plätze pro Event. Wir wählen nach Skill-Mix und Motivation aus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* June Registration Form */}
              <div>
                <div className="mb-4 text-center">
                  <div className="inline-block bg-sihl-red text-white text-xs font-mono px-3 py-1 rounded-full mb-2">
                    🍿 Pilot #1
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">April 2026</h3>
                  <p className="font-mono text-sm text-gray-400 mt-1">Erster Pilot-Event: Sihl-Sim API</p>
                </div>

                {juneFormState === 'success' ? (
                  <Card className="bg-white/10 border-sihl-red/30">
                    <CardContent className="p-8 text-center">
                      <CheckCircleIcon className="w-16 h-16 mx-auto text-sihl-red mb-4" />
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        Interesse registriert!
                      </h3>
                      <p className="font-mono text-gray-300">
                        Wir melden uns bei dir für den April 2026 Snackathons.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-white/5 border-sihl-red/30">
                    <CardContent className="p-8">
                      <form onSubmit={handleJuneSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block font-mono text-sm text-gray-300 mb-2">
                              Vorname *
                            </label>
                            <input
                              type="text"
                              required
                              value={juneFormData.firstName}
                              onChange={(e) => setJuneFormData({ ...juneFormData, firstName: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-sihl-red"
                            />
                          </div>
                          <div>
                            <label className="block font-mono text-sm text-gray-300 mb-2">
                              Nachname *
                            </label>
                            <input
                              type="text"
                              required
                              value={juneFormData.lastName}
                              onChange={(e) => setJuneFormData({ ...juneFormData, lastName: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-sihl-red"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-mono text-sm text-gray-300 mb-2">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            required
                            value={juneFormData.email}
                            onChange={(e) => setJuneFormData({ ...juneFormData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-sihl-red"
                          />
                        </div>

                        <div>
                          <label className="block font-mono text-sm text-gray-300 mb-2">
                            Welche Rolle passt am besten? *
                          </label>
                          <select
                            required
                            value={juneFormData.role}
                            onChange={(e) => setJuneFormData({ ...juneFormData, role: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-sihl-red"
                          >
                            <option value="" className="bg-brand-black">Bitte wählen...</option>
                            {HACKATHON_ROLES.map((role) => (
                              <option key={role.id} value={role.id} className="bg-brand-black">
                                {role.nameDE}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block font-mono text-sm text-gray-300 mb-2">
                            Erfahrung mit Hardware/Energie-Projekten
                          </label>
                          <select
                            value={juneFormData.experience}
                            onChange={(e) => setJuneFormData({ ...juneFormData, experience: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-sihl-red"
                          >
                            <option value="" className="bg-brand-black">Bitte wählen...</option>
                            <option value="none" className="bg-brand-black">Keine, aber ich lerne schnell</option>
                            <option value="hobby" className="bg-brand-black">Hobby-Projekte (Raspberry Pi, Arduino, etc.)</option>
                            <option value="professional" className="bg-brand-black">Beruflich (Ingenieur, Techniker, etc.)</option>
                            <option value="expert" className="bg-brand-black">Experte (10+ Jahre Hardware/Energie)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-mono text-sm text-gray-300 mb-2">
                            Warum willst du dabei sein? (optional, aber hilft bei der Auswahl)
                          </label>
                          <textarea
                            rows={3}
                            value={juneFormData.motivation}
                            onChange={(e) => setJuneFormData({ ...juneFormData, motivation: e.target.value })}
                            placeholder="Was interessiert dich am Sihl-Sim API? Was willst du lernen oder beitragen?"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-sihl-red placeholder:text-gray-500"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={juneFormState === 'submitting'}
                          className="w-full py-4 bg-sihl-red hover:bg-sihl-red/90 text-white font-mono font-bold rounded-lg transition-colors disabled:opacity-50"
                        >
                          {juneFormState === 'submitting' ? 'Wird gesendet...' : 'Für Juni 2026 anmelden'}
                        </button>

                        <p className="font-mono text-xs text-gray-500 text-center">
                          Kein Geld, keine Verpflichtung. Wir melden uns, wenn wir mehr wissen.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* July Registration Form */}
              <div>
                <div className="mb-4 text-center">
                  <div className="inline-block bg-historic-sepia text-white text-xs font-mono px-3 py-1 rounded-full mb-2">
                    🍿 Pilot #2
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Mai 2026</h3>
                  <p className="font-mono text-sm text-gray-400 mt-1">Zweiter Pilot-Event: Sihl-Sim API Iteration</p>
                </div>

                {julyFormState === 'success' ? (
                  <Card className="bg-white/10 border-historic-sepia/30">
                <CardContent className="p-8 text-center">
                      <CheckCircleIcon className="w-16 h-16 mx-auto text-historic-sepia mb-4" />
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Interesse registriert!
                  </h3>
                  <p className="font-mono text-gray-300">
                        Wir melden uns bei dir für den Mai 2026 Snackathons.
                  </p>
                </CardContent>
              </Card>
            ) : (
                  <Card className="bg-white/5 border-historic-sepia/30">
                <CardContent className="p-8">
                      <form onSubmit={handleJulySubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-sm text-gray-300 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          required
                              value={julyFormData.firstName}
                              onChange={(e) => setJulyFormData({ ...julyFormData, firstName: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-historic-sepia"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-sm text-gray-300 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          required
                              value={julyFormData.lastName}
                              onChange={(e) => setJulyFormData({ ...julyFormData, lastName: e.target.value })}
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-historic-sepia"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-300 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                            value={julyFormData.email}
                            onChange={(e) => setJulyFormData({ ...julyFormData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-historic-sepia"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-300 mb-2">
                        Welche Rolle passt am besten? *
                      </label>
                      <select
                        required
                            value={julyFormData.role}
                            onChange={(e) => setJulyFormData({ ...julyFormData, role: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-historic-sepia"
                      >
                        <option value="" className="bg-brand-black">Bitte wählen...</option>
                        {HACKATHON_ROLES.map((role) => (
                          <option key={role.id} value={role.id} className="bg-brand-black">
                            {role.nameDE}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-300 mb-2">
                        Erfahrung mit Hardware/Energie-Projekten
                      </label>
                      <select
                            value={julyFormData.experience}
                            onChange={(e) => setJulyFormData({ ...julyFormData, experience: e.target.value })}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-historic-sepia"
                      >
                        <option value="" className="bg-brand-black">Bitte wählen...</option>
                        <option value="none" className="bg-brand-black">Keine, aber ich lerne schnell</option>
                        <option value="hobby" className="bg-brand-black">Hobby-Projekte (Raspberry Pi, Arduino, etc.)</option>
                        <option value="professional" className="bg-brand-black">Beruflich (Ingenieur, Techniker, etc.)</option>
                        <option value="expert" className="bg-brand-black">Experte (10+ Jahre Hardware/Energie)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-300 mb-2">
                        Warum willst du dabei sein? (optional, aber hilft bei der Auswahl)
                      </label>
                      <textarea
                        rows={3}
                            value={julyFormData.motivation}
                            onChange={(e) => setJulyFormData({ ...julyFormData, motivation: e.target.value })}
                        placeholder="Was interessiert dich am Sihl-Sim API? Was willst du lernen oder beitragen?"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-historic-sepia placeholder:text-gray-500"
                      />
                    </div>

                    <button
                      type="submit"
                          disabled={julyFormState === 'submitting'}
                          className="w-full py-4 bg-historic-sepia hover:bg-historic-sepia/90 text-white font-mono font-bold rounded-lg transition-colors disabled:opacity-50"
                    >
                          {julyFormState === 'submitting' ? 'Wird gesendet...' : 'Für Juli 2026 anmelden'}
                    </button>

                    <p className="font-mono text-xs text-gray-500 text-center">
                      Kein Geld, keine Verpflichtung. Wir melden uns, wenn wir mehr wissen.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
              </div>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
                Der Plan
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Was passiert als nächstes?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sihl-red/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-sihl-red">1</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">April 2026: Snackathons</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Erster Pilot-Event: Baue den Sihl-Sim (Digital Twin API).
                    Coding, Pizza, "Game Design" für Energie-Systeme. Wir bauen die Simulation-Plattform, die Teams im September verwenden werden.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-grid-green/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-grid-green">2</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">Mai 2026: Snackathons (Iteration)</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Zweiter Pilot-Event basierend auf den Learnings vom ersten Snackathons.
                    Finalisierung des Sihl-Sim APIs. Wir dokumentieren alles für den grossen Event im September.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-solar-yellow/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-solar-yellow">3</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">September 2026: sihlhack</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Der grosse Event mit 100 Teilnehmern. Was wir bei den Pilots gelernt haben, fliesst direkt ein.
                    Snackathons Alumni erhalten 30% Rabatt auf die Teilnahmegebühr (CHF 150 → CHF 105).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Challenge Section */}
        <PreChallengeSection />

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-thermal-orange via-sihl-red to-compute-blue text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold">
              10-20 Plätze. Keine Kosten. Echte Arbeit.
            </h2>
            <p className="mt-4 font-mono text-white/90">
              Die ersten Pioniere formen mit, wie sihlhack aussieht.
            </p>
            <p className="mt-3 font-mono text-white/80 text-sm">
              🎁 Bonus: 30% Rabatt auf die Teilnahmegebühr für sihlhack September 2026 (CHF 150 → CHF 105)
            </p>
            <div className="mt-8">
              <ButtonLink
                href="#register"
                variant="secondary"
                size="lg"
                className="bg-white text-brand-black hover:bg-white/90"
              >
                Interesse bekunden
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
