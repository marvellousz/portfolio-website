import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  const blogs = allBlogs.slice(0, 2).sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <React.Fragment>      {/* Hero Section with Claude-inspired design */}
      <section className="relative animate-fade-in">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-transparent dark:from-amber-950/20 dark:via-orange-950/10 dark:to-transparent rounded-3xl -z-10" />
          {/* Floating background elements for depth */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 dark:from-amber-800/10 dark:to-orange-800/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-amber-200/20 dark:from-orange-800/10 dark:to-amber-800/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-amber-100/10 to-orange-100/10 dark:from-amber-900/5 dark:to-orange-900/5 rounded-full blur-3xl animate-bounce-gentle" />
        
        {/* Main content container */}
        <div className="relative backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-6 sm:p-8 lg:p-12 transition-all duration-500 hover:bg-white/60 dark:hover:bg-gray-900/60 hover:border-gray-300/70 dark:hover:border-gray-600/70 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-400/5">          {/* Avatar and intro section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative group animate-slide-up">
              <Image
                src="/_static/me.jpg"
                width={120}
                height={120}
                alt="Pranav Murali"
                className="rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl ring-4 ring-white/50 dark:ring-gray-800/50 group-hover:ring-amber-200/50 dark:group-hover:ring-amber-700/50"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            
            <div className="flex-1 animate-slide-up delay-150">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent mb-3 leading-tight">
                Pranav Murali
              </h1>              <div className="flex flex-wrap items-center gap-3 mb-2">
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
                  Web Developer & Tech Enthusiast
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Kerala, India</span>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <span>VIT Vellore</span>
              </div>
            </div>
          </div>          {/* Bio section with elegant typography */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed animate-slide-up delay-300">
            <div className="relative">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Hello! I'm a passionate developer crafting digital experiences and exploring the frontiers of technology.
              </p>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-full opacity-30"></div>
            </div>
            
            <p className="text-base leading-7">
              Currently pursuing a Bachelor of Technology in Computer Science at 
              <span className="font-semibold text-gray-900 dark:text-gray-100 relative">
                {" "}Vellore Institute of Technology
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>, 
              where I'm deepening my understanding of various technological domains and their real-world applications.
            </p>

            <p className="text-base leading-7">
              My vision extends beyond code – I aspire to become an entrepreneur and technology leader, 
              creating <span className="font-semibold text-amber-600 dark:text-amber-400 relative">
                impactful solutions
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 opacity-50"></span>
              </span> that 
              make a meaningful difference in society.
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/30 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden animate-slide-up delay-500">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100/50 to-orange-100/50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-full blur-xl"></div>
              
              <p className="text-base leading-7 text-center text-gray-600 dark:text-gray-400 relative z-10 mb-6">
                <span className="text-2xl text-amber-500 dark:text-amber-400 font-serif">"</span>
                Interested in collaborating? I'd love to connect and explore how we can work together.
                <span className="text-2xl text-amber-500 dark:text-amber-400 font-serif">"</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a 
                  href="mailto:pranavmurali024@gmail.com" 
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  <span>Send me an email</span>
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                  <span className="text-sm">or</span>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>
                
                <span className="text-gray-600 dark:text-gray-400 text-sm">connect on social media</span>
              </div>
            </div>
          </div>

          {/* Resume link with prominent styling */}
          <div className="flex justify-center mt-8 animate-slide-up delay-1000">
            <a 
              href={LINKS.RESUME} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-100 dark:to-gray-200 text-white dark:text-gray-900 font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gray-500/25 dark:hover:shadow-gray-300/25 relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">View Resume</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>            </a>
          </div>        </div>
      </section>

      {/* Latest posts section (commented out but with improved styling when needed) */}
      {/* <section className="mt-16">
        <div className="backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Latest Thoughts</h2>
          <div className="grid gap-6">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} />
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </React.Fragment>
  );
}
