"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { GitHubContributions } from "@/components/github-contributions"

export function DailyTools() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [apodImages, setApodImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80",
      title: "Loading...",
      source: "from NASA APOD"
    }
  ])
  const [animeImages, setAnimeImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80",
      title: "Loading...",
      source: "Anime"
    }
  ])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const fetchApodImages = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=GixO2Ft1z5x1auCplX7UETSssTiyUTPYBd4cwFzD')
        const data = await response.json()
        
        setApodImages([{
          url: data.url,
          title: data.title || "NASA APOD",
          source: "from NASA APOD"
        }])
      } catch (error) {
        console.error('Error fetching APOD image:', error)
        // Fallback to a default image
        setApodImages([{
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80",
          title: "NASA APOD",
          source: "from NASA APOD"
        }])
      }
    }

    const fetchAnimeImages = async () => {
      try {
        // Using a free anime API for random anime images
        const response = await fetch('https://api.waifu.pics/sfw/waifu')
        const data = await response.json()
        
        setAnimeImages([{
          url: data.url,
          title: "Anime Character",
          source: "Anime"
        }])
      } catch (error) {
        console.error('Error fetching anime image:', error)
        // Fallback to a default anime image
        setAnimeImages([{
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80",
          title: "Anime Character",
          source: "Anime"
        }])
      }
    }

    fetchApodImages()
    fetchAnimeImages()
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(async () => {
      try {
        // Fetch new APOD image
        const apodResponse = await fetch('https://api.nasa.gov/planetary/apod?api_key=GixO2Ft1z5x1auCplX7UETSssTiyUTPYBd4cwFzD')
        const apodData = await apodResponse.json()
        
        setApodImages([{
          url: apodData.url,
          title: apodData.title || "NASA APOD",
          source: "from NASA APOD"
        }])

        // Fetch new anime image
        const animeResponse = await fetch('https://api.waifu.pics/sfw/waifu')
        const animeData = await animeResponse.json()
        
        setAnimeImages([{
          url: animeData.url,
          title: "Anime Character",
          source: "Anime"
        }])
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [mounted])

  const tools = [
    { 
      name: "Cursor", 
      color: "bg-blue-500",
      icon: (
        <img 
          src="/cursor.png" 
          alt="Cursor" 
          className="w-8 h-8 object-contain"
        />
      )
    },
    { 
      name: "Slack", 
      color: "bg-purple-500",
      icon: (
        <img 
          src="/slack.png" 
          alt="Slack" 
          className="w-8 h-8 object-contain"
        />
      )
    },
    { 
      name: "Postman", 
      color: "bg-green-500",
      icon: (
        <img 
          src="/postman.png" 
          alt="Postman" 
          className="w-8 h-8 object-contain"
        />
      )
    },
    { 
      name: "ChatGPT", 
      color: "bg-gray-500",
      icon: (
        <img 
          src="/chatgpt.png" 
          alt="ChatGPT" 
          className="w-8 h-8 object-contain"
        />
      )
    },
    { 
      name: "Obsidian", 
      color: "bg-green-600",
      icon: (
        <img 
          src="/obsidian.png" 
          alt="Obsidian" 
          className="w-8 h-8 object-contain"
        />
      )
    },
    { 
      name: "Notion", 
      color: "bg-indigo-500",
      icon: (
        <img 
          src="/notion.png" 
          alt="Notion" 
          className="w-8 h-8 object-contain"
        />
      )
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-card/80 glitch-border glitch-hover backdrop-blur-sm vhs-distort">
        <div className="p-6">
          <div className="glitch-text text-4xl mb-6" data-text="DAILY TOOLS">DAILY TOOLS</div>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Left Column - Images */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-32 glitch-border glitch-hover bg-secondary/50 overflow-hidden">
                <img 
                  src={apodImages[0].url} 
                  alt={apodImages[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 glitch-border glitch-hover bg-secondary/50 overflow-hidden">
                <img 
                  src={animeImages[0].url} 
                  alt={animeImages[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Column - Tools Grid */}
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="glitch-border glitch-hover bg-secondary/50 p-2 flex flex-col items-center justify-center transition-all duration-300"
                >
                  {tool.icon}
                  <span className="glitch-text text-xs mt-1" data-text={tool.name}>{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-4">
              <div className="glitch-text text-lg leading-tight">
                <div className="text-2xl glitch-hover" data-text="BREAK">BREAK</div>
                <div className="text-xl glitch-hover" data-text="THINGS">THINGS</div>
                <div className="text-2xl glitch-hover" data-text="FASTER">FASTER</div>
              </div>
              
              {/* Mark Image */}
              <div className="w-full h-16 glitch-border glitch-hover bg-secondary/50 overflow-hidden">
                <img 
                  src="/mark.png" 
                  alt="Mark" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Section */}
              <div className="space-y-2">
                <div className="glitch-text text-sm text-center" data-text="I'M GONNA BE HOKAGE ONE DAY.">
                  "I'M GONNA BE HOKAGE ONE DAY."
                </div>
                <div className="w-full h-16 glitch-border glitch-hover bg-secondary/50 overflow-hidden">
                  <img 
                    src="/naruto.png" 
                    alt="Naruto" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Contributions */}
      <GitHubContributions />
    </div>
  )
}
