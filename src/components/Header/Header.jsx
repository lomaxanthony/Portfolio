import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />

          <div className="flex items-center space-x-6">
            <Navigation />
            <Hamburger isOpen={isNavOpen} onClick={toggleNav} />
          </div>

          <MobileNav isOpen={isNavOpen} onClose={closeNav} />
        </div>
      </div>
    </header>
  );
}

export default Header;
