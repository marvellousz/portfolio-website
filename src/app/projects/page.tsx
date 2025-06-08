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
    <React.Fragment>{/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="relative">
          <h1 className="animate-slideUp text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl animate-slideUp [animation-delay:0.2s]">
            A collection of my notable open source applications, npm packages, CLI tools, and experiments that showcase my development journey.
          </p>
            {/* Stats */}
          <div className="mt-8 flex gap-8 animate-slideUp [animation-delay:0.4s]">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{PROJECTS.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </section>      {/* Projects Grid */}
      <section className="py-16">
        <div
          role="list"
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 auto-rows-fr"
        >
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className="animate-fadeIn h-full"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}</div>
      </section>
    </React.Fragment>
  );
}
