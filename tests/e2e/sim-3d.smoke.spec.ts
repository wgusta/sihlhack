import { randomUUID } from 'crypto'
import { sql } from '@vercel/postgres'
import { expect, test } from '@playwright/test'

function createSessionToken(participantId: string): string {
  const payload = {
    id: participantId,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
  }
  return Buffer.from(JSON.stringify(payload)).toString('base64url')
}

async function createParticipant(): Promise<string> {
  const email = `sim-smoke-${Date.now()}-${randomUUID()}@example.test`
  const result = await sql<{ id: string }>`
    insert into participants (email, registration_status)
    values (${email}, 'paid')
    returning id
  `
  const participantId = result.rows[0]?.id
  if (!participantId) {
    throw new Error('Failed to create smoke-test participant')
  }
  return participantId
}

async function deleteParticipant(participantId: string): Promise<void> {
  await sql`
    delete from participants
    where id = ${participantId}
  `
}

test('renders simulation dashboard with 3D layer', async ({ context, page, baseURL }) => {
  if (!baseURL) {
    throw new Error('Missing Playwright baseURL')
  }

  const participantId = await createParticipant()
  try {
    await context.addCookies([
      {
        name: 'sihlhack_session',
        value: createSessionToken(participantId),
        url: baseURL,
        httpOnly: true,
        sameSite: 'Lax',
      },
    ])

    await page.goto('/dashboard/sim')

    await expect(page.getByRole('heading', { name: 'Simulation Dashboard' })).toBeVisible()
    await expect(page.locator('[data-feature="sim3d.legend.nodes"]')).toBeVisible()
    await expect(page.locator('[data-feature="sim3d.legend.flows"]')).toBeVisible()

    const sceneCanvas = page.locator('[data-feature="sim3d.scene.canvas"]')
    const webGlFallback = page.getByText('WebGL unavailable: falling back to 2D visualization.')

    await Promise.race([
      sceneCanvas.waitFor({ state: 'visible', timeout: 10_000 }),
      webGlFallback.waitFor({ state: 'visible', timeout: 10_000 }),
    ])

    await page.getByRole('button', { name: /Grid-OS/i }).click()
    await expect(page.locator('[data-feature="sim3d.node.grid"]')).toBeVisible()
    if (await sceneCanvas.isVisible()) {
      await expect(page.locator('[data-feature="sim3d.mode-banner"]')).toContainText('Mode:')
    }
  } finally {
    await deleteParticipant(participantId)
  }
})
