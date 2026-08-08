'use client';

import Billboard from '@/components/Billboard';
import NetflixCard from '@/components/NetflixCard';
import NavSection from '@/components/NavSection';
import { NavigationProvider } from '@/components/NavigationProvider';
import JsonLd, { createSoftwareSchema } from '@/components/JsonLd';

export default function ProjectsPage() {
  const examinaiteSchema = createSoftwareSchema(
    "Examinaite",
    "AI revision platform for the Leaving Cert. Generates LC-style questions, step-by-step solutions, PDF export; teacher dashboards inbound.",
    "https://examinaite.ie"
  );

  return (
    <NavigationProvider>
      <div className="netflix-page">
        <JsonLd data={examinaiteSchema} />

        <Billboard
          title="The Gallery"
          tagline="AI education tools, Irish language preservation, and everything in between"
          description="A catalogue of work spanning AI-powered education tools, Irish language preservation, freelance websites, and experimental projects. Each built with purpose, shipped with care."
          imageUrl="/images/400A6908.jpg"
          imagePosition={6}
          seriesLabel="Productions"
          badge="Now Showing"
          ratingFlag="Shipped"
          match="97% Match"
          year="2023 - 2026"
          parts="5 Productions"
          primaryCta={{ text: 'GitHub', href: 'https://github.com/doylegavin' }}
          secondaryCta={{ text: 'Work With Me', href: '/contact' }}
        />

        <NavSection title="Featured Productions">
          <NetflixCard
            title="Examinaite"
            subtitle="Founder & Solo Developer"
            description="AI-powered revision platform for Irish students. Built from scratch as a self-taught developer, reached 1,000+ users in 3 months. Full-stack React/Next.js with Python backend. Live at examinaite.ie."
            imageUrl="/images/personas/employers/examinaite1.png"
            tags={["AI", "EdTech", "Flagship"]}
            href="/projects/examinaite"
            imagePosition={8}
          />
          <NetflixCard
            title="GlórAI"
            subtitle="Creator & Developer"
            description="Irish-language AI voice bot for conversation practice. First of its kind for Irish language learning. Uses OpenAI Whisper for speech recognition and custom TTS. Live at gaeilgeoir.ai."
            imageUrl="/images/personas/techies/glorai1.png"
            tags={["Voice AI", "Gaeilge", "First of its kind"]}
            href="/projects/glorai"
            imagePosition={5}
          />
          <NetflixCard
            title="Dr Ónán Weddings"
            subtitle="First ever client"
            description="Fantastic first client, first ever job as a software developer - I'd only been coding 3-4 months. The dopamine when the money hit my bank account was incredible. Modern design, warm pastels, optimized loading. Live at dronanweddings.ie."
            imageUrl="/images/personas/employers/dronan-weddings.png"
            tags={["Freelance", "First Client", "2024"]}
            href="/projects/dronan-weddings"
            imagePosition={5}
          />
          <NetflixCard
            title="The Kneecapp"
            subtitle="Developer & Translator"
            description="Bilingual lyric translation project focusing on Irish language education. 300+ learners engaged with interactive exploration of Kneecap's lyrics with cultural context and translations. Live at thekneecapp.ie."
            imageUrl="/images/personas/employers/thekneecap.png"
            tags={["Gaeilge", "Music", "Culture"]}
            href="/projects/thekneecapp"
            imagePosition={5}
          />
          <NetflixCard
            title="Pokemon Image Classifier"
            subtitle="Machine learning detour"
            description="Deep learning project using TensorFlow to classify Pokemon from images. Built during my journey into machine learning and computer vision."
            imageUrl="/images/personas/techies/NAIC.JPG"
            tags={["TensorFlow", "Computer Vision", "2023"]}
            href="https://github.com/doylegavin"
            imagePosition={5}
          />
        </NavSection>

        <NavSection title="Experiments & Learning">
          <NetflixCard
            title="AI in Education Research"
            subtitle="Real classroom testing"
            description="Exploring how AI can genuinely help teachers and students, not just add complexity. Real classroom testing of AI-generated questions and feedback systems."
            imageUrl="/images/personas/employers/in_classoom_teaching_examinaite.JPG"
            tags={["Research", "Classroom", "AI"]}
            imagePosition={8}
          />
          <NetflixCard
            title="Irish Language Tech"
            subtitle="Preserving Gaeilge"
            description="Building tools to preserve and promote Irish. From voice recognition to translation tools, exploring how technology can support endangered languages."
            imageUrl="/images/personas/employers/thekneecap2.png"
            tags={["Gaeilge", "Preservation", "Tech"]}
            imagePosition={5}
          />
          <NetflixCard
            title="Teaching + Coding"
            subtitle="Bridging both worlds"
            description="Bridging the gap between education and technology. Using my classroom experience to build products that teachers actually want to use."
            imageUrl="/images/Me_and_the_Examinaite_team.JPG"
            tags={["Education", "Product", "Experience"]}
            imagePosition={7}
          />
        </NavSection>

        <NavSection title="Case Study: Examinaite">
          <NetflixCard
            title="The Problem"
            subtitle="A gap in the market"
            description="Irish students had no quality AI-powered revision tools. Generic platforms didn't understand the Irish curriculum or exam format."
            imageUrl="/images/personas/employers/examinaite2.png"
            tags={["Problem", "Market Gap"]}
            imagePosition={8}
          />
          <NetflixCard
            title="The Solution"
            subtitle="Curriculum-specific AI"
            description="Built curriculum-specific AI that generates practice questions, worked solutions, and instant feedback tailored to Irish Leaving Cert standards."
            imageUrl="/images/personas/employers/examinaite3.png"
            tags={["Solution", "AI", "Leaving Cert"]}
            imagePosition={8}
          />
          <NetflixCard
            title="The Results"
            subtitle="Product-market fit"
            description="1,000+ users in 3 months. Students using it daily for exam prep. Teachers recommending it in classrooms. Clear product-market fit."
            imageUrl="/images/TheIrishTimesArticle.jpg"
            tags={["1,000+ users", "3 months", "PMF"]}
            imagePosition={8}
          />
        </NavSection>
      </div>
    </NavigationProvider>
  );
}
