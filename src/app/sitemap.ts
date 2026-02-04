import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gavindoyle.ie';

  // Static routes
  const routes = [
    '',
    '/about',
    '/about/awards',
    '/about/cv',
    '/about/press',
    '/blog',
    '/contact',
    '/projects',
    '/employers',
    '/fans',
    '/suitors',
    '/curious',
    '/techies',
    '/investors',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/about' ? 0.9 : 0.8,
  }));

  // Project pages
  const projects = [
    '/projects/examinaite',
    '/projects/glorai',
    '/projects/thekneecapp',
    '/projects/dronan-weddings',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projects];
}
