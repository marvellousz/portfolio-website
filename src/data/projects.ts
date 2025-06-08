import type { ProjectData, ExperienceData } from "@/types/project";

export const PROJECTS: ProjectData[] = [
  {
    id: "quizme",
    title: "QuizMe",
    tags: ["HTML", "CSS", "JavaScript", "Interactive UI", "Quiz Application", "Frontend"],
    description:
      "Built an interactive quiz web application with multiple categories and difficulty levels. Features user-friendly navigation, diverse quiz topics including Animals, Computer Science, Entertainment, Geography, and Sports with engaging UI/UX design.",
    longDescription: "QuizMe is a comprehensive web-based quiz application designed to provide an engaging and educational experience for users across various knowledge domains. Built with vanilla HTML, CSS, and JavaScript, this project demonstrates clean frontend development practices and interactive user interface design. The application features multiple quiz categories with different difficulty levels, allowing users to test their knowledge in areas ranging from computer science to geography and entertainment.",
    features: [
      "🧠 Multiple quiz categories (Animals, Computer Science, Entertainment, Geography, Sports)",
      "📊 Different difficulty levels for varied challenge",
      "🎨 Interactive and user-friendly interface design",
      "📱 Responsive design for seamless mobile experience",
      "🎯 Clean navigation and intuitive quiz selection",
      "⚡ Fast loading with optimized vanilla JavaScript",
      "🔄 Dynamic quiz content rendering",
      "📋 Multiple choice question format",
      "🏆 Engaging quiz completion feedback",
      "🌐 Simple deployment and accessibility",
      "📝 About us and services information pages",
      "🎮 Interactive quiz participation experience"
    ],
    thumbnail: "/_static/projects/quizme.png",
    repo: "https://github.com/Marvellousz/QuizMe",
    liveUrl: "https://quizme-seven.vercel.app",
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      backend: [],
      services: ["Static Hosting", "Frontend Logic"],
      deployment: ["Vercel", "Static Site"]
    }
  },
  {
    id: "line-following-robot",
    title: "Line Following Robot",
    tags: ["Arduino", "C++", "Robotics", "PID Control", "Sensors", "IoT", "Embedded Systems"],
    description:
      "Built an intelligent line following robot using Arduino with three progressive versions featuring PID control, color detection, and obstacle avoidance. Implements advanced sensor integration including IR sensors, TCS3200 color sensor, and ultrasonic distance sensor for autonomous navigation.",
    longDescription: "This comprehensive robotics project demonstrates the evolution of an intelligent line following robot through three distinct versions, each building upon the previous with enhanced capabilities. Starting with basic line detection and PID control, the project progresses to include color-based speed modulation and ultimately incorporates obstacle detection and avoidance. The robot showcases advanced embedded systems programming with Arduino, featuring real-time sensor data processing, motor control algorithms, and intelligent decision-making capabilities.",
    features: [
      "🤖 Three progressive robot versions with increasing complexity",
      "📡 Advanced IR sensor integration for precise line detection",
      "⚙️ PID control algorithm for smooth and accurate navigation",
      "🎨 TCS3200 color sensor for variable speed control based on surface colors",
      "🚧 Ultrasonic HC-SR04 sensor for real-time obstacle detection and avoidance",
      "🏃 Dynamic speed adjustment: Red (slow), Green (medium), Blue (fast)",
      "🔄 Real-time decision making combining line position and obstacle data",
      "⚡ L298N motor driver integration for precise motor control",
      "🛠️ Configurable PID constants and speed parameters",
      "📊 Multiple sensor fusion for enhanced autonomous navigation",
      "🔧 Modular code architecture for easy customization and upgrades",
      "📐 Optimized sensor positioning and calibration procedures"
    ],
    thumbnail: "/_static/projects/line-following-robot.png",
    repo: "https://github.com/Marvellousz/Line-Following-Robot",
    liveUrl: "",
    techStack: {
      frontend: [],
      backend: ["Arduino IDE", "C++", "Embedded C", "PID Control Algorithms"],
      services: ["IR Sensors", "TCS3200 Color Sensor", "HC-SR04 Ultrasonic Sensor", "L298N Motor Driver"],
      deployment: ["Arduino Uno", "Physical Hardware", "Embedded System"]
    }
  },
  {
    id: "browser-agent",
    title: "Browser Agent",
    tags: ["Python", "Shell", "CLI Tool", "Playwright", "Browser Automation", "Command Line"],
    description:
      "Built a powerful command-line tool for controlling web browsers from the terminal. Features multi-browser support, web search integration, automatic protocol handling, and browser automation with a simple installation script for seamless setup.",
    longDescription: "Browser Agent is a sophisticated command-line utility designed to bridge the gap between terminal workflows and web browsing. Built with Python and Shell scripting, this tool empowers users to control multiple browsers directly from their terminal, enabling efficient web navigation, search operations, and browser automation. The application supports a wide range of popular browsers and provides intelligent protocol handling to streamline the browsing experience for power users and developers.",
    features: [
      "🌐 Multi-browser support (Firefox, Chrome, Chromium, Brave, Opera, Vivaldi, LibreWolf, Zen)",
      "🔗 Smart website opening with automatic protocol handling",
      "🔍 Direct Google search integration from terminal",
      "📺 YouTube video search from command line",
      "⚙️ Default browser configuration and memory",
      "🕵️ Private browsing mode support",
      "📦 Automated installation with dependency management",
      "🔧 Browser detection and configuration setup",
      "💻 Cross-platform compatibility with Linux focus",
      "⚡ Fast command execution with minimal overhead",
      "📋 Browser listing and management capabilities",
      "🛠️ Extensible architecture for additional features"
    ],
    thumbnail: "/_static/projects/browser-agent.png",
    repo: "https://github.com/Marvellousz/Browser-Agent",
    liveUrl: "",
    techStack: {
      frontend: [],
      backend: ["Python 3.8+", "Shell Scripting", "Playwright", "Command Line Interface"],
      services: ["Browser APIs", "Google Search", "YouTube Search"],
      deployment: ["Linux Systems", "Terminal Environment"]
    }
  },
  {
    id: "schedulo",
    title: "Schedulo",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Google APIs", "NextAuth.js", "shadcn/ui"],
    description:
      "Built a modern web application that streamlines meeting scheduling and email sending in one unified workflow. Features Google Meet integration, interactive calendar selection, secure authentication, and automatic calendar invitations with timezone support.",
    longDescription: "Schedulo is a comprehensive productivity application that revolutionizes the way professionals handle meeting scheduling and email communication. Built with cutting-edge technologies including Next.js 15 and React 19, this application provides a seamless workflow that combines email composition with intelligent meeting scheduling. The platform integrates deeply with Google's ecosystem, automatically generating Google Meet links, syncing with Google Calendar, and sending calendar invitations to all participants.",
    features: [
      "📧 Unified email and meeting scheduling workflow",
      "🎥 Automatic Google Meet link generation and integration",
      "📅 Interactive calendar with month navigation for date selection",
      "🔐 Secure Google OAuth authentication with NextAuth v5",
      "🌙 Modern UI with dark mode support and responsive design",
      "🌍 Multi-timezone support for global meeting coordination",
      "⏰ Customizable meeting duration and time slot selection",
      "📋 Automatic calendar invitation generation and distribution",
      "📝 Email CC support for including additional recipients",
      "🔄 Real-time calendar synchronization with Google Calendar",
      "⚡ Built with Turbopack for enhanced development speed",
      "🎨 Clean interface using Tailwind CSS v4 and shadcn/ui components"
    ],
    thumbnail: "/_static/projects/schedulo.png",
    repo: "https://github.com/Marvellousz/Schedulo",
    liveUrl: "https://schedulo.marvlock.dev",
    techStack: {
      frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "shadcn/ui"],
      backend: ["Next.js API Routes", "NextAuth.js v5", "Nodemailer", "Google APIs"],
      services: ["Google Calendar API", "Gmail API", "Google Meet", "Google OAuth"],
      deployment: ["Vercel", "Turbopack"]
    }
  },
  {
    id: "ahoybot",
    title: "AhoyBot",
    tags: ["React", "Node.js", "JavaScript", "CSS", "Gemini AI", "Multi-Session Chat"],
    description:
      "Built a pirate-themed AI chat web application with React and Node.js, featuring multi-session chat capabilities, persistent browser-based history, and a modern dark UI with compact message bubbles for an immersive messaging experience.",
    longDescription: "AhoyBot is a fun and innovative pirate-themed AI chat application that brings a unique twist to conversational AI. Built with React for the frontend and Node.js for the backend, this application provides users with an engaging chat experience that combines modern functionality with a playful pirate aesthetic. The app features persistent chat history stored locally in the browser, multi-session management, and integration with AI services like Gemini for intelligent responses.",
    features: [
      "🏴‍☠️ Pirate-themed UI for an immersive chat experience",
      "💬 Multi-session chat with create, switch, and delete functionality",
      "💾 Persistent browser-based history that restores after reload",
      "🌙 Modern dark mode with clean, compact design",
      "⚡ Fast and local - no backend required for chat history",
      "🤖 AI-powered responses via Gemini/OpenAI integration",
      "📱 Responsive design optimized for all devices",
      "🎨 Compact, right-aligned message bubbles like modern messaging apps",
      "🔄 Real-time chat updates and smooth user interactions",
      "🛡️ Secure API key management and environment configuration",
      "📊 Session management with chat thread organization",
      "⚙️ Easy deployment and setup process"
    ],
    thumbnail: "/_static/projects/ahoybot.png",
    repo: "https://github.com/Marvellousz/AhoyBot",
    liveUrl: "https://ahoy-bot.vercel.app",
    techStack: {
      frontend: ["React", "JavaScript", "CSS", "HTML"],
      backend: ["Node.js", "Express", "Gemini API"],
      services: ["Gemini AI", "Local Storage", "Environment Variables"],
      deployment: ["Vercel", "npm"]
    }
  },
  {
    id: "autohub",
    title: "AutoHub",
    tags: ["SvelteKit", "TypeScript", "MongoDB", "JWT", "Tailwind", "Python", "Automation"],
    description:
      "Built a comprehensive SvelteKit-based platform for discovering, sharing, and managing Python automation scripts. Features secure JWT authentication, user profiles, script comments system, and a modern responsive UI for seamless automation script collaboration.",
    longDescription: "AutoHub is a modern web platform designed to revolutionize how developers discover, share, and collaborate on Python automation scripts. Built with SvelteKit and TypeScript, the platform provides a comprehensive ecosystem where developers can upload their automation scripts, discover solutions created by others, and engage with the community through comments and feedback. The platform emphasizes user experience with a clean, intuitive interface and robust backend architecture.",
    features: [
      "🐍 Python automation script repository and discovery",
      "🔐 Secure JWT-based authentication system",
      "👤 Comprehensive user profiles and script management",
      "💬 Interactive comments system for script collaboration",
      "🔍 Advanced script search and filtering capabilities",
      "📱 Fully responsive design with modern UI/UX",
      "⚡ Fast and efficient SvelteKit-powered frontend",
      "🗄️ MongoDB backend for scalable data storage",
      "📊 Script analytics and usage tracking",
      "🏷️ Tag-based categorization system",
      "⭐ Script rating and favoriting features",
      "📁 Script version control and updates"
    ],
    thumbnail: "/_static/projects/autohub.png",
    repo: "https://github.com/Marvellousz/AutoHub",
    liveUrl: "https://autohub-demo.vercel.app",
    techStack: {
      frontend: ["SvelteKit", "TypeScript", "Tailwind CSS", "Svelte"],
      backend: ["SvelteKit API Routes", "MongoDB", "JWT Authentication"],
      services: ["MongoDB Atlas", "Vercel Analytics"],
      deployment: ["Vercel", "MongoDB Cloud"]
    }
  },
  {
    id: "casecobra",
    title: "CaseCobra",
    tags: ["Next.js", "Postgres", "Typescript", "Tailwind", "Stripe", "UploadThing", "Resend"],
    description:
      "Developed a full-fledged e-commerce platform using Next.js 14, featuring a modern UI with shadcn-ui and a custom phone case configurator. Implemented secure authentication with Kinde and built a secret admin dashboard for order management, enhancing business operations.",
    longDescription: "CaseCobra is a comprehensive e-commerce platform that revolutionizes the custom phone case industry. Built with cutting-edge technologies including Next.js 14 and TypeScript, this platform offers users an intuitive and seamless experience for creating personalized phone cases. The application features a sophisticated drag-and-drop configurator that allows customers to upload their own images and create unique designs in real-time.",
    features: [
      "🎨 Interactive phone case configurator with real-time preview",
      "💳 Secure payment processing with Stripe integration",
      "📁 File upload and management with UploadThing",
      "🔐 Authentication and user management with Kinde",
      "📧 Automated email notifications with Resend",
      "🛡️ Admin dashboard for order and inventory management",
      "📱 Responsive design optimized for all devices",
      "⚡ Server-side rendering for optimal performance"
    ],
    thumbnail: "/_static/projects/casecobra.png",
    repo: "https://github.com/Marvellousz/Case-Cobra",
    liveUrl: "https://casecobra-demo.vercel.app",
    techStack: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      backend: ["Next.js API Routes", "PostgreSQL", "Prisma ORM"],
      services: ["Stripe", "UploadThing", "Resend", "Kinde Auth"],
      deployment: ["Vercel", "Railway"]
    }
  },
  {
    id: "arkhive-drive",
    title: "Arkhive Drive",
    tags: ["Next.js", "Typescript", "Tailwind", "Drizzle ORM with SingleStore", "Clerk", "PostHog"],
    description:
      "Developed a modern full-stack web application using the T3 Stack, featuring Next.js 14, TypeScript, and Drizzle ORM for scalable and efficient development. Integrated secure authentication with Clerk and implemented PostHog analytics for real-time event tracking and user insights.",
    longDescription: "Arkhive Drive is a modern cloud storage solution built with the T3 Stack, designed to provide users with a secure, fast, and intuitive file management experience. The platform leverages cutting-edge technologies to deliver enterprise-grade performance while maintaining a user-friendly interface that rivals industry leaders like Google Drive and Dropbox.",
    features: [
      "☁️ Secure cloud file storage and management",
      "📊 Real-time analytics and user insights with PostHog",
      "🔐 Enterprise-grade authentication with Clerk",
      "⚡ High-performance database operations with SingleStore",
      "📱 Responsive design for seamless mobile experience",
      "🔍 Advanced file search and filtering capabilities",
      "👥 File sharing and collaboration features",
      "📈 Usage analytics and storage monitoring"
    ],
    thumbnail: "/_static/projects/arkhive.png",
    repo: "https://github.com/Marvellousz/Arkhive-Drive",
    liveUrl: "https://arkhive-drive.vercel.app",
    techStack: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "tRPC"],
      backend: ["tRPC", "Drizzle ORM", "SingleStore"],
      services: ["Clerk Auth", "PostHog Analytics", "Uploadthing"],
      deployment: ["Vercel", "SingleStore Cloud"]
    }
  },
  {
    id: "nullbin",
    title: "NullBin",
    tags: ["Next.js", "TypeScript", "MongoDB", "Web Crypto API", "Tailwind", "Shiki", "Client-side Encryption"],
    description:
      "Built a privacy-first, client-side encrypted pastebin alternative with automatic expiry and syntax highlighting. Features AES-256-GCM encryption where content is encrypted in the browser before transmission, ensuring zero-knowledge architecture where the server never sees plain text data.",
    longDescription: "NullBin is a modern, privacy-focused pastebin alternative that prioritizes user security and data privacy. Unlike traditional pastebins, NullBin employs client-side encryption using AES-256-GCM, ensuring that all content is encrypted in the user's browser before being transmitted to the server. The decryption keys are embedded in URL hash fragments, which are never sent to the server, creating a true zero-knowledge architecture.",
    features: [
      "🔐 Client-side AES-256-GCM encryption for complete privacy",
      "🔗 Hash-based key sharing (keys never sent to server)",
      "🔒 Optional password protection for additional security",
      "⏰ Automatic expiry with configurable time periods",
      "🎨 Syntax highlighting for 40+ programming languages",
      "🌙 Clean, modern UI with dark/light theme toggle",
      "📱 Fully responsive design for all devices",
      "🚀 Self-hostable with MongoDB backend",
      "📊 View count tracking and paste analytics",
      "💾 Download paste content as files",
      "🔍 Real-time paste search and viewing"
    ],
    thumbnail: "/_static/projects/nullbin.png",
    repo: "https://github.com/Marvellousz/NullBin",
    liveUrl: "https://nullbin.vercel.app",
    techStack: {
      frontend: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shiki", "Web Crypto API"],
      backend: ["Next.js API Routes", "MongoDB", "TTL Indexes", "AES-256-GCM"],
      services: ["MongoDB Atlas", "Vercel Analytics"],
      deployment: ["Vercel", "MongoDB Cloud"]
    }
  },
  {
    id: "hullbin",
    title: "HullBin",
    tags: ["Next.js", "TypeScript", "MongoDB", "Web Crypto API", "Tailwind", "Shiki", "Client-side Encryption"],
    description:
      "Built a privacy-first, client-side encrypted pastebin alternative with automatic expiry and syntax highlighting. Features AES-256-GCM encryption where content is encrypted in the browser before transmission, ensuring zero-knowledge architecture where the server never sees plain text data.",
    longDescription: "NullBin is a modern, privacy-focused pastebin alternative that prioritizes user security and data privacy. Unlike traditional pastebins, NullBin employs client-side encryption using AES-256-GCM, ensuring that all content is encrypted in the user's browser before being transmitted to the server. The decryption keys are embedded in URL hash fragments, which are never sent to the server, creating a true zero-knowledge architecture.",
    features: [
      "🔐 Client-side AES-256-GCM encryption for complete privacy",
      "🔗 Hash-based key sharing (keys never sent to server)",
      "🔒 Optional password protection for additional security",
      "⏰ Automatic expiry with configurable time periods",
      "🎨 Syntax highlighting for 40+ programming languages",
      "🌙 Clean, modern UI with dark/light theme toggle",
      "📱 Fully responsive design for all devices",
      "🚀 Self-hostable with MongoDB backend",
      "📊 View count tracking and paste analytics",
      "💾 Download paste content as files",
      "🔍 Real-time paste search and viewing"
    ],
    thumbnail: "/_static/projects/nullbin.png",
    repo: "https://github.com/Marvellousz/NullBin",
    liveUrl: "https://nullbin.vercel.app",
    techStack: {
      frontend: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shiki", "Web Crypto API"],
      backend: ["Next.js API Routes", "MongoDB", "TTL Indexes", "AES-256-GCM"],
      services: ["MongoDB Atlas", "Vercel Analytics"],
      deployment: ["Vercel", "MongoDB Cloud"]
    }
  }
];

