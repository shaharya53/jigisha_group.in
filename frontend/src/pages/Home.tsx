import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { ArrowRight, Factory, Building2, HardHat, ShieldCheck, Train, TrainFront, Zap, Truck, Cpu } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

const HEROES = [
  { tag: "Vol. 01", title: "Manufacturing & Supply Excellence.", body: "Precision components, approved raw materials, and end-to-end supply chain management — backed by quality and on-time delivery." },
  { tag: "Vol. 02", title: "Railway & Industrial Solutions.", body: "High-quality products, innovative services and reliable maintenance support for Indian Railways, Metro projects and industrial sectors." },
  { tag: "Vol. 03", title: "Project Support & After-Sales.", body: "Beyond delivery — our experts stay with you through installation, testing, commissioning and post-sales support." },
  { tag: "Vol. 04", title: "Engineering & Technical Services.", body: "From preventive maintenance to full-scale engineering solutions ensuring maximum uptime and performance." },
  { tag: "Vol. 05", title: "Driven by Innovation. Powered by Expertise.", body: "Full-scale engineering for critical infrastructure uptime and performance." },
];

const VERBS = ["Buy", "Sell", "Maintain", "Empower", "Plan", "Build", "Design", "Develop", "Supply", "Stock", "Deliver", "Trade", "Repair", "Operate", "Secure", "Help", "Think", "Execute", "Support", "Co-Operate", "Value", "Care"];

const ENTITIES_DATA = [
  { n: "01", name: "Jigisha Enterprises Ltd.", sector: "Holding & Governance", logo: "/images/all_company/JE.png", to: "https://jigisha.group/" },
  { n: "02", name: "Jigisha Infotech Pvt Ltd", sector: "Technology & IT", logo: "/images/all_company/INFOTECH.png", to: "https://jigishainfotech.com/" },
  { n: "03", name: "Jigisha Media Vision Pvt Ltd", sector: "Media & Communications", logo: "/images/all_company/MEDIA.png", to: "https://jigisha.media/" },
  { n: "04", name: "Jigisha Engineering Pvt Ltd", sector: "Engineering & Manufacturing", logo: "/images/all_company/ENGINEERING.png", to: "https://jigisha.engineering/" },
  { n: "05", name: "Jigisha Envirocare Pvt Ltd", sector: "Environment & Green Tech", logo: "/images/all_company/ENVIROCARE.png", to: "https://www.jigishaenviro.com/" },
  { n: "06", name: "Jigisha Infin Pvt Ltd", sector: "Finance & Credit", logo: "/images/all_company/INFIN.png", to: "https://jigishainfin.com/" },
  { n: "07", name: "Jigisha Logistics Pvt Ltd", sector: "Logistics & Supply Chain", logo: "/images/all_company/LOGISTICS.png", to: "https://logistic.goldbirdindia.com/" },
  { n: "08", name: "Jigisha Industrial Services Pvt Ltd", sector: "Services & Maintenance", logo: "/images/all_company/INDUSTRIES.png", to: "https://jigisha.services" },
];

const ALL_LOGOS = [
  "AGRO", "AUTOMOBILES", "DEFENSE", "ENGINEERING", "ENVIROCARE",
  "GO GLOBAL", "GREEN", "INDUSTRIES", "INFIN", "INFOTECH", "INFRA",
  "INTERNATIONAL", "JE", "JEEPL", "JGC", "JISPL", "JIU",
  "LOGISTICS", "MEDIA", "PHARMA", "RAILTECH", "RETAIL", "TECHNOLOGIES",
];

const SERVICES_CARDS = [
  { code: "01", t: "Railway Services", d: "Manufacturing, supply and on-site execution for Indian Railway production & maintenance units.", to: "/services/railway" },
  { code: "02", t: "Metro Rail Services", d: "Supply and service contracts across India's expanding metro networks.", to: "/services/metro" },
  { code: "03", t: "Industrial Services", d: "Preventive & predictive maintenance, automation and heavy commissioning.", to: "/services/industrial" },
  { code: "04", t: "Commercial AMC", d: "AMC, CMC, RRT and SLA-based execution with uptime guarantees.", to: "/services/commercial" },
];

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Ticker />
      <AboutSection />
      <ClientsSection />
      <LogoTicker />
      <ServicesGrid />
      <FeaturedProjects />
      <IndustriesSection />
      <Universe />
      <GroupSection />
      <CTASection />
    </PageShell>
  );
}

