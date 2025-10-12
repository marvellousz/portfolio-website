import { Navigation } from "@/components/navigation"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      

      {/* Resume Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            
            {/* Header */}
            <div className="text-center mb-12 border-b border-gray-200 pb-8">
                     <h2 className="text-5xl font-bold text-black mb-4" style={{fontFamily: 'var(--font-playfair)'}}>
                       Pranav Murali
                     </h2>
                     <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                <a href="mailto:pranavmurali024@gmail.com" className="hover:text-blue-600">
                  pranavmurali024@gmail.com
                </a>
                <span>•</span>
                <span>+91-8921764085</span>
                <span>•</span>
                <a href="https://github.com/Marvellousz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  GitHub
                </a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/pranavmurali2004/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  LinkedIn
                </a>
                <span>•</span>
                <a href=" https://x.com/Pranav_Murali__" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  X
                </a>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Education
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-black">
                    VIT Vellore, Tamil Nadu
                  </h4>
                  <span className="text-gray-500 font-medium">
                    CGPA 8.16
                  </span>
                </div>
                         <p className="text-gray-600">
                  Bachelor of Technology in Computer Science and Engineering
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Expected May 2026
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Experience
              </h3>
              
              <div className="space-y-8">
                {/* LoopLess */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-black">
                        Software Engineer Intern
                      </h4>
                      <p className="text-lg text-blue-600 font-semibold">
                        LoopLess
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium">
                      Aug 2025 - Present
                    </span>
                  </div>
                  <p className="text-gray-500 mb-3">Remote</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Added a <strong>URL generation</strong> feature to a <strong>Slack bot</strong> (Flask backend + Django UI), enabling marketers to create <strong>custom campaign links</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Built a <strong>tracking system</strong> in the <strong>LoopLess website</strong> to monitor <strong>URL clicks and downloads</strong>, providing real-time campaign insights.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Redesigned the <strong>Beloopless</strong> and <strong>Loopless app</strong> website with <strong>SvelteKit + Tailwind</strong>, improving load times by <strong>30%</strong> and boosting engagement.</span>
                    </li>
                  </ul>
                </div>

                {/* Valley AI */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-black">
                        Full-Stack Developer
                      </h4>
                      <p className="text-lg text-green-600 font-semibold">
                        Valley AI (Harvard-MIT Incubated)
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium">
                      Mar 2025 - Present
                    </span>
                  </div>
                  <p className="text-gray-500 mb-3">Remote</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Co-developed <strong>fall detection and eldercare monitoring systems</strong> with <strong>Next.js</strong>, <strong>React</strong>, <strong>Flask</strong>, and <strong>FastAPI</strong>, enabling monitoring of <strong>100+ residents</strong> (falls, sleep, hydration, mobility).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Helped design <strong>Careflo</strong>, a patient management tool streamlining records, schedules, and alerts, improving caregiver efficiency by <strong>25%</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Assisted in <strong>AWS deployment</strong>, supporting <strong>5000+ daily requests</strong> with scaling strategies and <strong>99.9% uptime</strong>.</span>
                    </li>
                  </ul>
                </div>

                {/* Hexaware */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-black">
                        Software Engineer Intern
                      </h4>
                      <p className="text-lg text-purple-600 font-semibold">
                        Hexaware Technologies
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium">
                      May 2025 - June 2025
                    </span>
                  </div>
                  <p className="text-gray-500 mb-3">Chennai, TN</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-1">•</span>
                      <span>Developed and refactored <strong>Spring Boot microservices</strong>, improving reusability by <strong>20%</strong> and reducing redundancy by <strong>30%</strong>, with RESTful endpoints and documentation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-1">•</span>
                      <span>Deployed on <strong>Azure</strong> with <strong>99.9% uptime</strong>, set up CI/CD pipelines, and ensured quality with <strong>JUnit + JaCoCo</strong> (<strong>85%+ coverage</strong>).</span>
                    </li>
                  </ul>
                </div>

                {/* Moon Finance */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-black">
                        Full-Stack Developer
                      </h4>
                      <p className="text-lg text-orange-600 font-semibold">
                        Moon Finance (VIT-IIM Incubated)
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium">
                      Apr 2024 - Aug 2024
                    </span>
                  </div>
                  <p className="text-gray-500 mb-3">Vellore, TN</p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span>Built a fintech platform with <strong>Next.js + Express</strong>, delivering <strong>10+</strong> core features including real-time transactions and user management.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span>Enhanced mobile UX and performance, raising average session time by <strong>25%</strong> and reducing bounce rate.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Open Source */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Open-Source Contributions
              </h3>
              
              <div className="border-l-4 border-indigo-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-black">
                    Classroomio
                  </h4>
                  <span className="text-gray-500 font-medium">
                    January 2025
                  </span>
                </div>
                <p className="text-gray-500 mb-3">Remote</p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span>Contributed to this open-source platform by adding the missing <strong>GitHub stars section</strong> in the website.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span>Used <strong>Svelte and TypeScript</strong> to improve user interface.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Projects
              </h3>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-black">
                      Memora
                    </h4>
                    <span className="text-gray-500 text-sm">
                      June 2025
                    </span>
                  </div>
                         <p className="text-sm text-gray-600 mb-3">
                    Next.js, FastAPI, FAISS, MongoDB, Docker
                  </p>
                  <p className="text-gray-600">
                    Architected a personal knowledge base with <strong>GPT-powered semantic search</strong>; supports <strong>100+</strong> uploads and achieves <strong>90%+</strong> query accuracy using open-source AI and vector embeddings.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-green-50 to-teal-50">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-black">
                      NullBin
                    </h4>
                    <span className="text-gray-500 text-sm">
                      May 2025
                    </span>
                  </div>
                         <p className="text-sm text-gray-600 mb-3">
                    Next.js, TailwindCSS, MongoDB, Vercel
                  </p>
                  <p className="text-gray-600">
                    Built a <strong>privacy-first encrypted pastebin</strong> where content is never sent unencrypted to the server; used by <strong>50+</strong> developers for secure sharing.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-black">
                      Schedulo
                    </h4>
                    <span className="text-gray-500 text-sm">
                      April 2025
                    </span>
                  </div>
                         <p className="text-sm text-gray-600 mb-3">
                    Next.js, TailwindCSS, Google Cloud Console
                  </p>
                  <p className="text-gray-600">
                    Developed a platform to auto-draft emails, schedule <strong>Google Meets</strong>, and sync events to <strong>Google Calendar</strong>, saving users <strong>5+ hours/week</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Certifications
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-bold text-black mb-2">
                    AWS Certified Cloud Practitioner
                  </h4>
                  <a 
                    href="https://www.credly.com/badges/adc41541-3f4a-4826-af94-2dfce4a89169/linked_in_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    View Credly Badge
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                  <h4 className="font-bold text-black mb-2">
                    Stanford Machine Learning Specialization
                  </h4>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/MX56MB9X657Z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    View Coursera Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Extracurriculars
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-black mb-3">
                    Technical Executive - Entrepreneurship Cell, VIT
                  </h4>
                         <p className="text-gray-600">
                    As a Technical Executive at <strong>Entrepreneurship Cell -- VIT</strong>, helped organize and build platforms for <strong>Vision Quest</strong>, <strong>Futurepreneurs</strong>, and flagship event <strong>E-Summit</strong>, which drew <strong>1000+ participants</strong> and featured industry leaders.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-black mb-3">
                    Hackathon Participation
                  </h4>
                         <p className="text-gray-600">
                    Participated in multiple hackathons including <strong>Caterpillar Hack</strong>, <strong>DevSoc by CodeChef VIT</strong>, and <strong>VIT Central Hack</strong>, developing various innovative projects and solutions under tight deadlines.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-12">
                     <h3 className="text-2xl font-bold text-black mb-6 border-b-2 border-blue-500 pb-2" style={{fontFamily: 'var(--font-playfair)'}}>
                Technical Skills
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-black mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'JavaScript', 'Python', 'Java', 'C/C++', 'Go', 'SQL', 'R', 'MATLAB'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-black mb-2">Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'React', 'SvelteKit', 'Node.js', 'Express', 'FastAPI', 'Django', 'Flask', 'Tailwind', 'Shadcn', 'RadixUI'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-black mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Git', 'GitHub', 'MongoDB', 'Firebase', 'MySQL', 'PostgreSQL', 'Docker', 'Postman'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-black mb-2">Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Ubuntu', 'Windows', 'Arch Linux', 'Web'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
