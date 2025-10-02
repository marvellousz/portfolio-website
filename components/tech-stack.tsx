import { Badge } from "@/components/ui/badge"

export function TechStack() {
  const languages = [
    "TypeScript",
    "JavaScript", 
    "Python",
    "Java",
    "C/C++",
    "Go",
    "SQL",
    "R",
    "MATLAB"
  ]

  const frameworks = [
    "Next",
    "React",
    "SvelteKit",
    "Node",
    "Express",
    "FastAPI",
    "Django",
    "Flask",
    "Tailwind",
    "Shadcn",
    "RadixUI"
  ]

  const tools = [
    "AWS",
    "Git",
    "GitHub",
    "MongoDB",
    "Firebase",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Postman"
  ]

  const platforms = [
    "Ubuntu",
    "Windows",
    "Arch Linux",
    "Web"
  ]

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <div className="glitch-text text-4xl mb-4" data-text="{}">{"{}"}</div>
        <div>
          <h1 className="glitch-text text-4xl leading-tight" data-text="TECH STACK">
            TECH
            <br />
            <span className="text-red-500">STACK</span>
          </h1>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="glitch-text text-xs mb-4 tracking-widest" data-text="LANGUAGES:">LANGUAGES:</h2>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((tech) => (
              <div
                key={tech}
                className="glitch-border glitch-hover bg-secondary/50 p-2 glitch-text text-xs hover:bg-primary/50 transition-all duration-300"
                data-text={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="glitch-text text-xs mb-4 tracking-widest" data-text="FRAMEWORKS:">FRAMEWORKS:</h2>
          <div className="grid grid-cols-2 gap-2">
            {frameworks.map((tech) => (
              <div
                key={tech}
                className="glitch-border glitch-hover bg-secondary/50 p-2 glitch-text text-xs hover:bg-primary/50 transition-all duration-300"
                data-text={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="glitch-text text-xs mb-4 tracking-widest" data-text="TOOLS:">TOOLS:</h2>
          <div className="grid grid-cols-2 gap-2">
            {tools.map((tech) => (
              <div
                key={tech}
                className="glitch-border glitch-hover bg-secondary/50 p-2 glitch-text text-xs hover:bg-primary/50 transition-all duration-300"
                data-text={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="glitch-text text-xs mb-4 tracking-widest" data-text="PLATFORMS:">PLATFORMS:</h2>
          <div className="grid grid-cols-2 gap-2">
            {platforms.map((tech) => (
              <div
                key={tech}
                className="glitch-border glitch-hover bg-secondary/50 p-2 glitch-text text-xs hover:bg-primary/50 transition-all duration-300"
                data-text={tech}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