export const EXPERIENCE: ExperienceData[] = [
  {
    title: "Summer Intern at Hexaware Technologies",
    duration: "May 2025 – Present",
    location: "Chennai, Tamil Nadu",
    description:
      "Developed and maintained Java-based microservices using Spring Boot, contributing to critical backend features for scalable enterprise systems. Built and integrated RESTful APIs to enable seamless communication between services, improving performance and modularity across the platform. Participated in code reviews and debugging sessions with senior developers, gaining practical experience in clean architecture, unit testing, and efficient troubleshooting.",
  },
  {
    title: "Full-Stack Developer at Valley AI",
    duration: "March 2025 – Present",
    location: "Remote",
    description:
      "Engineered and maintained interactive dashboards and scalable backend systems using Next.js, enhancing user experience and data visualization capabilities. Collaborated with cross-functional teams to design and implement full-stack features for AI-driven analytics platforms, contributing to the company's mission of transforming elderly care through technology. Optimized application performance and maintained code quality through testing, code reviews, and continuous integration/continuous deployment (CI/CD) practices.",
  },
  {
    title: "Full-Stack Developer at Moon Finance",
    duration: "April 2024 – August 2024",
    location: "Vellore, Tamil Nadu",
    description:
      "Developed, deployed, and maintained responsive and interactive web applications using React.js, Next.js, Node.js, and Express. Ensured mobile-first design and consistent performance across screen sizes. Enhanced the platform's usability and performance, driving strong user adoption through user-friendly UI, smooth navigation, and a fast, reliable backend.",
  },
  {
    title: "Technical Executive at Entrepreneurship Cell VIT",
    duration: "Nov 2023 – July 2024",
    location: "Vellore, Tamil Nadu",
    description:
      "Collaborated with the web development team to support various events organized by the club, playing a key role in creating and maintaining event-related digital platforms. Coordinated with team members to ensure timely delivery of project milestones, enhancing the overall success of the events. Designed and developed dynamic, responsive user interfaces tailored to the specific needs of each event using modern web technologies such as Next.js and Tailwind CSS.",
  },
];
