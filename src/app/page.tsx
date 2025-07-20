import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Profile Section */}
      <div className="flex items-start gap-8 mb-12">
        <div className="shrink-0">
          <Image
            src="/_static/me.jpg"
            width={120}
            height={120}
            alt="Pranav Murali"
            className="rounded-full"
            priority
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Pranav Murali
          </h1>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a passionate web developer and technology enthusiast currently pursuing 
              a Bachelor of Technology in Computer Science at Vellore Institute of Technology.
            </p>
            
            <p>
              I enjoy building digital experiences and exploring new technologies. 
              My interests span across web development, software engineering, and entrepreneurship.
            </p>
            
            <p>
              When I'm not coding, you can find me learning about new tech trends, 
              working on personal projects, or thinking about ways technology can solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact</h2>
        
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Email:</strong>{" "}
            <a 
              href="mailto:pranavmurali024@gmail.com" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              pranavmurali024@gmail.com
            </a>
          </p>
          
          <p>
            <strong>Location:</strong> Kerala, India
          </p>
          
          <div className="flex items-center gap-4 pt-2">
            <a 
              href={LINKS.RESUME} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Resume
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="https://github.com/pranavmurali024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="https://linkedin.com/in/pranavmurali024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Stay Updated</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Interested in my work and thoughts? Feel free to reach out or connect with me on social media.
        </p>
        <a 
          href="mailto:pranavmurali024@gmail.com" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
