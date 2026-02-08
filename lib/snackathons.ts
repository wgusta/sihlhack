export type SnackathonId = 'april-2026' | 'mai-2026' | 'historik-hack'

export const SNACKATHON_FEE_CHF_CENTIMES = 8000

export const SNACKATHONS: Array<{
  id: SnackathonId
  name: string
  subtitle: string
  dateLabel: string
}> = [
  { id: 'april-2026', name: 'Snackathon April 2026', subtitle: 'Sihl-Sim API', dateLabel: 'April 2026' },
  { id: 'mai-2026', name: 'Snackathon Mai 2026', subtitle: 'Sihl-Sim API (Iteration)', dateLabel: 'Mai 2026' },
  { id: 'historik-hack', name: 'Historik Hack', subtitle: 'Historisches Archiv', dateLabel: 'Online (2-4 Wochen)' },
]
