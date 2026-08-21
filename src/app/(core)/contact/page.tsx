'use client';

import { useEffect } from 'react';
import Billboard from '@/components/Billboard';

interface Channel {
  name: string;
  desc: string;
  cta: string;
  href: string;
  icon?: string;
  emoji?: string;
  color: string;
  glow: string;
}

const CHANNELS: Channel[] = [
  {
    name: 'Email',
    desc: 'Project inquiries, collaborations, or just to say hello. Detailed reply within 24 hours.',
    cta: 'doyle.d.gavin@gmail.com',
    href: 'mailto:doyle.d.gavin@gmail.com',
    icon: '/images/general/logos/gmail-logo.svg',
    color: '#EA4335',
    glow: 'rgba(234, 67, 53, 0.55)',
  },
  {
    name: 'Calendly',
    desc: 'Book a focused 30-minute call about your project, timeline, or ideas.',
    cta: 'Book 30 minutes',
    href: 'https://calendly.com/doyle-d-gavin/30min',
    icon: '/images/general/logos/calendly-logo.svg',
    color: '#006BFF',
    glow: 'rgba(0, 107, 255, 0.55)',
  },
  {
    name: 'LinkedIn',
    desc: 'The professional record: background, recommendations, and the startup journey.',
    cta: 'Connect',
    href: 'https://www.linkedin.com/in/doyle-gavin',
    icon: '/images/general/logos/linkedin-logo.svg',
    color: '#0A66C2',
    glow: 'rgba(10, 102, 194, 0.55)',
  },
  {
    name: 'GitHub',
    desc: 'Repositories, contributions, and the technical quality behind the projects.',
    cta: 'View code',
    href: 'https://github.com/doylegavin',
    icon: '/images/general/logos/github-logo.svg',
    color: '#8b949e',
    glow: 'rgba(139, 148, 158, 0.5)',
  },
  {
    name: 'Instagram',
    desc: '@gavinthecraic - behind the scenes, Dublin life, and basketball courts.',
    cta: 'Follow along',
    href: 'https://instagram.com/gavinthecraic',
    icon: '/images/general/logos/instagram-logo.svg',
    color: '#E4405F',
    glow: 'rgba(228, 64, 95, 0.55)',
  },
];

const HELP_WITH = [
  {
    name: 'Web Development',
    emoji: '🌐',
    desc: 'Landing pages, marketing sites, portfolio rebuilds, small apps. React/Next.js specialist.',
  },
  {
    name: 'Education Tech',
    emoji: '🎓',
    desc: 'AI in education, teacher workflows, student engagement tools. 7+ years classroom experience.',
  },
  {
    name: 'Irish Language Projects',
    emoji: '🇮🇪',
    desc: 'Irish language preservation through technology. Cultural sensitivity and technical expertise combined.',
  },
];

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="netflix-page">
      <Billboard
        title="Get In Touch"
        tagline="Always up for interesting projects and good conversations"
        description="Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life."
        imageUrl="/images/400A6919.jpg"
        imagePosition={6}
        seriesLabel="Connect"
        badge="Now Accepting Projects"
        ratingFlag="Open to Work"
        match="100% Reply Rate"
        year="Dublin, Ireland"
        parts="Replies < 24h"
        primaryCta={{ text: 'Email Me', href: 'mailto:doyle.d.gavin@gmail.com' }}
        secondaryCta={{ text: 'Book a Call', href: '#book' }}
      />

      <section className="connect-section">
        <h2 className="netflix-section-title">Pick Your Channel</h2>
        <div className="contact-channels">
          {CHANNELS.map((c) => (
            <a
              key={c.name}
              className="channel-tile"
              href={c.href}
              target={c.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={c.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              style={{ '--tile-color': c.color, '--tile-glow': c.glow } as React.CSSProperties}
            >
              <span className="channel-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.icon} alt="" />
              </span>
              <span className="channel-name">{c.name}</span>
              <span className="channel-desc">{c.desc}</span>
              <span className="channel-cta">{c.cta} →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="connect-section" id="book">
        <h2 className="netflix-section-title">Book a 30-Minute Call</h2>
        <p className="connect-sub">
          Prefer to chat? Book a call to discuss your project, get advice, or have a friendly
          conversation about tech, teaching, or Dublin&apos;s best coffee spots.
        </p>
        <div className="calendly-shell">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/doyle-d-gavin/30min?hide_gdpr_banner=1&background_color=181818&text_color=ffffff&primary_color=e50914"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </section>

      <section className="connect-section">
        <h2 className="netflix-section-title">What I Can Help With</h2>
        <div className="contact-channels">
          {HELP_WITH.map((h) => (
            <div key={h.name} className="channel-tile">
              <span className="channel-emoji">{h.emoji}</span>
              <span className="channel-name">{h.name}</span>
              <span className="channel-desc">{h.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
