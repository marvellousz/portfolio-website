import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, Twitter } from "lucide-react"

export function LinksAndProjects() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/marvellousz", label: "GitHub" },
    { icon: Mail, href: "mailto:pranavmurali024@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pranavmurali2004/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/pranavmuralii", label: "Twitter" },
    { icon: Github, href: "https://medium.com/@marvellous2004", label: "Medium" },
    { icon: Mail, href: "https://letterboxd.com/Marvellous_/", label: "Letterboxd" },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="glitch-text text-4xl leading-tight">
          <span className="glitch-text" data-text="LIN">LIN</span>
          <br />
          <span className="text-primary glitch-text" data-text="KS.">KS.</span>
        </h1>

        <div className="grid grid-cols-2 gap-2">
          {socialLinks.map((link, index) => {
            const getBrandLogo = () => {
              if (index === 0) { // GitHub
                return (
                  <img 
                    src="/github.png" 
                    alt="GitHub" 
                    className="w-8 h-8 object-contain"
                  />
                );
              }
              if (index === 1) { // Gmail
                return (
                  <img 
                    src="/gmail.png" 
                    alt="Gmail" 
                    className="w-8 h-8 object-contain"
                  />
                );
              }
              if (index === 2) { // LinkedIn
                return (
                  <img 
                    src="/linkedin.png" 
                    alt="LinkedIn" 
                    className="w-8 h-8 object-contain"
                  />
                );
              }
              if (index === 3) { // Twitter/X
                return (
                  <img 
                    src="/x.png" 
                    alt="X (Twitter)" 
                    className="w-8 h-8 object-contain"
                  />
                );
              }
              if (index === 4) { // Medium
                return (
                  <img 
                    src="/medium.png" 
                    alt="Medium" 
                    className="w-8 h-8 object-contain"
                  />
                );
              }
              if (index === 5) { // Letterboxd
                return (
                  <img 
                    src="/letterboxd.png" 
                    alt="Letterboxd" 
                    className="w-8 h-8 object-contain"
                  />
                );
              }
              return <link.icon className="w-6 h-6 text-muted-foreground" />;
            };

            return (
              <a
                key={index}
                href={link.href}
                className="glitch-border glitch-hover bg-secondary/50 p-3 flex flex-col items-center justify-center hover:bg-primary/50 transition-all duration-300"
              >
                {getBrandLogo()}
                <span className="glitch-text text-xs mt-1" data-text={link.label.toUpperCase()}>{link.label.toUpperCase()}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-primary/80 glitch-border glitch-hover backdrop-blur-sm vhs-distort">
        <div className="p-6">
          <div className="font-mono text-green-400 text-xs leading-relaxed whitespace-pre-wrap">
            <div className="glitch-text text-sm mb-2" data-text=">> EXPERIENCE_LOG:">&gt;&gt; EXPERIENCE_LOG:</div>
            <div className="ml-2 space-y-1">
              <div>    LoopLess (Now)     ▸ SWE Intern</div>
              <div>    Valley AI (Now)    ▸ Full-Stack</div>
              <div>    Hexaware Tech      ▸ Azure/Spring</div>
              <div>    Moon Finance       ▸ Fintech Dev</div>
            </div>
            
            <div className="mt-4"></div>
            
            <div className="glitch-text text-sm mb-2" data-text=">> EXTRA_CURRICULAR:">&gt;&gt; EXTRA_CURRICULAR:</div>
            <div className="ml-2 space-y-1">
              <div>    E-Cell VIT         ▸ 1000+ people</div>
              <div>    Hackathons         ▸ 3+ completed</div>
              <div>    OSS Contributor    ▸ Classroomio</div>
            </div>
            
            <div className="mt-4"></div>
            
            <div className="glitch-text text-sm mb-2" data-text=">> INTERESTS:">&gt;&gt; INTERESTS:</div>
            <div className="ml-2 space-y-1">
              <div>    ✓ Anime & movies</div>
              <div>    ✓ Gaming sessions</div>
              <div>    ✓ Writing blogs</div>
              <div>    ✓ Reading books</div>
              <div>    ✓ X (@marvellousz)</div>
              <div>    ✓ Building at 3 AM</div>
            </div>
            
            <div className="mt-4"></div>
            
            <div className="glitch-text text-xs" data-text="IMPACT: 5000+ req/day | 99.9% uptime">IMPACT: 5000+ req/day | 99.9% uptime</div>
          </div>
        </div>
      </div>
    </div>
  )
}
