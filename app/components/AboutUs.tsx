import image from '../assets/image.png';

export function AboutUs() {
  return (
    <div className="w-full px-6 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Über uns Überschrift */}
        <div className="text-center mb-12">
          <h2 className="text-4xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Über uns
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Bereich */}
          <div className="space-y-6">
            <h3 className="text-2xl bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Wer sind wir?
            </h3>
            <p className="text-slate-800 leading-relaxed">
              Souvenirs ist ein leidenschaftliches Event-Team, das es sich zur Aufgabe gemacht hat, 
              unvergessliche Erlebnisse zu schaffen. Seit unserer Gründung organisieren wir erfolgreich 
              Partys, Sportturniere und kulturelle Veranstaltungen, die Menschen zusammenbringen und 
              bleibende Erinnerungen schaffen.
            </p>
            <p className="text-slate-800 leading-relaxed">
              Unser Name "Souvenirs" steht für genau das - wir möchten, dass jede Veranstaltung zu 
              einem wertvollen Souvenir in den Herzen unserer Teilnehmer wird. Mit viel Kreativität, 
              Engagement und Liebe zum Detail planen wir Events, die weit über das Gewöhnliche hinausgehen.
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg border-l-4 border-gradient-to-b from-blue-500 to-purple-600 shadow-md">
              <h4 className="text-lg mb-3 font-semibold text-slate-800">
                Unsere Mission
              </h4>
              <p className="text-slate-800 leading-relaxed">
                Musik, Kultur und Sport zu vereinen und dabei eine Atmosphäre zu schaffen, 
                in der sich jeder willkommen und wertgeschätzt fühlt. Wir glauben daran, 
                dass die besten Events entstehen, wenn Leidenschaft auf Professionalität trifft.
              </p>
            </div>
          </div>

          {/* Bild Bereich */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={image}
                alt="Das Souvenirs Event Team bei der Planung" 
                className="w-full h-80 object-cover"
              />
              {/* Colorful overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-cyan-600/20"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 blur-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-80 blur-lg"></div>
          </div>
        </div>

        {/* Team Werte */}
        <div className="mt-16">
          <h3 className="text-2xl text-center mb-8 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Unsere Werte
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-blue-500 to-purple-600">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🎉</span>
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                Leidenschaft
              </h4>
              <p className="text-slate-700">
                Wir brennen für das, was wir tun und bringen diese Energie in jede Veranstaltung ein.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-pink-500 to-orange-500">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                Gemeinschaft
              </h4>
              <p className="text-slate-700">
                Events sollen Menschen verbinden und ein Gefühl der Zusammengehörigkeit schaffen.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-orange-500 to-yellow-500">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">✨</span>
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                Qualität
              </h4>
              <p className="text-slate-700">
                Wir setzen auf höchste Standards und achten auf jedes Detail für perfekte Events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}