# Gavin Doyle — Knowledge Panel / “Notable Person” Playbook (2026)

This is a practical checklist to help Google recognise **Gavin Doyle** (Person) and **Examinaite** (Organisation) as distinct entities, connect them correctly, and (eventually) surface a Google Knowledge Panel that you can **claim**.

---

## 1) What we’re trying to achieve

- When someone searches **“Gavin Doyle Examinaite”** (and ideally **“Gavin Doyle”**), Google shows a right‑hand Knowledge Panel for you.
- When someone searches **“Examinaite”**, Google shows a Knowledge Panel for the company (or at least a clear entity result).
- You can click **“Claim this knowledge panel”** and verify ownership.

---

## 2) Non‑negotiables (do these first)

- **One canonical identity**
  - Name: `Gavin Doyle`
  - Company: `Examinaite` (be consistent with spelling everywhere)
- **One canonical URL per entity**
  - Person: `https://gavindoyle.ie/` (and ideally a dedicated `https://gavindoyle.ie/about/`)
  - Company: `https://examinaite.ie/`
- **One canonical headshot** (same image used across LinkedIn, Crunchbase, Wikidata, your site)
- **Only publish what you can back up**
  - If it’s not on a reliable site (press, university, accelerator, recognised org), don’t put it in structured data.

---

## 3) Personal website: make it “readable for Google”

### Content structure (simple beats clever)
- Add (or improve) an **About** page (`/about/`) that includes:
  - H1: **Gavin Doyle**
  - A plain‑English 2–4 paragraph bio (teacher → founder journey, what you do now)
  - A short bullet list of “Proof”:
    - Press coverage (Irish Independent etc.)
    - Accelerator/programme participation (New Frontiers, NDRC, etc.)
    - Speaking engagements (university pages if you can get them)
  - Links to your main profiles: LinkedIn, X, GitHub, Crunchbase, Wikidata (once created)
- Keep your “persona / Netflix-style” homepage if you want, but ensure there’s a **boring, factual page** Google can latch onto (`/about/`).

### Technical must-haves
- Make sure the site is **indexable**
  - `robots.txt` allows crawling
  - No `noindex`
  - Canonical tags are correct
- Add a sitemap
  - `https://gavindoyle.ie/sitemap.xml`
- Make sure page titles/descriptions are clean
  - Title example: `Gavin Doyle | Founder & CEO of Examinaite`
  - Meta description: 150–160 chars, factual, not hype

---

## 4) Add Person structured data to gavindoyle.ie

Place this JSON‑LD on your **About** page (or homepage if that’s your canonical profile page).

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gavindoyle.ie/#person",
  "name": "Gavin Doyle",
  "alternateName": [
    "Gavinthecraic"
  ],
  "description": "Irish educator-turned founder. Founder & CEO of Examinaite, an AI-powered Leaving Cert revision platform.",
  "url": "https://gavindoyle.ie/",
  "image": {
    "@type": "ImageObject",
    "@id": "https://gavindoyle.ie/#image",
    "url": "https://gavindoyle.ie/images/gavin-square-1200.jpg",
    "contentUrl": "https://gavindoyle.ie/images/gavin-square-1200.jpg"
  },
  "jobTitle": "Founder & CEO",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://examinaite.ie/#organization",
    "name": "Examinaite",
    "url": "https://examinaite.ie/"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Dublin City University"
    },
    {
      "@type": "CollegeOrUniversity",
      "name": "Ulster University"
    }
  ],
  "knowsAbout": [
    "Education technology",
    "Leaving Certificate",
    "AI in education",
    "Assessment design"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/YOUR-LINKEDIN/",
    "https://www.crunchbase.com/person/YOUR-CRUNCHBASE-PERSON",
    "https://www.wikidata.org/wiki/YOUR-WIKIDATA-QID"
  ]
}
```

Notes:
- Don’t add phone numbers or home addresses unless you **want** them scraped.
- `sameAs` should only include pages that clearly refer to **you**.

---

## 5) Update examinaite.ie schema to reference you as founder

Add Organisation JSON‑LD (best placed on the homepage and/or `/about/`).

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://examinaite.ie/#organization",
  "name": "Examinaite",
  "url": "https://examinaite.ie/",
  "logo": "https://examinaite.ie/images/logo.png",
  "founder": {
    "@type": "Person",
    "@id": "https://gavindoyle.ie/#person",
    "name": "Gavin Doyle",
    "url": "https://gavindoyle.ie/"
  },
  "sameAs": [
    "https://www.linkedin.com/company/examinaite/",
    "https://www.crunchbase.com/organization/YOUR-CRUNCHBASE-ORG",
    "https://www.wikidata.org/wiki/YOUR-ORG-WIKIDATA-QID"
  ]
}
```

