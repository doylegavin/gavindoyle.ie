export interface PersonaInfo {
  slug: string;
  name: string;
  avatar: string;
}

export const PERSONAS: PersonaInfo[] = [
  { slug: 'employers', name: 'Employers', avatar: '/images/profiles/employers.png' },
  { slug: 'fans', name: 'Fans', avatar: '/images/profiles/fans.png' },
  { slug: 'suitors', name: 'Suitors', avatar: '/images/profiles/suitors.png' },
  { slug: 'curious', name: 'Stalkers', avatar: '/images/profiles/curious.png' },
  { slug: 'techies', name: 'Techies', avatar: '/images/profiles/engineers.png' },
  { slug: 'investors', name: 'Investors', avatar: '/images/profiles/investors.png' },
];

/** General profile used on shared pages (blog, gallery, about, contact). */
export const GENERAL_PERSONA: PersonaInfo = {
  slug: 'gavin',
  name: 'Gavin',
  avatar: '/images/profiles/gavin.png',
};

export function getPersona(slug: string): PersonaInfo {
  if (slug === GENERAL_PERSONA.slug) return GENERAL_PERSONA;
  return PERSONAS.find((p) => p.slug === slug) ?? GENERAL_PERSONA;
}
