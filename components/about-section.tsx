"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 font-luckiest">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-ephesis">
                I'm a passionate full-stack developer currently pursuing my Bachelor's in Computer Science 
                at VIT Vellore. With experience across multiple companies and startups, I specialize in 
                building scalable web applications and innovative solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-ephesis">
                Currently working as a Software Engineer Intern at LoopLess and Full-Stack Developer at 
                Valley AI, I focus on creating efficient systems and user-friendly applications. I believe 
                in the power of technology to solve real-world problems and improve people's lives.
              </p>
            </div>

            {/* Skills/Tags */}
            <div className="flex flex-wrap gap-3">
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
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200 border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
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
