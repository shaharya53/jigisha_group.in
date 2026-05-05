import { useParams, Navigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { SERVICES_DATA } from "../../data/servicesData";
import { PageShell } from "../../components/site/PageShell";
import {
  ArrowRight, CheckCircle2, ChevronRight, ShieldCheck,
  Settings, Activity, Train, Building2, BarChart3,
  Factory, Zap, Globe, Award, Clock, Users, TrendingUp,
  MapPin, Phone, Star, FileCheck, Layers, Cpu, Wrench,
  Package, AlertTriangle, LifeBuoy, Target
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../../components/ui/carousel";
import { AnimatedStat } from "../../components/ui/AnimatedStat";
import { CTASection } from "../../components/site/CTASection";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in SERVICES_DATA)) {
    return <Navigate to="/services" replace />;
  }

  const data = SERVICES_DATA[slug as keyof typeof SERVICES_DATA];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <PageShell>
      <ServiceHero data={data} slug={slug} />
      <CapabilitiesSection data={data} setApi={setApi} api={api} current={current} count={count} />
      <ProductMatrix data={data} />

      {/* Service-specific bonus sections */}
      {slug === "railway" && <RailwayExtras />}
      {slug === "metro" && <MetroExtras />}
      {slug === "commercial" && <CommercialExtras />}
      {slug === "industrial" && <IndustrialExtras />}

      <StrategicAdvantage data={data} />
      <CTASection />
    </PageShell>
  );
}

