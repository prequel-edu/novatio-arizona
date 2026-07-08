# Arizona LP Changelog

## 2026-07-08 — Phone validation: reject fake/junk numbers
Google Performance Max was driving mass junk form fills with fake phones (`555-000-0000`, all-same-digit, 12-13 digit garbage). Two root causes: the form only required ≥10 digits (so `555-000-0000` passed), and the placeholder literally showed `(555) 000-0000`, training people/bots to submit it. Fix (chassis → rebuilt into all 3 variants): proper North-American-number validation — 10 digits, area + exchange must start 2-9, reject the 555 range, reject all-identical digits and straight sequences, strips a leading `+1` — with a clear inline error. Placeholder changed to "Your mobile number". Client-side only; a determined bot POSTing to the HubSpot API bypasses it (phase 2 = Twilio Lookup edge verification if needed). Context: 340 pmax ESA leads → 1 booked call, 27% grade-disqualified. Rollback: pre-change commit `1fdf02f`.

## 2026-07-08 — August 3 announcement bar + nav logo fix + ann.js hosting
**Deploy:** GitHub Pages, branch `main` → https://arizona.novatio.school
**Rollback point (pre-change commit):** `1820317`
- **Announcement bar** (chassis → all 4 pages): dark (#222625) full-width bar above nav, "Novatio Starts on August 3 - Enroll Now!", click scrolls to #apply-form. ⚠️ Copy swap due after Aug 3 (align with task-522 / SMS urgency swaps).
- **Nav logo fix:** old `687c2d0d...` Webflow CDN URL had been returning 403 (logo invisible via white-logo onerror fallback). Swapped to working `68872db3...` dark logo, removed the fallback.
- **ann.js (new file):** hosted here for novatio.school's Webflow announcement bar — pads body by bar height because that site's navbar is position:fixed. Referenced by `<script src="https://arizona.novatio.school/ann.js" defer>` inside the Webflow Navbar component. Do NOT delete when reverting LP changes.

## 2026-06-09 (follow-up) — Add "additional costs for support services" note
Per Roberta: state explicitly, anywhere support services are mentioned, that they carry additional costs and to speak to admissions for details (no prices on page). Added to: shared chassis IEP/504 FAQ (all 4 pages), every-learner SPED section note, every-learner "Does Novatio replace IEP services" FAQ, and every-learner dyslexia FAQ. Rollback point for this follow-up: commit `f9b8502`.

## 2026-06-09 — Team feedback (Karissa/Roberta) + SPED doc reconciliation + favicon + audio

**Deploy:** GitHub Pages, branch `main` → https://arizona.novatio.school
**Rollback point (pre-change commit):** `3500f52` ("Add email validation…")
**Rollback steps:** `git revert <this commit>` then `git push origin main`, OR `git reset --hard 3500f52 && git push --force origin main`. GitHub Pages redeploys on push (~1 min).

### Chassis (`index.html` → affects root + all 3 variants)
- **Audio fix:** "See it in action" videos. Root cause was discoverability — videos have audio and the unmute button worked, but it was a 40px corner circle on muted autoplay (browsers require muted autoplay). Replaced with a labeled "Tap for sound" pill (~154px) that collapses to a compact mute toggle after first tap.
- **Removed the Sample Schedule section** ("What does your student's day actually look like?") + its orphaned JS (`switchProfile`/`toggleSched`/profile init).
- **Favicon:** added `images/favicon.png` + `images/webclip.png` (downloaded from novatio.school Webflow CDN) and `<link>` tags in head.
- **ESA shared section + FAQ corrected** (Karissa): removed "$10,000 per student / $2,500 remaining balance / voucher". Now: scholarship account (explicitly "not a voucher"), every family qualifies, award amounts vary; cost card shows tuition $7,500 → paid from ESA → $0 out of pocket.
- **Shared IEP/504 FAQ corrected** (Karissa + SPED doc): removed the false claim that special-ed services are "fully covered by Arizona's IEP program… at no additional cost" and the misleading "reading interventionist support included" list. Replaced with accurate two-tier framing + Special Education Support Program + Dyslexia Intervention reference + outside-provider exclusions (no prices).

### `build-variants.mjs` (per-variant copy)
- **Homeschool:** removed "Arizona-certified teachers" in all 3 spots (hero, "What Novatio adds", FAQ) — we don't have AZ-certified teachers.
- **Every Learner:** reworded all "the AI calibrates" → plain language; removed false IEP-funding claim (body + FAQ); removed references to the deleted schedule section; reconciled the SPED section against the Special Education Support Program doc (two-tier: core vs. Special Education Support Program + Dyslexia Intervention; outside-provider exclusions; cost routed to admissions, no prices on page).
- **ESA:** rewrote hero, title, meta, "By The Numbers" stat, "Real Numbers" calculator (→ "How ESA Works" 3-step explainer with no fabricated dollar amounts), FAQ, and final CTA to remove the $10,000/$2,500/voucher premise.

### SPED pricing decision
Per Roberta (2026-06-09): reference the Special Education Support Program ($5,000/yr) and One-on-One Dyslexia Intervention ($10,000/yr) as available programs but **do not put the fees on the public LP** — route cost/fit to admissions. Source doc: Google Doc 17Ts0mrVE0McQiARKgVpcx4aTZxRhuWPBl9V9Z16bTBo.

### Verification
- Local build OK; cross-page grep sweep: 0 false-claim hits; doc-aligned phrases present on all 4 pages; favicon resolves; no broken images; tag balance OK.
- Audio unmute mechanism confirmed working on live site pre-change.
