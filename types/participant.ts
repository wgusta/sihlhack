import type { Participant } from '@/lib/db/schema'

export type ParticipantStatus = 'pending' | 'registered' | 'confirmed' | 'refunded'

export interface SessionUser {
  id: string
  email: string
  name: string | null
  registrationStatus: string
}

export interface SessionData {
  user: SessionUser | null
  isLoading: boolean
  isAuthenticated: boolean
}

export type { Participant }
