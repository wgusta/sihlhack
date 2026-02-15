#!/usr/bin/env node

const http = require('http')
const { createHmac, randomUUID } = require('crypto')
const fs = require('fs/promises')
const path = require('path')
const { CHALLENGES } = require('./challenges')

const PORT = Number.parseInt(process.env.PORT || '8099', 10)
const API_KEY = process.env.SIM_RUNNER_API_KEY || ''
const WEBHOOK_URL = process.env.SIM_RUNNER_WEBHOOK_URL || ''
const WEBHOOK_SECRET = process.env.SIM_RUNNER_WEBHOOK_SECRET || ''
const ARTIFACT_DIR = process.env.SIM_RUNNER_ARTIFACT_DIR || path.resolve(__dirname, '.artifacts')

const runs = new Map()

if (!API_KEY) {
  console.error('Missing SIM_RUNNER_API_KEY')
  process.exit(1)
}

const server = http.createServer(async (req, res) => {
  try {
    if (!isAuthorized(req)) {
      sendJson(res, 401, { error: 'Unauthorized' })
      return
    }

    if (req.method === 'POST' && req.url === '/v1/runs') {
      const body = await readJsonBody(req)
      await handleRunCreate(res, body)
      return
    }

    const cancelMatch = req.url.match(/^\/v1\/runs\/([^/]+)\/cancel$/)
    if (req.method === 'POST' && cancelMatch) {
      await handleRunCancel(res, decodeURIComponent(cancelMatch[1]))
      return
    }

    const fileMatch = req.url.match(/^\/v1\/challenges\/([^/]+)\/files(?:\?.*)?$/)
    if (req.method === 'GET' && fileMatch) {
      const challengeId = decodeURIComponent(fileMatch[1])
      const query = new URL(req.url, 'http://localhost').searchParams
      await handleChallengeFiles(res, challengeId, query)
      return
    }

    sendJson(res, 404, { error: 'Not found' })
  } catch (error) {
    sendJson(res, 500, { error: error instanceof Error ? error.message : 'Internal error' })
  }
})

server.listen(PORT, () => {
  console.log(`sim-runner listening on :${PORT}`)
})

function isAuthorized(req) {
  const auth = req.headers.authorization || ''
  return auth === `Bearer ${API_KEY}`
}

async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

async function handleRunCreate(res, body) {
  const runId = body?.runId
  const participantId = body?.participantId
  const request = body?.request

  if (!runId || !participantId || !request?.challengeId || !request?.scenarioId || !request?.config) {
    sendJson(res, 400, { error: 'Invalid run payload' })
    return
  }

  const challenge = CHALLENGES[request.challengeId]
  if (!challenge) {
    sendJson(res, 400, { error: 'Unknown challengeId' })
    return
  }

  const scenarioPath = path.resolve(challenge.scenariosDir, `${request.scenarioId}.json`)
  if (!(await fileExists(scenarioPath))) {
    sendJson(res, 400, { error: 'Unknown scenarioId' })
    return
  }

  const runnerRunId = randomUUID()
  runs.set(runnerRunId, {
    runId,
    participantId,
    challengeId: request.challengeId,
    scenarioId: request.scenarioId,
    status: 'running',
    cancelled: false,
    finished: false,
  })

  setTimeout(() => {
    void executeRun(runnerRunId, request)
  }, 50)

  sendJson(res, 201, { runnerRunId })
}

async function handleRunCancel(res, runnerRunId) {
  const state = runs.get(runnerRunId)
  if (!state) {
    sendJson(res, 404, { error: 'Run not found' })
    return
  }

  if (state.finished) {
    sendJson(res, 200, { ok: true, alreadyFinished: true })
    return
  }

  state.cancelled = true
  state.finished = true
  state.status = 'cancelled'

  await postWebhook({
    runId: state.runId,
    status: 'cancelled',
    summary: {
      headline: 'Run cancelled by user',
      checks: [{ key: 'runner.cancel', pass: true, message: 'Cancellation acknowledged by runner' }],
    },
    artifacts: {
      events: [{ t: 0, level: 'warning', message: 'Run cancelled before completion' }],
    },
  })

  sendJson(res, 200, { ok: true })
}

async function handleChallengeFiles(res, challengeId, query) {
  const challenge = CHALLENGES[challengeId]
  if (!challenge) {
    sendJson(res, 404, { error: 'Challenge not found' })
    return
  }

  const relPath = query.get('path')
  if (!relPath) {
    sendJson(res, 200, { challengeId, files: challenge.editablePaths })
    return
  }

  if (!challenge.editablePaths.includes(relPath)) {
    sendJson(res, 403, { error: 'Path not allowlisted' })
    return
  }

  if (relPath.includes('..') || relPath.startsWith('/')) {
    sendJson(res, 400, { error: 'Invalid path' })
    return
  }

  const fullPath = path.resolve(challenge.root, relPath)
  if (!fullPath.startsWith(challenge.root)) {
    sendJson(res, 400, { error: 'Path traversal blocked' })
    return
  }

  if (!(await fileExists(fullPath))) {
    sendJson(res, 404, { error: 'File not found' })
    return
  }

  const content = await fs.readFile(fullPath, 'utf8')
  sendJson(res, 200, { challengeId, path: relPath, content })
}

