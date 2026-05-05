import { Link } from "react-router-dom";
import { ArrowRight, Globe, Newspaper, BookOpen, Download, Zap, Rss } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "@/components/site/PageShell";

const CHANNELS = [
  { n: "01", t: "News",      d: "Latest announcements, contracts won and group milestones.", tag: "LIVE",     to: "/media/news",      icon: Newspaper },
  { n: "02", t: "Portfolio", d: "Project case studies across rail, metro and industry.",      tag: "ARCHIVE",  to: "/media/portfolio", icon: Globe },
  { n: "03", t: "Magazine",  d: "Long-form editorial on industry, policy and people.",        tag: "MONTHLY",  to: "/media/magazine",  icon: BookOpen },
  { n: "04", t: "Catalogue", d: "Product, component and machinery catalogues.",               tag: "DOWNLOAD", to: "/media/catalogue", icon: Download },
];

const NEWS = [
  { date: "27 · 04 · 2026", title: "Jigisha publishes Master Corporate Website DPR v1.0", cat: "Group"         },
  { date: "12 · 04 · 2026", title: "New AMC contract with Western Railway production unit", cat: "Railway"      },
  { date: "02 · 03 · 2026", title: "Industrial Loan facilitation scheme launched with NBFC partners", cat: "Finance"      },
  { date: "18 · 02 · 2026", title: "Jigisha Logistics expands cross-border MRO operations", cat: "International" },
  { date: "09 · 01 · 2026", title: "Founder's note: Building the Industrial Universe",      cat: "Editorial"    },
];

export default function Media() {
  return (
    <PageShell>
      <Masthead />
      <Channels />
      <LatestNews />
      <CTASection />
    </PageShell>
  );
}

