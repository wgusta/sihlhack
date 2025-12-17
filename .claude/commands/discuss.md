# Discussion Command

Start or continue a discussion about a specific topic. This creates a discussion file that all agents can contribute to.

## Usage

`/discuss [topic]` - Create a new discussion
`/discuss review` - Review all open discussions
`/discuss resolve [filename]` - Mark a discussion as resolved

## Current Task

$ARGUMENTS

## Instructions

1. If creating a new discussion, generate a file in `.claude/discussions/` with format:
   `YYYY-MM-DD-[category]-[topic].md`

2. Categories:
   - `arch` - Architecture decisions
   - `ui` - User interface questions
   - `api` - API design
   - `pay` - Payment related
   - `sec` - Security concerns
   - `bug` - Bug reports
   - `feat` - Feature discussions

3. If reviewing discussions, list all files in `.claude/discussions/` and summarize their status.

4. If resolving, update the status field and add resolution notes.

## Discussion Template

```markdown
# Discussion: [Topic Title]

**Date:** YYYY-MM-DD
**Category:** [category]
**Initiated by:** [agent-name]
**Status:** open | in-progress | resolved | blocked

---

## Context

[What triggered this discussion? What problem are we solving?]

## Current Understanding

[What do we know so far?]

## Options Considered

### Option A: [Name]
- Pros:
- Cons:

### Option B: [Name]
- Pros:
- Cons:

## Concerns

- [ ] [Concern 1]
- [ ] [Concern 2]

## Agent Responses

### [Agent Name] - [Date]
[Response content]

---

## Resolution

**Decision:** [What was decided]
**Rationale:** [Why this decision]
**Action Items:**
- [ ] [Action 1]
- [ ] [Action 2]
```
