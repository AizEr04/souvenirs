import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Menü beim Routenwechsel schließen
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path ? "text-yellow-200" : "";

  const linkBase =
    "block px-3 py-2 rounded-md transition-colors hover:text-yellow-200";

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600
        text-white shadow-lg
      "
    >
      {/* Top bar */}
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-medium cursor-pointer hover:text-yellow-200 transition-colors"
        >
          SOUVENIRS
        </Link>

        <div className="flex items-center space-x-4">
          {/* Desktop-Navigation */}
          <nav className="hidden sm:flex space-x-6">
            <Link
              to="/ueber-uns"
              className={`${linkBase} ${isActive("/ueber-uns")}`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/sponsoren"
              className={`${linkBase} ${isActive("/sponsoren")}`}
            >
              {t("nav.sponsors")}
            </Link>
          </nav>

          {/* Sprachumschalter (immer sichtbar) */}
          <LanguageSwitcher />

          {/* Mobile Toggle (nur < sm) */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            aria-label={open ? t("nav.close") : t("nav.open")}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        id="mobile-nav"
        className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 bg-gradient-to-r from-purple-600/95 via-blue-600/95 to-cyan-600/95 backdrop-blur">
          <nav className="flex flex-col gap-2">
            <Link
              to="/ueber-uns"
              className={`${linkBase} ${isActive("/ueber-uns") || "text-white/90"}`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/sponsoren"
              className={`${linkBase} ${isActive("/sponsoren") || "text-white/90"}`}
            >
              {t("nav.sponsors")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
