import type { SimChallengeId } from '@/types/sim'

export function isSimDashboardEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_SIM_DASHBOARD === 'true'
}

export function parseSimDevModeAllowEmails(): string[] {
  const raw = process.env.SIM_DEV_MODE_ALLOW_EMAILS || ''
  return raw
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
}

export function canUseSimDevMode(userEmail: string | undefined | null): boolean {
  if (!userEmail) {
    return false
  }
  return parseSimDevModeAllowEmails().includes(userEmail.toLowerCase())
}

export function isValidChallengeId(value: string): value is SimChallengeId {
  return value === 'sensor-logic' || value === 'safety-coordination' || value === 'grid-os'
}
