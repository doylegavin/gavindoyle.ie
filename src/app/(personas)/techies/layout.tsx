'use client';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TechiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <button className="back-btn" onClick={() => window.location.href = '/'}>
        ← Back to Profiles
      </button>
      <header className="header">
        <nav className="nav">
          <div className="nav-logo">G</div>
          <ul className="nav-links">
            <li><Link href="/techies">Overview</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">Tech Stack</Link></li>
            <li><Link href="/contact">Connect</Link></li>
          </ul>
        </nav>
      </header>
      {children}
          <Footer />
    </>
  );
}
