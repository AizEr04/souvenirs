// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: typeof window !== "undefined" ? (localStorage.getItem("lang") || "de") : "de",
    fallbackLng: "de",
    interpolation: { escapeValue: false },
  });

export default i18n;
