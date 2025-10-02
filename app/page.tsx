"use client"

import { MatrixRain } from "@/components/matrix-rain"
import { BootSequence } from "@/components/boot-sequence"
import { Terminal } from "@/components/terminal"
import { CommandHandler } from "@/components/command-handler"
import { useState } from "react"

export default function Home() {
  const [isBooted, setIsBooted] = useState(false)
  const [activeCommand, setActiveCommand] = useState<string | null>(null)
  const [commandArgs, setCommandArgs] = useState<string[]>([])
  const [commandFlags, setCommandFlags] = useState<Record<string, string>>({})
  const [showTerminal, setShowTerminal] = useState(true)

  const handleBootComplete = () => {
    setIsBooted(true)
  }

  const handleCommand = (command: string, args: string[], flags: Record<string, string>) => {
    setActiveCommand(command)
    setCommandArgs(args)
    setCommandFlags(flags)
  }

  const handleCommandComplete = () => {
    setActiveCommand(null)
    setCommandArgs([])
    setCommandFlags({})
  }

  const toggleTerminal = () => {
    setShowTerminal(!showTerminal)
  }

  return (
    <>
      {!isBooted && <BootSequence onComplete={handleBootComplete} />}
      
      <div className="min-h-screen bg-background text-foreground matrix-bg crt-effect">
        {/* Matrix Rain Background */}
        <MatrixRain />
        
        
        {/* Main Interface */}
        {showTerminal ? (
          <div className="grid grid-cols-12 gap-4 min-h-screen p-4 boot-sequence">
            {/* Terminal Column */}
            <div className="col-span-4">
              <Terminal onCommand={handleCommand} />
            </div>

            {/* GUI Column */}
            <div className="col-span-8">
              <CommandHandler
                activeCommand={activeCommand}
                commandArgs={commandArgs}
                commandFlags={commandFlags}
                onCommandComplete={handleCommandComplete}
              />
            </div>
          </div>
        ) : (
          <CommandHandler
            activeCommand={activeCommand}
            commandArgs={commandArgs}
            commandFlags={commandFlags}
            onCommandComplete={handleCommandComplete}
          />
        )}
        
      </div>
    </>
  )
}
