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
            imagePosition={7}
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
            imagePosition={7}
          />
          <NetflixCard
            title="Synergy Headshot 2"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-03462.jpg"
            tags={["Executive", "Professional", "Synergy"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Synergy Headshot 3"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-03467.jpg"
            tags={["Executive", "Professional", "Synergy"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Synergy Headshot 4"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-3437.jpg"
            tags={["Executive", "Professional", "Synergy"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Synergy Headshot 5"
            subtitle="Executive portrait"
            description="Professional executive headshot from Synergy photoshoot."
            imageUrl="/images/personas/investors/250828_Synergy-3452.jpg"
            tags={["Executive", "Professional", "Synergy"]}
            imagePosition={7}
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
            imagePosition={7}
          />
          <NetflixCard
            title="Technical Leadership"
            subtitle="Full-stack expertise"
            description="7+ years technical experience, National AI Challenge finalist, built voicebot technology. Deep understanding of modern tech stack and scalable architecture."
            imageUrl="/images/personas/investors/250828_Synergy-03462.jpg"
            tags={["AI", "Voicebot", "Full-stack", "Architecture"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Market Opportunity"
            subtitle="EdTech disruption"
            description="Education technology market ripe for innovation. AI-powered learning tools, personalized education, scalable SaaS models with recurring revenue."
            imageUrl="/images/personas/investors/250828_Synergy-3452.jpg"
            tags={["EdTech", "AI", "SaaS", "Innovation"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Team & Vision"
            subtitle="Execution focused"
            description="Teacher-turned-founder with deep domain expertise. Proven ability to build, ship, and scale products. Clear vision for AI-powered education."
            imageUrl="/images/personas/investors/teaching-in-class-examinaite.JPG"
            tags={["Teaching", "Examinaite", "Classroom", "Education"]}
            imagePosition={8}
          />
        </NavSection>

        {/* Press & Media Coverage */}
        <NavSection title="Press & Media Coverage">
          <NetflixCard
            title="The Pitch UK Finalist"
            subtitle="Top 8 of 1000+"
            description="We're in the Pitch UK! top 8 out of 1000+ applications - competing at Amazon HQ."
            imageUrl="/images/examinaite_in_thePitchUK.png"
            tags={["Pitch UK", "Finalist", "Competition"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Pitching at Amazon HQ"
            subtitle="Professional yapper"
            description="Professional Yapper - presenting Examinaite at Amazon HQ for The Pitch UK."
            imageUrl="/images/Pitching_at_AmazonHQ_ThePitchUK.JPG"
            tags={["Amazon", "Pitch", "Presenting"]}
            imagePosition={6}
          />
          <NetflixCard
            title="Pitching Continued"
            subtitle="Still yapping"
            description="Still yapping - delivering the pitch to judges and investors."
            imageUrl="/images/Pitching_at_AmazonHQ_ThePitchUK2.JPG"
            tags={["Pitch", "Amazon", "Investors"]}
            imagePosition={6}
          />
          <NetflixCard
            title="The Pitch UK Finalist Badge"
            subtitle="Official recognition"
            description="Finalist ;* - official recognition from The Pitch UK competition."
            imageUrl="/images/ThePitchUKFinalist.jpeg"
            tags={["Finalist", "Recognition", "Badge"]}
            imagePosition={7}
          />
          <NetflixCard
            title="Irish Times Article"
            subtitle="First newspaper feature"
            description="My first newspaper article!!! - The Irish Times covering Examinaite."
            imageUrl="/images/examinaite_irish_times_article.png"
            tags={["Irish Times", "Press", "Coverage"]}
            imagePosition={8}
          />
          <NetflixCard
            title="The Irish Times Photo"
            subtitle="Press coverage"
            description="Who's this guy - featured photo in The Irish Times article."
            imageUrl="/images/TheIrishTimesArticle.jpg"
            tags={["Irish Times", "Photo", "Feature"]}
            imagePosition={8}
          />
          <NetflixCard
            title="With Nana & Irish Times"
            subtitle="Making family proud"
            description="Tired but Making Nana proud - with the Irish Times article."
            imageUrl="/images/MeandNanawithIrishTimes.jpeg"
            tags={["Nana", "Irish Times", "Proud"]}
          />
          <NetflixCard
            title="Irish Independent"
            subtitle="National news"
            description="Taking over the National News - Irish Independent coverage."
            imageUrl="/images/IrishIndependentArticle.jpg"
            tags={["Irish Independent", "News", "National"]}
            imagePosition={7}
          />
        </NavSection>

        {/* Projects & Achievements */}
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
            description="National AI Challenge team photo - Avengers fr. Strong technical team."
            imageUrl="/images/personas/investors/NAIC-team.jpeg"
            tags={["Team", "NAIC", "Avengers"]}
          />
          <NetflixCard
            title="Examinaite Team"
            subtitle="Teaching & building"
            description="teaching these kids a thing or two - leading the Examinaite team in education."
            imageUrl="/images/Me_and_the_Examinaite_team.JPG"
            tags={["Examinaite", "Team", "Teaching"]}
            imagePosition={7}
          />
          <NetflixCard
            title="National Startup Awards"
            subtitle="With Aidan"
            description="The Teacher-Tech duo revolutionising education - at the National Startup Awards."
            imageUrl="/images/NationalStartUpAwardswAidan.jpeg"
            tags={["Startup Awards", "Aidan", "Education"]}
            imagePosition={7}
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
            description="Make sure to check out give(a)go !! - community building event and network."
            imageUrl="/images/personas/investors/giveago-builder-weekend.jpeg"
            tags={["GiveAGo", "Community", "Builders"]}
          />
          <NetflixCard
            title="DCU Open Day"
            subtitle="Giving back"
            description="Back to the Old Stomping ground for the DCU open day! - sharing entrepreneurship journey with students."
            imageUrl="/images/DCU_Nov_OpenDay.JPG"
            tags={["DCU", "Open Day", "Speaking"]}
          />
        </NavSection>

        {/* Teaching Background & Domain Expertise */}
        <NavSection title="Domain Expertise">
          <NetflixCard
            title="Teaching with Examinaite"
            subtitle="In the classroom"
            description="Teaching in class using Examinaite - real-world application of the platform I built. Deep domain expertise in education."
            imageUrl="/images/personas/investors/teaching-in-class-examinaite.JPG"
            tags={["Teaching", "Examinaite", "Classroom"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Classroom Implementation"
            subtitle="Real-world testing"
            description="Inside look at Examinaite - implementing technology in real classrooms with real students."
            imageUrl="/images/in_classoom_teaching_examinaite.JPG"
            tags={["Classroom", "Implementation", "Testing"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Early Development"
            subtitle="Building from scratch"
            description="Early screenshot of Examinaite's development - technical founder building the product hands-on."
            imageUrl="/images/examinaite_early_screenshot.png"
            tags={["Development", "Technical", "Founder"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Platform Evolution"
            subtitle="Product development"
            description="Inside look at Examinaite - iterating and improving based on user feedback."
            imageUrl="/images/examinaite1.png"
            tags={["Product", "Evolution", "UX"]}
            imagePosition={8}
          />
          <NetflixCard
            title="AI-Powered Features"
            subtitle="Technical innovation"
            description="Inside look at Examinaite - AI-powered question generation and adaptive learning."
            imageUrl="/images/examinaite2.png"
            tags={["AI", "Innovation", "Features"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Basketball Scholarship"
            subtitle="Athletic discipline"
            description="Basketball scholarship recipient - demonstrating dedication, teamwork, and performance under pressure. These qualities drive my approach to building companies."
            imageUrl="/images/personas/investors/bball-scholarship.JPG"
            tags={["Scholarship", "Basketball", "Discipline"]}
          />
          <NetflixCard
            title="National Cup Winner"
            subtitle="Championship mentality"
            description="Winner Winner Pints for Dinner - national basketball cup champion. Winning mindset applied to business."
            imageUrl="/images/winning-basketball-national-cup.JPG"
            tags={["Winner", "Champion", "Mindset"]}
          />
          <NetflixCard
            title="School Success"
            subtitle="Hall of fame"
            description="We are immortalised forever on the Walls of Ardscoil Rís Sports Hall - history of winning teams and achieving goals."
            imageUrl="/images/schoolball.JPG"
            tags={["Success", "Achievement", "Legacy"]}
          />
        </NavSection>

        {/* GlórAI Project */}
        <NavSection title="GlórAI - Voice AI Technology">
          <NetflixCard
            title="GlórAI Platform"
            subtitle="Ireland's first Irish voicebot"
            description="GlórAI - Ireland's first Irish-language AI voice companion. National AI Challenge finalist, built with OpenAI Whisper, GPT-4, and Web Speech API. Demonstrates technical capability in cutting-edge AI."
            imageUrl="/images/glorai1.png"
            tags={["GlórAI", "AI", "Voice", "Irish"]}
          />
          <NetflixCard
            title="Voice Technology"
            subtitle="Technical innovation"
            description="Built voice recognition and synthesis for Irish language - solving complex technical challenges in NLP and voice AI."
            imageUrl="/images/glorai2.png"
            tags={["Voice", "NLP", "Innovation"]}
          />
          <NetflixCard
            title="User Interface"
            subtitle="Product design"
            description="Clean, intuitive interface for voice learning - focus on user experience and conversion."
            imageUrl="/images/glorai3.png"
            tags={["UI", "UX", "Design"]}
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
