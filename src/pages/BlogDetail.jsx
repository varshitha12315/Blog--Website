import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    return dateString;
  }
};

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <section className="max-w-3xl">
        <p className="text-base font-semibold text-slate-900">
          Blog not found
        </p>
        <p className="mt-2 text-sm text-slate-600">
          The blog you are looking for may have been removed or is unavailable.
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
        >
          ← Back to Blogs
        </button>
      </section>
    );
  }

  return (
    <article className="max-w-3xl">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
      >
        ← Back to Blogs
      </button>

      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Article
        </p>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
          {blog.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>
            By{" "}
            <span className="font-medium text-slate-700">{blog.author}</span>
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{formatDate(blog.publishedAt)}</span>
        </div>
      </header>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
        <div className="prose prose-slate max-w-none text-sm sm:text-base">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;

