import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function Index() {
  return (
    <>
      <header className="hero">
        <img className="bg" src="/hero.jpg" alt="Event Hero Bild" />
        <div className="container">
          <h1>Souvenir’s</h1>
          <p className="sub">Gemeinsam Musik, Kultur &amp; Sport erleben</p>
          <div className="cta">
            <a className="btn primary" href="#events">Zu den Events</a>
            <a className="btn ghost" href="/ueber-uns">Über uns</a>
          </div>
        </div>
      </header>

      <main>
        <section id="events" className="section">
          <div className="container">
            <h2>Kommende Events</h2>
            <div className="events-grid">
              {events.map((ev, i) => <EventCard key={i} {...ev} />)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
