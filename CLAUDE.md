# CLAUDE.md - sihlhack Project Instructions

## Project Overview

sihlhack.ch is Switzerland's first participant-oriented hackathon focused on digitalizing historical industrial records from the Sihl Valley.

## Tech Stack

- Next.js 16 with App Router
- TypeScript (strict mode)
- Tailwind CSS 3
- Vercel Postgres + Drizzle ORM
- Vercel Blob (file storage)
- Magic Link Auth via Resend
- Stripe Connect with Manual Payouts
- SWR for data fetching

## Multi-Agent Development System

This project uses independent agents that collaborate through discussion files before deployment.

### Agent Roles

Each agent has specific responsibilities:

| Agent | Responsibility | Slash Command |
|-------|---------------|---------------|
| Architect | System design, technical decisions, schema changes | `/architect` |
| Frontend | UI components, pages, styling, effects | `/frontend` |
| Backend | API routes, database queries, auth logic | `/backend` |
| Payment | Stripe integration, fund tracking, refunds | `/payment` |
| Reviewer | Code review, bug detection, security audit | `/reviewer` |
| Deployer | Deployment coordination, only after approval | `/deployer` |

### Discussion Protocol

Before any deployment:

1. **Agent Work Phase**: Each agent works independently on assigned tasks
2. **Discussion Phase**: Agents document findings in `.claude/discussions/`
3. **Review Phase**: `/reviewer` analyzes all changes and discussions
4. **Consensus Phase**: Issues must be resolved before deployment
5. **Deploy Phase**: `/deployer` proceeds only with approval

### Discussion File Format

```markdown
# Discussion: [Topic]
Date: YYYY-MM-DD
Agent: [agent-name]
Status: [open|resolved|blocked]

## Context
[What triggered this discussion]

## Findings
[What was discovered]

## Concerns
[Potential issues]

## Proposed Actions
[Recommended next steps]

## Responses
[Other agents add their input here]
```

## Writing Guidelines

### German Text
- Always use active voice (Aktiv), never passive (Passiv)
- Write directly with action-oriented verbs

### Punctuation
- Avoid em dashes, en dashes, hyphens in prose
- Use commas, colons, semicolons instead

## Code Standards

- All financial amounts in centimes (integer)
- Mobile-first responsive design
- Proper accessibility: focus states, ARIA labels
- No passwords anywhere: magic links only
- Public fund transparency at all times

## Key Files

- `/lib/db/schema.ts` - Drizzle database schema
- `/lib/auth.ts` - Magic link authentication
- `/lib/stripe.ts` - Stripe client and helpers
- `/lib/refunds.ts` - Automatic refund logic
- `/app/api/` - All API routes

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npx drizzle-kit push` - Push schema to database
- `npx drizzle-kit generate` - Generate migrations
