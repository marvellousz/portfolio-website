import { formatDate } from "@/lib/utils";
import { Blog } from "contentlayer/generated";

type BlogCardProps = Pick<
  Blog,
  "readingTime" | "slug" | "title" | "summary" | "publishedAt"
>;

export function BlogCard({ blog }: { blog: BlogCardProps }) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={blog.publishedAt} className="font-medium">
            {formatDate(blog.publishedAt)}
          </time>
          <span>•</span>
          <span>{blog.readingTime.text}</span>
        </div>
        
        <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
          {blog.summary}
        </p>
        
        <div className="pt-2">
          <span className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
            Read article
            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}
