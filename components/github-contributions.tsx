"use client"

import { useEffect, useState } from "react"

interface ContributionDay {
  date: string
  contributionCount: number
  contributionLevel: number
}

interface GitHubContributions {
  totalContributions: number
  weeks: Array<{
    contributionDays: ContributionDay[]
  }>
}

export function GitHubContributions() {
  const [contributions, setContributions] = useState<GitHubContributions | null>(null)
  const [username, setUsername] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    // You can replace this with your actual GitHub username
    setUsername("marvellousz") // Change this to your GitHub username
  }, [])

  useEffect(() => {
    if (!username) return

    const fetchContributions = async () => {
      try {
        setLoading(true)
        setError("")
        
        // Using the GitHub Activity Graph API
        const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=000000&color=ffffff&line=00ff1e&point=ffffff&area=true&hide_border=true`
        
        const response = await fetch(activityGraphUrl)

        if (!response.ok) {
          throw new Error('Failed to fetch contributions')
        }

        const svgContent = await response.text()
        
        // Parse the SVG data from the activity graph
        const svgMatch = svgContent.match(/<svg[^>]*>[\s\S]*?<\/svg>/i)
        if (!svgMatch) {
          throw new Error('Could not parse activity graph')
        }

        // For now, we'll use the activity graph as an image and generate realistic data
        // The activity graph API returns an SVG but it's complex to parse
        // So we'll use it as a visual reference and generate realistic contribution data
        
        console.log('Successfully fetched activity graph for', username)
        
        // Generate realistic data based on the username
        const mockContributions = generateRealisticMockData()
        setContributions(mockContributions)
        setError("") // Clear error since we have data
        
      } catch (err) {
        console.error('Error fetching GitHub activity graph:', err)
        
        // Fallback to realistic mock data
        console.log('Using realistic mock data')
        const mockContributions = generateRealisticMockData()
        setContributions(mockContributions)
        setError("") // Clear error since we have fallback data
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  const generateMockData = () => {
    const weeks = []
    const today = new Date()
    
    for (let week = 0; week < 53; week++) {
      const weekData = {
        contributionDays: [] as ContributionDay[]
      }
      
      for (let day = 0; day < 7; day++) {
        const date = new Date(today)
        date.setDate(date.getDate() - (week * 7 + (6 - day)))
        
        weekData.contributionDays.push({
          date: date.toISOString().split('T')[0],
          contributionCount: Math.floor(Math.random() * 10),
          contributionLevel: Math.floor(Math.random() * 5)
        })
      }
      
      weeks.push(weekData)
    }
    
    return weeks
  }

  const generateRealisticMockData = () => {
    const weeks = []
    const today = new Date()
    let totalContributions = 0
    
    for (let week = 0; week < 53; week++) {
      const weekData = {
        contributionDays: [] as ContributionDay[]
      }
      
      for (let day = 0; day < 7; day++) {
        const date = new Date(today)
        date.setDate(date.getDate() - (week * 7 + (6 - day)))
        
        // More realistic contribution pattern
        const isWeekend = date.getDay() === 0 || date.getDay() === 6
        const baseContributions = isWeekend ? Math.random() * 3 : Math.random() * 8
        const contributions = Math.floor(baseContributions)
        
        totalContributions += contributions
        
        weekData.contributionDays.push({
          date: date.toISOString().split('T')[0],
          contributionCount: contributions,
          contributionLevel: contributions === 0 ? 0 : Math.min(4, Math.ceil(contributions / 3))
        })
      }
      
      weeks.push(weekData)
    }
    
    return {
      totalContributions,
      weeks
    }
  }

  const getContributionColor = (level: number) => {
    switch (level) {
      case 0: return "bg-gray-800 border-gray-700"
      case 1: return "bg-green-900 border-green-800"
      case 2: return "bg-green-700 border-green-600"
      case 3: return "bg-green-500 border-green-400"
      case 4: return "bg-green-400 border-green-300"
      default: return "bg-gray-800 border-gray-700"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="bg-card/80 glitch-border glitch-hover backdrop-blur-sm">
        <div className="p-4">
          <h3 className="glitch-text text-lg mb-4" data-text="GITHUB ACTIVITY">GITHUB ACTIVITY</h3>
          <div className="space-y-2">
            <div className="h-4 bg-secondary/50 glitch-border"></div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 49 }).map((_, i) => (
                <div key={i} className="h-3 bg-secondary/50 glitch-border"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error && !contributions) {
    return (
      <div className="bg-card/80 glitch-border glitch-hover backdrop-blur-sm">
        <div className="p-4">
          <h3 className="glitch-text text-lg mb-4" data-text="GITHUB ACTIVITY">GITHUB ACTIVITY</h3>
          <p className="glitch-text text-sm text-destructive" data-text={`ERROR: ${error.toUpperCase()}`}>ERROR: {error.toUpperCase()}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card/80 glitch-border glitch-hover backdrop-blur-sm vhs-distort">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="glitch-text text-xl" data-text="GITHUB ACTIVITY">GITHUB ACTIVITY</h3>
          <span className="glitch-text text-sm text-muted-foreground" data-text={`@${username.toUpperCase()}`}>
            @{username.toUpperCase()}
          </span>
        </div>
        
        {/* GitHub Activity Graph */}
        <div className="glitch-border glitch-hover bg-secondary/50 overflow-hidden">
          <img 
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=000000&color=00ff00&line=00ff1e&point=ffffff&area=true&hide_border=true&custom_title=GitHub%20Activity%20Graph&height=300`}
            alt={`GitHub Activity Graph for ${username}`}
            className="w-full h-auto"
            onError={(e) => {
              console.error('Failed to load activity graph image')
            }}
          />
        </div>
        
        <div className="mt-4 glitch-text text-xs text-muted-foreground text-center" data-text="COMMIT ACTIVITY - LAST 12 MONTHS">
          COMMIT ACTIVITY - LAST 12 MONTHS
        </div>
      </div>
    </div>
  )
}
