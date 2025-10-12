"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
                About Me
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                I'm a passionate full-stack developer currently pursuing my Bachelor's in Computer Science 
                at VIT Vellore. With experience across multiple companies and startups, I specialize in 
                building scalable web applications and innovative solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Currently working as a Software Engineer Intern at LoopLess and Full-Stack Developer at 
                Valley AI, I focus on creating efficient systems and user-friendly applications. I believe 
                in the power of technology to solve real-world problems and improve people's lives.
              </p>
            </div>

            {/* Skills/Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "Full-Stack Development",
                "Next.js & React", 
                "Python & FastAPI",
                "Cloud Technologies",
                "Machine Learning",
                "DevOps & CI/CD"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative order-1 md:order-2 mb-6 md:mb-0">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto md:max-w-none">
              <Image 
                src="/naruto.png" 
                alt="Naruto" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
