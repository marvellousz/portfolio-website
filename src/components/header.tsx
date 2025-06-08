"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggler } from "./theme-toggle";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/projects": {
    name: "projects",
  },
  "/experiences": {
    name: "experiences",
  },
};

export function Header() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Centered Navigation */}
          <LayoutGroup>
            <nav className="hidden md:flex items-center space-x-1">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105",
                      isActive 
                        ? "text-white bg-amber-600 dark:bg-amber-500 shadow-lg" 
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    {name}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-amber-600 dark:bg-amber-500 rounded-full"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          {/* Mobile Navigation (centered) */}
          <div className="md:hidden flex items-center space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-full transition-all duration-200",
                    isActive 
                      ? "text-white bg-amber-600 dark:bg-amber-500" 
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle (positioned absolutely to right) */}
          <div className="absolute right-0">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}
