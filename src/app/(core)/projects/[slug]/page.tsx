import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjects } from '@/data/projects';
import ProjectPageClient from './ProjectPageClient';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}
