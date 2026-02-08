'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

type Announcement = {
  id: string
  title: string
  body: string
  audience: string
  publishedAt: string
  createdAt: string
}

export default function AdminNewsPage() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [audience, setAudience] = useState<'participants' | 'public'>('participants')
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [rows, setRows] = useState<Announcement[]>([])

  const refresh = async () => {
    const res = await fetch('/api/announcements', { credentials: 'include' })
    if (!res.ok) return
    const json = await res.json()
    setRows(json.announcements ?? [])
  }

  useEffect(() => {
    refresh()
  }, [])

  const publish = async () => {
    setIsLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/announcements', {
        method: 'POST',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          title: title.trim(),
          body: body.trim(),
          audience,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setMsg(json?.error || 'Fehler')
        return
      }
      setTitle('')
      setBody('')
      setMsg('Publiziert.')
      await refresh()
    } catch {
      setMsg('Fehler')
    } finally {
      setIsLoading(false)
    }
  }

  const bootstrap = async () => {
    setIsLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/bootstrap', { method: 'POST', credentials: 'include' })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setMsg(json?.error || 'Fehler')
        return
      }
      setMsg('DB Bootstrap ok.')
    } catch {
      setMsg('Fehler')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">News</h1>
        <p className="text-gray-600">Organisator-News im Dashboard.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Publizieren</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Input label="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
                Audience
              </label>
              <select
                className="w-full px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                value={audience}
                onChange={(e) => setAudience(e.target.value as any)}
              >
                <option value="participants">participants</option>
                <option value="public">public</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-mono font-medium text-brand-black mb-1.5">
              Text
            </label>
            <textarea
              className="w-full min-h-[160px] px-4 py-2.5 font-mono text-base bg-white border-2 border-historic-sepia/30 rounded-lg hover:border-historic-sepia/50 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Kurz, klar, 1-10 Zeilen."
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Button onClick={publish} isLoading={isLoading} disabled={!title.trim() || !body.trim()}>
              Publizieren
            </Button>
            <Button onClick={bootstrap} isLoading={isLoading} variant="ghost">
              DB Bootstrap
            </Button>
            {msg && <span className="text-sm text-gray-700">{msg}</span>}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Letzte News</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rows.length === 0 && <div className="text-sm text-gray-600">Keine News.</div>}
          {rows.slice(0, 10).map((a) => (
            <div key={a.id} className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="text-xs text-gray-500">
                {new Date(a.publishedAt || a.createdAt).toLocaleString('de-CH')} · {a.audience}
              </div>
              <div className="mt-1 font-semibold">{a.title}</div>
              <div className="mt-2 text-sm whitespace-pre-wrap text-gray-700">{a.body}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

