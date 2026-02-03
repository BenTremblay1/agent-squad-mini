# SKILL: Reddit Monitor + Soft Outreach

**Owner:** Pepper (outreach)
**Status:** Draft — needs Reddit API credentials

## What this skill does

1. **Monitor** target subreddits for high-fit posts (keywords: "training matrix", "cert tracking", "OSHA spreadsheet", "compliance tracking", "expiring certifications", etc.)
2. **Score** each post for fit (ICP match, pain level, recency, engagement)
3. **Alert** Ben via Telegram with:
   - Post link
   - Why it's a fit (1-2 sentences)
   - Suggested reply (soft, helpful, non-salesy)
4. **Post** (after Ben approves) — either:
   - Ben edits + approves → Pepper posts via API
   - Or Ben posts manually (early stage)

## Subreddits to monitor

From Fury's research (001):
- r/SafetyProfessionals
- r/Construction
- r/OSHA (if exists)
- r/smallbusiness (for "compliance headache" posts)

Can expand based on what converts.

## Keyword triggers

**High intent:**
- "training matrix"
- "cert tracking"
- "certification expiration"
- "OSHA compliance spreadsheet"
- "safety training tracking"
- "GC audit"

**Medium intent:**
- "Excel for training"
- "how do you track certifications"
- "employee training records"
- "compliance nightmare"

## Reply guidelines (Reddit tone)

**DO:**
- Lead with genuine help (answer their question first)
- Share a relevant experience or tip
- Only mention product if directly relevant ("I actually built a small tool for this...")
- Ask if they'd want to try it (no hard sell)
- Keep it short (3-5 sentences max)

**DON'T:**
- Link drop without context
- Use marketing speak ("game-changing solution!")
- Post the same reply to multiple threads
- Pitch in threads where it's not a fit

## Example flow

**Post detected:**
> "How do you guys track OSHA certs for your crew? I've got 30 guys and an Excel sheet that's a disaster. GC keeps asking for training matrices and I'm scrambling every time."

**Alert to Ben (Telegram):**
```
🎯 Reddit fit detected (r/Construction)

Post: "How do you guys track OSHA certs for your crew?"
Link: https://reddit.com/r/Construction/...
Fit: Direct ICP (office manager, 30 employees, GC pressure, spreadsheet pain)

Suggested reply:
"Been there — Excel works until it doesn't. I ended up building a simple tracker that auto-alerts before certs expire and spits out a GC-ready PDF in about 30 seconds. Happy to share if you want to try it (it's just me, not a big company). DM me or I can drop a link."

[Approve] [Edit] [Skip]
```

**If approved:** Pepper posts via Reddit API.

## Technical requirements

1. **Reddit API credentials** (see setup doc)
   - Create Reddit "script" app at https://www.reddit.com/prefs/apps
   - Get: client_id, client_secret
   - Use Ben's Reddit account (or a dedicated account)

2. **Cron schedule**
   - Check subreddits every 2-4 hours (rate limits)
   - Use Reddit API `new` and `hot` endpoints

3. **State file** (prevent duplicate alerts)
   - `memory/reddit-seen-posts.json` — track post IDs we've already processed

4. **Telegram integration**
   - Use existing OpenClaw Telegram channel to send alerts
   - Include inline buttons for Approve/Edit/Skip (or just reply "approve"/"skip")

## Implementation phases

**Phase 1 (MVP):**
- Monitor + alert only (no auto-posting)
- Ben posts manually after seeing alert
- Validate that alerts are high-quality fits

**Phase 2:**
- Add "approve" flow (Ben replies "approve" → Pepper posts)
- Track which posts convert (clicked link, booked call)

**Phase 3:**
- Auto-post for certain high-confidence matches (with human review of suggested reply)
- Expand to other platforms (LinkedIn, Facebook groups, Twitter)

## Metrics to track

- Alerts sent per week
- % approved vs skipped
- Posts that got engagement (upvotes, replies)
- Clicks to landing page (use UTM: `?utm_source=reddit&utm_medium=comment`)
- Booked calls from Reddit traffic
