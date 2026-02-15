import path from 'path'
import type { SimChallengeId } from '@/types/sim'
import { SIM_CHALLENGE_ROOTS, SIM_CHALLENGES } from '@/lib/sim/constants'

export function normalizeRelativePath(inputPath: string): string {
  const normalized = inputPath.replace(/\\/g, '/')
  if (!normalized || normalized.startsWith('/') || normalized.includes('..')) {
    throw new Error('Invalid path')
  }
  return normalized
}

export function assertAllowedOverridePath(challengeId: SimChallengeId, inputPath: string): string {
  const normalized = normalizeRelativePath(inputPath)
  if (!SIM_CHALLENGES[challengeId].editablePaths.includes(normalized)) {
    throw new Error('Path not allowlisted for challenge')
  }
  return normalized
}

export function resolveChallengeFileAbsolutePath(cwd: string, challengeId: SimChallengeId, relPath: string): string {
  const normalized = normalizeRelativePath(relPath)
  const root = path.resolve(cwd, SIM_CHALLENGE_ROOTS[challengeId])
  const fullPath = path.resolve(root, normalized)
  if (!fullPath.startsWith(root)) {
    throw new Error('Path traversal blocked')
  }
  return fullPath
}
