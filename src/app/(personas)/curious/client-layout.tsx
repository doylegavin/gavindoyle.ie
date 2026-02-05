'use client';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CuriousClientLayout({
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
            <li><Link href="/curious">Investigate</Link></li>
            <li><Link href="/about">Timeline</Link></li>
            <li><Link href="/projects">Secrets</Link></li>
            <li><Link href="/contact">FAQ</Link></li>
          </ul>
        </nav>
      </header>
      {children}
      <Footer />
    </>
  );
}
