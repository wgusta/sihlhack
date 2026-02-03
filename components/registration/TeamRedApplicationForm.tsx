'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface ApplicationFormData {
  email: string
  name: string
  phone: string
  bio: string
  portfolio: string
  githubProfile: string
  ctfProfile: string
  securityExperience: string
  motivation: string
  acceptedTerms: boolean
}

export function TeamRedApplicationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<ApplicationFormData>({
    email: '',
    name: '',
    phone: '',
    bio: '',
    portfolio: '',
    githubProfile: '',
    ctfProfile: '',
    securityExperience: '',
    motivation: '',
    acceptedTerms: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ApplicationFormData, string>> = {}

    if (!formData.email) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse'
    }

    if (!formData.name) {
      newErrors.name = 'Name ist erforderlich'
    }

    if (!formData.securityExperience.trim()) {
      newErrors.securityExperience = 'Sicherheitserfahrung ist erforderlich'
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Motivation ist erforderlich'
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'Du musst den Bedingungen zustimmen'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/team-red/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Bewerbung fehlgeschlagen')
      }

      setSuccess(true)
      setFormData({
        email: '',
        name: '',
        phone: '',
        bio: '',
        portfolio: '',
        githubProfile: '',
        ctfProfile: '',
        securityExperience: '',
        motivation: '',
        acceptedTerms: false,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✓</div>
        <h2 className="font-display text-2xl font-bold text-green-500 mb-2">
          Bewerbung eingereicht!
        </h2>
        <p className="font-mono text-gray-400 max-w-md mx-auto">
          Danke für deine Bewerbung bei Team Red. Wir werden dich kontaktieren, falls dein Profil zu unseren Anforderungen passt.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
          <p className="text-sm text-red-400 font-mono">{error}</p>
        </div>
      )}

      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="font-display text-lg font-bold text-white">
          Persönliche Daten
        </h3>

        <div>
          <label htmlFor="name" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            Vollständiger Name *
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Max Mustermann"
            error={errors.name}
            className="bg-white/5 border-white/10 text-white placeholder-gray-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            E-Mail-Adresse *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="deine@email.ch"
            error={errors.email}
            className="bg-white/5 border-white/10 text-white placeholder-gray-600"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            Telefon <span className="text-gray-500">(optional)</span>
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+41 79 123 45 67"
            className="bg-white/5 border-white/10 text-white placeholder-gray-600"
          />
        </div>
      </div>

      {/* Security Background */}
      <div className="space-y-4 border-t border-white/10 pt-6">
        <h3 className="font-display text-lg font-bold text-white">
          Security-Hintergrund
        </h3>

        <div>
          <label htmlFor="security-exp" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            Sicherheitserfahrung *
          </label>
          <textarea
            id="security-exp"
            value={formData.securityExperience}
            onChange={(e) => setFormData({ ...formData, securityExperience: e.target.value })}
            placeholder="Beschreibe deine relevante Erfahrung im Security/Pentesting Bereich..."
            rows={4}
            maxLength={500}
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-none"
          />
          {errors.securityExperience && (
            <p className="text-sm text-red-400 mt-1">{errors.securityExperience}</p>
          )}
          <p className="text-xs font-mono text-gray-500 mt-1">
            {formData.securityExperience.length}/500 Zeichen
          </p>
        </div>

        <div>
          <label htmlFor="github" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            GitHub-Profil <span className="text-gray-500">(optional)</span>
          </label>
          <Input
            id="github"
            type="url"
            value={formData.githubProfile}
            onChange={(e) => setFormData({ ...formData, githubProfile: e.target.value })}
            placeholder="github.com/username"
            className="bg-white/5 border-white/10 text-white placeholder-gray-600"
          />
          <p className="text-xs font-mono text-gray-500 mt-1">
            Link zu deinen Security/Hacking Repositories
          </p>
        </div>

        <div>
          <label htmlFor="ctf" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            CTF/HackTheBox Profil <span className="text-gray-500">(optional)</span>
          </label>
          <Input
            id="ctf"
            type="url"
            value={formData.ctfProfile}
            onChange={(e) => setFormData({ ...formData, ctfProfile: e.target.value })}
            placeholder="https://ctftime.org/user/... oder HackTheBox Profil"
            className="bg-white/5 border-white/10 text-white placeholder-gray-600"
          />
          <p className="text-xs font-mono text-gray-500 mt-1">
            CTFtime, HackTheBox, oder ähnliches
          </p>
        </div>

        <div>
          <label htmlFor="portfolio" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            Portfolio/CV Link <span className="text-gray-500">(optional)</span>
          </label>
          <Input
            id="portfolio"
            type="url"
            value={formData.portfolio}
            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
            placeholder="https://... oder Google Drive Link"
            className="bg-white/5 border-white/10 text-white placeholder-gray-600"
          />
          <p className="text-xs font-mono text-gray-500 mt-1">
            Dein CV oder Portfolio, das deine Security-Expertise zeigt
          </p>
        </div>
      </div>

      {/* Motivation */}
      <div className="space-y-4 border-t border-white/10 pt-6">
        <h3 className="font-display text-lg font-bold text-white">
          Deine Motivation
        </h3>

        <div>
          <label htmlFor="motivation" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            Warum möchtest du bei Team Red dabei sein? *
          </label>
          <textarea
            id="motivation"
            value={formData.motivation}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            placeholder="Erzähle uns, warum du an der Team Red Challenge teilnehmen möchtest..."
            rows={4}
            maxLength={500}
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-none"
          />
          {errors.motivation && (
            <p className="text-sm text-red-400 mt-1">{errors.motivation}</p>
          )}
          <p className="text-xs font-mono text-gray-500 mt-1">
            {formData.motivation.length}/500 Zeichen
          </p>
        </div>

        <div>
          <label htmlFor="bio" className="block text-sm font-mono font-medium text-gray-300 mb-1">
            Kurze Vorstellung <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Erzähle kurz von dir, deinen Interessen und deiner Security-Leidenschaft..."
            rows={3}
            maxLength={280}
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-none"
          />
          <p className="text-xs font-mono text-gray-500 mt-1">
            {formData.bio.length}/280 Zeichen
          </p>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="border-t border-white/10 pt-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.acceptedTerms}
            onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
            className="mt-1 w-4 h-4 accent-red-500"
          />
          <div>
            <span className="font-mono text-sm text-gray-300">
              Ich akzeptiere die Bedingungen für Team Red *
            </span>
            <p className="text-xs font-mono text-gray-500 mt-1">
              Nur mit expliziter Genehmigung · Responsible Disclosure Required · NDA wird unterzeichnet
            </p>
          </div>
        </label>
        {errors.acceptedTerms && (
          <p className="text-sm text-red-400 mt-2">{errors.acceptedTerms}</p>
        )}
      </div>

      <div className="flex gap-4 pt-6">
        <Button
          type="button"
          variant="ghost"
          className="flex-1 text-white border-white/30 hover:bg-white/10"
          onClick={() => window.history.back()}
        >
          Zurück
        </Button>
        <Button
          type="submit"
          variant="primary"
          className="flex-1 bg-red-500 hover:bg-red-600 border-red-500"
          disabled={isLoading}
        >
          {isLoading ? 'Wird übermittelt...' : '💀 Bewerbung absenden'}
        </Button>
      </div>
    </form>
  )
}
