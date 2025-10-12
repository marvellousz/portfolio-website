"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-12 sm:space-y-16">
          {/* Top Section - Call to Action */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{fontFamily: 'var(--font-playfair)'}}>
              Let's have a word?
            </h2>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className={`bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 group cursor-pointer transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Bottom Section - Contact Info & Social Links */}
          <div className="space-y-3">
            {/* Name */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-lg sm:text-xl font-medium text-white">Pranav Murali</h3>
            </div>

            {/* Email */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-base sm:text-lg text-gray-300">pranavmurali024@gmail.com</p>
            </div>

            {/* Social Links */}
            <div className={`flex flex-wrap gap-6 sm:gap-8 pt-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="https://github.com/marvellousz" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="underline decoration-1 underline-offset-4 text-white">
                  GitHub
                </span>
              </a>

              <a 
                href="https://www.linkedin.com/in/pranavmurali2004/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="underline decoration-1 underline-offset-4 text-white">
                  LinkedIn
                </span>
              </a>

              <a 
                href="https://x.com/pranavmuralii" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="underline decoration-1 underline-offset-4 text-white">
                  X
                </span>
              </a>

              <a 
                href="https://medium.com/@marvellousz" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="underline decoration-1 underline-offset-4 text-white">
                  Medium
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
