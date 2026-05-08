import { PageShell } from "@/components/site/PageShell";
import { CTASection } from "@/components/site/CTASection";
import {
  ArrowRight,
  Link2,
  Factory,
  Network,
  ShieldCheck,
  Users,
  BrainCircuit,
  Globe2,
  TrendingUp,
  Zap,
  Award,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Building2,
  Landmark,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ICBMRO() {
  return (
    <PageShell>
      <ICBMROHero />
      <ICBMROMethodology />
      <ICBMROServices />
      {/* ── NEW SECTIONS ── */}
      <ICBMROGlobalPresence />
      <ICBMROCaseStudies />
      <ICBMROWhyJigisha />
      <CTASection />
    </PageShell>
  );
}

/* ─────────────────────────────────────────────
   ORIGINAL SECTIONS (lightly polished)
───────────────────────────────────────────── */

function ICBMROHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden border-b border-border py-24">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Integrated Cross-Border MRO
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter">
              Strategic Industrial <br />
              <span className="italic text-accent">Collaborations.</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We orchestrate powerful cross-border partnerships, connecting
              technologies, markets, and manufacturing capabilities. Jigisha
              serves as the central node for global industrial synergy.
            </p>
            <div className="mt-12 p-6 border-l-4 border-accent bg-secondary/20">
              <p className="font-mono text-sm leading-relaxed text-foreground">
                "Our ICBMRO framework isn't just about trade; it's about deep
                integration. We build joint ventures, technology transfers, and
                co-manufacturing ecosystems that stand the test of time."
              </p>
            </div>
          </div>

          <div className="relative lg:h-[600px] group">
            <div className="absolute inset-0 bg-accent/5 border border-border overflow-hidden">
              <img 
                src="/images/rail_smart.png" 
                alt="Industrial Synergy" 
                className="w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background/50" />
            </div>
            
            {/* Sophisticated UI Overlays */}
            <div className="absolute top-10 left-10 p-6 bg-background/90 backdrop-blur-md border border-border shadow-2xl z-20 max-w-[240px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="mono text-[11px] tracking-widest uppercase text-muted-foreground">Network Integrity</span>
              </div>
              <div className="font-display text-2xl mb-1">99.9%</div>
              <p className="text-[12px] text-muted-foreground leading-relaxed">Systemic reliability across all cross-border industrial ventures.</p>
            </div>

            <div className="absolute bottom-10 right-10 p-6 bg-primary text-primary-foreground border border-primary shadow-2xl z-20 max-w-[240px]">
              <div className="font-display text-2xl mb-1 text-accent">Real-time</div>
              <p className="text-[12px] opacity-70 leading-relaxed">Collaborative governance and transparent project tracking for global stakeholders.</p>
            </div>

            {/* Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-full h-px bg-border/50 rotate-[-15deg]" />
              <div className="absolute top-0 left-1/2 w-px h-full bg-border/50 rotate-[15deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ICBMROMethodology() {
  const steps = [
    {
      icon: BrainCircuit,
      title: "Capability Mapping",
      desc: "We analyze technological gaps and manufacturing surpluses across different geographies to identify partnership arbitrage.",
    },
    {
      icon: Link2,
      title: "Strategic Matchmaking",
      desc: "Rigorous vetting of international partners ensuring alignment in quality standards, scale, and corporate vision.",
    },
    {
      icon: ShieldCheck,
      title: "Framework Structuring",
      desc: "Developing legally sound, risk-mitigated partnership agreements, JVs, or technology transfer contracts.",
    },
    {
      icon: Factory,
      title: "Execution & Scaling",
      desc: "On-ground support to operationalize the partnership, from setting up co-manufacturing lines to joint go-to-market strategies.",
    },
  ];

  return (
    <section className="py-24 lg:py-36 border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-center mb-20">
          <div className="text-left max-w-3xl">
            <h2 className="font-display text-4xl lg:text-6xl leading-[0.9] mb-6">
              The Collaboration{" "}
              <span className="italic text-accent">Engine.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              How we build enduring industrial partnerships across borders.
            </p>
          </div>
          <div className="hidden lg:block relative aspect-video bg-secondary border border-border overflow-hidden">
             <img src="/images/rail_maintenance.png" alt="Methodology" className="w-full h-full object-cover grayscale opacity-50" />
             <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute top-8 left-10 w-full h-px bg-border hidden lg:block group-last:hidden" />
              <div className="relative z-10 bg-background border border-border h-20 w-20 rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-sm group-hover:border-accent transition-colors">
                <step.icon className="h-8 w-8 text-foreground group-hover:text-accent transition-colors" />
                <div className="absolute -top-3 -right-3 bg-accent text-white mono text-[12px] w-6 h-6 flex items-center justify-center rounded-full">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-2xl mb-4 text-center lg:text-left">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-center lg:text-left leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ICBMROServices() {
  return (
    <section className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24">
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.9] mb-8">
                Models of <br />
                <span className="italic text-accent">Integration.</span>
              </h2>
              
              <div className="mt-16 space-y-10 pr-10 hidden lg:block">
                <div className="h-px w-full bg-border" />
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="mono text-[12px] uppercase tracking-widest text-accent mb-2 font-bold">Structure</div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">Equity-aligned and risk-mitigated partnership frameworks.</p>
                  </div>
                  <div>
                    <div className="mono text-[12px] uppercase tracking-widest text-accent mb-2 font-bold">Governance</div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">Systemic oversight and collaborative decision matrices.</p>
                  </div>
                  <div>
                    <div className="mono text-[12px] uppercase tracking-widest text-accent mb-2 font-bold">IP Safety</div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">Robust technology transfer protocols and licensing.</p>
                  </div>
                  <div>
                    <div className="mono text-[12px] uppercase tracking-widest text-accent mb-2 font-bold">Localisation</div>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">Deep manufacturing integration near target markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="relative border border-border p-8 bg-background overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                <img src="/images/rail_smart.png" alt="JV" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-3xl">Joint Ventures</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We facilitate the creation of Joint Ventures between Indian
                  conglomerates and foreign technology leaders. Jigisha handles
                  the entire lifecycle: from partner identification and due
                  diligence to equity structuring and regulatory compliance (FEMA,
                  RBI).
                </p>
              </div>
            </div>

            <div className="relative border border-border p-8 bg-background overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                <img src="/images/rail_maintenance.png" alt="Tech Transfer" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <BrainCircuit className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-3xl">Technology Transfer</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Accelerating Indian manufacturing capability by acquiring
                  licenses and technical know-how from global innovators. We
                  ensure IP protection, manage royalty structures, and oversee the
                  localization of manufacturing processes.
                </p>
              </div>
            </div>

            <div className="relative border border-border p-8 bg-background overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none">
                <img src="/images/rail_smart.png" alt="Co-Mfg" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Factory className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-3xl">
                    Co-Manufacturing Ecosystems
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Creating distributed manufacturing networks where components are
                  produced across different countries based on cost and skill
                  advantages, then assembled near the target market. A highly
                  resilient supply chain model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEW SECTION 1 — GLOBAL PRESENCE
   Ticker-style stat bar + world region cards
   with bold typographic treatment
───────────────────────────────────────────── */

function ICBMROGlobalPresence() {
  const stats = [
    { value: "28+", label: "Countries Active" },
    { value: "₹4,200Cr", label: "JV Value Facilitated" },
    { value: "140+", label: "Partnerships Closed" },
    { value: "17", label: "Industry Verticals" },
  ];

  const regions = [
    {
      region: "Europe",
      flag: "🇩🇪🇮🇹🇫🇷",
      focus: "Precision Engineering & Automation",
      icon: Landmark,
      partners: "Aerospace OEMs, Industrial Robotics, Chemical Processing",
      deals: "38 Deals",
    },
    {
      region: "East Asia",
      flag: "🇯🇵🇰🇷🇨🇳",
      focus: "Electronics & Advanced Manufacturing",
      icon: Cpu,
      partners: "Semiconductor Fabs, EV Battery Tech, Optics",
      deals: "54 Deals",
    },
    {
      region: "North America",
      flag: "🇺🇸🇨🇦",
      focus: "Defence, Space & Deep Tech",
      icon: Zap,
      partners: "Defence Primes, Space Startups, Industrial IoT",
      deals: "29 Deals",
    },
    {
      region: "Middle East",
      flag: "🇦🇪🇸🇦",
      focus: "Infrastructure & Energy Transition",
      icon: Building2,
      partners: "Sovereign Funds, Oil & Gas EPC, Renewables",
      deals: "19 Deals",
    },
  ];

  return (
    <section className="relative bg-foreground text-background overflow-hidden border-b border-border">
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Stat ticker bar */}
      <div className="border-b border-background/10 py-6 relative z-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-background/10">
            {stats.map((s, i) => (
              <div key={i} className="px-8 first:pl-0 last:pr-0 py-2">
                <div className="font-display text-4xl lg:text-5xl tracking-tighter text-background">
                  {s.value}
                </div>
                <div className="mono text-[12px] tracking-widest uppercase text-background/50 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-background/50">
                Global Footprint
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-[0.9] tracking-tighter text-background mb-8">
              Where We <br />
              <span className="italic text-accent">Operate.</span>
            </h2>
            <p className="text-background/60 leading-relaxed text-lg">
              Jigisha's ICBMRO network spans four strategic geographies, each
              selected for its distinct industrial DNA and complementary
              strengths with India's manufacturing ambition.
            </p>
            <div className="mt-10 flex items-center gap-4 group cursor-pointer">
              <Globe2 className="h-5 w-5 text-accent" />
              <span className="font-mono text-sm tracking-wide text-background/70 group-hover:text-background transition-colors">
                View Full Network Map
              </span>
              <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-background/10">
            {regions.map((r, i) => (
              <div
                key={i}
                className="group bg-foreground p-8 hover:bg-background/5 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-2xl mb-2 tracking-tight">{r.flag}</div>
                    <h3 className="font-display text-3xl text-background">
                      {r.region}
                    </h3>
                  </div>
                  <div className="px-3 py-1 border border-accent/30 rounded-full">
                    <span className="mono text-[12px] text-accent tracking-widest">
                      {r.deals}
                    </span>
                  </div>
                </div>
                <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
                  {r.focus}
                </p>
                <p className="text-background/50 text-sm leading-relaxed">
                  {r.partners}
                </p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-background/40 font-mono">
                    Explore region
                  </span>
                  <ArrowUpRight className="h-3 w-3 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEW SECTION 2 — CASE STUDIES
   Full-bleed editorial layout with numbered
   cases, outcome metrics, and sector tags
───────────────────────────────────────────── */

function ICBMROCaseStudies() {
  const cases = [
    {
      index: "01",
      sector: "Aerospace MRO",
      title: "Indian MRO Hub × German OEM",
      outcome: "₹800Cr JV, 3 Co-located MRO Bays",
      description:
        "Facilitated a landmark Joint Venture between a Hyderabad-based MRO cluster and a Frankfurt-headquartered aerospace precision manufacturer. The deal unlocked Offset Policy credits, created 1,200+ skilled jobs, and positioned India as the region's A320 heavy maintenance hub.",
      metrics: [
        { label: "JV Equity", value: "₹800Cr" },
        { label: "Offset Credits", value: "34%" },
        { label: "Jobs Created", value: "1,200+" },
      ],
      tag: "Joint Venture",
    },
    {
      index: "02",
      sector: "EV Battery Tech",
      title: "Korean Cell Tech → Indian OEM",
      outcome: "Technology License + Royalty Structure",
      description:
        "Structured a cross-border technology licensing agreement between a Seoul-based lithium cell innovator and a Pune OEM. Jigisha managed end-to-end IP documentation, royalty waterfall modelling, and on-site commissioning support for the localised cell assembly line.",
      metrics: [
        { label: "License Duration", value: "12 Years" },
        { label: "Localisation", value: "68%" },
        { label: "Annual Royalty", value: "₹42Cr" },
      ],
      tag: "Technology Transfer",
    },
    {
      index: "03",
      sector: "Defence Electronics",
      title: "US Prime × DRDO-Listed MSME",
      outcome: "Offset-Compliant Co-Manufacturing Line",
      description:
        "Orchestrated a tri-party co-manufacturing arrangement between a Virginia-based defence prime, a DRDO-listed MSME in Bengaluru, and a government-approved test facility. The framework met stringent offset obligations while transferring critical avionics assembly knowledge.",
      metrics: [
        { label: "Offset Value", value: "$120M" },
        { label: "Transfer Period", value: "5 Years" },
        { label: "Components", value: "47 SKUs" },
      ],
      tag: "Co-Manufacturing",
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-background border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Proof of Work
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter">
              Deals That <br />
              <span className="italic text-accent">Defined Markets.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              A selection of landmark collaborations shaped by Jigisha's ICBMRO
              framework — each representing a distinct integration model.
            </p>
          </div>
        </div>

        {/* Cases */}
        <div className="space-y-0 divide-y divide-border">
          {cases.map((c, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-12 gap-8 py-14 px-0"
            >
              {/* Number + sector */}
              <div className="lg:col-span-2">
                <div className="font-display text-6xl text-muted-foreground/20 leading-none">
                  {c.index}
                </div>
                <div className="mono text-[12px] tracking-widest uppercase text-accent mt-4">
                  {c.sector}
                </div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-accent mono text-[12px] tracking-widest uppercase">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl mb-4">
                  {c.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div className="space-y-4">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                      <span className="text-sm text-muted-foreground font-mono">
                        {m.label}
                      </span>
                      <span className="font-display text-xl">{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    Case Study Reference
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-accent/50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   NEW SECTION 3 — WHY JIGISHA
   Split dark/light panel layout with
   differentiator pillars + trust signals
───────────────────────────────────────────── */

function ICBMROWhyJigisha() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Regulatory Mastery",
      desc: "Deep expertise in FEMA, RBI, DPIIT, and offset policy frameworks ensures every partnership is legally bulletproof from day one.",
    },
    {
      icon: Globe2,
      title: "Dual-Shore Teams",
      desc: "Dedicated on-ground teams in both India and the partner country eliminate the translation gap that kills most cross-border deals.",
    },
    {
      icon: TrendingUp,
      title: "Value-Aligned Fees",
      desc: "We earn when you earn. Our success-fee model means our incentives are structurally aligned with the outcome you need.",
    },
    {
      icon: Award,
      title: "Sector Depth",
      desc: "Seventeen verticals. Each led by a domain specialist who has operated inside the industry — not just advised on it.",
    },
    {
      icon: BarChart3,
      title: "Structured Governance",
      desc: "Every JV and licensing deal includes a governance framework, escalation matrix, and performance KPIs built in from inception.",
    },
    {
      icon: Zap,
      title: "Speed-to-Close",
      desc: "Our templated diligence playbooks and pre-vetted partner network cut average time-to-term-sheet from 9 months to under 90 days.",
    },
  ];

  const trustSignals = [
    "MCA21 Registered Advisors",
    "DPIIT Recognised",
    "FICCI & CII Member",
    "ISO 9001:2015 Certified",
  ];

  return (
    <section className="bg-background border-b border-border overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Top banner */}
        <div className="py-20 grid lg:grid-cols-2 gap-16 border-b border-border">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
                The Jigisha Edge
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.9] tracking-tighter">
              Why Jigisha <br />
              <span className="italic text-accent">Over Everyone.</span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most consultants connect introductions. Jigisha builds
              institutions. We embed into transactions, manage complexity, and
              deliver structures that outlast the handshake. Six pillars
              differentiate our practice.
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border py-0">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group bg-background p-10 hover:bg-secondary/10 transition-colors"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="mt-1 p-2.5 bg-accent/10 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-2xl leading-tight pt-1">
                  {p.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm pl-0">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="border-t border-border py-8 flex flex-wrap items-center gap-6 lg:gap-12">
          <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">
            Recognised By
          </span>
          {trustSignals.map((t, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-sm font-mono text-foreground">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}