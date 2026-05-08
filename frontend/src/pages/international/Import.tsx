import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import {
  ArrowRight,
  Globe,
  PackageCheck,
  ShieldCheck,
  Ship,
  Search,
  Warehouse,
  Container,
  TrendingDown,
  Clock,
  Award,
  ChevronRight,
  Factory,
  Anchor,
  Plane,
  Train,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";

export default function Import() {
  return (
    <PageShell>
      <ImportHero />
      <ImportStats />
      <ImportOfferings />
      <ImportProcess />
      {/* ── NEW SECTIONS ─────────────────────────── */}
      <ImportSupplierDirectory />
      <ImportVolumeStats />
      <ImportCommodities />
      {/* ─────────────────────────────────────────── */}
      <CTASection />
    </PageShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   EXISTING SECTIONS (unchanged)
───────────────────────────────────────────────────────────── */

function ImportHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/5 hidden lg:block" />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-border bg-background mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">Global Procurement Division</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.85] tracking-tighter">
              Precision <span className="italic text-accent">Import</span> Solutions.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Jigisha's import division connects your business to the world's most reliable manufacturing hubs. We manage the entire sourcing, compliance, and logistics lifecycle for industrial raw materials, machinery, and components.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors"
              >
                Start Sourcing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] bg-secondary border border-border overflow-hidden relative">
              <img
                src="/images/rail_maintenance.png"
                alt="Global Shipping"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur border border-border p-6 flex items-center justify-between shadow-xl">
                <div>
                  <div className="font-display text-3xl">45+</div>
                  <div className="mono text-[12px] tracking-widest uppercase text-muted-foreground mt-1">Countries Sourced From</div>
                </div>
                <Globe className="h-8 w-8 text-accent opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportStats() {
  const stats = [
    { label: "Annual Freight Vol", value: "2M+ Tons" },
    { label: "Customs Clearance Rate", value: "99.8%" },
    { label: "Partner Network", value: "150+ Global" },
    { label: "Cost Optimization", value: "Avg 12-18%" },
  ];
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-px md:bg-primary-foreground/10">
          {stats.map((s, i) => (
            <div key={i} className="md:bg-primary md:p-8 flex flex-col justify-center items-center text-center">
              <AnimatedStat value={s.value} className="font-display text-4xl lg:text-5xl text-accent mb-2 block" />
              <div className="mono text-[11px] tracking-widest uppercase opacity-70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImportOfferings() {
  const offerings = [
    { icon: Search, title: "Global Vendor Discovery", desc: "We identify, vet, and audit international suppliers to ensure they meet stringent quality and capacity standards." },
    { icon: ShieldCheck, title: "Customs & Compliance", desc: "Expert navigation of HS codes, tariffs, anti-dumping duties, and import licenses to ensure zero-delay clearance." },
    { icon: Ship, title: "Multi-Modal Freight", desc: "Optimized sea, air, and rail freight routing to balance lead times against landed costs." },
    { icon: PackageCheck, title: "Quality Assurance", desc: "Third-party pre-shipment inspections (PSI) and factory audits before your cargo ever leaves the port of origin." },
  ];

  return (
    <section className="py-24 lg:py-36 border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl lg:text-6xl leading-[0.9]">
            Core <span className="italic text-accent">Capabilities.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            End-to-end import orchestration. We don't just move cargo; we mitigate risk, ensure quality, and optimize your supply chain economics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o, i) => (
            <div key={i} className="bg-background border border-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="h-14 w-14 bg-secondary/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <o.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl mb-4">{o.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImportProcess() {
  const steps = [
    { title: "Requirement Mapping", desc: "Deep dive into your BOM, specs, and budget." },
    { title: "Supplier Selection", desc: "Shortlisting from our global verified database." },
    { title: "Contract & Finance", desc: "Structuring LCs, payment terms, and SLAs." },
    { title: "Production & QC", desc: "Monitoring manufacturing and pre-dispatch inspection." },
    { title: "Logistics & Clearance", desc: "Freight forwarding and seamless port clearance." },
    { title: "Last-Mile Delivery", desc: "Inland transport to your factory floor." },
  ];
  return (
    <section className="py-24 lg:py-36 border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl lg:text-5xl leading-[0.9]">
              The Jigisha <br />
              <span className="italic text-accent">Method.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              A rigorous, battle-tested 6-step methodology that removes the uncertainty from international procurement.
            </p>
            <div className="mt-10 relative aspect-[4/5] bg-secondary border border-border overflow-hidden hidden lg:block">
              <img src="/images/rail_maintenance.png" alt="Methodology" className="w-full h-full object-cover grayscale opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative pl-10 border-l-2 border-secondary h-fit">
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-accent" />
                <div className="mono text-[11px] text-accent font-bold mb-2">PHASE 0{i + 1}</div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────────────────────
   NEW SECTION 1 — SOURCING & SUPPLIER DIRECTORY
   Design: Two-column layout. Left = filter pill row + supplier
   cards in a scrollable grid. Right = pinned "key facts" sidebar.
   Each card shows country flag emoji, origin, category badge,
   supplier tier, and MOQ. Hover reveals a "View Profile →" CTA.
───────────────────────────────────────────────────────────── */

const SUPPLIERS = [
  { flag: "🇨🇳", country: "China", region: "East Asia", category: "Machinery & Electronics", tier: "Tier 1", moq: "500 Units", leadTime: "30–45 days" },
  { flag: "🇩🇪", country: "Germany", region: "European Union", category: "Precision Engineering", tier: "Tier 1", moq: "50 Units", leadTime: "45–60 days" },
  { flag: "🇯🇵", country: "Japan", region: "East Asia", category: "Industrial Automation", tier: "Tier 1", moq: "100 Units", leadTime: "40–55 days" },
  { flag: "🇰🇷", country: "South Korea", region: "East Asia", category: "Steel & Metals", tier: "Tier 2", moq: "10 MT", leadTime: "25–35 days" },
  { flag: "🇹🇼", country: "Taiwan", region: "East Asia", category: "Electronics & PCBs", tier: "Tier 1", moq: "1000 Units", leadTime: "20–30 days" },
  { flag: "🇮🇹", country: "Italy", region: "European Union", category: "Textile Machinery", tier: "Tier 2", moq: "5 Units", leadTime: "50–70 days" },
  { flag: "🇸🇬", country: "Singapore", region: "Southeast Asia", category: "Chemicals & Polymers", tier: "Tier 2", moq: "5 MT", leadTime: "15–20 days" },
  { flag: "🇺🇸", country: "USA", region: "North America", category: "Aerospace Components", tier: "Tier 1", moq: "10 Units", leadTime: "60–90 days" },
  { flag: "🇧🇷", country: "Brazil", region: "South America", category: "Agro Raw Materials", tier: "Tier 3", moq: "20 MT", leadTime: "35–50 days" },
];

const CATEGORIES = ["All", "Machinery & Electronics", "Steel & Metals", "Chemicals & Polymers", "Precision Engineering", "Agro Raw Materials"];

const TIER_STYLES: Record<string, string> = {
  "Tier 1": "bg-accent/10 text-accent border-accent/30",
  "Tier 2": "bg-secondary text-foreground border-border",
  "Tier 3": "bg-secondary/50 text-muted-foreground border-border",
};

function ImportSupplierDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? SUPPLIERS
    : SUPPLIERS.filter((s) => s.category === activeCategory);

  return (
    <section className="py-24 lg:py-36 border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="mono text-[11px] tracking-widest uppercase text-accent mb-4">Sourcing Intelligence</div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[0.9]">
              Verified <span className="italic text-accent">Supplier</span> Network.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every supplier in our directory undergoes a rigorous 12-point audit covering financial health, quality systems, production capacity, and compliance track record.
            </p>
          </div>
          {/* Key facts sidebar pill */}
          <div className="shrink-0 border border-border bg-background p-6 flex gap-8 lg:gap-12">
            <div className="text-center">
              <AnimatedStat value="45+" className="font-display text-3xl text-accent block" />
              <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mt-1">Countries</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <AnimatedStat value="320+" className="font-display text-3xl text-accent block" />
              <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mt-1">Vetted Suppliers</div>
            </div>
            <div className="w-px bg-border" />
            <div className="text-center">
              <AnimatedStat value="98%" className="font-display text-3xl text-accent block" />
              <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mt-1">Audit Pass Rate</div>
            </div>
          </div>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 border mono text-[11px] tracking-widest uppercase transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent bg-background"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Supplier card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s, i) => (
            <div
              key={i}
              className="bg-background border border-border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none">
                <img src="/images/rail_smart.png" alt="Sourcing" className="w-full h-full object-cover grayscale" />
              </div>
              {/* Top row: flag + country + tier */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl leading-none">{s.flag}</span>
                  <div>
                    <div className="font-display text-xl leading-tight">{s.country}</div>
                    <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mt-0.5">{s.region}</div>
                  </div>
                </div>
                <span className={`mono text-[11px] tracking-widest uppercase px-3 py-1 border ${TIER_STYLES[s.tier]}`}>
                  {s.tier}
                </span>
              </div>

              {/* Category */}
              <div className="text-sm text-foreground font-medium mb-4 leading-snug">{s.category}</div>

              {/* MOQ + Lead time row */}
              <div className="flex gap-6 pt-4 border-t border-border">
                <div>
                  <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1">Min. Order</div>
                  <div className="text-sm font-medium">{s.moq}</div>
                </div>
                <div>
                  <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1">Lead Time</div>
                  <div className="text-sm font-medium">{s.leadTime}</div>
                </div>
                {/* Hover CTA */}
                <div className="ml-auto flex items-end">
                  <span className="mono text-[11px] tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Enquire <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center mono text-[11px] tracking-widest uppercase text-muted-foreground">
          Showing representative sample — full directory available on request
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW SECTION 2 — IMPORT VOLUME STATS (animated counters)
   Design: Dark/inverted section (bg-primary). Left column has
   a large headline. Right column has 4 animated counter cards
   with icons, plus a horizontal bar chart of top categories
   by import volume — all built with pure Tailwind (no canvas).
───────────────────────────────────────────────────────────── */

const VOLUME_STATS = [
  { icon: Container, label: "Containers Handled / Year", value: 4800, suffix: "+", prefix: "" },
  { icon: TrendingDown, label: "Avg. Cost Reduction", value: 15, suffix: "%", prefix: "" },
  { icon: Clock, label: "Avg. Clearance Time (hrs)", value: 18, suffix: "h", prefix: "" },
  { icon: Award, label: "On-Time Delivery Rate", value: 97, suffix: "%", prefix: "" },
];

const CATEGORY_BARS = [
  { label: "Industrial Machinery", pct: 34 },
  { label: "Steel & Alloys", pct: 26 },
  { label: "Chemicals & Polymers", pct: 18 },
  { label: "Electronics & Components", pct: 14 },
  { label: "Agro & Commodities", pct: 8 },
];

function ImportVolumeStats() {
  return (
    <section className="py-24 lg:py-36 border-b border-border bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: headline + category breakdown */}
          <div>
            <div className="mono text-[11px] tracking-widest uppercase text-accent/80 mb-6">Import Volume Analysis</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[0.9] mb-8">
              Scale that <br /><span className="italic text-accent">moves markets.</span>
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-12 max-w-md">
              Over two decades of import operations across 45+ source countries, handling everything from precision instruments to bulk raw materials.
            </p>

            {/* Category bar chart (CSS only) */}
            <div className="space-y-5">
              <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/40 mb-4">
                Import mix by category (% of annual volume)
              </div>
              {CATEGORY_BARS.map((bar, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-primary-foreground/80">{bar.label}</span>
                    <span className="mono text-[12px] text-accent">{bar.pct}%</span>
                  </div>
                  <div className="h-[3px] bg-primary-foreground/10 w-full">
                    <div
                      className="h-full bg-accent transition-all duration-1000 ease-out"
                      style={{ width: `${bar.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated counter cards */}
          <div className="grid grid-cols-2 gap-5">
            {VOLUME_STATS.map((s, i) => (
              <div
                key={i}
                className="border border-primary-foreground/10 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/10 transition-colors"
              >
                <s.icon className="h-5 w-5 text-accent mb-5 opacity-80" />
                <AnimatedStat value={`${s.prefix}${s.value}${s.suffix}`} className="font-display text-4xl lg:text-5xl text-accent block" />
                <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/50 mt-2 leading-relaxed">
                  {s.label}
                </div>
              </div>
            ))}

            {/* Wide card spanning 2 cols */}
            <div className="col-span-2 border border-accent/30 bg-accent/5 p-6 flex items-center justify-between gap-6">
              <div>
                <AnimatedStat value="2400" className="font-display text-3xl text-accent block" />
                <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/50">
                  Total import value facilitated (FY 2023–24)
                </div>
              </div>
              <div className="shrink-0 border-l border-primary-foreground/10 pl-6">
                <AnimatedStat value="45+" className="font-display text-3xl text-accent block" />
                <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/50">
                  Source countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW SECTION 3 — COMMODITY SOURCING GUIDE
   Design: Light bg, editorial layout. A two-column table of
   key commodity types Jigisha imports — with HS code range,
   origin zones, typical MOQ, and freight mode icons.
   Ends with a "Request a Sourcing Assessment" inline CTA strip.
───────────────────────────────────────────────────────────── */

const FREIGHT_ICONS: Record<string, React.ElementType> = {
  Sea: Anchor,
  Air: Plane,
  Rail: Train,
  Warehouse: Warehouse,
};

const COMMODITIES = [
  {
    name: "Industrial Machinery & Equipment",
    hs: "84.xx – 85.xx",
    origins: ["China", "Germany", "Japan"],
    moq: "1+ Unit",
    modes: ["Sea", "Air"],
    compliance: "BIS / CE",
  },
  {
    name: "Steel, Iron & Alloys",
    hs: "72.xx – 73.xx",
    origins: ["South Korea", "Japan", "China"],
    moq: "5 MT",
    modes: ["Sea"],
    compliance: "BIS / ISI",
  },
  {
    name: "Organic & Industrial Chemicals",
    hs: "28.xx – 38.xx",
    origins: ["China", "Singapore", "Germany"],
    moq: "500 Kg",
    modes: ["Sea", "Air"],
    compliance: "CPCB / DGFT",
  },
  {
    name: "Electronic Components & PCBs",
    hs: "85.xx",
    origins: ["Taiwan", "South Korea", "China"],
    moq: "1000 Pcs",
    modes: ["Air", "Sea"],
    compliance: "BIS / RoHS",
  },
  {
    name: "Polymers & Plastics",
    hs: "39.xx",
    origins: ["Singapore", "Saudi Arabia", "USA"],
    moq: "1 MT",
    modes: ["Sea"],
    compliance: "FSSAI / BIS",
  },
  {
    name: "Agro Commodities & Raw Materials",
    hs: "10.xx – 14.xx",
    origins: ["Brazil", "Australia", "Vietnam"],
    moq: "20 MT",
    modes: ["Sea"],
    compliance: "FSSAI / PQ",
  },
];

function ImportCommodities() {
  return (
    <section className="py-24 lg:py-36 border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mono text-[12px] tracking-widest uppercase text-accent mb-4">Commodity Reference</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[0.9]">
            What we <span className="italic text-accent">source.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            A reference guide to the commodity categories we actively import — including HS code ranges, preferred source countries, and compliance requirements.
          </p>
        </div>

        {/* Table — desktop; cards on mobile */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/10">
                {["Commodity", "HS Code", "Origins", "Min. Order", "Freight Mode", "Compliance"].map((h) => (
                  <th key={h} className="text-left mono text-xs tracking-widest uppercase text-muted-foreground pb-6 pr-8 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {COMMODITIES.map((c, i) => (
                <tr key={i} className="hover:bg-secondary/40 transition-colors group">
                  <td className="py-7 pr-8 align-top">
                    <div className="font-display text-xl leading-tight group-hover:text-accent transition-colors">{c.name}</div>
                  </td>
                  <td className="py-7 pr-8 align-top">
                    <code className="mono text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-sm border border-accent/20">{c.hs}</code>
                  </td>
                  <td className="py-7 pr-8 align-top">
                    <div className="flex flex-wrap gap-1.5">
                      {c.origins.map((o) => (
                        <span key={o} className="mono text-[10px] tracking-widest px-2.5 py-1 bg-secondary text-foreground border border-border/50 uppercase">
                          {o}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-7 pr-8 align-top">
                    <div className="text-base font-medium text-foreground">{c.moq}</div>
                  </td>
                  <td className="py-7 pr-8 align-top">
                    <div className="space-y-2">
                      {c.modes.map((mode) => {
                        const Icon = FREIGHT_ICONS[mode];
                        return Icon ? (
                          <div key={mode} className="flex items-center gap-2 text-muted-foreground" title={mode}>
                            <Icon className="h-4 w-4 text-accent/70" />
                            <span className="mono text-[11px] uppercase tracking-widest">{mode}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </td>
                  <td className="py-7 align-top">
                    <div className="mono text-[11px] tracking-widest font-bold text-muted-foreground bg-secondary/30 px-3 py-1.5 inline-block rounded-sm">
                      {c.compliance}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-6">
          {COMMODITIES.map((c, i) => (
            <div key={i} className="border border-border bg-background p-6 shadow-sm">
              <div className="font-display text-2xl mb-4 text-accent">{c.name}</div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="col-span-2">
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Origins</div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.origins.map((o) => (
                      <span key={o} className="mono text-[10px] px-2 py-0.5 bg-secondary border border-border/50 uppercase">{o}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">HS Code</div>
                  <code className="mono text-xs text-accent bg-accent/5 px-2 py-0.5 border border-accent/10">{c.hs}</code>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Min Order</div>
                  <div className="text-base font-medium">{c.moq}</div>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Compliance</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase">{c.compliance}</div>
                </div>
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Freight</div>
                  <div className="flex gap-3">
                    {c.modes.map((m) => {
                      const Icon = FREIGHT_ICONS[m];
                      return Icon ? <Icon key={m} className="h-5 w-5 text-accent/70" /> : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 border border-accent/30 bg-accent/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="mono text-[11px] tracking-widest uppercase text-accent mb-2">Don't see your category?</div>
            <p className="text-foreground font-medium">
              We source across 2,000+ HS codes. Request a custom sourcing assessment.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors whitespace-nowrap"
          >
            Request Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}