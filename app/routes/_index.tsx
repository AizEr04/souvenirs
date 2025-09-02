import backgroundImage from '../assets/image.png';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Instagram, Mail } from 'lucide-react';

export default function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      {/* Navigation Header */}
      <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-medium">SOUVENIRS</h1>
          <nav className="flex space-x-6">
            <a href={`${import.meta.env.BASE_URL}ueber-uns`} className="hover:text-yellow-200 transition-colors">Über uns</a>
            <a href={`${import.meta.env.BASE_URL}infos`} className="hover:text-yellow-200 transition-colors">Infos</a>
            <a href={`${import.meta.env.BASE_URL}sponsoren`} className="hover:text-yellow-200 transition-colors">Sponsoren</a>
          </nav>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white mt-auto shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Hauptsponsor */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-2">Hauptsponsor</h3>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-lg shadow-md">
                <span className="font-medium">Sponsor Name</span>
              </div>
            </div>

            {/* Kontakt */}
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">Kontakt</h3>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://instagram.com/souvenirs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="mailto:info@souvenirs.de" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="E-Mail"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-300">
            <p>&copy; 2025 Souvenirs Event Team. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}