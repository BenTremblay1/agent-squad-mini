# Agent Squad (Mini)

A lightweight, file-first multi-agent setup to parallelize go-to-market work while keeping **Project A (CertMatrix)** as the priority.

## Goal
Stand up **2–3 specialized agents** that can run independently (via OpenClaw sessions + cron) and work from a shared workspace/task queue:
- Research → customer/competitor intel
- Content → landing pages, ads, sales collateral
- Outreach → follow-ups, scripts, lead ops

## Principles
- **File-first memory**: no “mental notes” — update `memory/WORKING.md` and task files.
- **One source of truth**: tasks live in `tasks/`.
- **Small squad first**: start with 2–3 agents, then expand.
- **Keep costs sane**: heartbeats on cheaper models; use Opus only when needed.

## Repo Structure
- `agents/` → SOUL + operating prompts per agent
- `tasks/` → task specs (Markdown)
- `memory/` → WORKING + daily notes templates
- `scripts/` → helpers (create tasks, run check-ins)
- `docs/` → architecture + setup guides

## Quick Start (planned)
1. Copy agent SOUL files into your OpenClaw workspace (or point agents at this repo as workspace)
2. Add cron heartbeats for each agent (staggered)
3. Seed `tasks/` with a few GTM tasks
4. Agents wake, read tasks, produce deliverables into `deliverables/`

> Next: add concrete setup commands + minimal orchestration.
