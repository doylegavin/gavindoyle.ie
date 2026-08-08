'use client';

import Billboard from '@/components/Billboard';
import NetflixCard from '@/components/NetflixCard';
import NavSection from '@/components/NavSection';
import { NavigationProvider } from '@/components/NavigationProvider';

const EPISODES = [
  {
    title: 'From Teacher to Founder',
    subtitle: 'Episode 1',
    description: 'Lessons learned making the jump from 7 years in the classroom to full-time founder.',
    imageUrl: '/images/personas/employers/in_classoom_teaching_examinaite.JPG',
    tags: ['Origin Story', '10 min read'],
    imagePosition: 8,
  },
  {
    title: 'Examinaite V2 Progress',
    subtitle: 'Episode 2',
    description: 'Working on adaptive difficulty and better PDF exports - a build log from the trenches.',
    imageUrl: '/images/personas/employers/examinaite2.png',
    tags: ['Build Log', '8 min read'],
    imagePosition: 8,
  },
  {
    title: 'Building GlórAI From Scratch',
    subtitle: 'Episode 3',
    description: "The journey of building Ireland's first Irish-language AI voice bot.",
    imageUrl: '/images/personas/techies/glorai1.png',
    tags: ['Voice AI', '12 min read'],
    imagePosition: 5,
  },
  {
    title: 'AI-Generated PDFs with React',
    subtitle: 'Episode 4',
    description: 'Deep dive into @react-pdf/renderer and generating exam-quality documents on the fly.',
    imageUrl: '/images/personas/employers/examinaite3.png',
    tags: ['Technical', '15 min read'],
    imagePosition: 8,
  },
  {
    title: 'Prompt Engineering for Education',
    subtitle: 'Episode 5',
    description: 'How to tune LLM prompts for Leaving Cert-quality questions and solutions.',
    imageUrl: '/images/personas/employers/examinaite1.png',
    tags: ['AI', '11 min read'],
    imagePosition: 8,
  },
  {
    title: 'Building Fast with Next.js',
    subtitle: 'Episode 6',
    description: 'My setup for rapid prototyping - how the boring stack ships products fast.',
    imageUrl: '/images/personas/techies/NAIC.JPG',
    tags: ['Stack', '9 min read'],
    imagePosition: 5,
  },
  {
    title: 'Basketball to Code',
    subtitle: 'Episode 7',
    description: 'How semi-pro basketball prepared me for startup life - discipline, losses, and long seasons.',
    imageUrl: '/images/Dunk.jpg',
    tags: ['Life', '7 min read'],
    imagePosition: 9,
  },
  {
    title: 'Coffee Culture & Creativity',
    subtitle: 'Episode 8',
    description: 'Why I only drink coffee from 3fe, and what baristas taught me about craft.',
    imageUrl: '/images/EricOfWizards.jpg',
    tags: ['Culture', '6 min read'],
    imagePosition: 8,
  },
  {
    title: 'Teaching in the AI Age',
    subtitle: 'Episode 9',
    description: 'Unpopular opinion: AI is already better than some teachers. A hot take from someone who was one.',
    imageUrl: '/images/Me_and_the_Examinaite_team.JPG',
    tags: ['Hot Take', '13 min read'],
    imagePosition: 7,
  },
];

export default function BlogPage() {
  return (
    <NavigationProvider>
      <div className="netflix-page">
        <Billboard
          title="The Blog"
          tagline="Thoughts on technology, teaching, and the space between"
          description="Stories from the journey: building products, preserving Irish, leaving the classroom, and the odd hot take. Season 1 is in production."
          imageUrl="/images/personas/investors/podcast-cybersecurity.JPG"
          imagePosition={6}
          seriesLabel="Original Series"
          badge="Season 1 In Production"
          ratingFlag="Unscripted"
          match="100% Honest"
          year="2026"
          parts="9 Episodes"
          primaryCta={{ text: 'Get Notified', href: '/contact' }}
          secondaryCta={{ text: 'About the Author', href: '/about' }}
        />

        <NavSection title="Season 1 — Coming Soon">
          {EPISODES.map((ep) => (
            <NetflixCard
              key={ep.title}
              title={ep.title}
              subtitle={ep.subtitle}
              description={ep.description}
              imageUrl={ep.imageUrl}
              tags={ep.tags}
              rating="Coming Soon"
              imagePosition={ep.imagePosition}
            />
          ))}
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
