import type { ProjectData, ExperienceData } from "@/types/project";

export const PROJECTS: ProjectData[] = [
  {
    title: "Memora",
    tags: ["FastAPI", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS", "all-MiniLM-L6-v2", "FAISS", "PyMuPDF", "Docker"],
    description: "A full-stack application for building a personal knowledge base with semantic search and question answering capabilities using completely free and open-source AI tools. No OpenAI or paid APIs required!",
    repo: "https://github.com/Marvellousz/Memora",
  },
  {
    title: "NullBin",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Web Crypto API", "Shiki"],
    description: "Built a privacy-first, client-side encrypted pastebin alternative with automatic expiry and syntax highlighting. Features AES-256-GCM encryption where content is encrypted in the browser before transmission, ensuring zero-knowledge architecture.",
    repo: "https://github.com/Marvellousz/NullBin",
  },
  {
    title: "Schedulo",
    tags: ["Next.js", "React.JS", "TypeScript", "Tailwind CSS", "Google APIs", "NextAuth.js"],
    description: "Built a modern web application that streamlines meeting scheduling and email sending in one unified workflow. Features Google Meet integration, interactive calendar selection, secure authentication, and automatic calendar invitations with timezone support.",
    repo: "https://github.com/Marvellousz/Schedulo",
  },
  {
    title: "AutoHub",
    tags: ["SvelteKit", "Tailwind CSS", "Font Awesome", "TypeScript", "JWT"],
    description: "AutoHub is a modern web platform built with SvelteKit that enables developers to discover, share, and collaborate on automation scripts. With a sleek, responsive design and powerful features, AutoHub makes it easy to find and contribute to the automation community.",
    repo: "https://github.com/Marvellousz/AutoHub",
  },
  {
    title: "AhoyBot",
    tags: ["React.js", "Node.js", "JavaScript", "CSS", "Gemini API"],
    description: "AhoyBot is a pirate-themed, multi-session AI chat web app built with React and Node.js. It features persistent chat history, a modern dark UI, and compact, right-aligned chat bubbles-just like your favorite messaging apps!",
    repo: "https://github.com/Marvellousz/AhoyBot",
  },
  {
    title: "Arkhive Drive",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Drizzle ORM", "SingleStore", "Clerk", "PostHog Analytics"],
    description: "Developed a modern full-stack web application using the T3 Stack, featuring Next.js 14, TypeScript, and Drizzle ORM for scalable and efficient development. Integrated secure authentication with Clerk and implemented PostHog analytics for real-time insights.",
    repo: "https://github.com/Marvellousz/Arkhive-Drive",
  },
  {
    title: "CaseCobra",
    tags: ["Next.js", "TypeScript", "Postgres", "Stripe API", "Tailwind CSS", "Kinde Auth", "UploadThing"],
    description: "A Modern Fullstack E-Commerce Shop for Custom Phone Cases.",
    repo: "https://github.com/Marvellousz/Case-Cobra",
  },
  {
    title: "Skill-Forge",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Shadcn UI", "Framer Motion", "React Hook Form", "Zod", "Stripe API", "AWS"],
    description: "A scalable, enterprise-grade Learning Management System (LMS) built with Next.js, Node.js, and AWS. This project demonstrates a modern full-stack architecture, robust authentication, seamless payment integration, and cloud deployment.",
    repo: "https://github.com/Marvellousz/Skill-Forge",
  },
  {
    title: "QuizMe",
    tags: ["HTML", "CSS", "JavaScript", "Interactive UI", "Quiz Application"],
    description: "Built an interactive quiz web application with multiple categories and difficulty levels. Features user-friendly navigation, diverse quiz topics including Animals, Computer Science, Entertainment, Geography, and Sports with engaging UI/UX design.",
    repo: "https://github.com/Marvellousz/QuizMe",
  },
  {
    title: "Line Following Robot",
    tags: ["Arduino", "C++", "Robotics", "PID Control", "Sensors", "IoT"],
    description: "Built an intelligent line following robot using Arduino with three progressive versions featuring PID control, color detection, and obstacle avoidance. Implements advanced sensor integration including IR sensors, TCS3200 color sensor, and ultrasonic distance sensor.",
    repo: "https://github.com/Marvellousz/Line-Following-Robot",
  },
];

export const EXPERIENCE: ExperienceData[] = [
  {
    title: "Valley AI (Harvard-MIT Incubated) | Full-Stack Developer",
    duration: "Mar 2025 - Present",
    location: "Remote",
    description:
      "Built dynamic and interactive dashboards using Next.js and integrated REST APIs via FastAPI backend, significantly improving user responsiveness and reducing data load times by 35% through efficient state management and API caching strategies. Architected and deployed AI-powered eldercare analytics on AWS using EC2 for compute, S3 for media storage, and DocumentDB for data persistence, handling 5000+ daily requests with CloudWatch monitoring and SNS/SES alerts for real-time notifications. Implemented secure authentication using AWS Cognito and optimized backend performance with ECS Fargate containerization, achieving 40% faster response times while maintaining 99.9% uptime through auto-scaling and load balancing.",
  },
  {
    title: "Hexaware Technologies | Software Engineering Intern",
    duration: "May 2025 - June 2025",
    location: "Chennai, TN",
    description:
      "Developed 3+ scalable Spring Boot microservices for enterprise applications, improving backend reusability by 20% and enhancing system modularity. Deployed services on Microsoft Azure with 99.9% uptime and streamlined CI/CD pipelines for production stability and automated deployment processes. Refactored legacy logic and implemented RESTful endpoints with comprehensive documentation, reducing code redundancy by 30% and improving maintainability. Conducted unit testing with JUnit and integrated JaCoCo for coverage analytics, reaching 85%+ code coverage and ensuring robust quality assurance.",
  },
  {
    title: "Moon Finance (VIT-IIM Incubated) | Full-Stack Developer",
    duration: "Apr 2024 - Aug 2024",
    location: "Vellore, TN",
    description:
      "Developed and maintained a responsive fintech platform with Next.js and Express, delivering 10+ core features including real-time transactions and user management. Improved mobile UX and performance through responsive design optimization, increasing average session time by 25% and reducing bounce rate significantly.",
  },
  {
    title: "Technical Executive at Entrepreneurship Cell VIT",
    duration: "Nov 2023 – July 2024",
    location: "Vellore, Tamil Nadu",
    description:
      "Collaborated with the web development team to support various events organized by the club, playing a key role in creating and maintaining event-related digital platforms. Coordinated with team members to ensure timely delivery of project milestones, enhancing the overall success of the events. Designed and developed dynamic, responsive user interfaces tailored to the specific needs of each event using modern web technologies such as Next.js and Tailwind CSS.",
  },
];
