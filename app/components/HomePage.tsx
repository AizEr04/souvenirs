import hero from "../assets/souvenirs-logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { UPCOMING_EVENTS, PAST_EVENTS } from "../data/events";
import { useTranslation } from "react-i18next";
import { L } from "../lib/i18n-helpers";
import { useState } from "react";
import { EventGallery } from "./EventGallery";

export function HomePage() {
  const { t } = useTranslation();
  const [selectedGallerySlug, setSelectedGallerySlug] = useState<string | null>(null);

  const selectedPastEvent = selectedGallerySlug
    ? PAST_EVENTS.find((e) => e.slug === selectedGallerySlug)
    : undefined;

  return (
    <>
      {/* Hero */}
      <div className="relative">
        <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${hero})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-cyan-900/60" />
          <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{t("home.hero.title")}</h1>
            <p className="text-xl drop-shadow-md">{t("home.hero.subtitle")}</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      {UPCOMING_EVENTS.length > 0 && (
      <div className="w-full px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("home.upcomingTitle", "Anstehende Events")}
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {UPCOMING_EVENTS.map((event) => (
            <Card
              key={event.id}
              className="group relative w-full h-96 overflow-hidden shadow-lg border-0 hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {event.coverImage ? (
                  <>
                    <img
                      src={event.coverImage}
                      alt={`${L(event.name)} Event`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500" />
                  </>
                ) : (
                  // Fallback ohne Bild: nur Hintergrund-Verlauf
                  <div className={`w-full h-full bg-gradient-to-br ${event.color} opacity-90`} />
                )}
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color}`} />

                <div className="text-white space-y-4">
                  <h3 className="text-4xl font-bold drop-shadow-lg mb-6">{L(event.name)}</h3>

                  <div className="space-y-3 text-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-white/90 font-semibold">{t("home.event.date")}:</span>
                      <span className="text-white font-medium">{L(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/90 font-semibold">{t("home.event.place")}:</span>
                      <span className="text-white font-medium">{L(event.place)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/90 font-semibold">{t("home.event.time")}:</span>
                      <span className="text-white font-medium">
                      {event.startTime}
                      {event.endTime ? ` – ${event.endTime}` : ""}
                      </span>
                    </div>
                  </div>

                  {/* Mobile always visible; desktop hover */}
                  <div className="pt-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/info/${event.slug}`}>
                      <Button
                        className={`bg-gradient-to-r ${event.color} hover:opacity-90 text-white w-full text-lg py-3 shadow-lg`}
                      >
                        {t("home.event.details")}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      )}

      {/* Past Events */}
      <div className="w-full px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("home.pastTitle", "Vergangene Events")}
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {PAST_EVENTS.map((event) => (
            <Card
              key={event.id}
              className="group relative w-full h-80 overflow-hidden cursor-pointer shadow-lg border-0 hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedGallerySlug(event.slug)}
            >
              <div className="absolute inset-0">
                {event.coverImage ? (
                  <>
                    <img
                      src={event.coverImage}
                      alt={`${L(event.name)} Event`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500" />
                  </>
                ) : (
                  // Fallback ohne Bild: nur Hintergrund-Verlauf
                  <div className={`w-full h-full bg-gradient-to-br ${event.color} opacity-90`} />
                )}
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color}`} />

                <div className="text-white space-y-4">
                  <h3 className="text-4xl font-bold drop-shadow-lg mb-4">{L(event.name)}</h3>

                  <div className="space-y-2 text-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-white/90 font-semibold">{t("home.event.date")}:</span>
                      <span className="text-white font-medium">{L(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/90 font-semibold">{t("home.event.place")}:</span>
                      <span className="text-white font-medium">{L(event.place)}</span>
                    </div>
                  </div>

                  <div className="pt-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className={`bg-gradient-to-r ${event.color} hover:opacity-90 text-white w-full text-lg py-3 shadow-lg`}
                    >
                      {t("home.past.gallery", "Fotogalerie anzeigen")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedPastEvent?.gallery && selectedPastEvent.gallery.length > 0 && (
        <EventGallery
          eventName={L(selectedPastEvent.name)}
          images={selectedPastEvent.gallery}
          onClose={() => setSelectedGallerySlug(null)}
        />
      )}
    </>
  );
}
