import { ArrowRight, ShieldCheck, LineChart } from "lucide-react";

const Hero = () => {
  const discordUrl = "https://discord.gg/your-invite"; // Replace with your real invite

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#04121a] via-[#071923] to-[#020a0f]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 ring-1 ring-teal-400/30">
            <LineChart className="h-5 w-5 text-teal-300" />
            <div className="absolute inset-0 rounded-xl bg-teal-500/10 blur-sm" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">NobleTrades</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-teal-200/80 hover:text-teal-200 transition">Features</a>
          <a href="#pricing" className="text-teal-200/80 hover:text-teal-200 transition">Preise</a>
          <a href={discordUrl} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 px-4 py-2 font-medium text-slate-900 shadow-teal-500/30 shadow-md hover:from-teal-400 hover:to-cyan-300 transition">
            Jetzt beitreten <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-teal-200 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              Deutschlands moderne Daytrading Community
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Lerne schneller. Handle smarter. Gewinne gemeinsam.
            </h1>
            <p className="mt-6 text-lg text-teal-100/80 max-w-xl">
              NobleTrades verbindet dich mit Tradern, Live-Sessions und klaren Signalen. Dunkles, fokussiertes Design – und Inhalte, die wirklich performen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={discordUrl} target="_blank" rel="noreferrer"
                 className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-teal-500/30 hover:from-teal-400 hover:to-cyan-300 transition">
                Trete unserem Discord bei
                <ArrowRight className="h-5 w-5 transition -translate-x-0 group-hover:translate-x-0.5" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-teal-200 ring-1 ring-teal-400/30 hover:bg-teal-500/10 transition">
                Preise ansehen
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-teal-200/80">
              <ShieldCheck className="h-5 w-5 text-teal-300" />
              <span>14 Tage risikofrei testen – monatlich kündbar</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-teal-400/20 bg-slate-900/60 p-4 backdrop-blur shadow-2xl">
              <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 ring-1 ring-white/5">
                <div className="text-teal-200/80 text-sm">Live Orderflow</div>
                <div className="mt-4 h-56 rounded-lg bg-[linear-gradient(#0b1620,transparent),linear-gradient(90deg,rgba(20,184,166,0.35)_1px,transparent_1px),linear-gradient(rgba(20,184,166,0.35)_1px,transparent_1px)] bg-[size:100%_100%,40px_100%,100%_28px]" />
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg bg-slate-800/60 p-3 ring-1 ring-teal-400/20">
                    <div className="text-2xl font-bold text-white">92%</div>
                    <div className="text-xs text-teal-200/70">Signal-Qualität</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3 ring-1 ring-teal-400/20">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-teal-200/70">Community</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3 ring-1 ring-teal-400/20">
                    <div className="text-2xl font-bold text-white">+480</div>
                    <div className="text-xs text-teal-200/70">Mitglieder</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-x-10 -bottom-10 -z-10 blur-3xl opacity-40" aria-hidden>
              <div className="h-40 w-full bg-gradient-to-r from-teal-500/40 via-cyan-400/40 to-teal-500/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
