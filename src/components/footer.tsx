import { siteMetadata } from "@/data/siteMetadata";
import { SOCIALS } from "@/data/socials";

export function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links Section */}
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Connect with me</h3>
            <div className="flex items-center space-x-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.label}`}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()}&nbsp;
              <a
                href={siteMetadata.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                Pranav Murali
              </a>
              . All rights reserved.
            </p>
            
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Built with{" "}
              <span className="text-amber-600 dark:text-amber-400">Next.js</span>,{" "}
              <span className="text-amber-600 dark:text-amber-400">Tailwind CSS</span>, and{" "}
              <span className="text-amber-600 dark:text-amber-400">Contentlayer</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
