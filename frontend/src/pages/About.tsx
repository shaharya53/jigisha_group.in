import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import {
  Factory, Building2, Cpu, Wrench, TrendingUp, BarChart3,
  Globe, MapPin, ArrowRight, Zap, Leaf, ShieldCheck,
} from "lucide-react";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { IndiaMap } from "@/components/site/IndiaMap";
import { CTASection } from "@/components/site/CTASection";

/* ─── DATA ──────────────────────────────────────────────────── */

const STATS = [
  { n: "23", label: "Subsidiary Companies" },
  { n: "72", label: "Business Verticals" },
  { n: "5", label: "Zonal Offices" },
  { n: "36", label: "State Offices" },
  { n: "5,000+", label: "Branch & Service Points" },
  { n: "5", label: "International Regions" },
];

const CAPABILITIES = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Infrastructure" },
  { icon: Cpu, label: "Technology" },
  { icon: Wrench, label: "Services" },
  { icon: TrendingUp, label: "Finance" },
  { icon: BarChart3, label: "Consulting" },
];

const SECTORS = [
  "Railways", "Defence", "Agriculture", "Renewable Energy",
  "Information Technology", "Healthcare", "Logistics", "Electricals",
  "Automobiles", "Engineering", "Media", "Infrastructure",
  "Hospitality", "Consultancy", "Environmental Services", "International Trade",
];

const ROADMAP = [
  { year: "Year 1", label: "Foundation", revenue: "₹1,613 Cr", color: "bg-accent" },
  { year: "Year 5", label: "Scale", revenue: "₹24,080 Cr", color: "bg-primary" },
  { year: "Year 10", label: "Dominance", revenue: "₹96,700 Cr", color: "bg-primary" },
];

const MISSIONS = [
  { icon: TrendingUp, code: "01", name: "Mission Grow India", desc: "Scaling industrial operations and revenue across India's growth corridors." },
  { icon: ShieldCheck, code: "02", name: "Mission Pro India", desc: "Building professional-grade systems, governance and talent pipelines." },
  { icon: Leaf, code: "03", name: "Mission Jai Kisan", desc: "Empowering the agricultural sector through Agro Fusion and rural industry." },
  { icon: Factory, code: "04", name: "Mission Agro Fusion", desc: "Integrating agriculture with industrial supply chains for national food security." },
  { icon: Globe, code: "05", name: "Mission Go Global", desc: "Expanding Jigisha's industrial universe into international markets." },
];

const LEADERSHIP = [
  { initials: "TUS", name: "Thakur Umesh Singh", role: "Founder Chairman", note: "Visionary architect of the Industrial Universe" },
  { initials: "SK", name: "Shashank Kumar", role: "Founder Director", note: "Driving strategy and group-wide execution" },
  { initials: "VK", name: "Vinod Kumar", role: "Director — Operations", note: "Overseeing pan-India service delivery" },
  { initials: "EB", name: "Editorial Board", role: "Group Strategy", note: "Steering communications and brand direction" },
];

const INDIA_CITIES = [
  "Ahmedabad (HQ)", "Bhopal (Regd.)", "Delhi NCR", "Mumbai",
  "Chennai", "Hyderabad", "Kolkata", "Pune", "Vadodara",
  "Ranchi", "Bhilai", "Coimbatore",
];

const GLOBAL_REGIONS = ["USA", "UK", "UAE", "Australia", "Canada"];

const WHY_DATA = [
  { n: "01", icon: Building2, title: "Integrated Ecosystem", desc: "23 entities operating as one unified industrial platform — not a loose holding structure." },
  { n: "02", icon: ShieldCheck, title: "Governance First", desc: "Professional-grade compliance, risk management and board-level oversight across all subsidiaries." },
  { n: "03", icon: Cpu, title: "Innovation-Led", desc: "Technology, IoT, ERP and AI woven into every operational layer." },
  { n: "04", icon: TrendingUp, title: "Mission-Aligned", desc: "Directly tied to India's national industrial growth agenda via Mission Gold Bird India." },
  { n: "05", icon: Globe, title: "Long-Term Vision", desc: "10-year roadmap targeting ₹96,700 Cr revenue with a clear path to global scale." },
];

