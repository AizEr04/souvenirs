import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sponsors } from "../components/Sponsors";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />
      <Sponsors />
      <Footer />
    </div>
  );
}
