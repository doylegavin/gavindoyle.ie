'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';

export default function PressPage() {
  return (
    <>
      <article className="press-page">
        <div className="press-container">
          {/* Header */}
          <header className="press-header">
            <h1>Press & Media</h1>
            <p className="lead">Coverage and features on Gavin Doyle and Examinaite</p>
          </header>

          {/* Featured Press */}
          <section className="featured-press">
            <h2>Featured Coverage</h2>

            <article className="press-article featured">
              <div className="press-meta">
                <span className="press-outlet">Irish Independent</span>
                <time dateTime="2026-01-27">January 27, 2026</time>
              </div>
              <h3>
                <a href="https://m.independent.ie/irish-news/education/meet-the-teacher-tech-duo-using-ai-as-an-alternative-to-grinds-for-leaving-cert-students/a377696583.html" target="_blank" rel="noopener noreferrer">
                  Meet the teacher-tech duo using AI as an alternative to grinds for Leaving Cert students
                </a>
              </h3>
              <p className="press-excerpt">
                Irish Independent features Examinaite&apos;s growth to 2,000+ students and the teacher-tech duo&apos;s innovative approach to AI-powered exam preparation as an alternative to traditional grinds.
              </p>
              <a href="https://m.independent.ie/irish-news/education/meet-the-teacher-tech-duo-using-ai-as-an-alternative-to-grinds-for-leaving-cert-students/a377696583.html" target="_blank" rel="noopener noreferrer" className="read-article">
                Read Full Article →
              </a>
            </article>

            <article className="press-article featured">
              <div className="press-meta">
                <span className="press-outlet">The Irish Times</span>
                <time dateTime="2024-12-04">December 4, 2024</time>
              </div>
              <h3>
                <a href="https://www.irishtimes.com/business/innovation/2024/12/04/teacher-quit-job-to-build-personalised-ai-revision-platform-for-leaving-cert/" target="_blank" rel="noopener noreferrer">
                  Teacher quit job to build personalised AI revision platform for Leaving Cert
                </a>
              </h3>
              <p className="press-excerpt">
                The Irish Times covers Gavin&apos;s journey from secondary school teacher to founder of Examinaite, exploring how 7 years of classroom experience informed the development of an AI-powered revision platform.
              </p>
              <a href="https://www.irishtimes.com/business/innovation/2024/12/04/teacher-quit-job-to-build-personalised-ai-revision-platform-for-leaving-cert/" target="_blank" rel="noopener noreferrer" className="read-article">
                Read Full Article →
              </a>
            </article>
          </section>

          {/* Recognition */}
          <section className="recognition-section">
            <h2>Recognition & Achievements</h2>
            <div className="recognition-grid">
              <div className="recognition-card">
                <h3>Enterprise Ireland New Frontiers Phase 2</h3>
                <p>Selected for Ireland&apos;s premier startup acceleration program</p>
                <span className="year">2024</span>
              </div>
              <div className="recognition-card">
                <h3>The Pitch UK Finalist</h3>
                <p>Top 8 from over 1,000 applications, pitched at Amazon HQ London</p>
                <span className="year">2024</span>
              </div>
              <div className="recognition-card">
                <h3>National AI Challenge Finalist</h3>
                <p>Ireland&apos;s largest hackathon, presented GlórAI innovation</p>
                <span className="year">2024</span>
              </div>
            </div>
          </section>

          {/* Speaking Topics */}
          <section className="speaking-section">
            <h2>Available for Speaking</h2>
            <p className="section-intro">
              Available for podcasts, panels, conferences, and educational events discussing AI in education, entrepreneurship, and Irish language technology.
            </p>
            <div className="topics-grid">
              <div className="topic-card">
                <h3>🎓 AI in Education</h3>
                <p>The teacher&apos;s perspective on AI in the classroom - what actually works vs what&apos;s just hype</p>
              </div>
              <div className="topic-card">
                <h3>🚀 Teacher-Turned-Founder</h3>
                <p>From classroom to startup - building Examinaite as a self-taught developer while teaching full-time</p>
              </div>
              <div className="topic-card">
                <h3>🇮🇪 Irish Language Tech</h3>
                <p>Building GlórAI and preserving the Irish language through innovative technology</p>
              </div>
              <div className="topic-card">
                <h3>🎯 Building for Niche Markets</h3>
                <p>How focusing on Irish education led to rapid user adoption and product-market fit</p>
              </div>
            </div>
          </section>

          {/* Media Kit */}
          <section className="media-kit-section">
            <h2>Media Kit & Bio</h2>
            <div className="bio-card">
              <div className="bio-text">
                <h3>Professional Bio</h3>
                <p>
                  Gavin Doyle is an Irish educator-turned-founder and software developer. After 7 years teaching PE and Mathematics in secondary schools, he founded Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students. Beyond Examinaite, Gavin created The Kneecapp (bilingual lyrics translator) and GlórAI (Ireland&apos;s first Irish-language AI voice companion). He holds a Bachelor&apos;s in Education from Dublin City University and a Master&apos;s in Strength & Conditioning from Ulster University.
                </p>
                <div className="bio-links">
                  <a href="/about">Full Bio</a>
                  <a href="/contact">Media Inquiries</a>
                  <a href="https://www.linkedin.com/in/doyle-gavin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
              <div className="bio-image">
                <Image
                  src="/images/personas/employers/headshot-full-smile.jpg"
                  alt="Gavin Doyle - Professional Headshot"
                  width={300}
                  height={300}
                  style={{ borderRadius: '8px' }}
                />
                <p className="image-caption">High-resolution headshots available upon request</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="cta-section">
            <h2>Let&apos;s Connect</h2>
            <p>For media inquiries, speaking engagements, or press materials</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">Get In Touch</a>
              <a href="mailto:doyle.d.gavin@gmail.com" className="cta-btn secondary">Email Directly</a>
            </div>
          </section>
        </div>
      </article>

      <Footer />

      <style jsx>{`
        .press-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #e5e5e5;
          padding: 4rem 2rem;
        }

        .press-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .press-header {
          text-align: center;
          margin-bottom: 4rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #333;
        }

        .press-header h1 {
          font-size: 3.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
        }

        .lead {
          font-size: 1.3rem;
          color: #b3b3b3;
        }

        h2 {
          font-size: 2rem;
          color: white;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .featured-press {
          margin-bottom: 4rem;
        }

        .press-article {
          padding: 2rem;
          background: #1a1a1a;
          border-radius: 8px;
          border-left: 4px solid #e50914;
          margin-bottom: 2rem;
        }

        .press-article.featured {
          border-left-width: 6px;
        }

        .press-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .press-outlet {
          color: #e50914;
          font-weight: 600;
        }

        time {
          color: #808080;
        }

        .press-article h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .press-article h3 a {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
        }

        .press-article h3 a:hover {
          color: #e50914;
        }

        .press-excerpt {
          color: #e5e5e5;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .read-article {
          display: inline-block;
          color: #e50914;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .read-article:hover {
          opacity: 0.8;
        }

        .recognition-section,
        .speaking-section,
        .media-kit-section {
          margin-bottom: 4rem;
        }

        .section-intro {
          color: #b3b3b3;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .recognition-grid,
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .recognition-card,
        .topic-card {
          padding: 1.5rem;
          background: #1a1a1a;
          border-radius: 8px;
          border: 1px solid #333;
          transition: border-color 0.2s;
        }

        .recognition-card:hover,
        .topic-card:hover {
          border-color: #e50914;
        }

        .recognition-card h3,
        .topic-card h3 {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .recognition-card p,
        .topic-card p {
          color: #b3b3b3;
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }

        .year {
          display: inline-block;
          color: #e50914;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .bio-card {
          display: flex;
          gap: 3rem;
          padding: 2rem;
          background: #1a1a1a;
          border-radius: 8px;
          border: 1px solid #333;
        }

        .bio-text {
          flex: 1;
        }

        .bio-text h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .bio-text p {
          line-height: 1.7;
          color: #e5e5e5;
          margin-bottom: 1.5rem;
        }

        .bio-links {
          display: flex;
          gap: 1rem;
        }

        .bio-links a {
          color: #e50914;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .bio-links a:hover {
          opacity: 0.8;
        }

        .bio-image {
          flex-shrink: 0;
          text-align: center;
        }

        .image-caption {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: #808080;
        }

        .cta-section {
          text-align: center;
          padding: 3rem 2rem;
          background: #1a1a1a;
          border-radius: 8px;
          border: 1px solid #333;
        }

        .cta-section h2 {
          margin-bottom: 0.5rem;
        }

        .cta-section p {
          color: #b3b3b3;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
        }

        .cta-btn.primary {
          background: #e50914;
          color: white;
        }

        .cta-btn.primary:hover {
          background: #b20710;
        }

        .cta-btn.secondary {
          background: transparent;
          color: #e50914;
          border: 2px solid #e50914;
        }

        .cta-btn.secondary:hover {
          background: #e50914;
          color: white;
        }

        @media (max-width: 768px) {
          .press-page {
            padding: 2rem 1.5rem;
          }

          .press-header h1 {
            font-size: 2.5rem;
          }

          .bio-card {
            flex-direction: column;
            gap: 2rem;
          }

          .bio-image {
            order: -1;
          }

          .recognition-grid,
          .topics-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
