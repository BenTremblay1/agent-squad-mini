# Carrd + Puppeteer (local automation)

Goal: automate Carrd page edits without using OpenClaw Browser Relay.

> Note: Automating Carrd may conflict with Carrd ToS. Use responsibly. If Carrd adds bot detection/2FA, prefer manual edits.

## Setup

From this folder:

```bash
npm install
```

## Run (opens a browser)

```bash
node open-carrd.js
```

This will launch Chrome and keep it open so you can log in manually.

## Persistent login

This script saves browser state to `./.profile/` so you should stay logged in across runs.

- Delete `./.profile/` to reset.

## Next

Once you’re logged in, we can extend the script to:
- click through to a specific site
- edit headline/body
- publish
