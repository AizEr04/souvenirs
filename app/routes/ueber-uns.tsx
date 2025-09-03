import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutUs } from "../components/AboutUs";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
