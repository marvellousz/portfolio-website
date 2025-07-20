"use client";

import { GitHubIcon } from "@/components/icons";
import { PROJECTS } from "@/data/projects";

type Props = {
  project: (typeof PROJECTS)[number];
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="space-y-4">
      {/* Project Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Project Description */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