const SLIDE_IMAGES = [
  "/images/home_hero.png",
  "/images/rail_maintenance.png",
  "/images/rail_smart.png",
  "/images/rail_electrical.png",
  "/images/rail_rolling_stock.png",
];

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(v => (v + 1) % HEROES.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const cur = HEROES[active];

  return (
    <section className="flex flex-col lg:flex-row lg:h-[75vh] min-h-[85vh] lg:min-h-[650px] border-b border-border overflow-hidden bg-background">

      {/* ── Left: content panel ── */}
      <div className="flex flex-col justify-center flex-1 px-6 md:px-8 lg:px-14 xl:px-20 py-16 min-w-0">

        {/* Animated heading + body — key forces re-mount → triggers .reveal */}
        <div key={active} className="reveal">
          <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground block mb-5">
            {cur.tag}
          </span>

          {/* Word-stagger title */}
          <h1 className="font-display leading-[0.88] tracking-tighter mb-6" style={{ fontSize: "clamp(2.8rem,5.5vw,6.5rem)" }}>
            {cur.title.split(" ").slice(0, -1).map((word, wi) => (
              <span
                key={wi}
                className="inline-block overflow-hidden mr-[0.22em]"
              >
                <span
                  className="inline-block"
                  style={{ animation: `wordUp 0.55s cubic-bezier(.16,1,.3,1) both`, animationDelay: `${wi * 55}ms` }}
                >
                  {word}
                </span>
              </span>
            ))}
            <br />
            <span
              className="italic text-accent inline-block overflow-hidden"
            >
              <span
                className="inline-block"
                style={{ animation: "wordUp 0.55s cubic-bezier(.16,1,.3,1) both", animationDelay: `${(cur.title.split(" ").length - 1) * 55}ms` }}
              >
                {cur.title.split(" ").slice(-1)[0]}
              </span>
            </span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            {cur.body}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/services" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:bg-accent transition-colors">
            Explore Services <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-3 border border-border px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:border-accent hover:text-accent transition-colors">
            Start a Project
          </Link>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 pt-8 border-t border-border">
          {[["23", "Group entities"], ["72", "Verticals"], ["5,000+", "Service nodes"]].map(([n, l], i) => (
            <div key={l} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
              <AnimatedStat value={n} className="font-display text-3xl sm:text-4xl leading-none block" />
              <div className="mono text-[11px] tracking-widest uppercase text-accent mt-1.5 leading-tight">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: vertical card strips ── */}
      <div
        className="hidden lg:flex items-stretch gap-2.5 p-4 shrink-0 my-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ height: "600px" }}
      >
        {HEROES.map((h, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActive(idx)}
            className="relative overflow-hidden cursor-pointer bg-primary transition-all duration-500 ease-in-out shrink-0"
            style={{
              width: idx === active ? "300px" : "64px",
              minWidth: idx === active ? "300px" : "64px",
              maxWidth: idx === active ? "300px" : "64px",
              borderRadius: "22px",
            }}
          >
            {/* Background image */}
            <img
              src={SLIDE_IMAGES[idx]}
              alt={h.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: idx === active ? 0.35 : 0.15 }}
            />
            <div className="absolute inset-0 bg-primary/60" />

            {/* Collapsed: rotated text — clamp to card height */}
            {idx !== active && (
              <div className="relative h-full flex items-center justify-center py-8 overflow-hidden">
                <span
                  className="font-display text-sm text-primary-foreground/55 select-none"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    maxHeight: "calc(100% - 4rem)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h.title}
                </span>
              </div>
            )}

            {/* Expanded: tag + title + accent rule */}
            {idx === active && (
              <div className="relative h-full flex flex-col justify-between p-7">
                <span className="mono text-[11px] tracking-widest uppercase text-accent">{h.tag}</span>
                <div>
                  <div className="font-display text-2xl text-primary-foreground leading-tight line-clamp-3">
                    {h.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="italic text-accent">{h.title.split(" ").slice(-1)}</span>
                  </div>
                  <div className="mt-4 h-[2px] w-10 bg-accent" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* wordUp keyframe — injected once */}
      <style>{`
        @keyframes wordUp {
          from { opacity: 0; transform: translateY(60%); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </section>
  );
}

function Ticker() {
  const items = ["Railway Solutions", "International Business", "Industrial Services", "Finance", "Metro Projects", "AMC & CMC", "ICBMRO", "Engineering"];
  const row = [...items, ...items];
  return (
    <section className="border-b border-border bg-secondary/30 text-foreground py-4 overflow-hidden">
      <div className="marquee-mask">
        <div className="ticker flex gap-10 whitespace-nowrap font-display text-xl lg:text-2xl text-foreground/70" style={{ animationDuration: "22s" }}>
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="italic">{t}</span>
              <span className="text-accent text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="border-b border-border bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/20 pointer-events-none hidden lg:block" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-40 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-10">
              An Indian-accent <br /><span className="italic text-accent">industrial universe.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-2xl text-foreground font-display leading-snug">
                Building an integrated ecosystem that powers industries, infrastructure, and innovation across India and globally.
              </p>
              <p>
                Jigisha is a leading industrial supplier, manufacturer and service provider — covering products, materials, components and machineries for Indian Railways, the metro sector and a broad spectrum of industries.
              </p>
            </div>
            <Link to="/about" className="mt-12 inline-flex items-center gap-3 font-mono text-sm font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors group">
              Discover Our Story <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="/images/home_about.png" alt="Industrial Gears" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 p-6 lg:p-8 bg-background/90 backdrop-blur-md rounded-2xl shadow-2xl border border-border max-w-[250px] lg:max-w-[300px]">
                <AnimatedStat value="23" className="font-display text-5xl lg:text-6xl text-accent block mb-2" />
                <div className="font-mono text-[11px] lg:text-xs uppercase tracking-widest text-muted-foreground">Specialist Subsidiaries under Jigisha Enterprises</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const clients = [
    { name: "Indian Railways", ind: "Railways" },
    { name: "Metro Rail Corp", ind: "Metro" },
    { name: "BHEL", ind: "PSU" },
    { name: "NTPC", ind: "PSU" },
    { name: "L&T Infrastructure", ind: "Manufacturing" },
    { name: "Tata Steel", ind: "Manufacturing" },
    { name: "Siemens Mobility", ind: "Railways" },
    { name: "Alstom", ind: "Metro" },
    { name: "SAIL", ind: "PSU" },
    { name: "Hitachi Rail", ind: "Railways" },
  ];

  const row = [...clients, ...clients];

  return (
    <section className="border-b border-border bg-secondary/10 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-20 text-center">
        <h2 className="font-display text-5xl lg:text-6xl leading-[0.9] mb-6">
          Trusted by <span className="italic text-accent">Industry Leaders.</span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
          Delivering excellence across railways, metros and industries.
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-mask mb-24">
        <div className="ticker flex gap-16 sm:gap-24 whitespace-nowrap px-10">
          {row.map((c, i) => (
            <div key={i} className="flex flex-col items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-pointer min-w-[200px] group">
              <div className="font-display text-3xl sm:text-4xl text-foreground font-bold tracking-tight group-hover:text-accent transition-colors">{c.name}</div>
              <div className="font-mono text-[12px] tracking-[0.2em] uppercase mt-3 text-muted-foreground group-hover:text-foreground transition-colors">{c.ind}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="mx-auto max-w-[1000px] px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { n: "500+", l: "Clients" },
            { n: "2,000+", l: "Projects Delivered" },
            { n: "25+", l: "Years Experience" }
          ].map((s) => (
            <div key={s.l} className="text-center pt-8 sm:pt-0 px-4 group">
              <AnimatedStat value={s.n} className="font-display text-5xl lg:text-7xl text-foreground block mb-4 group-hover:text-accent transition-colors duration-500" />
              <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const icons = [Factory, Building2, HardHat, ShieldCheck];
  return (
    <section className="border-b border-border bg-primary text-primary-foreground relative">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-10 mb-20 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9]">
              Four pillars.<br />
              <span className="italic text-accent">One delivery promise.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-lg text-primary-foreground/70 leading-relaxed lg:pl-10 lg:border-l lg:border-primary-foreground/20">
            From precision components to plant uptime — Jigisha covers the full spectrum of industrial service across rail, metro, industry and commercial.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/[0.06]">
          {SERVICES_CARDS.map((s, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={s.code}
                to={s.to}
                className="group relative bg-primary p-8 flex flex-col justify-between min-h-96 overflow-hidden transition-all duration-300 hover:bg-primary-foreground/[0.05]"
              >
                {/* Ghost number */}
                <div className="absolute bottom-4 right-4 font-display text-[88px] leading-none text-primary-foreground/[0.05] select-none pointer-events-none group-hover:text-accent/[0.1] transition-colors duration-300">
                  {s.code}
                </div>
                {/* Top content */}
                <div className="relative">
                  <div className="h-12 w-12 border border-primary-foreground/15 grid place-items-center mb-8 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-200">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="mono text-[12px] tracking-widest uppercase text-accent mb-3">Service / {s.code}</div>
                  <h3 className="font-display text-2xl lg:text-3xl mb-4">{s.t}</h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed group-hover:text-primary-foreground/75 transition-colors duration-200">{s.d}</p>
                </div>
                {/* Bottom rule + CTA */}
                <div className="relative mt-8">
                  <div className="h-px bg-primary-foreground/10 group-hover:bg-accent/50 transition-colors duration-300 mb-4" />
                  <div className="flex items-center gap-2 mono text-[11px] tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                    Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "Indian Railways AMC Execution",
      desc: "Comprehensive annual maintenance contract covering mechanical and electrical diagnostics for high-speed rolling stock across multiple zones.",
      details: "Our dedicated engineering teams achieved 99.8% fleet uptime over a 24-month cycle, deploying predictive maintenance AI and real-time remote monitoring.",
      tag: "Railway",
      image: "/images/rail_maintenance.png",
      to: "/media/news"
    },
    {
      title: "Smart Metro Depot Electrification",
      desc: "Turnkey electrical infrastructure setup and advanced signaling integration for a newly expanded metropolitan transit depot.",
      details: "Executed zero-disruption SCADA implementations alongside 15km of heavy-duty OHE cabling, significantly boosting regional transit throughput.",
      tag: "Metro",
      image: "/images/rail_smart.png",
      to: "/media/portfolio"
    },
    {
      title: "Heavy Fabrication & Logistics",
      desc: "Supply, installation, and end-to-end logistics for precision-engineered traction components required by major PSU manufacturers.",
      details: "Delivered 10,000+ precision forged units ahead of schedule using our automated supply chain network and 24/7 dedicated regional hubs.",
      tag: "Industrial",
      image: "/images/rail_electrical.png",
      to: "/media/magazine"
    }
  ];

  return (
    <section className="border-b border-border bg-background py-24 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.9]">
              Impact in <span className="italic text-accent">Action.</span>
            </h2>
          </div>
          <Link to="/media/portfolio" className="inline-flex items-center gap-3 font-mono text-sm font-bold tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors group">
            View All Projects <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative aspect-[3/4] md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
              {/* Background Image */}
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-primary/40 transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end text-primary-foreground">
                <div className="mb-auto">
                  <span className="inline-block px-4 py-2 bg-accent/90 backdrop-blur text-accent-foreground font-mono text-[11px] tracking-widest uppercase rounded">
                    {p.tag}
                  </span>
                </div>

                <div className="transition-transform duration-500 group-hover:-translate-y-20">
                  <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-4">{p.title}</h3>

                  <div className="relative">
                    {/* Short Desc (visible by default) */}
                    <p className="text-primary-foreground/80 leading-relaxed line-clamp-2 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                      {p.desc}
                    </p>

                    {/* Hover Details (visible on hover) */}
                    <div className="absolute top-0 left-0 w-full opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                      <p className="text-primary-foreground/90 leading-relaxed text-sm mb-6 line-clamp-4">
                        {p.details}
                      </p>
                      <Link to={p.to} className="inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-accent hover:text-primary-foreground transition-colors">
                        View Case Study <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  /* Left bento col — 3 larger cards */
  const leftCards = [
    { title: "Railways", stat: "500+ contracts", desc: "Complete supply chain & AMC for Indian Railways.", icon: Train, bg: "bg-accent/[0.1]", text: "text-foreground", to: "/services/railway" },
    { title: "Heavy Industry", stat: "1,000+ units", desc: "Precision engineering for massive-scale operations.", icon: Factory, bg: "bg-secondary/60", text: "text-foreground", to: "/services/industrial" },
    { title: "Infrastructure", stat: "Turnkey ready", desc: "Turnkey project support and structural logistics.", icon: Building2, bg: "bg-primary text-primary-foreground", text: "text-primary-foreground", to: "/services/industrial" },
  ];

  /* Right bento col — 5 smaller cards */
  const rightCards = [
    { title: "Metro Rail", stat: "12+ cities", desc: "Urban transit networks.", icon: TrainFront, bg: "bg-secondary/40", text: "text-foreground", to: "/services/metro" },
    { title: "Energy & Power", stat: "99.9% uptime", desc: "Critical power grid components.", icon: Zap, bg: "bg-foreground text-primary-foreground", text: "text-primary-foreground", to: "/services/industrial" },
    { title: "Logistics", stat: "Pan-India", desc: "Automated warehousing & distribution.", icon: Truck, bg: "bg-accent/[0.07]", text: "text-foreground", to: "/services/commercial" },
    { title: "Manufacturing", stat: "CNC precision", desc: "Advanced machining & fabrication.", icon: Cpu, bg: "bg-secondary/50", text: "text-foreground", to: "/services/industrial" },
    { title: "Defense & PSU", stat: "Mil-spec quality", desc: "Secure government contracts.", icon: ShieldCheck, bg: "bg-accent text-white", text: "text-white", to: "/services/industrial" },
  ];

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 border-b border-border">

          {/* ── Left panel: illustration + heading + CTA ── */}
          <div className="lg:col-span-4 border-r border-border flex flex-col">
            {/* Illustration */}
            <div className="flex-1 overflow-hidden border-b border-border bg-secondary/20 flex items-center justify-center p-8 min-h-[280px]">
              <img
                src="/images/home_about.png"
                alt="Industrial Operations"
                className="w-full h-full object-cover object-center max-h-[320px]"
              />
            </div>
            {/* Text content */}
            <div className="p-8 lg:p-10 flex flex-col gap-5">
              <div className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Sector Coverage. Depth of Expertise.
              </div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.9]">
                Industries We <span className="italic text-accent">Power.</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From critical national infrastructure to highly advanced manufacturing — Jigisha operates at the intersection of scale, precision and reliability.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors self-start mt-2"
              >
                Explore Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* ── Right panel: bento grid ── */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-px bg-border">

            {/* Left bento column — 3 tall cards */}
            <div className="flex flex-col gap-px flex-[3]">
              {leftCards.map(({ title, stat, desc, icon: Icon, bg, text }) => (
                <div
                  key={title}
                  className={`group relative flex flex-col justify-between p-7 flex-1 overflow-hidden transition-all ${bg}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className={`h-5 w-5 ${text === "text-primary-foreground" ? "text-accent" : "text-accent"}`} />
                  </div>
                  <div>
                    <div className={`font-display text-3xl lg:text-4xl leading-tight mb-1 ${text}`}>{title}</div>
                    <div className={`mono text-[11px] tracking-widest uppercase mb-3 ${text === "text-primary-foreground" ? "text-accent" : "text-accent"}`}>
                      <AnimatedStat value={stat} /> ↗
                    </div>
                    <p className={`text-sm leading-relaxed opacity-70 ${text}`}>{desc}</p>
                  </div>
                  </div>
              ))}
            </div>

            {/* Right bento column — 5 small cards */}
            <div className="flex flex-col gap-px flex-[2]">
              {rightCards.map(({ title, stat, desc, icon: Icon, bg, text }) => (
                <div
                  key={title}
                  className={`group relative flex flex-col justify-between p-5 flex-1 overflow-hidden transition-all ${bg}`}
                >
                  <Icon className="h-4 w-4 text-accent mb-3" />
                  <div>
                    <div className={`font-display text-xl lg:text-2xl leading-tight mb-1 ${text}`}>{title}</div>
                    <div className={`mono text-[11px] tracking-widest uppercase text-accent mb-1`}>
                      <AnimatedStat value={stat} /> ↗
                    </div>
                    <p className={`text-xs leading-relaxed opacity-60 ${text}`}>{desc}</p>
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Universe() {
  const stages = [
    ["RAW", "Raw Material", "Approved-source procurement at quality benchmark."],
    ["MFG", "Manufacturing", "Precision components, in-house and partner production."],
    ["INSP", "Inspection", "Multi-stage QA on every batch, every dispatch."],
    ["LOG", "Logistics", "Multi-modal nationwide and cross-border movement."],
    ["INST", "Installation", "On-site engineering crews, tested and commissioned."],
    ["AMC", "Maintenance", "AMC / CMC contracts with uptime guarantees."],
  ];
  return (
    <section className="border-b border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-40 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.9]">
            From raw material<br />to <span className="italic text-accent">finished delivery.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stages.map((s, i) => (
            <div key={s[0]} className="bg-secondary/20 border border-border p-8 lg:p-10 rounded-3xl relative hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10 font-display text-5xl lg:text-6xl text-accent/10 pointer-events-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-mono text-[10px] lg:text-xs tracking-widest uppercase text-accent mb-4 px-3 py-1 bg-accent/10 inline-block rounded-full">{s[0]}</div>
              <h3 className="font-display text-2xl lg:text-3xl mb-4">{s[1]}</h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{s[2]}</p>
            </div>
          ))}
        </div>

        {/* Scrolling verb ticker */}
        <div className="mt-16 pt-10 border-t border-border space-y-2.5 overflow-hidden">

          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">The Jigisha Operating System</span>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="marquee-mask">
            <div className="ticker flex gap-2 whitespace-nowrap">
              {[...VERBS.slice(0, 11), ...VERBS.slice(0, 11)].map((v, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 border border-border bg-background hover:border-accent hover:text-accent transition-colors duration-200 px-4 py-2 shrink-0 cursor-default"
                >
                  <span className="mono text-[11px] text-muted-foreground/40">{String((idx % 11) + 1).padStart(2, "0")}</span>
                  <span className="font-display text-sm">We <strong>{v}</strong></span>
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-mask">
            <div className="ticker flex gap-2 whitespace-nowrap" style={{ animationDirection: "reverse" }}>
              {[...VERBS.slice(11), ...VERBS.slice(11)].map((v, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 border border-border bg-background hover:border-accent hover:text-accent transition-colors duration-200 px-4 py-2 shrink-0 cursor-default"
                >
                  <span className="mono text-[11px] text-muted-foreground/40">{String((idx % 11) + 12).padStart(2, "0")}</span>
                  <span className="font-display text-sm">We <strong>{v}</strong></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Logo Ticker ─────────────────────────────────────────────── */
function LogoTicker() {
  const row = [...ALL_LOGOS, ...ALL_LOGOS];
  return (
    <section className="border-b border-border bg-secondary/10 py-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-6 flex items-center gap-3">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
        </span>
        <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Group Portfolio · 23 Entities</span>
      </div>
      <div className="marquee-mask">
        <div className="ticker flex gap-14 whitespace-nowrap items-center">
          {row.map((name, i) => (
            <div
              key={i}
              className="group shrink-0 h-24 w-40 md:h-32 md:w-56 flex items-center justify-center cursor-pointer"
            >
              <img
                src={`/images/all_company/${name}.png`}
                alt={name}
                className="max-h-16 md:max-h-24 max-w-full object-contain group-hover:scale-110 transition-all duration-300 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Group Section ───────────────────────────────────────────── */
function GroupSection() {
  return (
    <section className="border-b border-border bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.3]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-accent">Group Portfolio</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88]">
              Eight specialist<br />
              <span className="italic text-accent">entities.</span>
            </h2>
          </div>
          <div className="self-end flex flex-col gap-4 lg:border-l lg:border-border lg:pl-10">
            <p className="text-muted-foreground leading-relaxed">
              Group strategy at Jigisha Enterprises, executed through focused subsidiaries
              with deep domain expertise across industries, technology, and finance.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 mono text-xs tracking-[0.25em] uppercase text-accent border-b border-accent pb-1 hover:opacity-70 transition-opacity self-start group">
              Explore Group Structure <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Entity cards — 4-col grid, logo + sector + future website link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {ENTITIES_DATA.map(({ n, name, sector, logo, to }) => (
            <a
              key={n}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-background flex flex-col hover:bg-accent/[0.03] transition-colors duration-200 relative overflow-hidden ${to === "#" ? "pointer-events-none" : ""}`}
              aria-label={name}
            >
              <div className="flex items-center justify-center border-b border-border bg-secondary/20 px-6 py-6 h-28 lg:h-32 group-hover:bg-accent/5 transition-colors duration-200">
                <img
                  src={logo}
                  alt={name}
                  className="max-h-12 lg:max-h-14 max-w-full object-contain group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="mono text-[10px] lg:text-[11px] tracking-widest uppercase text-accent mb-2">{n} · {sector}</span>
                <div className="font-display text-base leading-snug flex-1">{name}</div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="mono text-[10px] lg:text-[11px] tracking-widest uppercase group-hover:text-accent/60 transition-colors">
                    {!to || to === "#" ? (
                      <span className="text-muted-foreground/40">Coming soon</span>
                    ) : (
                      <span className="text-accent font-bold">Visit site</span>
                    )}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/25 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
              </div>
            </a>
          ))}
        </div>

        
      </div>
    </section>
  );
}

