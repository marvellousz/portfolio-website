"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"

export function ProfileSection() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["webapps", "ai systems", "tools", "libraries"]

  useEffect(() => {
    setMounted(true)
    setCurrentTime(new Date())
    
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const typeSpeed = isDeleting ? 100 : 200
    const pauseTime = 3000

    const timer = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, textIndex, mounted])

  useEffect(() => {
    if (!mounted) return

    const current = texts[textIndex]
    
    if (!isDeleting && currentText === current) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 3000)
      return () => clearTimeout(pauseTimer)
    }
    
    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }
  }, [currentText, isDeleting, textIndex, mounted])

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  return (
    <div className="space-y-6">
      <div className="bg-card/80 glitch-border glitch-hover backdrop-blur-sm vhs-distort">
        <div className="p-6">
          {/* Top Section with Profile Picture and Name */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 glitch-border glitch-hover bg-primary/50 overflow-hidden">
              <img src="/Thorfinn.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="glitch-text text-3xl" data-text="PRANAV.">PRANAV.</h1>
                  <p className="glitch-text text-sm text-red-500" data-text="@MARVELLOUS">@MARVELLOUS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-6">
            <h2 className="glitch-text text-lg mb-4" data-text={`I BUILD ${mounted ? currentText.toUpperCase() : "WEBAPPS"}`}>
              I BUILD <span className="text-primary glitch-hover">{mounted ? currentText.toUpperCase() : "WEBAPPS"}</span>.
            </h2>
            <p className="glitch-text text-sm leading-relaxed" data-text="HELLO, I'M PRANAV! A 21 YEAR OLD DEVELOPER BASED IN KERALA - INDIA.">
              HELLO, I'M PRANAV! A 21 YEAR OLD DEVELOPER BASED IN KERALA - INDIA.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            <div className="glitch-text text-xs text-muted-foreground" data-text='"HOW DO I CENTER A DIV AGAIN??"'>"HOW DO I CENTER A DIV AGAIN??"</div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-primary glitch-border glitch-hover"></div>
                <span className="glitch-text text-xs text-muted-foreground" data-text="AVAILABLE FOR WORK">AVAILABLE FOR WORK</span>
              </div>
              <div className="glitch-text text-xs text-muted-foreground">
                {mounted && currentTime ? formatDateTime(currentTime).toUpperCase() : "LOADING..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
