import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';

export default function CVPage() {
  return (
    <>
      <PersonaHero
        title="Resume & Experience"
        description="Comprehensive overview of my professional background, technical expertise, and career achievements."
        primaryCta={{
          text: "Download PDF",
          href: "/cv/Gavin_Doyle_CV.pdf"
        }}
        secondaryCta={{
          text: "View Projects",
          href: "/projects"
        }}
      />
      
      <section className="content-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="content-grid">
          <ContentCard
            title="Senior Full-Stack Developer"
            content="Led development of scalable web applications, mentored junior developers, and implemented best practices that improved team productivity by 40%."
            metadata="TechCorp Inc. | 2022 - Present"
            icon="💼"
          />
          <ContentCard
            title="Software Engineer"
            content="Built and maintained high-traffic web applications, collaborated with cross-functional teams, and delivered features on time and within budget."
            metadata="StartupXYZ | 2020 - 2022"
            icon="⚙️"
          />
          <ContentCard
            title="Frontend Developer"
            content="Specialized in creating responsive, accessible user interfaces with modern frameworks. Improved site performance by 60%."
            metadata="WebAgency | 2018 - 2020"
            icon="🎨"
          />
        </div>
      </section>
    </>
  );
}
