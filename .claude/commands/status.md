# Status Command

Get a comprehensive status report of the project, including all agent activities and open discussions.

## Current Task

$ARGUMENTS

## Instructions

Generate a status report by checking:

1. **Open Discussions**
   - List all files in `.claude/discussions/` with status != resolved
   - Summarize each discussion's topic and current state

2. **Recent Changes**
   - Check git status for uncommitted changes
   - List recently modified files

3. **Build Status**
   - Check if `package.json` exists
   - Note any obvious issues

4. **Deployment Readiness**
   - Count open vs resolved discussions
   - Check if Reviewer has approved
   - Note any blocking issues

## Output Format

```markdown
# Project Status Report
Generated: YYYY-MM-DD HH:MM

## Overall Health
[🟢 Ready | 🟡 In Progress | 🔴 Blocked]

## Open Discussions ([count])
| File | Topic | Status | Initiated | Age |
|------|-------|--------|-----------|-----|
| ... | ... | ... | ... | ... |

## Pending Agent Tasks
- [ ] [Agent]: [Task]

## Recent Activity
- [timestamp] [agent] [action]

## Blockers
- [blocker description]

## Next Steps
1. [Recommended action]
2. [Recommended action]

## Deployment Readiness
- Discussions resolved: [X/Y]
- Reviewer approved: [Yes/No]
- Build passing: [Yes/No]
- Ready to deploy: [Yes/No]
```
