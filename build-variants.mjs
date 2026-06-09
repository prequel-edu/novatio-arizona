#!/usr/bin/env node
// build-variants.mjs — Novatio AZ 3-Variant LP generator
// Modeled on the Unbound /tmp/unbound-lp/build-variants.mjs pattern.
//
// Reads index.html (chassis), produces 3 variant files at:
//   homeschool/index.html
//   every-learner/index.html
//   esa/index.html
//
// Usage: node build-variants.mjs
// Run again after editing CHASSIS index.html OR the variant config below
// to regenerate all 3 variants. If you edit a variant HTML directly, the
// next run will overwrite your changes. Always edit:
//   - index.html for shared chassis changes
//   - This file's `variants` config for per-variant copy

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const chassis = readFileSync(join(__dirname, 'index.html'), 'utf8');

// ─────────────────────────────────────────────────────────────────────
// Per-variant config — edit this block to iterate copy
// ─────────────────────────────────────────────────────────────────────

const variants = {
  homeschool: {
    formGuid: '936ea684-fd1d-4b9b-9800-e5a2d87bd2d7',
    lpVariant: 'homeschool',
    title: 'Novatio Arizona | Homeschool, with Real Support | Grades 4-8',
    metaDesc: 'Arizona homeschool families: Novatio adds real teachers and a daily community. Mornings of live instruction, afternoons stay yours. ESA-funded.',
    canonical: 'https://arizona.novatio.school/homeschool/',
    hero: {
      eyebrow: '🌵 Arizona ESA · Grades 4–8 · For Homeschool Families',
      h1Html: '<u>Homeschool</u>, with real support.',
      subhead: `You love the flexibility. Your child loves learning at their own pace. Novatio adds daily live instruction from real teachers and a community of homeschool families without taking over your day. <strong>Funded by Arizona's ESA at no cost to your family.</strong>`,
      primaryCta: 'See if Novatio fits your family →',
      secondaryCta: null,
    },
    stickyMobileCta: 'See if Novatio fits →',
    defaultScheduleProfile: 'aiden',
    bodySection1Html: `
<!-- BODY SECTION 1 - /homeschool: From homeschool to Novatio -->
<section class="section section-warm" style="padding:72px 0;">
  <div class="container">
    <div style="text-align:center;max-width:780px;margin:0 auto 40px;">
      <div class="section-label">For Homeschool Families</div>
      <h2 class="section-h2" style="margin-bottom:12px;">From homeschool to Novatio (without losing what worked).</h2>
      <p style="font-size:16px;color:var(--muted);line-height:1.75;">Most of our families came from homeschool. They tell us the same thing: they wanted real teachers their child could see every day. A live community. A program that grows with their student. What they didn't want was to give up the flexibility, the family time, or the relationship they've built with their child's learning.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:980px;margin:0 auto;">
      <div style="background:#fff;border-radius:18px;padding:28px;border-left:4px solid var(--orange);box-shadow:0 4px 16px rgba(0,0,0,.06);">
        <p style="font-size:16px;font-style:italic;color:var(--dark);line-height:1.7;margin-bottom:14px;">"He is given an AI personalized academic plan. He is motivated to complete his assignments daily. The teachers are fun, enthusiastic, and they connect with the students. Novatio is a great option for families looking for a more structured homeschooling environment."</p>
        <p style="font-size:13px;font-weight:700;color:var(--muted);">- Arizona parent of a 4th-grade Novatio student</p>
      </div>
      <div style="background:#fff;border-radius:18px;padding:28px;border-left:4px solid var(--orange);box-shadow:0 4px 16px rgba(0,0,0,.06);">
        <p style="font-size:16px;font-style:italic;color:var(--dark);line-height:1.7;margin-bottom:14px;">"I really like how I can learn at my own pace, and be able to go ahead of my grade."</p>
        <p style="font-size:13px;font-weight:700;color:var(--muted);">- Sophie, Novatio Student</p>
      </div>
    </div>
  </div>
</section>
`,
    bodySection2Html: `
<!-- BODY SECTION 2 - /homeschool: Keep / Add panel -->
<section class="section section-white" style="padding:72px 0;">
  <div class="container">
    <div style="text-align:center;max-width:780px;margin:0 auto 36px;">
      <div class="section-label">What Stays. What's New.</div>
      <h2 class="section-h2" style="margin-bottom:12px;">What you keep. What we add.</h2>
      <p style="font-size:16px;color:var(--muted);line-height:1.75;">You've already built something good. We're not asking you to give it up. Novatio handles the part of homeschooling that drains most parents while leaving the part you love intact.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;max-width:980px;margin:0 auto;border-radius:18px;overflow:hidden;border:1.5px solid var(--border);">
      <div style="background:var(--warm);padding:32px;">
        <h3 style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;color:var(--dark);margin-bottom:18px;">What you keep</h3>
        <ul style="list-style:none;padding:0;margin:0;">
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">Your child learns at their own pace</li>
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">Afternoons are family time</li>
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">You stay involved in their education</li>
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">Flexibility around appointments, travel, faith</li>
          <li style="padding:10px 0;font-size:15px;color:var(--dark);line-height:1.6;">Your community</li>
        </ul>
      </div>
      <div style="background:#fff;padding:32px;border-left:1.5px solid var(--border);">
        <h3 style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;color:var(--orange);margin-bottom:18px;">What Novatio adds</h3>
        <ul style="list-style:none;padding:0;margin:0;">
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">An AI tutor that calibrates that pace every subject, every day</li>
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">A live afternoon workshop where students build real-world skills</li>
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">Daily live instruction from real teachers so you're not the lesson planner</li>
          <li style="padding:10px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:15px;color:var(--dark);line-height:1.6;">A 2-hour academic block that fits any schedule</li>
          <li style="padding:10px 0;font-size:15px;color:var(--dark);line-height:1.6;">A community of other Arizona homeschool families</li>
        </ul>
      </div>
    </div>
    <p style="text-align:center;font-size:14px;color:var(--muted);margin-top:24px;max-width:780px;margin-left:auto;margin-right:auto;line-height:1.7;">Most families keep doing exactly what they were already doing in the afternoon. They just get their mornings back.</p>
  </div>
</section>
`,
    formDisclaimer: null,
    faqVariantHtml: `
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Will the day be too structured for our family?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">Two hours of academics each morning, live with a Novatio teacher, then afternoon clubs run until 2 PM. After that, the day is yours. No homework, ever. Most homeschool-to-Novatio families keep their existing afternoon routines fully intact. Travel and appointments work fine.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">How much of my day will I get back?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">Most homeschool parents tell us mornings open up by about three to four hours. Live academics run roughly 8 AM to 10 AM. After that, afternoon clubs run until 2 PM, and your child is engaged with their teacher and classmates the whole time.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Can my child still do co-ops, music lessons, and sports?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">Yes. The school day ends at 2 PM and there's no homework, ever. The platform travels with you, so appointments and travel days work fine.</div>
      </div>
`,
    finalCta: {
      h2: 'Homeschool families fit naturally at Novatio.',
      sub: 'Real teachers in the mornings. Your afternoons back. Arizona ESA covers tuition.',
      btnText: 'See if Novatio fits your family →',
      btnSub: 'Every Arizona student qualifies · No commitment required.',
    },
  },

  'every-learner': {
    formGuid: 'd515c6b1-4cc8-4a8a-bfd4-ce7737978804',
    lpVariant: 'every_learner',
    title: 'Novatio Arizona | Built for How Your Child Learns | Grades 4-8',
    metaDesc: 'Arizona school for grades 4–8 built around how your child learns. Live teachers, AI-personalized pace, accommodations included. ESA-funded.',
    canonical: 'https://arizona.novatio.school/every-learner/',
    hero: {
      eyebrow: '🌵 Arizona ESA · Grades 4–8 · Built for How Your Child Learns',
      h1Html: 'Finally, a school that <u>works the way your child does.</u>',
      subhead: `At Novatio, every student moves at their own pace, every subject, every day. The work meets your child right where they are. Live teachers stay on screen. Built-in breaks and individualized learning plans aren't add-ons. They're how the school runs. <strong>Arizona ESA covers tuition.</strong>`,
      primaryCta: 'Learn how Novatio works →',
      secondaryCta: null,
    },
    stickyMobileCta: 'Learn how Novatio works →',
    defaultScheduleProfile: 'jay',
    heroQuote: {
      text: "No more tears and begging to stay home from school. She's enjoying school, learning at a pace that suits the way she learns, and she's challenged and excited to meet every day.",
      attribution: 'Arizona parent, Novatio family (via Niche)',
    },
    bodySection1Html: `
<!-- BODY SECTION 1 - /every-learner: Novatio runs differently -->
<section class="section section-warm" style="padding:72px 0;">
  <div class="container">
    <div style="text-align:center;max-width:780px;margin:0 auto 36px;">
      <div class="section-label">A Different Kind Of School Day</div>
      <h2 class="section-h2" style="margin-bottom:12px;">Novatio runs differently. That's the point.</h2>
      <p style="font-size:16px;color:var(--muted);line-height:1.75;">We didn't bolt accommodations onto a traditional model. We started over. The day runs in shorter, focused blocks. Built-in breaks aren't a reward, they're scheduled. Live teachers stay on screen so your child has a face to come back to. The work adjusts to where your child actually is.</p>
    </div>
    <div style="background:#fff;border-radius:18px;padding:32px;box-shadow:0 4px 24px rgba(0,0,0,.08);max-width:780px;margin:0 auto;">
      <p style="font-size:15px;color:var(--dark);line-height:1.75;margin-bottom:16px;"><strong>A student can be at one level in reading and another in math, and the platform adjusts overnight.</strong> No catching up. No falling behind. Just steady forward motion. Built-in breaks. Live teacher contact every day. Text-to-speech available across the platform.</p>
    </div>
  </div>
</section>
`,
    bodySection2Html: `
<!-- BODY SECTION 2 - /every-learner: Identity + concrete tools + IEP funding -->
<section class="section section-white" style="padding:72px 0;">
  <div class="container">
    <div style="max-width:840px;margin:0 auto;background:var(--cream);border:2px solid #FDDAB6;border-radius:20px;padding:40px 36px;">
      <div class="section-label" style="text-align:center;">For Every Learner</div>
      <h2 class="section-h2" style="text-align:center;margin-bottom:20px;">Built for students with IEPs, 504 plans, and a wide range of learning profiles.</h2>
      <p style="font-size:16px;color:var(--dark);line-height:1.85;margin-bottom:22px;">Novatio is built for students with IEPs, 504 plans, and a wide range of learning profiles, including students with dyslexia and those who've needed more support than a traditional classroom could offer.</p>
      <p style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--orange);margin-bottom:10px;">Every Novatio student gets</p>
      <ul style="list-style:none;padding:0;margin:0 0 24px;">
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>An individualized pace in every subject, every day</li>
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>Extended time for assessments and frequent breaks</li>
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>Text-to-speech and voice-to-text built into the platform</li>
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>Live teachers on-screen throughout the school day</li>
      </ul>
      <p style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:var(--orange);margin-bottom:10px;">For students who need more support</p>
      <p style="font-size:15px;color:var(--dark);line-height:1.8;margin-bottom:10px;">Our <strong>Special Education Support Program</strong> adds coordinated services on top of the school day:</p>
      <ul style="list-style:none;padding:0;margin:0 0 18px;">
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>IEP and 504 coordination with your local school district, including annual reviews</li>
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>Targeted reading intervention and small-group executive-functioning support</li>
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>Organizational coaching: planning, time management, study skills, and self-advocacy</li>
        <li style="padding:6px 0 6px 24px;position:relative;font-size:15px;color:var(--dark);line-height:1.7;"><span style="position:absolute;left:0;color:var(--orange);font-weight:800;">✓</span>Quarterly progress reports, parent meetings, and extra 1:1 teacher check-ins</li>
      </ul>
      <p style="font-size:15px;color:var(--dark);line-height:1.8;margin-bottom:18px;">Students who need intensive, one-on-one dyslexia support can enroll in our <strong>One-on-One Dyslexia Intervention Program</strong>, taught by master's-level reading and dyslexia specialists.</p>
      <p style="font-size:14px;color:var(--muted);line-height:1.75;margin-bottom:18px;">These support services carry additional costs. Speak to our admissions team for details. Clinical and therapeutic services like speech therapy, occupational therapy, and counseling are handled by outside providers.</p>
      <div style="background:#fff;border-radius:14px;padding:24px;border-left:4px solid var(--orange);margin-top:24px;">
        <p style="font-size:15px;font-style:italic;color:var(--dark);line-height:1.7;margin-bottom:12px;">"Novatio has been a great success for my autistic 5th grader. She entered in October at 3rd-4th grade academic levels and is now finishing most subjects at 4th-5th grade levels. For our IEP family, additional reading support and general instructional assistance is present."</p>
        <p style="font-size:13px;font-weight:700;color:var(--muted);">- Arizona parent of an autistic 5th grader (via Niche)</p>
      </div>
    </div>
  </div>
</section>
`,
    formDisclaimer: `<p style="font-size:11px;color:var(--muted);line-height:1.5;margin:8px 0 6px;text-align:center;">We review each student's IEP or 504 plan during enrollment to ensure we can meet documented needs.</p>`,
    faqVariantHtml: `
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Does Novatio replace my child's existing IEP services?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">No. Every Novatio student gets accommodations like extended time, frequent breaks, text-to-speech, and live teacher support. For students who need more, our Special Education Support Program adds IEP and 504 coordination with your district, reading intervention, executive-functioning coaching, and extra 1:1 check-ins. These support services carry additional costs, and clinical services like speech therapy, occupational therapy, and counseling come from outside providers. Speak to our admissions team for details.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">My child has dyslexia. How does Novatio handle reading?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">For everyday reading, the work adjusts to where your child actually is, so the material is never too hard or too easy, and live teachers stay on screen. For students who need more, our One-on-One Dyslexia Intervention Program provides intensive, evidence-based support from master's-level reading and dyslexia specialists, covering phonological awareness, decoding, fluency, comprehension, and written language. This program carries an additional cost; speak to our admissions team for details. Many of our students with dyslexia tell us this is the first program where they don't feel singled out.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">Do I need to share my child's IEP or evaluation before applying?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">No. You can apply with the standard form. Once your child is admitted, our admissions team will reach out to walk through any documentation that helps us support them well.</div>
      </div>
`,
    finalCta: {
      h2: 'Your child deserves a school built around how they learn.',
      sub: 'Live teachers, every day. AI-personalized pace. Accommodations included, not bolted on.',
      btnText: 'Learn how Novatio works →',
      btnSub: 'Every Arizona student qualifies · No commitment required.',
    },
  },

  esa: {
    formGuid: '0ddc060e-31d4-46b6-85cd-25a692653447',
    lpVariant: 'esa',
    title: 'Novatio Arizona | ESA-Funded, Every Family Qualifies | Grades 4-8',
    metaDesc: `Arizona's ESA scholarship pays Novatio's tuition directly. Every Arizona family qualifies, no out-of-pocket tuition. State-funded private virtual school for grades 4–8.`,
    canonical: 'https://arizona.novatio.school/esa/',
    hero: {
      eyebrow: '🌵 Arizona ESA · Grades 4–8 · State-Funded Private School',
      h1Html: `Arizona's ESA covers <u>your child's tuition.</u>`,
      subhead: `Arizona's ESA is a scholarship account, not a voucher and not a reimbursement. Every Arizona family qualifies, and the state deposits funds you control. Novatio's tuition is <strong>$7,500</strong>, paid directly from your ESA account. <strong>You never write a check.</strong>`,
      primaryCta: 'See what ESA covers for your family →',
      secondaryCta: null,
    },
    stickyMobileCta: 'See what ESA covers →',
    defaultScheduleProfile: 'emma',
    bodySection1Html: `
<!-- BODY SECTION 1 - /esa: 3-stat horizontal bar -->
<section class="section section-warm" style="padding:72px 0;">
  <div class="container">
    <div style="text-align:center;max-width:780px;margin:0 auto 40px;">
      <div class="section-label">By The Numbers</div>
      <h2 class="section-h2" style="margin-bottom:12px;">The numbers Arizona families are seeing.</h2>
      <p style="font-size:16px;color:var(--muted);line-height:1.75;">Arizona's ESA isn't a discount or a reimbursement. It's a scholarship account the Arizona Department of Education funds and you control. Every Arizona K–12 family qualifies. Novatio's tuition is paid directly from your account, and any funds beyond tuition stay in your account for tutoring, therapies, and other approved educational expenses.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:980px;margin:0 auto;">
      <div style="background:#fff;border-radius:18px;padding:32px 24px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,.06);">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:48px;font-weight:800;color:var(--orange);letter-spacing:-2px;line-height:1;margin-bottom:8px;">4.5×</div>
        <p style="font-size:14px;color:var(--dark);font-weight:600;margin-bottom:4px;">Faster learning</p>
        <p style="font-size:12px;color:var(--muted);line-height:1.5;">MAP scores vs. national averages</p>
      </div>
      <div style="background:#fff;border-radius:18px;padding:32px 24px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,.06);">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:38px;font-weight:800;color:var(--orange);letter-spacing:-1px;line-height:1;margin-bottom:8px;">8th → 80th</div>
        <p style="font-size:14px;color:var(--dark);font-weight:600;margin-bottom:4px;">Reading percentile gain</p>
        <p style="font-size:12px;color:var(--muted);line-height:1.5;">One Novatio student, one school year</p>
      </div>
      <div style="background:#fff;border-radius:18px;padding:32px 24px;text-align:center;box-shadow:0 4px 16px rgba(0,0,0,.06);">
        <div style="font-family:'Bricolage Grotesque',sans-serif;font-size:48px;font-weight:800;color:var(--orange);letter-spacing:-2px;line-height:1;margin-bottom:8px;">$0</div>
        <p style="font-size:14px;color:var(--dark);font-weight:600;margin-bottom:4px;">Out of pocket for tuition</p>
        <p style="font-size:12px;color:var(--muted);line-height:1.5;">ESA pays Novatio directly</p>
      </div>
    </div>
  </div>
</section>
`,
    bodySection2Html: `
<!-- BODY SECTION 2 - /esa: ESA calculator with 3 scenarios -->
<section class="section section-white" style="padding:72px 0;">
  <div class="container">
    <div style="text-align:center;max-width:780px;margin:0 auto 36px;">
      <div class="section-label">How ESA Works</div>
      <h2 class="section-h2" style="margin-bottom:12px;">Here's how Arizona's ESA actually works.</h2>
      <p style="font-size:16px;color:var(--muted);line-height:1.75;">A lot of ESA ads make it sound complicated, or promise a specific dollar amount. The truth is simpler. Arizona's ESA is a scholarship account every family can use, your award depends on your own child, and Novatio's tuition is paid straight from that account.</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:980px;margin:0 auto;">
      <div style="background:var(--dark);color:#fff;border-radius:18px;padding:28px 24px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:12px;">01</p>
        <p style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;color:#fff;margin-bottom:12px;line-height:1.2;">Every family qualifies</p>
        <p style="font-size:14px;color:rgba(255,255,255,.85);line-height:1.7;">Arizona's ESA is universal. Every K–12 family is eligible to open a scholarship account, regardless of income or zip code.</p>
      </div>
      <div style="background:var(--dark);color:#fff;border-radius:18px;padding:28px 24px;border:2px solid var(--orange);">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:12px;">02</p>
        <p style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;color:#fff;margin-bottom:12px;line-height:1.2;">Tuition, paid directly</p>
        <p style="font-size:14px;color:rgba(255,255,255,.85);line-height:1.7;">Novatio's <strong style="color:#fff;">$7,500</strong> tuition is paid straight from your ESA account through ClassWallet. You never write a check.</p>
      </div>
      <div style="background:var(--dark);color:#fff;border-radius:18px;padding:28px 24px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:12px;">03</p>
        <p style="font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:800;color:#fff;margin-bottom:12px;line-height:1.2;">Amounts vary by student</p>
        <p style="font-size:14px;color:rgba(255,255,255,.85);line-height:1.7;">There's no single ESA amount. Your award depends on your child's grade and any qualifying needs. Funds beyond tuition stay in your account for approved expenses like tutoring, curriculum, and therapies.</p>
      </div>
    </div>
    <p style="text-align:center;font-size:13px;color:var(--muted);margin-top:24px;max-width:780px;margin-left:auto;margin-right:auto;line-height:1.7;">Talk to our admissions team to understand what your specific family's award covers.</p>
  </div>
</section>
`,
    formDisclaimer: null,
    faqVariantHtml: `
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">How do I apply for the Arizona ESA?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">You apply directly through the Arizona Department of Education's ClassWallet portal. Novatio walks you through every step. The Novatio application is separate from the ESA application, but we time them so you can do them in parallel.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">What can I use my remaining ESA balance for?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">Any funds in your account beyond Novatio's tuition stay in your ClassWallet account. You can use them on a wide range of approved educational expenses: tutoring, therapies, curriculum, technology, and specialist support. ClassWallet has a marketplace of approved providers. The balance doesn't go back to the state. It's yours.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">What if my child is currently in a public school?<span class="faq-chevron">&#8964;</span></div>
        <div class="faq-a">To use the ESA, your child needs to be officially withdrawn from public school. Our admissions team walks every family through the process, and we time it so there's no gap in your child's education.</div>
      </div>
`,
    finalCta: {
      h2: 'Arizona families: see what your ESA covers at Novatio.',
      sub: 'Tuition paid directly from your ESA. Every Arizona family qualifies. State-funded, parent-controlled.',
      btnText: 'See what ESA covers for your family →',
      btnSub: 'Apply in under 2 minutes · Every Arizona student qualifies.',
    },
  },
};

