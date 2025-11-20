import { Check, ArrowRight, Crown, Users } from "lucide-react";

const Pricing = () => {
  const discordUrl = "https://discord.gg/your-invite"; // Replace with your real invite

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.1),transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Wähle deinen Zugang
          </h2>
          <p className="mt-3 text-teal-100/80">Starte kostenlos – upgrade jederzeit auf Pro.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Free */}
          <div className="relative rounded-2xl border border-teal-400/20 bg-slate-900/60 p-8">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-400/30">
                <Users className="h-5 w-5 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Free</h3>
            </div>
            <p className="mt-2 text-teal-100/80 text-sm">Community-Chat, ausgewählte Analysen und Einblicke.</p>
            <div className="mt-6 text-4xl font-bold text-white">0€<span className="text-base font-normal text-teal-200/80">/mtl.</span></div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Community-Zugang",
                "Wöchentliche Markt-Updates",
                "Einblick in Premium-Features",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-teal-100/85">
                  <Check className="mt-0.5 h-4 w-4 text-teal-300" /> {item}
                </li>
              ))}
            </ul>
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-teal-200 ring-1 ring-teal-400/30 hover:bg-teal-500/10 transition"
            >
              Kostenlos starten
            </a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border border-teal-400/30 bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-8 ring-1 ring-inset ring-white/5 shadow-xl shadow-teal-500/10">
            <div className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-slate-900">
              Beliebt
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-400/20 ring-1 ring-teal-400/40">
                <Crown className="h-5 w-5 text-teal-200" />
              </div>
              <h3 className="text-xl font-semibold text-white">Pro</h3>
            </div>
            <p className="mt-2 text-teal-100/80 text-sm">Alles für ernsthafte Trader: Live, Signale, Analysen, Academy.</p>
            <div className="mt-6 text-4xl font-bold text-white">40€<span className="text-base font-normal text-teal-200/80">/mtl.</span></div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Live Trading Sessions",
                "Premium Signale in Echtzeit",
                "Tägliche Marktanalysen",
                "Traders Academy Lernvideos",
                "VIP Channels & Support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-teal-100/90">
                  <Check className="mt-0.5 h-4 w-4 text-teal-300" /> {item}
                </li>
              ))}
            </ul>
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-teal-500/30 hover:from-teal-400 hover:to-cyan-300 transition"
            >
              Pro beitreten
              <ArrowRight className="h-5 w-5 transition -translate-x-0 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
