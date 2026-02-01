'use client';

import React from 'react';
import Image from 'next/image';
import NetflixCard from '@/components/NetflixCard';
import ContactModal from '@/components/ContactModal';
import JsonLd, { personSchema } from '@/components/JsonLd';
import { NavigationProvider } from '@/components/NavigationProvider';
import NavSection from '@/components/NavSection';

export default function EmployersPage() {
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
    <NavigationProvider>
      <div className="netflix-page">
        <JsonLd data={personSchema} />

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-left">
            <h1 className="hero-name">Gavin Doyle</h1>
            <h2 className="hero-role">Full-Stack Developer & Founder</h2>
            <ul className="hero-highlights">
              <li>Self-taught developer with production experience</li>
              <li>Built Examinaite: 1,000+ users in 3 months</li>
              <li>Enterprise Ireland New Frontiers Phase 2</li>
              <li>7+ years teaching experience (PE & Mathematics)</li>
              <li>Masters in Strength & Conditioning</li>
              <li>Modern stack: Next.js, TypeScript, PostgreSQL</li>
              <li>95+ Lighthouse scores across all projects</li>
              <li>Available for freelance: one day per week</li>
            </ul>
          </div>
          <div className="hero-right">
            <Image
              src="/images/personas/employers/headshot-full-smile.jpg"
              alt="Gavin Doyle - Professional Headshot"
              fill
              className="hero-photo"
              priority
            />
          </div>
        </div>

        {/* Professional Headshots */}
        <NavSection title="Professional Headshots">
          <NetflixCard
            title="Full Smile"
            subtitle="Professional headshot"
            description="Professional color headshot - full smile."
            imageUrl="/images/personas/employers/headshot-full-smile.jpg"
            tags={["Headshot", "Professional", "Color"]}
          />
          <NetflixCard
            title="Half Smile"
            subtitle="Professional headshot"
            description="Professional color headshot - half smile."
            imageUrl="/images/personas/employers/headshot-half-smile.jpg"
            tags={["Headshot", "Professional", "Subtle"]}
          />
          <NetflixCard
            title="B&W Full Smile"
            subtitle="Black & white"
            description="Professional B&W headshot - full smile."
            imageUrl="/images/personas/employers/headshot-black-and-white-full-smile.jpg"
            tags={["B&W", "Headshot", "Classic"]}
          />
          <NetflixCard
            title="B&W Half Smile"
            subtitle="Black & white"
            description="Professional B&W headshot - half smile."
            imageUrl="/images/personas/employers/headshot-black-and-white-half-smile.jpg"
            tags={["B&W", "Headshot", "Elegant"]}
          />
          <NetflixCard
            title="B&W Serious"
            subtitle="Black & white"
            description="Professional B&W headshot - serious."
            imageUrl="/images/personas/employers/headshot-black-and-white-serious.jpg"
            tags={["B&W", "Serious", "Executive"]}
          />
        </NavSection>

        {/* Examinaite Project */}
        <NavSection title="Flagship Project: Examinaite">
          <NetflixCard
            title="Teaching with Examinaite"
            subtitle="In the classroom"
            description="Teaching in class using Examinaite - real-world application of the platform I built."
            imageUrl="/images/personas/employers/teaching-in-class-examinaite.JPG"
            tags={["Teaching", "Examinaite", "Classroom"]}
          />
          <NetflixCard
            title="Classroom Integration"
            subtitle="Live teaching"
            description="In classroom teaching with Examinaite - showing how the platform works in practice."
            imageUrl="/images/personas/employers/in_classoom_teaching_examinaite.JPG"
            tags={["Classroom", "Live", "Teaching"]}
          />
          <NetflixCard
            title="Examinaite Screenshot 1"
            subtitle="Platform preview"
            description="Screenshot of the Examinaite platform - AI-powered revision tool."
            imageUrl="/images/personas/employers/examinaite1.png"
            tags={["Examinaite", "AI", "EdTech"]}
          />
          <NetflixCard
            title="Examinaite Screenshot 2"
            subtitle="Dashboard view"
            description="Screenshot of the Examinaite dashboard - student analytics and progress."
            imageUrl="/images/personas/employers/examinaite2.png"
            tags={["Dashboard", "Analytics", "Progress"]}
          />
          <NetflixCard
            title="Examinaite Screenshot 3"
            subtitle="Question generation"
            description="Screenshot of Examinaite question generation - AI-powered Leaving Cert questions."
            imageUrl="/images/personas/employers/examinaite3.png"
            tags={["Questions", "AI", "Leaving Cert"]}
          />
          <NetflixCard
            title="Irish Times Feature"
            subtitle="Press coverage"
            description="Examinaite featured in the Irish Times - media recognition for the platform."
            imageUrl="/images/personas/employers/examinaite_irish_times_article.png"
            tags={["Irish Times", "Press", "Feature"]}
          />
        </NavSection>

        {/* GlórAI Project */}
        <NavSection title="Innovation Project: GlórAI">
          <NetflixCard
            title="GlórAI Screenshot 1"
            subtitle="Voice interface"
            description="GlórAI - Ireland's first Irish-language AI voice companion."
            imageUrl="/images/personas/employers/glorai1.png"
            tags={["GlórAI", "Voice", "Irish"]}
          />
          <NetflixCard
            title="GlórAI Screenshot 2"
            subtitle="Conversation view"
            description="GlórAI conversation interface - practice Irish with AI."
            imageUrl="/images/personas/employers/glorai2.png"
            tags={["Conversation", "AI", "Practice"]}
          />
          <NetflixCard
            title="GlórAI Screenshot 3"
            subtitle="Learning mode"
            description="GlórAI learning mode - oral prep and daily chat."
            imageUrl="/images/personas/employers/glorai3.png"
            tags={["Learning", "Oral", "Chat"]}
          />
        </NavSection>

        {/* National AI Challenge */}
        <NavSection title="National AI Challenge">
          <NetflixCard
            title="NAIC Presentation"
            subtitle="Finalist"
            description="Presenting GlórAI at the National AI Challenge 2025 - Ireland's largest hackathon. We got to the final!"
            imageUrl="/images/personas/employers/NAIC.JPG"
            tags={["NAIC", "Finalist", "Presentation"]}
          />
          <NetflixCard
            title="NAIC Team"
            subtitle="Avengers fr"
            description="National AI Challenge team photo - Avengers fr."
            imageUrl="/images/personas/employers/NAIC-team.jpeg"
            tags={["Team", "NAIC", "Avengers"]}
          />
        </NavSection>

        {/* Client Work */}
        <NavSection title="Client Work: Dronan Weddings">
          <NetflixCard
            title="Dronan Weddings"
            subtitle="Wedding videography"
            description="Complete redesign and rebuild of wedding videography portfolio. Modern, elegant design with warm pastel theme. 98 Lighthouse performance score. 40% increase in contact submissions."
            imageUrl="/images/personas/employers/dronan-weddings.png"
            tags={["Weddings", "Portfolio", "98 Score"]}
            href="https://dronanweddings.ie"
          />
        </NavSection>

        {/* Client Work: Bart */}
        <NavSection title="Client Work: Byrony Gray Art">
          <NetflixCard
            title="Bart Homepage"
            subtitle="Artist portfolio"
            description="Website for an English Artist displaying their quality of work from paintings to photography and everything in between."
            imageUrl="/images/personas/employers/bart.png"
            tags={["Artist", "Portfolio", "Paintings"]}
          />
          <NetflixCard
            title="Bart Gallery"
            subtitle="Artwork showcase"
            description="Gallery section showcasing the artist's diverse body of work."
            imageUrl="/images/personas/employers/bart2.png"
            tags={["Gallery", "Artwork", "Showcase"]}
          />
          <NetflixCard
            title="Bart Portfolio"
            subtitle="Professional presentation"
            description="Professional portfolio presentation for the artist."
            imageUrl="/images/personas/employers/bart3.png"
            tags={["Professional", "Presentation", "Quality"]}
          />
        </NavSection>

        {/* The Kneecapp */}
        <NavSection title="Passion Project: The Kneecapp">
          <NetflixCard
            title="The Kneecapp"
            subtitle="Irish learning"
            description="Bilingual lyrics translator (Irish ↔ English) with education focus. Complete translation of Kneecap discography to help fans learn Irish through music."
            imageUrl="/images/personas/employers/thekneecap.png"
            tags={["Kneecap", "Irish", "Translation"]}
            href="https://thekneecapp.ie"
          />
          <NetflixCard
            title="Kneecapp Screenshot 2"
            subtitle="Lyrics view"
            description="The Kneecapp lyrics view - side by side Irish and English."
            imageUrl="/images/personas/employers/thekneecap2.png"
            tags={["Lyrics", "Bilingual", "Learning"]}
          />
          <NetflixCard
            title="Kneecapp Screenshot 3"
            subtitle="Song selection"
            description="The Kneecapp song selection - browse the discography."
            imageUrl="/images/personas/employers/thekneecap3.png"
            tags={["Songs", "Browse", "Music"]}
          />
          <NetflixCard
            title="Kneecapp Screenshot 4"
            subtitle="Is brea liom Kneecapp"
            description="Is brea liom Kneecapp - I love Kneecap!"
            imageUrl="/images/personas/employers/thekneecap4.png"
            tags={["Love", "Kneecap", "Gaeilge"]}
          />
        </NavSection>

        {/* Community & Events */}
        <NavSection title="Community & Events">
          <NetflixCard
            title="GiveAGo Builder Weekend"
            subtitle="Community building"
            description="Make sure to check out give(a)go !! - community building event."
            imageUrl="/images/personas/employers/giveago-builder-weekend.jpeg"
            tags={["GiveAGo", "Community", "Builders"]}
          />
        </NavSection>

        {/* Athletic Background */}
        <NavSection title="Athletic Background">
          <NetflixCard
            title="Basketball Scholarship"
            subtitle="Ulster University"
            description="Basketball scholarship recipient - demonstrating dedication, teamwork, and performance under pressure."
            imageUrl="/images/personas/employers/bball-scholarship.JPG"
            tags={["Scholarship", "Basketball", "Ulster"]}
          />
        </NavSection>

        {/* Get In Touch */}
        <div className="netflix-section">
          <h2 className="netflix-section-title">Let&apos;s Work Together</h2>
          <ContactModal contactOptions={contactOptions} />
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .hero-section {
            display: flex;
            height: 70vh;
            margin-bottom: 4rem;
            background: #141414;
            overflow: hidden;
          }

          .hero-left {
            flex: 1;
            min-width: 0;
            padding: 4rem 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
          }

          .hero-name {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: white;
          }

          .hero-role {
            font-size: 1.8rem;
            color: #e50914;
            margin-bottom: 2.5rem;
            font-weight: 500;
          }

          .hero-highlights {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .hero-highlights li {
            font-size: 1.1rem;
            line-height: 2.2;
            color: #e5e5e5;
            padding-left: 1.5rem;
            position: relative;
          }

          .hero-highlights li:before {
            content: "▸";
            position: absolute;
            left: 0;
            color: #e50914;
            font-weight: bold;
          }

          .hero-right {
            flex: 1;
            min-width: 0;
            position: relative;
            width: 50%;
            height: 70vh;
          }

          .hero-photo {
            object-fit: cover;
            object-position: center;
            width: 100% !important;
            height: 100% !important;
          }

          @media (max-width: 968px) {
            .hero-section {
              flex-direction: column;
              min-height: auto;
            }

            .hero-left {
              padding: 3rem 2rem;
            }

            .hero-name {
              font-size: 2.5rem;
            }

            .hero-role {
              font-size: 1.4rem;
              margin-bottom: 2rem;
            }

            .hero-highlights li {
              font-size: 1rem;
              line-height: 2;
            }

            .hero-right {
              min-height: 50vh;
            }
          }
        `}</style>
      </div>
    </NavigationProvider>
  );
}
