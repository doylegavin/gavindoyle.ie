'use client';
import Footer from '@/components/Footer';

export default function SuitorsClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <button className="back-btn" onClick={() => window.location.href = '/'}>
        ← Back to Profiles
      </button>
      {children}
      <Footer />
    </>
  );
}
