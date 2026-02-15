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

        {/* Examinaite Project */}
        <NavSection title="Flagship Project: Examinaite">
          <NetflixCard
            title="Classroom Integration"
            subtitle="Live teaching"
            description="In classroom teaching with Examinaite - showing how the platform works in practice."
            imageUrl="/images/personas/employers/in_classoom_teaching_examinaite.JPG"
            tags={["Classroom", "Live", "Teaching"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Examinaite Team"
            subtitle="Teaching these kids a thing or two"
            description="Me_and_the_Examinaite_team.JPG - teaching these kids a thing or two"
            imageUrl="/images/Me_and_the_Examinaite_team.JPG"
            tags={["Team", "Teaching", "Examinaite"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Irish Times Coverage"
            subtitle="Making Nana proud"
            description="Tired but Making Nana proud - featured in the Irish Times with my Nana!"
            imageUrl="/images/MeandNanawithIrishTimes.jpeg"
            tags={["Irish Times", "Press", "Family"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Irish Times Article"
            subtitle="Who's this guy"
            description="Who's this guy - Featured in the Irish Times"
            imageUrl="/images/TheIrishTimesArticle.jpg"
            tags={["Irish Times", "Press", "Feature"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Irish Independent Coverage"
            subtitle="Taking over the National News"
            description="Taking over the National News - featured in the Irish Independent"
            imageUrl="/images/IrishIndependentArticle.jpg"
            tags={["Irish Independent", "Press", "News"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Examinaite Screenshot 1"
            subtitle="Platform preview"
            description="Screenshot of the Examinaite platform - AI-powered revision tool."
            imageUrl="/images/personas/employers/examinaite1.png"
            tags={["Examinaite", "AI", "EdTech"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Examinaite Screenshot 2"
            subtitle="Dashboard view"
            description="Screenshot of the Examinaite dashboard - student analytics and progress."
            imageUrl="/images/personas/employers/examinaite2.png"
            tags={["Dashboard", "Analytics", "Progress"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Examinaite Screenshot 3"
            subtitle="Question generation"
            description="Screenshot of Examinaite question generation - AI-powered Leaving Cert questions."
            imageUrl="/images/personas/employers/examinaite3.png"
            tags={["Questions", "AI", "Leaving Cert"]}
            imagePosition={8}
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
            imagePosition={5}
          />
          <NetflixCard
            title="GlórAI Screenshot 2"
            subtitle="Conversation view"
            description="GlórAI conversation interface - practice Irish with AI."
            imageUrl="/images/personas/employers/glorai2.png"
            tags={["Conversation", "AI", "Practice"]}
            imagePosition={5}
          />
          <NetflixCard
            title="GlórAI Screenshot 3"
            subtitle="Learning mode"
            description="GlórAI learning mode - oral prep and daily chat."
            imageUrl="/images/personas/employers/glorai3.png"
            tags={["Learning", "Oral", "Chat"]}
            imagePosition={5}
          />
        </NavSection>

        {/* National AI Challenge & Competitions */}
        <NavSection title="National AI Challenge & Competitions">
          <NetflixCard
            title="NAIC Presentation"
            subtitle="Finalist"
            description="Presenting GlórAI at the National AI Challenge 2025 - Ireland's largest hackathon. We got to the final!"
            imageUrl="/images/personas/employers/NAIC.JPG"
            tags={["NAIC", "Finalist", "Presentation"]}
            imagePosition={5}
          />
          <NetflixCard
            title="NAIC Team"
            subtitle="Avengers fr"
            description="National AI Challenge team photo - Avengers fr."
            imageUrl="/images/personas/employers/NAIC-team.jpeg"
            tags={["Team", "NAIC", "Avengers"]}
            imagePosition={5}
          />
          <NetflixCard
            title="The Pitch UK Finalist"
            subtitle="Finalist ;*"
            description="Finalist at The Pitch UK - one of the top 8 out of 1000+ applications"
            imageUrl="/images/ThePitchUKFinalist.jpeg"
            tags={["The Pitch UK", "Finalist", "Competition"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Pitching at Amazon HQ"
            subtitle="Professional Yapper"
            description="Professional Yapper - pitching at Amazon HQ for The Pitch UK"
            imageUrl="/images/Pitching_at_AmazonHQ_ThePitchUK.JPG"
            tags={["Amazon", "Pitch", "UK"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Still Yapping"
            subtitle="Amazon HQ"
            description="Still yapping - more pitching at Amazon HQ"
            imageUrl="/images/Pitching_at_AmazonHQ_ThePitchUK2.JPG"
            tags={["Amazon", "Presentation", "Pitch"]}
            imagePosition={6}
          />
          <NetflixCard
            title="National Startup Awards"
            subtitle="The Teacher-Tech duo"
            description="The Teacher-Tech duo revolutionising education - at the National Startup Awards with my co-founder Aidan"
            imageUrl="/images/NationalStartUpAwardswAidan.jpeg"
            tags={["Startup Awards", "Co-founder", "Education"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Best Dressed at City Hall"
            subtitle="National Start Up Awards"
            description="Best dressed boys at the National Start Up Awards"
            imageUrl="/images/SadBoysatCityHall.jpeg"
            tags={["Awards", "Dublin", "Formal"]}
            imagePosition={7}
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
            imagePosition={5}
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
            imagePosition={5}
          />
          <NetflixCard
            title="Bart Gallery"
            subtitle="Artwork showcase"
            description="Gallery section showcasing the artist's diverse body of work."
            imageUrl="/images/personas/employers/bart2.png"
            tags={["Gallery", "Artwork", "Showcase"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Bart Portfolio"
            subtitle="Professional presentation"
            description="Professional portfolio presentation for the artist."
            imageUrl="/images/personas/employers/bart3.png"
            tags={["Professional", "Presentation", "Quality"]}
            imagePosition={5}
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
            imagePosition={5}
          />
          <NetflixCard
            title="Kneecapp Screenshot 2"
            subtitle="Lyrics view"
            description="The Kneecapp lyrics view - side by side Irish and English."
            imageUrl="/images/personas/employers/thekneecap2.png"
            tags={["Lyrics", "Bilingual", "Learning"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Kneecapp Screenshot 3"
            subtitle="Song selection"
            description="The Kneecapp song selection - browse the discography."
            imageUrl="/images/personas/employers/thekneecap3.png"
            tags={["Songs", "Browse", "Music"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Kneecapp Screenshot 4"
            subtitle="Is brea liom Kneecapp"
            description="Is brea liom Kneecapp - I love Kneecap!"
            imageUrl="/images/personas/employers/thekneecap4.png"
            tags={["Love", "Kneecap", "Gaeilge"]}
            imagePosition={5}
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
            imagePosition={5}
          />
          <NetflixCard
            title="Cybersecurity Podcast"
            subtitle="My first podcast invite!!"
            description="My first podcast invite!! - discussing cybersecurity and edtech"
            imageUrl="/images/projects/podcast-cybersecurity.JPG"
            tags={["Podcast", "Cybersecurity", "EdTech"]}
            imagePosition={5}
          />
          <NetflixCard
            title="DCU Open Day"
            subtitle="Back to the Old Stomping ground"
            description="Back to the Old Stomping ground for the DCU open day!"
            imageUrl="/images/DCU_Nov_OpenDay.JPG"
            tags={["DCU", "Open Day", "Education"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Dogpatch Girlies"
            subtitle="My Dogpatch girlies"
            description="My Dogpatch girlies - building in the startup community"
            imageUrl="/images/DogpatchGirls.jpg"
            tags={["Dogpatch", "Community", "Startups"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Hot Pot Squad"
            subtitle="Teaching the Chinese about Chinese food"
            description="Teaching the Chinese about Chinese food - community and networking"
            imageUrl="/images/HotPotSquad.jpeg"
            tags={["Community", "Networking", "Food"]}
            imagePosition={6}
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
