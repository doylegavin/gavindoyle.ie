'use client';
import Footer from '@/components/Footer';
import NetflixNavbar from '@/components/NetflixNavbar';

export default function CuriousClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NetflixNavbar
        personaSlug="curious"
        links={[
          { label: 'Investigate', href: '/curious' },
          { label: 'Timeline', href: '/about' },
          { label: 'Secrets', href: '/projects' },
          { label: 'FAQ', href: '/contact' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
