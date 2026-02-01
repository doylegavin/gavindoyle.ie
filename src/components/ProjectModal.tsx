'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const allImages = [project.images.hero, ...project.images.gallery];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 text-2xl"
          >
            ×
          </button>

          {/* Header */}
          <div className="relative h-64 rounded-t-lg overflow-hidden">
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className="text-gray-300 text-sm">{project.year}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
              <p className="text-gray-300">{project.subtitle}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">About This Project</h3>
              <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Role & Technologies */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">My Role</h4>
                <p className="text-gray-300">{project.role}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.metrics.users && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{project.metrics.users.split(' ')[0]}</div>
                      <div className="text-gray-400 text-sm">{project.metrics.users.split(' ').slice(1).join(' ')}</div>
                    </div>
                  )}
                  {project.metrics.growth && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{project.metrics.growth.split(' ')[0]}</div>
                      <div className="text-gray-400 text-sm">{project.metrics.growth.split(' ').slice(1).join(' ')}</div>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{project.metrics.performance.split(' ')[0]}</div>
                      <div className="text-gray-400 text-sm">{project.metrics.performance.split(' ').slice(1).join(' ')}</div>
                    </div>
                  )}
                  {project.metrics.other && (
                    <div className="text-center">
                      <div className="text-sm font-bold text-yellow-400">{project.metrics.other}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Challenge, Solution, Outcome */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Solutions</h4>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Outcomes</h4>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Gallery */}
            {allImages.length > 1 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Project Gallery</h4>
                <div className="relative">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={allImages[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                      >
                        →
                      </button>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {allImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <div className="mb-6 bg-gray-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Client Testimonial</h4>
                <blockquote className="text-gray-300 italic mb-2">
                  &quot;{project.testimonial.quote}&quot;
                </blockquote>
                <cite className="text-gray-400 text-sm">
                  — {project.testimonial.author}, {project.testimonial.role}
                </cite>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  View Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  View Code
                </a>
              )}
              <button
                onClick={onClose}
                className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


