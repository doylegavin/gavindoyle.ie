`Here’s a single **global checklist** you can drop in your repo as `CONTENT_CHECKLIST.md`. It’s all lists with tick-boxes and placeholders for you to fill. Use it to track what’s written, what’s added, and what’s linked.

```markdown
# Personal Site — Content & Assets Checklist

> Style: conversational “voice-note” for paragraphs. Keep lists as lists.
> Tip: tick as you go. Replace <> placeholders with your details.

## 0) Global
- [x] Email: doyle.d.gavin@gmail.com
- [x] Socials
  - [x] Instagram URL: https://instagram.com/gavinthecraic
  - [x] LinkedIn URL: https://www.linkedin.com/in/doyle-gavin
  - [x] GitHub URL: https://github.com/doylegavin
- [x] Calendly / booking link: https://calendly.com/doyle-d-gavin/30min
- [x] OG images (one per route): `/public/images/general/social/og_{route}.jpg` (structure created)
- [x] 404 + error copy done
- [x] `sitemap.ts` + `robots.ts` present
- [x] JSON-LD
  - [x] Person schema on `/about` and `/employers`
  - [x] Project schema on `/projects`

---

## 1) Home `/`
- [x] One-liner intro above "Who's Watching?" ("Pick your vibe. I'll tailor the tour.")
- [x] 6 tiles present: Employers / Investors / Fans / Suitors / Curious / Engineers
- [x] Tile subtitles added
- [ ] Tile images (1:1): `/public/images/backgrounds/home_*` (using emoji avatars currently)
- [x] Animation a11y text in place

---

## 2) Personas

### 2.1 Employers `/employers`
- [x] Hero paragraph (why hire me; availability; location)
- [x] Buttons: [x] View portfolio [x] Book a chat
- [x] Meet your developer (photo gallery with professional headshots)
- [x] Services & availability (3 cards)
  - [x] Services list (landing pages, marketing sites, small apps, perf/SEO)
  - [x] Availability line: "1 day/week, remote or Dublin"
- [x] Selected work (4 cards): Examinaite / Dr Ónán / The Kneecapp / Gaeilgeoir.ai
- [x] Tech & Tools (3 cards) with stack details
- [x] Ready to work together (CTA + email)
- [ ] Nav links to `/about/cv`, `/projects`, `/about/awards`, `/about/press`
- [x] Images added:
  - [x] Professional headshots (multiple variants)
  - [x] Project previews (PNG format)

### 2.2 Investors `/investors`
- [x] Hero paragraph (opportunity in plain English)
- [x] Investment thesis (3 cards): Traction / Why Now / What's Next
- [x] Soft Ask section (3 cards) with connection requests
- [x] Public deck link: https://claude.ai/public/artifacts/2d2b0e85-bded-46c5-b480-670d250dd941
- [x] CTA: warm intros / contact
- [x] Images: Executive photos from professional shoot

### 2.3 Fans `/fans`
- [x] Hero paragraph
- [x] What You'll Find (3 cards): Build Logs / Reels / Notes
- [x] Recent Updates (3 cards): Examinaite v2 / Basketball / GlórAI
- [x] Creative Side (3 cards): Guitar & Music / Photography / Coffee Culture
- [ ] Behind the Scenes (Hyrox) (1 card + photo)
- [ ] Childhood Memories (2 cards)
- [ ] Belfast Traditions (3 cards)
- [ ] Connect & Explore (1 card: Blog, Gallery, Instagram)
- [x] Images populated in `/images/personas/fans/*` (75 files available)

### 2.4 Suitors `/suitors`
- [x] Hero paragraph (playful) + IG CTA
- [x] Five Green Flags (5 cards): Photography / Athletic / Guitar / Always Drive / Pink Crocs
- [x] Taste & Vibes (4 cards): Love Language / Will Cook / Ideal Date / Coffee Standards
- [x] Playlist Right Now (3 cards): Current music rotation
- [ ] Personal & Lifestyle (3 cards)
- [ ] Social & Fun (3 cards)
- [ ] More About Me (3 cards)
- [ ] Fun Side (3 cards)
- [ ] Friends & Connections (2 cards)
- [x] Images: suitors_hero.jpg and 71 files available in `/images/personas/suitors/*`

