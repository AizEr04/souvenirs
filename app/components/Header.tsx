import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header
        className="
        fixed top-0 inset-x-0 z-50
        bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600
        text-white shadow-lg
        "
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Titel → führt nach Home */}
        <Link
          to="/"
          className="text-lg font-medium cursor-pointer hover:text-yellow-200 transition-colors"
        >
          SOUVENIRS
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link
            to="/ueber-uns"
            className={`hover:text-yellow-200 transition-colors ${
              location.pathname === "/ueber-uns" ? "text-yellow-200" : ""
            }`}
          >
            Über uns
          </Link>

          <Link
            to="/sponsoren"
            className={`hover:text-yellow-200 transition-colors ${
              location.pathname === "/sponsoren" ? "text-yellow-200" : ""
            }`}
          >
            Sponsoren
          </Link>
        </nav>
      </div>
    </header>
  );
}
