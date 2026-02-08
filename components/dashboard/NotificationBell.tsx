'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { BellIcon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

type NotificationRow = {
  id: string
  kind: string
  title: string
  body: string | null
  data: string | null
  readAt: string | null
  createdAt: string
}

type NotificationsResponse = {
  notifications: NotificationRow[]
  unreadCount: number
}

function kindLabel(kind: string) {
  switch (kind) {
    case 'team_request':
      return 'Team Matching'
    case 'team_response':
      return 'Team Matching'
    default:
      return 'Info'
  }
}

export function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<NotificationsResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)

  const unreadCount = data?.unreadCount ?? 0
  const notifications = data?.notifications ?? []

  const unreadIds = useMemo(
    () => notifications.filter((n) => !n.readAt).map((n) => n.id),
    [notifications]
  )

  const refresh = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const res = await fetch('/api/notifications', { credentials: 'include' })
      if (!res.ok) {
        setError('Fehler beim Laden')
        setData(null)
        return
      }
      const json = (await res.json()) as NotificationsResponse
      setData(json)
    } catch {
      setError('Fehler beim Laden')
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const markRead = async (ids?: string[]) => {
    await fetch('/api/notifications', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ids }),
    })
    await refresh()
  }

  const respondTeamRequest = async (notificationId: string, action: 'accept' | 'decline') => {
    await fetch('/api/team-matching/respond', {
      method: 'POST',
      credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ notificationId, action }),
    })
    await refresh()
  }

  useEffect(() => {
    refresh()
    const t = setInterval(refresh, 30_000)
    return () => clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!open) return
      if (!rootRef.current) return
      if (e.target instanceof Node && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'relative inline-flex items-center justify-center',
          'w-10 h-10 rounded-lg border-2',
          'border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors'
        )}
        aria-label="Benachrichtigungen"
      >
        <BellIcon className="w-5 h-5 text-white/90" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-sihl-red text-white text-xs font-mono flex items-center justify-center">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-[380px] max-w-[90vw] rounded-xl border border-historic-sepia/20 bg-white shadow-historic overflow-hidden z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-historic-sepia/10">
            <div className="font-display text-sm font-semibold text-brand-black">Benachrichtigungen</div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => refresh()}
                className="text-xs font-mono text-historic-sepia hover:text-brand-black"
              >
                Refresh
              </button>
              <button
                type="button"
                onClick={() => markRead(unreadIds)}
                disabled={unreadIds.length === 0}
                className={cn(
                  'text-xs font-mono',
                  unreadIds.length === 0 ? 'text-historic-sepia/40' : 'text-historic-sepia hover:text-brand-black'
                )}
              >
                Alle gelesen
              </button>
            </div>
          </div>

          <div className="max-h-[420px] overflow-auto">
            {error && <div className="px-4 py-3 text-sm font-mono text-sihl-red">{error}</div>}
            {!error && isLoading && notifications.length === 0 && (
              <div className="px-4 py-3 text-sm font-mono text-historic-sepia">Laden...</div>
            )}
            {!error && !isLoading && notifications.length === 0 && (
              <div className="px-4 py-3 text-sm font-mono text-historic-sepia">Keine Nachrichten.</div>
            )}

            {notifications.map((n) => {
              const isUnread = !n.readAt
              return (
                <div key={n.id} className={cn('px-4 py-3 border-b border-historic-sepia/10', isUnread && 'bg-historic-cream/40')}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wide text-historic-sepia">
                        {kindLabel(n.kind)}
                      </div>
                      <div className="mt-0.5 text-sm font-display font-semibold text-brand-black">{n.title}</div>
                      {n.body && <div className="mt-1 text-xs font-mono text-historic-sepia whitespace-pre-wrap">{n.body}</div>}
                    </div>
                    {isUnread && (
                      <button
                        type="button"
                        onClick={() => markRead([n.id])}
                        className="text-xs font-mono text-historic-sepia hover:text-brand-black whitespace-nowrap"
                      >
                        Gelesen
                      </button>
                    )}
                  </div>

                  {n.kind === 'team_request' && !n.readAt && (
                    <div className="mt-3 flex items-center gap-2">
                      <Button size="sm" variant="secondary" onClick={() => respondTeamRequest(n.id, 'accept')}>
                        Akzeptieren
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => respondTeamRequest(n.id, 'decline')}>
                        Ablehnen
                      </Button>
                      <Link href="/dashboard/team-matching" className="ml-auto text-xs font-mono text-sihl-red hover:underline">
                        Team Matching
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