### 2.5 Curious `/curious`
- [x] Hero paragraph ("deep dive")
- [x] Turning Points (3 cards): Be a teacher / School that wasn't me / The mirror
- [x] A Failure I'll Show You (2 cards): Unfinished Master's / Decision I'd repeat
- [x] Origin Stories (3 cards): First shipped thing / Teacher pain / Basketball → Start-ups
- [x] FAQ (2 cards) — quick hits: Why pause teaching / Unpopular opinion
- [x] Easter Eggs & Fun (4 cards): Favourite court / Honourable mention / Coffee order / Hidden gem
- [ ] Childhood Memories (2 cards)
- [ ] Belfast Friends (3 cards)
- [ ] Coffee Culture (3 cards)
- [ ] Street Photography (1 card)
- [x] Images: 70 files available in `/images/personas/curious/*`

### 2.6 Engineers `/engineers`
- [x] Hero paragraph (setup & stack)
- [x] Core Stack (4 cards)
  - [x] Frontend (JS/TS, React, Next.js, Tailwind)
  - [x] Backend & Scripts (Python, Node.js, C experience)
  - [x] Data & Analytics (PostHog, Prisma + Neon, NextAuth)
  - [x] AI & PDF (@react-pdf/renderer, OpenAI)
- [x] How I Ship (3 cards): Process / Handover / Quality Focus
- [x] Hardware & Tools (4 cards): Hardware / Editor / Deploy & Domains / Design & Other
- [x] Philosophy (3 cards): Ship Fast Then Harden / Measure Everything / Clean Handoffs
- [ ] Projects & Work (11 cards total) with links
- [ ] Let's Build Something (CTA card)
- [x] Images: 15 files available in `/images/personas/engineers/*`

---

## 3) Core Pages

### 3.1 About `/about`
- [x] Hero paragraph (first-person story)
- [x] What I'm Doing Now (3 cards): Leading Examinaite / Freelance Websites / Tinkering with GlórAI
- [x] Tech Stack (3 cards): Core Languages / Backend & Scripts / Process
- [x] Background (3 cards): Education & Teaching / Semi-Pro Basketball / Building Software
- [x] Headshots: Professional executive photos from Synergy shoot

### 3.2 CV `/about/cv`
- [x] Hero line + download button
- [x] Professional Experience (4 sections)
  - [x] Current Role: Founder & CEO - Examinaite (2023 - Present)
  - [x] Freelance Website Developer (2023 - Present)
  - [x] Teaching Experience: PE & Maths Teacher (2016 - 2023)
  - [x] Athletic Background: Semi-Pro Basketball & S&C Coach
- [x] Education (DCU; UU status note)
- [x] Skills list (tech + soft)
- [x] Recognition & Programs (Enterprise Ireland, NDRC)
- [x] Links: LinkedIn / Email
- [x] PDF uploaded: `/public/cv/Gavin_Doyle_CV.pdf` (directory created, ready for upload)

### 3.3 Awards `/about/awards`
- [x] Hero line
- [x] Entrepreneurship (2 cards): New Frontiers P1/P2; NDRC Pre-Accelerator
- [x] Athletic (2 cards): semi-pro + coaching
- [x] Teaching (2 cards): 7+ years experience / Student impact
- [x] Technology (2 cards): Examinaite growth / Multiple live projects

### 3.4 Press `/about/press`
- [x] Hero line
- [x] Available for Speaking (3 cards): Education Technology / Entrepreneurship Journey / Irish Language Technology
- [x] Programme Features (3 cards): Enterprise Ireland New Frontiers / NDRC Pre-Accelerator / Educational Innovation
- [x] Thought Leadership Topics (4 cards): AI in Education Reality Check / Building for Niche Markets / Teacher-Founder Advantage / Preserving Language Through Tech
- [x] Bio & Assets (3 cards): Professional bio / Speaking experience / Media kit

