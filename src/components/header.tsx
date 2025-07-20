"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeToggler } from "./theme-toggle";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/projects": {
    name: "Projects",
  },
  "/experiences": {
    name: "Experiences",
  },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={
                    isActive 
                      ? "text-gray-900 dark:text-gray-100 font-medium" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  }
                >
                  {name}
                </Link>
              );
            })}
          </div>
          
          <ThemeToggler />
        </nav>
      </div>
    </header>
  );
}
