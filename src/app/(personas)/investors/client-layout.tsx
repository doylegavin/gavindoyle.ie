'use client';
import Footer from '@/components/Footer';
import NetflixNavbar from '@/components/NetflixNavbar';

export default function InvestorsClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NetflixNavbar
        personaSlug="investors"
        links={[
          { label: 'Overview', href: '/investors' },
          { label: 'Portfolio', href: '/projects' },
          { label: 'Track Record', href: '/about' },
          { label: 'Connect', href: '/contact' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
