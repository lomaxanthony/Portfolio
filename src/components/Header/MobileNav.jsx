import { Link, useLocation } from "react-router-dom";

function MobileNav({ isOpen, onClose }) {
  const location = useLocation();

  const navItems = [
    { path: "/Portfolio/projects", label: "Projects" },
    { path: "/Portfolio/timeline", label: "Timeline" },
    { path: "/Portfolio/notes", label: "Dev Notes" },
    { path: "/Portfolio/contact", label: "Contact Me" }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Dropdown menu from right side */}
      <nav className="absolute top-full right-0 w-48 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-50 md:hidden mt-2 mr-4">
        <div className="flex flex-col py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`py-3 px-4 transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-green-300 bg-gray-800/50"
                  : "text-gray-300 hover:text-blue-300 hover:bg-gray-800/30"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default MobileNav;