import { Metadata } from 'next';
import CuriousClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Discover Gavin Doyle | Teacher to Tech Founder Story',
  description: 'Discover how a PE and Maths teacher became a self-taught developer and EdTech founder. Journey from classroom to startup, building Examinaite, GlórAI, and The Kneecapp while teaching full-time.',
  openGraph: {
    title: 'Discover Gavin Doyle | Teacher to Tech Founder Story',
    description: 'Discover how a PE and Maths teacher became a self-taught developer and EdTech founder serving 2,000+ students.',
    url: 'https://gavindoyle.ie/curious',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/curious',
  },
};

export default function CuriousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CuriousClientLayout>{children}</CuriousClientLayout>;
}
