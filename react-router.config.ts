import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,         // SPA-Modus: erzeugt clientseitige Assets
  // Variante A (kein Prerendern): erzeugt SPA-Fallback unter build/client/index.html
  // prerender: [],

  // Variante B (Homepage vor-rendern):
  // erzeugt build/client/index.html (Homepage) + SPA-Fallback unter __spa-fallback.html
  prerender: ["/"],
} satisfies Config;
