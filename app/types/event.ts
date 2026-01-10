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
  capacity?: number;            
  price?: LocalizedString;
  organizer?: LocalizedString;
  category?: LocalizedString;
  highlights?: LocalizedString[]; 
  practical?: PracticalInfo;
};

export type Event = {
  id: number;
  slug: string;                 
  name: LocalizedString;
  date: LocalizedString;       
  place: LocalizedString;
  startTime?: string;
  endTime?: string;
  color: string;
  coverImage?: string;
  gallery?: string[];
  isPast?: boolean;             
  details: EventDetails;
};