/* ─────────────────────────────────────────────────────────── HERO (DARK CINEMATIC) */
function ServiceHero({ data, slug }: { data: any; slug: string }) {
  const accentColors: Record<string, string> = {
    railway: "#3b82f6",
    metro: "#3b82f6",
    commercial: "#3b82f6",
    industrial: "#3b82f6",
  };
  const accent = accentColors[slug] ?? "#3b82f6";

  const icons: Record<string, React.ReactNode> = {
    railway: <Train className="h-5 w-5" />,
    metro: <Building2 className="h-5 w-5" />,
    commercial: <BarChart3 className="h-5 w-5" />,
    industrial: <Factory className="h-5 w-5" />,
  };

  const [titleA, titleB] = data.hero.heading.split("–").map((s: string) => s.trim());

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center bg-[#050505] text-white overflow-hidden border-b border-white/5">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.hero.image} 
          alt="" 
          className="w-full h-full object-cover opacity-40 transition-transform duration-[10s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,transparent_0%,rgba(5,5,5,0.8)_100%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Heading & Branding */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white shadow-lg" style={{ background: accent }}>
                  {icons[slug]}
               </div>
               <span className="text-[11px] font-black tracking-[0.4em] uppercase text-white/40">
                  {slug} // mission_link_v3
               </span>
            </div>

            <h1 className="font-display leading-[0.9] tracking-tighter text-white mb-8" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)' }}>
              {titleA}
              {titleB && (
                <>
                  <br />
                  <span style={{ color: accent }}>{titleB}</span>
                </>
              )}
            </h1>

            <p className="text-lg text-white/50 leading-relaxed font-light mb-10 max-w-xl italic">
              {data.hero.subheading}
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-black font-bold text-sm rounded-xl transition-all hover:opacity-90 active:scale-95 shadow-xl"
                style={{ background: accent }}
              >
                Initialize Protocol <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm rounded-xl border border-white/10 text-white transition-all hover:bg-white/5"
              >
                Get Specifications
              </Link>
            </div>
          </div>

          {/* Right: Technical Readout Console */}
          <div className="lg:col-span-5">
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                     <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5" style={{ color: accent }} />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Sector Highlights</span>
                     </div>
                     <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-full border border-white/5">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[9px] font-bold text-white/60 uppercase">Operational</span>
                     </div>
                  </div>

                  <div className="space-y-5">
                    {data.hero.extraPoints.map((point: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="h-5 w-5 rounded bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3 w-3" style={{ color: accent }} />
                        </div>
                        <span className="text-sm text-white/40 leading-relaxed italic">{point}</span>
                      </div>
                    ))}
                  </div>
               </div>
               
               {/* Kinetic HUD Ornament */}
               <div className="absolute -bottom-10 -right-10 h-32 w-32 border border-white/5 rounded-full animate-[spin_25s_linear_infinite]" />
               {/* Subtle HUD Scan Line */}
               <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[length:100%_200%] animate-[scan_4s_linear_infinite]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── CAPABILITIES */
function CapabilitiesSection({ data, setApi, api, current, count }: any) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-gray-100 pb-12">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">02 — Capabilities</div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight text-gray-900">
              Industrial<br /><span className="text-gray-400 italic">Domains</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-base leading-relaxed">
            Precision engineering across specialized infrastructure domains.
          </p>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-6">
            {data.domains.map((domain: any, i: number) => (
              <CarouselItem key={domain.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div
                  className="group rounded-2xl border h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ borderColor: "#e5e7eb", background: "#fafafa" }}
                >
                  {/* Image area */}
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img
                      src={domain.imageSuggestion}
                      alt={domain.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-bold text-gray-600 shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl text-gray-900 mb-5 leading-snug group-hover:text-blue-700 transition-colors">
                      {domain.title}
                    </h3>
                    <ul className="space-y-3 flex-1">
                      {domain.services.map((service: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                          <ChevronRight className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between items-center mt-10">
            <div className="flex gap-1.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: current === index + 1 ? "2.5rem" : "0.5rem",
                    background: current === index + 1 ? "#1a56db" : "#e5e7eb",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-full border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all" />
              <CarouselNext className="static translate-y-0 h-11 w-11 rounded-full border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── PRODUCT MATRIX */
function ProductMatrix({ data }: { data: any }) {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">03 — Inventory</div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
              Product<br /><span className="text-gray-400 italic">Matrix</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Components and integrated systems engineered to meet stringent industrial specifications.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center gap-5">
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <Settings className="h-5 w-5 text-blue-600 animate-spin-slow" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Technical Support</div>
                <div className="font-semibold text-gray-900 text-sm">24 / 7 Deployment Ready</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-2 gap-4 bg-gray-900 text-white px-8 py-5">
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400">Category</div>
                <div className="text-xs font-bold tracking-widest uppercase text-blue-400">Integrated Systems</div>
              </div>
              {/* Rows */}
              {data.productCategories.map((cat: any, i: number) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-4 px-8 py-5 border-b last:border-0 hover:bg-blue-50/30 transition-colors group"
                  style={{ borderColor: "#f3f4f6" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-300 font-mono">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                      {cat.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors self-center">
                    {cat.items}
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

/* ─────────────────────────────────────────────────────────── STRATEGIC ADVANTAGE */
function StrategicAdvantage({ data }: { data: any }) {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">
            Why Jigisha
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl leading-tight text-gray-900">
            The Strategic<br /><span className="text-gray-400 italic">Advantage</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.whyChooseUs.map((reason: string, i: number) => (
            <div
              key={i}
              className="group relative rounded-2xl border p-8 flex flex-col gap-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default"
              style={{ borderColor: "#e5e7eb", background: "#fafafa" }}
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ShieldCheck className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-mono text-3xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-gray-700 font-medium text-lg leading-snug">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── CTA */

/* ═══════════════════════════════════════════════════════════
   RAILWAY-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════ */
function RailwayExtras() {
  const zones = [
    { zone: "Northern Railway", projects: 48, status: "Active" },
    { zone: "Western Railway", projects: 34, status: "Active" },
    { zone: "Southern Railway", projects: 27, status: "Active" },
    { zone: "Eastern Railway", projects: 19, status: "Ongoing" },
    { zone: "Central Railway", projects: 31, status: "Active" },
    { zone: "South Central", projects: 22, status: "Ongoing" },
  ];

  const platforms = [
    { name: "GeM Portal", desc: "Government e-Marketplace registered vendor", icon: <Globe className="h-5 w-5 text-blue-600" /> },
    { name: "IREPS", desc: "Indian Railways E-Procurement System certified", icon: <FileCheck className="h-5 w-5 text-blue-600" /> },
    { name: "OEM Direct", desc: "Authorized distributor for key manufacturers", icon: <Award className="h-5 w-5 text-blue-600" /> },
    { name: "ICBMRO", desc: "Inspection, commissioning, break-down & major repair overhaul", icon: <Wrench className="h-5 w-5 text-blue-600" /> },
  ];

  const timeline = [
    { year: "2008", event: "First ICBMRO contract with Eastern Railway" },
    { year: "2012", event: "Expanded to rolling stock supply across 5 zones" },
    { year: "2016", event: "KAVACH pilot project deployment support" },
    { year: "2019", event: "Nationwide AMC network established" },
    { year: "2023", event: "PM Gati Shakti infrastructure partner" },
  ];

  return (
    <>
      {/* Railway Zone Coverage */}
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Railway Zones</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight">
              Pan-India Zone <span className="text-gray-400 italic">Coverage</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {zones.map((z, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-5 rounded-xl border hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div>
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{z.zone}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{z.projects} projects completed</div>
                </div>
                <div
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: z.status === "Active" ? "#eff6ff" : "#fefce8",
                    color: z.status === "Active" ? "#1d4ed8" : "#a16207",
                  }}
                >
                  {z.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Platforms */}
      <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Procurement</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                Certified Procurement<br /><span className="text-gray-400 italic">Channels</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Jigisha operates across all major government and industrial procurement frameworks, ensuring compliance, transparency, and competitive pricing on every contract.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center">{p.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm mb-1">{p.name}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Railway Timeline */}
      <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">History</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Railway Journey <span className="text-gray-400 italic">Timeline</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-8 mb-10 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="text-xs font-mono font-bold text-blue-600 mb-1">{item.year}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.event}</div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-blue-600 border-4 border-white shadow-sm z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "16+", label: "Railway Zones Served" },
              { value: "200+", label: "Active Contracts" },
              { value: "₹500Cr+", label: "Project Value Delivered" },
              { value: "99.2%", label: "On-Time SLA Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <AnimatedStat value={stat.value} className="font-serif text-4xl font-bold mb-1 block" />
                <div className="text-xs text-blue-200 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   METRO-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════ */
function MetroExtras() {
  const cities = [
    { city: "Delhi NCR", lines: "DMRC Phase IV", status: "Active" },
    { city: "Mumbai", lines: "Metro Line 7, 2A", status: "Active" },
    { city: "Bengaluru", lines: "Namma Metro Ext.", status: "Active" },
    { city: "Hyderabad", lines: "HMRL Corridor", status: "Ongoing" },
    { city: "Pune", lines: "PMC Phase 1", status: "Planning" },
    { city: "Ahmedabad", lines: "MEGA Phase 2", status: "Active" },
  ];

  const tech = [
    { name: "CBTC", full: "Communication-Based Train Control", benefit: "Enables fully driverless operations with 90-second headways" },
    { name: "AFC", full: "Automated Fare Collection", benefit: "Smart card, UPI, and QR-based ticketing integration" },
    { name: "PSD", full: "Platform Screen Doors", benefit: "Full-height doors synchronized with train arrival" },
    { name: "SCADA", full: "Supervisory Control & Data Acquisition", benefit: "Real-time monitoring of power and environmental systems" },
  ];

  return (
    <>
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Network</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Metro Cities <span className="text-gray-400 italic">Network</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border hover:border-blue-200 hover:bg-blue-50/20 transition-all group"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{c.city}</div>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: c.status === "Active" ? "#eff6ff" : c.status === "Ongoing" ? "#eff6ff" : "#f9fafb",
                      color: c.status === "Active" ? "#1d4ed8" : c.status === "Ongoing" ? "#1d4ed8" : "#6b7280",
                    }}
                  >
                    {c.status}
                  </div>
                </div>
                <div className="text-sm text-gray-400">{c.lines}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Technology</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Advanced <span className="text-gray-400 italic">Tech Stack</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {tech.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-6 hover:shadow-md transition-all group"
              >
                <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                  <Cpu className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-bold text-gray-900 text-lg">{t.name}</span>
                    <span className="text-xs text-gray-400">{t.full}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Cities Active" },
              { value: "340+", label: "Stations Served" },
              { value: "1.2M+", label: "Daily Commuters Impacted" },
              { value: "98.8%", label: "Uptime SLA" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <AnimatedStat value={stat.value} className="font-serif text-4xl font-bold mb-1 block" />
                <div className="text-xs text-blue-200 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Passenger Experience</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                Designed for <span className="text-gray-400 italic">Millions Daily</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every solution we deploy considers the daily experience of millions of urban commuters — from seamless boarding to real-time passenger information systems.
              </p>
              <div className="space-y-4">
                {[
                  "Barrier-free accessibility compliance (RPWD Act)",
                  "Multilingual PIS & PA systems",
                  "Real-time crowd management via IoT sensors",
                  "Emergency evacuation drill support & simulation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users className="h-6 w-6 text-blue-600" />, label: "Accessibility", value: "100% RPWD Compliant" },
                { icon: <Clock className="h-6 w-6 text-blue-600" />, label: "Headway", value: "< 90 seconds" },
                { icon: <Star className="h-6 w-6 text-blue-600" />, label: "Satisfaction", value: "4.7 / 5.0 avg" },
                { icon: <Activity className="h-6 w-6 text-blue-600" />, label: "Uptime", value: "99.9% guaranteed" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
                >
                  <div className="mb-3">{card.icon}</div>
                  <div className="text-xs text-blue-400 mb-1">{card.label}</div>
                  <div className="font-bold text-gray-900 text-sm">{card.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMMERCIAL-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════ */
function CommercialExtras() {
  const process = [
    { step: "01", title: "Requirement Analysis", desc: "Deep dive into project scope, regulatory environment, and procurement constraints." },
    { step: "02", title: "Strategy & Bid Prep", desc: "Develop a winning tender strategy with complete GeM / IREPS documentation." },
    { step: "03", title: "Execution & Oversight", desc: "Deploy PMC resources, manage vendors, and track milestones in real time." },
    { step: "04", title: "Audit & Closure", desc: "Financial audit, compliance sign-off, and post-project performance review." },
  ];

  const sectors = [
    "Indian Railways", "Metro Rail Corporations", "Defense PSUs",
    "State Electricity Boards", "Smart City SPVs", "Port Trusts",
    "Central Public Works Dept.", "Municipal Corporations",
  ];

  return (
    <>
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Process</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              How We <span className="text-gray-400 italic">Deliver</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t border-dashed border-gray-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition-all">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold text-white mb-5"
                    style={{ background: "#1d4ed8" }}
                  >
                    {p.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-blue-50/50 border-y border-blue-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Clientele</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                Government Sectors <span className="text-gray-400 italic">Served</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Decades of experience navigating India's complex public sector procurement landscape means we get contracts done right — on time and within compliance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {sectors.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl px-5 py-3.5 border border-blue-100 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-all"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "800+", label: "Tenders Executed" },
              { value: "96%", label: "Compliance Rate" },
              { value: "₹1200Cr+", label: "Contracts Managed" },
              { value: "15+", label: "Years in Govt. Procurement" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <AnimatedStat value={stat.value} className="font-serif text-4xl font-bold mb-1 block" />
                <div className="text-xs text-blue-200 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Risk</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Risk <span className="text-gray-400 italic">Management</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              { icon: <AlertTriangle className="h-5 w-5" />, title: "Pre-bid Risk Mapping", desc: "Identify financial, legal, and delivery risks before tender submission to protect margins." },
              { icon: <FileCheck className="h-5 w-5" />, title: "Regulatory Compliance", desc: "Automated tracking of statutory obligations across all active contracts." },
              { icon: <LifeBuoy className="h-5 w-5" />, title: "Dispute Resolution", desc: "In-house legal advisory for contractual disputes, arbitration, and mediation." },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col gap-5 hover:shadow-md transition-all group"
              >
                <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   INDUSTRIAL-SPECIFIC EXTRA SECTIONS
═══════════════════════════════════════════════════════════ */
function IndustrialExtras() {
  const sectors = [
    { name: "Defense Manufacturing", icon: <ShieldCheck className="h-5 w-5 text-blue-600" />, projects: 18 },
    { name: "Renewable Energy", icon: <Zap className="h-5 w-5 text-blue-600" />, projects: 24 },
    { name: "Heavy Engineering", icon: <Wrench className="h-5 w-5 text-blue-600" />, projects: 62 },
    { name: "Agri-Processing", icon: <Package className="h-5 w-5 text-blue-600" />, projects: 15 },
    { name: "Chemical & Pharma", icon: <Layers className="h-5 w-5 text-blue-600" />, projects: 11 },
    { name: "Logistics & Ports", icon: <Globe className="h-5 w-5 text-blue-600" />, projects: 20 },
  ];

  const industry40 = [
    { title: "Digital Twin", desc: "Virtual replicas of plant equipment for predictive simulation and failure modeling." },
    { title: "Industrial IoT", desc: "20,000+ sensors deployed across client facilities for real-time condition monitoring." },
    { title: "AI-Driven Maintenance", desc: "ML models trained on equipment data to predict failures 72 hours in advance." },
    { title: "SCADA Integration", desc: "Centralised control dashboards for multi-site plant visibility." },
  ];

  return (
    <>
      <section className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Sectors</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900">
              Industrial Sectors <span className="text-gray-400 italic">Covered</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-6 rounded-2xl border hover:border-blue-200 hover:bg-blue-50/20 transition-all group"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {s.icon}
                  </div>
                  <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{s.name}</span>
                </div>
                <div className="text-xs text-gray-400 font-mono">{s.projects} proj.</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Innovation</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-white leading-tight">
              Industry 4.0 <span className="text-gray-500 italic">Capabilities</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {industry40.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all group"
                style={{ background: "#111827" }}
              >
                <div className="flex items-start gap-5">
                  <div className="h-10 w-10 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Plants Commissioned" },
              { value: "20K+", label: "IoT Sensors Deployed" },
              { value: "40%", label: "Avg. Downtime Reduction" },
              { value: "12", label: "Industrial Sectors" },
            ].map((stat, i) => (
              <div key={i} className="text-center text-white">
                <AnimatedStat value={stat.value} className="font-serif text-4xl font-bold mb-1 block" />
                <div className="text-xs text-blue-200 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-blue-600 mb-4">Safety</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                Zero-Compromise <span className="text-gray-400 italic">Safety Standards</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                In every plant we commission or maintain, safety is the first and last checkpoint. Our teams are certified across international safety frameworks.
              </p>
              <div className="flex flex-wrap gap-3">
                {["ISO 45001:2018", "OHSAS 18001", "NFPA Compliant", "ATEX Rated", "BIS Certified"].map((cert) => (
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
                { metric: "LTI Incidents", value: "0", sub: "Lost-time injuries in FY2024" },
                { metric: "Safety Audits", value: "2x/yr", sub: "Per facility, mandatory" },
                { metric: "Emergency Response", value: "< 15 min", sub: "On-site response SLA" },
                { metric: "Training Hours", value: "12,000+", sub: "Delivered in FY2024" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 rounded-xl border border-gray-100 bg-gray-50"
                >
                  <div className="text-sm text-gray-500">{item.metric}</div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{item.value}</div>
                    <div className="text-xs text-gray-400">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}