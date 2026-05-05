import { ArrowRight, Zap, ShieldCheck, Factory, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "@/components/site/PageShell";

const SERVICES = [
  {
    code: "RWY",
    title: "Railway Services",
    slug: "railway-services",
    blurb: "Precision manufacturing and specialized engineering for Indian Railways production units and maintenance depots.",
    items: [
      "Precision components & approved raw materials",
      "Electrical & mechanical fabrication systems",
      "Installation, testing & commissioning support",
      "On-site post-sales engineering & maintenance",
    ],
    icon: Factory
  },
  {
    code: "MET",
    title: "Metro Rail Services",
    slug: "metro-rail-services",
    blurb: "End-to-end product delivery and mission-critical services for urban transit systems across India.",
    items: [
      "Project supplies for metro depots & stations",
      "Specialised installation & retrofit crews",
      "Full-cycle maintenance & overhaul contracts",
      "Advanced compliance & safety governance",
    ],
    icon: Zap
  },
  {
    code: "IND",
    title: "Industrial Services",
    slug: "industrial-services",
    blurb: "Driving efficiency through preventive maintenance, automation, and heavy commissioning for production plants.",
    items: [
      "Predictive maintenance & condition monitoring",
      "HVAC, compressor & boiler plant optimization",
      "Industrial automation & IoT ecosystem solutions",
      "Heavy equipment erection & high-load commissioning",
    ],
    icon: Settings
  },
  {
    code: "AMC",
    title: "Commercial & Industrial AMC",
    slug: "amc-services",
    blurb: "SLA-based execution models with guaranteed uptime for critical industrial and commercial installations.",
    items: [
      "Annual Maintenance Contracts (AMC)",
      "Comprehensive Maintenance Contracts (CMC)",
      "Rapid Response Teams (RRT) for emergency recovery",
      "SLA-driven execution with transparency dashboards",
    ],
    icon: ShieldCheck
  },
];

export default function Services() {
  return (
    <PageShell>
      <ServicesHero />
      <ServiceGrid />
      <CTASection />
    </PageShell>
  );
}

function ServicesHero() {
  return (
    <section className="bg-primary text-primary-foreground border-b border-border relative overflow-hidden min-h-[70vh] flex flex-col justify-center">
      <div className="absolute inset-0 bg-blueprint opacity-[0.05] mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-10 relative z-10 py-24">
        <div className="max-w-4xl">

          
          <h1 className="font-display leading-[0.82] tracking-tighter reveal" 
              style={{ fontSize: "clamp(3.5rem, 8vw, 9rem)", animationDelay: "300ms" }}>
            Specialist <br />
            <span className="italic text-accent">Services.</span>
          </h1>
          
          <p className="mt-12 text-primary-foreground/50 text-xl lg:text-2xl leading-relaxed max-w-2xl font-light reveal"
             style={{ animationDelay: "500ms" }}>
            A next-generation industrial solutions provider — combining advanced technology, deep domain expertise, and a nationwide service network.
          </p>

          <div className="mt-12 flex items-center gap-10 reveal" style={{ animationDelay: "700ms" }}>
            <div className="flex flex-col">
              <span className="mono text-[11px] tracking-[0.4em] uppercase text-primary-foreground/30 mb-2">Practice Areas</span>
              <span className="mono text-[11px] font-bold tracking-widest text-primary-foreground/80">04 CORE DIVISIONS</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/10" />
            <div className="flex flex-col">
              <span className="mono text-[11px] tracking-[0.4em] uppercase text-primary-foreground/30 mb-2">Service Nodes</span>
              <span className="mono text-[11px] font-bold tracking-widest text-primary-foreground/80">2,000+ NATIONWIDE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="bg-background py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-10 space-y-32 lg:space-y-64">
        {SERVICES.map((s, i) => (
          <article key={s.code} className="grid lg:grid-cols-12 gap-16 items-start relative group">
            {/* Background Number */}
            <div className="absolute top-0 right-0 font-display text-[20rem] lg:text-[35rem] leading-none text-foreground/[0.02] select-none pointer-events-none -translate-y-1/2 translate-x-1/4 group-hover:text-accent/[0.04] transition-colors duration-1000">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <s.icon className="h-6 w-6 text-accent" />
                <span className="mono text-[11px] font-bold tracking-[0.4em] uppercase text-accent">{s.code} DIVISION</span>
              </div>
              <h2 className="font-display text-5xl lg:text-7xl leading-tight tracking-tighter mb-8">
                {s.title.split(' ')[0]} <br />
                <span className="italic text-accent">{s.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed font-light mb-12">
                {s.blurb}
              </p>
              <Link 
                to={`/services/${s.slug}`} 
                className="group/btn flex items-center gap-6 mono text-[11px] font-bold tracking-[0.3em] uppercase text-accent"
              >
                VIEW CAPABILITIES 
                <div className="h-12 w-12 border border-accent/30 rounded-full flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-white transition-all">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            </div>

            <div className="lg:col-span-7 relative z-10">
              <div className="border border-border bg-background shadow-2xl overflow-hidden">
                <div className="grid grid-cols-12 border-b border-border bg-primary text-primary-foreground mono text-[12px] tracking-[0.3em] uppercase font-bold">
                  <div className="col-span-1 p-6 border-r border-border/20 text-accent opacity-50 italic">#</div>
                  <div className="col-span-11 p-6">Technical Capabilities Matrix</div>
                </div>
                <div className="divide-y divide-border">
                  {s.items.map((it, idx) => (
                    <div key={it} className="grid grid-cols-12 hover:bg-secondary/20 transition-all group/row">
                      <div className="col-span-1 p-6 border-r border-border mono text-[11px] text-accent/40 group-hover/row:text-accent tabular-nums transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="col-span-11 p-6 font-display text-2xl lg:text-3xl text-foreground/80 group-hover/row:text-accent transition-colors">
                        {it}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/10 p-6 border-t border-border flex justify-between items-center">
                  <span className="mono text-[11px] text-muted-foreground uppercase tracking-widest">ISO 9001:2015 Compliant Deployment</span>
                  <div className="flex gap-1">
                    {[1,2,3].map(d => <div key={d} className="h-1 w-1 bg-accent rounded-full opacity-30" />)}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
