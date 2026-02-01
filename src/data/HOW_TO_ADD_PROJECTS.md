# How to Add New Projects

## Quick Steps:

1. **Add project data** to `/src/data/projects.ts`
2. **Add project images** to `/public/images/projects/`
3. **Project pages automatically generate** at `/projects/[slug]`

## Adding a New Project:

### 1. Edit `/src/data/projects.ts`

Add a new project object to the `projects` array:

```typescript
{
  id: 'my-new-project', // This becomes the URL slug
  title: 'My New Project',
  subtitle: 'Brief tagline',
  description: 'Short description for cards',
  longDescription: 'Detailed description for the project page',
  year: '2024',
  status: 'Live', // 'Live' | 'In Development' | 'Completed' | 'Archived'
  role: 'Full-Stack Developer',
  technologies: ['Next.js', 'TypeScript', 'React'],
  liveUrl: 'https://myproject.com', // Optional
  githubUrl: 'https://github.com/user/repo', // Optional
  images: {
    hero: '/images/projects/myproject-hero.svg',
    gallery: [
      '/images/projects/myproject-screen1.svg',
      '/images/projects/myproject-screen2.svg'
    ]
  },
  metrics: { // Optional
    users: '500+ users',
    growth: '2 months to launch',
    performance: '99 Lighthouse score'
  },
  challenges: [
    'Challenge 1',
    'Challenge 2'
  ],
  solutions: [
    'Solution 1', 
    'Solution 2'
  ],
  outcomes: [
    'Outcome 1',
    'Outcome 2'
  ],
  testimonial: { // Optional
    quote: "Great work!",
    author: "Client Name",
    role: "CEO, Company"
  }
}
```

### 2. Add Project Images

Create images in `/public/images/projects/`:
- `myproject-hero.svg` (1200x600px) - Main hero image
- `myproject-screen1.svg` (800x600px) - Screenshot 1
- `myproject-screen2.svg` (800x600px) - Screenshot 2

### 3. That's It!

The project will automatically:
- ✅ Appear on `/projects` page
- ✅ Have its own page at `/projects/my-new-project`
- ✅ Include modal with full details
- ✅ Generate static routes for SEO

## Current Projects:

1. **Examinaite** - `/projects/examinaite`
2. **GlórAI** - `/projects/glorai` 
3. **Dr Ónán Weddings** - `/projects/dronan-weddings`
4. **The Kneecapp** - `/projects/thekneecapp`

## Features:

- 📱 **Responsive design** - Works on all devices
- 🖼️ **Image gallery** with navigation
- 📊 **Metrics display** with visual formatting
- 💬 **Testimonials** support
- 🔗 **External links** to live sites and GitHub
- 🎨 **Status badges** with color coding
- 📝 **Detailed breakdowns** of challenges, solutions, outcomes

## Tips:

- Use descriptive `id` values (they become URLs)
- Keep `description` short for card display
- Use `longDescription` for detailed explanations
- Add real screenshots when available (replace SVG placeholders)
- Include metrics when possible (users love numbers!)
- Testimonials add credibility


