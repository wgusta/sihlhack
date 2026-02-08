'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useParticipantProfile } from '@/hooks/useParticipantProfile'

function okLabel(ok: boolean) {
  return ok ? 'OK' : 'Offen'
}

export function NextStepsCard() {
  const { data, isLoading } = useParticipantProfile()
  const p = data?.participant
  const snackPaid = (data?.snackathons ?? []).some((r) => r.status === 'paid')

  const profileOk = !!(p?.name && p?.primaryRole && (p.skills?.length ?? 0) > 0)
  const teamOk = !!(p && (p.teamName || p.lookingForTeam))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Next Steps</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <div className="text-sm font-mono text-historic-sepia">Laden...</div>}
        {!isLoading && (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-mono text-brand-black">Profil (Name, Rolle, Skills)</div>
              <div className="text-xs font-mono text-historic-sepia">{okLabel(profileOk)}</div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-mono text-brand-black">Teamstatus (Teamname oder Suche)</div>
              <div className="text-xs font-mono text-historic-sepia">{okLabel(teamOk)}</div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-mono text-brand-black">Snackathon Teilnahme (CHF 80)</div>
              <div className="text-xs font-mono text-historic-sepia">{okLabel(snackPaid)}</div>
            </div>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <Link href="/dashboard/team-matching" className="text-sm font-mono text-sihl-red hover:underline">
                Team Matching
              </Link>
              <Link href="/snackathons" className="text-sm font-mono text-sihl-red hover:underline">
                Snackathons
              </Link>
              <div className="text-xs font-mono text-historic-sepia">
                Benachrichtigungen oben rechts.
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

