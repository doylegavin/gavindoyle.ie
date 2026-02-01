'use client';

import React from 'react';
import NetflixCard from '@/components/NetflixCard';
import { NavigationProvider } from '@/components/NavigationProvider';
import NavSection from '@/components/NavSection';

export default function InvestorsPage() {
  return (
    <NavigationProvider>
      <div className="netflix-page">
        {/* Hero Section */}
        <div className="netflix-hero">
          <NetflixCard
            title="Investment Opportunity"
            subtitle="Serial entrepreneur & technical founder"
            description="Track record of building scalable products, leading high-performing teams, and delivering measurable ROI in competitive markets. Ready for next-level growth."
            imageUrl="/images/personas/investors/250828_Synergy-03467.jpg"
            badge="Seeking Investment"
            rating="Series A"
            duration="$2M Round"
            tags={["EdTech", "AI/ML", "SaaS", "Scalable"]}
            href="mailto:doyle.d.gavin@gmail.com"
            size="hero"
          />
        </div>

        {/* Professional Headshots */}
        <NavSection title="Professional Executive Headshots">
          <NetflixCard
            title="Synergy Headshot 1"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-03457.jpg"
            tags={["Executive", "Professional", "Synergy"]}
          />
          <NetflixCard
            title="Synergy Headshot 2"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-03462.jpg"
            tags={["Executive", "Professional", "Synergy"]}
          />
          <NetflixCard
            title="Synergy Headshot 3"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-03467.jpg"
            tags={["Executive", "Professional", "Synergy"]}
          />
          <NetflixCard
            title="Synergy Headshot 4"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-3437.jpg"
            tags={["Executive", "Professional", "Synergy"]}
          />
          <NetflixCard
            title="Synergy Headshot 5"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-3452.jpg"
            tags={["Executive", "Professional", "Synergy"]}
          />
        </NavSection>

        {/* Investment Thesis */}
        <NavSection title="Investment Thesis">
          <NetflixCard
            title="Market Traction"
            subtitle="Proven growth metrics"
            description="Built and scaled products serving 1000+ active users in EdTech. Achieved consistent month-over-month growth in competitive SaaS markets with strong user retention."
            imageUrl="/images/personas/investors/250828_Synergy-03457.jpg"
            tags={["EdTech", "SaaS", "Growth", "Retention"]}
          />
          <NetflixCard
            title="Technical Leadership"
            subtitle="Full-stack expertise"
            description="7+ years technical experience, National AI Challenge finalist, built voicebot technology. Deep understanding of modern tech stack and scalable architecture."
            imageUrl="/images/personas/investors/250828_Synergy-03462.jpg"
            tags={["AI", "Voicebot", "Full-stack", "Architecture"]}
          />
          <NetflixCard
            title="Market Opportunity"
            subtitle="EdTech disruption"
            description="Education technology market ripe for innovation. AI-powered learning tools, personalized education, scalable SaaS models with recurring revenue."
            imageUrl="/images/personas/investors/250828_Synergy-3452.jpg"
            tags={["EdTech", "AI", "SaaS", "Innovation"]}
          />
          <NetflixCard
            title="Team & Vision"
            subtitle="Execution focused"
            description="Teacher-turned-founder with deep domain expertise. Proven ability to build, ship, and scale products. Clear vision for AI-powered education."
            imageUrl="/images/personas/investors/teaching-in-class-examinaite.JPG"
            tags={["Teaching", "Examinaite", "Classroom", "Education"]}
          />
        </NavSection>

        {/* Projects & Work */}
        <NavSection title="Projects & Achievements">
          <NetflixCard
            title="National AI Challenge"
            subtitle="Finalist - GlórAI"
            description="This is a picture of me presenting Glór AI - One of Ireland's first ever voicebots at the National AI Challenge 2025, Ireland's largest ever hackathon. We got to the final!!"
            imageUrl="/images/personas/investors/NAIC.JPG"
            tags={["AI", "Voicebot", "Hackathon", "Finalist"]}
          />
          <NetflixCard
            title="NAIC Team"
            subtitle="Avengers fr"
            description="National AI Challenge team photo - Avengers fr."
            imageUrl="/images/personas/investors/NAIC-team.jpeg"
            tags={["Team", "NAIC", "Avengers"]}
          />
          <NetflixCard
            title="Podcast: Cybersecurity"
            subtitle="Media appearances"
            description="My first podcast invite!! - discussing cybersecurity and building thought leadership."
            imageUrl="/images/personas/investors/podcast-cybersecurity.JPG"
            tags={["Podcast", "Cybersecurity", "Media"]}
          />
          <NetflixCard
            title="GiveAGo Builder Weekend"
            subtitle="Community building"
            description="Make sure to check out give(a)go !! - community building event."
            imageUrl="/images/personas/investors/giveago-builder-weekend.jpeg"
            tags={["GiveAGo", "Community", "Builders"]}
          />
        </NavSection>

        {/* Teaching Background */}
        <NavSection title="Domain Expertise">
          <NetflixCard
            title="Teaching with Examinaite"
            subtitle="In the classroom"
            description="Teaching in class using Examinaite - real-world application of the platform I built. Deep domain expertise in education."
            imageUrl="/images/personas/investors/teaching-in-class-examinaite.JPG"
            tags={["Teaching", "Examinaite", "Classroom"]}
          />
          <NetflixCard
            title="Basketball Scholarship"
            subtitle="Athletic discipline"
            description="Basketball scholarship recipient - demonstrating dedication, teamwork, and performance under pressure. These qualities drive my approach to building companies."
            imageUrl="/images/personas/investors/bball-scholarship.JPG"
            tags={["Scholarship", "Basketball", "Discipline"]}
          />
        </NavSection>

        {/* Contact Section */}
        <NavSection title="Let's Connect">
          <NetflixCard
            title="Email Discussion"
            subtitle="Investment opportunity"
            description="Ready to discuss the opportunity, review financials, and explore how we can scale together."
            imageUrl="/images/personas/investors/250828_Synergy-03467.jpg"
            tags={["Email", "Investment", "Discussion"]}
            href="mailto:doyle.d.gavin@gmail.com"
          />
          <NetflixCard
            title="LinkedIn Connect"
            subtitle="Professional background"
            description="Connect on LinkedIn to see my entrepreneurship journey, teaching background, and professional network."
            imageUrl="/images/personas/investors/250828_Synergy-03457.jpg"
            tags={["LinkedIn", "Professional", "Network"]}
            href="https://www.linkedin.com/in/doyle-gavin"
          />
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
