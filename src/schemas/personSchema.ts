// Comprehensive Schema for Gavin Doyle
// Following Google Knowledge Panel best practices with Wikidata integration

export const gavinDoylePersonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://gavindoyle.ie/#gavin-doyle",
      "name": "Gavin Doyle",
      "alternateName": ["Gav", "Gavinthecraic"],
      "description": "Irish educator-turned-founder and software developer. After 7 years teaching PE and Mathematics, founded Examinaite, an AI-powered Leaving Certificate revision platform serving 2,000+ students.",
      "url": "https://gavindoyle.ie/",
      "image": {
        "@type": "ImageObject",
        "@id": "https://gavindoyle.ie/#image",
        "url": "https://gavindoyle.ie/images/personas/employers/headshot-full-smile.jpg",
        "contentUrl": "https://gavindoyle.ie/images/personas/employers/headshot-full-smile.jpg",
        "width": 1200,
        "height": 1200
      },
      "jobTitle": "Founder and Chief Executive Officer",
      "worksFor": {
        "@id": "https://gavindoyle.ie/#examinaite"
      },
      "nationality": "Irish",
      "homeLocation": "Dublin, Ireland",
      "knowsLanguage": ["en-IE", "ga-IE"],
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "Wikidata",
        "value": "Q138010338"
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
        "AI in Education",
        "Leaving Certificate",
        "Irish Education System",
        "Irish Language Technology",
        "Irish Language (Gaeilge)",
        "Full-Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Teaching",
        "Mathematics Education"
      ],
      "sameAs": [
        "https://www.wikidata.org/wiki/Q138010338",
        "https://www.linkedin.com/in/doyle-gavin",
        "https://github.com/doylegavin",
        "https://www.instagram.com/gavinthecraic/",
        "https://x.com/gavindoyle_ie",
        "https://www.youtube.com/@GavinDoyle-ie"
      ],
      "subjectOf": [
        {
          "@type": "Article",
          "headline": "Teacher quit job to build personalised AI revision platform for Leaving Cert",
          "url": "https://www.irishtimes.com/business/innovation/2025/12/04/teacher-quit-job-to-build-personalised-ai-revision-platform-for-leaving-cert/",
          "datePublished": "2024-12-04",
          "publisher": {
            "@type": "Organization",
            "name": "The Irish Times"
          }
        },
        {
          "@type": "Article",
          "headline": "Meet the teacher tech duo using AI as an alternative to grinds for Leaving Cert students",
          "url": "https://www.independent.ie/irish-news/education/meet-the-teacher-tech-duo-using-ai-as-an-alternative-to-grinds-for-leaving-cert-students/a377696583.html",
          "datePublished": "2026-01-27",
          "publisher": {
            "@type": "Organization",
            "name": "Irish Independent"
          }
        }
      ]
    },

    {
      "@type": "Organization",
      "@id": "https://gavindoyle.ie/#examinaite",
      "name": "Examinaite",
      "legalName": "Examinaite Limited",
      "url": "https://examinaite.ie/",
      "founder": {
        "@id": "https://gavindoyle.ie/#gavin-doyle"
      },
      "foundingDate": "2024-08-08",
      "sameAs": [
        "https://www.wikidata.org/wiki/Q138009627",
        "https://www.linkedin.com/company/examinaite/",
        "https://www.crunchbase.com/organization/examinaite-beff"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "https://gavindoyle.ie/#website",
      "name": "Gavin Doyle",
      "url": "https://gavindoyle.ie/",
      "publisher": {
        "@id": "https://gavindoyle.ie/#gavin-doyle"
      },
      "inLanguage": "en-IE"
    },

    {
      "@type": ["WebPage", "ProfilePage"],
      "@id": "https://gavindoyle.ie/#webpage",
      "url": "https://gavindoyle.ie/",
      "name": "Gavin Doyle",
      "isPartOf": {
        "@id": "https://gavindoyle.ie/#website"
      },
      "mainEntity": {
        "@id": "https://gavindoyle.ie/#gavin-doyle"
      },
      "primaryImageOfPage": {
        "@id": "https://gavindoyle.ie/#image"
      },
      "inLanguage": "en-IE"
    }
  ]
};

// Organization schema for Examinaite (to be used on examinaite.ie)
export const examinaiteOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://examinaite.ie/#organization",
  "name": "Examinaite",
  "legalName": "Examinaite Limited",
  "url": "https://examinaite.ie/",
  "logo": "https://examinaite.ie/images/logo.png",
  "description": "AI-powered Leaving Certificate revision platform serving 2,000+ Irish students. Adaptive difficulty and personalized exam preparation.",

  "founder": {
    "@type": "Person",
    "@id": "https://gavindoyle.ie/#gavin-doyle",
    "name": "Gavin Doyle",
    "url": "https://gavindoyle.ie/"
  },

  "foundingDate": "2024-08-08",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dublin",
      "addressCountry": "IE"
    }
  },

  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dublin",
    "addressCountry": "IE"
  },

  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "doyle.d.gavin@gmail.com"
  },

  "sameAs": [
    "https://www.wikidata.org/wiki/Q138009627",
    "https://www.linkedin.com/company/examinaite/",
    "https://www.crunchbase.com/organization/examinaite-beff"
  ],

  "keywords": "EdTech, Education technology, Leaving Certificate, AI, Artificial Intelligence, Exam preparation, Student assessment, Ireland",

  "serviceArea": {
    "@type": "Country",
    "name": "Ireland"
  },

  "areaServed": "IE"
};
