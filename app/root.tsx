import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <div className="container">
          <div className="cols">
            <div>
              <strong>Souvenir’s</strong><br/>
              <small>Musik · Kultur · Sport</small>
            </div>
            <div>
              <strong>Kontakt</strong><br/>
              <small><a href="mailto:info@souvenirs.club">info@souvenirs.club</a></small>
            </div>
            <div>
              <strong>Folge uns</strong><br/>
              <small><a href="#">Instagram</a> · <a href="#">TikTok</a></small>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <small>© 2025 Souvenir’s</small>
          </div>
        </div>
      </footer>
    </>
  );
}
