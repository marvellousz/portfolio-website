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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-8" style={{fontFamily: 'var(--font-playfair)'}}>
            Life Philosophies <span className="italic text-5xl md:text-6xl">& more</span>
          </h1>
          <p className="text-base uppercase tracking-[0.3em] text-gray-400 font-medium">
            PRINCIPLES AND THOUGHTS
          </p>
        </div>
      </section>

      {/* Content Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
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
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  {post.status && (
                    <p className="text-sm text-gray-500 font-medium">
                      {post.status}
                    </p>
                  )}
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
