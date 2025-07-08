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
      <h1 className="text-2xl font-bold text-white">
        Tony Lomax
      </h1>
    </Link>
  );
}

export default Logo;