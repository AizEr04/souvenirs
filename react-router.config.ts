import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: "/souvenirs",
  prerender: ["/"],
} satisfies Config;
