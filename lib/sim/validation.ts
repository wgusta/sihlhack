import { z } from 'zod'
import type { CreateSimRunRequest, SimChallengeId, SimDevOverrides } from '@/types/sim'
import {
  SIM_CHALLENGES,
  SIM_MAX_CONFIG_BYTES,
  SIM_MAX_OVERRIDE_BYTES,
} from '@/lib/sim/constants'
import { isValidChallengeId } from '@/lib/sim/auth'

const createRunSchema = z.object({
  challengeId: z.string(),
  scenarioId: z.string().min(1).max(120),
  config: z.record(z.string(), z.unknown()),
  devOverrides: z.record(z.string(), z.string()).optional(),
})

export function parseCreateRunBody(body: unknown): CreateSimRunRequest {
  const parsed = createRunSchema.safeParse(body)
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((issue) => issue.message).join('; '))
  }

  if (!isValidChallengeId(parsed.data.challengeId)) {
    throw new Error('Invalid challengeId')
  }

  if (!isAllowedScenario(parsed.data.challengeId, parsed.data.scenarioId)) {
    throw new Error('Invalid scenarioId for challenge')
  }

  assertConfigSize(parsed.data.config)
  if (parsed.data.devOverrides) {
    assertOverridesSize(parsed.data.devOverrides)
  }

  return {
    challengeId: parsed.data.challengeId,
    scenarioId: parsed.data.scenarioId,
    config: parsed.data.config,
    devOverrides: parsed.data.devOverrides,
  }
}

export function isAllowedScenario(challengeId: SimChallengeId, scenarioId: string): boolean {
  return SIM_CHALLENGES[challengeId].scenarios.includes(scenarioId)
}

export function assertConfigSize(config: Record<string, unknown>): void {
  const bytes = Buffer.byteLength(JSON.stringify(config), 'utf8')
  if (bytes > SIM_MAX_CONFIG_BYTES) {
    throw new Error(`config too large (>${SIM_MAX_CONFIG_BYTES} bytes)`)
  }
}

export function assertOverridesSize(overrides: SimDevOverrides): void {
  const joined = Object.entries(overrides)
    .map(([path, content]) => `${path}:${content}`)
    .join('\n')
  const bytes = Buffer.byteLength(joined, 'utf8')
  if (bytes > SIM_MAX_OVERRIDE_BYTES) {
    throw new Error(`devOverrides too large (>${SIM_MAX_OVERRIDE_BYTES} bytes)`)
  }
}
