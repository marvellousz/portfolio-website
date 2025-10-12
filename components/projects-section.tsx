"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Memora",
    description: "A locally run full-stack application for building a personal knowledge base with semantic search and question answering capabilities using completely free and open-source AI tools.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "FastAPI", "AI/ML", "TypeScript"],
    link: "https://github.com/marvellousz/memora",
    github: "https://github.com/marvellousz/memora"
  },
  {
    title: "Percepta",
    description: "A full-stack AI chat platform with FastAPI backend and Next.js frontend, featuring LiveKit, Mem0 integration and multi-agent AI capabilities.",
    image: "/api/placeholder/400/300", 
    tags: ["Next.js", "FastAPI", "AI/ML", "WebSocket"],
    link: "https://github.com/marvellousz/percepta",
    github: "https://github.com/marvellousz/percepta"
  },
  {
    title: "NullBin",
    description: "A privacy-first, client-side encrypted, optionally self-hostable Pastebin alternative with a clean, modern UX.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "Privacy", "Encryption", "TypeScript"],
    link: "https://github.com/marvellousz/nullbin",
    github: "https://github.com/marvellousz/nullbin"
  },
  {
    title: "Schedulo",
    description: "A modern web application that streamlines the process of scheduling meetings and sending emails in one unified workflow.",
    image: "/api/placeholder/400/300",
    tags: ["Next.js", "TailwindCSS", "Google APIs", "TypeScript"],
    link: "https://github.com/marvellousz/schedulo",
    github: "https://github.com/marvellousz/schedulo"
  },
  {
    title: "AutoHub",
    description: "AutoHub is a modern web platform built with SvelteKit that enables developers to discover, share, and collaborate on automation scripts.",
    image: "/autohub.png",
    tags: ["SvelteKit", "Automation", "Developer Tools", "JavaScript"],
    link: "https://github.com/marvellousz/autohub",
    github: "https://github.com/marvellousz/autohub"
  },
  {
    title: "Browser Agent",
    description: "A powerful command-line tool for controlling web browsers from your terminal in arch-linux. Open websites, search the web, and automate browser tasks with simple commands.",
    image: "/api/placeholder/400/300",
    tags: ["Python", "CLI", "Automation", "Browser Control"],
    link: "https://github.com/marvellousz/browser-agent",
    github: "https://github.com/marvellousz/browser-agent"
  }
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
                   Featured Projects
                 </h2>
                 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                   A selection of projects that showcase my development skills and technical expertise across full-stack applications
                 </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/marvellousz?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="cursor-pointer hover:bg-black hover:text-white hover:border-black transition-all duration-300">
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
