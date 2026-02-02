# Architecture (Mini Squad)

## What we’re building
A **simple orchestration layer** for OpenClaw agents that behaves like a tiny “Mission Control” without a database/UI:

- Shared task queue in git (`tasks/*.md`)
- Shared working memory (`memory/WORKING.md`)
- Agents produce artifacts in (`deliverables/`)

## Agent Loop (Heartbeat)
On wake:
1. Read `memory/WORKING.md`
2. Scan `tasks/` for:
   - Assigned tasks
   - Unassigned tasks matching role
3. Pick one task (or continue current)
4. Write progress to:
   - `deliverables/<task>/<artifact>.md`
   - update `tasks/<task>.md` status block
   - update `memory/WORKING.md`
5. If nothing: report `HEARTBEAT_OK`

## Task Format
Each task is a Markdown file with:
- Owner (agent)
- Status (INBOX | IN_PROGRESS | REVIEW | DONE | BLOCKED)
- Acceptance criteria
- Links

## Why file-first
- zero infra
- diffs are reviewable
- easy to merge into Project A workflow

## Future upgrades
- Move tasks to a DB (Convex/Supabase)
- Add a UI
- Notifications + subscriptions
