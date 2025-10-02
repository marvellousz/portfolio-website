"use client"

import { useState, useEffect } from 'react'
import { ProfileSection } from './profile-section'
import { TechStack } from './tech-stack'
import { DailyTools } from './daily-tools'
import { LinksAndProjects } from './links-and-projects'

interface CommandHandlerProps {
  activeCommand: string | null
  commandArgs: string[]
  commandFlags: Record<string, string>
  onCommandComplete: () => void
}

export function CommandHandler({ 
  activeCommand, 
  commandArgs, 
  commandFlags, 
  onCommandComplete 
}: CommandHandlerProps) {
  const [showTyping, setShowTyping] = useState(false)
  const [currentText, setCurrentText] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (activeCommand) {
      setIsVisible(true)
      setShowTyping(true)
      setCurrentText('')
      
      // Simulate typing effect
      const fullText = getCommandOutput(activeCommand, commandArgs, commandFlags)
      let index = 0
      
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setCurrentText(fullText.slice(0, index + 1))
          index++
        } else {
          setShowTyping(false)
          clearInterval(typeInterval)
          // Remove auto-hide - user will close manually
        }
      }, 30)

      return () => clearInterval(typeInterval)
    }
  }, [activeCommand, commandArgs, commandFlags, onCommandComplete])

  const getCommandOutput = (command: string, args: string[], flags: Record<string, string>) => {
    switch (command) {
      case 'about.me':
        return `PRANAV MURALI
═══════════════════════════════════════════════════════════════

NAME: Pranav Murali
AGE: 21
LOCATION: Kerala, India
STATUS: Available for work
ROLE: Full Stack Developer

BIO:
Hello! I'm Pranav, a passionate developer who loves building 
web applications, AI systems, and developer tools. I enjoy 
creating solutions that make a difference and learning new 
technologies along the way.

SPECIALTIES:
• Full Stack Web Development
• AI/ML Integration
• System Architecture
• Developer Tools & Experience

CURRENT FOCUS:
Designing reliable, scalable web platforms and exploring the role 
of AI in shaping the future of modern software development.

═══════════════════════════════════════════════════════════════`

      case 'projects':
        const filter = flags.filter || 'all'
        return `PORTFOLIO PROJECTS ${filter.toUpperCase() !== 'ALL' ? `(FILTERED: ${filter.toUpperCase()})` : ''}
═══════════════════════════════════════════════════════════════

${filter === 'ai' || filter === 'all' ? `
  AI PROJECTS:
  • Memora - Local, privacy-first knowledge base with semantic search and AI Q&A
  • Percepta - Multi-agent AI chat platform with memory and real-time communication
  • Browser-Agent - Agentic browser automation system controllable from the terminal
  ` : ''}
  
  ${filter === 'web' || filter === 'all' ? `
  WEB APPLICATIONS:
  • NullBin - Privacy-first encrypted pastebin for secure sharing
  • Schedulo - Smart scheduling and email drafting tool with calendar integration
  • AutoHub - Platform for discovering and sharing Python automation scripts
  • Minimal - Clean MERN stack blog application with full CRUD and user authentication
  ` : ''}
  
  ${filter === 'hardware' || filter === 'all' ? `
  DEVELOPER TOOLS:
  • Line-Following Robot - Embedded systems project integrating hardware and software
  ` : ''}
  
  TECH STACK USED: Next.js, React, TypeScript, JavaScript, Python, Flask, Node.js, Express, C, FastAPI, SvelteKit, MongoDB, PostgreSQL, AI/ML, WebSocket  
  

═══════════════════════════════════════════════════════════════`

      case 'skills':
        return `TECHNICAL SKILLSET
═══════════════════════════════════════════════════════════════

LANGUAGES:
JavaScript ⭐⭐⭐⭐⭐  Python ⭐⭐⭐⭐  TypeScript ⭐⭐⭐⭐⭐
Java ⭐⭐               C/C++ ⭐⭐        Go ⭐⭐⭐
SQL ⭐⭐⭐              R ⭐              MATLAB ⭐

FRAMEWORKS & LIBRARIES:
React ⭐⭐⭐⭐⭐       Next.js ⭐⭐⭐⭐⭐  Node.js ⭐⭐⭐⭐⭐
Express ⭐⭐⭐⭐⭐     Django ⭐⭐⭐⭐     FastAPI ⭐⭐⭐⭐
Tailwind ⭐⭐⭐⭐⭐    Shadcn ⭐⭐⭐⭐     RadixUI ⭐⭐⭐⭐

TOOLS & PLATFORMS:
AWS ⭐⭐⭐            Docker ⭐⭐⭐⭐       Git/GitHub ⭐⭐⭐⭐⭐
MongoDB ⭐⭐⭐⭐      PostgreSQL ⭐⭐⭐⭐   Firebase ⭐⭐⭐
Ubuntu ⭐⭐⭐⭐⭐    Windows ⭐⭐⭐⭐       Arch Linux ⭐⭐⭐

SPECIALIZATIONS:
• Full Stack Development
• AI/ML Integration
• System Architecture
• DevOps & Deployment
• UI Design & Development

═══════════════════════════════════════════════════════════════`

      case 'hire':
        return `CONTACT & AVAILABILITY
═══════════════════════════════════════════════════════════════

STATUS: 🟢 AVAILABLE FOR WORK
LOCATION: Kerala, India (Remote-friendly)
TIMEZONE: IST (UTC+5:30)

CONTACT METHODS:
  Email: pranavmurali024@gmail.com
  LinkedIn: /in/pranavmurali2004
  GitHub: @marvellousz
  Twitter: @pranavmuralii
  Medium: @marvellous2004
  Letterboxd: /Marvellous_/

AVAILABILITY:
• Full-time opportunities
• Contract work
• Freelance projects
• Open source contributions

PREFERRED PROJECTS:
• Web application development
• AI/ML integration projects
• Developer tooling
• System architecture

RESPONSE TIME: Usually within 24 hours

Let's build something amazing together! 

═══════════════════════════════════════════════════════════════`

      default:
        return `Unknown command: ${command}
Type 'help' for available commands.`
    }
  }

  if (!isVisible || !activeCommand) {
    return (
      <div className="grid grid-cols-12 gap-4 min-h-screen p-4">
        {/* Left Column - Tech Stack */}
        <div className="col-span-3 bg-card/80 glitch-border glitch-hover backdrop-blur-sm">
          <div className="p-6">
            <TechStack />
          </div>
        </div>

        {/* Center Column - Profile & Daily Tools */}
        <div className="col-span-6 bg-background/50 backdrop-blur-sm">
          <div className="p-6 space-y-6">
            <ProfileSection />
            <DailyTools />
          </div>
        </div>

        {/* Right Column - Links & Projects */}
        <div className="col-span-3 bg-card/80 glitch-border glitch-hover backdrop-blur-sm">
          <div className="p-6">
            <LinksAndProjects />
          </div>
        </div>
      </div>
    )
  }

  const handleClose = () => {
    setIsVisible(false)
    onCommandComplete()
  }

  return (
    <div className="min-h-screen p-4">
      <div className="bg-black/90 glitch-border backdrop-blur-sm h-[calc(100vh-2rem)] relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-red-500/80 hover:bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono z-10"
        >
          ×
        </button>
        
        <div className="p-6 h-full">
          <div className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap overflow-y-auto h-full">
            {currentText}
            {showTyping && <span className="animate-pulse">█</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
