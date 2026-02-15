import { Metadata } from 'next';
import SuitorsClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'About Gavin Doyle | Dublin-Based Educator & Founder',
  description: 'Dublin native combining education, sports, and technology. Former PE and Maths teacher turned startup founder. Adventure seeker, fitness enthusiast, and passionate about Irish language and culture.',
  openGraph: {
    title: 'About Gavin Doyle | Dublin-Based Educator & Founder',
    description: 'Dublin native combining education, sports, and technology. Former teacher turned startup founder and adventure seeker.',
    url: 'https://gavindoyle.ie/suitors',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/suitors/',
  },
};

export default function SuitorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SuitorsClientLayout>{children}</SuitorsClientLayout>;
}
