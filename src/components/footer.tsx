import { siteMetadata } from "@/data/siteMetadata";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm space-y-2">
          <p>
            © {new Date().getFullYear()} Pranav Murali. All rights reserved.
          </p>
          <p>
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
