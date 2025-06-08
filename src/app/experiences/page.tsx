import { generatePageMetadata } from "../seo";
import React from "react";
import { EXPERIENCE } from "@/data/projects";

export const metadata = generatePageMetadata({
  title: "Experiences",
  description:
    "Explore my professional journey, key projects, and contributions across various organizations and roles.",
});

export default function Experiences() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="relative">          <h1 className="animate-slideUp text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl animate-slideUp [animation-delay:0.2s]">
            Highlighting key projects, contributions, and professional growth throughout my career journey across different organizations and roles.
          </p>
            {/* Stats */}
          <div className="mt-8 flex gap-8 animate-slideUp [animation-delay:0.4s]">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{EXPERIENCE.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Professional Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">2+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of my most impactful professional projects and contributions.
          </p>
        </div>        <div role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCE.map((experience, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-transparent dark:from-amber-950/20 dark:via-orange-950/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  
                  {/* Duration and Location */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{experience.location}</span>
                    </div>                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                  {experience.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:pranavmurali024@gmail.com" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="/projects" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
