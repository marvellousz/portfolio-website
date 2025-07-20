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
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Experience
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Highlighting key projects, contributions, and professional growth throughout my career journey across different organizations and roles.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {EXPERIENCE.map((experience, idx) => (
          <div key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                {experience.title}
              </h3>
              
              <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
