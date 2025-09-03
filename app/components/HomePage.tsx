import backgroundImage from '../assets/image.png';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function HomePage() {
  const events = [
    { 
      id: 1, 
      name: "Sportfest", 
      date: "15. September", 
      place: "Stadtpark Arena",
      startTime: "14:00",
      endTime: "18:00",
      color: "from-blue-500 to-purple-600"
    },
    { 
      id: 8, 
      name: "Musikabend", 
      date: "20. Oktober", 
      place: "Kulturzentrum",
      startTime: "19:30",
      endTime: "23:00",
      color: "from-pink-500 to-rose-600"
    },
    { 
      id: 5, 
      name: "Kulturfestival", 
      date: "5. November", 
      place: "Marktplatz",
      startTime: "10:00",
      endTime: "22:00",
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Colorful overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-cyan-900/60"></div>
          
          {/* Hero content */}
          <div className="relative max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">SOUVENIRS</h1>
            <p className="text-xl drop-shadow-md">Gemeinsam Musik, Kultur & Sport erleben</p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="w-full px-6 py-12 flex-1">
        <div className="space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-white shadow-lg border-0 w-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}