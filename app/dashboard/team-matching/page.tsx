'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

type ParticipantRow = {
  id: string
  name: string | null
  company: string | null
  primaryRole: string | null
  secondaryRole: string | null
  skills: string[] | null
  lookingForTeam: boolean | null
  teamName: string | null
  bio: string | null
  linkedinUrl: string | null
  githubUrl: string | null
  registrationStatus: string
  updatedAt: string
}

type TeamMatchingResponse = { participants: ParticipantRow[] }

const REASONS: Array<{ id: 'form_team' | 'join_team' | 'need_role'; label: string }> = [
  { id: 'form_team', label: 'Team bilden' },
  { id: 'join_team', label: 'Zum Team einladen / beitreten' },
  { id: 'need_role', label: 'Rolle gesucht' },
]

export default function TeamMatchingPage() {
  const [q, setQ] = useState('')
  const [rows, setRows] = useState<ParticipantRow[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reason, setReason] = useState<'form_team' | 'join_team' | 'need_role'>('form_team')
  const [note, setNote] = useState('')
  const [sendingTo, setSendingTo] = useState<string | null>(null)
  const [msg, setMsg] = useState<string | null>(null)

  const load = async (qq: string) => {
    try {
      setIsLoading(true)
      setError(null)
      const res = await fetch(`/api/team-matching?q=${encodeURIComponent(qq)}`, { credentials: 'include' })
      if (!res.ok) throw new Error('bad')
      const json = (await res.json()) as TeamMatchingResponse
      setRows(json.participants ?? [])
    } catch {
      setError('Konnte Team Matching nicht laden.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load('')
  }, [])

  useEffect(() => {
    const t = setTimeout(() => load(q), 250)
    return () => clearTimeout(t)
  }, [q])

  const send = async (targetParticipantId: string) => {
    setSendingTo(targetParticipantId)
    setMsg(null)
    try {
      const res = await fetch('/api/team-matching/request', {
        method: 'POST',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          targetParticipantId,
          reason,
          note: note.trim() ? note.trim().slice(0, 200) : undefined,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setMsg(json?.error || 'Fehler')
        return
      }
      setMsg('Anfrage gesendet.')
      setNote('')
    } catch {
      setMsg('Fehler')
    } finally {
      setSendingTo(null)
    }
  }

  const viewSkillLine = (skills: string[] | null) => {
    if (!skills || skills.length === 0) return null
    return skills.slice(0, 8).join(', ')
  }

  const filtered = useMemo(() => rows, [rows])

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-3xl font-bold text-brand-black">Team Matching</h1>
          <p className="mt-2 text-historic-sepia font-mono">
            Plattform-only. Keine Chats. Nur strukturierte Anfragen + Freigabe der Email bei Zustimmung.
          </p>
        </div>
        <Link href="/dashboard" className="text-sm font-mono text-sihl-red hover:underline">
          Zurück
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Suche</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Name / Skills / Team"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="z.B. GIS, Python, Frontend, Teamname..."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                Grund
              </label>
              <select
                className="w-full px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                value={reason}
                onChange={(e) => setReason(e.target.value as any)}
              >
                {REASONS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                Notiz (optional, max 200)
              </label>
              <input
                className="w-full px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={200}
                placeholder="Kurz: was du suchst / anbieten kannst."
              />
            </div>
          </div>
          {msg && <div className="text-sm font-mono text-historic-sepia">{msg}</div>}
        </CardContent>
      </Card>

      {isLoading && <div className="text-sm font-mono text-historic-sepia">Laden...</div>}
      {error && <div className="text-sm font-mono text-sihl-red">{error}</div>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <Card key={p.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{p.name || 'Teilnehmer:in'}</CardTitle>
              <div className="text-xs font-mono text-historic-sepia">
                {p.company ? p.company : ' '}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm font-mono text-historic-sepia">
                {p.teamName ? `Team: ${p.teamName}` : p.lookingForTeam ? 'Sucht Team' : ' '}
              </div>
              {(p.primaryRole || p.secondaryRole) && (
                <div className="text-sm font-mono text-historic-sepia">
                  Rollen: {[p.primaryRole, p.secondaryRole].filter(Boolean).join(' / ')}
                </div>
              )}
              {viewSkillLine(p.skills) && (
                <div className="text-sm font-mono text-historic-sepia">
                  Skills: {viewSkillLine(p.skills)}
                </div>
              )}
              {p.bio && (
                <div className="text-sm font-mono text-historic-sepia whitespace-pre-wrap line-clamp-4">
                  {p.bio}
                </div>
              )}

              <div className="flex items-center gap-3 flex-wrap">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => send(p.id)}
                  isLoading={sendingTo === p.id}
                >
                  Anfrage senden
                </Button>
                {p.linkedinUrl && (
                  <a className="text-xs font-mono text-sihl-red hover:underline" href={p.linkedinUrl} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
                {p.githubUrl && (
                  <a className="text-xs font-mono text-sihl-red hover:underline" href={p.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

