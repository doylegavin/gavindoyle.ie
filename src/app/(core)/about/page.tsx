'use client';

import Image from 'next/image';
import { gavinDoylePersonSchema } from '@/schemas/personSchema';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gavinDoylePersonSchema) }}
      />

      <article className="about-page">
        <div className="about-container">
          {/* Header */}
          <header className="about-header">
            <div className="header-content">
              <h1>Gavin Doyle</h1>
              <p className="tagline">Founder & CEO of Examinaite | Educator-Turned-Technologist</p>
            </div>
            <div className="header-image">
              <Image
                src="/images/personas/employers/headshot-full-smile.jpg"
                alt="Gavin Doyle"
                width={300}
                height={300}
                priority
                style={{ borderRadius: '8px' }}
              />
            </div>
          </header>

          {/* Bio */}
          <section className="bio-section">
            <h2>About</h2>
            <p>
              I&apos;m an Irish educator-turned-founder and software developer based in Dublin. After spending 7 years teaching PE and Mathematics in secondary schools, I founded <a href="https://examinaite.ie/" target="_blank" rel="noopener noreferrer">Examinaite</a>, an AI-powered Leaving Certificate revision platform that has served over 1,000 students in its first three months.
            </p>
            <p>
              My journey from the classroom to tech entrepreneurship was driven by a simple observation: students needed better, more personalized tools to succeed in high-stakes exams. I taught myself full-stack development and built Examinaite to provide adaptive, AI-powered revision that actually works. The platform combines my teaching experience with modern technology to deliver personalized exam preparation at scale.
            </p>
            <p>
              Beyond Examinaite, I&apos;m passionate about preserving the Irish language through technology. I created <a href="https://thekneecapp.ie/" target="_blank" rel="noopener noreferrer">The Kneecapp</a>, a bilingual lyrics translator helping people learn Irish through music, and GlórAI, Ireland&apos;s first Irish-language AI voice companion for Leaving Cert students.
            </p>
            <p>
              I hold a Bachelor&apos;s Degree in Education from Dublin City University and a Master&apos;s in Strength & Conditioning from Ulster University, where I competed on a basketball scholarship at the national level.
            </p>
          </section>

          {/* Press Coverage */}
          <section className="press-section">
            <h2>Featured In</h2>
            <div className="press-articles">
              <a href="https://www.irishtimes.com/business/innovation/2024/12/04/teacher-quit-job-to-build-personalised-ai-revision-platform-for-leaving-cert/" target="_blank" rel="noopener noreferrer" className="press-card">
                <strong>Irish Times</strong>
                <span>Teacher quit job to build personalised AI revision platform for Leaving Cert</span>
              </a>
              <a href="https://m.independent.ie/irish-news/education/meet-the-teacher-tech-duo-using-ai-as-an-alternative-to-grinds-for-leaving-cert-students/a377696583.html" target="_blank" rel="noopener noreferrer" className="press-card">
                <strong>Irish Independent</strong>
                <span>Meet the teacher tech duo using AI as an alternative to grinds for Leaving Cert students</span>
              </a>
            </div>
          </section>

          {/* Recognition */}
          <section className="recognition-section">
            <h2>Recognition & Achievements</h2>
            <ul>
              <li><strong>Enterprise Ireland New Frontiers Phase 2</strong> - Selected for Ireland&apos;s premier startup acceleration program</li>
              <li><strong>The Pitch UK Finalist</strong> - Top 8 from over 1,000 applications, pitched at Amazon HQ London</li>
              <li><strong>National AI Challenge Finalist</strong> - Ireland&apos;s largest hackathon, presented GlórAI innovation</li>
              <li><strong>Basketball Scholarship</strong> - Ulster University, competed at national level</li>
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="skills-section">
            <h2>Technical Expertise</h2>
            <p>
              Full-stack development with Next.js, TypeScript, React, PostgreSQL, and Vercel. All projects achieve 95+ Lighthouse scores. Specialized in EdTech, AI integration, and building scalable web applications.
            </p>
          </section>

          {/* Links */}
          <section className="links-section">
            <h2>Connect</h2>
            <div className="link-grid">
              <a href="https://www.linkedin.com/in/doyle-gavin" target="_blank" rel="noopener noreferrer" className="link-card">
                <strong>LinkedIn</strong>
                <span>Professional network and background</span>
              </a>
              <a href="https://github.com/doylegavin" target="_blank" rel="noopener noreferrer" className="link-card">
                <strong>GitHub</strong>
                <span>Code repositories and contributions</span>
              </a>
              <a href="https://instagram.com/gavinthecraic" target="_blank" rel="noopener noreferrer" className="link-card">
                <strong>Instagram</strong>
                <span>Personal updates and behind-the-scenes</span>
              </a>
              <a href="/contact" className="link-card">
                <strong>Get In Touch</strong>
                <span>Email, schedule a call, or connect</span>
              </a>
            </div>
            <p className="external-note">
              <em>Note: Crunchbase and Wikidata profiles coming soon</em>
            </p>
          </section>
        </div>
      </article>

      <Footer />

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #e5e5e5;
          padding: 4rem 2rem;
        }

        .about-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-header {
          display: flex;
          align-items: center;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #333;
        }

        .header-content {
          flex: 1;
        }

        .about-header h1 {
          font-size: 3.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
        }

        .tagline {
          font-size: 1.3rem;
          color: #e50914;
          font-weight: 500;
        }

        .header-image {
          flex-shrink: 0;
        }

        .bio-section,
        .press-section,
        .recognition-section,
        .skills-section,
        .links-section {
          margin-bottom: 4rem;
        }

        h2 {
          font-size: 2rem;
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }

        a {
          color: #e50914;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        a:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .recognition-section ul,
        .skills-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recognition-section li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .recognition-section li:before {
          content: "▸";
          position: absolute;
          left: 0;
          color: #e50914;
          font-weight: bold;
        }

        .recognition-section strong {
          color: white;
        }

        .press-articles {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .press-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem;
          background: #1a1a1a;
          border-radius: 8px;
          border: 1px solid #333;
          transition: all 0.2s;
          text-decoration: none !important;
        }

        .press-card:hover {
          border-color: #e50914;
          transform: translateY(-2px);
          opacity: 1 !important;
        }

        .press-card strong {
          color: white;
          font-size: 1.1rem;
        }

        .press-card span {
          color: #b3b3b3;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .link-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .link-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem;
          background: #1a1a1a;
          border-radius: 8px;
          border: 1px solid #333;
          transition: all 0.2s;
          text-decoration: none !important;
        }

        .link-card:hover {
          border-color: #e50914;
          transform: translateY(-2px);
          opacity: 1 !important;
        }

        .link-card strong {
          color: white;
          font-size: 1.1rem;
        }

        .link-card span {
          color: #b3b3b3;
          font-size: 0.9rem;
        }

        .external-note {
          text-align: center;
          color: #808080;
          font-size: 0.9rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .about-page {
            padding: 2rem 1.5rem;
          }

          .about-header {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .about-header h1 {
            font-size: 2.5rem;
          }

          .tagline {
            font-size: 1.1rem;
          }

          .link-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
