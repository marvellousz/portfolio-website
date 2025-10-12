import { Navigation } from "@/components/navigation"

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 font-luckiest">
            Life & Stories
          </h1>
          <p className="text-base uppercase tracking-[0.3em] text-gray-400 font-medium">
            COMING SOON
          </p>
        </div>
      </section>

      {/* Development Message */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-xl border border-gray-100 p-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg 
                  className="w-12 h-12 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-luckiest">
              In Development
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-ephesis leading-relaxed mb-8">
              This section is currently under construction. I'm working on sharing my personal stories, 
              experiences, and life lessons that have shaped my journey as a developer and individual.
            </p>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 font-medium mb-2">
                What to expect:
              </p>
              <ul className="text-gray-600 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Personal development stories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Learning experiences and insights
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Career journey and milestones
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Lessons learned from failures and successes
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
