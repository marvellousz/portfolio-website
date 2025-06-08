import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface Props {
  className?: string;
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
  "aria-label"?: string;
}

export function SocialLink({ className, href, children, icon: Icon, "aria-label": ariaLabel }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "group relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
      </div>
      {children && (
        <span className="ml-12 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {children}
        </span>
      )}
    </Link>
  );
}
