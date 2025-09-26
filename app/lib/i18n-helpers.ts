import type { LocalizedString } from "../types/event";
import i18n from "../i18n/i18n";

/** Liefert die beste Übersetzung (Sprache → Fallback → erster vorhandener Wert) */
export function L(ls?: LocalizedString, fallback = ""): string {
  if (!ls) return fallback;
  const lang = i18n.language as keyof LocalizedString;
  return ls[lang] ?? ls.de ?? ls.en ?? ls.fr ?? fallback;
}
