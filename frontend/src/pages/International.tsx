import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "@/components/site/PageShell";
import { Globe2, Ship, Plane, RefreshCw, Package, LineChart, Handshake, Briefcase, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PILLARS = [
  {
    n: "01", t: "Import",
    d: "Worldwide collaborations for import of materials, components, machinery and industrial goods across global supply chains.",
    icon: Ship,
  },
  {
    n: "02", t: "Export",
    d: "Jigisha-sourced and manufactured products delivered to international markets with end-to-end logistics ownership.",
    icon: Plane,
  },
  {
    n: "03", t: "ICBMRO",
    d: "Integrated Cross-Border MRO — maintenance, repair and overhaul services orchestrated across geographies.",
    icon: RefreshCw,
  },
];

const VENTURES = [
  { t: "E-Commerce", d: "Digital storefronts for industrial categories.", icon: Package, col: "lg:col-span-2", size: "text-3xl lg:text-5xl" },
  { t: "Overseas Logistics", d: "Multi-modal freight & customs orchestration.", icon: Ship, col: "lg:col-span-1", size: "text-2xl lg:text-3xl" },
  { t: "Contract Manufacturing", d: "OEM-grade production at scale.", icon: Briefcase, col: "lg:col-span-1", size: "text-2xl lg:text-3xl" },
  { t: "Joint Ventures", d: "Equity-aligned long-horizon partnerships.", icon: Handshake, col: "lg:col-span-1", size: "text-2xl lg:text-3xl" },
  { t: "Collaboration", d: "Technology and market access alliances.", icon: Network, col: "lg:col-span-1", size: "text-2xl lg:text-3xl" },
  { t: "Outsourcing", d: "Process and service delivery at industrial scale.", icon: LineChart, col: "lg:col-span-2", size: "text-3xl lg:text-4xl" },
];

const REGIONS = [
  { name: "USA", coords: "37.0902° N, 95.7129° W" },
  { name: "UK", coords: "55.3781° N, 3.4360° W" },
  { name: "UAE", coords: "23.4241° N, 53.8478° E" },
  { name: "Australia", coords: "25.2744° S, 133.7751° E" },
  { name: "Canada", coords: "56.1304° N, 106.3468° W" },
];

export default function International() {
  return (
    <PageShell>
      <InternationalHero />
      <GlobalPillars />
      <VenturesSection />
      <CTASection />
    </PageShell>
  );
}

function InternationalHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Rotating Globe Graphic */}
      <div className="absolute -right-40 -bottom-40 opacity-10 pointer-events-none mix-blend-overlay">
        <Globe2 className="w-[800px] h-[800px] animate-[spin_120s_linear_infinite]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 py-24">


        <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-tight max-w-5xl">
          A global mandate,<br />
          <span className="italic text-accent">executed locally.</span>
        </h1>

        <p className="mt-10 text-xl md:text-2xl text-primary-foreground/70 max-w-2xl font-light leading-relaxed">
          Jigisha operates an international business arm covering import, export, ICBMRO and a portfolio of cross-border ventures.
        </p>

        {/* Region coordinates */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-primary-foreground/10 pt-10">
          {REGIONS.map((r) => (
            <div key={r.name} className="flex flex-col gap-2 group cursor-default">
              <span className="font-display text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-300">{r.name}</span>
              <span className="mono text-[11px] tracking-widest text-primary-foreground/40">{r.coords}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalPillars() {
  return (
    <section className="py-24 lg:py-40 bg-background border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-display text-5xl lg:text-7xl leading-none mb-6">Trade & <span className="italic text-accent">Logistics.</span></h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connecting industrial supply chains across borders through highly optimized procurement, distribution, and cross-border maintenance networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.n} className="group relative bg-secondary/10 border border-border p-8 lg:p-10 rounded-3xl overflow-hidden hover:bg-secondary/30 transition-colors duration-500">
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex justify-between items-start mb-16">
                  <div className="p-4 bg-background border border-border rounded-2xl shadow-sm group-hover:border-accent/30 group-hover:bg-accent/5 transition-colors">
                    <Icon className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <span className="font-display text-6xl text-muted-foreground/10 group-hover:text-accent/20 transition-colors">
                    {p.n}
                  </span>
                </div>

                <h3 className="font-display text-3xl lg:text-4xl mb-4 group-hover:translate-x-2 transition-transform duration-300">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {p.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VenturesSection() {
  return (
    <section className="py-24 lg:py-40 bg-secondary/20 border-b border-border relative overflow-hidden">
      {/* Decorative blurry gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="mono text-[12px] tracking-widest uppercase text-accent mb-4">Strategic Expansion</div>
            <h2 className="font-display text-5xl lg:text-7xl leading-none">
              Six routes to the <br className="hidden lg:block" /><span className="italic text-accent">global market.</span>
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-3 font-mono text-sm font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors group">
            Partner With Us <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VENTURES.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.t}
                className={`group relative bg-background border border-border p-8 lg:p-10 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 ${v.col}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-14">
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors" />
                    <span className="mono text-[12px] tracking-widest text-muted-foreground/50">V.{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <div>
                    <h3 className={`font-display leading-tight mb-4 group-hover:text-accent transition-colors ${v.size}`}>
                      {v.t}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                      {v.d}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
