'use client';

import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <PersonaHero
        title="Get In Touch"
        description="Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life."
        primaryCta={{
          text: "Email Me",
          href: "mailto:doyle.d.gavin@gmail.com"
        }}
        secondaryCta={{
          text: "Book 30-min Call",
          href: "https://calendly.com/doyle-d-gavin/30min"
        }}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      
      <section className="content-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="content-grid">
          <ContentCard
            title="Email"
            content="doyle.d.gavin@gmail.com - for project inquiries, collaboration opportunities, or just to say hello!"
            icon="📧"
          />
          <ContentCard
            title="Location"
            content="Dublin, Ireland - available for remote work or in-person meetings around Dublin"
            icon="📍"
          />
          <ContentCard
            title="Response Time"
            content="Usually respond within 24 hours. Faster if it's about basketball or good coffee spots."
            icon="⏰"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Social Links</h2>
        <div className="content-grid">
          <ContentCard
            title="Instagram"
            content="@gavinthecraic - behind the scenes, Dublin life, basketball courts"
            href="https://instagram.com/gavinthecraic"
            icon="📸"
          />
          <ContentCard
            title="GitHub"
            content="All my code, projects, and contributions. See what I'm building."
            href="https://github.com/doylegavin"
            icon="💻"
          />
          <ContentCard
            title="LinkedIn"
            content="Professional updates, teaching background, startup journey"
            href="https://www.linkedin.com/in/doyle-gavin"
            icon="💼"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">What I Can Help With</h2>
        <div className="content-grid">
          <ContentCard
            title="Website Development"
            content="Landing pages, marketing sites, portfolio rebuilds, small apps. React/Next.js specialist."
            icon="🌐"
          />
          <ContentCard
            title="Education Tech"
            content="AI in education, teacher workflows, student engagement tools. 7+ years classroom experience."
            icon="🎓"
          />
          <ContentCard
            title="Irish Language Projects"
            content="Irish language preservation through technology. Cultural sensitivity and technical expertise combined."
            icon="🇮🇪"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Schedule a Call</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Prefer to chat? Book a 30-minute call to discuss your project, get advice, or just have a friendly conversation about tech, teaching, or Dublin&apos;s best coffee spots.
          </p>
          {/* Calendly inline widget */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/doyle-d-gavin/30min" style={{minWidth: '320px', height: '700px'}}></div>
        </div>
      </section>

      <section className="content-section">
        <div className="cta-block">
          <h2>Let&apos;s build something useful together</h2>
          <p>Always up for interesting projects and good conversations.</p>
          <div className="cta-buttons">
            <a href="mailto:doyle.d.gavin@gmail.com" className="btn btn-primary">Send Email</a>
            <a href="https://instagram.com/gavinthecraic" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
          </div>
        </div>
      </section>
    </>
  );
}
