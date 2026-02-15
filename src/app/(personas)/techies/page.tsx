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
            imagePosition={5}
          />
          <NetflixCard
            title="Backend"
            subtitle="Python & Node.js"
            description="Python for data work, Node.js for APIs. FastAPI, Express, PostgreSQL. Keep it simple, keep it fast."
            imageUrl="/images/personas/techies/glorai1.png"
            tags={["Python", "Node.js", "FastAPI", "PostgreSQL"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Deployment"
            subtitle="Vercel & AWS"
            description="Vercel for frontend, AWS for backend. Docker containers, CI/CD pipelines. Ship fast, monitor everything."
            imageUrl="/images/personas/techies/thekneecap.png"
            tags={["Vercel", "AWS", "Docker", "CI/CD"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Strategy"
            subtitle="Boring is beautiful"
            description="Choose proven tools over shiny new ones. React, Next.js, Vercel - they're boring because they work. Focus on solving problems, not learning frameworks."
            imageUrl="/images/personas/techies/bart2.png"
            tags={["Proven tools", "React", "Reliability"]}
            imagePosition={5}
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
            imagePosition={5}
          />
          <NetflixCard
            title="NAIC Team"
            subtitle="Avengers fr"
            description="National AI Challenge team photo - Avengers fr."
            imageUrl="/images/personas/techies/NAIC-team.jpeg"
            tags={["Team", "NAIC", "Avengers"]}
            imagePosition={5}
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
            imagePosition={5}
          />
          <NetflixCard
            title="GlórAI Screenshot 2"
            subtitle="Conversation view"
            description="GlórAI conversation interface - practice Irish with AI."
            imageUrl="/images/personas/techies/glorai2.png"
            tags={["Conversation", "AI", "Practice"]}
            imagePosition={5}
          />
          <NetflixCard
            title="GlórAI Screenshot 3"
            subtitle="Learning mode"
            description="GlórAI learning mode - oral prep and daily chat."
            imageUrl="/images/personas/techies/glorai3.png"
            tags={["Learning", "Oral", "Chat"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Tech Stack"
            subtitle="Modern architecture"
            description="Built with Next.js, TypeScript, OpenAI APIs, and Web Speech API. Focus on performance and user experience."
            imageUrl="/images/personas/techies/glorai1.png"
            tags={["Next.js", "TypeScript", "OpenAI"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Voice Recognition"
            subtitle="Whisper integration"
            description="Integrated OpenAI Whisper for accurate Irish language voice recognition - technical challenge solved."
            imageUrl="/images/personas/techies/glorai2.png"
            tags={["Whisper", "Voice", "Recognition"]}
            imagePosition={5}
          />
        </NavSection>

        {/* Examinaite Project */}
        <NavSection title="Project: Examinaite">
          <NetflixCard
            title="Early Development"
            subtitle="Building the foundation"
            description="Early screenshot of Examinaite's development - building AI-powered education platform from scratch."
            imageUrl="/images/examinaite_early_screenshot.png"
            tags={["Examinaite", "Early", "Development"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Teaching in Class"
            subtitle="Real-world testing"
            description="Inside look at Examinaite - testing the platform in real classrooms with students."
            imageUrl="/images/teaching-in-class-examinaite.JPG"
            tags={["Teaching", "Classroom", "Testing"]}
            imagePosition={8}
          />
          <NetflixCard
            title="In Classroom"
            subtitle="Student usage"
            description="Inside look at Examinaite - students using the platform for exam prep."
            imageUrl="/images/in_classoom_teaching_examinaite.JPG"
            tags={["Classroom", "Students", "Usage"]}
            imagePosition={8}
          />
          <NetflixCard
            title="The Pitch UK"
            subtitle="Top 8 of 1000+"
            description="We're in the Pitch UK! top 8 out of 1000+ applications - major validation."
            imageUrl="/images/examinaite_in_thePitchUK.png"
            tags={["Pitch UK", "Competition", "Top 8"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Irish Times Feature"
            subtitle="First newspaper article"
            description="My first newspaper article!!! - Examinaite featured in the Irish Times."
            imageUrl="/images/examinaite_irish_times_article.png"
            tags={["Irish Times", "Press", "Article"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Platform Interface 1"
            subtitle="Student dashboard"
            description="Inside look at Examinaite - clean, intuitive student dashboard design."
            imageUrl="/images/examinaite1.png"
            tags={["Dashboard", "UI", "Design"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Platform Interface 2"
            subtitle="Question generation"
            description="Inside look at Examinaite - AI-powered question generation system."
            imageUrl="/images/examinaite2.png"
            tags={["AI", "Questions", "Generation"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Platform Interface 3"
            subtitle="Adaptive learning"
            description="Inside look at Examinaite - adaptive difficulty and personalized learning paths."
            imageUrl="/images/examinaite3.png"
            tags={["Adaptive", "Learning", "Personalized"]}
            imagePosition={8}
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
            imagePosition={5}
          />
          <NetflixCard
            title="Bart Gallery"
            subtitle="Artwork showcase"
            description="Gallery section showcasing the artist's diverse body of work."
            imageUrl="/images/personas/techies/bart2.png"
            tags={["Gallery", "Artwork", "Showcase"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Bart Portfolio"
            subtitle="Professional presentation"
            description="Professional portfolio presentation for the artist."
            imageUrl="/images/personas/techies/bart3.png"
            tags={["Professional", "Presentation", "Quality"]}
            imagePosition={5}
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
          <NetflixCard
            title="Translation Engine"
            subtitle="Bilingual learning"
            description="Built custom translation engine for Irish-English lyrics synchronization. Perfect for language learners."
            imageUrl="/images/personas/techies/thekneecap.png"
            tags={["Translation", "Irish", "Engine"]}
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
          <NetflixCard
            title="Podcast: Cybersecurity"
            subtitle="First podcast invite"
            description="My first podcast invite!! - discussing cybersecurity and tech in education."
            imageUrl="/images/podcast-cybersecurity.JPG"
            tags={["Podcast", "Cybersecurity", "Education"]}
          />
          <NetflixCard
            title="DCU Open Day"
            subtitle="Back to campus"
            description="Back to the Old Stomping ground for the DCU open day! - sharing tech journey with students."
            imageUrl="/images/DCU_Nov_OpenDay.JPG"
            tags={["DCU", "Open Day", "Education"]}
          />
          <NetflixCard
            title="Tech Community"
            subtitle="Builder culture"
            description="Active member of Dublin's tech community - building, learning, and sharing knowledge."
            imageUrl="/images/personas/techies/NAIC-team.jpeg"
            tags={["Community", "Dublin", "Tech"]}
          />
          <NetflixCard
            title="National Startup Awards"
            subtitle="Recognition"
            description="Best dressed boys at the National Start Up Awards - representing the tech startup scene."
            imageUrl="/images/SadBoysatCityHall.jpeg"
            tags={["Startup Awards", "Recognition", "Scene"]}
            imagePosition={7}
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
