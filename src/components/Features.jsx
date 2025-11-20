import { Video, SignalHigh, Brain, Sparkles } from "lucide-react";

const features = [
  {
    icon: SignalHigh,
    title: "Live Trading",
    desc: "Tägliche Live-Sessions mit klaren Setups und Risikomanagement.",
  },
  {
    icon: Sparkles,
    title: "Signale",
    desc: "Präzise Ein- & Ausstiege – direkt in deinem Discord.",
  },
  {
    icon: Brain,
    title: "Analysen",
    desc: "Marktanalysen, Levels und Playbooks für die wichtigsten Märkte.",
  },
  {
    icon: Video,
    title: "Traders Academy",
    desc: "Strukturierte Lernvideos von Basics bis fortgeschrittenen Strategien.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,194,0.08),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Was dich erwartet
          </h2>
          <p className="mt-3 text-teal-100/80">
            Alles, was du brauchst, um konstant bessere Entscheidungen zu treffen.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-teal-400/20 bg-slate-900/60 p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-400/30">
                <Icon className="h-5 w-5 text-teal-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-teal-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
