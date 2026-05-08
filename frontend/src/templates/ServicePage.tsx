import { CTASection } from "@/components/site/CTASection";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Check,
  Cpu,
  Globe,
  Server,
  ArrowUpRight,
  Minus,
  Plus,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useState } from "react";
import type { ServiceData } from "@/data/international";

interface Props {
  data: ServiceData;
}

export default function ServicePage({ data }: Props) {
  return (
    <PageShell>
      <Hero data={data} />

      <PlatformOverview data={data} />
      <CoreFeatures data={data} />
      <KeyModules data={data} />
      <TechAndIntegrations data={data} />
      <SecuritySection data={data} />
      <AdvancedFeatures data={data} />
      <AnalyticsSection data={data} />

      {/* ── NEW SECTIONS ── */}
      <ProcessTimeline data={data} />
      <ComparisonTable data={data} />
      <TestimonialsSection data={data} />
      <FAQSection data={data} />
      <UseCases data={data} />
      <CTASection />
    </PageShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. HERO — Full-bleed dark, typographic focus, no blobs
───────────────────────────────────────────────────────────── */
function Hero({ data }: Props) {
  return (
    <section className="relative h-screen flex flex-col justify-center bg-foreground text-background overflow-hidden border-b border-border">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />

        {/* Floating Sector Code */}
        <div className="absolute top-24 left-10 mono text-[9px] text-accent/30 tracking-[1em] uppercase">
          SEC-PROT // {data.code} // JIGISHA.CORP
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT: Typographic Power */}
          <div className="lg:col-span-7 pt-12 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="h-[2px] w-12 bg-accent" />
              <span className="font-mono text-[11px] tracking-[0.5em] uppercase text-accent font-bold">
                Industrial Digital Ecosystem
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.85] tracking-tighter text-background mb-10">
              {data.hero.title.split(" ").slice(0, -2).join(" ")} <br />
              <span className="italic text-accent relative inline-block lg:block">
                {data.hero.title.split(" ").slice(-2).join(" ")}
                <svg className="absolute -bottom-6 left-0 w-full h-8 text-accent/10 -z-10" viewBox="0 0 400 40">
                  <path d="M0 20 Q100 0 200 20 T400 20" fill="none" stroke="currentColor" strokeWidth="12" />
                </svg>
              </span>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-center gap-10 mt-12">
              <p className="text-background/50 text-base lg:text-lg leading-relaxed font-light max-w-[420px] border-l lg:border-l border-background/20 pl-8 text-left">
                {data.hero.subtitle}
              </p>

              <div className="flex flex-col gap-4 items-center lg:items-start">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-6 bg-accent text-background font-mono text-[10px] tracking-[0.3em] uppercase px-10 py-6 overflow-hidden transition-all"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative">Initiate Protocol</span>
                  <ArrowUpRight className="h-4 w-4 relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 px-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="mono text-[10px] text-background/30 uppercase tracking-widest uppercase">System Online // Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Bento Monitor Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-[400px] lg:h-[600px] relative">
            {/* Main Monitor */}
            <div className="col-span-2 row-span-1 bg-secondary/10 border border-background/10 relative overflow-hidden group cursor-crosshair">
              <img src="/images/rail_smart.png" alt="" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent" />
              <div className="absolute top-4 left-4 mono text-[9px] text-accent/50 uppercase tracking-widest">Feed_Primary // Live</div>
              <div className="absolute bottom-4 right-4 text-right">
                <div className="mono text-[8px] text-background/20 uppercase mb-1">Architecture</div>
                <div className="font-display text-xl uppercase tracking-tighter italic text-accent">{data.label}</div>
              </div>
              {/* Scan line animation */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--color-accent),0.05)_50%,transparent_100%)] bg-[length:100%_200%] animate-[scan_4s_linear_infinite]" />
            </div>

            {/* Secondary Feeds */}
            <div className="bg-secondary/10 border border-background/10 relative overflow-hidden group">
              <img src="/images/metro_blue.png" alt="" className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="h-6 w-6 text-accent/20 group-hover:text-accent group-hover:scale-110 transition-all" />
              </div>
              <div className="absolute bottom-2 left-2 mono text-[8px] text-background/30 uppercase">Node_Alpha</div>
            </div>
            <div className="bg-secondary/10 border border-background/10 relative overflow-hidden group">
              <img src="/images/infrastructure.png" alt="" className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent/20 group-hover:text-accent group-hover:scale-110 transition-all" />
              </div>
              <div className="absolute bottom-2 left-2 mono text-[8px] text-background/30 uppercase">Node_Beta</div>
            </div>

            {/* Stats Overlay */}

          </div>

        </div>
      </div>

      {/* Decorative Blueprint Corner */}
      <div className="absolute bottom-10 right-10 w-40 h-40 border-r border-b border-background/10 pointer-events-none hidden lg:block">
        <div className="absolute bottom-2 right-2 mono text-[8px] text-background/10 uppercase tracking-[0.5em] rotate-90 origin-bottom-right">
          {data.code}-ARCH // VER: 4.2.0
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. STATS BANNER — Full-width number grid (new)
───────────────────────────────────────────────────────────── */
function StatsBanner({ data }: Props) {
  const stats = [
    {
      value: String(data.coreFeatures.length),
      label: "Capability Categories",
    },
    { value: String(data.modules.length), label: "System Modules" },
    { value: String(data.integrations.length), label: "Integrations" },
    {
      value: String(data.advancedFeatures.length),
      label: "Advanced Capabilities",
    },
  ];

  return (
    <div className="border-b border-border grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
      {stats.map((s, i) => (
        <div
          key={i}
          className="px-8 lg:px-12 py-8 group hover:bg-accent/5 transition-colors"
        >
          <div className="font-display text-4xl lg:text-5xl tracking-tighter text-foreground">
            {s.value}
          </div>
          <div className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground mt-2">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. PLATFORM OVERVIEW — Horizontal split, no dark-blob panel
───────────────────────────────────────────────────────────── */
function PlatformOverview({ data }: Props) {
  return (
    <section className="border-b border-border bg-secondary/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Platform Intelligence
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter mb-8">
              The architecture of
              <br />
              <span className="italic text-accent">{data.label}.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xl font-light mb-12">
              {data.overview.body}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {data.overview.dealIn.slice(0, 4).map((item) => (
                <div key={item} className="group border-l-2 border-border hover:border-accent pl-6 transition-colors">
                  <div className="mono text-[10px] text-accent/50 uppercase tracking-widest mb-1">Standard</div>
                  <div className="font-display text-lg tracking-tight">{item}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual — Big Industrial Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] group overflow-hidden border-2 border-border shadow-2xl">
            <img
              src="/images/rail_smart.png"
              alt=""
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-accent/5 pointer-events-none" />

            {/* Floating Info Overlays */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-md border border-border">
              <div className="grid grid-cols-3 divide-x divide-border text-foreground">
                <div className="px-4">
                  <div className="mono text-[9px] text-accent uppercase tracking-widest mb-1">Modules</div>
                  <div className="font-display text-2xl">{data.modules.length}</div>
                </div>
                <div className="px-4">
                  <div className="mono text-[9px] text-accent uppercase tracking-widest mb-1">Scale</div>
                  <div className="font-display text-2xl">Global</div>
                </div>
                <div className="px-4">
                  <div className="mono text-[9px] text-accent uppercase tracking-widest mb-1">Uptime</div>
                  <div className="font-display text-2xl">99.9%</div>
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
   4. CORE FEATURES — Accordion-style rows, editorial numbered
───────────────────────────────────────────────────────────── */
function CoreFeatures({ data }: Props) {
  return (
    <section className="border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Capabilities
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter">
              {data.coreFeatures.length} capability
              <br />
              <span className="italic text-accent">categories.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              A comprehensive feature set covering every dimension of{" "}
              {data.label.toLowerCase()}.
            </p>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {data.coreFeatures.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <div key={cat.category} className="group">
                {/* Header row */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6 py-8 items-start lg:items-center hover:bg-secondary/20 transition-colors px-2 -mx-2">
                  <div className="lg:col-span-1">
                    <span className="font-mono text-[12px] tracking-widest text-accent">
                      {String(ci + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lg:col-span-1 flex items-center">
                    <div className="h-9 w-9 border border-border flex items-center justify-center group-hover:border-accent transition-colors">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="font-display text-2xl lg:text-3xl tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="lg:col-span-3 flex flex-wrap gap-1">
                    {cat.items.slice(0, 2).map((item) => (
                      <span
                        key={item.title}
                        className="font-mono text-[11px] tracking-widest uppercase border border-border px-2 py-1 text-muted-foreground"
                      >
                        {item.title.split(" ")[0]}
                      </span>
                    ))}
                    {cat.items.length > 2 && (
                      <span className="font-mono text-[11px] tracking-widest uppercase border border-accent/30 text-accent px-2 py-1">
                        +{cat.items.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Feature grid under each category */}
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${cat.items.length === 4
                    ? "lg:grid-cols-4"
                    : "lg:grid-cols-3"
                    } gap-px bg-border border border-border mb-0`}
                >
                  {cat.items.map((item, ii) => (
                    <div
                      key={item.title}
                      className="bg-background hover:bg-foreground hover:text-background transition-all p-7 relative group/card"
                    >
                      <div className="font-mono text-[11px] tracking-widest text-accent mb-4">
                        {String(ii + 1).padStart(2, "0")}
                      </div>
                      <h4 className="font-display text-lg leading-tight mb-3">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover/card:text-background/60 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-6 h-px w-6 bg-accent group-hover/card:w-14 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. KEY MODULES — Clean light bg, numbered card grid
───────────────────────────────────────────────────────────── */
function KeyModules({ data }: Props) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                System Modules
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter">
              {data.modules.length} powerful
              <br />
              <span className="italic text-accent">system modules.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {data.modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.title}
                className="bg-background p-10 lg:p-16 group hover:bg-accent/5 transition-all duration-500 relative overflow-hidden"
              >
                {/* Module label */}
                <div className="flex items-center justify-between mb-12 relative z-10">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent border border-accent/20 px-4 py-2 bg-accent/5 group-hover:bg-accent/10 transition-colors">
                    Module {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-12 w-12 border border-border group-hover:border-accent flex items-center justify-center transition-all duration-500 rounded-full">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-3xl lg:text-4xl leading-tight tracking-tight mb-6 transition-colors group-hover:text-accent">
                    {mod.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-[500px] transition-colors">
                    {mod.desc}
                  </p>

                  <div className="space-y-4 border-t border-border group-hover:border-accent/20 pt-10">
                    {mod.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Accent (Hidden normally, shows on hover) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/0 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. TECH STACK & INTEGRATIONS — Light, table-driven layout
───────────────────────────────────────────────────────────── */
function TechAndIntegrations({ data }: Props) {
  const stackLabels: Record<keyof typeof data.techStack, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    cloud: "Cloud & DevOps",
    other: "Security & Other",
  };

  return (
    <section className="border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Integrations */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Integrations
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[0.92] tracking-tighter mb-6">
              Connects with
              <br />
              <span className="italic text-accent">your ecosystem.</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Pre-built integrations with leading enterprise platforms and
              government portals.
            </p>
            <div className="divide-y divide-border border-t border-border">
              {data.integrations.map((integ, i) => (
                <div
                  key={integ}
                  className="flex items-center justify-between py-4 group hover:bg-secondary/20 px-2 -mx-2 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[12px] text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{integ}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Architecture
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[0.92] tracking-tighter mb-10">
              Technology
              <br />
              <span className="italic text-accent">stack.</span>
            </h2>

            <div className="space-y-px bg-border border border-border">
              {(
                Object.keys(data.techStack) as Array<
                  keyof typeof data.techStack
                >
              ).map((layer) => (
                <div
                  key={layer}
                  className="bg-background p-5 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                      {stackLabels[layer]}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {data.techStack[layer].map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-2.5 py-1 font-mono text-[12px] tracking-widest text-foreground/70 hover:border-accent hover:text-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture flow */}
            <div className="mt-4 border border-border p-5">
              <div className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-4">
                Layer Architecture
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { icon: Globe, label: "Client" },
                  { icon: Server, label: "API" },
                  { icon: Cpu, label: "Service" },
                  { icon: Server, label: "Data" },
                ].map((layer, i, arr) => (
                  <div key={layer.label} className="flex items-center gap-2">
                    <div className="border border-border px-3 py-2.5 bg-secondary/20 flex flex-col items-center gap-1 min-w-[68px]">
                      <layer.icon className="h-3.5 w-3.5 text-accent" />
                      <span className="font-mono text-[11px] tracking-widest">
                        {layer.label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-accent flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. SECURITY — Dark inverted panel, no blobs
───────────────────────────────────────────────────────────── */
function SecuritySection({ data }: Props) {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-background/40">
                Security
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[0.92] tracking-tighter text-background mb-6">
              Enterprise-grade
              <br />
              <span className="italic text-accent">security.</span>
            </h2>
            <p className="text-background/55 leading-relaxed mb-10">
              Built on a zero-compromise security architecture protecting data,
              transactions and users across every layer.
            </p>
            {/* Big number */}
            <div className="border border-background/10 p-8 inline-block">
              <div className="font-display text-6xl text-accent">
                {data.security.length}
              </div>
              <div className="font-mono text-[11px] tracking-widest uppercase text-background/40 mt-2">
                Security Controls
              </div>
            </div>
          </div>

          {/* Right — numbered list */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-background/10">
            {data.security.map((item, i) => (
              <div
                key={item}
                className="bg-foreground p-7 group hover:bg-background/5 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="font-mono text-[12px] text-accent border border-accent/20 px-2 py-1 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <CheckCircle2 className="h-4 w-4 text-accent mb-2" />
                    <p className="text-sm text-background/70 leading-relaxed">
                      {item}
                    </p>
                  </div>
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
   8. ADVANCED FEATURES — Editorial grid
───────────────────────────────────────────────────────────── */
function AdvancedFeatures({ data }: Props) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Advanced
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter">
              Next-generation
              <br />
              <span className="italic text-accent">capabilities.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              AI, IoT and automation capabilities that put the{" "}
              {data.label.toLowerCase()} platform years ahead.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-border border border-border">
          {data.advancedFeatures.map((feat, i) => {
            const total = data.advancedFeatures.length;

            // Editorial distribution for 5 items: 2 in first row, 3 in second
            // For other counts, default to 3-column (col-span-4)
            let colSpan = "col-span-12 md:col-span-6 lg:col-span-4";

            if (total === 5) {
              if (i < 2) {
                // First row: 2 cards
                colSpan = "col-span-12 md:col-span-6 lg:col-span-6";
              } else {
                // Second row: 3 cards
                colSpan = "col-span-12 md:col-span-6 lg:col-span-4";
              }
            } else if (total % 3 === 1 && i === total - 1) {
              // Last item spans full width if it's the only one in the row
              colSpan = "col-span-12";
            } else if (total % 3 === 2 && i >= total - 2) {
              // Last two items span half width each
              colSpan = "col-span-12 md:col-span-6 lg:col-span-6";
            }

            return (
              <div
                key={feat.title}
                className={`bg-background p-10 group hover:bg-secondary/40 transition-all duration-500 relative ${colSpan} border border-transparent hover:border-accent/20`}
              >
                <div className="absolute top-0 right-0 font-mono text-[11px] tracking-widest text-accent border-l border-b border-border group-hover:border-accent/20 px-3 py-1.5 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-10 w-10 border border-accent/25 group-hover:border-accent flex items-center justify-center mb-8 transition-all duration-500">
                  <span className="font-display text-xl text-accent leading-none">
                    AI
                  </span>
                </div>
                <h3 className="font-display text-2xl leading-tight tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors">
                  {feat.desc}
                </p>
                <div className="mt-8 h-px w-8 bg-accent group-hover:w-16 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. ANALYTICS — Clean list layout, no fake bar charts
───────────────────────────────────────────────────────────── */
function AnalyticsSection({ data }: Props) {
  return (
    <section className="border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Analytics
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-[0.92] tracking-tighter mb-6">
              Data that
              <br />
              <span className="italic text-accent">drives decisions.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Real-time dashboards, automated reports and AI-powered insights —
              complete visibility into {data.label.toLowerCase()} performance.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-border border-t border-border">
            {data.analytics.map((item, i) => (
              <div
                key={item}
                className="flex gap-6 py-7 group hover:bg-secondary/30 px-2 -mx-2 transition-colors"
              >
                <div className="shrink-0 font-mono text-[12px] text-accent tabular-nums pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 font-display text-xl lg:text-2xl leading-snug">
                  {item}
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
   10. BENEFITS — Bold accent hover cards
───────────────────────────────────────────────────────────── */
function Benefits({ data }: Props) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-7 bg-accent" />
          <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
            Why Choose Us
          </span>
        </div>
        <h2 className="font-display text-5xl lg:text-6xl leading-[0.92] tracking-tighter mb-16">
          Why choose
          <br />
          <span className="italic text-accent">{data.label}.</span>
        </h2>

        <div className="grid grid-cols-12 gap-px bg-border border border-border">
          {data.benefits.map((b, i) => {
            const total = data.benefits.length;

            // Editorial distribution for 5 items: 2 in first row, 3 in second
            let colSpan = "col-span-12 md:col-span-6 lg:col-span-4";

            if (total === 5) {
              if (i < 2) {
                colSpan = "col-span-12 md:col-span-6 lg:col-span-6";
              } else {
                colSpan = "col-span-12 md:col-span-6 lg:col-span-4";
              }
            } else if (total % 3 === 1 && i === total - 1) {
              colSpan = "col-span-12";
            } else if (total % 3 === 2 && i >= total - 2) {
              colSpan = "col-span-12 md:col-span-6 lg:col-span-6";
            }

            return (
              <div
                key={b.title}
                className={`bg-background p-10 group hover:bg-secondary/40 transition-all duration-500 cursor-default ${colSpan} border border-transparent hover:border-accent/20`}
              >
                <div className="font-mono text-[12px] text-accent mb-5 group-hover:text-accent/60 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors">
                  {b.desc}
                </p>
                <CheckCircle2 className="h-5 w-5 text-accent group-hover:scale-110 transition-all duration-500 mt-8" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW 11. PROCESS TIMELINE — Step-by-step delivery model
───────────────────────────────────────────────────────────── */
function ProcessTimeline({ data }: Props) {
  const steps = [
    {
      phase: "Discovery",
      duration: "Week 1–2",
      desc: "Deep-dive requirement analysis, stakeholder alignment, and technical feasibility assessment for your specific environment.",
      deliverable: "Requirement Document",
    },
    {
      phase: "Architecture",
      duration: "Week 3–4",
      desc: "Solution design, technology stack finalization, and integration mapping with your existing enterprise systems.",
      deliverable: "Solution Blueprint",
    },
    {
      phase: "Implementation",
      duration: "Week 5–12",
      desc: "Phased deployment of all modules, configuration, data migration, and integration with third-party platforms.",
      deliverable: "Live Platform",
    },
    {
      phase: "Validation",
      duration: "Week 13–14",
      desc: "End-to-end UAT, performance benchmarking, security audits, and regulatory compliance verification.",
      deliverable: "Compliance Certificate",
    },
    {
      phase: "Go Live",
      duration: "Week 15",
      desc: "Production deployment, staff training, documentation handover, and 24/7 hypercare support activation.",
      deliverable: "Full Handover",
    },
    {
      phase: "AMC & Support",
      duration: "Ongoing",
      desc: "Annual maintenance contracts, preventive monitoring, feature upgrades, and dedicated account management.",
      deliverable: "AMC Agreement",
    },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Delivery Process
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter">
              How we
              <br />
              <span className="italic text-accent">deliver.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              A structured, time-boxed delivery methodology refined across
              hundreds of enterprise deployments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {steps.map((step, i) => (
            <div
              key={step.phase}
              className="bg-background p-8 group hover:bg-secondary/20 transition-colors relative"
            >
              {/* Connector line on right (desktop) */}
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-[11px] tracking-widest uppercase text-accent border border-accent/20 px-2.5 py-1">
                  Phase {String(i + 1).padStart(2, "0")}
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {step.duration}
                </span>
              </div>
              <h3 className="font-display text-2xl tracking-tight mb-3">
                {step.phase}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {step.desc}
              </p>
              <div className="border-t border-border pt-4 flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                <span className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW 12. COMPARISON TABLE — Jigisha vs Generic Provider
───────────────────────────────────────────────────────────── */
function ComparisonTable({ data }: Props) {
  const rows = [
    {
      criterion: "Domain Expertise",
      us: "Deep railway & industrial specialization",
      them: "Generic IT / consulting approach",
      win: true,
    },
    {
      criterion: "Procurement Channels",
      us: "GeM, IREPS, OEM — centralized",
      them: "Ad-hoc vendor sourcing",
      win: true,
    },
    {
      criterion: "Regulatory Compliance",
      us: "Built-in FEMA, RBI, RDSO knowledge",
      them: "External legal consultants needed",
      win: true,
    },
    {
      criterion: "Support Coverage",
      us: "Nationwide warehouses & teams",
      them: "Limited metro city coverage",
      win: true,
    },
    {
      criterion: "AMC Contracts",
      us: "End-to-end predictive & preventive",
      them: "Break-fix only",
      win: true,
    },
    {
      criterion: "Time to Deploy",
      us: "Templated playbooks — 90 days",
      them: "9–18 months typical",
      win: true,
    },
  ];

  return (
    <section className="border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                Comparison
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter">
              Jigisha vs
              <br />
              <span className="italic text-accent">the rest.</span>
            </h2>
          </div>
        </div>

        {/* Table header - Desktop Only */}
        <div className="hidden lg:grid grid-cols-12 gap-0 border border-border border-b-0">
          <div className="col-span-4 bg-secondary/30 p-5 border-r border-border">
            <span className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
              Criterion
            </span>
          </div>
          <div className="col-span-4 bg-accent/10 border-r border-border p-5">
            <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
              Jigisha Enterprises
            </span>
          </div>
          <div className="col-span-4 p-5">
            <span className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
              Typical Provider
            </span>
          </div>
        </div>

        <div className="border border-border divide-y divide-border">
          {rows.map((row, i) => (
            <div
              key={i}
              className="flex flex-col lg:grid lg:grid-cols-12 group hover:bg-secondary/20 transition-colors"
            >
              {/* Criterion - Mobile Header style */}
              <div className="lg:col-span-4 p-5 border-b lg:border-b-0 lg:border-r border-border flex items-center bg-secondary/5 lg:bg-transparent">
                <span className="font-display text-lg tracking-tight">
                  {row.criterion}
                </span>
              </div>
              
              <div className="flex-1 grid grid-cols-2 lg:col-span-8 divide-x divide-border">
                {/* Us */}
                <div className="p-5 lg:border-r border-border bg-accent/[0.03] lg:bg-accent/5 flex items-start lg:items-center gap-3">
                  <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5 lg:mt-0" />
                  <span className="text-xs lg:text-sm leading-relaxed font-medium">{row.us}</span>
                </div>
                
                {/* Them */}
                <div className="p-5 flex items-start lg:items-center gap-3">
                  <Minus className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 mt-0.5 lg:mt-0" />
                  <span className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {row.them}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW 13. TESTIMONIALS / TRUST SIGNALS
───────────────────────────────────────────────────────────── */
function TestimonialsSection({ data }: Props) {
  const testimonials = [
    {
      quote:
        "Jigisha's structured methodology and deep railway domain knowledge made what seemed like a 2-year integration a 90-day reality. Their GeM procurement support alone saved us 18% on direct costs.",
      name: "Sr. DRM, Northern Railway Zone",
      role: "Indian Railways",
      sector: "Railway",
    },
    {
      quote:
        "The AFC integration for our metro network was seamless. Their team understood CBTC nuances that no generic IT vendor could. Post-deployment support has been exemplary — truly 24/7.",
      name: "Director – Technology",
      role: "Metro Rail Corporation",
      sector: "Metro",
    },
    {
      quote:
        "We needed a partner who understood both the commercial and technical sides of a defence offset. Jigisha navigated FEMA, IP licensing, and offset compliance with remarkable precision.",
      name: "VP – Strategic Alliances",
      role: "Defence Manufacturing OEM",
      sector: "Industrial",
    },
  ];

  return (
    <section className="border-b border-border bg-foreground text-background">
      {/* Top rule */}
      <div
        className="absolute pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #f0ede6 1px, transparent 0)",
          backgroundSize: "32px 32px",
          inset: 0,
          position: "absolute",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-7 bg-accent" />
              <span className="font-mono text-[12px] tracking-widest uppercase text-background/40">
                Client Voices
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.88] tracking-tighter text-background">
              Trusted by
              <br />
              <span className="italic text-accent">industry leaders.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-foreground p-10 hover:bg-background/5 transition-colors"
            >
              <div className="font-mono text-[11px] tracking-widest uppercase text-accent border border-accent/20 px-2.5 py-1 inline-block mb-8">
                {t.sector}
              </div>
              <blockquote className="border-l-2 border-accent pl-5 mb-8">
                <p className="text-background/65 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </blockquote>
              <div>
                <div className="font-display text-lg text-background">
                  {t.name}
                </div>
                <div className="font-mono text-[12px] tracking-widest uppercase text-background/35 mt-1">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEW 14. FAQ — Accordion
───────────────────────────────────────────────────────────── */
function FAQSection({ data }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: `What industries does ${data.label} serve?`,
      a: `${data.label} serves Indian Railways, Metro Rail Corporations, Defence manufacturers, industrial plants, and commercial enterprises — any organization operating complex infrastructure that requires supply, installation, maintenance, or AMC contracts.`,
    },
    {
      q: "How does Jigisha handle procurement on government portals?",
      a: "We have a dedicated tendering team with deep experience on GeM, IREPS, and CPPP portals. We manage bid preparation, EMD/SD, technical compliance, and post-award contract management end-to-end.",
    },
    {
      q: "What does an AMC contract from Jigisha include?",
      a: "Our AMCs include preventive maintenance schedules, predictive monitoring via IoT sensors, 24/7 breakdown response, spare parts supply, quarterly reporting, and a dedicated account manager. SLA uptime guarantees are provided in writing.",
    },
    {
      q: "Can Jigisha handle cross-border technology transfers?",
      a: "Yes. Through our ICBMRO framework, we facilitate Joint Ventures, technology licensing, and co-manufacturing arrangements with global OEMs. We manage IP structuring, royalty agreements, FEMA compliance, and on-ground commissioning.",
    },
    {
      q: "How quickly can a deployment go live?",
      a: "Our templated playbooks compress standard 9-month deployments to under 90 days for most modules. Complex greenfield implementations typically range from 4–6 months with our parallel workstream methodology.",
    },
    {
      q: "What quality certifications does Jigisha hold?",
      a: "Jigisha is ISO 9001:2015 certified, DPIIT Recognised, and a member of FICCI and CII. Our supply chains comply with RDSO, BIS, and applicable international standards for all railway and defence procurement.",
    },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left sticky label */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-7 bg-accent" />
                <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
                  FAQ
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl leading-[0.92] tracking-tighter mb-6">
                Common
                <br />
                <span className="italic text-accent">questions.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Everything you need to know before starting your engagement with
                Jigisha Enterprises.
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-accent border-b border-accent/30 pb-1 hover:border-accent transition-colors"
                >
                  Ask us directly <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8 divide-y divide-border border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group hover:bg-secondary/20 px-2 -mx-2 transition-colors"
                >
                  <span className="font-display text-xl leading-snug tracking-tight group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 h-8 w-8 border border-border group-hover:border-accent flex items-center justify-center transition-colors">
                    {open === i ? (
                      <Minus className="h-4 w-4 text-accent" />
                    ) : (
                      <Plus className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
                  </div>
                </button>
                {open === i && (
                  <div className="pb-6 px-2 -mx-2">
                    <p className="text-muted-foreground leading-relaxed text-sm max-w-[560px]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   15. USE CASES — editorial numbered list
───────────────────────────────────────────────────────────── */
function UseCases({ data }: Props) {
  return (
    <section className="border-b border-border bg-secondary/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-7 bg-accent" />
          <span className="font-mono text-[12px] tracking-widest uppercase text-muted-foreground">
            Use Cases
          </span>
        </div>
        <h2 className="font-display text-5xl lg:text-6xl leading-[0.92] tracking-tighter mb-16">
          Who benefits from
          <br />
          <span className="italic text-accent">{data.label}.</span>
        </h2>
        <div className="divide-y divide-border border-t border-border">
          {data.useCases.map((uc, i) => (
            <div
              key={i}
              className="flex gap-6 py-7 group hover:bg-secondary/30 px-2 -mx-2 transition-colors cursor-default"
            >
              <div className="shrink-0 font-mono text-[12px] text-accent tabular-nums pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 font-display text-xl lg:text-2xl leading-snug tracking-tight">
                {uc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}