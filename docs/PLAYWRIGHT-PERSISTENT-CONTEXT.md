# Playwright Persistent Context (Local Chrome)

Goal: keep a stable, logged-in browser context that automation can reuse, without relying on Browser Relay.

## Why persistent context helps
- Keeps cookies/sessions between runs
- Avoids repeated logins
- Reduces "tab not found"/relay flakiness
- Works well for sites that don't have APIs (or where API auth is painful)

## Recommended approach
Use Playwright with a **persistent user data directory**.

### Install
```bash
cd ~/.openclaw/workspace/agent-squad
npm init -y
npm i -D playwright
npx playwright install chrome
```

### Create a persistent browser profile
Create a script `scripts/launch-chrome-persistent.ts`:
- Launches Chrome with `userDataDir` stored inside the repo (ignored by git)
- Opens a page and keeps it running

Example:
```ts
import { chromium } from 'playwright';

async function main() {
  const context = await chromium.launchPersistentContext(
    './.pw-user-data',
    {
      channel: 'chrome',
      headless: false,
      args: ['--disable-blink-features=AutomationControlled'],
    }
  );

  const page = await context.newPage();
  await page.goto('https://www.reddit.com');
  console.log('Persistent Chrome running. Log in manually if needed.');
}

main();
```

### Run
```bash
node --loader ts-node/esm scripts/launch-chrome-persistent.ts
```

(We can also do plain JS if you prefer.)

## How we’ll use it
- First run: open, log in manually (Reddit, FB, Google)
- Future automations: reuse the same `./.pw-user-data` directory

## Notes
- Add `/.pw-user-data/` to `.gitignore`
- This is local-only; safe as long as the machine is trusted
- Some sites may still throw CAPTCHAs; persistent context reduces how often

## Next step
Once you confirm you want this wired into OpenClaw tools, we can:
- create a lightweight local "browser worker" script
- have agents call it via shell commands (safe, controlled)
