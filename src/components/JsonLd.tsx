interface JsonLdProps {
  data: object;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Person Schema for About and Employers pages
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gavindoyle.ie/#gavin",
  "name": "Gavin Doyle",
  "jobTitle": "Founder & CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Examinaite",
    "url": "https://examinaite.ie"
  },
  "description": "Irish educator-turned-founder and software developer. After 7 years teaching PE and Mathematics, founded Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students.",
  "url": "https://gavindoyle.ie",
  "image": "https://gavindoyle.ie/images/personas/employers/headshot-full-smile.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/doyle-gavin",
    "https://github.com/doylegavin",
    "https://instagram.com/gavinthecraic",
    "https://x.com/gavindoyle_ie",
    "https://www.youtube.com/@GavinDoyle-ie"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dublin",
    "addressCountry": "Ireland"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Dublin City University"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Ulster University"
    }
  ],
  "knowsAbout": [
    "EdTech",
    "Education Technology",
    "Artificial Intelligence",
    "AI-Powered Education",
    "Leaving Certificate",
    "Irish Language Technology",
    "Irish Language (Gaeilge)",
    "Software Development",
    "Full-Stack Development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Teaching",
    "Mathematics Education",
    "Physical Education",
    "Strength & Conditioning",
    "Basketball"
  ]
};

// Organization Schema for Examinaite
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Examinaite",
  "url": "https://examinaite.ie",
  "description": "AI-powered revision platform for Leaving Cert students",
  "founder": {
    "@type": "Person",
    "name": "Gavin Doyle"
  },
  "foundingDate": "2023",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dublin",
    "addressCountry": "Ireland"
  }
};

// Software Application Schema for projects
export const createSoftwareSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": name,
  "description": description,
  "url": url,
  "author": {
    "@type": "Person",
    "name": "Gavin Doyle"
  },
  "programmingLanguage": ["JavaScript", "TypeScript", "React", "Next.js"]
});

// Article Schema for blog posts
export const createArticleSchema = (title: string, description: string, datePublished: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": "Gavin Doyle"
  },
  "datePublished": datePublished,
  "url": url,
  "publisher": {
    "@type": "Person",
    "name": "Gavin Doyle"
  }
});


