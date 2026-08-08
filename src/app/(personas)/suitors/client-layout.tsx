'use client';
import Footer from '@/components/Footer';
import NetflixNavbar from '@/components/NetflixNavbar';

export default function SuitorsClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NetflixNavbar
        personaSlug="suitors"
        links={[
          { label: 'About Me', href: '/suitors' },
          { label: 'Personal', href: '/about' },
          { label: 'Adventures', href: '/projects' },
          { label: 'Connect', href: '/contact' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
