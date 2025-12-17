# Multi-Agent Development System

This project uses a multi-agent system where specialized agents work independently and collaborate through discussions before deployment.

## Quick Start

```bash
# Check project status
/status

# Start a discussion
/discuss [topic]

# Run specific agent
/architect [task]
/frontend [task]
/backend [task]
/payment [task]
/reviewer [task]

# Build phases
/build init
/build foundation
/build auth
/build payment
/build features
/build admin
/build review
/build deploy
```

## Agent Roles

| Agent | Focus | Slash Command |
|-------|-------|---------------|
| Architect | System design, schema | `/architect` |
| Frontend | UI, pages, effects | `/frontend` |
| Backend | API, database, auth | `/backend` |
| Payment | Stripe, funds, refunds | `/payment` |
| Reviewer | Code review, security | `/reviewer` |
| Deployer | Deployment coordination | `/deployer` |

## Workflow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Agent     │────▶│  Discussion │────▶│   Review    │
│   Work      │     │   Phase     │     │   Phase     │
└─────────────┘     └─────────────┘     └─────────────┘
                                              │
                    ┌─────────────┐           │
                    │   Deploy    │◀──────────┘
                    │   (if OK)   │
                    └─────────────┘
```

## Discussion Protocol

1. **Create Discussion**: Any agent can start a discussion
   ```
   /discuss new payment webhook security
   ```

2. **Contribute**: Other agents add responses
   ```
   /discuss respond 2024-01-15-pay-webhook.md
   ```

3. **Resolve**: Mark as resolved when consensus reached
   ```
   /discuss resolve 2024-01-15-pay-webhook.md
   ```

## Deployment Rules

Deployment is BLOCKED if:
- Any discussion has `status: open` or `status: blocked`
- Reviewer has not approved
- Build fails
- Security issues exist

## File Structure

```
.claude/
├── commands/           # Agent slash commands
│   ├── architect.md
│   ├── frontend.md
│   ├── backend.md
│   ├── payment.md
│   ├── reviewer.md
│   ├── deployer.md
│   ├── discuss.md
│   ├── status.md
│   └── build.md
└── discussions/        # Discussion files
    └── YYYY-MM-DD-[category]-[topic].md

.agents/
├── config.json         # Agent configuration
└── README.md           # This file
```

## Example Session

```bash
# 1. Start with architecture
/architect design the magic link auth flow

# 2. Backend implements
/backend implement magic link generation

# 3. Start discussion about security
/discuss new auth token-expiry-time

# 4. Frontend builds UI
/frontend create login and verify pages

# 5. Review the auth implementation
/reviewer audit auth flow

# 6. Check status
/status

# 7. Deploy if ready
/build deploy
```
