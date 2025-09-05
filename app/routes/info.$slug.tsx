import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";

export default function InfoRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />
      <Info />
      <Footer />
    </div>
  );
}
