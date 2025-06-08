import { BlogCard } from "@/components/blog-card";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";
import { generatePageMetadata } from "../seo";
import Link from "next/link";
import { ENV } from "@/lib/env";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Read my blogs on web development, design and more.",
});

const isProd = ENV.NODE_ENV === "production";

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative py-12 lg:py-20">
        <div className="relative">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Thoughts on web development, technology, design, and building products that matter.
          </p>
          
          {/* Stats */}
          <div className="mt-8 flex gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{undraftedBlogs.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {undraftedBlogs.reduce((acc, blog) => acc + blog.readingTime.words, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Words</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {Math.round(undraftedBlogs.reduce((acc, blog) => acc + blog.readingTime.minutes, 0))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Min Read</div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      {undraftedBlogs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {undraftedBlogs.map((blog, idx) => (
            <div key={blog.slug}>
              <Link href={`/blog/${blog.slug}`} className="group block">
                <BlogCard blog={blog} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No articles yet</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              I&apos;m working on some great content. Check back soon for insights on web development and technology!
            </p>
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Explore Other Sections
            </Link>
          </div>        </div>
      )}
    </div>
  );
}
