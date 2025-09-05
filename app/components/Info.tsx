import { Calendar, MapPin, Clock, Users, Star, Info as InfoIcon, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";
import { getEventBySlug } from "../data/events";

export function Info() {
  const { slug } = useParams();
  const selectedEvent = slug ? getEventBySlug(slug) : undefined;

  if (!selectedEvent) {
    return (
      <div className="px-6 py-12 flex-1 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <InfoIcon className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-medium mb-4 text-slate-800">Event-Details</h2>
          <p className="text-slate-600 mb-6">
            Wähle ein Event auf der Startseite aus, um detaillierte Informationen zu erhalten.
          </p>
          <div className="text-center">
            <Link to="/"><Button variant="ghost">Zur Startseite</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const details = selectedEvent.details;

  return (
    <div className="px-6 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Zurück */}
        <div className="mb-6">
          <Link to="/"><Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-slate-800 p-0">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Button></Link>
        </div>

        {/* Event Header */}
        <div className="mb-8">
          <div className={`h-2 bg-gradient-to-r ${selectedEvent.color} rounded-t-lg`} />
          <div className="bg-white p-6 rounded-b-lg shadow-lg border border-t-0">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className={`text-3xl font-medium mb-2 bg-gradient-to-r ${selectedEvent.color} bg-clip-text text-transparent`}>
                  {selectedEvent.name}
                </h1>
                <Badge variant="secondary" className="mb-2">{details.category}</Badge>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-medium bg-gradient-to-r ${selectedEvent.color} bg-clip-text text-transparent`}>
                  {details.price}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar className="w-5 h-5 text-purple-500" />
                <div><div className="font-medium">Datum</div><div>{selectedEvent.date}</div></div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-5 h-5 text-blue-500" />
                <div><div className="font-medium">Uhrzeit</div><div>{selectedEvent.startTime} - {selectedEvent.endTime}</div></div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-green-500" />
                <div><div className="font-medium">Ort</div><div>{selectedEvent.place}</div></div>
              </div>
            </div>

            {/* Capacity/Organizer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Users className="w-5 h-5 text-orange-500" />
                <div><div className="font-medium">Kapazität</div><div>{details.capacity} Personen</div></div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Star className="w-5 h-5 text-yellow-500" />
                <div><div className="font-medium">Veranstalter</div><div>{details.organizer}</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Beschreibung */}
        <Card className="mb-6 shadow-lg">
          <CardHeader><CardTitle>Über das Event</CardTitle></CardHeader>
          <CardContent><p className="text-slate-700 leading-relaxed">{details.description}</p></CardContent>
        </Card>

        {/* Highlights */}
        <Card className="mb-6 shadow-lg">
          <CardHeader><CardTitle>Highlights</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedEvent.color}`} />
                  <span className="text-slate-700">{h}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Praktische Infos */}
        {details.practical && (
          <Card className="shadow-lg">
            <CardHeader><CardTitle>Praktische Informationen</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-700">
                {details.practical.anmeldung && <div><strong>Anmeldung:</strong> {details.practical.anmeldung}</div>}
                {details.practical.verpflegung && <div><strong>Verpflegung:</strong> {details.practical.verpflegung}</div>}
                {details.practical.parken && <div><strong>Parken:</strong> {details.practical.parken}</div>}
                {details.practical.wetter && <div><strong>Wetter:</strong> {details.practical.wetter}</div>}
                {details.practical.barrierefreiheit && <div><strong>Barrierefreiheit:</strong> {details.practical.barrierefreiheit}</div>}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
