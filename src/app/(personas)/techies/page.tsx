'use client';

import React from 'react';
import NetflixCard from '@/components/NetflixCard';
import { NavigationProvider } from '@/components/NavigationProvider';
import NavSection from '@/components/NavSection';

export default function EngineersPage() {
  return (
    <NavigationProvider>
      <div className="netflix-page">
        {/* Hero Section */}
        <div className="netflix-hero">
          <NetflixCard
            title="My Setup & Stack"
            subtitle="Tools, technologies, and workflows that ship"
            description="From hardware to deployment, here's what actually works. Teacher-turned-founder who builds products from the ground up with proven technologies."
            imageUrl="/images/personas/techies/NAIC.JPG"
            badge="Technical Leader"
            rating="Full-Stack"
            duration="7+ Years"
            tags={["React", "Next.js", "TypeScript", "Python"]}
            href="https://github.com/doylegavin"
            size="hero"
          />
        </div>

        {/* Core Stack */}
        <NavSection title="Core Stack">
          <NetflixCard
            title="Frontend"
            subtitle="Modern React ecosystem"
            description="JavaScript/TypeScript, React, Next.js, Tailwind CSS. I vibe-code fast, then harden with proper TypeScript and component architecture."
            imageUrl="/images/personas/techies/bart.png"
            tags={["React", "TypeScript", "Next.js", "Tailwind"]}
          />
          <NetflixCard
            title="Backend"
            subtitle="Python & Node.js"
            description="Python for data work, Node.js for APIs. FastAPI, Express, PostgreSQL. Keep it simple, keep it fast."
            imageUrl="/images/personas/techies/glorai1.png"
            tags={["Python", "Node.js", "FastAPI", "PostgreSQL"]}
          />
          <NetflixCard
            title="Deployment"
            subtitle="Vercel & AWS"
            description="Vercel for frontend, AWS for backend. Docker containers, CI/CD pipelines. Ship fast, monitor everything."
            imageUrl="/images/personas/techies/thekneecap.png"
            tags={["Vercel", "AWS", "Docker", "CI/CD"]}
          />
          <NetflixCard
            title="Strategy"
            subtitle="Boring is beautiful"
            description="Choose proven tools over shiny new ones. React, Next.js, Vercel - they're boring because they work. Focus on solving problems, not learning frameworks."
            imageUrl="/images/personas/techies/bart2.png"
            tags={["Proven tools", "React", "Reliability"]}
          />
        </NavSection>

        {/* National AI Challenge */}
        <NavSection title="National AI Challenge">
          <NetflixCard
            title="NAIC Presentation"
            subtitle="Finalist - GlórAI"
            description="This is a picture of me presenting Glór AI - One of Ireland's first ever voicebots at the National AI Challenge 2025, Ireland's largest ever hackathon. We got to the final!!"
            imageUrl="/images/personas/techies/NAIC.JPG"
            tags={["AI", "Voicebot", "Hackathon", "Finalist"]}
          />
          <NetflixCard
            title="NAIC Team"
            subtitle="Avengers fr"
            description="National AI Challenge team photo - Avengers fr."
            imageUrl="/images/personas/techies/NAIC-team.jpeg"
            tags={["Team", "NAIC", "Avengers"]}
          />
        </NavSection>

        {/* GlórAI Project */}
        <NavSection title="Project: GlórAI">
          <NetflixCard
            title="GlórAI Screenshot 1"
            subtitle="Voice interface"
            description="GlórAI - Ireland's first Irish-language AI voice companion. Built with OpenAI Whisper, GPT-4, and Web Speech API."
            imageUrl="/images/personas/techies/glorai1.png"
            tags={["GlórAI", "Voice", "Irish"]}
          />
          <NetflixCard
            title="GlórAI Screenshot 2"
            subtitle="Conversation view"
            description="GlórAI conversation interface - practice Irish with AI."
            imageUrl="/images/personas/techies/glorai2.png"
            tags={["Conversation", "AI", "Practice"]}
          />
          <NetflixCard
            title="GlórAI Screenshot 3"
            subtitle="Learning mode"
            description="GlórAI learning mode - oral prep and daily chat."
            imageUrl="/images/personas/techies/glorai3.png"
            tags={["Learning", "Oral", "Chat"]}
          />
        </NavSection>

        {/* Bart Artist Portfolio */}
        <NavSection title="Project: Byrony Gray Art">
          <NetflixCard
            title="Bart Homepage"
            subtitle="Artist portfolio"
            description="All Bart photos are of a website I built for an English Artist displaying their quality of work from paintings to photography and everything in between."
            imageUrl="/images/personas/techies/bart.png"
            tags={["Artist", "Portfolio", "Paintings"]}
          />
          <NetflixCard
            title="Bart Gallery"
            subtitle="Artwork showcase"
            description="Gallery section showcasing the artist's diverse body of work."
            imageUrl="/images/personas/techies/bart2.png"
            tags={["Gallery", "Artwork", "Showcase"]}
          />
          <NetflixCard
            title="Bart Portfolio"
            subtitle="Professional presentation"
            description="Professional portfolio presentation for the artist."
            imageUrl="/images/personas/techies/bart3.png"
            tags={["Professional", "Presentation", "Quality"]}
          />
        </NavSection>

        {/* Dronan Weddings */}
        <NavSection title="Project: Dronan Weddings">
          <NetflixCard
            title="Dronan Weddings"
            subtitle="Wedding videography"
            description="Website for Dronan Weddings photography business - clean, fast, showcases work beautifully. 98 Lighthouse performance score."
            imageUrl="/images/personas/techies/dronan-weddings.png"
            tags={["Weddings", "Photography", "98 Score"]}
            href="https://dronanweddings.ie"
          />
        </NavSection>

        {/* The Kneecapp */}
        <NavSection title="Project: The Kneecapp">
          <NetflixCard
            title="The Kneecapp"
            subtitle="Irish learning app"
            description="I love Kneecap, and I want to be able to speak more Irish - so I built the kneecapp - I've taken all their songs and translated them from Irish to English (and English to Irish) to help me learn some Gaeilge while enjoying their music."
            imageUrl="/images/personas/techies/thekneecap.png"
            tags={["Kneecap", "Irish", "Translation"]}
            href="https://thekneecapp.ie"
          />
          <NetflixCard
            title="Kneecapp Screenshot 2"
            subtitle="Lyrics view"
            description="The Kneecapp lyrics view - side by side Irish and English."
            imageUrl="/images/personas/techies/thekneecap2.png"
            tags={["Lyrics", "Bilingual", "Learning"]}
          />
          <NetflixCard
            title="Kneecapp Screenshot 3"
            subtitle="Song selection"
            description="The Kneecapp song selection - browse the discography."
            imageUrl="/images/personas/techies/thekneecap3.png"
            tags={["Songs", "Browse", "Music"]}
          />
          <NetflixCard
            title="Kneecapp Screenshot 4"
            subtitle="Is brea liom Kneecapp"
            description="Is brea liom Kneecapp - I love Kneecap!"
            imageUrl="/images/personas/techies/thekneecap4.png"
            tags={["Love", "Kneecap", "Gaeilge"]}
          />
        </NavSection>

        {/* Community */}
        <NavSection title="Community & Events">
          <NetflixCard
            title="GiveAGo Builder Weekend"
            subtitle="Community event"
            description="Website for GiveAGo Builder Weekend - community building event with local developers. Make sure to check out give(a)go !!"
            imageUrl="/images/personas/techies/giveago-builder-weekend.jpeg"
            tags={["Community", "Event", "Builders"]}
          />
        </NavSection>

        {/* Let's Build */}
        <NavSection title="Let's Build Something">
          <NetflixCard
            title="Technical Collaboration"
            subtitle="Always up for discussions"
            description="Whether it's code review, architecture decisions, or just geeking out about new tech. Let's build something great together."
            imageUrl="/images/personas/techies/NAIC.JPG"
            tags={["Code review", "Architecture", "Collaboration"]}
            href="https://github.com/doylegavin"
          />
          <NetflixCard
            title="GitHub"
            subtitle="View my code"
            description="Explore my repositories, contributions, and coding style. See the technical quality behind the projects."
            imageUrl="/images/personas/techies/glorai1.png"
            tags={["GitHub", "Code", "Open Source"]}
            href="https://github.com/doylegavin"
          />
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
