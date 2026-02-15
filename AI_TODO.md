# 🤖 AI TODO

---

## 📝 TASK TEMPLATE

```
## TASK: [Title]

**Priority:** High / Medium / Low
**What:** [What you want done]
**Where:** [File or page]
**Details:** [Any specifics]
```

---

## ✅ GOOD EXAMPLES

```
## TASK: Add basketball carousel

**Priority:** High
**What:** Create auto-scrolling carousel with basketball photoshoot photos
**Where:** Fans page hero section
**Details:** Use all 15 photos from fans/basketball-photoshoot-*.JPG, scroll every 3 seconds
```

```
## TASK: Fix broken image

**Priority:** High  
**What:** Replace gav-selfie-in-dublin.jpg (doesn't exist)
**Where:** Suitors page, last card in contact section
**Details:** Use gav-mirror-pic.jpg instead
```

```
## TASK: Adjust image positions

**Priority:** Medium
**What:** Apply image positions from PHOTO_CONTEXT_MASTER.md
**Where:** Fans page, Basketball Photoshoot section
**Details:** Look for {pos:X} in the MD file and add imagePosition prop to cards
```

---

## 🎯 IMAGE POSITION SYSTEM

**Scale:** 10=top, 5=middle, 1=bottom

**In PHOTO_CONTEXT_MASTER.md:**
```
- `basketball-headshot1.JPG` - my modeling career {pos:9}
```

**In page.tsx:**
```tsx
<NetflixCard
  title="Headshot"
  imageUrl="/images/personas/fans/basketball-headshot1.JPG"
  imagePosition={9}  // ← Add this prop
  tags={["Basketball", "Headshot"]}
/>
```

---

## ❌ BAD EXAMPLES

```
"Make it look better"
→ What specifically? Which page? What's wrong with it?

"Add some photos"  
→ Which photos? Where? What section?

"Fix the bug"
→ What bug? What's the expected behavior?
```

---

## 📋 CURRENT TASKS



## ✅ DONE

- Photo documentation system ✅
- 19 new photo contexts ✅
- Cleanup duplicate files ✅
- Card styling cleanup ✅ (16:9 ratio, tags only, shadow hover, removed play button)
- Card improvements ✅ (More Info button in bar below image, tags only on hover, keyboard arrow navigation)
- Advanced navigation ✅ (1.2x scale, section-based nav, scroll-to-center, mouse hover integration)
- Smooth scroll transitions ✅ (linear easing, 300ms duration, no acceleration)
- Horizontal row layout ✅ (each category is single scrollable row)
- **Image position system** ✅ (1-10 scale: 10=top, 5=middle, 1=bottom)
- **All persona pages updated with NavigationProvider and NavSection** ✅
  - Curious: 70+ photos across 12 categories
  - Fans: 75+ photos across 14 categories  
  - Suitors: 71+ photos across 12 categories
  - Employers: 29 photos across 10 categories
  - Investors: 13 photos across 6 categories
  - Techies: 16 project screenshots across 8 categories

---

*Add new tasks above. Be specific.*



Here’s what I can see from your homepage, and what I’d change to (1) get you properly crawled/indexed and (2) maximise your odds of a Google Knowledge Panel.

## SEO rating (right now): **6/10**

* **Content quality is strong**: your bio is clear, keyword-rich, and genuinely useful (“Founder & CEO of Examinaite”, “Leaving Certificate”, “Irish language”, etc.). ([Gavin Doyle][1])
* **But your “indexability signals” look weak in practice**: I tried multiple `site:gavindoyle.ie` searches and couldn’t find any indexed pages, which usually means *either* the site is very new, *or* something is blocking/discouraging crawl/index (robots/noindex/canonical issues, JS routing quirks, missing sitemap submission, etc.).
* **Your first on-page “main heading” is currently “Who’s watching?”** (Netflix vibe, I get it) — but it’s not helping Google immediately understand the page is *you*. ([Gavin Doyle][1])

## 1) Make it more visible, readable, and indexable (highest-impact fixes)

### A. Fix crawl + discovery (non-negotiables)

* **Set up Google Search Console** for `https://www.gavindoyle.ie/` and use **URL Inspection → Request indexing** for the homepage and key pages.
* **Create and submit a sitemap.xml** in Search Console (and ideally reference it inside robots.txt). Google explicitly recommends sitemaps to help crawling, especially for newer/less-linked sites. ([Google for Developers][2])
* **Add/verify robots.txt is sane** (not blocking `/` or important assets). Google’s docs are clear on how robots.txt works and how to create/test it. ([Google for Developers][3])
* **Make sure you’re not “accidentally noindexing”**: Google warns that rich results/structured data won’t be used if you block via robots/noindex and similar controls. ([Google for Developers][4])

### B. Make the page instantly “about Gavin” for Google (and humans)

What I’d change on your homepage structure:

* **Make “Gavin Doyle” the first and only H1**, and demote **“Who’s watching?”** to a smaller heading or just styled text.

  * Right now Google sees “Who’s watching?” first. ([Gavin Doyle][1])
* **Remove the duplicate “Get In Touch” heading** (it appears twice). That’s small, but it’s a signal of messy markup. ([Gavin Doyle][1])
* **Update numbers to match your strongest public proof points** (consistency matters for entity trust):

  * Irish Times (Dec 4, 2025) mentions ~1,000 users. ([The Irish Times][5])
  * Irish Independent (Jan 27, 2026) mentions 2,000+ users. ([The Independent][6])
  * Pick one “current” number (e.g., “2,000+ students”) and keep it consistent across your site + LinkedIn + press kit.

