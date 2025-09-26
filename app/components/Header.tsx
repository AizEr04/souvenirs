import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600
        text-white shadow-lg
      "
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-medium cursor-pointer hover:text-yellow-200 transition-colors"
        >
          SOUVENIRS
        </Link>

        <div className="flex items-center space-x-6">
          <nav className="hidden sm:flex space-x-6">
            <Link
              to="/ueber-uns"
              className={`hover:text-yellow-200 transition-colors ${
                location.pathname === "/ueber-uns" ? "text-yellow-200" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/sponsoren"
              className={`hover:text-yellow-200 transition-colors ${
                location.pathname === "/sponsoren" ? "text-yellow-200" : ""
              }`}
            >
              {t("nav.sponsors")}
            </Link>
          </nav>

          {/* Sprachumschalter rechts */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
