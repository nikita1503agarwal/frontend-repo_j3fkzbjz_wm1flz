const candles = [
  // x, baseY, bodyHeight, bodyWidth, wickTop, wickBottom, bullish
  { x: 80,  base: 260, h: 38, w: 10, wt: 18, wb: 22, up: true },
  { x: 140, base: 240, h: 26, w: 10, wt: 14, wb: 16, up: false },
  { x: 200, base: 250, h: 44, w: 10, wt: 20, wb: 18, up: true },
  { x: 260, base: 230, h: 32, w: 10, wt: 16, wb: 20, up: false },
  { x: 320, base: 245, h: 28, w: 10, wt: 12, wb: 16, up: true },
  { x: 380, base: 235, h: 50, w: 10, wt: 18, wb: 24, up: true },
  { x: 440, base: 255, h: 30, w: 10, wt: 16, wb: 18, up: false },
  { x: 500, base: 242, h: 36, w: 10, wt: 18, wb: 18, up: true },
  { x: 560, base: 238, h: 24, w: 10, wt: 12, wb: 14, up: false },
  { x: 620, base: 252, h: 42, w: 10, wt: 20, wb: 18, up: true },
];

const Row = ({ y = 0, scale = 1, opacity = 0.35, delay = 0 }) => (
  <svg
    className="absolute left-1/2 -translate-x-1/2 animate-float"
    style={{ top: y, transformOrigin: '50% 50%', animationDelay: `${delay}s` }}
    width={800 * scale}
    height={320 * scale}
    viewBox="0 0 700 300"
    fill="none"
  >
    {candles.map((c, i) => {
      const bodyY = c.up ? c.base - c.h : c.base - c.h / 3;
      const color = c.up ? '#22d3ee' /* cyan-400 */ : '#14b8a6' /* teal-500 */;
      return (
        <g key={i} opacity={opacity} className="drop-shadow-[0_0_20px_rgba(20,184,166,0.08)]">
          {/* Wick */}
          <rect x={c.x + c.w / 2 - 1} y={c.base - c.h - c.wt} width={2} height={c.h + c.wt + c.wb} fill={color} opacity="0.5" />
          {/* Body */}
          <rect x={c.x} y={bodyY} width={c.w} height={c.h} rx={2} fill={color} />
        </g>
      );
    })}
    {/* Subtle line graph */}
    <polyline
      points="40,260 90,245 140,255 190,230 240,240 290,220 340,235 390,210 440,225 490,200 540,215 590,198 640,210"
      stroke="#2dd4bf"
      strokeWidth="2"
      opacity="0.25"
      fill="none"
      className="[filter:drop-shadow(0_0_10px_rgba(45,212,191,0.15))]"
    />
  </svg>
);

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Layer 1: soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04121a] via-[#071923] to-[#020a0f] opacity-95" />

      {/* Layer 2: animated grid */}
      <div className="absolute inset-0 bg-grid opacity-30 animate-bg-pan" />

      {/* Layer 3: blurred color glows */}
      <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      {/* Layer 4: SVG chart rows */}
      <div className="absolute inset-0">
        <Row y={120} scale={1} opacity={0.28} delay={0} />
        <Row y={340} scale={1.05} opacity={0.22} delay={2.5} />
        <Row y={560} scale={1.1} opacity={0.18} delay={4.5} />
      </div>
    </div>
  );
};

export default Background;
