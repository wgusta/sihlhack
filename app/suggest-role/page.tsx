'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Icon } from '@/components/ui/Icon'

export default function SuggestRolePage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    submitterName: '',
    submitterEmail: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/suggest-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }

      setStatus('success')
      setFormData({
        roleName: '',
        description: '',
        submitterName: '',
        submitterEmail: '',
      })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    }
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Icon emoji="💡" size="xl" color="text-thermal-orange" />
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-black mt-4">
                Rollen-Vorschlag einreichen
              </h1>
              <p className="mt-4 text-historic-sepia font-mono max-w-xl mx-auto">
                Schlage eine Rolle vor, die wir noch nicht bedacht haben. 
                Dein Vorschlag wird an hello@sihlhack.ch gesendet.
              </p>
            </div>

            {status === 'success' ? (
              <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="font-display text-xl font-semibold text-grid-green mb-2">
                  Vielen Dank!
                </h2>
                <p className="font-mono text-sm text-historic-sepia">
                  Dein Vorschlag wurde eingereicht. Wir melden uns bei dir.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-brand-black mb-2">
                      Rollen-Name <span className="text-sihl-red">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.roleName}
                      onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                      placeholder="z.B. Thermodynamik-Experte"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-brand-black mb-2">
                      Beschreibung <span className="text-sihl-red">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                      placeholder="Beschreibe die Rolle, welche Skills benötigt werden, und warum sie für das Hackathon wichtig ist..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-mono text-brand-black mb-2">
                        Dein Name
                      </label>
                      <input
                        type="text"
                        value={formData.submitterName}
                        onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-brand-black mb-2">
                        Deine E-Mail
                      </label>
                      <input
                        type="email"
                        value={formData.submitterEmail}
                        onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="bg-sihl-red/10 border border-sihl-red/30 rounded-lg p-4">
                      <p className="text-sm text-sihl-red font-mono">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 text-sm font-mono bg-thermal-orange text-white rounded-lg hover:bg-thermal-orange/90 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Wird gesendet...' : 'Vorschlag einreichen'}
                  </button>

                  <p className="text-xs font-mono text-gray-400 text-center">
                    Wird an hello@sihlhack.ch gesendet
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
