import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, Heart, Star, Users, Trophy } from 'lucide-react';

export function Sponsors() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
    
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
  
    try {
      const result = await emailjs.send(
        "service_sjq8vfh",        // deine Service ID
        "template_vx9vsga",       // deine Template ID
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "5CjXYK24MULfDk7vG"     // dein Public Key
      );
  
      console.log("EmailJS result:", result.text);
      setStatus("ok");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setError("Senden fehlgeschlagen. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.");
    }
  };  

  return (
    <div className="w-full px-6 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Sponsoren Überschrift */}
        <div className="text-center mb-12">
          <h2 className="text-4xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Sponsoren
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Status Bereich */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl border-l-4 border-gradient-to-b from-yellow-500 to-orange-600 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Wir suchen noch Sponsoren!
            </h3>
            <p className="text-slate-800 leading-relaxed max-w-2xl mx-auto">
              Aktuell sind wir noch auf der Suche nach Partnern und Sponsoren, die uns dabei helfen, 
              unvergessliche Events zu organisieren. Wenn Sie Teil unserer Gemeinschaft werden möchten 
              und Ihre Marke mit lebendigen, kulturellen Erlebnissen verknüpfen wollen, freuen wir uns 
              über Ihre Kontaktaufnahme!
            </p>
          </div>
        </div>

        {/* Sponsoring Vorteile */}
        <div className="mb-12">
          <h3 className="text-2xl text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Warum Sponsor werden?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-blue-500 to-purple-600">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                Reichweite
              </h4>
              <p className="text-slate-700">
                Erreichen Sie eine diverse Zielgruppe bei unseren Events und schaffen Sie bleibende Eindrücke.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-pink-500 to-orange-500">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="text-white" size={24} />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                Markenimage
              </h4>
              <p className="text-slate-700">
                Verbinden Sie Ihre Marke mit positiven Erlebnissen und stärken Sie Ihr Unternehmensimage.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-orange-500 to-yellow-500">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="text-white" size={24} />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                Gemeinschaft
              </h4>
              <p className="text-slate-700">
                Werden Sie Teil einer lebendigen Community und unterstützen Sie lokale Kultur und Sport.
              </p>
            </div>
          </div>
        </div>

        {/* Kontakt Formular */}
        <Card className="bg-white shadow-xl border-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"></div>
          <CardHeader className="bg-white text-center">
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Interesse an einer Partnerschaft?
            </CardTitle>
            <p className="text-slate-700 mt-2">
              Kontaktieren Sie uns und lassen Sie uns gemeinsam großartige Events schaffen!
            </p>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-800 font-semibold mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-semibold mb-2">
                    Unternehmen *
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Name Ihres Unternehmens"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-800 font-semibold mb-2">
                    E-Mail *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="ihre.email@beispiel.ch"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-semibold mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="+41 79 123 45 67"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-2">
                  Nachricht
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Erzählen Sie uns von Ihren Vorstellungen für eine Partnerschaft..."
                />
              </div>

              <div className="text-center">
                <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    {status === "sending" ? "Senden…" : (
                    <>
                        <Mail className="mr-2" size={20} />
                        Sponsoring-Anfrage senden
                    </>
                    )}
                </Button>
              </div>

                {status === "ok" && (
                <p className="text-center text-green-700 mt-4">
                    Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns bald.
                </p>
                )}

                {status === "error" && (
                <p className="text-center text-red-600 mt-4">
                    {error}
                </p>
                )}
            </form>
          </CardContent>
        </Card>

        {/* Direkter Kontakt */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Oder kontaktieren Sie uns direkt:
          </h3>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:souvenir.due@gmail.com" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Mail className="mr-2" size={20} />
              souvenir.due@gmail.com
            </a>
            <a 
              href="tel:+491234567890" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              +41 79 310 17 34
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}