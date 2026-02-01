import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';
import JsonLd, { createSoftwareSchema } from '@/components/JsonLd';

export default function ProjectsPage() {
  const examinaiteSchema = createSoftwareSchema(
    "Examinaite",
    "AI revision platform for the Leaving Cert. Generates LC-style questions, step-by-step solutions, PDF export; teacher dashboards inbound.",
    "https://examinaite.ie"
  );

  return (
    <>
      <JsonLd data={examinaiteSchema} />
      <PersonaHero
        title="Project Portfolio"
        description="A catalogue of work spanning AI-powered education tools, Irish language preservation, freelance websites, and experimental projects. Each built with purpose, shipped with care."
        primaryCta={{
          text: "View All Projects",
          href: "/projects"
        }}
        secondaryCta={{
          text: "GitHub Profile",
          href: "https://github.com/doylegavin"
        }}
        backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      />
      
      <section className="content-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="content-grid">
          <ContentCard
            title="Examinaite"
            content="AI-powered revision platform for Irish students. Built from scratch as a self-taught developer, reached 1,000+ users in 3 months. Full-stack React/Next.js with Python backend."
            metadata="Founder & Solo Developer • 2024 • Live: examinaite.ie"
            href="/projects/examinaite"
            icon="🤖"
          />
          <ContentCard
            title="GlórAI"
            content="Irish-language AI voice bot for conversation practice. First of its kind for Irish language learning. Uses OpenAI Whisper for speech recognition and custom TTS."
            metadata="Creator & Developer • 2024 • Live: gaeilgeoir.ai"
            href="/projects/glorai"
            icon="🗣️"
          />
          <ContentCard
            title="Dr Ónán Weddings"
            content="Really want to thank Ronan - fantastic first client, first ever job as a software developer. I'd only been coding 3-4 months. The dopamine when the money hit my bank account was incredible. Modern design, warm pastels, optimized loading."
            metadata="First Client • 2024 • Live: dronanweddings.ie"
            href="/projects/dronan-weddings"
            icon="💍"
          />
          <ContentCard
            title="The Kneecapp"
            content="Bilingual lyric translation project focusing on Irish language education. 300+ learners engaged with interactive exploration of Kneecap's lyrics with cultural context and translations."
            metadata="Developer & Translator • 2024 • Live: thekneecapp.ie"
            href="/projects/thekneecapp"
            icon="🎵"
          />
          <ContentCard
            title="Pokemon Image Classifier"
            content="Deep learning project using TensorFlow to classify Pokemon from images. Built during my journey into machine learning and computer vision."
            metadata="Personal Project • 2023 • GitHub"
            href="https://github.com/doylegavin"
            icon="🔬"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Experiments & Learning</h2>
        <div className="content-grid">
          <ContentCard
            title="AI in Education Research"
            content="Exploring how AI can genuinely help teachers and students, not just add complexity. Real classroom testing of AI-generated questions and feedback systems."
            icon="📚"
          />
          <ContentCard
            title="Irish Language Tech"
            content="Building tools to preserve and promote Irish. From voice recognition to translation tools, exploring how technology can support endangered languages."
            icon="🇮🇪"
          />
          <ContentCard
            title="Teaching + Coding"
            content="Bridging the gap between education and technology. Using my classroom experience to build products that teachers actually want to use."
            icon="🎓"
          />
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-title">Case Study Example: Examinaite</h2>
        <div className="content-grid">
          <ContentCard
            title="The Problem"
            content="Irish students had no quality AI-powered revision tools. Generic platforms didn't understand the Irish curriculum or exam format."
            icon="❌"
          />
          <ContentCard
            title="The Solution"
            content="Built curriculum-specific AI that generates practice questions, worked solutions, and instant feedback tailored to Irish Leaving Cert standards."
            icon="💡"
          />
          <ContentCard
            title="The Results"
            content="1,000+ users in 3 months. Students using it daily for exam prep. Teachers recommending it in classrooms. Clear product-market fit."
            icon="📈"
          />
        </div>
      </section>

      <section className="content-section">
        <div className="cta-block">
          <h2>Want to build something together?</h2>
          <p>I&apos;m always interested in projects that solve real problems and help people learn.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Discuss a Project</a>
            <a href="https://github.com/doylegavin" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      </section>
    </>
  );
}
