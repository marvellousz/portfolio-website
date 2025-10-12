"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Social icons */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-10 w-10 rounded-full cursor-pointer ${
                  pathname === "/" 
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "bg-transparent hover:bg-gray-100"
                }`}
              >
                <Home className="h-5 w-5" size={20} />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
              onClick={() => window.open('https://github.com/marvellousz', '_blank')}
            >
              <Image 
                src="/github.png" 
                alt="GitHub" 
                width={20} 
                height={20} 
                className="h-5 w-5"
              />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/pranavmurali2004/', '_blank')}
            >
              <Image 
                src="/linkedin.png" 
                alt="LinkedIn" 
                width={20} 
                height={20} 
                className="h-5 w-5"
              />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
              onClick={() => window.open('https://x.com/pranavmuralii', '_blank')}
            >
              <Image 
                src="/x.png" 
                alt="X" 
                width={20} 
                height={20} 
                className="h-5 w-5"
              />
            </Button>
          </div>

          {/* Right side - Navigation items */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/resume" 
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                pathname === "/resume" 
                  ? "bg-black text-white" 
                  : "text-black hover:text-gray-600 hover:bg-gray-100"
              } cursor-pointer`}
            >
              View Resumé
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link 
                href="/philosophy" 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === "/philosophy" 
                    ? "bg-black text-white" 
                    : "text-black hover:text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                Life Philosophy
              </Link>
              <Link 
                href="/stories" 
                className="text-black hover:text-gray-600 cursor-pointer"
              >
                Life & Stories
              </Link>
            </div>
            {pathname === "/services" ? (
              <Link href="https://cal.com/pranavmurali" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-full px-6"
                >
                  Book a call
                </Button>
              </Link>
            ) : (
              <Link href="/services">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-full px-6"
                >
                  Services I offer
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
