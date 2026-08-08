import fs from 'node:fs'

const ci = fs.readFileSync('.github/workflows/design-system.yml', 'utf8')
const deploy = fs.readFileSync('.github/workflows/production.yml', 'utf8')

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
  'npm run build',
]) requireText(ci, command)

requireText(deploy, "types: [completed]")
requireText(deploy, "conclusion == 'success'")
requireText(deploy, '--prebuilt --prod --skip-domain')
requireText(deploy, 'vercel@58.9.0 promote')

if (ci.includes('npm install\n')) throw new Error('CI must use npm ci')
if (ci.includes('POSTGRES_URL:')) throw new Error('CI must not use a production-style DB credential')
console.log('CI contract verified')
