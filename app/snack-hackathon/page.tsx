'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { HACKATHON_ROLES } from '@/lib/roles'
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

export default function SnackHackathonPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    experience: '',
    motivation: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    // For now, just simulate success (connect to actual API later)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormState('success')
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
              Snack-Hackathon
            </h1>
            <p className="mt-4 text-xl font-mono text-gray-300">
              Ein Wochenende. Ein Thermal-Pfad. Ein funktionierender Prototyp.
            </p>

            <p className="mt-6 text-lg font-mono text-gray-400 max-w-2xl mx-auto">
              Bevor wir 100 Leute einladen, testen wir das Konzept mit 30-40 Pionieren.
              Keine Teilnahmegebühr. Keine Verpflichtungen. Nur echte Arbeit an echten Problemen.
            </p>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="p-4 bg-white/5 rounded-xl">
                <CalendarIcon className="w-6 h-6 mx-auto mb-2 text-thermal-orange" />
                <div className="font-mono text-sm text-white">April/Mai 2026</div>
                <div className="font-mono text-xs text-gray-400">Wochenende</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <ClockIcon className="w-6 h-6 mx-auto mb-2 text-compute-blue" />
                <div className="font-mono text-sm text-white">2 Tage</div>
                <div className="font-mono text-xs text-gray-400">Sa + So</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <UserGroupIcon className="w-6 h-6 mx-auto mb-2 text-grid-green" />
                <div className="font-mono text-sm text-white">30-40</div>
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
                  Funktioniert Hardware-Hackathon in der Schweiz? Wer kommt wirklich? Was läuft schief? Wir finden es heraus.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <WrenchIcon className="w-10 h-10 text-compute-blue mb-4" />
                <h3 className="font-display text-lg font-bold text-brand-black mb-2">
                  Logistik testen
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Venue, Sicherheit, Catering, Werkzeuge. Besser mit 30 Leuten scheitern als mit 100.
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl">
                <BoltIcon className="w-10 h-10 text-grid-green mb-4" />
                <h3 className="font-display text-lg font-bold text-brand-black mb-2">
                  Community aufbauen
                </h3>
                <p className="font-mono text-sm text-historic-sepia">
                  Die ersten 30-40 werden Botschafter. Ihr formt mit, wie sihlhack im September aussieht.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="py-16 bg-off-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-compute-blue uppercase tracking-widest">
                Fokussiert, nicht verwässert
              </span>
              <h2 className="font-display text-3xl font-bold text-brand-black mt-2">
                Was wir bauen
              </h2>
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
                      <span><strong>Ein Thermal-Pfad</strong>: Wir wählen einen (wahrscheinlich Öl-Immersion, weil visuell am beeindruckendsten)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Demo-Kit Fokus</strong>: End-to-End Energie-Flow beweisen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Basis Grid-OS</strong>: Solar-Watcher + einfacher Scheduler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-grid-green mt-0.5">•</span>
                      <span><strong>Sicherheitskonzept</strong>: RCD, Gehäuse, Notabschaltung</span>
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
                      <span>Alle drei Thermal-Pfade gleichzeitig</span>
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

        {/* Registration Form */}
        <section className="py-16 bg-brand-black text-white" id="register">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-sm text-grid-green uppercase tracking-widest">
                Gratis Anmeldung
              </span>
              <h2 className="font-display text-3xl font-bold mt-2">
                Interesse bekunden
              </h2>
              <p className="mt-4 font-mono text-gray-400">
                30-40 Plätze. Wir wählen nach Skill-Mix und Motivation aus.
              </p>
            </div>

            {formState === 'success' ? (
              <Card className="bg-white/10 border-grid-green/30">
                <CardContent className="p-8 text-center">
                  <CheckCircleIcon className="w-16 h-16 mx-auto text-grid-green mb-4" />
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Interesse registriert!
                  </h3>
                  <p className="font-mono text-gray-300">
                    Wir melden uns bei dir, sobald wir den genauen Termin und Ort haben.
                    Rechne mit einer Antwort bis Ende Februar 2026.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-sm text-gray-300 mb-2">
                          Vorname *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-thermal-orange"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-sm text-gray-300 mb-2">
                          Nachname *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-thermal-orange"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-thermal-orange"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-sm text-gray-300 mb-2">
                        Welche Rolle passt am besten? *
                      </label>
                      <select
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-thermal-orange"
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
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-thermal-orange"
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
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        placeholder="Was interessiert dich am Konzept? Was willst du lernen oder beitragen?"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-mono focus:outline-none focus:border-thermal-orange placeholder:text-gray-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-thermal-orange hover:bg-thermal-orange/90 text-white font-mono font-bold rounded-lg transition-colors disabled:opacity-50"
                    >
                      {formState === 'submitting' ? 'Wird gesendet...' : 'Interesse bekunden'}
                    </button>

                    <p className="font-mono text-xs text-gray-500 text-center">
                      Kein Geld, keine Verpflichtung. Wir melden uns, wenn wir mehr wissen.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
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
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-thermal-orange/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-thermal-orange">1</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">Februar 2026: Auswahl</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Wir schauen uns alle Anmeldungen an und wählen 30-40 Leute mit dem besten Skill-Mix aus.
                    Hardware + Elektro + Software + Energie brauchen wir in Balance.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-compute-blue/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-compute-blue">2</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">März 2026: Bestätigung</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Venue und exaktes Datum werden bekannt gegeben. Ausgewählte Teilnehmer bestätigen ihre Teilnahme.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-grid-green/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-grid-green">3</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">April/Mai 2026: Snack-Hackathon</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Ein Wochenende, ein Thermal-Pfad, ein funktionierender Prototyp.
                    Wir dokumentieren alles für den grossen Event im September.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-solar-yellow/10 flex items-center justify-center">
                  <span className="font-mono font-bold text-solar-yellow">4</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-black">September 2026: sihlhack</h3>
                  <p className="font-mono text-sm text-historic-sepia mt-1">
                    Der grosse Event mit 100 Teilnehmern. Was wir beim Pilot gelernt haben, fliesst direkt ein.
                    Snack-Hackathon Alumni sind automatisch eingeladen (gratis Upgrade wenn sie nochmal kommen wollen).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-thermal-orange via-sihl-red to-compute-blue text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold">
              30-40 Plätze. Keine Kosten. Echte Arbeit.
            </h2>
            <p className="mt-4 font-mono text-white/90">
              Die ersten Pioniere formen mit, wie sihlhack aussieht.
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