/* ─── PAGE ──────────────────────────────────────────────────── */

export default function About() {
  return (
    <PageShell>
      <HeroSection />
      <OverviewSection />
      <VisionMission />
      <GroupScale />
      <WhatWeDo />
      <OurStructure />
      <StrategicRoadmap />
      <MissionGoldBird />
      <LeadershipSection />
      <WhyJigisha />
      <Footprint />
      <CTASection />
    </PageShell>
  );
}

/* ─── 1. HERO ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border min-h-[90vh] flex items-end">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0">
        <img src="/images/about_hero.png" alt="Industrial Facility" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
      </div>
      <div className="absolute inset-0 bg-blueprint opacity-[0.06]" />
      <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[800px] bg-dots opacity-20" />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display text-[3rem] sm:text-7xl lg:text-[7.5rem] leading-[0.88] tracking-tighter text-primary-foreground">
              The Industrial<br />
              <span className="italic text-accent">Universe of India.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              Jigisha Group of Companies is a diversified industrial conglomerate
              operating 23 entities across 72 verticals — building an integrated
              ecosystem that powers industries, infrastructure, and innovation
              across India and globally.
            </p>

            {/* Highlight badges */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["23 Group Companies", "72 Industry Verticals", "Pan-India Presence", "Expanding Global Footprint"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 border border-accent/40 text-accent mono text-[12px] tracking-widest uppercase px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-5">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:bg-accent/90 transition-colors">
                Start a Conversation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:border-accent hover:text-accent transition-colors">
                Our Services
              </Link>
            </div>
          </div>

          {/* Right: floating stat strip */}

        </div>

        {/* Bottom meta bar */}
        <div className="mt-20 pt-6 border-t border-primary-foreground/10 flex flex-wrap gap-8 mono text-[12px] tracking-widest text-primary-foreground/40 uppercase">
          <span>HQ — Ahmedabad, Gujarat</span>
          <span>Reg. Office — Bhopal, MP</span>
          <span>Est. — 2020s</span>
          <span>CIN — Jigisha Enterprises Ltd.</span>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. COMPANY OVERVIEW ─────────────────────────────────────── */
function OverviewSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[0.92]">
            An integrated<br />
            <span className="italic text-accent">industrial ecosystem.</span>
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
            Jigisha Group of Companies is a diversified industrial ecosystem
            operating under its holding company, Jigisha Enterprises Ltd. The
            Group has been architected as an integrated "Industrial Universe"
            where each subsidiary contributes a distinct capability — spanning
            manufacturing, services, technology, infrastructure, and finance.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            With a strong foundation in governance, innovation, and scalability,
            Jigisha is positioned as a next-generation industrial brand aligned
            with India's long-term growth vision.
          </p>
          <a href="#structure" className="mt-10 inline-flex items-center gap-3 mono text-xs tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
            See the Structure <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        {/* Image & Data panel */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/3] w-full overflow-hidden border border-border bg-secondary/10">
            <img src="/images/about_overview.png" alt="Corporate Boardroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative mt-8 sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:w-[85%] border border-border bg-background p-6 lg:p-8 shadow-2xl">
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["Holding Company", "Jigisha Enterprises Ltd."],
                ["Model", "Hub & Spoke"],
                ["Founded", "2020s"],
                ["CIN Status", "Active"],
                ["Entities", "23 Subsidiaries"],
                ["Scope", "Pan-India + Global"],
              ].map(([k, v]) => (
                <div key={k} className="border border-border p-4 bg-background">
                  <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground">{k}</div>
                  <div className="font-display text-lg mt-1">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 mono text-[11px] tracking-widest uppercase text-muted-foreground">
              Shared Services: HR · Finance · Legal · Procurement · IT · Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 3. VISION & MISSION ─────────────────────────────────────── */
function VisionMission() {
  return (
    <section className="relative border-b border-border bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/about_vision.png" alt="Futuristic Industry" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
      </div>
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 z-10">
        <div className="grid lg:grid-cols-2 gap-px bg-primary-foreground/10">
          {/* Vision */}
          <div className="bg-primary p-10 lg:p-16 relative">
            <div className="absolute top-0 right-0 mono text-[11px] tracking-widest text-accent border-l border-b border-primary-foreground/15 px-3 py-1">01 / VISION</div>
            <div className="font-display text-8xl text-accent/20 leading-none select-none mb-8">"</div>
            <h3 className="font-display text-2xl lg:text-3xl leading-snug">
              To build India's most integrated and globally recognized industrial ecosystem,
              driving <span className="italic text-accent">sustainable growth,</span> innovation,
              and national development.
            </h3>
            <div className="mt-10 h-px w-16 bg-accent" />
            <div className="mt-4 mono text-[11px] tracking-[0.25em] uppercase text-primary-foreground/50">Our Vision</div>
          </div>

          {/* Mission */}
          <div className="bg-primary/80 p-10 lg:p-16 relative">
            <div className="absolute top-0 right-0 mono text-[11px] tracking-widest text-accent border-l border-b border-primary-foreground/15 px-3 py-1">02 / MISSION</div>
            <div className="font-display text-8xl text-accent/20 leading-none select-none mb-8">"</div>
            <h3 className="font-display text-2xl lg:text-3xl leading-snug">
              To create a unified industrial universe that delivers value across sectors
              by combining <span className="italic text-accent">technology, infrastructure,</span> and
              human capital at scale.
            </h3>
            <div className="mt-10 h-px w-16 bg-accent" />
            <div className="mt-4 mono text-[11px] tracking-[0.25em] uppercase text-primary-foreground/50">Our Mission</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. GROUP SCALE ─────────────────────────────────────────── */
function GroupScale() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl lg:text-7xl mt-6 leading-[0.92]">
              Numbers that<br />
              <span className="italic text-accent">define the universe.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground lg:pt-16">
            A diversified, professionally governed enterprise platform built for scale across every dimension of Indian industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {STATS.map((s, i) => (
            <div key={s.label} className={`p-10 lg:p-12 relative group hover:bg-primary hover:text-primary-foreground transition-all ${i % 2 === 0 ? "bg-background" : "bg-secondary/20"}`}>
              <div className="absolute top-4 right-4 mono text-[11px] tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</div>
              <AnimatedStat value={s.n} className="font-display text-6xl lg:text-7xl tabular-nums leading-none" />
              <div className="mt-4 mono text-[11px] tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/60">{s.label}</div>
              <div className="mt-6 h-px w-8 bg-accent group-hover:w-16 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. WHAT WE DO ──────────────────────────────────────────── */
function WhatWeDo() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[0.92]">
              Sixteen sectors.<br />
              <span className="italic text-accent">One operating system.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              The Group operates across multiple sectors including railways, defence, agriculture,
              renewable energy, technology, healthcare, logistics and international trade.
            </p>
          </div>
          {/* Capability cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border">
            {CAPABILITIES.map(({ icon: Icon, label }, i) => (
              <div key={label} className="bg-background p-8 group hover:bg-accent/5 transition-colors duration-200 flex flex-col justify-between relative">
                <div className="flex items-start justify-between mb-6">
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="mono text-[11px] tracking-widest text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="font-display text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector tags */}
        <div className="border-t border-border pt-12">
          <div className="mono text-[12px] tracking-[0.25em] uppercase text-muted-foreground mb-6">All Sectors</div>
          <div className="flex flex-wrap gap-2">
            {SECTORS.map((s, i) => (
              <span
                key={s}
                className={`px-4 py-2 font-display text-base border transition-colors hover:border-accent hover:text-accent cursor-default ${i % 6 === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border bg-background"
                  }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. OUR STRUCTURE ───────────────────────────────────────── */
function OurStructure() {
  const subsidiaries = [
    ["JIT", "Jigisha Infotech Pvt Ltd", "Technology & IT"],
    ["JMV", "Jigisha Media Vision Pvt Ltd", "Media & Communications"],
    ["JEP", "Jigisha Engineering Pvt Ltd", "Engineering & Manufacturing"],
    ["JEC", "Jigisha Envirocare Pvt Ltd", "Environment & Green Tech"],
    ["JIF", "Jigisha Infin Pvt Ltd", "Finance & Credit"],
    ["JLP", "Jigisha Logistics Pvt Ltd", "Logistics & Supply Chain"],
    ["JIS", "Jigisha Industrial Services Pvt Ltd", "Services & Maintenance"],
  ];

  return (
    <section id="structure" className="border-b border-border bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-accent">Corporate Architecture</span>
            </div>
            <h2 className="font-display text-5xl lg:text-8xl leading-[0.88]">
              Industrial Universe<br />
              <span className="italic text-accent">Architecture.</span>
            </h2>
          </div>
          <div className="lg:border-l lg:border-primary-foreground/10 lg:pl-10 self-end flex flex-col gap-5">
            <p className="text-primary-foreground/60 leading-relaxed">
              Jigisha operates through a structured portfolio of 23 entities, each aligned
              to a specific industry vertical while contributing to a unified ecosystem.
              This structure enables operational depth, strategic flexibility, and cross-sector synergy.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[["23", "Entities"], ["72", "Verticals"], ["8+", "Shown"]].map(([n, l]) => (
                <div key={l} className="border border-primary-foreground/10 px-4 py-3">
                  <div className="font-display text-2xl text-accent leading-none">{n}</div>
                  <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/40 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Portfolio grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/[0.07]">

          {/* Holding company — spans 2 cols */}
          <div className="sm:col-span-2 relative border border-accent/50 bg-primary overflow-hidden p-8 flex flex-col justify-between min-h-44 group hover:bg-accent/5 transition-colors duration-300">
            {/* Ghost ticker */}
            <div className="absolute right-4 bottom-0 font-display text-[110px] leading-none text-accent/[0.08] select-none pointer-events-none group-hover:text-accent/[0.14] transition-colors duration-300">
              JEL
            </div>
            <div className="relative">
              <div className="mono text-[11px] tracking-widest uppercase text-accent mb-3 flex items-center gap-2">
                <span className="w-1 h-1 bg-accent" /> Holding Company
              </div>
              <div className="font-display text-3xl lg:text-4xl leading-tight">Jigisha Enterprises Ltd.</div>
            </div>
            <div className="flex items-end justify-between relative mt-6">
              <div className="mono text-[12px] text-primary-foreground/40 uppercase tracking-widest">Governance · Strategy · Oversight</div>
              <span className="mono text-[12px] tracking-widest uppercase text-accent border border-accent/30 px-2 py-0.5">JEL</span>
            </div>
          </div>

          {/* Subsidiaries */}
          {subsidiaries.map(([ticker, name, sector]) => (
            <div
              key={ticker}
              className="relative bg-primary border border-primary-foreground/[0.08] p-6 overflow-hidden group hover:border-accent/40 hover:bg-primary-foreground/[0.04] transition-all duration-200 min-h-36 flex flex-col justify-between"
            >
              {/* Ghost ticker watermark */}
              <div className="absolute bottom-1 right-3 font-display text-6xl leading-none text-primary-foreground/[0.05] select-none pointer-events-none group-hover:text-accent/[0.1] transition-colors duration-300">
                {ticker}
              </div>
              <div className="relative">
                <div className="mono text-[11px] tracking-widest uppercase text-accent mb-2">{ticker}</div>
                <div className="font-display text-base leading-tight">{name}</div>
              </div>
              <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/35 mt-3 relative">{sector}</div>
            </div>
          ))}

          {/* +15 more — spans remaining 3 cols to fill the row */}
          <div className="lg:col-span-3 sm:col-span-1 relative bg-primary border border-dashed border-primary-foreground/15 p-8 flex items-center justify-between group hover:border-accent/30 transition-colors duration-200 min-h-36">
            <div>
              <div className="font-display text-5xl text-accent/50 group-hover:text-accent/70 transition-colors leading-none">+15</div>
              <div className="mono text-[11px] tracking-widest uppercase text-primary-foreground/30 mt-2">More entities under development</div>
            </div>
            <div className="font-display text-[90px] leading-none text-primary-foreground/[0.04] select-none pointer-events-none">···</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. STRATEGIC ROADMAP ───────────────────────────────────── */
function StrategicRoadmap() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Left — heading + milestone path */}
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent" />
              <span className="mono text-[12px] tracking-widest uppercase text-accent">Strategic Roadmap</span>
            </div>
            <h2 className="font-display text-4xl lg:text-7xl leading-[0.92]">
              10-year path to<br />
              <span className="italic text-accent">dominance.</span>
            </h2>

            {/* Milestone path — 3 steps with connectors */}
            <div className="mt-10 flex items-stretch gap-0">
              {ROADMAP.map((r, i) => (
                <div key={r.year} className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 border border-border p-4 bg-secondary/20 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200">
                    <div className="mono text-[11px] tracking-widest uppercase text-accent mb-1">{r.year}</div>
                    <div className="font-display text-base leading-tight">{r.label}</div>
                    <div className="mono text-[12px] text-muted-foreground mt-1 truncate">{r.revenue}</div>
                  </div>
                  {i < ROADMAP.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-accent/40 shrink-0 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — description + fundraise */}
          <div className="lg:pt-20 flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              The Group is executing a 10-year strategic roadmap designed to scale operations, expand globally, and strengthen its industrial footprint.
            </p>

            {/* Key stats row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border p-4 bg-secondary/20">
                <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1">Revenue Target</div>
                <div className="font-display text-2xl text-foreground">₹96,700 Cr</div>
                <div className="mono text-[11px] text-muted-foreground mt-0.5">by Year 10</div>
              </div>
              <div className="border border-accent/30 p-4 bg-accent/5">
                <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-1">Planned Fundraise</div>
                <div className="font-display text-2xl text-accent">₹500–850 Cr</div>
                <div className="mono text-[11px] text-muted-foreground mt-0.5">Equity + Debt Mix</div>
              </div>
            </div>

            <div className="h-px bg-linear-to-r from-accent/30 to-transparent" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
            {ROADMAP.map((r, i) => (
              <div key={r.year} className="bg-background p-10 lg:p-12 relative group hover:bg-primary hover:text-primary-foreground transition-all">
                <div className="absolute top-0 right-0 mono text-[11px] tracking-widest text-accent border-l border-b border-border px-3 py-1">{String(i + 1).padStart(2, "0")} / 03</div>
                <div className="inline-flex items-center gap-2 border border-accent text-accent px-3 py-1 mono text-[11px] tracking-widest uppercase mb-6">
                  <Zap className="h-3 w-3" /> {r.year}
                </div>
                <div className="font-display text-xl text-muted-foreground group-hover:text-primary-foreground/60 uppercase tracking-widest">{r.label}</div>
                <div className="font-display text-5xl lg:text-6xl mt-3 leading-none tabular-nums">{r.revenue}</div>
                <div className="mt-2 mono text-[12px] tracking-widest uppercase text-muted-foreground group-hover:text-primary-foreground/50">Projected Revenue</div>
                <div className="mt-8 h-1 bg-border group-hover:bg-primary-foreground/20">
                  <div className={`h-full ${r.color} transition-all`} style={{ width: i === 0 ? "15%" : i === 1 ? "50%" : "100%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 8. MISSION GOLD BIRD INDIA ────────────────────────────── */
function MissionGoldBird() {
  const [active, setActive] = useState(0);
  const current = MISSIONS[active];
  const ActiveIcon = current.icon;

  return (
    <section className="border-b border-border overflow-hidden">

      {/* ── Header ── */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 lg:pt-36 pb-14">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
              <span className="mono text-[12px] tracking-widest uppercase text-accent">Mission Gold Bird India</span>
            </div>
            <h2 className="font-display text-5xl lg:text-8xl leading-[0.88]">
              Five missions.<br />
              <span className="italic text-accent">One nation.</span>
            </h2>
          </div>
          <div className="lg:border-l lg:border-border lg:pl-10 self-end flex flex-col gap-4">
            <p className="text-muted-foreground leading-relaxed">
              The Group operates under the "Mission Gold Bird India" umbrella —
              a multi-mission initiative focused on economic growth, innovation,
              agriculture, and global expansion.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-accent/20" />
              <span className="mono text-[11px] tracking-widest uppercase text-muted-foreground">5 active missions</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive split panel ── */}
      <div className="grid lg:grid-cols-12 border-t border-border">

        {/* Left — mission selector */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border">
          {MISSIONS.map(({ icon: Icon, code, name }, i) => (
            <div
              key={code}
              onMouseEnter={() => setActive(i)}
              className="relative cursor-default border-b border-border last:border-b-0 bg-background hover:bg-secondary/40 transition-colors duration-200 overflow-hidden"
            >
              {/* Active accent dot indicator */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent transition-opacity duration-200 ml-3
                ${active === i ? "opacity-100" : "opacity-0"}`} />
              <div className="px-8 py-6 flex items-center gap-5">
                <div className="h-11 w-11 grid place-items-center border border-border shrink-0">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="mono text-[11px] tracking-widest uppercase text-accent block mb-0.5">{code}</span>
                  <h3 className={`font-display text-xl transition-colors duration-200 ${active === i ? "text-accent" : ""}`}>{name}</h3>
                </div>
                <ArrowRight className={`h-4 w-4 text-accent flex-shrink-0 transition-all duration-200
                  ${active === i ? "opacity-100" : "opacity-0"}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Right — active mission showcase */}
        <div className="lg:col-span-7 bg-primary text-primary-foreground relative overflow-hidden min-h-96">
          <div className="absolute inset-0 bg-blueprint opacity-[0.03]" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/15 blur-[80px] pointer-events-none" />

          {/* Giant ghost number */}
          <div
            key={`num-${active}`}
            className="reveal absolute bottom-0 right-0 font-display leading-none text-primary-foreground/[0.05] select-none pointer-events-none translate-x-4 translate-y-4"
            style={{ fontSize: "clamp(120px, 18vw, 240px)" }}
          >
            {current.code}
          </div>

          {/* Content — key forces remount → triggers reveal animation */}
          <div key={active} className="reveal relative h-full flex flex-col justify-between p-10 lg:p-14 min-h-96">

            {/* Top: fraction + dot nav */}
            <div className="flex items-center justify-between">
              <span className="mono text-[12px] tracking-widest uppercase text-accent">
                {current.code} / 05
              </span>
              <div className="flex gap-2">
                {MISSIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-[3px] transition-all duration-300 cursor-pointer
                      ${active === i ? "w-8 bg-accent" : "w-2 bg-primary-foreground/20 hover:bg-primary-foreground/40"}`}
                  />
                ))}
              </div>
            </div>

            {/* Mission content */}
            <div>
              <div className="h-16 w-16 grid place-items-center border border-primary-foreground/15 bg-primary-foreground/5 mb-8">
                <ActiveIcon className="h-7 w-7 text-accent" />
              </div>
              <h2 className="font-display text-4xl lg:text-6xl leading-tight mb-5">
                {current.name}
              </h2>
              <p className="text-primary-foreground/55 text-base leading-relaxed max-w-lg">
                {current.desc}
              </p>
            </div>

            {/* Bottom: prev / next */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActive(i => Math.max(0, i - 1))}
                disabled={active === 0}
                className="mono text-[11px] tracking-widest uppercase text-primary-foreground/30 hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                ← Prev
              </button>
              <div className="h-px flex-1 bg-primary-foreground/10" />
              <button
                onClick={() => setActive(i => Math.min(MISSIONS.length - 1, i + 1))}
                disabled={active === MISSIONS.length - 1}
                className="mono text-[11px] tracking-widest uppercase text-primary-foreground/30 hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. LEADERSHIP ──────────────────────────────────────────── */
function LeadershipSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl lg:text-7xl mt-6 leading-[0.92]">
              Guided by<br />
              <span className="italic text-accent">visionaries.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              The Group is led by Founder Chairman Thakur Umesh Singh, supported by a team
              of directors driving strategy, operations, and innovation across all verticals.
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-6">
            <div className="aspect-[21/9] w-full overflow-hidden border border-border">
              <img src="/images/about_leadership.png" alt="Executive Leadership" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {LEADERSHIP.map((l, i) => (
            <div key={l.name} className="bg-background group hover:bg-primary hover:text-primary-foreground transition-all">
              {/* Avatar */}
              <div className="relative h-56 bg-secondary/60 group-hover:bg-primary/60 transition-colors overflow-hidden flex items-center justify-center border-b border-border group-hover:border-primary-foreground/10">
                <div className="absolute inset-0 bg-dots opacity-20" />
                <span className="relative font-display text-6xl text-primary/30 group-hover:text-primary-foreground/20 select-none">
                  {l.initials}
                </span>
                <div className="absolute bottom-3 right-3 mono text-[12px] tracking-widest text-accent border border-accent/30 px-2 py-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              {/* Info */}
              <div className="p-7">
                <div className="font-display text-2xl leading-tight">{l.name}</div>
                <div className="mono text-[12px] tracking-widest uppercase text-accent mt-2">{l.role}</div>
                <p className="mt-4 text-sm text-muted-foreground group-hover:text-primary-foreground/70">{l.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 10. WHY JIGISHA ────────────────────────────────────────── */
function WhyJigisha() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04]" />
      {/* Soft centre glow */}
      <div className="absolute top-0 left-1/2 w-[900px] h-[500px] bg-accent/6 blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
              <span className="mono text-[12px] tracking-widest uppercase text-accent">Why Jigisha</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88]">
              A new model of<br />
              <span className="italic text-accent">industrial growth.</span>
            </h2>
          </div>
          <div className="lg:border-l lg:border-primary-foreground/10 lg:pl-10">
            <p className="text-primary-foreground/60 leading-relaxed">
              Jigisha represents a new model of industrial growth — one that integrates
              multiple sectors into a single, scalable ecosystem delivering long-term
              value to investors, partners, and society.
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-accent/40 to-transparent" />
          </div>
        </div>

        {/* ── Card grid ── */}
        <div className="space-y-4">

          {/* Row 1 — 2 featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_DATA.slice(0, 2).map(({ n, icon: Icon, title, desc }) => (
              <div
                key={n}
                className="group relative border border-primary-foreground/10 hover:border-accent/50
                           bg-primary-foreground/[0.04] hover:bg-primary-foreground/[0.07]
                           transition-all duration-300 p-8 overflow-hidden flex flex-col min-h-64"
              >
                {/* Ghost watermark */}
                <div className="absolute bottom-2 right-5 font-display text-[110px] leading-none select-none pointer-events-none
                                text-primary-foreground/[0.04] group-hover:text-primary-foreground/[0.08] transition-colors duration-300">
                  {n}
                </div>
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-8 relative">
                  <span className="mono text-[12px] tracking-widest uppercase text-accent">{n}</span>
                  <Icon className="h-7 w-7 text-accent/60 group-hover:text-accent transition-colors duration-200" />
                </div>
                {/* Title */}
                <div className="font-display text-2xl lg:text-3xl mb-4 relative flex-1">{title}</div>
                {/* Desc */}
                <p className="text-primary-foreground/55 text-sm leading-relaxed relative">{desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHY_DATA.slice(2).map(({ n, icon: Icon, title, desc }) => (
              <div
                key={n}
                className="group relative border border-primary-foreground/10 hover:border-accent/50
                           bg-primary-foreground/[0.04] hover:bg-primary-foreground/[0.07]
                           transition-all duration-300 p-7 overflow-hidden flex flex-col min-h-52"
              >
                {/* Ghost watermark */}
                <div className="absolute bottom-2 right-4 font-display text-[88px] leading-none select-none pointer-events-none
                                text-primary-foreground/[0.04] group-hover:text-primary-foreground/[0.08] transition-colors duration-300">
                  {n}
                </div>
                {/* Number + icon */}
                <div className="flex items-start justify-between mb-6 relative">
                  <span className="mono text-[12px] tracking-widest uppercase text-accent">{n}</span>
                  <Icon className="h-6 w-6 text-accent/60 group-hover:text-accent transition-colors duration-200" />
                </div>
                <div className="font-display text-xl mb-3 relative flex-1">{title}</div>
                <p className="text-primary-foreground/55 text-sm leading-relaxed relative">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 11. FOOTPRINT ──────────────────────────────────────────── */
function Footprint() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Accent glow blob */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-accent/8 blur-[140px] pointer-events-none -translate-y-1/4 translate-x-1/4" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 relative">

        {/* ── Header row ── */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 border border-accent/40 bg-accent/5 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
              <span className="mono text-[12px] tracking-widest uppercase text-accent">Global Footprint</span>
            </div>
            <h2 className="font-display text-5xl lg:text-8xl leading-[0.88]">
              Pan-India.<br />
              <span className="italic text-accent">Going global.</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            {/* Stat trio */}
            <div className="grid grid-cols-3 gap-px bg-border border border-border mb-6">
              {[
                { n: "5,000+", label: "Branch Nodes", animated: true },
                { n: "12", label: "Indian Cities", animated: false },
                { n: "5", label: "Global Regions", animated: false },
              ].map(({ n, label, animated }) => (
                <div key={label} className="bg-background p-6">
                  {animated
                    ? <AnimatedStat value={n} className="font-display text-3xl text-accent block" />
                    : <div className="font-display text-3xl text-foreground">{n}</div>
                  }
                  <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Headquartered in Ahmedabad with its registered office in Bhopal, Jigisha
              operates across India with an expanding international presence, supported
              by a robust network of offices, service points, and global partnerships.
            </p>
          </div>
        </div>

        {/* ── Main content grid ── */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* India panel: full-coverage map */}
          <div className="flex flex-col gap-3">
            {/* Label above the panel box */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span className="mono text-[11px] tracking-widest uppercase text-muted-foreground">
                  India · {INDIA_CITIES.length} Cities
                </span>
              </div>
              <div className="h-px w-10 bg-accent/40" />
            </div>
            {/* Panel */}
            <div className="border border-border relative overflow-hidden aspect-square md:aspect-auto md:min-h-90 flex-1">
              {/* Map fills the entire panel — isolate traps Leaflet's z-indexes */}
              <div className="absolute inset-0 isolate">
                <IndiaMap />
              </div>
              {/* City tags — bottom overlay with gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 pt-14 bg-linear-to-t from-background/88 via-background/50 to-transparent">
                <div className="flex flex-wrap gap-1.5">
                  {INDIA_CITIES.map((c) => (
                    <span
                      key={c}
                      className={`px-2.5 py-1 font-display text-xs transition-all duration-200 cursor-default backdrop-blur-sm
                        ${c.includes("HQ")
                          ? "bg-accent text-white"
                          : c.includes("Regd")
                            ? "border-2 border-accent text-accent bg-white/80"
                            : "border border-border bg-white/70 hover:border-accent hover:text-accent"
                        }`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-accent/20 pointer-events-none z-10" />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">

            {/* International — dark card */}
            <div className="bg-primary text-primary-foreground p-8 flex-1 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-accent/15 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 relative">
                <Globe className="h-4 w-4 text-accent" />
                <span className="mono text-[11px] tracking-widest uppercase text-accent">
                  International · {GLOBAL_REGIONS.length} Regions
                </span>
              </div>
              <div className="flex flex-col gap-1.5 relative">
                {GLOBAL_REGIONS.map((r, i) => (
                  <div
                    key={r}
                    className="flex items-center justify-between border border-white/10 px-4 py-3 hover:border-accent hover:bg-white/5 transition-all group"
                  >
                    <div className="font-display text-lg">{r}</div>
                    <div className="mono text-[11px] tracking-widest uppercase text-white/30 group-hover:text-accent transition-colors">
                      0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network stat accent card */}
            <div className="border border-accent/40 bg-accent/5 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-3 font-display text-[100px] leading-none text-accent/5 -translate-y-3 select-none pointer-events-none">
                ∞
              </div>
              <div className="mono text-[12px] tracking-widest uppercase text-muted-foreground">Total Network</div>
              <div className="flex items-baseline gap-3 mt-2">
                <AnimatedStat value="5,000+" className="font-display text-4xl text-accent inline-block" />
                <span className="text-sm text-muted-foreground">service nodes</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

