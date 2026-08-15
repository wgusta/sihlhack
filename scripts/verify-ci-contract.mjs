import fs from 'node:fs'

const ci = fs.readFileSync('.github/workflows/design-system.yml', 'utf8')

const requireText = (text, value) => {
  if (!text.includes(value)) throw new Error(`missing CI contract: ${value}`)
}

for (const command of [
  'npm ci',
  'npm audit --omit=dev --audit-level=high',
  'npm run lint',
  'npm run typecheck',
  'npm run check:design-tokens',
  'npm run lint:tokens',
  'npx --no-install playwright install --with-deps chromium',
  'npm run test:sim:smoke -- --reporter=line',
  'npm run build',
]) requireText(ci, command)

if (ci.includes('npm install\n')) throw new Error('CI must use npm ci')
requireText(ci, 'POSTGRES_URL: ${{ secrets.SIHLHACK_CI_POSTGRES_URL }}')
if ((ci.match(/if: env\.POSTGRES_URL != ''/g) ?? []).length !== 2) {
  throw new Error('DB-backed smoke steps must require the isolated CI database')
}
if (ci.includes('secrets.POSTGRES_URL')) {
  throw new Error('CI must not use a production-style DB credential')
}
console.log('CI contract verified')
