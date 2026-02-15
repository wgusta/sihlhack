import { createHmac, timingSafeEqual } from 'crypto'

export function verifySimWebhookSignature(rawBody: string, signatureHeader: string | null): boolean {
  const secret = process.env.SIM_RUNNER_WEBHOOK_SECRET
  if (!secret || !signatureHeader) {
    return false
  }

  const expected = createHmac('sha256', secret).update(rawBody).digest('hex')
  const provided = signatureHeader.replace(/^sha256=/, '')

  const expectedBuffer = Buffer.from(expected)
  const providedBuffer = Buffer.from(provided)

  if (expectedBuffer.length !== providedBuffer.length) {
    return false
  }

  return timingSafeEqual(expectedBuffer, providedBuffer)
}
