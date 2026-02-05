import { Metadata } from 'next';
import TechiesClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Gavin Doyle Tech Stack | Next.js, React, Python, AI Developer',
  description: 'Self-taught developer specializing in Next.js, React, TypeScript, Python, and AI integration. Built production apps serving 2,000+ users. Experience with OpenAI API, Supabase, Stripe, and modern web development.',
  openGraph: {
    title: 'Gavin Doyle Tech Stack | Next.js, React, Python, AI Developer',
    description: 'Self-taught developer specializing in Next.js, React, TypeScript, Python, and AI integration. Built production apps serving 2,000+ users.',
    url: 'https://gavindoyle.ie/techies',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/techies',
  },
};

export default function TechiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TechiesClientLayout>{children}</TechiesClientLayout>;
}
