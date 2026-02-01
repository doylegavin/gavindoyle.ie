import Link from 'next/link';
import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';

export default function AwardsPage() {
  return (
    <>
      <PersonaHero
        title="Awards & Recognition"
        description="Recognition from entrepreneurship programs, athletic achievements, teaching excellence, and technology milestones throughout my journey."
        primaryCta={{
          text: "View Projects",
          href: "/projects"
        }}
        secondaryCta={{
          text: "Get In Touch",
          href: "/contact"
        }}
        backgroundGradient="linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
      />
      
      <section className="content-section">
        <h2 className="section-title">Entrepreneurship Programs</h2>
        <div className="content-grid">
          <ContentCard
            title="Enterprise Ireland New Frontiers"
            content="Phase 1 & Phase 2 participant for Examinaite - validated business model and received mentorship support"
            metadata="2024"
            icon="🚀"
          />
          <ContentCard
            title="NDRC Pre-Accelerator"
            content="Selected for NDRC's competitive pre-accelerator program - early validation of Examinaite concept"
            metadata="2024"
            icon="💡"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Athletic Achievements</h2>
        <div className="content-grid">
          <ContentCard
            title="Semi-Professional Basketball"
            content="6 years competing at semi-pro level in Ireland - developed discipline, teamwork, and competitive drive"
            metadata="Multiple seasons"
            icon="🏀"
          />
          <ContentCard
            title="Strength & Conditioning Coach"
            content="Masters degree in Strength & Conditioning from Ulster University - applied sports science principles"
            metadata="Ulster University"
            icon="💪"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Teaching Recognition</h2>
        <div className="content-grid">
          <ContentCard
            title="7+ Years Teaching Experience"
            content="PE & Mathematics teacher in excellent schools - 3,500+ classroom hours developing educational expertise"
            metadata="Multiple schools"
            icon="🎓"
          />
          <ContentCard
            title="Student Impact"
            content="Helped hundreds of students develop mathematical understanding and physical literacy"
            metadata="Ongoing"
            icon="👨‍🎓"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Technology Milestones</h2>
        <div className="content-grid">
          <ContentCard
            title="Examinaite Growth"
            content="Built from scratch as self-taught developer - reached 1,000+ users in 3 months"
            metadata="2024"
            icon="📊"
          />
          <ContentCard
            title="Multiple Live Projects"
            content="Successfully launched multiple websites and applications serving real users"
            metadata="Ongoing"
            icon="🌐"
          />
        </div>
      </section>

      <section className="content-section">
        <div className="cta-block">
          <h2>Recognition through execution</h2>
          <p>Awards are nice, but shipping products that people actually use is better.</p>
          <div className="cta-buttons">
            <Link href="/projects" className="btn btn-primary">See My Work</Link>
            <Link href="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
} 