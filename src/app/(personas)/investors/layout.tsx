import { Metadata } from 'next';
import InvestorsClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Invest in Examinaite | AI EdTech Startup Ireland',
  description: 'EdTech startup serving 2,000+ Leaving Cert students in Ireland. Enterprise Ireland New Frontiers Phase 2. The Pitch UK Finalist. Building AI-powered exam preparation platform with proven product-market fit.',
  openGraph: {
    title: 'Invest in Examinaite | AI EdTech Startup Ireland',
    description: 'EdTech startup serving 2,000+ Leaving Cert students in Ireland. Enterprise Ireland backed. Proven product-market fit in Irish education.',
    url: 'https://gavindoyle.ie/investors',
    siteName: 'Gavin Doyle',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://gavindoyle.ie/investors',
  },
};

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <InvestorsClientLayout>{children}</InvestorsClientLayout>;
}
