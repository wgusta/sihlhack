import type { CreateSimRunRequest, SimWebhookCompleteRequest } from '@/types/sim'

function getRunnerConfig() {
  const baseUrl = process.env.SIM_RUNNER_URL
  const apiKey = process.env.SIM_RUNNER_API_KEY

  if (!baseUrl || !apiKey) {
    throw new Error('SIM runner not configured')
  }

  return { baseUrl, apiKey }
}

export async function submitRunnerRun(payload: {
  runId: string
  participantId: string
  request: CreateSimRunRequest
}): Promise<{ runnerRunId: string }> {
  const { baseUrl, apiKey } = getRunnerConfig()
  const response = await fetch(`${baseUrl}/v1/runs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const message = await safeReadText(response)
    throw new Error(`Runner submit failed: ${response.status} ${message}`)
  }

  return response.json()
}

export async function cancelRunnerRun(runnerRunId: string): Promise<void> {
  const { baseUrl, apiKey } = getRunnerConfig()
  const response = await fetch(`${baseUrl}/v1/runs/${encodeURIComponent(runnerRunId)}/cancel`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })

  if (!response.ok) {
    const message = await safeReadText(response)
    throw new Error(`Runner cancel failed: ${response.status} ${message}`)
  }
}

export async function fetchRunnerChallengeFile(challengeId: string, filePath: string): Promise<{
  path: string
  content: string
}> {
  const { baseUrl, apiKey } = getRunnerConfig()
  const response = await fetch(
    `${baseUrl}/v1/challenges/${encodeURIComponent(challengeId)}/files?path=${encodeURIComponent(filePath)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  )

  if (!response.ok) {
    const message = await safeReadText(response)
    throw new Error(`Runner file fetch failed: ${response.status} ${message}`)
  }

  return response.json()
}

export function parseWebhookPayload(payload: unknown): SimWebhookCompleteRequest {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Invalid payload')
  }
  return payload as SimWebhookCompleteRequest
}

async function safeReadText(response: Response): Promise<string> {
  try {
    return await response.text()
  } catch {
    return 'unknown error'
  }
}
