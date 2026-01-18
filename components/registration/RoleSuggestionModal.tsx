'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Icon } from '@/components/ui/Icon'

interface RoleSuggestionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RoleSuggestionModal({ isOpen, onClose }: RoleSuggestionModalProps) {
  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    submitterName: '',
    submitterEmail: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

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

      setSuccess(true)
      setTimeout(() => {
        onClose()
        setSuccess(false)
        setFormData({
          roleName: '',
          description: '',
          submitterName: '',
          submitterEmail: '',
        })
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display text-xl font-semibold text-brand-black">
            Rolle vorschlagen
          </h3>
          <button
            onClick={onClose}
            className="text-historic-sepia hover:text-brand-black transition-colors"
            aria-label="Schließen"
          >
            <Icon emoji="✕" size="lg" />
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center">
            <Icon emoji="✓" size="xl" color="text-fund-green" />
            <p className="mt-4 font-mono text-sm text-brand-black">
              Vielen Dank! Dein Vorschlag wurde eingereicht.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="roleName" className="block text-sm font-mono font-medium text-brand-black mb-1">
                Rollenname *
              </label>
              <Input
                id="roleName"
                type="text"
                value={formData.roleName}
                onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}
                placeholder="z.B. IoT Security Expert"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-mono font-medium text-brand-black mb-1">
                Beschreibung *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Warum ist diese Rolle wichtig für den Hackathon?"
                rows={4}
                required
                className="w-full p-3 border border-gray-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sihl-red/50 resize-none"
              />
            </div>

            <div>
              <label htmlFor="submitterName" className="block text-sm font-mono font-medium text-brand-black mb-1">
                Dein Name <span className="text-historic-sepia">(optional)</span>
              </label>
              <Input
                id="submitterName"
                type="text"
                value={formData.submitterName}
                onChange={(e) => setFormData({ ...formData, submitterName: e.target.value })}
                placeholder="Max Mustermann"
              />
            </div>

            <div>
              <label htmlFor="submitterEmail" className="block text-sm font-mono font-medium text-brand-black mb-1">
                Deine E-Mail <span className="text-historic-sepia">(optional)</span>
              </label>
              <Input
                id="submitterEmail"
                type="email"
                value={formData.submitterEmail}
                onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                placeholder="deine@email.ch"
              />
            </div>

            {error && (
              <div className="p-3 bg-sihl-red/10 border border-sihl-red rounded-lg">
                <p className="text-sm text-sihl-red font-mono">{error}</p>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="ghost"
                className="flex-1"
                onClick={onClose}
                disabled={isLoading}
              >
                Abbrechen
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? 'Wird gesendet...' : 'Absenden'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
