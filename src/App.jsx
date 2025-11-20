import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-teal-50">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <footer className="border-t border-teal-400/20 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-teal-200/70 text-sm">© {new Date().getFullYear()} NobleTrades – Alle Rechte vorbehalten.</p>
          <div className="text-sm text-teal-200/70">Made for traders. Stay disciplined.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
