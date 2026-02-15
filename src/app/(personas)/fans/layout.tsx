import { Metadata } from 'next';
import FansClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Follow Gavin Doyle | Creator, Teacher & Entrepreneur',
  description: 'Follow Gavin\'s journey from teacher to tech founder. Insights on education, entrepreneurship, AI innovation, and building Examinaite from 0 to 2,000+ students. Irish language tech advocate.',
  openGraph: {
    title: 'Follow Gavin Doyle | Creator, Teacher & Entrepreneur',
    description: 'Follow Gavin\'s journey from teacher to tech founder. Insights on education, entrepreneurship, and AI innovation.',
    url: 'https://gavindoyle.ie/fans',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/fans/',
  },
};

export default function FansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FansClientLayout>{children}</FansClientLayout>;
}
