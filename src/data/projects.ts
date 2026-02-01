export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  year: string;
  status: 'Live' | 'In Development' | 'Completed' | 'Archived';
  role: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: {
    hero: string;
    gallery: string[];
  };
  metrics?: {
    users?: string;
    growth?: string;
    performance?: string;
    other?: string;
  };
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 'examinaite',
    title: 'Examinaite',
    subtitle: 'AI-Powered Revision Platform',
    description: 'AI revision platform for the Leaving Cert. Generates LC-style questions, step-by-step solutions, PDF export; teacher dashboards inbound.',
    longDescription: 'Examinaite is a comprehensive AI-powered revision platform designed specifically for Irish Leaving Certificate students. Built from the ground up as a teacher-turned-founder, I identified the core problem: students need targeted practice with exam-style questions, and teachers need efficient ways to create and mark assessments.',
    year: '2023',
    status: 'Live',
    role: 'Founder, Full-Stack Developer, Product Manager',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Prisma', 'Neon PostgreSQL', 'OpenAI API', 'PostHog', '@react-pdf/renderer'],
    liveUrl: 'https://examinaite.ie',
    githubUrl: 'https://github.com/doylegavin/examinaite',
    images: {
      hero: '/images/projects/examinaite-hero.svg',
      gallery: [
        '/images/projects/examinaite-dashboard.svg',
        '/images/projects/examinaite-questions.svg',
        '/images/projects/examinaite-pdf.svg'
      ]
    },
    metrics: {
      users: '1,000+ active users',
      growth: '3 months to 1K users',
      performance: '95+ Lighthouse score',
      other: 'Enterprise Ireland New Frontiers Phase 2'
    },
    challenges: [
      'Creating AI prompts that generate Leaving Cert standard questions',
      'Building PDF generation system for exam-quality output',
      'Scaling from 0 to 1000+ users as solo developer',
      'Balancing teacher and student needs in one platform'
    ],
    solutions: [
      'Developed custom prompt engineering system with LC curriculum alignment',
      'Built custom PDF renderer with @react-pdf/renderer for textbook-quality output',
      'Implemented efficient caching and database optimization strategies',
      'Created separate dashboards and workflows for different user types'
    ],
    outcomes: [
      'Reached 1,000+ users in first 3 months',
      'Accepted into Enterprise Ireland New Frontiers Phase 1 & 2',
      'NDRC Pre-Accelerator alumni',
      'Teachers report 50%+ time savings on assessment creation',
      'Students show improved engagement with instant feedback'
    ],
    testimonial: {
      quote: "Examinaite has transformed how I prepare mock exams. What used to take hours now takes minutes, and the quality is consistently high.",
      author: "Sarah O'Brien",
      role: "Mathematics Teacher, Dublin"
    }
  },
  {
    id: 'glorai',
    title: 'GlórAI',
    subtitle: 'Irish Language AI Voice Bot',
    description: 'First Irish-language AI voice companion with oral prep and daily chat modes.',
    longDescription: 'GlórAI represents a breakthrough in Irish language technology - the first AI voice bot capable of natural conversation in Irish. Built to preserve and promote the Irish language through modern technology, it provides learners with an always-available conversation partner.',
    year: '2024',
    status: 'In Development',
    role: 'Founder, AI Engineer, Product Designer',
    technologies: ['Next.js', 'TypeScript', 'OpenAI Whisper', 'OpenAI GPT-4', 'Web Speech API', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://gaeilgeoir.ai',
    images: {
      hero: '/images/projects/glorai-hero.svg',
      gallery: [
        '/images/projects/glorai-chat.svg',
        '/images/projects/glorai-voice.svg'
      ]
    },
    metrics: {
      other: 'National AI Challenge 2025 Finalist'
    },
    challenges: [
      'Training AI to understand Irish language nuances and dialects',
      'Building real-time voice processing for a minority language',
      'Creating culturally appropriate responses and content',
      'Handling technical limitations of Irish language AI models'
    ],
    solutions: [
      'Custom prompt engineering with Irish cultural context',
      'Implemented Web Speech API with Irish language support',
      'Built conversation flows that respect Irish language traditions',
      'Created fallback systems for handling complex Irish grammar'
    ],
    outcomes: [
      'First working Irish AI voice bot in Ireland',
      'National AI Challenge 2025 finalist',
      'Positive reception from Irish language community',
      'Waitlist of 500+ potential users'
    ]
  },
  {
    id: 'dronan-weddings',
    title: 'Dr Ónán Weddings',
    subtitle: 'Wedding Videography Portfolio',
    description: 'Portfolio website for wedding videographer. Modern, classy portfolio with warm pastel theme. Faster page loads, clearer CTA, better SEO hygiene.',
    longDescription: 'A complete redesign and rebuild of a wedding videography portfolio website. The client needed a modern, elegant showcase for their work that would convert visitors into bookings while maintaining fast loading times and excellent SEO.',
    year: '2023',
    status: 'Live',
    role: 'Full-Stack Developer, UX Designer',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Figma'],
    liveUrl: 'https://dronanweddings.ie',
    images: {
      hero: '/images/projects/dronan-hero.svg',
      gallery: [
        '/images/projects/dronan-gallery.svg',
        '/images/projects/dronan-contact.svg'
      ]
    },
    metrics: {
      performance: '98 Lighthouse score',
      other: '40% increase in contact form submissions'
    },
    challenges: [
      'Showcasing video content without impacting page speed',
      'Creating emotional connection through design',
      'Optimizing for wedding industry SEO keywords',
      'Mobile-first design for couples browsing on phones'
    ],
    solutions: [
      'Implemented lazy loading and optimized video thumbnails',
      'Designed warm pastel color scheme with elegant typography',
      'Built comprehensive SEO strategy with local wedding keywords',
      'Created responsive design with touch-friendly navigation'
    ],
    outcomes: [
      '40% increase in contact form submissions',
      '98 Lighthouse performance score',
      'Featured in local wedding vendor directories',
      'Client reports increased booking inquiries'
    ],
    testimonial: {
      quote: "The new website perfectly captures the emotion and quality of our work. We've seen a significant increase in inquiries since launch.",
      author: "Rónán O'Sullivan",
      role: "Wedding Videographer"
    }
  },
  {
    id: 'thekneecapp',
    title: 'The Kneecapp',
    subtitle: 'Irish-English Lyric Translation',
    description: 'Bilingual lyrics translator (Irish ↔ English) with education focus. JSON-driven lyric project supporting Irish language learning.',
    longDescription: 'A passion project born from my love of Kneecap and desire to learn more Irish. The Kneecapp translates all Kneecap songs between Irish and English, helping fans understand the lyrics while learning the language.',
    year: '2024',
    status: 'Live',
    role: 'Developer, Translator, Content Creator',
    technologies: ['Next.js', 'TypeScript', 'JSON', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://thekneecapp.ie',
    images: {
      hero: '/images/projects/kneecapp-hero.svg',
      gallery: [
        '/images/projects/kneecapp-lyrics.svg',
        '/images/projects/kneecapp-translation.svg'
      ]
    },
    challenges: [
      'Accurately translating Irish slang and cultural references',
      'Creating an intuitive bilingual interface',
      'Organizing complex lyrical content efficiently',
      'Respecting copyright while promoting language learning'
    ],
    solutions: [
      'Collaborated with native Irish speakers for accurate translations',
      'Built toggle system for seamless language switching',
      'Developed JSON-based content management system',
      'Focused on educational fair use and language preservation'
    ],
    outcomes: [
      'Complete translation of Kneecap discography',
      'Positive reception from Irish language community',
      'Featured in Irish language learning resources',
      'Helped fans connect with Irish culture through music'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
