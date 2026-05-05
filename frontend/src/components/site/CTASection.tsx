import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";

const TICKER_ITEMS = [
  "5,000+ Service Nodes", "23 Subsidiaries", "72 Business Verticals",
  "5 Global Regions", "12 Indian Cities", "Pan-India Footprint",
  "Mission Gold Bird India", "₹96,700 Cr Target",
];

const CTA_PATHS = [
  {
    n: "01", icon: TrendingUp,
    title: "Invest with Jigisha",
    desc: "Explore high-growth opportunities across 23 subsidiaries and 72 verticals targeting ₹96,700 Cr.",
    label: "Request Deck", to: "/contact",
  },
  {
    n: "02", icon: Zap,
    title: "Strategic Partnership",
    desc: "Forge alliances leveraging our pan-India network of 5,000+ nodes across 5 global regions.",
    label: "Propose Alliance", to: "/contact",
  },
  {
    n: "03", icon: ArrowRight,
    title: "Get in Touch",
    desc: "Connect with our leadership team for any inquiry, collaboration, or partnership proposal.",
    label: "Contact Us Now", to: "/contact",
  },
];

export function CTASection() {
  return (
    <section className="bg-background text-foreground relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-dots opacity-[0.4]" />
      <div
        className="absolute right-0 top-1/2 font-display leading-none select-none pointer-events-none text-foreground/4"
        style={{ fontSize: "clamp(180px, 26vw, 400px)", transform: "translateY(-50%) translateX(20%)" }}
      >
        →
      </div>

      {/* Ticker */}
      <div className="border-b border-border overflow-hidden py-3 marquee-mask">
        <div className="ticker flex whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mono text-[12px] tracking-widest uppercase text-accent/60 px-8 shrink-0">
              <span className="w-1 h-1 bg-accent/70 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-14 lg:py-20">

        {/* Headline */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
            <span className="mono text-[12px] tracking-widest uppercase text-accent">Next Step</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.88]">
              Ready to partner<br />
              <span className="italic text-accent">with us?</span>
            </h2>
            <div className="flex flex-col gap-6 self-end">
              <p className="text-muted-foreground leading-relaxed">
                Choose your path — whether you are looking to invest, build alliances,
                or simply start a conversation with our leadership team.
              </p>
              <div className="h-px bg-accent/20" />
              <div className="grid grid-cols-3 gap-4">
                {[
                  { n: "23",     label: "Subsidiaries"   },
                  { n: "5,000+", label: "Service Nodes"  },
                  { n: "5",      label: "Global Regions" },
                ].map(({ n, label }) => (
                  <div key={label} className="border border-accent/20 bg-white/60 px-4 py-3 backdrop-blur-sm">
                    <div className="font-display text-2xl text-accent leading-none">{n}</div>
                    <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mt-1 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Path cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 mb-16">
          {CTA_PATHS.map(({ n, icon: Icon, title, desc, label, to }) => (
            <div key={n} className="flex flex-col">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-display text-xl text-foreground">{title}</span>
                <span className="mono text-[12px] tracking-widest uppercase text-accent/60">{n}</span>
              </div>
              <Link
                to={to}
                className="group relative border border-accent/20 bg-white flex flex-col p-7 overflow-hidden transition-all duration-300 flex-1 hover:border-accent/60 hover:shadow-md hover:shadow-accent/10"
              >
                <div className="absolute bottom-0 right-3 font-display text-[90px] leading-none select-none pointer-events-none text-accent/[0.07] group-hover:text-accent/[0.13] transition-colors duration-300">
                  {n}
                </div>
                <div className="mb-8 relative">
                  <Icon className="h-6 w-6 text-accent/60 group-hover:text-accent transition-colors duration-200" />
                </div>
                <p className="text-sm leading-relaxed mb-8 relative flex-1 text-muted-foreground">{desc}</p>
                <div className="flex items-center gap-2 mono text-[12px] tracking-widest uppercase relative text-accent">
                  <span>{label}</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-accent/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-end">
          <div>
            <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1.5">Headquarters</div>
            <div className="text-sm text-foreground/75 leading-snug">I-Square Corporate Park,<br />Ahmedabad, Gujarat</div>
          </div>
          <div>
            <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1.5">Registered Office</div>
            <div className="text-sm text-foreground/75 leading-snug">Bhopal,<br />Madhya Pradesh</div>
          </div>
          <div>
            <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1.5">Website</div>
            <div className="text-sm text-foreground/75">jigisha.in</div>
          </div>
          <div className="hidden md:flex items-end justify-end">
            <div className="h-px w-full bg-linear-to-l from-accent/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
