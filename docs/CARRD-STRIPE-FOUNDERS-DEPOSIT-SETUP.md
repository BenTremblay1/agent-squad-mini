# Carrd + Stripe Founders Deposit (Validation Mode)

Goal: validate **willingness to pay** for CertMatrix before building the tool.

Offer:
- **$50 founders lifetime** (fully refundable deposit)
- Primary CTA = Stripe deposit
- Secondary CTA = email capture

---

## 1) Create the Stripe deposit link

1. Stripe Dashboard → **Payment Links** → New
2. Product name: `CertMatrix — Founders Lifetime (Refundable Deposit)`
3. Price: `$50.00`
4. Quantity: 1
5. Customer fields:
   - Email (required)
   - Name (optional)
6. Confirmation:
   - Set a **success/thank-you URL** (ideally your Carrd `/thanks` page)
7. Copy the Payment Link URL

**Refund note:** Be explicit on the landing page: “Fully refundable deposit.”

---

## 2) Build the Carrd page(s)

### Recommended: 2 pages (Search intent match)
- **LP-A:** Training Matrix / Proof of Training (GC-ready PDF)
- **LP-B:** Expiration Alerts / Cert Tracking

If you only do one page: use LP-A.

### Hero CTA wiring
- Primary button → Stripe Payment Link
- Microcopy under button:
  - “$50 refundable deposit • locks founders lifetime pricing”

### Secondary CTA (email capture)
- Use Carrd Form:
  - Field: email
  - Hidden field: `source=google_ads` (optional)
  - On submit: redirect to `/thanks-email`

---

## 3) Create Thank You pages (for tracking)

Create at least one Carrd thank-you page:
- `/thanks-deposit` (Stripe success URL target)
- `/thanks-email` (email form submit target)

Google Ads conversions should typically use:
- Primary conversion: `/thanks-deposit`
- Secondary conversion: `/thanks-email` (optional)

---

## 4) Tracking (minimal viable)

- Install Google tag / GTM on Carrd site
- Create a Google Ads conversion:
  - Website → Page view → URL contains `/thanks-deposit`

Verify with Tag Assistant.

---

## 5) Operating notes

- Keep refund language consistent and prominent.
- Do not promise features that aren’t built; phrase as “early access” / “we’ll onboard you first.”
- After ~150–300 clicks with no deposits (and no strong call/email signals), kill or pivot.
