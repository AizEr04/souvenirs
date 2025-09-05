// app/routes.ts
import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  // Startseite rendert in app/root.tsx bei "/"
  index("routes/_index.tsx"),

  // Weitere Seiten:
  route("ueber-uns", "routes/ueber-uns.tsx"),
  route("infos", "routes/infos.tsx"),
  route("sponsoren", "routes/sponsoren.tsx"),
  route("info/:slug", "routes/info.$slug.tsx"),
  // Optional: Catch-all 404 (eigene Seite)
  // route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
