"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Social icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full cursor-pointer ${
                  pathname === "/" 
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "bg-transparent hover:bg-gray-100"
                }`}
              >
                <Home className="h-4 w-4 sm:h-5 sm:w-5" size={20} />
              </Button>
            </Link>
            <div className="hidden sm:flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
                onClick={() => window.open('https://github.com/marvellousz', '_blank')}
              >
                <Image 
                  src="/github.png" 
                  alt="GitHub" 
                  width={20} 
                  height={20} 
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/in/pranavmurali2004/', '_blank')}
              >
                <Image 
                  src="/linkedin.png" 
                  alt="LinkedIn" 
                  width={20} 
                  height={20} 
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
                onClick={() => window.open('https://x.com/pranavmuralii', '_blank')}
              >
                <Image 
                  src="/x.png" 
                  alt="X" 
                  width={20} 
                  height={20} 
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
              </Button>
            </div>
          </div>

          {/* Right side - Navigation items */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/resume" 
                className={`px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  pathname === "/resume" 
                    ? "bg-black text-white" 
                    : "text-black hover:text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                View Resumé
              </Link>
              <Link 
                href="/philosophy" 
                className={`px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  pathname === "/philosophy" 
                    ? "bg-black text-white" 
                    : "text-black hover:text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                Life Philosophy
              </Link>
              <Link 
                href="/stories" 
                className="px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium text-black hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                Life & Stories
              </Link>
            </div>

            {/* CTA Button */}
            {pathname === "/services" ? (
              <Link href="https://cal.com/pranavmurali" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-full px-3 sm:px-6 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Book a call</span>
                  <span className="sm:hidden">Call</span>
                </Button>
              </Link>
            ) : (
              <Link href="/services">
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-full px-3 sm:px-6 text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Services I offer</span>
                  <span className="sm:hidden">Services</span>
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-8 w-8 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/resume" 
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  pathname === "/resume" 
                    ? "bg-black text-white" 
                    : "text-black hover:text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Resumé
              </Link>
              <Link 
                href="/philosophy" 
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  pathname === "/philosophy" 
                    ? "bg-black text-white" 
                    : "text-black hover:text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Life Philosophy
              </Link>
              <Link 
                href="/stories" 
                className="px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium text-black hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Life & Stories
              </Link>
              <div className="flex items-center space-x-2 pt-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
                  onClick={() => window.open('https://github.com/marvellousz', '_blank')}
                >
                  <Image 
                    src="/github.png" 
                    alt="GitHub" 
                    width={16} 
                    height={16} 
                    className="h-4 w-4"
                  />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
                  onClick={() => window.open('https://www.linkedin.com/in/pranavmurali2004/', '_blank')}
                >
                  <Image 
                    src="/linkedin.png" 
                    alt="LinkedIn" 
                    width={16} 
                    height={16} 
                    className="h-4 w-4"
                  />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-transparent hover:bg-gray-100 cursor-pointer"
                  onClick={() => window.open('https://x.com/pranavmuralii', '_blank')}
                >
                  <Image 
                    src="/x.png" 
                    alt="X" 
                    width={16} 
                    height={16} 
                    className="h-4 w-4"
                  />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
