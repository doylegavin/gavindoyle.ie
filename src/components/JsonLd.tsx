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
  "name": "Gavin Doyle",
  "jobTitle": "Founder & CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Examinaite"
  },
  "description": "Teacher-turned-founder building AI-powered education tools. Former PE & Maths teacher with 7+ years classroom experience, now CEO of Examinaite.",
  "url": "https://yoursite.com",
  "sameAs": [
    "https://instagram.com/gavinthecraic",
    "https://www.linkedin.com/in/doyle-gavin",
    "https://github.com/doylegavin"
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
    }
  ],
  "knowsAbout": [
    "Software Development",
    "Education Technology",
    "Artificial Intelligence",
    "Irish Language Technology",
    "React",
    "Next.js",
    "TypeScript",
    "Teaching",
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


