import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import { GitHubIcon, LinkIcon } from '@/components/icons';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = PROJECTS.find((p) => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">{/* Navigation */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>        {/* Project Hero */}
        <div className="mb-12">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
            {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <GitHubIcon className="w-5 h-5" />
              View Code
            </Link>
            {(project as any).liveUrl && (
              <Link
                href={(project as any).liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </Link>
            )}
          </div>
        </div>        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Long Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About This Project</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.longDescription}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{feature.split(' ')[0]}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {feature.split(' ').slice(1).join(' ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
            <div className="space-y-4">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category}>
                  <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>        {/* Project Timeline or Additional Info */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {Object.values(project.techStack).flat().length} technologies used
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Features</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.features.length} key features
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
