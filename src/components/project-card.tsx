"use client";

import { GitHubIcon } from "@/components/icons";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: (typeof PROJECTS)[number];
};

export const ProjectCard = ({ project }: Props) => {
  const handleGitHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(project.repo, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2 h-full flex flex-col cursor-pointer">
      {/* Project Image */}
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative overflow-hidden flex-shrink-0">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={400}
            height={240}
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <Link href={`/projects/${project.id}`} className="flex-1 mr-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
          </Link>
          <button
            onClick={handleGitHubClick}
            className="flex-shrink-0 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GitHubIcon className="h-5 w-5 opacity-70 hover:opacity-100 hover:scale-110 transition-all" />
          </button>
        </div>        <Link href={`/projects/${project.id}`} className="block">
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3 flex-1">
            {project.description}
          </p>
        </Link>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
          {project.tags.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* View Project Button */}
        <Link href={`/projects/${project.id}`} className="block mt-auto">
          <div className="flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
            <span>View Project</span>
            <svg 
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
