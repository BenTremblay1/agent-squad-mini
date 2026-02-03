# API-First Setup (Reddit, Meta/Facebook, Google Ads)

Goal: reduce reliance on flaky browser automation by using APIs whenever possible.

---

## 1) Reddit API (for monitoring + posting)

### What we need
- Reddit account (Ben’s or a dedicated outreach account)
- Create a Reddit app (type: **script**)
- Credentials:
  - `REDDIT_CLIENT_ID`
  - `REDDIT_CLIENT_SECRET`
  - `REDDIT_USERNAME`
  - `REDDIT_PASSWORD`
  - `REDDIT_USER_AGENT` (e.g. `certmatrix-monitor/0.1 by u/<username>`)

### Setup steps
1. Go to: https://www.reddit.com/prefs/apps
2. Click **create app** or **create another app**
3. Name: `certmatrix-monitor`
4. Type: **script**
5. Redirect URI: `http://localhost:8080` (not used for script, but required)
6. Create app
7. Copy client id (under the app name) + secret

### Notes
- Script apps allow password grant (username/password) which is easiest for automation.
- Rate limits exist. Keep checks to every 2–4 hours per subreddit and store seen IDs.

---

## 2) Meta Marketing API (Facebook/Instagram Ads)

### What we need
- Meta Business Manager
- Ad account access
- Meta App in Meta for Developers
- OAuth token with ads permissions

### Credentials
- `META_APP_ID`
- `META_APP_SECRET`
- `META_ACCESS_TOKEN` (long-lived)
- `META_AD_ACCOUNT_ID` (act_XXXX)

### Setup steps (high level)
1. Go to: https://developers.facebook.com/
2. Create App (Business type)
3. Add product: **Marketing API**
4. Use Graph API Explorer to generate token with permissions:
   - `ads_management`
   - `ads_read`
   - `business_management`
5. Exchange for long-lived token

### Notes
- Meta’s API is powerful but setup is annoying (permissions + review). We can still create campaigns manually and just use API for reporting initially.

---

## 3) Google Ads API

### What we need
- Google Ads account
- OAuth client (Google Cloud)
- Google Ads API access (developer token)

### Credentials
- `GOOGLE_ADS_DEVELOPER_TOKEN`
- `GOOGLE_ADS_CLIENT_ID`
- `GOOGLE_ADS_CLIENT_SECRET`
- `GOOGLE_ADS_REFRESH_TOKEN`
- `GOOGLE_ADS_CUSTOMER_ID`

### Setup steps (high level)
1. Create a Google Cloud project
2. Enable Google Ads API
3. Create OAuth consent screen
4. Create OAuth client ID (Desktop)
5. Generate refresh token for the account
6. Request developer token in Google Ads UI

### Notes
- Google Ads API is great for automation/reporting, but can be overkill early.
- Practical plan: start by using API for **reporting** and keep creation manual until we validate.

---

## Recommended Implementation Order

1) **Reddit API** first (fastest) → monitoring + alerting
2) **Playwright persistent context** for anything that still needs UI
3) Meta/Google APIs for reporting later

---

## Environment file

We’ll store secrets in `.env` locally (NOT committed). Example:

```bash
# Reddit
REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=
REDDIT_USERNAME=
REDDIT_PASSWORD=
REDDIT_USER_AGENT=

# Meta
META_APP_ID=
META_APP_SECRET=
META_ACCESS_TOKEN=
META_AD_ACCOUNT_ID=

# Google Ads
GOOGLE_ADS_DEVELOPER_TOKEN=
GOOGLE_ADS_CLIENT_ID=
GOOGLE_ADS_CLIENT_SECRET=
GOOGLE_ADS_REFRESH_TOKEN=
GOOGLE_ADS_CUSTOMER_ID=
```
