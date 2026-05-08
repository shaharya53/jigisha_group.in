import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck,
  Landmark,
  BarChart4,
  TrendingUp,
  Anchor,
  Shield,
  Globe2,
  Award,
  ChevronRight,
  Package,
  Zap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Export() {
  return (
    <PageShell>
      <ExportHero />
      <ExportTicker />
      <ExportCapabilities />
      <ExportMarkets />
      {/* ── NEW SECTIONS ──────────────────────── */}
      <ExportProductPortfolio />
      <ExportCertifications />
      <ExportTrackRecord />
      {/* ──────────────────────────────────────── */}
      <CTASection />
    </PageShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO — Redesigned
   Split-screen: left = massive typographic statement with a
   live-updating "now exporting to" ticker. Right = bold
   vertical stat column with ruled lines. No blobs, no blur.
   Raw industrial editorial energy.
───────────────────────────────────────────────────────────── */

const EXPORT_DESTINATIONS = ["UAE", "Germany", "Vietnam", "USA", "Saudi Arabia", "Kenya", "Singapore", "Japan", "UK", "Australia"];

function ExportHero() {
  const [destIndex, setDestIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setDestIndex((i) => (i + 1) % EXPORT_DESTINATIONS.length);
        setVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(cycle);
  }, []);

  const heroStats = [
    { value: "30+", label: "Export destinations" },
    { value: "₹850Cr+", label: "Export value FY24" },
    { value: "100%", label: "Turnkey documentation" },
    { value: "18yr", label: "Export track record" },
  ];

  return (
    <section className="relative min-h-screen bg-background border-b border-border overflow-hidden flex flex-col">
      {/* Top ruled bar */}


      <div className="flex-1 grid lg:grid-cols-2 h-full">
        {/* Left: Main headline block */}
        <div className="flex flex-col justify-between p-8 lg:p-20 bg-background relative z-10">
          <div>
            {/* Live ticker line */}
            <div className="flex items-center gap-3 mb-12">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Now exporting to —
              </span>
              <span
                className="mono text-[12px] tracking-widest uppercase text-accent transition-opacity duration-300"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {EXPORT_DESTINATIONS[destIndex]}
              </span>
            </div>

            <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.82] tracking-tighter">
              Taking Indian<br />
              Engineering<br />
              <span className="italic text-accent">Global.</span>
            </h1>

            <p className="mt-10 text-lg text-muted-foreground max-w-lg leading-relaxed">
              We empower manufacturers to expand beyond borders. From market entry strategy and compliance to international freight, Jigisha orchestrates your entire export operation — end to end.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors group"
            >
              Expand Your Market
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mono text-xs tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
            >
              View export portfolio <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Right: Seamless Technical Visual */}
        <div className="relative overflow-hidden bg-accent/5">
          <img
            src="/images/rail_smart.png"
            alt="Global Logistics"
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent lg:hidden" />

          {/* Technical Crosshair Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-24">
            <div className="w-full h-full border border-accent/20 relative group">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-accent" />
              <div className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-accent" />
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-accent" />

              {/* Floating Data Nodes */}
              <div className="absolute top-[15%] left-[10%] p-6 bg-background/90 backdrop-blur-md border border-border shadow-2xl translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="mono text-[11px] text-accent mb-2 tracking-widest uppercase">Connectivity // 01</div>
                <div className="font-display text-2xl lg:text-3xl">Global Hubs</div>
                <p className="text-[12px] text-muted-foreground mt-2 uppercase tracking-tighter">Strategic trade lane access.</p>
              </div>

              <div className="absolute bottom-[20%] right-[10%] p-6 bg-primary text-primary-foreground border border-primary shadow-2xl translate-y-0 group-hover:translate-y-2 transition-transform duration-500">
                <div className="mono text-[11px] text-accent mb-2 tracking-widest uppercase">Compliance // 02</div>
                <div className="font-display text-2xl lg:text-3xl">Zero Risk</div>
                <p className="text-[12px] opacity-60 mt-2 uppercase tracking-tighter">100% Documentation Accuracy.</p>
              </div>

              {/* Central Radar Circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border border-accent/10 rounded-full animate-ping opacity-20" />
                <div className="absolute w-48 h-48 border border-accent/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Vertical Label */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 vertical-text font-display text-8xl lg:text-9xl text-accent/5 select-none pointer-events-none tracking-tighter">
            EXPORT
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TICKER — scrolling marquee of destination countries
───────────────────────────────────────────────────────────── */
const ALL_DESTINATIONS = [
  "UAE", "Saudi Arabia", "Germany", "Japan", "Vietnam", "Kenya", "USA",
  "Singapore", "UK", "Australia", "South Korea", "France", "Brazil", "Oman",
];

function ExportTicker() {
  return (
    <div className="border-b border-border bg-primary text-primary-foreground py-3 overflow-hidden relative">
      <div className="flex gap-0 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
        {[...ALL_DESTINATIONS, ...ALL_DESTINATIONS].map((dest, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8">
            <span className="mono text-[12px] tracking-[0.25em] uppercase text-accent">◆</span>
            <span className="mono text-[12px] tracking-[0.2em] uppercase text-primary-foreground/80">{dest}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CAPABILITIES — Redesigned from ExportBento
   Was: a generic bento grid.
   Now: a bold asymmetric 2-column layout. Left column is a
   tall "featured" card with a large number + description.
   Right column is a dense list of capability rows, each with
   an icon, title, one-liner, and a ruled bottom border.
   Dark card on the left creates strong visual contrast.
───────────────────────────────────────────────────────────── */
const CAPABILITIES = [
  { icon: BarChart4, title: "Market Entry Strategy", desc: "Target market analysis, competitor benchmarking, and a strategic roadmap built before a single shipment leaves." },
  { icon: FileCheck, title: "Export Documentation", desc: "Flawless Bills of Lading, Certificates of Origin, Packing Lists, and Letters of Credit — zero errors, zero delays." },
  { icon: Anchor, title: "Sea & Air Freight", desc: "Cost-optimized multi-modal routing via our network of Tier-1 global freight carriers and NVOCCs." },
  { icon: Landmark, title: "Trade Compliance", desc: "Expert navigation of international tariffs, embargoes, anti-dumping duties, and destination-country EXIM regulations." },
  { icon: TrendingUp, title: "Government Incentives", desc: "Full-stack support for RoDTEP, MEIS, Advance Authorization, and all applicable export promotion schemes." },
  { icon: Shield, title: "Cargo Insurance", desc: "Comprehensive marine cargo insurance with global underwriters covering all modes and all risk values." },
];

function ExportCapabilities() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label bar */}
        <div className="border-b border-border px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Core Capabilities</span>
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">06 Services</span>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-border">
          {/* Left: dark featured card */}
          <div className="bg-primary text-primary-foreground p-10 lg:p-14 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img src="/images/rail_maintenance.png" alt="Infrastructure" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="relative z-10">
              <Globe2 className="h-10 w-10 text-accent mb-10" />
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.9] mb-6">
                End-to-end<br />
                <span className="italic text-accent">Export</span><br />
                Infrastructure.
              </h2>
            </div>
            <div>
              <p className="text-primary-foreground/60 leading-relaxed mb-8 text-sm">
                We don't just move goods across borders. We build the commercial, legal, and logistical architecture that makes your export operation self-sustaining and scalable.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mono text-[12px] tracking-widest uppercase text-accent hover:gap-3 transition-all"
              >
                Talk to our export team <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: capability rows */}
          <div className="divide-y divide-border">
            {CAPABILITIES.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-6 px-8 lg:px-12 py-7 hover:bg-secondary/20 transition-colors group"
              >
                <div className="shrink-0 mt-0.5">
                  <div className="h-9 w-9 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                    <c.icon className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl mb-1.5">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
                <div className="shrink-0 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   MARKETS — Redesigned from ExportMarkets
   Was: left text + right image.
   Now: full-width region grid. Each region is a tall card with
   a large index number, a divider, name, description, and a
   list of key countries as pill tags. On hover, the card
   slides up and reveals a "Explore market →" footer.
   Alternating dark/light cards for visual rhythm.
───────────────────────────────────────────────────────────── */
const REGIONS = [
  {
    name: "Middle East",
    desc: "Booming infrastructure spend and industrial diversification in UAE, KSA, and Oman create sustained demand for Indian engineering goods.",
    countries: ["UAE", "Saudi Arabia", "Oman", "Qatar", "Kuwait"],
    highlight: "Fastest-growing market",
  },
  {
    name: "Africa",
    desc: "Emerging economies with acute demand for affordable engineering, agro-processing, and construction materials.",
    countries: ["Kenya", "Nigeria", "Ethiopia", "Tanzania", "South Africa"],
    highlight: "High-volume opportunity",
  },
  {
    name: "Southeast Asia",
    desc: "Rapidly industrializing nations actively diversifying supply chains away from China — a natural fit for Indian exporters.",
    countries: ["Vietnam", "Indonesia", "Thailand", "Philippines", "Malaysia"],
    highlight: "Supply chain shift",
  },
  {
    name: "Europe",
    desc: "High-compliance, premium-price markets demanding precision engineering, CE-certified products, and robust after-sales support.",
    countries: ["Germany", "UK", "France", "Netherlands", "Italy"],
    highlight: "Premium pricing tier",
  },
];

function ExportMarkets() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label bar */}
        <div className="border-b border-border px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Target Markets</span>
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">04 Regions</span>
        </div>

        <div className="px-6 lg:px-10 py-16 lg:py-24">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-[5rem] leading-[0.85] tracking-tighter max-w-3xl">
              Targeted <span className="italic text-accent">Destinations.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
              Every market has unique regulatory frameworks and demand patterns. Our localized expertise makes your export operations compliant and profitable from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REGIONS.map((r, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-7 border border-border group hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden
                  ${i % 2 === 1 ? "bg-primary text-primary-foreground" : "bg-background"}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none">
                  <img src="/images/rail_smart.png" alt={r.name} className="w-full h-full object-cover grayscale" />
                </div>
                {/* Index */}
                <div className={`font-display text-[5rem] leading-none mb-4 select-none
                  ${i % 2 === 1 ? "text-accent/20" : "text-secondary"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="h-px bg-border mb-5" />

                <div className="flex-1">
                  <div className="inline-block mono text-[11px] tracking-[0.2em] uppercase px-2 py-1 bg-accent/10 text-accent mb-3">
                    {r.highlight}
                  </div>
                  <h3 className="font-display text-2xl mb-3">{r.name}</h3>
                  <p className={`text-sm leading-relaxed mb-5 ${i % 2 === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {r.desc}
                  </p>
                </div>

                {/* Country pills */}
                <div className="flex flex-wrap gap-1.5">
                  {r.countries.map((c) => (
                    <span
                      key={c}
                      className={`mono text-[11px] px-2 py-0.5 tracking-wide
                        ${i % 2 === 1
                          ? "bg-primary-foreground/10 text-primary-foreground/70"
                          : "bg-secondary text-muted-foreground"}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Hover bottom CTA */}
                <div className="mt-5 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/contact" className="inline-flex items-center gap-1.5 mono text-[11px] uppercase tracking-widest text-accent">
                    Explore market <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW SECTION 1 — EXPORT PRODUCT PORTFOLIO
   Design: Full-width section with a sticky left column
   (category filters) and a right scrollable grid of product
   cards. Each card has: product name, HS code badge, origin
   state, key certifications, MOQ, and lead time.
   Sharp industrial table-card hybrid.
───────────────────────────────────────────────────────────── */
const EXPORT_CATEGORIES = ["All", "Industrial Machinery", "Steel & Metals", "Chemicals", "Agro Products", "Textiles", "Electronics"];

const EXPORT_PRODUCTS = [
  { name: "Forged Steel Flanges", category: "Steel & Metals", hs: "73.07", origin: "Gujarat", certs: ["BIS", "ASME B16.5"], moq: "500 Pcs", lead: "21–30 days", buyers: "UAE, Germany, USA" },
  { name: "Industrial Centrifugal Pumps", category: "Industrial Machinery", hs: "84.13", origin: "Maharashtra", certs: ["CE", "ISO 9001"], moq: "10 Units", lead: "30–45 days", buyers: "Saudi Arabia, Kenya" },
  { name: "Castor Oil (Industrial Grade)", category: "Chemicals", hs: "15.15", origin: "Gujarat", certs: ["FSSAI", "KOSHER"], moq: "5 MT", lead: "14–21 days", buyers: "Europe, USA, Japan" },
  { name: "Basmati Rice (Long Grain)", category: "Agro Products", hs: "10.06", origin: "Punjab", certs: ["FSSAI", "EIC", "Organic"], moq: "25 MT", lead: "10–15 days", buyers: "Middle East, UK" },
  { name: "Cotton Yarn (Combed 40s)", category: "Textiles", hs: "52.05", origin: "Tamil Nadu", certs: ["GOTS", "OCS"], moq: "5 MT", lead: "21–28 days", buyers: "Bangladesh, Vietnam" },
  { name: "PCB Assemblies (Industrial)", category: "Electronics", hs: "85.34", origin: "Karnataka", certs: ["RoHS", "CE", "UL"], moq: "1000 Pcs", lead: "35–50 days", buyers: "Germany, USA, Singapore" },
  { name: "API Seamless Steel Pipes", category: "Steel & Metals", hs: "73.04", origin: "Gujarat", certs: ["API 5L", "BIS"], moq: "10 MT", lead: "25–35 days", buyers: "UAE, Oman, Saudi Arabia" },
  { name: "Pharmaceutical Chemicals", category: "Chemicals", hs: "29.41", origin: "Hyderabad", certs: ["WHO-GMP", "DMF"], moq: "100 Kg", lead: "28–40 days", buyers: "USA, UK, Brazil" },
  { name: "Rice Bran Oil (Refined)", category: "Agro Products", hs: "15.14", origin: "West Bengal", certs: ["FSSAI", "Halal"], moq: "10 MT", lead: "14–20 days", buyers: "Japan, South Korea" },
];

function ExportProductPortfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? EXPORT_PRODUCTS
    : EXPORT_PRODUCTS.filter((p) => p.category === active);

  return (
    <section className="border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label bar */}
        <div className="border-b border-border px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Export Portfolio</span>
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-accent">{filtered.length} Products</span>
        </div>

        <div className="p-6 lg:p-10">
          {/* Headline */}
          <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="mono text-[12px] tracking-widest uppercase text-accent mb-3">What We Export</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.9]">
                Products that travel <span className="italic text-accent">far.</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Each product in our export portfolio is pre-qualified for target market compliance, reducing buyer-side regulatory risk to zero.
              </p>
            </div>
          </div>

          {/* Filter tabs — horizontal scrolling pill row */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none">
            {EXPORT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 border mono text-[12px] tracking-widest uppercase transition-all whitespace-nowrap
                  ${active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent bg-background"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="bg-background border border-border p-6 hover:border-accent/60 hover:shadow-lg transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none">
                  <img src="/images/rail_maintenance.png" alt={p.name} className="w-full h-full object-cover grayscale" />
                </div>
                {/* Category badge */}
                <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-4">{p.category}</div>

                {/* Name + HS */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                  <code className="shrink-0 mono text-[12px] text-accent bg-accent/8 border border-accent/20 px-2 py-0.5 mt-0.5">
                    {p.hs}
                  </code>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.certs.map((cert) => (
                    <span key={cert} className="mono text-[11px] px-2 py-0.5 bg-secondary text-foreground border border-border">
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Data row */}
                <div className="flex gap-0 divide-x divide-border border-t border-border pt-4">
                  <div className="flex-1 pr-4">
                    <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Origin</div>
                    <div className="text-xs font-medium">{p.origin}</div>
                  </div>
                  <div className="flex-1 px-4">
                    <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground mb-1">MOQ</div>
                    <div className="text-xs font-medium">{p.moq}</div>
                  </div>
                  <div className="flex-1 pl-4">
                    <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Lead Time</div>
                    <div className="text-xs font-medium">{p.lead}</div>
                  </div>
                </div>

                {/* Key buyer markets — hover reveal */}
                <div className="mt-3 pt-3 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Active buyers in</div>
                  <div className="text-xs text-accent">{p.buyers}</div>
                </div>


              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center justify-between border border-border bg-background p-6">
            <div>
              <div className="mono text-[12px] uppercase tracking-widest text-accent mb-1">Custom product enquiry</div>
              <p className="text-sm text-muted-foreground">Don't see your product? We source and export across 1,800+ HS codes.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 mono text-[12px] tracking-[0.2em] uppercase hover:bg-accent transition-colors"
            >
              Custom Enquiry <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW SECTION 2 — CERTIFICATIONS & COMPLIANCE WALL
   Design: Dark bg-primary section. Left: large headline +
   compliance narrative. Right: 2-column logo-card grid where
   each card shows the cert name, issuing body, scope, and a
   validity strip. Ends with a "Download credentials pack" CTA.
───────────────────────────────────────────────────────────── */
const CERTIFICATIONS = [
  { name: "IEC Code", body: "DGFT, Govt. of India", scope: "Mandatory for all Indian exporters", color: "accent" },
  { name: "ISO 9001:2015", body: "Bureau Veritas", scope: "Quality Management Systems", color: "default" },
  { name: "RCMC", body: "FIEO / EPC", scope: "Registration cum Membership Certificate", color: "default" },
  { name: "RoDTEP Enrollment", body: "CBIC / ICEGATE", scope: "Remission of Duties & Taxes on Export Products", color: "accent" },
  { name: "AD Code Registration", body: "Authorized Dealer Bank", scope: "Foreign exchange receipt compliance", color: "default" },
  { name: "GST LUT", body: "GSTN", scope: "Zero-rated export without bond payment", color: "default" },
  { name: "EIC Registration", body: "Export Inspection Council", scope: "Mandatory for agro & food products", color: "accent" },
  { name: "FSSAI License", body: "Food Safety & Standards Authority", scope: "Food product export compliance", color: "default" },
];

const COMPLIANCE_POINTS = [
  "Every shipment pre-cleared against destination-country restricted goods lists",
  "Automated HS code classification reducing mis-declaration risk",
  "Sanctioned party screening on all buyers and freight partners",
  "End-to-end audit trail maintained for 7 years per FEMA requirements",
];

function ExportCertifications() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label bar */}
        <div className="border-b border-primary-foreground/10 px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-primary-foreground/40">Certifications & Compliance</span>
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-accent">Fully Credentialed</span>
        </div>

        <div className="grid lg:grid-cols-[440px_1fr] divide-y lg:divide-y-0 lg:divide-x divide-primary-foreground/10">
          {/* Left */}
          <div className="p-8 lg:p-14 flex flex-col justify-between">
            <div>
              <Award className="h-10 w-10 text-accent mb-8" />
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.9] mb-6">
                Zero compliance <span className="italic text-accent">risk.</span>
              </h2>
              <p className="text-primary-foreground/60 leading-relaxed mb-10 text-sm">
                International buyers face significant liability when sourcing from non-compliant exporters. Jigisha carries the full stack of mandatory and voluntary export credentials — so your supply chain is audit-proof.
              </p>

              {/* Compliance checklist */}
              <div className="space-y-4">
                {COMPLIANCE_POINTS.map((pt, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="shrink-0 h-5 w-5 border border-accent/50 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-accent rounded-full" />
                    </div>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-foreground/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mono text-[12px] tracking-widest uppercase text-accent hover:gap-3 transition-all"
              >
                Request credentials pack <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: cert cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-primary-foreground/10">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className={`p-6 lg:p-8 border-b border-primary-foreground/10 hover:bg-primary-foreground/5 transition-colors
                  ${i >= CERTIFICATIONS.length - 2 ? "border-b-0" : ""}`}
              >
                <div className={`mono text-[11px] tracking-widest uppercase mb-3 ${cert.color === "accent" ? "text-accent" : "text-primary-foreground/30"}`}>
                  {cert.color === "accent" ? "● Active" : "● Registered"}
                </div>
                <h4 className="font-display text-lg leading-tight mb-2">{cert.name}</h4>
                <p className="mono text-[11px] text-primary-foreground/40 tracking-wide mb-2 uppercase">{cert.body}</p>
                <p className="text-primary-foreground/50 text-xs leading-relaxed">{cert.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW SECTION 3 — TRACK RECORD & DEAL HIGHLIGHTS
   Design: Light section. Top = 3 animated impact numbers.
   Below = a horizontal scrolling (desktop) / stacked (mobile)
   deal card ticker — each card is a completed export deal with
   commodity, volume, destination, year, and value. Styled like
   a trading floor blotter: dense, data-rich, monospaced.
   Ends with a testimonial pull-quote from a buyer.
───────────────────────────────────────────────────────────── */
const DEAL_RECORDS = [
  { commodity: "API Seamless Pipes", volume: "850 MT", destination: "UAE", value: "₹12.4 Cr", year: "2024", type: "Steel" },
  { commodity: "Industrial Pumps", volume: "200 Units", destination: "Saudi Arabia", value: "₹8.7 Cr", year: "2024", type: "Machinery" },
  { commodity: "Castor Oil", volume: "1,200 MT", destination: "Germany", value: "₹22.1 Cr", year: "2023", type: "Chemical" },
  { commodity: "Basmati Rice", volume: "3,500 MT", destination: "UK", value: "₹18.6 Cr", year: "2023", type: "Agro" },
  { commodity: "Forged Flanges", volume: "120 MT", destination: "USA", value: "₹9.3 Cr", year: "2024", type: "Steel" },
  { commodity: "PCB Assemblies", volume: "45,000 Pcs", destination: "Germany", value: "₹6.2 Cr", year: "2023", type: "Electronics" },
  { commodity: "Cotton Yarn", volume: "600 MT", destination: "Bangladesh", value: "₹7.8 Cr", year: "2024", type: "Textile" },
  { commodity: "Pharma Chemicals", volume: "80 MT", destination: "Brazil", value: "₹15.4 Cr", year: "2023", type: "Chemical" },
];

const TYPE_STYLES: Record<string, string> = {
  Steel: "bg-secondary text-foreground",
  Machinery: "bg-accent/10 text-accent",
  Chemical: "bg-secondary text-foreground",
  Agro: "bg-secondary text-foreground",
  Electronics: "bg-secondary text-foreground",
  Textile: "bg-secondary text-foreground",
};

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function ExportTrackRecord() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCountUp(850, 1600, started);
  const c2 = useCountUp(18, 1400, started);
  const c3 = useCountUp(97, 1500, started);

  return (
    <section ref={ref} className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label bar */}
        <div className="border-b border-border px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Track Record</span>
          <span className="mono text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Deal Highlights FY22–FY24</span>
        </div>

        <div className="px-6 lg:px-10 py-16 lg:py-24">
          {/* Headline + impact numbers */}
          <div className="grid lg:grid-cols-2 gap-14 items-end mb-16">
            <div>
              <div className="mono text-[12px] tracking-widest uppercase text-accent mb-4">Proven at Scale</div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.9]">
                Deals that <span className="italic text-accent">define</span><br />our capability.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-sm max-w-md">
                A selection of completed export transactions — spanning commodities, geographies, and deal sizes — demonstrating our execution depth.
              </p>
            </div>

            {/* 3 impact counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
              {[
                { value: c1, suffix: "+", label: "Crore export value (FY24)", prefix: "₹" },
                { value: c2, suffix: "yr", label: "Export track record", prefix: "" },
                { value: c3, suffix: "%", label: "On-time delivery rate", prefix: "" },
              ].map((s, i) => (
                <div key={i} className="bg-background p-6 text-center">
                  <div className="font-display text-3xl lg:text-4xl text-accent mb-1">
                    {s.prefix}{s.value.toLocaleString()}{s.suffix}
                  </div>
                  <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground leading-relaxed">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deal blotter table */}
          <div className="border border-border overflow-hidden bg-background">
            {/* Table header */}
            {/* Table header - Desktop Only */}
            <div className="hidden lg:grid grid-cols-[1fr_150px_120px_150px_120px_100px] gap-x-8 px-8 py-6 border-b-2 border-primary/10 bg-secondary/30">
              {["Commodity", "Type", "Volume", "Destination", "Value", "Year"].map((h) => (
                <div key={h} className="mono text-xs tracking-widest uppercase text-muted-foreground font-semibold">{h}</div>
              ))}
            </div>

            {/* Rows */}
            <div className="divide-y divide-border/40">
              {DEAL_RECORDS.map((deal, i) => (
                <div
                  key={i}
                  className="flex flex-col lg:grid lg:grid-cols-[1fr_150px_120px_150px_120px_100px] gap-y-4 lg:gap-x-8 px-6 lg:px-8 py-7 hover:bg-secondary/40 transition-colors lg:items-center group"
                >
                  <div className="flex items-start justify-between lg:block">
                    <div className="font-display text-xl lg:text-xl leading-tight group-hover:text-accent transition-colors">{deal.commodity}</div>
                    <div className="lg:hidden">
                      <span className={`mono text-[10px] px-2.5 py-1 tracking-widest border border-border/50 uppercase ${TYPE_STYLES[deal.type] ?? "bg-secondary text-foreground"}`}>
                        {deal.type}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Only Type */}
                  <div className="hidden lg:block">
                    <span className={`mono text-[10px] px-2.5 py-1 tracking-widest border border-border/50 uppercase ${TYPE_STYLES[deal.type] ?? "bg-secondary text-foreground"}`}>
                      {deal.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 lg:block gap-4">
                    <div className="lg:hidden mono text-[10px] uppercase text-muted-foreground mb-1">Volume</div>
                    <div className="mono text-sm text-muted-foreground whitespace-nowrap">{deal.volume}</div>
                  </div>

                  <div className="grid grid-cols-2 lg:block gap-4">
                    <div className="lg:hidden mono text-[10px] uppercase text-muted-foreground mb-1">Destination</div>
                    <div className="flex items-center gap-2.5">
                      <Globe2 className="h-4 w-4 text-accent/70 shrink-0" />
                      <span className="mono text-sm tracking-wide">{deal.destination}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:block gap-4">
                    <div className="lg:hidden mono text-[10px] uppercase text-muted-foreground mb-1">Value</div>
                    <div className="font-display text-xl text-accent whitespace-nowrap">{deal.value}</div>
                  </div>

                  <div className="grid grid-cols-2 lg:block gap-4">
                    <div className="lg:hidden mono text-[10px] uppercase text-muted-foreground mb-1">Year</div>
                    <div className="mono text-sm text-muted-foreground font-medium">{deal.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial pull-quote */}
          <div className="mt-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center border-l-4 border-accent pl-8">
            <blockquote>
              <p className="font-display text-2xl lg:text-3xl leading-snug text-foreground mb-4">
                "Jigisha's documentation team handled our entire CE certification process for the EU shipment. Zero delays, zero rejections."
              </p>
              <footer className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
                — Procurement Head, German Industrial Buyer (2024)
              </footer>
            </blockquote>
            <div className="shrink-0 hidden lg:flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-accent/40" />
              <div className="mono text-[11px] uppercase tracking-widest text-muted-foreground text-center">Verified<br />Buyer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}