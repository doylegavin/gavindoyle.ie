import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';

export default function PressPage() {
  return (
    <>
      <PersonaHero
        title="Press & Media"
        description="Available for speaking engagements, interviews, and thought leadership on AI in education, Irish language technology, and the intersection of teaching and software development."
        primaryCta={{
          text: "Book Speaking",
          href: "/contact"
        }}
        secondaryCta={{
          text: "Download Bio",
          href: "/contact"
        }}
        backgroundGradient="linear-gradient(135deg, #2d1b69 0%, #11998e 100%)"
      />
      
      <section className="content-section">
        <h2 className="section-title">Available for Speaking</h2>
        <div className="content-grid">
          <ContentCard
            title="Education Technology"
            content="The teacher's perspective on AI in the classroom - what actually works vs what's just hype"
            icon="🎓"
          />
          <ContentCard
            title="Entrepreneurship Journey"
            content="From classroom to startup - building Examinaite as a self-taught developer while teaching full-time"
            icon="🚀"
          />
          <ContentCard
            title="Irish Language Technology"
            content="Building GlórAI and other Irish-language tech tools - preserving culture through innovation"
            icon="🗣️"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Program Features</h2>
        <div className="content-grid">
          <ContentCard
            title="Enterprise Ireland New Frontiers"
            content="Featured as Phase 2 participant - validated business model and growth trajectory"
            metadata="2024"
            icon="🏆"
          />
          <ContentCard
            title="NDRC Pre-Accelerator"
            content="Alumni of Ireland's leading pre-accelerator program for tech startups"
            metadata="2024"
            icon="💡"
          />
          <ContentCard
            title="Educational Innovation"
            content="7+ years classroom experience informing product development and user understanding"
            metadata="Ongoing"
            icon="📚"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Thought Leadership Topics</h2>
        <div className="content-grid">
          <ContentCard
            title="AI in Education Reality Check"
            content="What teachers actually need vs what tech companies think they need"
            icon="🤖"
          />
          <ContentCard
            title="Building for Niche Markets"
            content="How focusing on Irish education led to rapid user adoption and clear product-market fit"
            icon="🎯"
          />
          <ContentCard
            title="Teacher-Founder Advantage"
            content="Why domain expertise beats pure technical skills when building education products"
            icon="🎪"
          />
          <ContentCard
            title="Preserving Language Through Tech"
            content="Using AI and modern tools to make Irish language learning more accessible and engaging"
            icon="🇮🇪"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Bio & Assets</h2>
        <div className="content-grid">
          <ContentCard
            title="Professional Bio"
            content="Gavin Doyle is a teacher-turned-founder building AI-powered education tools. Former PE & Maths teacher with 7+ years classroom experience, now CEO of Examinaite."
            icon="📝"
          />
          <ContentCard
            title="Speaking Experience"
            content="Comfortable presenting to educators, entrepreneurs, and technical audiences. 3,500+ hours of classroom teaching experience."
            icon="🎤"
          />
          <ContentCard
            title="Media Kit"
            content="High-resolution photos, company logos, and detailed speaker information available upon request."
            icon="📸"
          />
        </div>
      </section>

      <section className="content-section">
        <div className="cta-block">
          <h2>Let&apos;s talk about building useful things</h2>
          <p>Available for podcasts, panels, conferences, and educational events.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Book Speaking</a>
            <a href="mailto:doyle.d.gavin@gmail.com" className="btn btn-secondary">Media Inquiries</a>
          </div>
        </div>
      </section>
    </>
  );
} 