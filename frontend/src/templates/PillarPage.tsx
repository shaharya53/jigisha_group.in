import { CTASection } from "@/components/site/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import type { PillarData } from "@/data/international";

interface Props {
  data: PillarData;
}

export default function PillarPage({ data }: Props) {
  return (
    <PageShell>
      <Hero data={data} />
      <Overview data={data} />
      <Offerings data={data} />
      <Process data={data} />
      <Industries data={data} />
      <WhyUs data={data} />
      <CTASection />
    </PageShell>
  );
}

/* ─── HERO ─────────────────────────────────────────────────────── */
function Hero({ data }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border min-h-[80vh] flex items-end">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-blueprint opacity-[0.06]" />
      <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[600px] bg-accent/10 blur-3xl" />
      <div className="absolute top-0 right-0 h-full w-1/2 bg-dots opacity-10" />

      <div className="relative z-10 w-full mx-auto max-w-[1400px] px-6 lg:px-10 pt-36 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.88] tracking-tighter text-primary-foreground">
              {data.hero.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-accent">{data.hero.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
              {data.hero.subtitle}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:bg-accent/90 transition-colors"
              >
                Start a Conversation <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/international-business"
                className="inline-flex items-center gap-3 border border-primary-foreground/20 text-primary-foreground px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:border-accent hover:text-accent transition-colors"
              >
                All International Services
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-5 lg:border-l lg:border-primary-foreground/10 lg:pl-10">
            {[
              ["Code", data.code],
              ["Category", "International Business"],
              ["Division", "Jigisha Group"],
              ["Reach", "5 Global Regions"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-primary-foreground/10 pb-5">
                <div className="mono text-[12px] tracking-[0.25em] uppercase text-primary-foreground/40">{k}</div>
                <div className="font-display text-xl text-primary-foreground mt-1">{v}</div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ─── OVERVIEW ─────────────────────────────────────────────────── */
function Overview({ data }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="font-display text-4xl lg:text-5xl mt-6 leading-[0.92]">
            What is<br />
            <span className="italic text-accent">{data.label}?</span>
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {data.offerings.map((o) => (
              <div key={o.title} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                {o.title}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="text-foreground text-xl lg:text-2xl font-display leading-snug">
            {data.overview}
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {[
              ["Global", "5 Active regions"],
              ["Network", "Jigisha Group"],
              ["Industries", `${data.industries.length} sectors served`],
              ["Process", `${data.process.length} step delivery`],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-6">
                <div className="mono text-[12px] tracking-widest uppercase text-muted-foreground">{k}</div>
                <div className="font-display text-2xl mt-2">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── OFFERINGS ────────────────────────────────────────────────── */
function Offerings({ data }: Props) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-4xl lg:text-7xl mt-6 leading-[0.92]">
              What we<br />
              <span className="italic text-accent">deliver.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground lg:pt-16">
            Comprehensive {data.label.toLowerCase()} capabilities built on Jigisha's international network and deep domain expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {data.offerings.map((o, i) => {
            const Icon = o.icon;
            return (
              <div
                key={o.title}
                className="bg-background p-10 lg:p-12 group hover:bg-primary hover:text-primary-foreground transition-all relative"
              >
                <div className="absolute top-4 right-4 mono text-[12px] tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-12 w-12 border border-border group-hover:border-primary-foreground/20 grid place-items-center mb-8 transition-colors">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl leading-tight">{o.title}</h3>
                <p className="mt-5 text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed">
                  {o.desc}
                </p>
                <div className="mt-8 h-px w-10 bg-accent group-hover:w-20 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ──────────────────────────────────────────────────── */
function Process({ data }: Props) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <h2 className="font-display text-4xl lg:text-7xl leading-[0.92] max-w-4xl">
          Our {data.process.length}-step<br />
          <span className="italic text-accent">delivery process.</span>
        </h2>

        <div className="mt-20 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-primary-foreground/10" />

          <div className={`grid gap-px bg-primary-foreground/10 ${data.process.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-5"}`}>
            {data.process.map((p, i) => (
              <div key={p.step} className="bg-primary p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 mono text-[12px] tracking-widest text-accent border-l border-b border-primary-foreground/15 px-3 py-1">
                  {p.step}
                </div>
                <div className="h-10 w-10 border border-accent/40 grid place-items-center mb-6">
                  <span className="font-display text-xl text-accent">{i + 1}</span>
                </div>
                <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">{p.desc}</p>
                {i < data.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-px h-px w-px">
                    <ArrowRight className="h-4 w-4 text-accent absolute -translate-y-1/2 translate-x-full" />
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

/* ─── INDUSTRIES ───────────────────────────────────────────────── */
function Industries({ data }: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl lg:text-5xl mt-6 leading-[0.92]">
              Sectors we<br />
              <span className="italic text-accent">power.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our {data.label.toLowerCase()} capabilities serve a broad range of industrial and commercial sectors across India and global markets.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-3">
              {data.industries.map((ind, i) => (
                <div
                  key={ind}
                  className={`px-6 py-3 border font-display text-lg transition-colors hover:border-accent hover:text-accent cursor-default ${
                    i === 0 ? "bg-primary text-primary-foreground border-primary" : "border-border"
                  }`}
                >
                  {ind}
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 border border-accent/20 bg-accent/5">
              <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground">Expanding coverage</div>
              <p className="font-display text-xl mt-2">
                Jigisha's {data.label.toLowerCase()} division actively expands into new sectors aligned with India's industrial growth roadmap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY US ───────────────────────────────────────────────────── */
function WhyUs({ data }: Props) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[0.92]">
              The Jigisha<br />
              <span className="italic text-accent">advantage.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Backed by a diversified group with 23 entities, global presence, and a decade-long strategic roadmap.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 mono text-xs tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              About the Group <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="lg:col-span-8 divide-y divide-border border-y border-foreground">
            {data.whyUs.map((w, i) => (
              <div key={w.title} className="grid grid-cols-12 gap-6 py-8 group hover:bg-secondary/60 px-2 -mx-2 transition-colors">
                <div className="col-span-1 mono text-xs text-accent tabular-nums pt-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-11 sm:col-span-4">
                  <div className="font-display text-2xl leading-tight">{w.title}</div>
                </div>
                <div className="col-span-11 sm:col-span-6 col-start-2 sm:col-start-auto text-muted-foreground leading-relaxed">
                  {w.desc}
                </div>
                <div className="hidden sm:flex col-span-1 justify-end pt-1 text-accent group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

