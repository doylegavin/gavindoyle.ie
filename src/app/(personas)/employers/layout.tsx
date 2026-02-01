'use client';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <button
        className="back-btn"
        onClick={() => window.location.href = '/'}
      >
        ← Back to Profiles
      </button>
      <header className="header">
        <nav className="nav">
          <div className="nav-logo">G</div>
          <ul className="nav-links">
            <li><Link href="/employers">Overview</Link></li>
            <li><a href="/cv/Gavin_Doyle_CV.pdf" download>CV</a></li>
            <li><a onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</a></li>
            <li><a onClick={() => scrollToSection('awards')} style={{ cursor: 'pointer' }}>Awards</a></li>
            <li><a onClick={() => scrollToSection('press')} style={{ cursor: 'pointer' }}>Press</a></li>
          </ul>
        </nav>
      </header>
      {children}
      <Footer />
    </>
  );
}
