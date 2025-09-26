import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./styles.css";
import faviconUrl from "./assets/souvenirs-logo.png?url";
import "./i18n/i18n";

export function links() {
  return [{ rel: "icon", href: faviconUrl, type: "image/x-icon" }];
}

export function meta() {
  return [{ title: "Souvenirs" }];
}

export default function Root() {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
