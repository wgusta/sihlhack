'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ResourceSubmissionFormProps {
  packageId: string
  packageName: string
}

export function ResourceSubmissionForm({ packageId, packageName }: ResourceSubmissionFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const [formData, setFormData] = useState({
    repoName: '',
    repoUrl: '',
    license: '',
    description: '',
    submitterName: '',
    submitterEmail: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/submit-resource', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId,
          packageName,
          ...formData,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }

      setStatus('success')
      setFormData({
        repoName: '',
        repoUrl: '',
        license: '',
        description: '',
        submitterName: '',
        submitterEmail: '',
      })
      
      // Close form after 2 seconds
      setTimeout(() => {
        setIsOpen(false)
        setStatus('idle')
      }, 2000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-grid-green/10 border border-grid-green/30 rounded-lg p-4 text-center">
        <div className="text-2xl mb-2">✓</div>
        <p className="font-mono text-sm text-grid-green font-semibold">
          Vielen Dank! Dein Vorschlag wurde eingereicht.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-4">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full px-4 py-2 text-sm font-mono bg-white border border-gray-300 rounded-lg hover:border-thermal-orange hover:bg-thermal-orange/5 transition-colors text-historic-sepia"
        >
          + Weitere Repos einreichen
        </button>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h5 className="font-mono text-sm font-semibold text-brand-black">
              Repo-Vorschlag einreichen
            </h5>
            <button
              onClick={() => {
                setIsOpen(false)
                setStatus('idle')
                setErrorMessage('')
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-mono text-historic-sepia mb-1">
                Repo-Name <span className="text-sihl-red">*</span>
              </label>
              <input
                type="text"
                value={formData.repoName}
                onChange={(e) => setFormData({ ...formData, repoName: e.target.value })}
                required
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                placeholder="z.B. prometheus/prometheus"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-historic-sepia mb-1">
                GitHub/HuggingFace URL <span className="text-sihl-red">*</span>
              </label>
              <input
                type="url"
                value={formData.repoUrl}
                onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                required
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                placeholder="https://github.com/..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-historic-sepia mb-1">
                Lizenz
              </label>
              <input
                type="text"
                value={formData.license}
                onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                placeholder="z.B. Apache-2.0, MIT"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-historic-sepia mb-1">
                Kurze Beschreibung
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                placeholder="Was macht dieses Tool? Warum ist es relevant?"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-historic-sepia mb-1">
                  Dein Name
                </label>
                <input
                  type="text"
                  value={formData.submitterName}
                  onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-historic-sepia mb-1">
                  Deine E-Mail
                </label>
                <input
                  type="email"
                  value={formData.submitterEmail}
                  onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded font-mono focus:outline-none focus:ring-2 focus:ring-thermal-orange/50"
                />
              </div>
            </div>

            {status === 'error' && (
              <p className="text-xs text-sihl-red font-mono">{errorMessage}</p>
            )}

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-1 px-4 py-2 text-sm font-mono bg-thermal-orange text-white rounded hover:bg-thermal-orange/90 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Wird gesendet...' : 'Einreichen'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  setStatus('idle')
                  setErrorMessage('')
                }}
                className="px-4 py-2 text-sm font-mono border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Abbrechen
              </button>
            </div>

            <p className="text-[10px] font-mono text-gray-400 text-center">
              Wird an hello@sihlhack.ch gesendet
            </p>
          </form>
        </div>
      )}
    </div>
  )
}
