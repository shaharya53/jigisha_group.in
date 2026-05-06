import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MEDIA_DATA } from "../../data/mediaData";
import { PageShell } from "../../components/site/PageShell";
import { AnimatedStat } from "../../components/ui/AnimatedStat";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  ArrowRight, CheckCircle2, BarChart3,
  Rss, Layers, Globe, Zap, ChevronRight, TrendingUp,
  Users, Clock, BookOpen, Newspaper, Award, Target,
  MessageSquare, Calendar, Tag, Star, Eye, Share2,
  Search, Filter, Mail, Bell, Hash, Bookmark, Edit3,
  PenTool, Radio, Mic, Lightbulb, Building, LayoutGrid,
  Activity, Shield, Wrench
} from "lucide-react";
import { CTASection } from "../../components/site/CTASection";

export default function MediaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState(0);

  if (!slug || !(slug in MEDIA_DATA)) return <Navigate to="/" replace />;
  const data = MEDIA_DATA[slug as keyof typeof MEDIA_DATA] as any;

  return (
    <PageShell>
      <MediaHero data={data} slug={slug} />

      {data.layout === "grid" ? (
        <>
          <IntroSection data={data} />
        </>
      ) : (
        <>
          <IntroManifesto data={data} />
          <Divisions data={data} activeTab={activeTab} setActiveTab={setActiveTab} />
          <KeyProjects data={data} />
          <BusinessModel data={data} />
        </>
      )}

      <InsightPanel data={data} />

      {data.testimonials && <Testimonials data={data} />}

      {/* Slug-specific extra sections */}
      {slug === "news"      && <NewsExtras />}
      {slug === "magazine"  && <MagazineExtras />}
      {slug === "portfolio" && <PortfolioExtras />}
      {slug === "catalogue" && <CatalogueExtras />}

      <CTASection />
    </PageShell>
  );
}

/* ─── accent map ─────────────────────────────────────────────── */
const ACCENT: Record<string, string> = {
  news:      "#1a56db",
  magazine:  "#1a56db",
  portfolio: "#1a56db",
  catalogue: "#1a56db",
};
const accent = (slug: string) => ACCENT[slug] ?? "#1a56db";

