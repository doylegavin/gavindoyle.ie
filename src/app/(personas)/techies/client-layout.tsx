'use client';
import Footer from '@/components/Footer';
import NetflixNavbar from '@/components/NetflixNavbar';

export default function TechiesClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NetflixNavbar
        personaSlug="techies"
        links={[
          { label: 'Overview', href: '/techies' },
          { label: 'Projects', href: '/projects' },
          { label: 'Tech Stack', href: '/about' },
          { label: 'Connect', href: '/contact' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