Also do this in normal HTML content (not just schema):
- Add a clear “Founded by Gavin Doyle” line on your About page.
- Link to your personal site.

---

## 6) Crunchbase: create/clean up both profiles

### Organisation profile (Examinaite)
- Create/claim the company page
- Ensure:
  - Correct website URL
  - Correct founding date/year
  - Location (Ireland)
  - Short factual description
  - Category tags (EdTech, AI, Education)
  - Links to socials
  - Press links where possible

### Person profile (Gavin Doyle)
- Create/claim your person profile
- Ensure:
  - Role at Examinaite (Founder & CEO)
  - Matching headshot + bio + location
  - Links to personal site + socials

Consistency matters more than wording.

---

## 7) Wikidata: create items (only if you meet notability)

You *can* edit data about yourself, but don’t create an item unless you’re confident you meet notability and can add reliable sources.

### Person item: Gavin Doyle
- Add statements like:
  - Instance of: human
  - Country of citizenship: Ireland
  - Occupation: entrepreneur / teacher
  - Employer or position held: Founder & CEO (Examinaite)
  - Educated at: DCU, Ulster University
  - Official website: gavindoyle.ie
  - Social media: LinkedIn, etc.
- Add citations (press, university pages, programme pages)

### Organisation item: Examinaite
- Add statements like:
  - Instance of: company / organisation
  - Official website: examinaite.ie
  - Founder: Gavin Doyle
  - Location: Ireland
  - Industry: education technology
- Add citations (press, credible programme pages)

---

## 8) Google Search Console (GSC): set it up for both sites

For **gavindoyle.ie** and **examinaite.ie**:

- Add a **Domain property** (recommended)
- Verify via DNS TXT record (works well with Vercel + your registrar DNS)
- Submit sitemap:
  - `/sitemap.xml`
- Use “URL Inspection” to request indexing of:
  - Homepage
  - About page
  - Press page (if you add one)

---

## 9) Add a “Proof” layer (this is what often tips it)

Google trusts third-party sites more than your own.

Prioritise getting pages on:
- University sites (guest lecture page)
- Accelerator/incubator pages (New Frontiers/NDRC profiles)
- Conference speaker pages
- Local press (you already have some)

Make sure those pages:
- Mention your full name
- Mention “Founder & CEO of Examinaite”
- Link to either your personal site or the company site

---

## 10) Monitoring + next step

- Search for:
  - “Gavin Doyle Examinaite”
  - “Examinaite founder”
  - “Gavin Doyle founder”
- When a Knowledge Panel appears:
  - Click **Claim this knowledge panel**
  - Verify with your Google account
  - Then you can suggest edits

---

## 11) Your execution order (fastest to impact)

- (1) Create `/about/` page on gavindoyle.ie with plain text bio + proof links
- (2) Add Person JSON‑LD on that page
- (3) Add Organisation JSON‑LD on examinaite.ie and link founder to your `@id`
- (4) Create/clean Crunchbase person + org and add them to `sameAs`
- (5) Create Wikidata items (only with citations)
- (6) Set up Search Console for both and submit sitemaps
- (7) Build 3–10 more third‑party mentions with links

---

## 12) Notes to self (fill these in)

- LinkedIn (Gavin): __________________________
- LinkedIn (Examinaite): ______________________
- Crunchbase (Gavin): _________________________
- Crunchbase (Examinaite): ____________________
- Wikidata QID (Gavin): _______________________
- Wikidata QID (Examinaite): __________________
- Canonical headshot URL: _____________________
