'use client';
import Footer from '@/components/Footer';
import NetflixNavbar from '@/components/NetflixNavbar';

export default function EmployersClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NetflixNavbar
        personaSlug="employers"
        links={[
          { label: 'Overview', href: '/employers' },
          { label: 'CV', href: '/cv/Gavin_Doyle_CV.pdf' },
          { label: 'Projects', href: '/employers#projects' },
          { label: 'Awards', href: '/employers#awards' },
          { label: 'Press', href: '/about/press' },
        ]}
      />
      {children}
      <Footer />
    </>
  );
}
