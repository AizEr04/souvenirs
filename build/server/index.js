import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Link, Outlet } from "react-router-dom";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "navbar", children: /* @__PURE__ */ jsxs("div", { className: "container inner", children: [
    /* @__PURE__ */ jsx(Link, { className: "brand", to: "/", children: "Souvenir’s" }),
    /* @__PURE__ */ jsxs("div", { className: "menu", role: "navigation", "aria-label": "Hauptnavigation", children: [
      /* @__PURE__ */ jsx(Link, { to: "/ueber-uns", children: "Über uns" }),
      /* @__PURE__ */ jsx(Link, { to: "/infos", children: "Infos" }),
      /* @__PURE__ */ jsx(Link, { to: "/sponsoren", children: "Sponsoren" })
    ] })
  ] }) });
}
const root = UNSAFE_withComponentProps(function Root() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx("footer", {
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "cols",
          children: [/* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("strong", {
              children: "Souvenir’s"
            }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("small", {
              children: "Musik · Kultur · Sport"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("strong", {
              children: "Kontakt"
            }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("small", {
              children: /* @__PURE__ */ jsx("a", {
                href: "mailto:info@souvenirs.club",
                children: "info@souvenirs.club"
              })
            })]
          }), /* @__PURE__ */ jsxs("div", {
            children: [/* @__PURE__ */ jsx("strong", {
              children: "Folge uns"
            }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("small", {
              children: [/* @__PURE__ */ jsx("a", {
                href: "#",
                children: "Instagram"
              }), " · ", /* @__PURE__ */ jsx("a", {
                href: "#",
                children: "TikTok"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          style: {
            marginTop: 14
          },
          children: /* @__PURE__ */ jsx("small", {
            children: "© 2025 Souvenir’s"
          })
        })]
      })
    })]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
function EventCard({ title, date, time, location, badge }) {
  return /* @__PURE__ */ jsxs("article", { className: "event-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "event-meta", children: [
      badge && /* @__PURE__ */ jsx("span", { className: "badge", children: badge }),
      /* @__PURE__ */ jsx("span", { children: date }),
      /* @__PURE__ */ jsxs("span", { children: [
        time,
        " Uhr"
      ] }),
      /* @__PURE__ */ jsx("span", { children: location })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "event-title", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "card-actions", children: [
      /* @__PURE__ */ jsx("a", { className: "btn secondary", href: "#", children: "Details" }),
      /* @__PURE__ */ jsx("a", { className: "btn", style: { background: "transparent", border: "1.5px solid #ddd" }, href: "#", children: "Tickets" })
    ] })
  ] });
}
const events = [
  { title: "Event 1", date: "15.09.2025", time: "18:00", location: "Stadthalle", badge: "Neu" },
  { title: "Event 2", date: "20.10.2025", time: "19:30", location: "Open Air Park", badge: "Hot" },
  { title: "Event 3", date: "05.11.2025", time: "17:00", location: "Kulturzentrum", badge: "Free" }
];
const _index = UNSAFE_withComponentProps(function Index() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("header", {
      className: "hero",
      children: [/* @__PURE__ */ jsx("img", {
        className: "bg",
        src: "/hero.jpg",
        alt: "Event Hero Bild"
      }), /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx("h1", {
          children: "Souvenir’s"
        }), /* @__PURE__ */ jsx("p", {
          className: "sub",
          children: "Gemeinsam Musik, Kultur & Sport erleben"
        }), /* @__PURE__ */ jsxs("div", {
          className: "cta",
          children: [/* @__PURE__ */ jsx("a", {
            className: "btn primary",
            href: "#events",
            children: "Zu den Events"
          }), /* @__PURE__ */ jsx("a", {
            className: "btn ghost",
            href: "/ueber-uns",
            children: "Über uns"
          })]
        })]
      })]
    }), /* @__PURE__ */ jsx("main", {
      children: /* @__PURE__ */ jsx("section", {
        id: "events",
        className: "section",
        children: /* @__PURE__ */ jsxs("div", {
          className: "container",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Kommende Events"
          }), /* @__PURE__ */ jsx("div", {
            className: "events-grid",
            children: events.map((ev, i) => /* @__PURE__ */ jsx(EventCard, {
              ...ev
            }, i))
          })]
        })
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _index
}, Symbol.toStringTag, { value: "Module" }));
const ueberUns = UNSAFE_withComponentProps(function UeberUns() {
  return /* @__PURE__ */ jsx("main", {
    className: "section",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container",
      children: [/* @__PURE__ */ jsx("h2", {
        children: "Über uns"
      }), /* @__PURE__ */ jsx("p", {
        children: "Hier könnt ihr eure Mission, Teammitglieder und die Geschichte des Vereins vorstellen."
      })]
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ueberUns
}, Symbol.toStringTag, { value: "Module" }));
const infos = UNSAFE_withComponentProps(function Infos() {
  return /* @__PURE__ */ jsx("main", {
    className: "section",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container",
      children: [/* @__PURE__ */ jsx("h2", {
        children: "Infos"
      }), /* @__PURE__ */ jsx("p", {
        children: "Allgemeine Informationen zu Mitgliedschaft, Teilnahmebedingungen und Kontaktmöglichkeiten."
      })]
    })
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: infos
}, Symbol.toStringTag, { value: "Module" }));
const sponsoren = UNSAFE_withComponentProps(function Sponsoren() {
  return /* @__PURE__ */ jsx("main", {
    className: "section",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container",
      children: [/* @__PURE__ */ jsx("h2", {
        children: "Sponsoren"
      }), /* @__PURE__ */ jsx("p", {
        children: "Stellt eure Partner und Unterstützer vor. Logos können hier als Raster platziert werden."
      })]
    })
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sponsoren
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/souvenirs/assets/entry.client-BSG4yFRw.js", "imports": ["/souvenirs/assets/chunk-PVWAREVJ-C4uTxU6k.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/souvenirs/assets/root-DZ4Q8KX2.js", "imports": ["/souvenirs/assets/chunk-PVWAREVJ-C4uTxU6k.js"], "css": ["/souvenirs/assets/root-T26_qF76.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/souvenirs/assets/_index-CtitZ39N.js", "imports": ["/souvenirs/assets/chunk-PVWAREVJ-C4uTxU6k.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/ueber-uns": { "id": "routes/ueber-uns", "parentId": "root", "path": "ueber-uns", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/souvenirs/assets/ueber-uns-wambCNtW.js", "imports": ["/souvenirs/assets/chunk-PVWAREVJ-C4uTxU6k.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/infos": { "id": "routes/infos", "parentId": "root", "path": "infos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/souvenirs/assets/infos-D-_uEnQc.js", "imports": ["/souvenirs/assets/chunk-PVWAREVJ-C4uTxU6k.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/sponsoren": { "id": "routes/sponsoren", "parentId": "root", "path": "sponsoren", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/souvenirs/assets/sponsoren--DaVlaW9.js", "imports": ["/souvenirs/assets/chunk-PVWAREVJ-C4uTxU6k.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/souvenirs/assets/manifest-1441d73e.js", "version": "1441d73e", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/souvenirs/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/ueber-uns": {
    id: "routes/ueber-uns",
    parentId: "root",
    path: "ueber-uns",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/infos": {
    id: "routes/infos",
    parentId: "root",
    path: "infos",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/sponsoren": {
    id: "routes/sponsoren",
    parentId: "root",
    path: "sponsoren",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
