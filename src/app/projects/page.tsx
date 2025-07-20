import { generatePageMetadata } from "../seo";
import { ProjectCard } from "../../components/project-card";
import React from "react";
import { PROJECTS } from "@/data/projects";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "View some of my notable open source web apps, npm packages, cli tools and more.",
});

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Projects
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          A collection of my notable open source applications, npm packages, CLI tools, and experiments that showcase my development journey.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
