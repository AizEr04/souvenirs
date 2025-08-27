import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import { Links, Meta, Scripts, ScrollRestoration } from "react-router";

// Variante A: CSS via links()-Export
import stylesheetUrl from "./styles.css?url";
export function links() {
  return [{ rel: "stylesheet", href: stylesheetUrl }];
}

// (Optional) Meta-Tags
export function meta() {
  return [{ title: "Souvenir’s – Musik · Kultur · Sport" }];
}

export default function Root() {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />       {/* ← WICHTIG: rendert <link rel="stylesheet" ...> */}
      </head>
      <body>
        <Navbar />
        <Outlet />      {/* Seiteninhalt */}
        <ScrollRestoration />
        <Scripts />     {/* Bundles/Skripte */}
      </body>
    </html>
  );
}
