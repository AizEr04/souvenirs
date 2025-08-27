type Props = {
    title: string;
    date: string;
    time: string;
    location: string;
    badge?: string;
  };
  
  export default function EventCard({ title, date, time, location, badge }: Props) {
    return (
      <article className="event-card">
        <div className="event-meta">
          {badge && <span className="badge">{badge}</span>}
          <span>{date}</span>
          <span>{time} Uhr</span>
          <span>{location}</span>
        </div>
        <h3 className="event-title">{title}</h3>
        <div className="card-actions">
          <a className="btn secondary" href="#">Details</a>
          <a className="btn" style={{ background: "transparent", border: "1.5px solid #ddd" }} href="#">Tickets</a>
        </div>
      </article>
    );
  }
  