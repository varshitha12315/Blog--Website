import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { initialBlogs } from "./data/blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";

const AppLayout = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const navigate = useNavigate();

  const handleCreateBlog = ({ title, author, content }) => {
    const newBlog = {
      id: Date.now().toString(),
      title,
      author,
      content,
      excerpt:
        content.length > 160
          ? `${content.slice(0, 157).trimEnd()}...`
          : content,
      publishedAt: new Date().toISOString().slice(0, 10)
    };

    setBlogs((prev) => [newBlog, ...prev]);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container-max">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/blogs/:id" element={<BlogDetail blogs={blogs} />} />
            <Route
              path="/create"
              element={<CreateBlog onCreateBlog={handleCreateBlog} />}
            />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const App = () => <AppLayout />;

export default App;

