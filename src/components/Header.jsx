import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo and Name */}
          <div className="flex items-center space-x-3">
            <Link to="/Portfolio/" className="flex items-center space-x-2">
              <img
                src="/Portfolio/favicon/android-chrome-192x192.png"
                width={40}
                height={40}
                alt="terminalLogo"
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold text-white">
                Tony Lomax
              </h1>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/Portfolio/projects"
                className={`transition-colors duration-200 ${
                  location.pathname === "/Portfolio/projects"
                    ? "text-green-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/Portfolio/timeline"
                className={`transition-colors duration-200 ${
                  location.pathname === "/Portfolio/timeline"
                    ? "text-green-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Timeline
              </Link>
              <Link
                to="/Portfolio/notes"
                className={`transition-colors duration-200 ${
                  location.pathname === "/Portfolio/notes"
                    ? "text-green-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Dev Notes
              </Link>
              <Link
                to="/Portfolio/contact"
                className={`transition-colors duration-200 ${
                  location.pathname === "/Portfolio/contact"
                    ? "text-green-300"
                    : "text-gray-300 hover:text-blue-300"
                }`}
              >
                Contact Me
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;