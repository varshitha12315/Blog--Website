import React from "react";
import BlogCard from "../components/BlogCard";

const Home = ({ blogs }) => {
  return (
    <section>
      <header className="mb-8 sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Blog
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
          Insights for modern frontend developers
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
          Explore curated articles on React, Tailwind CSS, and building clean,
          professional interfaces that look great on any device.
        </p>
      </header>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {blogs.length === 0 && (
        <p className="mt-6 text-sm text-slate-500">
          No blogs yet. Be the first to create one!
        </p>
      )}
    </section>
  );
};

export default Home;

