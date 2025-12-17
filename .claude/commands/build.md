# Build Command

Orchestrate a full build cycle with all agents. This command coordinates work across agents and ensures proper discussion before deployment.

## Usage

`/build [phase]` - Run a specific phase
`/build full` - Run complete build cycle

## Phases

1. `init` - Initialize project structure
2. `foundation` - Base components and layout
3. `auth` - Magic link authentication
4. `payment` - Stripe integration
5. `features` - Proposals, data catalog
6. `admin` - Admin dashboard
7. `review` - Full code review
8. `deploy` - Deployment (requires approval)

## Current Task

$ARGUMENTS

## Build Orchestration

### Phase: init
```
1. Architect: Define folder structure
2. Backend: Set up database schema
3. Frontend: Configure Tailwind and fonts
4. Discussion: Review architecture decisions
```

### Phase: foundation
```
1. Frontend: Build UI components (Button, Card, Input)
2. Frontend: Build layout components (Header, Footer)
3. Frontend: Build landing page sections
4. Architect: Review component structure
5. Discussion: Finalize design system implementation
```

### Phase: auth
```
1. Backend: Implement magic link generation
2. Backend: Implement token verification
3. Backend: Set up session handling
4. Frontend: Build auth pages
5. Reviewer: Security audit of auth flow
6. Discussion: Auth security review
```

### Phase: payment
```
1. Payment: Set up Stripe client
2. Payment: Implement checkout flow
3. Payment: Build webhook handlers
4. Payment: Implement fund tracker
5. Payment: Build refund automation
6. Reviewer: Payment security audit
7. Discussion: Payment flow review
```

### Phase: features
```
1. Backend: Proposal CRUD API
2. Backend: Voting API
3. Frontend: Proposal components
4. Frontend: Data catalog
5. Discussion: Feature completeness check
```

### Phase: admin
```
1. Backend: Admin API routes
2. Frontend: Admin dashboard
3. Architect: Review admin permissions
4. Reviewer: Admin security audit
5. Discussion: Admin access review
```

### Phase: review
```
1. Reviewer: Full codebase review
2. All agents: Address review findings
3. Discussion: Final review meeting
4. Reviewer: Approve or block
```

### Phase: deploy
```
1. Deployer: Verify all discussions resolved
2. Deployer: Run pre-flight checks
3. Deployer: Execute deployment
4. All agents: Post-deployment verification
```

## Output

After each phase, create a discussion file summarizing:
- What was completed
- Any issues found
- Decisions made
- Next steps
