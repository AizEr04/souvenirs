import { Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white mt-auto shadow-2xl">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Sponsor Call-to-Action */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium mb-2">{t("footer.sponsor.title")}</h3>

            <Link
              to="/sponsoren"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-lg shadow-md font-medium hover:from-yellow-500 hover:to-orange-600 transition-colors duration-300"
              aria-label={t("footer.sponsor.cta")}
            >
              {t("footer.sponsor.cta")}
            </Link>
          </div>

          {/* Kontakt */}
          <div className="text-center">
            <h3 className="text-lg font-medium mb-4">{t("footer.contact.title")}</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://instagram.com/souvenir.due"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label={t("footer.contact.instagram")}
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:souvenir.due@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label={t("footer.contact.email")}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-300">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
