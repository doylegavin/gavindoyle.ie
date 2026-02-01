'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Development': return 'bg-blue-500';
      case 'Completed': return 'bg-purple-500';
      case 'Archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Projects
          </Link>
          <Link href="/" className="text-2xl font-bold">
            G
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={project.images.hero}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="text-gray-300">{project.year}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-300">{project.role}</span>
            </div>
            <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Code
                </a>
              )}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {project.longDescription}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.metrics && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Metrics</h3>
                  <div className="space-y-2">
                    {project.metrics.users && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Users:</span>
                        <span className="text-white">{project.metrics.users}</span>
                      </div>
                    )}
                    {project.metrics.growth && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth:</span>
                        <span className="text-white">{project.metrics.growth}</span>
                      </div>
                    )}
                    {project.metrics.performance && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Performance:</span>
                        <span className="text-white">{project.metrics.performance}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Key Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.slice(0, 3).map((challenge, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-red-400 mr-2 mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Solutions</h3>
              <ul className="space-y-3">
                {project.solutions.slice(0, 3).map((solution, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400 mb-4">Outcomes</h3>
              <ul className="space-y-3">
                {project.outcomes.slice(0, 3).map((outcome, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-green-400 mr-2 mt-1">•</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="mb-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <blockquote className="text-xl text-gray-300 italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <cite className="text-gray-400">
                — {project.testimonial.author}, {project.testimonial.role}
              </cite>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to see more details?</h2>
          <p className="text-gray-300 mb-8">
            Click below to view the complete project breakdown, including technical details, 
            full challenge-solution analysis, and project gallery.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            View Complete Project Details
          </button>
        </section>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}


