// app/components/LanguageSwitcher.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Beim Laden die gespeicherte Sprache respektieren
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="flex items-center">
      {/* Mobile: native select */}
      <label className="sr-only" htmlFor="lang-select">Language</label>
      <select
        id="lang-select"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="
          block md:hidden
          bg-white/15 border border-white/30 text-white text-sm
          rounded-md px-2 py-1
          focus:outline-none focus:ring-2 focus:ring-yellow-200
        "
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code} className="text-black">
            {l.label}
          </option>
        ))}
      </select>

      {/* Desktop: Pill-Buttons */}
      <div className="hidden md:flex space-x-2">
        {LANGS.map((l) => {
          const active = i18n.language === l.code;
          return (
            <button
              key={l.code}
              onClick={() => changeLanguage(l.code)}
              className={`
                px-2 py-1 rounded text-sm transition-colors
                ${active
                  ? "bg-yellow-300 text-black font-semibold"
                  : "bg-white/20 hover:bg-white/30 text-white"}
              `}
              aria-pressed={active}
              aria-label={`Switch language to ${l.label}`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
