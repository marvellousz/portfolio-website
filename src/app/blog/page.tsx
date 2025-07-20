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
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Blog
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        A thoughtful exploration of the patterns, people, and paradoxes of modern life.
        </p>
      </div>

      {/* Blog Posts */}
      {undraftedBlogs.length > 0 ? (
        <div className="space-y-8">
          {undraftedBlogs.map((blog) => (
            <article key={blog.slug} className="border-b border-gray-200 dark:border-gray-700 pb-8">
              <Link href={`/blog/${blog.slug}`} className="group block">
                <h2 className="text-xl font-medium text-blue-600 dark:text-blue-400 hover:underline mb-2">
                  {blog.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <time dateTime={blog.publishedAt}>
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{blog.readingTime.text}</span>
                </div>
                {blog.summary && (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {blog.summary}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            No articles yet
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-md mx-auto">
            I'm working on some great content. Check back soon for insights on web development and technology!
          </p>
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
