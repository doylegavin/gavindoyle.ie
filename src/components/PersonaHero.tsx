interface PersonaHeroProps {
  title: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundGradient?: string;
}

export default function PersonaHero({ 
  title, 
  description, 
  primaryCta, 
  secondaryCta,
  backgroundGradient = "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)"
}: PersonaHeroProps) {
  return (
    <section className="hero" style={{ background: backgroundGradient }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="cta-buttons">
          {primaryCta && (
            <a href={primaryCta.href} className="btn btn-primary">
              {primaryCta.text}
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className="btn btn-secondary">
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
