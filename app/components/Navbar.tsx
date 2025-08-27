import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container inner">
        <Link className="brand" to="/">Souvenir’s</Link>
        <div className="menu" role="navigation" aria-label="Hauptnavigation">
          <Link to="/ueber-uns">Über uns</Link>
          <Link to="/infos">Infos</Link>
          <Link to="/sponsoren">Sponsoren</Link>
        </div>
      </div>
    </nav>
  );
}
