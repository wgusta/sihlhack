import dotenv from 'dotenv'
import { defineConfig, devices } from '@playwright/test'

dotenv.config({ path: '.env.local' })

const host = process.env.PLAYWRIGHT_HOST || '127.0.0.1'
const port = Number(process.env.PLAYWRIGHT_PORT || 3005)
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://${host}:${port}`

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: `NEXT_DIST_DIR=.next-playwright NEXT_PUBLIC_ENABLE_SIM_DASHBOARD=true NEXT_PUBLIC_ENABLE_SIM_3D=true npm run dev -- --hostname ${host} --port ${port}`,
    url: `${baseURL}/auth/login`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
