import { Metadata } from 'next';
import EmployersClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Hire Gavin Doyle | Full-Stack Developer & EdTech Founder',
  description: 'Experienced full-stack developer and founder with 7 years teaching experience. Built Examinaite serving 2,000+ students. Expertise in Next.js, React, TypeScript, Python, AI integration, and scalable web applications.',
  openGraph: {
    title: 'Hire Gavin Doyle | Full-Stack Developer & EdTech Founder',
    description: 'Experienced full-stack developer and founder. Built Examinaite serving 2,000+ students. Expertise in Next.js, React, TypeScript, Python, and AI integration.',
    url: 'https://gavindoyle.ie/employers',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/employers/',
  },
};

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <EmployersClientLayout>{children}</EmployersClientLayout>;
}
