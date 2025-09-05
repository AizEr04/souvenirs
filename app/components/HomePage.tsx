import hero from '../assets/image.png';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EVENTS } from "../data/events"; 

export function HomePage() {
  return (
    <>
      {/* Hero ... wie gehabt */}
      <div className="relative">
        <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${hero})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-cyan-900/60" />
          <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">SOUVENIRS</h1>
            <p className="text-xl drop-shadow-md">Gemeinsam Musik, Kultur & Sport erleben</p>
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
                  {event.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 bg-white">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-800">Datum:</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-800">Ort:</span>
                  <span>{event.place}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-medium text-slate-800">Zeit:</span>
                  <span>{event.startTime} - {event.endTime}</span>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <Link to={`/info/${event.slug}`}>
                    <Button className={`bg-gradient-to-r ${event.color} hover:opacity-90 text-white w-full`}>
                      Details anzeigen
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

