import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';
import JsonLd, { personSchema } from '@/components/JsonLd';

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <PersonaHero
        title="About Me"
        description="Passionate developer creating amazing digital experiences with cutting-edge technology and innovative solutions."
        primaryCta={{
          text: "View Projects",
          href: "/projects"
        }}
        secondaryCta={{
          text: "Get In Touch",
          href: "/contact"
        }}
      />
      
      <section className="content-section">
        <h2 className="section-title">My Story</h2>
        <div className="content-grid">
          <ContentCard
            title="Background"
            content="I'm a dedicated software developer with a passion for creating innovative solutions. My journey began with curiosity about how things work, which led me to pursue programming and web development."
            icon="🌟"
          />
          <ContentCard
            title="Philosophy"
            content="I believe in writing clean, efficient code that not only works but is maintainable and scalable. User experience is at the heart of everything I create."
            icon="💭"
          />
          <ContentCard
            title="Goals"
            content="Constantly learning and adapting to new technologies, I aim to build solutions that make a positive impact and solve real-world problems."
            icon="🎯"
          />
        </div>
      </section>
    </>
  );
}
