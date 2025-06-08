import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="animate-bounceGentle">
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>
      </div>
      
      <div className="max-w-md animate-slideUp [animation-delay:0.2s]">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been moved, deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center rounded-full bg-amber-600 hover:bg-amber-700 px-6 py-3 text-sm font-medium text-white shadow-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200 hover:scale-105"
          >
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-amber-500/50 transition-all duration-200"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent blur-3xl" />
      </div>
    </div>
  );
}
