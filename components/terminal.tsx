"use client"

import { useState, useEffect, useRef } from 'react'

interface Command {
  name: string
  description: string
  execute: (args: string[], flags: Record<string, string>) => void
  aliases?: string[]
}

interface TerminalProps {
  onCommand: (command: string, args: string[], flags: Record<string, string>) => void
}

export function Terminal({ onCommand }: TerminalProps) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const welcomeShownRef = useRef(false)

  const commands: Command[] = [
    {
      name: 'about.me',
      description: 'Display personal information and bio',
      execute: () => onCommand('about.me', [], {}),
      aliases: ['about', 'whoami', 'bio']
    },
    {
      name: 'projects',
      description: 'Show portfolio projects with optional filters',
      execute: (args, flags) => onCommand('projects', args, flags),
      aliases: ['work', 'portfolio']
    },
    {
      name: 'skills',
      description: 'Display technical skills and expertise',
      execute: () => onCommand('skills', [], {}),
      aliases: ['tech', 'stack']
    },
    {
      name: 'hire',
      description: 'Get contact information and availability',
      execute: () => onCommand('hire', [], {}),
      aliases: ['contact', 'reach']
    },
    {
      name: 'clear',
      description: 'Clear the terminal screen',
      execute: () => {
        setHistory([])
        setHistoryIndex(-1)
      }
    },
    {
      name: 'help',
      description: 'Show available commands',
      execute: () => {
        addToHistory('Available commands:')
        commands.forEach(cmd => {
          addToHistory(`  ${cmd.name.padEnd(12)} - ${cmd.description}`)
        })
        addToHistory('')
      }
    },
    {
      name: 'ls',
      description: 'List available commands and options',
      execute: () => {
        addToHistory('Available commands:')
        commands.forEach(cmd => {
          addToHistory(`  ${cmd.name}`)
          if (cmd.aliases) {
            addToHistory(`    aliases: ${cmd.aliases.join(', ')}`)
          }
        })
        addToHistory('')
      }
    },
    {
      name: 'status',
      description: 'Show system status and portfolio info',
      execute: () => {
        addToHistory('PORTFOLIO SYSTEM STATUS')
        addToHistory('═══════════════════════════════════════════════════════════════')
        addToHistory('STATUS: 🟢 ONLINE')
        addToHistory('UPTIME: 24/7')
        addToHistory('LAST UPDATE: Just now')
        addToHistory('VERSION: 3.0.0')
        addToHistory('MODE: Terminal Interface')
        addToHistory('AVAILABILITY: Open for collaboration')
        addToHistory('')
      }
    }
  ]

  const addToHistory = (text: string) => {
    setHistory(prev => [...prev, text])
  }

  const parseCommand = (input: string) => {
    const parts = input.trim().split(/\s+/)
    const command = parts[0]
    const args: string[] = []
    const flags: Record<string, string> = {}

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i]
      if (part.startsWith('--')) {
        const [flag, value] = part.substring(2).split('=')
        flags[flag] = value || 'true'
      } else {
        args.push(part)
      }
    }

    return { command, args, flags }
  }

  const executeCommand = (input: string) => {
    if (!input.trim()) return

    addToHistory(`$ ${input}`)
    
    const { command, args, flags } = parseCommand(input)
    const cmd = commands.find(c => 
      c.name === command || c.aliases?.includes(command)
    )

    if (cmd) {
      cmd.execute(args, flags)
    } else {
      addToHistory(`Command not found: ${command}`)
      addToHistory(`Type 'help' for available commands`)
    }
    
    setHistoryIndex(-1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setHistory(prev => [...prev, input])
      executeCommand(input)
      setInput('')
    }
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    // Welcome message - only run once using ref
    if (!welcomeShownRef.current) {
      const welcomeMessages = [
        'Welcome to Pranav\'s Portfolio Terminal',
        'Type "help" to see available commands',
        'Try: about.me, projects --filter=ai, skills, hire()',
        ''
      ]
      
      welcomeMessages.forEach((msg, index) => {
        setTimeout(() => {
          addToHistory(msg)
        }, index * 500)
      })
      
      welcomeShownRef.current = true
    }
  }, []) // Empty dependency array - only runs once

  return (
    <div className="bg-black/90 glitch-border backdrop-blur-sm h-full flex flex-col">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-600">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-4 glitch-text text-sm text-green-400">portfolio-terminal</span>
      </div>

      {/* Terminal Output */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-sm text-green-400 leading-relaxed"
        style={{ fontFamily: 'Courier New, monospace' }}
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
        
        {/* Cursor */}
        <div className="flex items-center">
          <span className="text-green-400">visitor@portfolio:~$</span>
          <form onSubmit={handleSubmit} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-green-400 outline-none ml-2 flex-1 font-mono"
              placeholder=""
              autoComplete="off"
            />
          </form>
          <span className="text-green-400 animate-pulse">█</span>
        </div>
      </div>
    </div>
  )
}
