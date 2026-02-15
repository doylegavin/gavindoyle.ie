import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gavin Doyle | Founder & CEO of Examinaite',
  description: 'Irish educator-turned-founder building the future of education technology. Founder & CEO of Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students.',
  verification: {
    google: 'VvZ9-TGxO8GiVtAUJeoXUJQqn2qYtWF2N7n5tpOD4IE',
  },
  openGraph: {
    title: 'Gavin Doyle | Founder & CEO of Examinaite',
    description: 'Irish educator-turned-founder building the future of education technology. Founder & CEO of Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students.',
    url: 'https://gavindoyle.ie',
    siteName: 'Gavin Doyle',
    images: [
      {
        url: 'https://gavindoyle.ie/images/personas/employers/headshot-full-smile.jpg',
        width: 1200,
        height: 630,
        alt: 'Gavin Doyle - Founder & CEO of Examinaite',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gavin Doyle | Founder & CEO of Examinaite',
    description: 'Irish educator-turned-founder building the future of education technology.',
    images: ['https://gavindoyle.ie/images/personas/employers/headshot-full-smile.jpg'],
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/',
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
