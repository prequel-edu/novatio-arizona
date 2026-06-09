# Arizona LP Changelog

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
