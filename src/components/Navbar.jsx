import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="container-max flex items-center justify-between py-4 sm:py-5">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-soft">
            <span className="text-lg font-semibold">B</span>
          </div>
          <div className="text-left">
            <p className="text-base sm:text-lg font-semibold text-slate-900">
              Frontend Blog
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              React & Tailwind Insights
            </p>
          </div>
        </button>

        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "font-medium transition-colors",
                isActive
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              ].join(" ")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              [
                "inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm transition-all",
                isActive
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-soft"
                  : "border-indigo-600/20 bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white hover:shadow-soft"
              ].join(" ")
            }
          >
            Create Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