// ─────────────────────────────────────────────────────────────────────
// Transform function — applies variant config to chassis
// ─────────────────────────────────────────────────────────────────────

function buildVariant(html, v) {
  // 1. <title>
  html = html.replace(
    /<title>[^<]+<\/title>/,
    `<title>${v.title}</title>`
  );

  // 2. <meta name="description">
  html = html.replace(
    /<meta name="description" content="[^"]+" \/>/,
    `<meta name="description" content="${v.metaDesc}" />`
  );

  // 3. <link rel="canonical"> + insert noindex meta right after
  html = html.replace(
    /<link rel="canonical" href="[^"]+" \/>/,
    `<link rel="canonical" href="${v.canonical}" />\n  <meta name="robots" content="noindex, nofollow" />`
  );

  // 4. HS_FORM constant + override chassis LP_VARIANT const
  html = html.replace(
    /const HS_FORM\s+=\s+'[^']+';/,
    `const HS_FORM   = '${v.formGuid}';`
  );
  html = html.replace(
    /const LP_VARIANT = null;[^\n]*/,
    `const LP_VARIANT = '${v.lpVariant}';`
  );

  // 5. Add lp_variant to fields array in handleSubmit
  html = html.replace(
    /(\{ name: 'state_form',\s+value: 'Arizona'\s+\},)/,
    `$1\n    { name: 'lp_variant',       value: LP_VARIANT             },`
  );

  // 6. Hero eyebrow
  html = html.replace(
    /<div class="hero-eyebrow">[^<]+<\/div>/,
    `<div class="hero-eyebrow">${v.hero.eyebrow}</div>`
  );

  // 7. Hero H1 (with <u> for orange underline accent)
  html = html.replace(
    /<h1 class="hero-h1">[^<]+<\/h1>/,
    `<h1 class="hero-h1">${v.hero.h1Html}</h1>`
  );

  // 8. Hero subhead — find the <p class="hero-sub"> and replace its inner content
  html = html.replace(
    /<p class="hero-sub">[\s\S]*?<\/p>/,
    `<p class="hero-sub">\n          ${v.hero.subhead}\n        </p>`
  );

  // 9. Primary hero CTA button text
  html = html.replace(
    /(<button class="btn-hero"[^>]+>)[^<]+(<\/button>)/,
    `$1${v.hero.primaryCta}$2`
  );

  // 10. Secondary CTA — chassis no longer has the secondary CTA below form (removed
  // 2026-05-14 because experience-day link didn't work). No-op kept here in case
  // chassis re-adds one in future.

  // 11. Form submit button text (use primary CTA text)
  html = html.replace(
    /<button type="submit" class="btn-submit">Get Started with Your Application →<\/button>/,
    `<button type="submit" class="btn-submit">${v.hero.primaryCta}</button>`
  );

  // 12. /every-learner only: add disclaimer near form
  if (v.formDisclaimer) {
    html = html.replace(
      /(<button type="submit" class="btn-submit">)/,
      `${v.formDisclaimer}\n            $1`
    );
  }

  // 13. Insert Body Section 1 BEFORE the apart-section comment
  html = html.replace(
    /<!-- ══════════════════════════════════════════════════\n\s+② BENEFITS — apart cards \+ day tabs \+ schedule \+ clubs\n══════════════════════════════════════════════════ -->/,
    `${v.bodySection1Html}\n<!-- ══════════════════════════════════════════════════\n     ② BENEFITS — apart cards + day tabs + schedule + clubs\n══════════════════════════════════════════════════ -->`
  );

  // 14. Insert Body Section 2 BEFORE the day-section comment
  html = html.replace(
    /<!-- ② A DAY AT NOVATIO — video tabs -->/,
    `${v.bodySection2Html}\n<!-- ② A DAY AT NOVATIO — video tabs -->`
  );

  // 15. Prepend variant FAQs to FAQ list (before the first .faq-item.open)
  html = html.replace(
    /<div class="faq-list">/,
    `<div class="faq-list">\n${v.faqVariantHtml}`
  );

  // 16. Default schedule profile — swap which sched-tab has .active class + which profile is shown.
  // Chassis has both (a) static HTML state defaulting to aiden visible AND (b) a DOMContentLoaded
  // JS handler that forces profile-aiden to display='flex' on page load. We must update BOTH.
  if (v.defaultScheduleProfile !== 'aiden') {
    // Remove active from aiden tab
    html = html.replace(
      /(<button class="sched-tab) active(" onclick="switchProfile\('aiden')/,
      '$1$2'
    );
    // Add active to the new default tab
    html = html.replace(
      new RegExp(`(<button class="sched-tab)(" onclick="switchProfile\\('${v.defaultScheduleProfile}')`),
      '$1 active$2'
    );
    // Hide aiden profile by default (static HTML)
    html = html.replace(
      /(<div class="sched-accordion" id="profile-aiden" style="margin:0 auto;)(">)/,
      '$1display:none;$2'
    );
    // Show new default profile (remove display:none from static HTML)
    html = html.replace(
      new RegExp(`(<div class="sched-accordion" id="profile-${v.defaultScheduleProfile}" style="margin:0 auto;)display:none;(">)`),
      '$1$2'
    );
    // Swap the DOMContentLoaded init to show variant default instead of aiden
    html = html.replace(
      /var aiden = document\.getElementById\('profile-aiden'\);\s*if \(aiden\) aiden\.style\.display='flex';/,
      `var def = document.getElementById('profile-${v.defaultScheduleProfile}'); if (def) def.style.display='flex';`
    );
  }

  // 17. Sticky mobile CTA text
  html = html.replace(
    /(<div class="sticky-cta">\s*<button onclick="[^"]+">)[^<]+(<\/button>)/,
    `$1${v.stickyMobileCta}$2`
  );

  // 18. Final CTA section content
  html = html.replace(
    /(<section class="cta-section">[\s\S]*?<div class="container"[^>]+>\s*<h2>)[^<]+(<\/h2>\s*<p>)[^<]+(<\/p>\s*<button[^>]+>)[^<]+(<\/button>\s*<p class="cta-sub">)[^<]+(<\/p>)/,
    `$1${v.finalCta.h2}$2${v.finalCta.sub}$3${v.finalCta.btnText}$4${v.finalCta.btnSub}$5`
  );

  // 19. Hero no-commit subtext under primary CTA — keep but variant-tune slightly
  // (No change for now — kept identical across variants for clarity.)

  // 20. Per-variant hero quote — replaces chassis Sophie quote if heroQuote set.
  if (v.heroQuote) {
    html = html.replace(
      /<div class="hero-sophie">[\s\S]*?<\/div>\s*<\/div>\s*<!-- RIGHT: form -->/,
      `<div class="hero-sophie">
          <div class="sophie-stars">★★★★★</div>
          <p class="sophie-text">"${v.heroQuote.text}"</p>
          <span class="sophie-by">- ${v.heroQuote.attribution}</span>
        </div>
      </div>

      <!-- RIGHT: form -->`
    );
  }

  // 21. Rewrite relative asset paths from ./images/ and ./videos/ (chassis-root)
  // to /images/ and /videos/ (domain-root) so they resolve correctly from
  // a subfolder location like /homeschool/.
  html = html.replace(/(['"])\.\/images\//g, '$1/images/');
  html = html.replace(/(['"])\.\/videos\//g, '$1/videos/');

  return html;
}

// ─────────────────────────────────────────────────────────────────────
// Build all 3 variants
// ─────────────────────────────────────────────────────────────────────

const results = [];
for (const [variantKey, config] of Object.entries(variants)) {
  const outDir = join(__dirname, variantKey);
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, 'index.html');
  const output = buildVariant(chassis, config);
  writeFileSync(outFile, output, 'utf8');
  results.push({
    variant: variantKey,
    file: outFile,
    bytes: output.length,
    formGuid: config.formGuid,
    lpVariant: config.lpVariant,
  });
}

console.log('=== Variant build complete ===');
console.table(results);
