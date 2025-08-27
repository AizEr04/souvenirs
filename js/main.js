const events = [
  { title: "Event 1", date: "15.09.2025", time: "18:00", location: "Stadthalle", badge: "Neu" },
  { title: "Event 2", date: "20.10.2025", time: "19:30", location: "Open Air Park", badge: "Hot" },
  { title: "Event 3", date: "05.11.2025", time: "17:00", location: "Kulturzentrum", badge: "Free" },
  { title: "Event 4", date: "18.12.2025", time: "20:00", location: "Arena", badge: "Neu" }
];

const grid = document.getElementById("eventsGrid");

function cardTemplate(ev){
  return `
  <article class="event-card">
    <div class="event-meta">
      <span class="badge">${ev.badge}</span>
      <span>${ev.date}</span>
      <span>${ev.time} Uhr</span>
      <span>${ev.location}</span>
    </div>
    <h3 class="event-title">${ev.title}</h3>
    <div class="card-actions">
      <a class="btn secondary" href="#">Details</a>
      <a class="btn" style="background:transparent;border:1.5px solid #ddd" href="#">Tickets</a>
    </div>
  </article>`;
}

grid.innerHTML = events.map(cardTemplate).join("");