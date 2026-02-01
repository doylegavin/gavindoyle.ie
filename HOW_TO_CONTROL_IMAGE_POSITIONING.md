# How to Control Image Positioning in Netflix Cards

## Problem
Some images in cards are cropped incorrectly - you want to show the top, middle, or bottom of photos, not just the center.

## Solution: `objectPosition` Prop

The `NetflixCard` component already supports the `objectPosition` prop to control which part of the image is displayed.

---

## Usage

### Basic Examples

```tsx
// Show the TOP of the image
<NetflixCard
  title="Example Card"
  description="..."
  imageUrl="/path/to/image.jpg"
  objectPosition="top"
/>

// Show the CENTER of the image (default)
<NetflixCard
  title="Example Card"
  description="..."
  imageUrl="/path/to/image.jpg"
  objectPosition="center"
/>

// Show the BOTTOM of the image
<NetflixCard
  title="Example Card"
  description="..."
  imageUrl="/path/to/image.jpg"
  objectPosition="bottom"
/>
```

---

## All Available Positions

### Vertical Positions
- `"top"` - Show top of image
- `"center"` - Show center of image (default)
- `"bottom"` - Show bottom of image

### Horizontal Positions
- `"left"` - Show left side
- `"center"` - Show center (default)
- `"right"` - Show right side

### Combined Positions
You can combine horizontal and vertical:

```tsx
// Top-left corner
objectPosition="top left"

// Top-right corner
objectPosition="top right"

// Bottom-left corner
objectPosition="bottom left"

// Bottom-right corner
objectPosition="bottom right"

// Center-left (vertically centered, left aligned)
objectPosition="left center"

// Center-right (vertically centered, right aligned)
objectPosition="right center"
```

### Percentage Positions
For precise control, use percentages:

```tsx
// 25% from top, 50% from left
objectPosition="50% 25%"

// Show mostly top but not quite at edge
objectPosition="center 10%"
```

---

## Examples from Employers Page

### Current Usage

```tsx
// Default - uses center
<NetflixCard
  title="Self-Taught Developer"
  imageUrl="/images/personas/employers/glorai1.png"
  badge="Full-Stack"
  // objectPosition defaults to "center"
/>
```

### To Show Top of Image

```tsx
<NetflixCard
  title="Basketball Photo"
  imageUrl="/images/personas/employers/bball-scholarship.JPG"
  badge="Athletic"
  objectPosition="top"  // Shows top of the photo
/>
```

### To Show Bottom of Image

```tsx
<NetflixCard
  title="Standing Photo"
  imageUrl="/images/personas/employers/headshot-full-smile.jpg"
  badge="Professional"
  objectPosition="bottom"  // Shows bottom/feet area
/>
```

---

## How It Works

The `objectPosition` prop maps directly to the CSS `object-position` property:

```tsx
<img
  src={imageUrl}
  style={{
    objectFit: 'cover',      // Crops to fit card dimensions
    objectPosition: objectPosition  // Controls which part shows
  }}
/>
```

---

## Quick Reference

| Want to show... | Use objectPosition... |
|----------------|----------------------|
| Person's face/head | `"top"` |
| Person's full body | `"center"` |
| Person's feet/bottom | `"bottom"` |
| Left side of scene | `"left"` |
| Right side of scene | `"right"` |
| Top-left corner | `"top left"` |
| Custom position | `"X% Y%"` (e.g., `"50% 20%"`) |

---

## Finding the Right Position

1. **Look at the full image** in `/public/images/personas/employers/`
2. **Identify what you want to show** (face, action, full scene, etc.)
3. **Add objectPosition prop** to the NetflixCard
4. **Test in browser** - adjust as needed

---

## Examples to Fix on Other Pages

### Fans Page Example
If a basketball photo is cropped at the waist, but you want to see the jump:

**Before:**
```tsx
<NetflixCard
  title="White Man CAN Jump"
  imageUrl="/images/personas/fans/fav-basketball-photo.jpg"
  // Shows middle of photo
/>
```

**After:**
```tsx
<NetflixCard
  title="White Man CAN Jump"
  imageUrl="/images/personas/fans/fav-basketball-photo.jpg"
  objectPosition="top"  // Now shows the jump!
/>
```

---

## Important Notes

1. **Card size stays the same** - only the visible portion of the image changes
2. **Image aspect ratio is preserved** - no distortion
3. **Default is "center"** - if you don't specify, it shows the middle
4. **Works on all pages** - fans, employers, suitors, curious, techies, investors
5. **Modal shows full image** - the Info button modal always shows the complete, uncropped image

---

## Testing Your Changes

1. Edit the card with `objectPosition` prop
2. Refresh the page (http://localhost:3000/employers or other page)
3. Look at the card - is the right part visible?
4. If not, try: `"top"`, `"bottom"`, `"left"`, `"right"`, or percentages
5. Click "Info" button to see full image in modal

---

## Common Fixes

### Fix: Show Person's Face
```tsx
objectPosition="top"
```

### Fix: Show Person's Whole Body
```tsx
objectPosition="center"  // or leave blank (default)
```

### Fix: Show Action Happening at Top
```tsx
objectPosition="top"
```

### Fix: Show Group of People (Wide Shot)
```tsx
objectPosition="center"  // usually best for group shots
```

### Fix: Show Specific Area (e.g., Top 20% of Image)
```tsx
objectPosition="center 20%"
```

---

## Need More Help?

The CSS `object-position` property supports any CSS position value:
- Keywords: `top`, `bottom`, `left`, `right`, `center`
- Percentages: `50% 25%` (horizontal, vertical)
- Combinations: `top left`, `bottom right`, etc.

**Visual Guide:**
```
top left        top center       top right
    ↓               ↓                ↓
    ┌───────────────────────────────┐
    │                               │
left│           center          right│
    │                               │
    └───────────────────────────────┘
    ↑               ↑                ↑
bottom left   bottom center   bottom right
```

---

**Bottom Line:** Add `objectPosition="top"` (or `"bottom"`, `"left"`, `"right"`) to any NetflixCard to control which part of the photo shows in the card thumbnail. The full image always appears in the modal when clicking "Info".
