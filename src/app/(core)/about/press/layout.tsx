import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press & Media - Gavin Doyle | Featured in Irish Times, Irish Independent',
  description: 'Press coverage and media features on Gavin Doyle and Examinaite. Featured in Irish Times and Irish Independent discussing AI-powered education and the teacher-to-founder journey.',
  openGraph: {
    title: 'Press & Media - Gavin Doyle',
    description: 'Press coverage and media features on Gavin Doyle and Examinaite. Featured in Irish Times and Irish Independent.',
    url: 'https://gavindoyle.ie/about/press',
    siteName: 'Gavin Doyle',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/about/press/',
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
