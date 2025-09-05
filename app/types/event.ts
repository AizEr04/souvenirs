export type PracticalInfo = {
    anmeldung?: string;
    verpflegung?: string;
    parken?: string;
    wetter?: string;
    barrierefreiheit?: string;
  };
  
  export type EventDetails = {
    description: string;
    capacity: number;
    price: string;
    organizer: string;
    category: string;
    highlights: string[];
    practical?: PracticalInfo;
  };
  
  export type EventBase = {
    id: number;
    slug: string; 
    name: string;
    date: string;
    place: string;
    startTime: string;
    endTime: string;
    color: string;
  };
  
  export type Event = EventBase & { details: EventDetails };
  