import hero from "../assets/souvenirs-logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EVENTS } from "../data/events";
import { useTranslation } from "react-i18next";
import { L } from "../lib/i18n-helpers";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero ... unverändert mit t("home.hero.*") */}
      <div className="relative">
        <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${hero})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-cyan-900/60" />
          <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{t("home.hero.title")}</h1>
            <p className="text-xl drop-shadow-md">{t("home.hero.subtitle")}</p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="w-full px-6 py-12 flex-1">
        <div className="space-y-6">
          {EVENTS.map((event) => (
            <Card key={event.id} className="bg-white shadow-lg border-0 w-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${event.color}`} />
              <CardHeader className="bg-white">
                <CardTitle className={`text-lg bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                  {L(event.name)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 bg-white">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-800">{t("home.event.date")}:</span>
                  <span>{L(event.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-800">{t("home.event.place")}:</span>
                  <span>{L(event.place)}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-800">{t("home.event.time")}:</span>
                  <span>{event.startTime} - {event.endTime}</span>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <Link to={`/info/${event.slug}`}>
                    <Button className={`bg-gradient-to-r ${event.color} hover:opacity-90 text-white w-full`}>
                      {t("home.event.details")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
