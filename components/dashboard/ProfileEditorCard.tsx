'use client'

import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { useParticipantProfile } from '@/hooks/useParticipantProfile'
import { HACKATHON_ROLES } from '@/lib/roles'

function statusBadge(status: string) {
  switch (status) {
    case 'paid':
      return <Badge variant="success">Bezahlt</Badge>
    case 'registered':
      return <Badge variant="success">Registriert</Badge>
    case 'confirmed':
      return <Badge variant="success">Bestätigt</Badge>
    case 'pending':
      return <Badge variant="warning">Ausstehend</Badge>
    case 'refunded':
      return <Badge variant="info">Zurückerstattet</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}

type FormState = {
  firstName: string
  lastName: string
  company: string
  primaryRole: string
  secondaryRole: string
  skillsCsv: string
  lookingForTeam: boolean
  teamName: string
  bio: string
  linkedinUrl: string
  githubUrl: string
}

function csvToSkills(csv: string) {
  const arr = csv
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  return Array.from(new Set(arr)).slice(0, 10)
}

export function ProfileEditorCard() {
  const { data, isLoading, error, mutate } = useParticipantProfile()
  const participant = data?.participant ?? null
  const latestPayment = data?.latestPayment ?? null

  const initial: FormState | null = useMemo(() => {
    if (!participant) return null
    return {
      firstName: participant.firstName ?? '',
      lastName: participant.lastName ?? '',
      company: participant.company ?? '',
      primaryRole: participant.primaryRole ?? '',
      secondaryRole: participant.secondaryRole ?? '',
      skillsCsv: (participant.skills ?? []).join(', '),
      lookingForTeam: !!participant.lookingForTeam,
      teamName: participant.teamName ?? '',
      bio: participant.bio ?? '',
      linkedinUrl: participant.linkedinUrl ?? '',
      githubUrl: participant.githubUrl ?? '',
    }
  }, [participant])

  const [form, setForm] = useState<FormState | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState<string | null>(null)

  useEffect(() => {
    if (initial) setForm(initial)
  }, [initial])

  const save = async () => {
    if (!form) return
    setSaving(true)
    setSaveMsg(null)
    try {
      const first = form.firstName.trim()
      const last = form.lastName.trim()
      if (!first || !last) {
        setSaveMsg('Vorname + Nachname erforderlich.')
        setSaving(false)
        return
      }
      const res = await fetch('/api/participants/me', {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName: first,
          lastName: last,
          company: form.company,
          primaryRole: form.primaryRole,
          secondaryRole: form.secondaryRole,
          skills: csvToSkills(form.skillsCsv),
          lookingForTeam: form.teamName.trim() ? false : form.lookingForTeam,
          teamName: form.teamName,
          bio: form.bio,
          linkedinUrl: form.linkedinUrl,
          githubUrl: form.githubUrl,
        }),
      })
      if (!res.ok) throw new Error('bad')
      await mutate()
      setSaveMsg('Gespeichert.')
      setTimeout(() => setSaveMsg(null), 2000)
    } catch {
      setSaveMsg('Speichern fehlgeschlagen.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Deine Angaben</CardTitle>
            <div className="mt-1 text-sm font-mono text-historic-sepia">
              Bearbeite die Infos aus der Registrierung.
            </div>
          </div>
          {participant && <div className="pt-1">{statusBadge(participant.registrationStatus)}</div>}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading && <div className="text-sm font-mono text-historic-sepia">Laden...</div>}
        {error && <div className="text-sm font-mono text-sihl-red">Konnte Profil nicht laden.</div>}
        {!isLoading && !error && !participant && (
          <div className="text-sm font-mono text-historic-sepia">Bitte einloggen.</div>
        )}

        {participant && form && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Vorname"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <Input
                label="Nachname"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

            <Input
              label="Firma (optional)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                  Hauptrolle
                </label>
                <select
                  className="w-full px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                  value={form.primaryRole}
                  onChange={(e) => setForm({ ...form, primaryRole: e.target.value })}
                >
                  <option value="">Bitte wählen</option>
                  {HACKATHON_ROLES.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.nameDE}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                  Zweitrolle (optional)
                </label>
                <select
                  className="w-full px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                  value={form.secondaryRole}
                  onChange={(e) => setForm({ ...form, secondaryRole: e.target.value })}
                >
                  <option value="">Keine</option>
                  {HACKATHON_ROLES.filter((r) => r.id !== form.primaryRole).map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.nameDE}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Input
              label="Skills (Komma-getrennt, max 10)"
              value={form.skillsCsv}
              onChange={(e) => setForm({ ...form, skillsCsv: e.target.value })}
              hint="z.B. Python, React, GIS, Hydrologie"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                  Team-Status
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-mono text-sm text-historic-sepia">
                    <input
                      type="checkbox"
                      checked={form.lookingForTeam && !form.teamName.trim()}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          lookingForTeam: e.target.checked,
                          teamName: e.target.checked ? '' : form.teamName,
                        })
                      }
                    />
                    Ich suche ein Team
                  </label>
                  <Input
                    label="Teamname (optional)"
                    value={form.teamName}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        teamName: e.target.value,
                        lookingForTeam: e.target.value.trim() ? false : form.lookingForTeam,
                      })
                    }
                    hint="Wenn du einen Teamnamen angibst, wirst du nicht als suchend gelistet."
                  />
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                  Kurz-Bio (optional)
                </label>
                <textarea
                  className="w-full min-h-[120px] px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  maxLength={280}
                  placeholder="Kurz: was du kannst, was du suchst."
                />
                <div className="mt-1 text-xs font-mono text-historic-sepia">{form.bio.length}/280</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="LinkedIn (optional)"
                value={form.linkedinUrl}
                onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })}
                placeholder="linkedin.com/in/..."
              />
              <Input
                label="GitHub (optional)"
                value={form.githubUrl}
                onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
                placeholder="github.com/..."
              />
            </div>

            <div className="flex items-center gap-3">
              <Button onClick={save} isLoading={saving}>
                Speichern
              </Button>
              {saveMsg && (
                <div className="text-sm font-mono text-historic-sepia">{saveMsg}</div>
              )}
              {latestPayment && (
                <div className="ml-auto text-xs font-mono text-historic-sepia">
                  Letzte Zahlung: CHF {latestPayment.amountChf} ({latestPayment.status})
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
