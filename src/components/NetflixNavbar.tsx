'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PERSONAS, getPersona } from '@/data/personas';

interface NavLink {
  label: string;
  href: string;
}

interface NetflixNavbarProps {
  personaSlug: string;
  links?: NavLink[];
}

export default function NetflixNavbar({ personaSlug, links }: NetflixNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const browseRef = useRef<HTMLDivElement>(null);

  const persona = getPersona(personaSlug);
  const otherPersonas = PERSONAS.filter((p) => p.slug !== personaSlug);

  const navLinks = links ?? [
    { label: 'Home', href: `/${personaSlug}` },
    { label: 'Blog', href: '/blog' },
    { label: 'Gallery', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Connect', href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdowns when clicking/tapping outside
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (browseRef.current && !browseRef.current.contains(e.target as Node)) {
        setBrowseOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return (
    <header className={`nflx-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nflx-navbar-left">
        <Link href="/" className="nflx-wordmark" aria-label="Back to profile selection">
          Gavin Doyle
        </Link>

        {/* Desktop links */}
        <nav className="nflx-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile "Browse" dropdown */}
        <div className="nflx-browse" ref={browseRef}>
          <button
            className="nflx-browse-btn"
            aria-haspopup="true"
            aria-expanded={browseOpen}
            onClick={() => setBrowseOpen((v) => !v)}
          >
            Browse <span className={`nflx-caret ${browseOpen ? 'up' : ''}`}>▾</span>
          </button>
          {browseOpen && (
            <div className="nflx-dropdown nflx-browse-dropdown">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={() => setBrowseOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="nflx-navbar-right">
        <div
          className="nflx-profile"
          ref={profileRef}
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}
        >
          <button
            className="nflx-profile-btn"
            aria-haspopup="true"
            aria-expanded={profileOpen}
            aria-label={`Profile: ${persona.name}. Switch profiles`}
            onClick={() => setProfileOpen((v) => !v)}
          >
            <Image
              src={persona.avatar}
              alt={persona.name}
              width={32}
              height={32}
              className="nflx-avatar"
            />
            <span className={`nflx-caret ${profileOpen ? 'up' : ''}`}>▾</span>
          </button>

          {profileOpen && (
            <div className="nflx-dropdown nflx-profile-dropdown">
              {otherPersonas.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className="nflx-profile-item">
                  <Image src={p.avatar} alt="" width={28} height={28} className="nflx-avatar" />
                  <span>{p.name}</span>
                </Link>
              ))}
              <Link href="/" className="nflx-profile-item nflx-switch-profiles">
                Switch Profiles
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
