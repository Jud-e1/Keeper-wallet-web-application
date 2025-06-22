import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <a href="/" className="flex items-center">
            <img src="/68026311616.png" alt="Logo" className="w-10 h-10 transform group-hover:scale-105 transition-transform duration-200" />
          </a>
          <span className="font-bold text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
            Keepar
          </span>
        </div>
        <div className="hidden md:flex space-x-1">
          {["Wallet", "Features", "Support", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#download"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Download
          </a>
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 