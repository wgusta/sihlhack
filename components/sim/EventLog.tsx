'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { SimEvent } from '@/types/sim'

interface EventLogProps {
  events: SimEvent[]
}

export function EventLog({ events }: EventLogProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2" data-feature="sim.event-log">
        {events.length === 0 ? (
          <p className="text-sm font-mono text-historic-sepia">No events in selected run.</p>
        ) : (
          events.map((event, index) => (
            <div key={`${event.t}-${index}`} className="rounded-md border border-historic-sepia/20 bg-white px-3 py-2">
              <p className="text-xs font-mono text-brand-black">t={event.t}s · {event.level}</p>
              <p className="text-sm text-historic-sepia">{event.message}</p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