### C. Add basic technical SEO hygiene (quick wins)

* **Canonical URL** on every page (avoid duplicate versions like http/https, www/non-www).
* **Open Graph + Twitter cards** (helps click-through when people share you; also helps Google understand identity).
* **Make sure each persona page is a real, indexable URL** with:

  * Unique title tag + meta description
  * Real text content (not just images/JS)
  * Internal links from the homepage with plain anchor text (not only clickable cards)

## 2) Getting a Google Knowledge Panel (what actually works)

Two important realities:

* **You can’t “apply” for a Knowledge Panel** — Google generates them automatically when it has enough reliable entity info on the open web. ([Google Help][7])
* **If you *do* get one**, you can claim/verify it and suggest edits. ([Google Help][8])

### The practical playbook to trigger one (for a person)

#### A. Strengthen “entity signals” on your own site

* Add **Schema.org structured data** (JSON-LD) for:

  * `Person` (you) + a stable `@id` (e.g., `https://www.gavindoyle.ie/#gavin`)
  * Include: `name`, `jobTitle`, `url`, `image`, `sameAs` (LinkedIn, X, YouTube, GitHub, Crunchbase if you have it), `worksFor` (Examinaite), `alumniOf` (DCU/UU), `knowsAbout` (EdTech, Leaving Cert, Irish language tech)
* Google explicitly uses structured data to better understand what’s on a page and the entities referenced. ([Google for Developers][9])

#### B. Create consistent “about pages” on authoritative platforms

You already have strong raw material (press + profiles). The goal is **consistency + cross-linking**:

* Make sure **your LinkedIn headline + About section** matches your site wording (Founder & CEO of Examinaite, Irish educator-turned-technologist). ([LinkedIn][10])
* Add your **official website** (`gavindoyle.ie`) to every major profile (LinkedIn, YouTube, GitHub, etc.) so Google can connect the dots.

#### C. Build third-party corroboration (you’ve already started)

Press is one of the strongest “entity validators” you can get:

* Irish Times feature (Dec 4, 2025). ([The Irish Times][5])
* Irish Independent feature (Jan 27, 2026). ([The Independent][6])
  Turn that into a **Press page** on your site that links out to these (and any podcasts, talks, awards). This is *gold* for entity building.

#### D. Optional but high leverage: Wikidata

* A clean **Wikidata entry** (with references to Irish Times/Irish Independent, your official site, LinkedIn) can help disambiguate you from other “Gavin Doyle”s online (there are loads). Your search results already show multiple unrelated Gavin Doyles across music/companies/etc. ([SoloCheck][11])

## The “do this this week” checklist

* Add Search Console + request indexing for homepage
* Generate sitemap.xml + submit it (and reference it in robots.txt) ([Google for Developers][12])
* Change heading hierarchy so **Gavin Doyle is the primary H1** ([Gavin Doyle][1])
* Add `Person` schema with `sameAs` links ([Google for Developers][9])
* Add a **Press** page linking to Irish Times + Irish Independent ([The Irish Times][5])
* Make sure LinkedIn + YouTube + GitHub all link back to gavindoyle.ie (and use consistent wording) ([LinkedIn][10])

If you want, paste your site’s **`<head>` output** (or your Next.js `metadata` config) and I’ll tell you exactly what’s missing (title/description/canonical/robots/OG/schema) and give you the clean “ideal” version.

[1]: https://www.gavindoyle.ie/ "Gavin Doyle | Founder & CEO of Examinaite"
[2]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?utm_source=chatgpt.com "What Is a Sitemap | Google Search Central | Documentation"
[3]: https://developers.google.com/search/docs/crawling-indexing/robots/intro?utm_source=chatgpt.com "Robots.txt Introduction and Guide | Google Search Central"
[4]: https://developers.google.com/search/docs/appearance/structured-data/sd-policies?utm_source=chatgpt.com "General Structured Data Guidelines | Google Search Central"
[5]: https://www.irishtimes.com/business/innovation/2025/12/04/teacher-quit-job-to-build-personalised-ai-revision-platform-for-leaving-cert/?utm_source=chatgpt.com "Teacher quit job to build personalised AI revision platform ..."
[6]: https://www.independent.ie/irish-news/meet-the-teacher-tech-duo-using-ai-as-an-alternative-to-grinds-for-leaving-cert-students/a377696583.html?utm_source=chatgpt.com "Meet the teacher-tech duo using AI as an alternative to ..."
[7]: https://support.google.com/knowledgepanel/answer/9787176?hl=en&utm_source=chatgpt.com "How Google's Knowledge Graph works"
[8]: https://support.google.com/knowledgepanel/answer/7534902?hl=en&utm_source=chatgpt.com "Get verified on Google - Knowledge Panel Help"
[9]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?utm_source=chatgpt.com "Introduction to structured data markup in Google Search"
[10]: https://ie.linkedin.com/in/doyle-gavin?utm_source=chatgpt.com "Gavin Doyle - Examinaite"
[11]: https://www.vision-net.ie/Company-Info/Gavin-Doyle-Software-Consulting-Limited-688938?utm_source=chatgpt.com "Gavin Doyle Software Consulting Limited"
[12]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?utm_source=chatgpt.com "Build and Submit a Sitemap | Google Search Central"