/* ═══════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════ */
function MediaHero({ data, slug }: { data: any; slug: string }) {
  const ac = accent(slug);
  const iconMap: Record<string, any> = {
    news:      Newspaper,
    magazine:  BookOpen,
    portfolio: LayoutGrid,
    catalogue: Tag,
  };
  const HeroIcon = iconMap[slug] || Newspaper;

  const words = data.hero.title.split(" ");
  const accent_word = words.at(-1);
  const rest = words.slice(0, -1).join(" ");

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gray-950 text-white">
      {/* Background Image with Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.hero.image} 
          alt="" 
          className="w-full h-full object-cover grayscale opacity-40 scale-110 animate-slow-zoom" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-gray-950/40 z-10" />
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-blueprint opacity-[0.05] z-20" />
      </div>

      <div className="container mx-auto px-8 lg:px-12 pt-32 pb-20 relative z-30">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Title Block */}
          <div className="lg:col-span-7">
            <h1 
              className="font-display leading-[0.95] tracking-tighter mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              {rest} <br />
              <span className="italic text-gray-400">{accent_word}</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed max-w-xl mb-12">
              {data.hero.subtitle ?? data.hero.description}
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#overview"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold text-sm transition-all hover:scale-105"
                style={{ background: ac }}
              >
                Launch Experience <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Editorial Desk
              </Link>
            </div>
          </div>

          {/* Right Side: Clean Geometric Mosaic */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative h-full flex items-center justify-center">
              
              {/* Background Geometric Accent */}
              <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />

              <div className="grid grid-cols-12 gap-4 w-full h-[600px]">
                
                {/* 01. Large Vertical Panel (Left) */}
                <div className="col-span-7 h-full rounded-2xl overflow-hidden border border-white/10 group">
                   <img 
                      src={data.hero.image} 
                      alt="" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                   />
                   {/* Scanline Overlay */}
                   <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10" />
                </div>

                {/* 02. Top Right Panel */}
                <div className="col-span-5 flex flex-col gap-4">
                   <div className="flex-1 rounded-2xl overflow-hidden border border-white/10 group">
                      <img 
                         src={data.intro?.image || data.hero.image} 
                         alt="" 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                      />
                      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>

                   {/* 03. Bottom Right Panel */}
                   <div className="h-[40%] rounded-2xl overflow-hidden border border-white/10 group">
                      <img 
                         src={data.featuredVideo?.thumbnail || data.hero.image} 
                         alt="" 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-gray-950/40 to-transparent" />
                   </div>
                </div>

              </div>

              {/* Decorative Corner Accents (Geometric Only) */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
              
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════════
   INTRO (grid layout)
═══════════════════════════════════════════════════════════════ */
function IntroSection({ data }: any) {
  return (
    <section id="overview" className="relative py-32 lg:py-48 bg-white overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a56db 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: Cinematic Visuals & Stats */}
          <div className="lg:col-span-6 space-y-12">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group">
                <img
                  src={data.intro.image}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                
                {/* Floating HUD Element */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl max-w-[240px] animate-float">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="mono text-[10px] font-bold tracking-widest text-gray-900 uppercase">System_Active</span>
                  </div>
                  <div className="text-sm font-medium text-gray-600 leading-relaxed italic">
                    "Synthesizing high-frequency industrial data points into actionable editorial intelligence."
                  </div>
                </div>
              </div>

              {/* Overlapping Stats Card */}
              <div className="absolute -bottom-10 -right-10 hidden lg:block w-72 bg-gray-950 text-white p-8 rounded-3xl shadow-2xl border border-white/10">
                <div className="mono text-[9px] tracking-[0.3em] text-blue-400 uppercase mb-6">Network // Reach</div>
                <div className="space-y-6">
                  {data.stats?.slice(0, 2).map((s: any) => (
                    <div key={s.label}>
                      <div className="text-3xl font-display text-white mb-1">{s.value}</div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">{s.label}</div>
                      <div className="mt-3 h-px w-full bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High-Impact Typography & Points */}
          <div className="lg:col-span-6 pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
              <span className="w-1 h-1 rounded-full bg-blue-600" />
              <span className="mono text-[10px] font-bold tracking-[0.2em] uppercase text-blue-700">01 — Architecture</span>
            </div>

            <h2 className="font-display text-5xl lg:text-7xl text-gray-900 leading-[0.9] tracking-tighter mb-12">
              The {data.intro.heading.split(" ").slice(-2).join(" ")} <br />
              <span className="italic text-gray-300">Framework.</span>
            </h2>

            <div className="grid gap-12">
              {data.intro.content.map((point: string, i: number) => (
                <div key={i} className="group relative">
                  <div className="flex gap-8">
                    <div className="relative shrink-0">
                      <div className="mono text-5xl font-black text-gray-50 group-hover:text-blue-50 transition-colors leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center">
                         <div className="w-1 h-1 rounded-full bg-blue-600 group-hover:scale-[3] transition-transform" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-gray-600 leading-relaxed font-light group-hover:text-gray-900 transition-colors">
                        {point}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row Stats (Mobile/Fallback) */}
            <div className="lg:hidden grid grid-cols-2 gap-6 mt-16 pt-10 border-t border-gray-100">
               {data.stats?.map((s: any) => (
                  <div key={s.label}>
                    <div className="text-2xl font-display text-gray-900 mb-1">{s.value}</div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-blue-600">{s.label}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO MANIFESTO (tabs layout)
═══════════════════════════════════════════════════════════════ */
function IntroManifesto({ data }: any) {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-8 lg:px-12 text-center">
        <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-6">Manifesto</div>
        <blockquote className="font-serif text-3xl lg:text-5xl leading-snug max-w-4xl mx-auto text-gray-800 italic">
          {data.intro.content.join(" · ")}
        </blockquote>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   DIVISIONS (tabs layout)
═══════════════════════════════════════════════════════════════ */
function Divisions({ data, activeTab, setActiveTab }: any) {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">03 — Structure</div>
          <h2 className="font-serif text-4xl lg:text-6xl text-gray-900 leading-tight">
            Core <span className="italic text-gray-400">Divisions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          {/* tabs list */}
          <div className="lg:col-span-4 flex flex-col border-r border-gray-100">
            {data.sections?.map((sec: any, i: number) => (
              <button
                key={sec.id}
                onMouseEnter={() => setActiveTab(i)}
                className={`relative text-left px-8 py-6 border-b border-gray-100 last:border-0 transition-all
                  ${activeTab === i
                    ? "bg-blue-50 text-blue-800"
                    : "bg-white text-gray-500 hover:bg-gray-50"}`}
              >
                <div className="text-xs font-mono text-gray-400 mb-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-semibold text-sm">{sec.title}</div>
              </button>
            ))}
          </div>

          {/* tab content */}
          <div className="lg:col-span-8 bg-white">
            {data.sections?.map((sec: any, i: number) =>
              activeTab === i ? (
                <div key={sec.id} className="flex flex-col h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="font-serif text-2xl text-gray-900 mb-6">{sec.title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {sec.points.map((pt: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   KEY PROJECTS
═══════════════════════════════════════════════════════════════ */
function KeyProjects({ data }: any) {
  if (!data.projects) return null;
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">04 — Execution</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
            Key <span className="italic text-gray-400">Engagements</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {data.projects.map((proj: any, i: number) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="font-mono text-3xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BUSINESS MODEL
═══════════════════════════════════════════════════════════════ */
function BusinessModel({ data }: any) {
  if (!data.model) return null;
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Framework</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
            Commercial <span className="italic text-gray-400">Model</span>
          </h2>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-900 text-white px-8 py-5">
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400">Category</div>
            <div className="text-xs font-bold tracking-widest uppercase text-blue-400">Scale</div>
          </div>
          {data.model.map((row: any, i: number) => (
            <div
              key={i}
              className="grid grid-cols-2 px-8 py-5 border-b last:border-0 hover:bg-blue-50/30 transition-colors group"
              style={{ borderColor: "#f3f4f6" }}
            >
              <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                {row.category}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-700 transition-colors">
                {row.data}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INSIGHT PANEL
═══════════════════════════════════════════════════════════════ */
function InsightPanel({ data }: any) {
  const points = data.intro?.content ?? [];
  if (!points.length) return null;
  return (
    <section className="py-32 lg:py-48 bg-white overflow-hidden relative">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-dots opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-blue-600" />
            <span className="mono text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">
               Strategic_Intelligence // v4.2
            </span>
          </div>
          <h2 className="font-display text-6xl lg:text-8xl leading-[0.85] tracking-tighter text-gray-900 mb-10">
            Key Strategic <br />
            <span className="italic text-gray-300">Takeaways.</span>
          </h2>
          <p className="text-gray-500 text-xl font-light leading-relaxed border-l-2 border-blue-600/20 pl-8">
             Distilling high-frequency industrial dispatches into foundational strategic pillars for the sector's next evolutionary phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.slice(0, 6).map((p: string, i: number) => {
             // Rotate through available images in data
             const images = [data.hero.image, data.intro.image, data.featuredVideo?.thumbnail || data.hero.image];
             const img = images[i % images.length];
             
             return (
               <div
                 key={i}
                 className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
               >
                 {/* Cinematic Image Background */}
                 <img
                   src={img}
                   alt=""
                   className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                 />
                 
                 {/* Sophisticated Overlays */}
                 <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                 
                 {/* Content Layer */}
                 <div className="absolute inset-0 p-10 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                       <div className="mono text-[10px] text-white/40 tracking-[0.3em] uppercase">Node_0{i+1}</div>
                       <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                          <ArrowRight className="h-4 w-4 text-white" />
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="h-px w-12 bg-blue-500 group-hover:w-full transition-all duration-700" />
                       <h3 className="font-display text-2xl lg:text-3xl text-white leading-tight tracking-tight">
                          {p}
                       </h3>
                    </div>
                 </div>

                 {/* Technical Scanline (Subtle) */}
                 <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_8px] z-10 opacity-20" />
               </div>
             );
          })}
        </div>

        {/* Bottom Decorative Edge */}
        <div className="mt-32 flex items-center justify-between border-t border-gray-100 pt-12">
           <div className="mono text-[9px] text-gray-300 tracking-[0.5em] uppercase">End_Of_Dispatch</div>
           <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(dot => (
                <div key={dot} className="w-1 h-1 bg-blue-600/20 rounded-full" />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
function Testimonials({ data }: any) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Industry Voices</div>
          <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
            Trusted by the <span className="italic text-gray-400">Sector</span>
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {data.testimonials.map((t: any, i: number) => (
              <CarouselItem key={i} className="pl-5 md:basis-1/2">
                <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 h-full hover:border-blue-100 hover:shadow-md transition-all group">
                  <div className="font-serif text-4xl text-blue-200 mb-4 leading-none">"</div>
                  <p className="font-serif text-xl text-gray-700 italic leading-relaxed mb-8">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.author}</div>
                      <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NEWS-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════════ */
function NewsExtras() {
  const recentHeadlines = [
    { date: "May 2025", tag: "Railway", title: "Jigisha secures ₹120 Cr ICBMRO contract with Northern Railway Zone", views: "4.2k", author: "Editorial Desk", time: "4 min read" },
    { date: "Apr 2025", tag: "Metro", title: "Smart depot modernization project launched across 3 metro cities", views: "3.1k", author: "Tech Lead", time: "3 min read" },
    { date: "Mar 2025", tag: "Industrial", title: "Industrial Mall Phase II inaugurated — 200+ new vendors onboarded", views: "2.8k", author: "Operations", time: "5 min read" },
    { date: "Feb 2025", tag: "Awards", title: "Jigisha receives 'Best Supply Chain Partner' at Infra Excellence Awards", views: "5.6k", author: "Corporate", time: "2 min read" },
    { date: "Jan 2025", tag: "Expansion", title: "Pan-India warehouse network expands to 220 units", views: "1.9k", author: "Logistics", time: "4 min read" },
  ];

  const pressLogos = [
    "Economic Times", "Business Standard", "Infrastructure Today",
    "Railway Gazette", "Construction World", "Mint",
  ];

  return (
    <>
      {/* Recent Headlines Feed */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Latest</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
                Recent <span className="italic text-gray-400">Headlines</span>
              </h2>
            </div>
          </div>

          <div className="space-y-0 border border-gray-100 rounded-2xl overflow-hidden">
            {recentHeadlines.map((item, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row lg:items-center justify-between px-8 py-8 border-b last:border-0 border-gray-50 hover:bg-blue-50/20 transition-colors group cursor-pointer"
              >
                <div className="flex items-start gap-8">
                  <div className="text-xs font-mono text-gray-300 w-20 shrink-0 pt-1 hidden lg:block">{item.date}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 uppercase tracking-widest">
                        {item.tag}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-gray-200" />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.author}</span>
                      <div className="h-1 w-1 rounded-full bg-gray-200" />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.time}</span>
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-6 lg:mt-0 lg:ml-12 border-t lg:border-t-0 pt-4 lg:pt-0 border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Eye className="h-3.5 w-3.5 text-gray-300" /> 
                    <span className="font-bold"><AnimatedStat value={item.views} /></span>
                    <span className="opacity-50">reads</span>
                  </div>
                  <div className="hidden lg:block h-8 w-px bg-gray-100" />
                  <div className="text-xs font-mono text-gray-300 lg:hidden">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Media Coverage</div>
            <h2 className="font-serif text-3xl text-gray-900">
              Featured in <span className="italic text-gray-400">Leading Publications</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {pressLogos.map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 px-4 py-5 text-center text-sm font-semibold text-gray-400 hover:text-gray-700 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Content Types */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Formats</div>
            <h2 className="font-serif text-4xl text-gray-900">
              How We <span className="italic text-gray-400">Publish</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Newspaper className="h-6 w-6 text-blue-600" />, type: "Press Releases", desc: "Official announcements for major milestones and contract wins" },
              { icon: <Mic className="h-6 w-6 text-blue-600" />, type: "Interviews", desc: "Leadership Q&As and expert commentary on sector developments" },
              { icon: <Radio className="h-6 w-6 text-blue-600" />, type: "Live Updates", desc: "Real-time coverage of conferences and on-site events" },
              { icon: <PenTool className="h-6 w-6 text-blue-600" />, type: "Op-Eds", desc: "Thought leadership from our senior management team" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <div className="group-hover:[&>svg]:text-white transition-colors">{item.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.type}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAGAZINE-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════════ */
function MagazineExtras() {
  const editions = [
    { vol: "Q1 2025", theme: "The Age of Smart Rail", contributor: "12 contributors", highlight: "KAVACH deep-dive" },
    { vol: "Q4 2024", theme: "Green Industrial India", contributor: "9 contributors", highlight: "Renewable energy shift" },
    { vol: "Q3 2024", theme: "Automated Transit Futures", contributor: "14 contributors", highlight: "Metro tech cover story" },
    { vol: "Q2 2024", theme: "MSME & Supply Chain", contributor: "11 contributors", highlight: "Vendor ecosystem map" },
  ];

  const contributors = [
    { name: "Dr. Ramesh Iyer", role: "Rail Technology Expert", articles: 8 },
    { name: "Priya Mehta", role: "Supply Chain Analyst", articles: 5 },
    { name: "Sunil Kapoor", role: "Infrastructure Economist", articles: 6 },
    { name: "Ananya Shah", role: "Smart Cities Researcher", articles: 4 },
  ];

  return (
    <>
      {/* Past Editions */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Archive</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Past <span className="italic text-gray-400">Editions</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-5">
            {editions.map((ed, i) => (
              <div
                key={i}
                className="group bg-gray-50 rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-5"
                  style={{ background: "#eff6ff", color: "#1a56db" }}
                >
                  {ed.vol}
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {ed.theme}
                </h3>
                <p className="text-xs text-blue-500 font-semibold mb-1">{ed.highlight}</p>
                <p className="text-xs text-gray-400">{ed.contributor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="py-24 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Contributors</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                Expert <span className="italic text-gray-400">Editorial Board</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Every issue is shaped by domain experts, industry practitioners, and policy analysts who bring frontline knowledge to our readers.
              </p>
            </div>
            <div className="space-y-4">
              {contributors.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-blue-100 flex items-center justify-between hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-sm">
                      {c.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.role}</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    <AnimatedStat value={String(c.articles)} /> articles
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Statistics / Reach */}
      <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Readership</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-8 leading-tight">
                Global Reach of <br />
                <span className="italic text-gray-400">Jigisha Insights</span>
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "Quarterly Readers", value: "85K+", sub: "Across 12 Countries" },
                  { label: "Corporate Partners", value: "240+", sub: "Industrial Entities" },
                  { label: "Expert Contributors", value: "150+", sub: "Since Inception" },
                  { label: "Total Editions", value: "48", sub: "12 Years of Archive" }
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="text-3xl font-display font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      <AnimatedStat value={stat.value} />
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-[10px] text-gray-300 font-medium italic">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-5/12">
               <div className="bg-gray-50 border border-gray-100 p-10 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4">
                   <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse" />
                 </div>
                 <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-8 border-b border-blue-100 pb-4">
                   Circulation Manifest
                 </div>
                 <div className="space-y-6">
                   {[
                     { area: "Public Policy & Infrastructure", share: "35%", icon: <Globe className="h-4 w-4" /> },
                     { area: "Industrial Manufacturing", share: "28%", icon: <Settings className="h-4 w-4" /> },
                     { area: "Corporate Boardrooms", share: "22%", icon: <Building className="h-4 w-4" /> },
                     { area: "Academic Institutions", share: "15%", icon: <BookOpen className="h-4 w-4" /> }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between group">
                       <div className="flex items-center gap-4">
                         <div className="text-blue-600 opacity-40 group-hover:opacity-100 transition-opacity">
                           {item.icon}
                         </div>
                         <div className="text-sm font-medium text-gray-700">{item.area}</div>
                       </div>
                       <div className="text-sm font-bold text-blue-600 mono">{item.share}</div>
                     </div>
                   ))}
                 </div>
                 <div className="mt-10 pt-8 border-t border-blue-100 flex items-center justify-between text-[10px] text-gray-400 font-bold tracking-widest uppercase">
                    <span>Active Distribution</span>
                    <span className="text-blue-600">Verified Audit 2025</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Tiers */}

    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════════ */
function PortfolioExtras() {
  const milestones = [
    { year: "2008", event: "First ICBMRO contract, Eastern Railway" },
    { year: "2012", event: "Rolling stock supply — 5 railway zones" },
    { year: "2016", event: "Metro rail expansion — Delhi & Mumbai" },
    { year: "2019", event: "200-unit warehousing network established" },
    { year: "2022", event: "Digital Industrial Mall launched" },
    { year: "2025", event: "PM Gati Shakti infrastructure partner" },
  ];

  const capabilities = [
    { label: "Supply", value: "3M+ SKUs", icon: <Tag className="h-5 w-5 text-blue-600" /> },
    { label: "Engineering", value: "ICBMRO Certified", icon: <Settings className="h-5 w-5 text-blue-600" /> },
    { label: "Warehousing", value: "200+ Units", icon: <Building className="h-5 w-5 text-blue-600" /> },
    { label: "Digital", value: "E-Commerce Mall", icon: <Globe className="h-5 w-5 text-blue-600" /> },
  ];

  return (
    <>
      {/* Capability Overview */}
      <section className="py-24 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Capabilities</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              What We <span className="italic text-gray-400">Bring</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-blue-100 flex flex-col gap-4 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <div className="group-hover:[&>svg]:text-white transition-colors">{cap.icon}</div>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{cap.label}</div>
                <div className="font-bold text-gray-900"><AnimatedStat value={cap.value} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Timeline: Compact Vertical Redesign */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-6">Execution Evolution</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-8 leading-tight">
                Strategic <br />
                <span className="italic text-gray-400">Timeline</span>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-sm mb-10">
                Tracking the industrial trajectory of the Jigisha Group—from foundational regional contracts to a pan-India infrastructure ecosystem.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-50 text-blue-700 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg">
                 <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                 Verified Corporate Record
              </div>
            </div>

            <div className="relative">
               {/* Vertical Connector Line */}
               <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-100" />
               
               <div className="space-y-12 relative z-10">
                 {milestones.map((m, i) => (
                   <div key={i} className="group pl-12 relative">
                      {/* Technical Bullet */}
                      <div className="absolute left-0 top-1.5 h-8 w-8 -translate-x-[15px] bg-white border border-gray-200 rounded-lg flex items-center justify-center group-hover:border-blue-600 group-hover:shadow-lg transition-all duration-300">
                         <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-blue-600 transition-colors" />
                      </div>

                      <div className="flex flex-col gap-1">
                         <span className="mono text-[11px] font-bold text-blue-600 tracking-widest">{m.year}</span>
                         <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{m.event}</h3>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sector Matrix */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Coverage</div>
            <h2 className="font-serif text-4xl text-gray-900">
              Sector <span className="italic text-gray-400">Matrix</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              { sector: "Railway", items: ["Rolling stock", "ICBMRO", "OHE", "S&T", "Wagons"], color: "#eff6ff|#1d4ed8" },
              { sector: "Metro Rail", items: ["CBTC", "AFC Gates", "PSD", "Depot Equipment", "SCADA"], color: "#eff6ff|#1d4ed8" },
              { sector: "Industrial", items: ["Heavy Machinery", "PLCs & Sensors", "Solar Energy", "Fab Structures", "PPE"], color: "#eff6ff|#1d4ed8" },
            ].map((s, i) => {
              const [bg, text] = s.color.split("|");
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-all">
                  <div
                    className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-5"
                    style={{ background: bg, color: text }}
                  >
                    {s.sector}
                  </div>
                  <ul className="space-y-3">
                    {s.items.map((item, ii) => (
                      <li key={ii} className="flex items-center gap-2 text-sm text-gray-500">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0" style={{ color: text }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CATALOGUE-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════════ */
function CatalogueExtras() {
  const categories = [
    { name: "Rolling Stock Spares", count: "1,200+ SKUs", icon: <Layers className="h-6 w-6 text-blue-600" /> },
    { name: "OHE & Electrical", count: "850+ SKUs", icon: <Zap className="h-6 w-6 text-blue-600" /> },
    { name: "Signaling & Telecom", count: "400+ SKUs", icon: <Globe className="h-6 w-6 text-blue-600" /> },
    { name: "Heavy Machinery", count: "320+ SKUs", icon: <Settings className="h-6 w-6 text-blue-600" /> },
    { name: "Safety & PPE", count: "600+ SKUs", icon: <Shield className="h-6 w-6 text-blue-600" /> },
    { name: "Consumables", count: "2,500+ SKUs", icon: <Wrench className="h-6 w-6 text-blue-600" /> },
  ];

  const rfqSteps = [
    { step: "01", title: "Browse Catalogue", desc: "Search by category, part number, or OEM specification" },
    { step: "02", title: "Add to RFQ Cart", desc: "Specify quantity and required delivery timeline" },
    { step: "03", title: "Submit Request", desc: "One-click submission through our procurement portal" },
    { step: "04", title: "24hr Response", desc: "Receive quote with availability and lead time" },
  ];

  return (
    <>
      {/* Category Browser */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Browse</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Product <span className="italic text-gray-400">Categories</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group flex items-center justify-between p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {cat.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{cat.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{cat.count}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ Process */}
      <section className="py-24 bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-3">Process</div>
            <h2 className="font-serif text-4xl text-gray-900">
              RFQ in <span className="italic text-gray-400">4 Steps</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-5">
            {rfqSteps.map((s, i) => (
              <div key={i} className="relative">
                {i < rfqSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full border-t border-dashed border-blue-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative z-10 bg-white rounded-2xl border border-blue-100 p-7 hover:shadow-md transition-all">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold text-white mb-5"
                    style={{ background: "#1a56db" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Specifications & Standards */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Standards</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                All Items <span className="italic text-gray-400">Spec-Verified</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every product in our catalogue is verified against applicable Indian and international standards — from RDSO specifications to ISO and BIS certifications.
              </p>
              <div className="flex flex-wrap gap-3">
                {["RDSO Approved", "ISO 9001", "BIS Certified", "CE Marked", "EN 45545"].map((cert) => (
                  <div
                    key={cert}
                    className="px-4 py-2 rounded-full text-xs font-bold border border-blue-200 text-blue-700 bg-blue-50"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "RDSO Spec Sheet Availability", value: "87% of SKUs" },
                { label: "OEM-approved alternatives", value: "65% of SKUs" },
                { label: "Average lead time", value: "3–7 working days" },
                { label: "Minimum order quantity", value: "Flexible (1 unit+)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 rounded-xl border border-gray-100 bg-gray-50"
                >
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="font-bold text-gray-900 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* missing import used inside catalogue extras */
function Settings(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>;
}