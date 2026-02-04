# CertMatrix — Carrd landing pages (Search validation)

Purpose: give Ben **copy + layout** he can paste into Carrd quickly for Google Ads validation.

We’ll build **two** Carrd pages (or two variants of the hero on one page) to maximize message match:

- **LP-A (Training Matrix / GC-ready PDF)** — best for: `training matrix software`, `construction training matrix`, `proof of training`
- **LP-B (Expiration alerts / cert tracking)** — best for: `certification tracking software`, `cert expiration tracking`, `renewal reminders`

Both are **self-serve-first** (generate PDF / start trial), since product isn’t built yet.

> IMPORTANT: Because the tool isn’t built, the CTA should validate willingness-to-pay:
> - Best: **Stripe deposit / pre-order**
> - Good: **book a call**
> - Weak: email capture

---

## Shared build rules (Carrd)

### Page settings
- Mobile-first: keep hero tight (headline, 2–3 bullets, 1 primary CTA)
- Remove any unverified claims (e.g., “100% audit pass rate”, “GC portal access” unless true)
- One primary CTA per page

### Recommended components
- Hero (headline, subhead, bullets, CTA)
- Social proof / trust block (keep modest if early)
- “Show the output” block (image of GC-ready PDF — even a mock)
- How it works (3 steps)
- FAQ (6–8)
- Bottom CTA

### Tracking requirement (for Google Ads)
- Create a **Thank You** section or a separate `/thanks` page to use for conversion tracking.

---

## LP-A: GC-ready Training Matrix PDF (Search intent)

### Hero
**Headline (H1):** Generate a GC‑Ready Training Matrix PDF in 30 Seconds

**Subhead:** Stop scrambling for proof of training. Import your spreadsheet and export a clean matrix you can send to the GC today.

**Bullets (3):**
- 1‑click PDF export (GC-ready)
- Expiration alerts (60/30/7 days)
- Dashboard: compliant / expiring / overdue

**Primary CTA button:** Get Early Access / Generate My Matrix

**CTA microcopy:** No credit card today • Works with your Excel/CSV

### Problem block (GC moment)
**Title:** “Can you send the training matrix by end of day?”
**Body:** That message turns into hours of digging through spreadsheets, email chains, and expired cards. CertMatrix makes the PDF in seconds.

### Proof block (show the PDF)
- Add an image placeholder: “GC-ready PDF preview”
- Caption: “This is what the GC expects to see.”

### How it works (3 steps)
1) Upload your roster (CSV/Excel)
2) Pick cert types + renewal periods
3) Export the PDF + get expiry reminders

### Pricing / validation offer
Pick ONE:
- **Option A (best validation):** “Founders: $50 refundable deposit to lock founder pricing + priority onboarding.”
- **Option B:** “Book a 15‑min setup call (free).”

### FAQ (use these 6)
- What certifications can I track?
- Can you import my existing spreadsheet?
- What does ‘GC‑ready’ mean?
- How do expiration alerts work?
- Do you integrate with payroll/HR?
- Can I cancel?

### Bottom CTA
Repeat same button + microcopy.

---

## LP-B: Certification tracking + expiration alerts (Search intent)

### Hero
**Headline (H1):** Know who’s trained, who’s overdue, and what’s about to expire

**Subhead:** CertMatrix tracks renewals and sends 60/30/7 day alerts—so you don’t find out at the gate that a card expired.

**Bullets (3):**
- Renewal reminders before it’s a jobsite problem
- Export an audit-ready / GC-ready matrix PDF
- Simple status dashboard (green/yellow/red)

**Primary CTA button:** Get Early Access / Start Tracking Certs

**CTA microcopy:** Built for subcontractors • Import from Excel/CSV

### Pain block
**Title:** One expired card can shut down a crew.
**Body:** Spreadsheets drift. CertMatrix keeps cert status current and makes proof-of-training exports instant.

### How it works
Same 3-step block as LP-A.

### Validation offer + FAQ
Same as LP-A.

---

## What I need from Ben to finalize in Carrd

1) Choose the validation CTA:
- Stripe deposit/pre-order OR book-a-call OR email capture

2) Provide (or confirm) what’s true today:
- “No credit card” true/false
- Spreadsheet import true/false
- Expiration alerts true/false (or “coming soon”)

3) Provide brand basics (optional but helps conversion):
- Logo (or wordmark)
- Primary color

---

## Implementation note
If Carrd automation becomes brittle, use Puppeteer only to open Carrd + keep a persistent session, and do the final edits manually (fastest + lowest risk).
