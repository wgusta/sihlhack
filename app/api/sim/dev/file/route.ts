import { createHash } from 'crypto'
import fs from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { canUseSimDevMode, isSimDashboardEnabled, isValidChallengeId } from '@/lib/sim/auth'
import { SIM_CHALLENGES } from '@/lib/sim/constants'
import {
  assertAllowedOverridePath,
  normalizeRelativePath,
  resolveChallengeFileAbsolutePath,
} from '@/lib/sim/path-guard'
import { fetchRunnerChallengeFile } from '@/lib/sim/runner-client'
import { findLineByMatch } from '@/lib/sim/source-anchors'

const PLATFORM_READONLY_PREFIXES = [
  'components/sim3d/',
  'app/dashboard/sim/',
  'lib/sim/',
]

export async function GET(request: NextRequest) {
  if (!isSimDashboardEnabled()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!canUseSimDevMode(session.participant?.email)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const challengeIdRaw = request.nextUrl.searchParams.get('challengeId')
  if (!challengeIdRaw || !isValidChallengeId(challengeIdRaw)) {
    return NextResponse.json({ error: 'Invalid challengeId' }, { status: 400 })
  }

  const path = request.nextUrl.searchParams.get('path')
  const anchor = request.nextUrl.searchParams.get('anchor')

  if (!path) {
    return NextResponse.json({
      challengeId: challengeIdRaw,
      files: SIM_CHALLENGES[challengeIdRaw].editablePaths,
    })
  }

  const normalizedInput = normalizeRelativePath(path)
  const isPlatformReadonlyPath = PLATFORM_READONLY_PREFIXES.some((prefix) =>
    normalizedInput.startsWith(prefix)
  )

  let normalizedPath = normalizedInput
  let content = ''
  let readOnly = false

  if (isPlatformReadonlyPath) {
    const fullPath = `${process.cwd()}/${normalizedInput}`
    content = await fs.readFile(fullPath, 'utf8')
    readOnly = true
  } else {
    try {
      normalizedPath = assertAllowedOverridePath(challengeIdRaw, path)
    } catch (error) {
      return NextResponse.json({ error: error instanceof Error ? error.message : 'Invalid path' }, { status: 400 })
    }

    try {
      const remote = await fetchRunnerChallengeFile(challengeIdRaw, normalizedPath)
      content = remote.content
    } catch {
      const fullPath = resolveChallengeFileAbsolutePath(process.cwd(), challengeIdRaw, normalizedPath)
      content = await fs.readFile(fullPath, 'utf8')
    }
  }

  const line = anchor ? findLineByMatch(content, anchor) : 1
  const hash = createHash('sha256').update(content).digest('hex')

  return NextResponse.json({
    challengeId: challengeIdRaw,
    path: normalizedPath,
    content,
    hash,
    line,
    readOnly,
  })
}
