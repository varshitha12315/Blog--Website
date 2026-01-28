import React, { useState } from "react";

const CreateBlog = ({ onCreateBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !content.trim()) {
      return;
    }
    onCreateBlog({
      title: title.trim(),
      author: author.trim(),
      content: content.trim()
    });
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <section className="max-w-2xl">
      <header className="mb-6 sm:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Create
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">
          Write a new blog post
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Draft a new article to showcase your frontend knowledge. This form
          stores data in React state only, without a backend.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
      >
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-slate-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Crafting a Clean UI with React & Tailwind"
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm sm:text-base text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-slate-700"
          >
            Author Name
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm sm:text-base text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-slate-700"
          >
            Blog Content
          </label>
          <textarea
            id="content"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm sm:text-base text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
          <p className="text-xs text-slate-500">
            Tip: Use blank lines to separate paragraphs. They will be rendered
            with proper spacing.
          </p>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            disabled={!title.trim() || !author.trim() || !content.trim()}
          >
            Publish Blog
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateBlog;

