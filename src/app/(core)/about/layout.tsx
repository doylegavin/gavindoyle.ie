import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Gavin Doyle | Founder & CEO of Examinaite',
  description: 'Irish educator-turned-founder and software developer. Founder & CEO of Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students.',
  openGraph: {
    title: 'About Gavin Doyle | Founder & CEO of Examinaite',
    description: 'Irish educator-turned-founder and software developer. Founder & CEO of Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students.',
    url: 'https://gavindoyle.ie/about',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/about/',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
