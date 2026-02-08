import type { Participant } from '@/lib/db/schema'

export type ParticipantStatus = 'pending' | 'paid' | 'registered' | 'confirmed' | 'refunded'

export interface SessionUser {
  id: string
  email: string
  name: string | null
  registrationStatus: string
}

export interface PaymentSummary {
  status: string
  amountChf: number
  paymentMethod: string | null
  createdAt: string
  refundedAt: string | null
}

export interface SnackathonRegistrationSummary {
  id: string
  snackathonId: string
  status: string
  createdAt: string
  updatedAt: string
}

export interface ParticipantProfile {
  id: string
  email: string
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
  createdAt: string
  updatedAt: string
}

export interface SessionData {
  user: SessionUser | null
  isLoading: boolean
  isAuthenticated: boolean
}

export type { Participant }
