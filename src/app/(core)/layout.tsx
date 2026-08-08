'use client';

import Footer from '@/components/Footer';
import NetflixNavbar from '@/components/NetflixNavbar';

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NetflixNavbar
        personaSlug="gavin"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Gallery', href: '/projects' },
          { label: 'About', href: '/about' },
          { label: 'Connect', href: '/contact' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
