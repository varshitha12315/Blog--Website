import React from "react";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return dateString;
  }
};

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
          {formatDate(blog.publishedAt)}
        </p>
        <h2 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-indigo-700">
          {blog.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 line-clamp-3">
          {blog.excerpt}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          By <span className="font-medium text-slate-700">{blog.author}</span>
        </p>
        <button
          type="button"
          onClick={() => navigate(`/blogs/${blog.id}`)}
          className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          Read More
          <span className="ml-1.5 text-xs" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default BlogCard;

