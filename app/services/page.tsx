import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Complete web applications using modern technologies like Next.js, React, Python, and cloud platforms",
    technologies: ["Next.js", "React", "Node.js", "Python"],
    image: "/war.jpg"
  },
  {
    title: "Backend API Development", 
    description: "Robust and scalable backend services with RESTful APIs, microservices architecture, and database design",
    technologies: ["FastAPI", "Django", "PostgreSQL", "MongoDB"],
    image: "/religious.jpg"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "AWS deployment, CI/CD pipelines, containerization with Docker, and scalable cloud architecture",
    technologies: ["AWS", "Docker", "GitHub Actions", "Azure"],
    image: "/island.jpg"
  },
  {
    title: "Automation & Integration",
    description: "Bot development, Google Workspace integrations (Calendar, Meet, Gmail), custom workflow automation, and third-party API integrations",
    technologies: ["Discord", "Slack", "Telegram", "Python", "Node.js", "Google APIs"],
    image: "/mountains.jpg"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 sm:mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
            For founders & employers
          </h1>
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-gray-500 font-medium px-4 sm:px-0">
            SERVICES I OFFER AS A FREELANCER
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Image */}
                {service.image ? (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/30 flex items-center justify-center mb-2">
                        <span className="text-primary-foreground text-xl font-bold">
                          {service.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">Service Preview</p>
                    </div>
                  </div>
                )}

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{fontFamily: 'var(--font-playfair)'}}>
            Ready to work together?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0">
            Let's discuss your project and how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="https://cal.com/pranavmurali" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 text-sm sm:text-base"
              >
                Book a call
              </Button>
            </Link>
            <Link href="mailto:pranavmurali024@gmail.com">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 text-sm sm:text-base"
              >
                Send email
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