async function executeRun(runnerRunId, request) {
  const state = runs.get(runnerRunId)
  if (!state || state.cancelled || state.finished) {
    return
  }

  const challenge = CHALLENGES[request.challengeId]
  if (!challenge) {
    return
  }

  try {
    if (request.devOverrides) {
      validateOverrides(request.devOverrides, challenge.editablePaths)
    }

    const scenarioPath = path.resolve(challenge.scenariosDir, `${request.scenarioId}.json`)
    const scenario = JSON.parse(await fs.readFile(scenarioPath, 'utf8'))

    const result = await challenge.evaluator({
      scenario,
      config: request.config,
      overrides: request.devOverrides || {},
    })

    if (state.cancelled || state.finished) {
      return
    }

    const runDir = path.resolve(ARTIFACT_DIR, runnerRunId)
    await fs.mkdir(runDir, { recursive: true })

    const summaryPath = path.resolve(runDir, 'summary.json')
    const artifactsPath = path.resolve(runDir, 'artifacts.json')
    const logsPath = path.resolve(runDir, 'logs.txt')

    const extraFileLinks = []
    if (result.extraFiles && typeof result.extraFiles === 'object') {
      for (const [name, content] of Object.entries(result.extraFiles)) {
        const fullPath = path.resolve(runDir, name)
        await fs.mkdir(path.dirname(fullPath), { recursive: true })
        await fs.writeFile(fullPath, String(content), 'utf8')
        extraFileLinks.push({ label: name, url: fullPath })
      }
    }

    let overridesPatchUrl = undefined
    if (request.devOverrides && Object.keys(request.devOverrides).length > 0) {
      const patchPath = path.resolve(runDir, 'overrides.patch')
      await fs.writeFile(patchPath, createOverridePatch(request.devOverrides), 'utf8')
      overridesPatchUrl = patchPath
    }

    const artifacts = {
      ...result.artifacts,
      exports: [...(result.artifacts?.exports || []), ...extraFileLinks],
      overridesPatchUrl,
    }

    await fs.writeFile(summaryPath, JSON.stringify(result.summary, null, 2), 'utf8')
    await fs.writeFile(artifactsPath, JSON.stringify(artifacts, null, 2), 'utf8')
    await fs.writeFile(logsPath, result.logs || '', 'utf8')

    state.finished = true
    state.status = 'succeeded'

    await postWebhook({
      runId: state.runId,
      status: 'succeeded',
      summary: result.summary,
      artifacts,
      logsUrl: logsPath,
      runnerImageDigest: 'local-evaluator',
    })
  } catch (error) {
    state.finished = true
    state.status = 'failed'

    await postWebhook({
      runId: state.runId,
      status: 'failed',
      summary: {
        headline: 'Runner execution failed',
        checks: [
          {
            key: 'runner.execute',
            pass: false,
            message: error instanceof Error ? error.message : 'Unknown execution error',
          },
        ],
      },
      artifacts: {
        events: [{ t: 0, level: 'critical', message: error instanceof Error ? error.message : 'Unknown execution error' }],
      },
      runnerImageDigest: 'local-evaluator',
    })
  }
}

function createOverridePatch(overrides) {
  const lines = ['# Dev mode override snapshot']
  for (const [filePath, content] of Object.entries(overrides)) {
    lines.push(`\n--- ${filePath}`)
    lines.push(`+++ ${filePath}`)
    for (const line of String(content).split('\n')) {
      lines.push(`+${line}`)
    }
  }
  return lines.join('\n')
}

function validateOverrides(overrides, editablePaths) {
  let bytes = 0
  for (const [filePath, content] of Object.entries(overrides)) {
    if (!editablePaths.includes(filePath)) {
      throw new Error(`Override path not allowlisted: ${filePath}`)
    }
    if (filePath.includes('..') || filePath.startsWith('/')) {
      throw new Error(`Invalid override path: ${filePath}`)
    }
    bytes += Buffer.byteLength(String(content), 'utf8')
  }

  if (bytes > 160000) {
    throw new Error('Override payload too large')
  }
}

async function postWebhook(payload) {
  if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
    return
  }

  const raw = JSON.stringify(payload)
  const signature = createHmac('sha256', WEBHOOK_SECRET).update(raw).digest('hex')

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-sim-signature': `sha256=${signature}`,
      },
      body: raw,
    })
  } catch {
    // best effort
  }
}

async function fileExists(filePath) {
  try {
    await fs.stat(filePath)
    return true
  } catch {
    return false
  }
}
