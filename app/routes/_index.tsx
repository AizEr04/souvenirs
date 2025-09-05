import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/HomePage";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />
      <div className="pt-15 flex-1 flex flex-col">
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}
