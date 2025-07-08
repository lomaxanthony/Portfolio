import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/Portfolio/" className="flex items-center space-x-2">
      <img
        src="/Portfolio/favicon/android-chrome-192x192.png"
        width={40}
        height={40}
        alt="terminalLogo"
        className="rounded-lg"
      />

      {/* bg-transparent hover:bg-white/10 text-blue-100 hover:text-white-900 border border-green-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 shadow-lg" */}

      <h1 className="text-2xl font-bold text-white hover:text-blue-300">
        Tony Lomax
      </h1>
    </Link>
  );
}

export default Logo;