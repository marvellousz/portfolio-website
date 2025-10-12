"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-40 h-32 mx-auto rounded-[50%] overflow-hidden border-4 border-white shadow-2xl">
            <Image 
              src="/6.jpg" 
              alt="Pranav Murali" 
              width={160} 
              height={128} 
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-light" style={{fontFamily: 'var(--font-playfair)'}}>
            PRANAV HERE,
          </p>
        </div>

        {/* Job Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-tight">
            Software Engineer
          </h1>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-ephesis">
            Full-stack developer with experience in Next.js, React, Python, and cloud technologies.
            Currently working on innovative projects at LoopLess and Valley AI.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
              });
            }}
            className="rounded-full w-12 h-12 border-primary/50 hover:border-black hover:bg-black hover:text-white transition-all duration-300 animate-pulse-glow cursor-pointer"
          >
            <ChevronDown className="h-5 w-5 text-primary hover:text-white transition-colors duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
