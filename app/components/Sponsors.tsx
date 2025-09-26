import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, Heart, Star, Users, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

// Zod Schema – schlank & robust
const schema = z.object({
  name: z.string().min(2, "Bitte einen gültigen Namen eingeben."),
  company: z.string().min(2, "Bitte einen Firmennamen eingeben."),
  email: z.string().email("Bitte eine gültige E-Mail eingeben."),
  phone: z
    .string()
    .optional()
    .transform((v) => (v ?? "").trim())
    .refine(
      (v) => v === "" || /^[+()\d\s-]{6,}$/.test(v),
      "Bitte eine gültige Telefonnummer eingeben (oder leer lassen)."
    ),
  message: z
    .string()
    .min(10, "Bitte mindestens 10 Zeichen schreiben.")
    .max(2000, "Maximal 2000 Zeichen."),
  // Honeypot (soll leer bleiben)
  website: z.string().max(0, "Bot erkannt."),
});

type FormData = z.infer<typeof schema>;

export function Sponsors() {
  const { t } = useTranslation();

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    website: "", // Honeypot
  });

  const envMissing = !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Live-Validierung pro Feld (optional, angenehm)
    try {
      const single = schema.pick({ [name]: true } as any);
      single.parse({ [name]: value });
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err) {
      if (err instanceof z.ZodError) {
        setFieldErrors((prev) => ({ ...prev, [name]: err.issues[0]?.message || "" }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    // Vollvalidierung
    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as string;
        errs[key] = i.message;
      });
      setFieldErrors(errs);
      setStatus("error");
      setError(t("sponsors.form.errorMessage") as string);
      return;
    }

    // ENV vorhanden?
    if (envMissing) {
      setStatus("error");
      setError("E-Mail-Dienst nicht konfiguriert. Bitte ENV-Variablen setzen.");
      return;
    }

    // Honeypot
    if (formData.website) {
      setStatus("ok"); // wir tun so als ok, aber schicken nichts
      setFormData({ name: "", company: "", email: "", phone: "", message: "", website: "" });
      return;
    }

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("EmailJS result:", result.text);
      setStatus("ok");
      setFormData({ name: "", company: "", email: "", phone: "", message: "", website: "" });
      setFieldErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setError(t("sponsors.form.errorMessage") as string);
    }
  };

  return (
    <div className="w-full px-6 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        {/* Überschrift */}
        <div className="text-center mb-12">
          <h2 className="text-4xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            {t("sponsors.heading")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Status / Intro */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl border-l-4 border-gradient-to-b from-yellow-500 to-orange-600 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="text-white" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t("sponsors.cta.title")}</h3>
            <p className="text-slate-800 leading-relaxed max-w-2xl mx-auto">{t("sponsors.cta.text")}</p>
          </div>

          {envMissing && (
            <p className="mt-4 text-sm text-red-600">
              ⚠️ EmailJS nicht konfiguriert. Bitte <code>.env.local</code> mit <code>VITE_EMAILJS_*</code> Werten anlegen.
            </p>
          )}
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
              <h4 className="text-lg mb-2 font-semibold text-slate-800">{t("sponsors.benefits.reach.title")}</h4>
              <p className="text-slate-700">{t("sponsors.benefits.reach.text")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-pink-500 to-orange-500">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="text-white" size={24} aria-hidden="true" />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">{t("sponsors.benefits.brand.title")}</h4>
              <p className="text-slate-700">{t("sponsors.benefits.brand.text")}</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-gradient-to-r from-orange-500 to-yellow-500">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="text-white" size={24} aria-hidden="true" />
              </div>
              <h4 className="text-lg mb-2 font-semibold text-slate-800">{t("sponsors.benefits.community.title")}</h4>
              <p className="text-slate-700">{t("sponsors.benefits.community.text")}</p>
            </div>
          </div>
        </div>

        {/* Formular */}
        <Card className="bg-white shadow-xl border-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />
          <CardHeader className="bg-white text-center">
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t("sponsors.form.title")}
            </CardTitle>
            <p className="text-slate-700 mt-2">{t("sponsors.form.subtitle")}</p>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label={t("sponsors.form.ariaLabel")}>
              {/* Honeypot (unsichtbar) */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

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
                    className={`border-slate-300 focus:border-purple-500 focus:ring-purple-500 ${fieldErrors.name ? "border-red-500" : ""}`}
                    placeholder={t("sponsors.form.placeholders.name") as string}
                    autoComplete="name"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "err-name" : undefined}
                  />
                  {fieldErrors.name && <p id="err-name" className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>}
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
                    className={`border-slate-300 focus:border-purple-500 focus:ring-purple-500 ${fieldErrors.company ? "border-red-500" : ""}`}
                    placeholder={t("sponsors.form.placeholders.company") as string}
                    autoComplete="organization"
                    aria-invalid={!!fieldErrors.company}
                    aria-describedby={fieldErrors.company ? "err-company" : undefined}
                  />
                  {fieldErrors.company && <p id="err-company" className="mt-1 text-sm text-red-600">{fieldErrors.company}</p>}
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
                    className={`border-slate-300 focus:border-purple-500 focus:ring-purple-500 ${fieldErrors.email ? "border-red-500" : ""}`}
                    placeholder={t("sponsors.form.placeholders.email") as string}
                    autoComplete="email"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "err-email" : undefined}
                  />
                  {fieldErrors.email && <p id="err-email" className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>}
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
                    className={`border-slate-300 focus:border-purple-500 focus:ring-purple-500 ${fieldErrors.phone ? "border-red-500" : ""}`}
                    placeholder={t("sponsors.form.placeholders.phone") as string}
                    autoComplete="tel"
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? "err-phone" : undefined}
                  />
                  {fieldErrors.phone && <p id="err-phone" className="mt-1 text-sm text-red-600">{fieldErrors.phone}</p>}
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
                  className={`border-slate-300 focus:border-purple-500 focus:ring-purple-500 ${fieldErrors.message ? "border-red-500" : ""}`}
                  placeholder={t("sponsors.form.placeholders.message") as string}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "err-message" : undefined}
                />
                {fieldErrors.message && <p id="err-message" className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>}
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={status === "sending" || envMissing}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-60"
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
          <h3 className="text-xl font-semibold text-slate-800 mb-4">{t("sponsors.direct.title")}</h3>
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
