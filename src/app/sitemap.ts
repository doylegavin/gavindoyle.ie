import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gavindoyle.ie';

  // High priority routes for Google Knowledge Panel
  const highPriorityRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/about/press', priority: 0.95, changeFrequency: 'weekly' as const },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Important profile pages
  const profileRoutes = [
    '/employers',
    '/investors',
    '/techies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Personal profile pages
  const personalRoutes = [
    '/fans',
    '/suitors',
    '/curious',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  // Supporting pages
  const supportingRoutes = [
    '/about/awards',
    '/about/cv',
    '/contact',
    '/projects',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Project pages (important for demonstrating expertise)
  const projects = [
    '/projects/examinaite',
    '/projects/glorai',
    '/projects/thekneecapp',
    '/projects/dronan-weddings',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [
    ...highPriorityRoutes,
    ...profileRoutes,
    ...personalRoutes,
    ...supportingRoutes,
    ...projects,
  ];
}
