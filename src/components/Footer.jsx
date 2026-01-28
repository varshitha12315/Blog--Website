import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-3 py-4 sm:py-5 text-xs sm:text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Frontend Blog. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Built with
          <span className="font-medium text-slate-700">React</span>
          <span>·</span>
          <span className="font-medium text-slate-700">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

