import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/Portfolio/projects", label: "Projects" },
    { path: "/Portfolio/timeline", label: "Timeline" },
    { path: "/Portfolio/notes", label: "Dev Notes" },
    { path: "/Portfolio/contact", label: "Contact Me" }
  ];

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`transition-colors duration-200 ${
            location.pathname === item.path
              ? "text-green-300"
              : "text-gray-300 hover:text-blue-300"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;