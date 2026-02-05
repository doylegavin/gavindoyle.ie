'use client';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function InvestorsClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <li><Link href="/investors">Overview</Link></li>
            <li><Link href="/projects">Portfolio</Link></li>
            <li><Link href="/about">Track Record</Link></li>
            <li><Link href="/contact">Connect</Link></li>
          </ul>
        </nav>
      </header>
      {children}
      <Footer />
    </>
  );
}
