import PersonaHero from '@/components/PersonaHero';
import ContentCard from '@/components/ContentCard';

export default function BlogPage() {
  return (
    <>
      <PersonaHero
        title="Blog & Stories"
        description="Thoughts on technology, creativity, life experiences, and the intersection of code and human experience."
        primaryCta={{
          text: "Latest Posts",
          href: "/blog"
        }}
        secondaryCta={{
          text: "Subscribe",
          href: "/contact"
        }}
      />
      
      <section className="content-section">
        <h2 className="section-title">Recent Posts</h2>
        <div className="content-grid">
          <ContentCard
            title="The Art of Clean Code"
            content="Exploring the philosophy behind writing maintainable, readable code and why it matters more than clever tricks."
            metadata="Coming Soon | 8 min read"
            icon="📝"
          />
          <ContentCard
            title="Building in Public"
            content="Lessons learned from sharing the journey of building products in public and the community that emerges."
            metadata="Coming Soon | 12 min read"
            icon="🏗️"
          />
          <ContentCard
            title="The Future of Web Development"
            content="Thoughts on emerging technologies, AI in development, and what the next decade might bring to our craft."
            metadata="Coming Soon | 15 min read"
            icon="🔮"
          />
        </div>
      </section>
    </>
  );
}
