# Google Ads Validation Checklist (Project A / CertMatrix)

Goal: validate **willingness to pay** *before* building the full tool.

This checklist assumes:
- We have a **landing page** with strong keyword → headline message match.
- The product is not fully built.
- Success = real signals of payment intent (best), or at least high-intent lead signals.

---

## 0) Decide the validation conversion (no-product mode)

Pick **one primary conversion** for Google Ads Search.

**Best (true WTP):**
- **Paid deposit / pre-order** (Stripe Payment Link)
  - Example: “$50 refundable deposit to lock founder pricing + priority setup”

**Good (strong intent):**
- **Book a 15-min setup call** (Calendly)

**Okay (weaker intent):**
- Email capture (“Get notified”) or template download

**Recommendation for fastest clarity:** Deposit (best) → if too aggressive, use call booking.

Write down:
- Primary conversion event name:
- Target conversion rate (CVR):
- Target cost per conversion (CPA):

---

## 1) Prereqs (before you open Google Ads)

### Landing page requirements
- A dedicated Search variant with headline matching the top intent cluster:
  - “training matrix software”
  - “proof of training / audit ready”
  - “cert tracking / expiration alerts”
- Clear promise + what happens next
- One primary CTA (self-serve / deposit / book call)
- Remove/avoid unverified claims (e.g., “100% audit pass rate”, “GC portal access” unless true)

### Tracking requirements
You need at least one measurable event.

Options:
- Google tag (gtag)
- Google Tag Manager (GTM)
- GA4 + import conversions (ok but slower to debug)

For MVP, easiest is: **GTM + a thank-you page**.

---

## 2) Create the Google Ads account (one-time)

1. Go to: https://ads.google.com/
2. Create account → choose **Expert Mode** (avoid Smart campaign traps)
3. Add billing
4. Set timezone + currency correctly (hard to change later)

---

## 3) Set up conversion tracking (critical)

### Option A (recommended): Thank-you page conversion
1. Create a “thank-you” URL (e.g., `/thanks`)
2. In Google Ads:
   - Tools & Settings → Conversions → New conversion action
   - Website → use URL-based conversion → “Page load” on `/thanks`
3. Install the tag via GTM

### Option B: Button click conversion (if no thank-you page)
- Track a click on the primary CTA button
- Note: easier to fake + less reliable for WTP validation

**Verify:** Use Google Tag Assistant (Chrome extension) to confirm firing.

---

## 4) Campaign structure (keep it simple)

Start with **1 Search campaign** and **2–3 ad groups**.

Suggested ad groups:
1) Training Matrix (core)
2) Proof of Training / Audit Ready
3) Expiration Alerts / Cert Tracking

Match types (week 1):
- **Exact + Phrase** only
- Add Broad later *only* after negatives + search term review

Locations:
- Start tight (your chosen geo) rather than “United States” everywhere

---

## 5) Write the ads (RSAs)

Per ad group:
- 1–2 Responsive Search Ads
- Pin headline #1 to maintain message match

Minimum assets:
- 8–10 headlines
- 3–4 descriptions

Rules:
- Lead with the *deliverable* (“GC-ready PDF training matrix”) not features
- Include “No credit card” if true
- Include “Import your spreadsheet” if true

---

## 6) Add extensions (quick conversion lifts)

- Sitelinks (e.g., “Sample PDF”, “How it works”, “Pricing”, “FAQ”)
- Callouts (e.g., “PDF export”, “Expiry alerts”, “Spreadsheet import”)
- Structured snippet (e.g., “Cert Types: OSHA, SST, Forklift…” only if true)

---

## 7) Negatives + guardrails

Day-0 negatives to consider:
- free
- template
- excel
- pdf (careful: may exclude high intent if your offer is PDF)
- training courses
- online training
- certification classes

Add negatives *based on actual search terms*, not guesses.

---

## 8) Budget + bidding (validation mode)

Goal is learning, not efficiency.

- Start: **Max Clicks** with a CPC cap (so you don’t get wrecked)
- Once you have conversions: switch to **Max Conversions**

Budget guidance:
- If clicks are $3–$12, plan for at least 30–60 clicks per ad group before judging.

Kill criteria (example):
- After 150–300 clicks, if **0 qualified conversions**, kill or pivot keyword/offer.

---

## 9) Launch checklist

Before enabling:
- [ ] Conversion fires reliably
- [ ] Landing page loads fast + mobile looks good
- [ ] Location + schedule correct
- [ ] Ads approved
- [ ] Negatives present

Enable campaign → monitor first 2–4 hours for weird spend.

---

## 10) Daily/weekly operating loop (what to do after launch)

Daily (first 7 days):
- Search terms report → add negatives
- Pause keywords with spend but obviously wrong intent
- Check conversion tracking

Weekly:
- Promote winners (best ad group/keywords)
- Create 1 new landing headline variant for the best-performing intent cluster

---

## Attachments (where to store outputs)

Create files in `deliverables/project-a-certmatrix/`:
- `google-ads-setup-notes.md`
- `google-ads-search-terms-week1.csv`
- `google-ads-results-week1.md` (clicks, CPC, conversions, CPA, notes)
