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
