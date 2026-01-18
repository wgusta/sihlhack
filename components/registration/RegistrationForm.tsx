'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { StepIndicator } from './StepIndicator'
import { TermsCheckbox } from './TermsCheckbox'
import { RoleSuggestionModal } from './RoleSuggestionModal'
import { formatCHF } from '@/lib/utils'
import { HACKATHON_ROLES, SKILL_TAGS } from '@/lib/roles'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'

const REGISTRATION_FEE = 15000 // CHF 150 in centimes

const steps = [
  { id: 1, name: 'Kontakt' },
  { id: 2, name: 'Rolle' },
  { id: 3, name: 'Bestätigen' },
  { id: 4, name: 'Bezahlen' },
]

// Popular skills for quick selection
const POPULAR_SKILLS = [
  'Python', 'Rust', 'TypeScript', 'React',
  'Thermodynamik', 'CAD/3D-Druck', 'Elektronik', 'Löten',
  'Docker', 'Linux', 'Solar-API', 'Energierecht'
]

interface FormData {
  email: string
  name: string
  company: string
  primaryRole: string
  secondaryRole: string
  skills: string[]
  lookingForTeam: boolean
  bio: string
  linkedinUrl: string
  githubUrl: string
  acceptedTerms: boolean
}

export function RegistrationForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showRoleSuggestionModal, setShowRoleSuggestionModal] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    primaryRole: '',
    secondaryRole: '',
    skills: [],
    lookingForTeam: true,
    bio: '',
    linkedinUrl: '',
    githubUrl: '',
    acceptedTerms: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.email) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse'
    }

    if (!formData.name) {
      newErrors.name = 'Name ist erforderlich'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.primaryRole) {
      newErrors.primaryRole = 'Wähle deine Hauptrolle'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'Du musst die Bedingungen akzeptieren'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3)
    } else if (currentStep === 3 && validateStep3()) {
      handleCheckout()
    }
  }

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill].slice(0, 10) // Max 10 skills
    }))
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          company: formData.company || undefined,
          primaryRole: formData.primaryRole,
          secondaryRole: formData.secondaryRole || undefined,
          skills: formData.skills,
          lookingForTeam: formData.lookingForTeam,
          bio: formData.bio || undefined,
          linkedinUrl: formData.linkedinUrl || undefined,
          githubUrl: formData.githubUrl || undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Checkout fehlgeschlagen')
      }

      const { url } = await res.json()
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <StepIndicator steps={steps} currentStep={currentStep} />
      
      <RoleSuggestionModal
        isOpen={showRoleSuggestionModal}
        onClose={() => setShowRoleSuggestionModal(false)}
      />

      {error && (
        <div className="mb-6 p-4 bg-sihl-red/10 border border-sihl-red rounded-lg">
          <p className="text-sm text-sihl-red font-mono">{error}</p>
        </div>
      )}

      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-mono font-medium text-brand-black mb-1">
              E-Mail-Adresse *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="deine@email.ch"
              error={errors.email}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-mono font-medium text-brand-black mb-1">
              Vollständiger Name *
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Max Mustermann"
              error={errors.name}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-mono font-medium text-brand-black mb-1">
              Unternehmen <span className="text-historic-sepia">(optional)</span>
            </label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Firma AG"
            />
          </div>

          <Button type="button" variant="primary" className="w-full" onClick={handleNext}>
            Weiter
          </Button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          {/* Primary Role Selection */}
          <div>
            <label className="block text-sm font-mono font-medium text-brand-black mb-3">
              Deine Hauptrolle *
            </label>
            {errors.primaryRole && (
              <p className="text-sm text-sihl-red mb-2">{errors.primaryRole}</p>
            )}
            <div className="grid grid-cols-2 gap-2">
              {HACKATHON_ROLES.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryRole: role.id })}
                  className={cn(
                    "p-3 rounded-lg border-2 text-left transition-all",
                    formData.primaryRole === role.id
                      ? "border-sihl-red bg-sihl-red/5"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon emoji={role.icon} size="lg" color={`text-${role.color}`} />
                    <span className="font-mono text-sm font-medium text-brand-black">
                      {role.nameDE}
                    </span>
                  </div>
                </button>
              ))}
              
              {/* Role Suggestion Box */}
              <button
                type="button"
                onClick={() => setShowRoleSuggestionModal(true)}
                className="col-span-2 p-4 rounded-lg border-2 border-dashed border-historic-sepia/40 hover:border-sihl-red/50 transition-all text-center group"
              >
                <Icon emoji="💡" size="lg" color="text-historic-sepia group-hover:text-sihl-red" />
                <p className="font-mono text-sm font-medium text-brand-black mt-2">
                  Deine Rolle ist nicht dabei?
                </p>
                <p className="font-mono text-xs text-historic-sepia mt-1">
                  Schlage eine neue Rolle vor
                </p>
              </button>
            </div>
          </div>

          {/* Secondary Role (Optional) */}
          <div>
            <label className="block text-sm font-mono font-medium text-brand-black mb-2">
              Sekundäre Rolle <span className="text-historic-sepia">(optional)</span>
            </label>
            <select
              value={formData.secondaryRole}
              onChange={(e) => setFormData({ ...formData, secondaryRole: e.target.value })}
              className="w-full p-3 border border-gray-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sihl-red/50"
            >
              <option value="">Keine sekundäre Rolle</option>
              {HACKATHON_ROLES.filter(r => r.id !== formData.primaryRole).map((role) => (
                <option key={role.id} value={role.id}>
                  {role.nameDE}
                </option>
              ))}
            </select>
          </div>

          {/* Skills Selection */}
          <div>
            <label className="block text-sm font-mono font-medium text-brand-black mb-2">
              Deine Skills <span className="text-historic-sepia">(max. 10)</span>
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {POPULAR_SKILLS.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-mono transition-all",
                    formData.skills.includes(skill)
                      ? "bg-sihl-red text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {skill}
                </button>
              ))}
            </div>
            <p className="text-xs font-mono text-historic-sepia">
              {formData.skills.length}/10 ausgewählt
            </p>
          </div>

          {/* Team Status */}
          <div className="bg-historic-cream rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.lookingForTeam}
                onChange={(e) => setFormData({ ...formData, lookingForTeam: e.target.checked })}
                className="mt-1 w-4 h-4 accent-sihl-red"
              />
              <div>
                <span className="font-mono text-sm font-medium text-brand-black">
                  Ich suche ein Team
                </span>
                <p className="text-xs font-mono text-historic-sepia mt-1">
                  Wir helfen dir, passende Teammitglieder mit komplementären Rollen zu finden.
                </p>
              </div>
            </label>
          </div>

          {/* Bio (Optional) */}
          <div>
            <label htmlFor="bio" className="block text-sm font-mono font-medium text-brand-black mb-1">
              Kurze Vorstellung <span className="text-historic-sepia">(optional)</span>
            </label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Erzähle anderen Teilnehmenden kurz von dir..."
              rows={3}
              maxLength={280}
              className="w-full p-3 border border-gray-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sihl-red/50 resize-none"
            />
            <p className="text-xs font-mono text-historic-sepia mt-1">
              {formData.bio.length}/280 Zeichen
            </p>
          </div>

          {/* Social Links (Optional) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="linkedin" className="block text-sm font-mono font-medium text-brand-black mb-1">
                LinkedIn <span className="text-historic-sepia">(optional)</span>
              </label>
              <Input
                id="linkedin"
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                placeholder="linkedin.com/in/..."
              />
            </div>
            <div>
              <label htmlFor="github" className="block text-sm font-mono font-medium text-brand-black mb-1">
                GitHub <span className="text-historic-sepia">(optional)</span>
              </label>
              <Input
                id="github"
                type="url"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="github.com/..."
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="ghost" className="flex-1" onClick={handleBack}>
              Zurück
            </Button>
            <Button type="button" variant="primary" className="flex-1" onClick={handleNext}>
              Weiter
            </Button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6">
          <div className="bg-historic-cream rounded-lg p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-brand-black">
              Zusammenfassung
            </h3>

            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-historic-sepia">E-Mail</span>
                <span className="text-brand-black">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-historic-sepia">Name</span>
                <span className="text-brand-black">{formData.name}</span>
              </div>
              {formData.company && (
                <div className="flex justify-between">
                  <span className="text-historic-sepia">Unternehmen</span>
                  <span className="text-brand-black">{formData.company}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-historic-sepia">Hauptrolle</span>
                <span className="text-brand-black flex items-center gap-1">
                  {formData.primaryRole && (
                    <>
                      <Icon emoji={HACKATHON_ROLES.find(r => r.id === formData.primaryRole)?.icon || ''} size="md" color={`text-${HACKATHON_ROLES.find(r => r.id === formData.primaryRole)?.color || 'brand-black'}`} />
                      {HACKATHON_ROLES.find(r => r.id === formData.primaryRole)?.nameDE}
                    </>
                  )}
                </span>
              </div>
              {formData.secondaryRole && (
                <div className="flex justify-between items-center">
                  <span className="text-historic-sepia">Sekundär</span>
                  <span className="text-brand-black flex items-center gap-1">
                    {formData.secondaryRole && (
                      <>
                        <Icon emoji={HACKATHON_ROLES.find(r => r.id === formData.secondaryRole)?.icon || ''} size="md" color={`text-${HACKATHON_ROLES.find(r => r.id === formData.secondaryRole)?.color || 'brand-black'}`} />
                        {HACKATHON_ROLES.find(r => r.id === formData.secondaryRole)?.nameDE}
                      </>
                    )}
                  </span>
                </div>
              )}
              {formData.skills.length > 0 && (
                <div className="pt-2">
                  <span className="text-historic-sepia block mb-2">Skills</span>
                  <div className="flex flex-wrap gap-1">
                    {formData.skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-between pt-2">
                <span className="text-historic-sepia">Team-Status</span>
                <span className="text-brand-black">
                  {formData.lookingForTeam ? '🔍 Sucht Team' : '✓ Hat Team'}
                </span>
              </div>
            </div>

            <div className="border-t border-historic-sepia/20 pt-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-historic-sepia">Teilnahmegebühr</span>
                <span className="font-display text-2xl font-bold text-brand-black">
                  {formatCHF(REGISTRATION_FEE)}
                </span>
              </div>
              <p className="text-xs font-mono text-historic-sepia mt-2">
                Der gesamte Überschuss nach Betriebskosten wird als Preisgeld (50/30/20) ausgeschüttet.
                Vollständige Rückerstattung bei Absage.
              </p>
            </div>
          </div>

          <TermsCheckbox
            checked={formData.acceptedTerms}
            onChange={(checked) => setFormData({ ...formData, acceptedTerms: checked })}
            error={errors.acceptedTerms}
          />

          <div className="flex gap-4">
            <Button type="button" variant="ghost" className="flex-1" onClick={handleBack}>
              Zurück
            </Button>
            <Button
              type="button"
              variant="primary"
              className="flex-1"
              onClick={handleNext}
              disabled={isLoading}
            >
              {isLoading ? 'Wird geladen...' : 'Zur Zahlung'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
