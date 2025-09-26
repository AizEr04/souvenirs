import { Calendar, MapPin, Clock, Users, Star, Info as InfoIcon, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link, useParams } from "react-router-dom";
import { getEventBySlug } from "../data/events";
import { useTranslation } from "react-i18next";
import { L } from "../lib/i18n-helpers";

export function Info() {
  const { slug } = useParams();
  const selectedEvent = slug ? getEventBySlug(slug) : undefined;
  const { t } = useTranslation();

  if (!selectedEvent) {
    return (
      <div className="px-6 py-12 flex-1 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <InfoIcon className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-medium mb-4 text-slate-800">{t("info.empty.heading")}</h2>
          <p className="text-slate-600 mb-6">{t("info.empty.text")}</p>
          <div className="text-center">
            <Link to="/"><Button variant="ghost">{t("info.empty.backHome")}</Button></Link>
          </div>
        </div>
      </div>
    );
  }

  const d = selectedEvent.details;

  return (
    <div className="px-6 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Zurück */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 text-slate-600 hover:text-slate-800 p-0">
              <ArrowLeft className="w-4 h-4" />
              {t("info.back")}
            </Button>
          </Link>
        </div>

        {/* Event Header */}
        <div className="mb-8">
          <div className={`h-2 bg-gradient-to-r ${selectedEvent.color} rounded-t-lg`} />
          <div className="bg-white p-6 rounded-b-lg shadow-lg border border-t-0">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className={`text-3xl font-medium mb-2 bg-gradient-to-r ${selectedEvent.color} bg-clip-text text-transparent`}>
                  {L(selectedEvent.name)}
                </h1>
                <Badge variant="secondary" className="mb-2">{L(d.category)}</Badge>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-medium bg-gradient-to-r ${selectedEvent.color} bg-clip-text text-transparent`}>
                  {L(d.price)}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="font-medium">{t("info.fields.date")}</div>
                  <div>{L(selectedEvent.date)}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">{t("info.fields.time")}</div>
                  <div>{selectedEvent.startTime} - {selectedEvent.endTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-medium">{t("info.fields.place")}</div>
                  <div>{L(selectedEvent.place)}</div>
                </div>
              </div>
            </div>

            {/* Capacity/Organizer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {!!d?.capacity && (
                <div className="flex items-center gap-2 text-slate-700">
                  <Users className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-medium">{t("info.fields.capacity")}</div>
                    <div>{d.capacity} {t("info.people")}</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 text-slate-700">
                <Star className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="font-medium">{t("info.fields.organizer")}</div>
                  <div>{L(d.organizer)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beschreibung */}
        <Card className="mb-6 shadow-lg">
          <CardHeader><CardTitle>{t("info.sections.about")}</CardTitle></CardHeader>
          <CardContent><p className="text-slate-700 leading-relaxed">{L(d.description)}</p></CardContent>
        </Card>

        {/* Highlights */}
        {d.highlights?.length ? (
          <Card className="mb-6 shadow-lg">
            <CardHeader><CardTitle>{t("info.sections.highlights")}</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {d.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedEvent.color}`} />
                    <span className="text-slate-700">{L(h)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Praktische Infos */}
        {d.practical && (
          <Card className="shadow-lg">
            <CardHeader><CardTitle>{t("info.sections.practical")}</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3 text-slate-700">
                {d.practical.anmeldung && <div><strong>{t("info.practical.registration")}:</strong> {L(d.practical.anmeldung)}</div>}
                {d.practical.verpflegung && <div><strong>{t("info.practical.catering")}:</strong> {L(d.practical.verpflegung)}</div>}
                {d.practical.parken && <div><strong>{t("info.practical.parking")}:</strong> {L(d.practical.parken)}</div>}
                {d.practical.wetter && <div><strong>{t("info.practical.weather")}:</strong> {L(d.practical.wetter)}</div>}
                {d.practical.barrierefreiheit && <div><strong>{t("info.practical.accessibility")}:</strong> {L(d.practical.barrierefreiheit)}</div>}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
