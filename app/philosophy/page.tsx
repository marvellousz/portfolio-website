import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"

const philosophyPosts = [
  {
    title: "Controlled Chaos Creates",
    image: "/control.jpg",
    excerpt: "The best ideas emerge from the tension between structure and disorder. Embracing calculated chaos fuels innovation."
  },
  {
    title: "Comfort is the Enemy",
    image: "/comfort.jpg", 
    excerpt: "Growth only happens at the edge of discomfort. Staying comfortable is choosing stagnation over evolution."
  },
  {
    title: "Question Everything, Trust Nothing",
    image: "/question.jpg",
    excerpt: "True understanding comes from relentless skepticism. Accept nothing at face value. Dissect, challenge, rebuild."
  },
  {
    title: "Create or Be Created",
    image: "/stonehenge.jpg",
    excerpt: "In a world of algorithms and manipulation, you either shape your reality or become a product of someone else's design."
  },
  {
    title: "Solitude Breeds Clarity",
    image: "/solitude.jpg",
    excerpt: "The noise of constant connection drowns out original thought. Real breakthroughs happen in deliberate isolation."
  },
  {
    title: "Momentum Over Perfection",
    image: "/perfection.jpg",
    excerpt: "Waiting for perfect conditions guarantees nothing gets done. Imperfect action beats perfect inaction every time."
  }
]

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 sm:mb-8" style={{fontFamily: 'var(--font-playfair)'}}>
            Life Philosophies <span className="italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">& more</span>
          </h1>
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-gray-400 font-medium px-4 sm:px-0">
            PRINCIPLES AND THOUGHTS
          </p>
        </div>
      </section>

      {/* Content Cards */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {philosophyPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Post Image */}
                {post.image ? (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-400/30 flex items-center justify-center mb-2">
                          <span className="text-gray-600 text-xl font-bold">
                            {post.title.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">Image Placeholder</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Post Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