/* ── 1. MASTHEAD HERO ─────────────────────────────────────────── */
function Masthead() {
  return (
    <section className="bg-primary text-primary-foreground border-b border-border relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.06] mix-blend-overlay" />
      <div className="absolute inset-0 bg-linear-to-b from-primary via-primary/80 to-primary" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[150px] pointer-events-none rounded-full" />
      
      {/* Top Ticker Bar */}
      <div className="absolute top-0 left-0 w-full border-b border-primary-foreground/10 overflow-hidden py-3 marquee-mask z-20 bg-primary/40 backdrop-blur-md">
        <div className="ticker flex gap-0 whitespace-nowrap">
          {[...NEWS, ...NEWS].map((n, i) => (
            <span key={i} className="inline-flex items-center gap-4 mono text-[12px] tracking-[0.2em] uppercase text-primary-foreground/40 px-10 shrink-0 group hover:text-accent transition-colors cursor-default">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {n.date} // {n.title}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          {/* Left: Masthead Heading */}
          <div className="lg:col-span-7">

            
            <h1 className="font-display leading-[0.82] tracking-tighter reveal" 
                style={{ fontSize: "clamp(4rem, 10vw, 11rem)", animationDelay: "300ms" }}>
              Industrial<br />
              <span className="italic text-accent bg-linear-to-r from-accent to-accent/60 bg-clip-text text-transparent">Universe</span><br />
              Media.
            </h1>
            
            <p className="mt-12 text-primary-foreground/50 text-xl lg:text-2xl leading-relaxed max-w-2xl font-light reveal"
               style={{ animationDelay: "500ms" }}>
              Stay close to the pulse of execution — live news, project portfolios, and industrial insights from the Jigisha Group.
            </p>

            <div className="mt-12 flex flex-wrap gap-6 reveal" style={{ animationDelay: "700ms" }}>
              <div className="flex flex-col">
                <span className="mono text-[11px] tracking-[0.4em] uppercase text-primary-foreground/30 mb-2">Editor-in-Chief</span>
                <span className="mono text-[11px] font-bold tracking-widest text-primary-foreground/80">J.B. Editorial Desk</span>
              </div>
              <div className="w-px h-10 bg-primary-foreground/10" />
              <div className="flex flex-col">
                <span className="mono text-[11px] tracking-[0.4em] uppercase text-primary-foreground/30 mb-2">Last Updated</span>
                <span className="mono text-[11px] font-bold tracking-widest text-primary-foreground/80">{new Date().toLocaleDateString('en-GB')}</span>
              </div>
            </div>
          </div>

          {/* Right: Featured Story Card */}
          <div className="lg:col-span-5 reveal" style={{ animationDelay: "900ms" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative border border-primary-foreground/10 bg-primary/40 backdrop-blur-xl p-10 shadow-2xl">
                <div className="mono text-[12px] tracking-[0.4em] uppercase text-accent mb-10 flex items-center justify-between font-bold">
                  <span>LATEST DISPATCH</span>
                  <Zap className="h-4 w-4" />
                </div>
                
                <div className="flex flex-col divide-y divide-primary-foreground/10">
                  {NEWS.slice(0, 3).map(({ date, title, cat }) => (
                    <a key={title} href="#" className="group/item py-8 flex flex-col gap-3 first:pt-0 last:pb-0 hover:translate-x-2 transition-transform">
                      <div className="flex items-center justify-between">
                        <span className="mono text-[11px] font-bold tracking-[0.2em] uppercase text-accent/80">{cat}</span>
                        <span className="mono text-[11px] text-primary-foreground/30 tabular-nums">{date}</span>
                      </div>
                      <h3 className="font-display text-xl lg:text-2xl text-primary-foreground/90 group-hover/item:text-accent transition-colors leading-snug">
                        {title}
                      </h3>
                    </a>
                  ))}
                </div>
                
                <div className="mt-10 pt-10 border-t border-primary-foreground/10">
                  <Link to="#" className="group flex items-center gap-4 mono text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
                    VIEW FULL ARCHIVE 
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Rule */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary-foreground/10 to-transparent" />
    </section>
  );
}

/* ── 2. CHANNELS — Sophisticated Bento ────────────────────────── */
function Channels() {
  const FeaturedIcon = CHANNELS[0].icon;

  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      {/* Decorative Ghost Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 font-display text-[30rem] leading-none text-foreground/[0.02] select-none pointer-events-none uppercase">
        Media
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div>
            <div className="mono text-[12px] font-bold tracking-[0.4em] uppercase text-accent mb-6">02 // CHANNELS</div>
            <h2 className="font-display text-5xl lg:text-8xl leading-none tracking-tighter">
              Broadcast <span className="italic text-accent">Streams.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed font-light">
            Modular channels designed to deliver specialized industrial knowledge directly to your desk.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-border border border-border">
          {/* Channel 01 — Featured Tall */}
          <Link
            to={CHANNELS[0].to}
            className="lg:col-span-6 group relative bg-background p-12 lg:p-20 flex flex-col justify-between min-h-[500px] lg:min-h-[700px] overflow-hidden hover:bg-primary transition-all duration-700"
          >
            <div className="absolute bottom-0 right-0 font-display text-[220px] leading-none text-foreground/[0.03] select-none pointer-events-none group-hover:text-white/[0.05] transition-colors translate-y-10 translate-x-10">
              01
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-16">
                <div className="h-16 w-16 border border-accent/30 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                  <FeaturedIcon className="h-8 w-8 text-accent group-hover:text-primary-foreground transition-colors" />
                </div>
                <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-500" />
              </div>
              <h3 className="font-display text-7xl lg:text-9xl leading-none group-hover:text-primary-foreground transition-colors tracking-tighter mb-8">
                {CHANNELS[0].t}
              </h3>
            </div>
            <div className="relative z-10">
              <span className="mono text-[11px] font-bold tracking-[0.3em] uppercase text-accent border border-accent/30 px-3 py-1.5 mb-8 inline-block">
                {CHANNELS[0].tag}
              </span>
              <p className="text-muted-foreground text-xl leading-relaxed group-hover:text-primary-foreground/60 transition-colors max-w-sm font-light">
                {CHANNELS[0].d}
              </p>
            </div>
          </Link>

          {/* Right Column Grid */}
          <div className="lg:col-span-6 grid grid-rows-3 gap-px bg-border">
            {CHANNELS.slice(1).map((chan, i) => {
              const Icon = chan.icon;
              return (
              <Link
                key={chan.n}
                to={chan.to}
                className="group relative bg-background p-12 flex items-center justify-between overflow-hidden hover:bg-secondary/40 transition-all duration-500"
              >
                
                <div className="flex-1 flex items-center gap-12">
                  <div className="font-display text-5xl text-accent/20 group-hover:text-accent transition-colors tabular-nums">
                    {chan.n}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="mono text-[11px] font-bold tracking-[0.2em] uppercase text-accent border border-accent/20 px-2 py-0.5">{chan.tag}</span>
                      <Icon className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="font-display text-4xl mb-3 text-foreground group-hover:text-primary transition-colors">{chan.t}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-md font-light group-hover:text-foreground/70 transition-colors">{chan.d}</p>
                  </div>
                </div>
                
                <div className="h-14 w-14 border border-border rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500 shrink-0 ml-8">
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. LATEST NEWS — Professional Editorial List ───────────── */
function LatestNews() {
  return (
    <section className="py-24 lg:py-40 bg-secondary/10 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <div className="mono text-[12px] font-bold tracking-[0.4em] uppercase text-accent mb-6">03 // DISPATCHES</div>
            <h2 className="font-display text-5xl lg:text-8xl leading-none tracking-tighter">
              The <span className="italic text-accent">Press Desk.</span>
            </h2>
          </div>
          <div className="flex justify-end">
            <a href="#" className="group flex items-center gap-4 mono text-[11px] font-bold tracking-[0.3em] uppercase text-accent border-b-2 border-accent pb-2 hover:opacity-70 transition-all">
              VIEW ARCHIVE FULL 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Featured Story Header */}
        <div className="bg-primary text-primary-foreground p-12 lg:p-20 relative overflow-hidden mb-px group">
          <div className="absolute inset-0 bg-blueprint opacity-[0.04]" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="mono text-[11px] font-bold tracking-[0.4em] text-accent uppercase">{NEWS[0].cat} // FEATURED</span>
                <div className="h-px w-20 bg-primary-foreground/20" />
                <span className="mono text-[11px] text-primary-foreground/40">{NEWS[0].date}</span>
              </div>
              <h3 className="font-display text-4xl lg:text-6xl leading-tight tracking-tight mb-10 group-hover:text-accent transition-colors">
                {NEWS[0].title}
              </h3>
              <p className="text-primary-foreground/50 text-xl font-light leading-relaxed max-w-2xl mb-12 italic border-l border-accent/40 pl-8">
                "A milestone document defining the next decade of our digital and industrial presence."
              </p>
              <a href="#" className="group/btn flex items-center gap-6 mono text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
                READ THE FULL REPORT 
                <div className="h-12 w-12 border border-accent/30 rounded-full flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-primary transition-all">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </a>
            </div>
            <div className="lg:col-span-4 hidden lg:block opacity-10">
              <Newspaper className="h-80 w-80" />
            </div>
          </div>
        </div>

        {/* Remaining Dispatches List */}
        <div className="flex flex-col bg-background border border-border border-t-0">
          {NEWS.slice(1).map((item, i) => (
            <a
              key={item.title}
              href="#"
              className="group grid grid-cols-12 gap-8 p-10 items-center hover:bg-secondary/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Accent Rule */}
              
              <div className="col-span-1 hidden lg:block">
                <span className="font-display text-3xl text-accent/20 group-hover:text-accent transition-colors tabular-nums">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </div>
              
              <div className="col-span-12 lg:col-span-2">
                <span className="mono text-[11px] tracking-widest text-muted-foreground/60 tabular-nums uppercase">{item.date}</span>
              </div>
              
              <div className="col-span-12 lg:col-span-7">
                <h4 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h4>
              </div>
              
              <div className="col-span-12 lg:col-span-2 lg:text-right">
                <span className="mono text-[11px] font-bold tracking-[0.2em] uppercase text-accent border border-accent/20 px-3 py-1 group-hover:bg-accent group-hover:text-white transition-all">
                  {item.cat}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
