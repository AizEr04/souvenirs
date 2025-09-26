import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, Heart, Star, Users, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Sponsors() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const result = await emailjs.send(
        "service_sjq8vfh", // Service ID (Tipp: per ENV setzen)
        "template_vx9vsga", // Template ID
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "5CjXYK24MULfDk7vG" // Public Key
      );

      console.log("EmailJS result:", result.text);
      setStatus("ok");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setError(t("sponsors.form.errorMessage"));
    }
  };

  return (
    <div className="w-full px-6 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            {t("sponsors.heading")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Status / Intro */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl border-l-4 border-gradient-to-b from-yellow-500 to-orange-600 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="text-white" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              {t("sponsors.cta.title")}
            </h3>
            <p className="text-slate-800 leading-relaxed max-w-2xl mx-auto">
              {t("sponsors.cta.text")}
            </p>
          </div>
        </div>

        {/* Vorteile */}
        <div className="mb-12">
          <h3 className="text-2xl text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {t("sponsors.benefits.heading")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-blue-500 to-purple-600">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} aria-hidden="true" />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                {t("sponsors.benefits.reach.title")}
              </h4>
              <p className="text-slate-700">
                {t("sponsors.benefits.reach.text")}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-pink-500 to-orange-500">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="text-white" size={24} aria-hidden="true" />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                {t("sponsors.benefits.brand.title")}
              </h4>
              <p className="text-slate-700">
                {t("sponsors.benefits.brand.text")}
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-orange-500 to-yellow-500">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="text-white" size={24} aria-hidden="true" />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">
                {t("sponsors.benefits.community.title")}
              </h4>
              <p className="text-slate-700">
                {t("sponsors.benefits.community.text")}
              </p>
            </div>
          </div>
        </div>

        {/* Formular */}
        <Card className="bg-white shadow-xl border-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"></div>
          <CardHeader className="bg-white text-center">
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t("sponsors.form.title")}
            </CardTitle>
            <p className="text-slate-700 mt-2">
              {t("sponsors.form.subtitle")}
            </p>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label={t("sponsors.form.ariaLabel")}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-800 font-semibold mb-2" htmlFor="name">
                    {t("sponsors.form.fields.name")} *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder={t("sponsors.form.placeholders.name") as string}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-semibold mb-2" htmlFor="company">
                    {t("sponsors.form.fields.company")} *
                  </label>
                  <Input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder={t("sponsors.form.placeholders.company") as string}
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-800 font-semibold mb-2" htmlFor="email">
                    {t("sponsors.form.fields.email")} *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder={t("sponsors.form.placeholders.email") as string}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="block text-slate-800 font-semibold mb-2" htmlFor="phone">
                    {t("sponsors.form.fields.phone")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder={t("sponsors.form.placeholders.phone") as string}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-800 font-semibold mb-2" htmlFor="message">
                  {t("sponsors.form.fields.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder={t("sponsors.form.placeholders.message") as string}
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  aria-busy={status === "sending"}
                >
                  {status === "sending" ? t("sponsors.form.sending") : (
                    <>
                      <Mail className="mr-2" size={20} aria-hidden="true" />
                      {t("sponsors.form.submit")}
                    </>
                  )}
                </Button>
              </div>

              {status === "ok" && (
                <p className="text-center text-green-700 mt-4">
                  {t("sponsors.form.success")}
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
            {t("sponsors.direct.title")}
          </h3>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:souvenir.due@gmail.com"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={t("sponsors.direct.emailAria")}
            >
              <Mail className="mr-2" size={20} aria-hidden="true" />
              souvenir.due@gmail.com
            </a>
            <a
              href="tel:+41793101734"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={t("sponsors.direct.phoneAria")}
            >
              <Phone className="mr-2" size={20} aria-hidden="true" />
              +41 79 310 17 34
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
