'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { gavinDoylePersonSchema } from '@/schemas/personSchema';

// Note: metadata export doesn't work in client components, so we'll use next/head alternative

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const contactOptions = [
    {
      id: "email",
      title: "Email Me",
      subtitle: "Quick Response",
      description: "Get a detailed response within 24 hours. Perfect for project discussions and initial consultations.",
      icon: "/images/general/logos/gmail-logo.svg",
      link: "mailto:doyle.d.gavin@gmail.com",
      color: "#EA4335"
    },
    {
      id: "linkedin",
      title: "LinkedIn Connect",
      subtitle: "Professional Network",
      description: "Connect professionally and see my full background, recommendations, and career journey.",
      icon: "/images/general/logos/linkedin-logo.svg",
      link: "https://www.linkedin.com/in/doyle-gavin",
      color: "#0A66C2"
    },
    {
      id: "calendly",
      title: "Schedule a Call",
      subtitle: "30-Minute Chat",
      description: "Book a focused call to discuss your project, timeline, and how we can work together.",
      icon: "/images/general/logos/calendly-logo.svg",
      link: "https://calendly.com/doyle-d-gavin/30min",
      color: "#006BFF"
    },
    {
      id: "github",
      title: "View My Code",
      subtitle: "GitHub Portfolio",
      description: "Explore my repositories, contributions, and coding style. See the technical quality behind the projects.",
      icon: "/images/general/logos/github-logo.svg",
      link: "https://github.com/doylegavin",
      color: "#24292e"
    }
  ];

  return (
    <>
      {/* JSON-LD Schema for Google Knowledge Panel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gavinDoylePersonSchema) }}
      />

      {/* Loading Screen */}
      <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`} id="loadingScreen">
        <div id="container">
          <div className="netflixintro" data-letter="G">
            <div className="helper-1">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
              <div className="effect-lumieres">
                {Array.from({ length: 28 }, (_, i) => (
                  <span key={i} className={`lamp-${i + 1}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-2">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
                {/* Additional Colored Fur Effects */}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`blue-${i}`} className={`fur-blue-${31 - i}`}></span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`yellow-${i}`} className={`fur-yellow-${31 - i}`}></span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`purple-${i}`} className={`fur-purple-${31 - i}`}></span>
                ))}
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={`green-${i}`} className={`fur-green-${31 - i}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-3">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-4">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
            <div className="helper-5">
              <div className="effect-brush">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={`fur-${31 - i}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who's Watching Page */}
      <div className={`whos-watching ${!isLoading ? 'active' : ''}`}>
        <h1 className="seo-hidden">Gavin Doyle - Founder & CEO of Examinaite</h1>
        <h3 className="whos-watching-title">Who&apos;s watching?</h3>
        <div className="profiles-container">
          <div className="profile" onClick={() => window.location.href = '/employers'}>
            <div className="profile-avatar">
              <Image
                src="/images/profiles/employers.png"
                alt="Employers"
                width={150}
                height={150}
                priority
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="emoji-fallback">💼</div>
            </div>
            <div className="profile-name">Employers</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/fans'}>
            <div className="profile-avatar">
              <Image
                src="/images/profiles/fans.png"
                alt="Fans"
                width={150}
                height={150}
                priority
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="emoji-fallback">🎭</div>
            </div>
            <div className="profile-name">Fans</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/suitors'}>
            <div className="profile-avatar">
              <Image
                src="/images/profiles/suitors.png"
                alt="Suitors"
                width={150}
                height={150}
                priority
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="emoji-fallback">💕</div>
            </div>
            <div className="profile-name">Suitors</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/curious'}>
            <div className="profile-avatar">
              <Image
                src="/images/profiles/curious.png"
                alt="Curious"
                width={150}
                height={150}
                priority
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="emoji-fallback">🕵️</div>
            </div>
            <div className="profile-name">Stalkers</div>
          </div>
          <div className="profile" onClick={() => window.location.href = '/techies'}>
            <div className="profile-avatar">
              <Image
                src="/images/profiles/engineers.png"
                alt="Techies"
                width={150}
                height={150}
                priority
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="emoji-fallback">⚡</div>
          </div>
            <div className="profile-name">Techies</div>
          </div>
        </div>

        <nav className="persona-text-links" aria-label="Persona pages">
          <a href="/employers">Employers</a>
          <a href="/fans">Fans</a>
          <a href="/suitors">Suitors</a>
          <a href="/curious">Curious</a>
          <a href="/techies">Techies</a>
          <a href="/investors">Investors</a>
        </nav>
      </div>

      {/* About Section - SEO Optimized for Google Knowledge Panel */}
      <section className="about-section" id="about">
          <div className="about-container">
            <h1>Gavin Doyle</h1>
            <h2 className="subtitle">Founder & CEO of Examinaite | Educator-Turned-Technologist</h2>

            <div className="about-content">
              <div className="about-hero">
                <div className="about-text-intro">
                  <p className="lead">
                    Irish educator-turned-founder building the future of education technology. After 7 years teaching Mathematics and PE in secondary schools, I founded <a href="https://examinaite.ie/" target="_blank" rel="noopener noreferrer">Examinaite</a>, an AI-powered Leaving Certificate revision platform that has served over 2,000 students.
                  </p>

                  <p>
                    My journey from classroom teacher to tech founder was driven by a simple observation: students needed better, more personalized tools to succeed in high-stakes exams. Combining my teaching experience with self-taught full-stack development skills, I built Examinaite to provide adaptive, AI-powered revision that actually works.
                  </p>

                  <p>
                    Beyond Examinaite, I&apos;m passionate about preserving the Irish language through technology. I created <a href="https://thekneecapp.ie/" target="_blank" rel="noopener noreferrer">The Kneecapp</a>, a bilingual lyrics translator helping people learn Irish through music, and GlórAI, Ireland&apos;s first Irish-language AI voice companion for Leaving Cert students.
                  </p>
                </div>

                <div className="about-headshot">
                  <Image
                    src="/images/personas/employers/headshot-full-smile.jpg"
                    alt="Gavin Doyle - Professional Headshot"
                    width={400}
                    height={400}
                    priority
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              </div>

              <div className="about-text">

                <div className="achievements">
                  <h3>Recognition & Achievements</h3>
                  <ul>
                    <li><strong>Enterprise Ireland New Frontiers Phase 2</strong> - Selected for Ireland&apos;s premier startup acceleration program</li>
                    <li><strong>The Pitch UK Finalist</strong> - Top 8 from over 1,000 applications, pitched at Amazon HQ London</li>
                    <li><strong>National AI Challenge Finalist</strong> - Ireland&apos;s largest hackathon, presented GlórAI innovation</li>
                    <li><strong>Press Coverage</strong> - Featured in Irish Times, Irish Independent, and national media</li>
                    <li><strong>Basketball Scholarship</strong> - Ulster University, competed at national level</li>
                  </ul>
                </div>

                <div className="education">
                  <h3>Education</h3>
                  <ul>
                    <li><strong>Masters in Strength & Conditioning</strong> - Ulster University</li>
                    <li><strong>Bachelor&apos;s Degree in Education</strong> - Dublin City University</li>
                    <li><strong>Self-Taught Developer</strong> - Modern stack: Next.js, TypeScript, React, PostgreSQL</li>
                  </ul>
                </div>

                <div className="tech-stack">
                  <h3>Technical Expertise</h3>
                  <p>Full-stack development with Next.js, TypeScript, React, PostgreSQL, Vercel. All projects achieve 95+ Lighthouse scores. Specialized in EdTech, AI integration, and building scalable web applications.</p>
                </div>

                <div className="quick-links-section">
                  <h3>Learn More</h3>
                  <div className="quick-links">
                    <a href="/about" className="quick-link">
                      <strong>Full Bio</strong>
                      <span>Complete background, education, and career journey</span>
                    </a>
                    <a href="/about/press" className="quick-link">
                      <strong>Press & Media</strong>
                      <span>Featured in Irish Times, Irish Independent, and more</span>
                    </a>
                  </div>
                </div>

                <div className="get-in-touch-section">
                  <h3>Get In Touch</h3>
                  <p className="contact-subtitle">Choose your preferred way to connect</p>
                  <ContactModal contactOptions={contactOptions} />
                </div>
              </div>
            </div>
          </div>
        </section>

    {/* Footer */}
    <Footer />

    <style jsx>{`
      .seo-hidden {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }

      .whos-watching-title {
        font-size: 3.5rem;
        margin-bottom: 50px;
        text-align: center;
        font-weight: 400;
        letter-spacing: 2px;
      }

      .persona-text-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 3rem;
        padding: 1rem;
        flex-wrap: wrap;
      }

      .persona-text-links a {
        color: #e5e5e5;
        text-decoration: none;
        font-size: 1.1rem;
        transition: color 0.2s;
        position: relative;
      }

      .persona-text-links a::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: #e50914;
        transition: width 0.3s;
      }

      .persona-text-links a:hover {
        color: #e50914;
      }

      .persona-text-links a:hover::after {
        width: 100%;
      }

      .about-section {
        background: #0a0a0a;
        color: #e5e5e5;
        padding: 5rem 2rem;
        margin-top: 0;
      }

      .about-container {
        max-width: 100%;
        width: 100%;
        padding: 0 4rem;
        margin: 0 auto;
      }

      .about-section h1 {
        font-size: 3.5rem;
        font-weight: bold;
        color: white;
        margin-bottom: 0.5rem;
        text-align: center;
      }

      .subtitle {
        font-size: 1.5rem;
        color: #e50914;
        margin-bottom: 3rem;
        font-weight: 500;
        text-align: center;
      }

      .about-hero {
        display: flex;
        gap: 4rem;
        align-items: flex-start;
        margin-bottom: 3rem;
      }

      .about-text-intro {
        flex: 2;
        line-height: 1.8;
      }

      .about-headshot {
        flex: 1;
        min-width: 350px;
      }

      .about-text {
        line-height: 1.8;
      }

      .lead {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: white;
      }

      .about-text p {
        margin-bottom: 1.5rem;
        color: #e5e5e5;
        font-size: 1.05rem;
      }

      .about-text a {
        color: #e50914;
        text-decoration: none;
        transition: opacity 0.2s;
      }

      .about-text a:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      .achievements, .education, .tech-stack, .quick-links-section, .get-in-touch-section {
        margin-top: 3rem;
        padding: 3rem 4rem;
        background: #1a1a1a;
        border-radius: 8px;
        border-left: 4px solid #e50914;
        width: 100%;
      }

      .quick-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .quick-link {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1.5rem;
        background: #0a0a0a;
        border-radius: 8px;
        border: 1px solid #333;
        transition: all 0.2s;
        text-decoration: none !important;
      }

      .quick-link:hover {
        border-color: #e50914;
        transform: translateY(-2px);
        opacity: 1 !important;
      }

      .quick-link strong {
        color: white;
        font-size: 1.1rem;
      }

      .quick-link span {
        color: #b3b3b3;
        font-size: 0.95rem;
      }

      .achievements h3, .education h3, .tech-stack h3, .get-in-touch-section h3 {
        color: white;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-weight: 600;
        text-align: center;
      }

      .contact-subtitle {
        text-align: center;
        color: #b3b3b3;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .achievements ul, .education ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .achievements ul li, .education ul li {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        position: relative;
        color: #e5e5e5;
        line-height: 1.6;
      }

      .achievements ul li:before, .education ul li:before {
        content: "▸";
        position: absolute;
        left: 0;
        color: #e50914;
        font-weight: bold;
      }

      .achievements ul li strong, .education ul li strong {
        color: white;
      }

      .tech-stack p {
        color: #e5e5e5;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .about-section {
          padding: 2rem 1.5rem;
        }

        .about-container {
          padding: 0 1.5rem;
        }

        .about-hero {
          flex-direction: column;
          gap: 2rem;
        }

        .about-headshot {
          min-width: 100%;
          max-width: 350px;
          margin: 0 auto;
        }

        .about-section h1 {
          font-size: 2.5rem;
        }

        .subtitle {
          font-size: 1.2rem;
        }

        .lead {
          font-size: 1.1rem;
        }

        .achievements, .education, .tech-stack, .quick-links-section, .get-in-touch-section {
          padding: 2rem 1.5rem;
        }

        .quick-links {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
    </>
  );
}
