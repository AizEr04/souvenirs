export type LocaleCode = "de" | "en" | "fr";
export type LocalizedString = Partial<Record<LocaleCode, string>>;

export type PracticalInfo = {
  anmeldung?: LocalizedString;
  verpflegung?: LocalizedString;
  parken?: LocalizedString;
  wetter?: LocalizedString;
  barrierefreiheit?: LocalizedString;
};

export type EventDetails = {
  description: LocalizedString;
  capacity?: number;            // bleibt optional & sprachunabhängig (Zahl)
  price?: LocalizedString;
  organizer?: LocalizedString;
  category?: LocalizedString;
  highlights?: LocalizedString[]; // Array lokalisierter Strings
  practical?: PracticalInfo;
};

export type Event = {
  id: number;
  slug: string;                 // stabil & nicht übersetzt (für URL)
  name: LocalizedString;
  date: LocalizedString;        // z. B. „08. November“ / „Nov 8“
  place: LocalizedString;
  startTime: string;            // Uhrzeit bleibt sprachneutral
  endTime: string;
  color: string;                // Tailwind-Klassen
  details: EventDetails;
};
