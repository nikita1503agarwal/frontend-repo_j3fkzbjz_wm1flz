import { ArrowRight } from "lucide-react";

const CTA = () => {
  const discordUrl = "https://discord.gg/your-invite"; // Replace with your real invite

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.08),transparent_55%)]" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="overflow-hidden rounded-2xl border border-teal-400/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Bereit für den nächsten Schritt?</h3>
              <p className="mt-2 text-teal-100/80">Sichere dir jetzt deinen Platz in der Community und profitiere von Live-Trading, Signalen und der Academy.</p>
            </div>
            <a href={discordUrl} target="_blank" rel="noreferrer"
               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-teal-500/30 hover:from-teal-400 hover:to-cyan-300 transition">
              Jetzt beitreten
              <ArrowRight className="h-5 w-5 transition -translate-x-0 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
