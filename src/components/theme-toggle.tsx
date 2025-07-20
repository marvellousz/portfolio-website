"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./icons";
import { useEffect, useState } from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
          return;
        }
        setTheme("dark");
      }}
      className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-all duration-200 hover:scale-105 focus:outline-none"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === "dark" ? (
          <SunIcon 
            className="w-5 h-5 text-white transition-transform duration-200 hover:rotate-12" 
          />
        ) : (
          <MoonIcon 
            className="w-5 h-5 text-gray-600 transition-transform duration-200 hover:-rotate-12" 
          />
        )}
      </div>
    </button>
  );
}
