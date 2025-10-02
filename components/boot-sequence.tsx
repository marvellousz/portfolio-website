"use client"

import { useState, useEffect } from 'react'

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const bootSteps = [
    "INITIALIZING SYSTEM...",
    "LOADING KERNEL...",
    "MOUNTING FILESYSTEMS...",
    "STARTING NETWORK SERVICES...",
    "LOADING DRIVERS...",
    "INITIALIZING GRAPHICS...",
    "STARTING USER INTERFACE...",
    "SYSTEM READY",
    "WELCOME TO THE MATRIX"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < bootSteps.length - 1) {
          return prev + 1
        } else {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500)
          }, 2000)
          return prev
        }
      })
    }, 800)

    return () => clearInterval(timer)
  }, [bootSteps.length, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-green-400 font-mono text-lg">
        <div className="mb-4">
          <div className="glitch-text" data-text={bootSteps[currentStep]}>
            {bootSteps[currentStep]}
          </div>
        </div>
        
        {/* Loading indicator */}
        <div className="flex space-x-1">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 ${
                i <= currentStep ? 'bg-green-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        {/* Cursor blink */}
        <div className="inline-block ml-1 animate-pulse">_</div>
      </div>
    </div>
  )
}