### 3.5 Blog list `/blog`
- [x] Hero line
- [x] Recent Build Logs (3 cards): Examinaite v2 / Irish AI Voice Bot / From Teacher to Founder
- [x] Technical Notes (3 cards): AI-Generated PDFs / Prompt Engineering / Building Fast with Next.js
- [x] Life & Lessons (3 cards): Basketball to Code / Coffee Culture / Teaching in AI Age
- [ ] Decision: **Set A / Set B / All 6** (circle one)
- [ ] For each listed post: title, deck paragraph, date, read time, cover image

### 3.6 Blog posts `/blog/[slug]` (3–6 posts)
For each post:
- [ ] Title
- [ ] Date + read time
- [ ] Banner image: `/images/blog/{slug}.jpg`
- [ ] Body (conversational)
- [ ] 1 pull-quote
- [ ] CTA at end

### 3.7 Projects list `/projects`
- [x] Hero line
- [x] Featured (4 cards): Examinaite / GlórAI / Dr Ónán / The Kneecapp
- [x] Experiments & Learning (1 card): Pokemon Image Classifier
- [x] Case Study Example (4 cards) — Examinaite: Problem / Approach / Outcome / My Role

### 3.8 Project details `/projects/[slug]` (4 pages)
For each project:
- [ ] Title / year / status / role
- [ ] Stack list
- [ ] Problem → Approach → Outcome (at least one number)
- [ ] Screenshots (2–4): hero + key screen(s)
- [ ] Optional: before/after or performance proof
- [ ] Links: live site (and repo if public)
- [ ] JSON-LD injected

### 3.9 Contact `/contact`
- [x] Hero line (friendly)
- [x] Contact details (3 cards): Email / Quick Call / Location
- [x] Social links (3 cards): Instagram / LinkedIn / GitHub
- [x] What I Can Help With (4 cards): Website Projects / Product Feedback / Irish Language Tech / Teaching → Tech Career
- [x] Calendly widget integrated for booking calls
- [x] Contact CTAs updated based on persona context (Employers/Investors: Email+LinkedIn, Fans/Curious/Suitors: Email+Instagram)

---

## 4) Assets — quick list to drop
- [x] `/images/personas/employers/*` (15 files including professional headshots)
- [x] `/images/personas/investors/*` (12 files including executive photos)
- [x] `/images/personas/fans/*` (75 files)
- [x] `/images/personas/suitors/*` (71 files)
- [x] `/images/personas/curious/*` (70 files)
- [x] `/images/personas/engineers/*` (15 files)
- [x] `/images/projects/previews/*` (3 files: NAIC team/individual + podcast)
- [x] `/images/blog/*` (structure created with README for 9 planned posts)
- [x] `/images/backgrounds/*` (hero, overlays, patterns, personas subdirectories)
- [ ] `/images/general/avatars/*` (empty directory)
- [x] `/images/general/social/og_*.jpg` (structure created with README for 13 planned OG images)

---

## 5) External links — verify
- [x] https://examinaite.ie (referenced in multiple pages)
- [x] https://dronanweddings.ie (referenced in employers page)
- [x] https://thekneecapp.ie (referenced in multiple pages)
- [x] https://gaeilgeoir.ai (referenced in multiple pages)
- [x] Public deck (investors): https://claude.ai/public/artifacts/2d2b0e85-bded-46c5-b480-670d250dd941
- [x] Social profile URLs: Instagram (@gavinthecraic), LinkedIn (/in/doyle-gavin)
- [x] GitHub URL (/doylegavin) - updated throughout codebase

---

## 6) Final QA
- [ ] All routes render and link correctly
- [ ] Metadata (title/description) on each page
- [ ] Iframe previews fall back to screenshots
- [ ] Lighthouse (Perf/SEO/A11y) ≥ 90 on key pages
```

Want me to also generate a **minimal MDX front-matter template** for blog posts and projects so you can copy-paste new entries fast?
