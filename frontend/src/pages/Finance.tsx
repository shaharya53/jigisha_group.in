import { CTASection } from "@/components/site/CTASection";
import { PageShell } from "../components/site/PageShell";
import { FINANCE_HERO, FINANCE_PRODUCTS, FINANCE_FEATURES, TARGET_USERS, STRATEGIC_BENEFITS, PILLARS } from "../data/financeData";
import { CheckCircle2, ShieldCheck, Cpu, TrendingUp, CreditCard, ArrowRight, Zap, Target, Handshake, PlusCircle, Activity, Briefcase, Box, Factory, Building, Truck, Rocket, Home, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Finance() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield': return <ShieldCheck className="w-6 h-6 text-accent" />;
      case 'cpu': return <Cpu className="w-6 h-6 text-accent" />;
      case 'trending-up': return <TrendingUp className="w-6 h-6 text-accent" />;
      case 'handshake': return <Handshake className="w-full h-full" />;
      case 'credit': return <CreditCard className="w-full h-full" />;
      case 'plus': return <PlusCircle className="w-full h-full" />;
      case 'activity': return <Activity className="w-full h-full" />;
      case 'briefcase': return <Briefcase className="w-full h-full" />;
      case 'box': return <Box className="w-full h-full" />;
      case 'factory': return <Factory className="w-full h-full" />;
      case 'building': return <Building className="w-full h-full" />;
      case 'truck': return <Truck className="w-full h-full" />;
      case 'rocket': return <Rocket className="w-full h-full" />;
      case 'home': return <Home className="w-full h-full" />;
      case 'users': return <Users className="w-full h-full" />;
      default: return <CheckCircle2 className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <PageShell>
      {/* 1. HERO SECTION (Redesigned: Minimalist Industrial Finance) */}
      <section className="relative h-screen flex items-center bg-white border-b border-border overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img 
            src="/images/finance_hero_bg.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 w-full pt-8">
          <div className="max-w-4xl">
            {/* Left Content */}
            <div className="relative">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tighter mb-12 text-gray-900">
                <div className="overflow-hidden">
                  <div className="reveal" style={{ animationDelay: "200ms" }}>Capital</div>
                </div>
                <div className="overflow-hidden">
                  <div className="reveal italic text-accent" style={{ animationDelay: "400ms" }}>
                    Optimization.
                  </div>
                </div>
              </h1>

              <div className="max-w-xl border-l-2 border-accent/30 pl-10 mb-16 reveal" style={{ animationDelay: "400ms" }}>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {FINANCE_HERO.description.split('. ')[0]}.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-10 reveal" style={{ animationDelay: "600ms" }}>
                <button className="bg-gray-900 text-white px-12 py-6 mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-all duration-300 group flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                  Analyze Needs <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-accent transition-colors">
                    <Zap className="h-4 w-4 text-accent" />
                  </div>
                  <span className="mono text-[11px] tracking-widest uppercase text-gray-500 group-hover:text-gray-900 transition-colors">Watch Mechanism</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OBJECTIVE STATEMENT (Redesigned: Industrial Manifesto) */}
      <section className="border-b border-border bg-background py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.02]" />
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-[2px] bg-accent mb-10" />
            <div className="relative">
              {/* Subtle Background Icon */}
              <div className="absolute -top-12 -left-12 opacity-[0.05] pointer-events-none">
                <Target className="w-32 h-32 text-accent" />
              </div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tighter text-foreground relative z-10 max-w-4xl">
                "Empowering businesses from <span className="text-accent">Railways</span> to <span className="text-accent">MSMEs</span> with accessible, responsible, and <span className="italic">milestone-linked</span> financial services."
              </h2>
            </div>
            <div className="w-12 h-[2px] bg-accent mt-10" />
          </div>
        </div>
      </section>

      {/* 3. JIGISHA EMPOWER FINANCE CARDS */}
      <section className="border-b border-border bg-secondary/10 py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-10 grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <div className="mono text-[12px] tracking-widest uppercase text-accent mb-4">Financial Products</div>
              <h2 className="font-display text-4xl lg:text-6xl leading-[0.9]">
                Jigisha <span className="italic text-accent">Empower</span> Series.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Unlock the liquidity your project needs with our tier-based credit and loan facilities, designed specifically for heavy industry and transit projects.
            </p>
          </div>

          {/* Mobile Grid View */}
          <div className="grid md:grid-cols-2 lg:hidden gap-6">
            {FINANCE_PRODUCTS.map((product, i) => (
              <div key={i} className="relative flex flex-col p-8 bg-background border border-border group hover:bg-secondary/20 transition-all duration-300">
                <div className="flex-1">
                  <div className="mono text-[12px] tracking-[0.2em] uppercase text-accent mb-6">{product.tier}</div>
                  <h3 className="font-display text-3xl mb-1">{product.name}</h3>
                  <div className="mono text-[11px] text-muted-foreground uppercase tracking-widest mb-6">{product.type}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>
                  <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 mb-8">
                    <div>
                      <div className="mono text-[9px] tracking-widest uppercase text-muted-foreground mb-1">Amount</div>
                      <div className="font-display text-lg text-foreground">{product.amount}</div>
                    </div>
                    <div>
                      <div className="mono text-[9px] tracking-widest uppercase text-muted-foreground mb-1">Tenure</div>
                      <div className="font-display text-lg text-foreground">{product.tenure}</div>
                    </div>
                    <div>
                      <div className="mono text-[9px] tracking-widest uppercase text-muted-foreground mb-1">Rate</div>
                      <div className="font-display text-lg text-accent">{product.rate}</div>
                    </div>
                    <div>
                      <div className="mono text-[9px] tracking-widest uppercase text-muted-foreground mb-1">Time</div>
                      <div className="font-display text-lg text-foreground">{product.processing}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                  <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground">Operational Status</div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="mono text-[11px] uppercase tracking-widest">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop 3-Column Interactive View */}
          <div className="hidden lg:grid grid-cols-[1.2fr_2fr_1.2fr] border border-border bg-border gap-px overflow-hidden shadow-2xl">
            {/* Left Headings */}
            <div className="flex flex-col bg-background h-full">
              {FINANCE_PRODUCTS.slice(0, 6).map((product, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={`flex-1 py-6 px-10 min-h-[100px] flex flex-col justify-center border-b border-border last:border-b-0 cursor-pointer transition-all duration-500 group relative overflow-hidden ${hoveredIndex === i ? 'bg-secondary' : 'bg-background hover:bg-secondary/30'}`}
                >
                  <div className="absolute top-4 right-6 font-display text-6xl text-accent/5 group-hover:text-accent/10 transition-colors pointer-events-none select-none leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className={`font-display text-2xl leading-tight transition-colors duration-300 ${hoveredIndex === i ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Middle Data Column */}
            <div className="bg-background relative p-16 flex flex-col justify-center min-h-[700px] overflow-hidden">
              <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
              <div key={`icon-${hoveredIndex}`} className="absolute top-0 right-0 p-8 opacity-5 animate-in fade-in zoom-in-95 duration-1000">
                <div className="w-64 h-64 text-accent">
                  {renderIcon(FINANCE_PRODUCTS[hoveredIndex].iconName)}
                </div>
              </div>

              <div key={hoveredIndex} className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mono text-[11px] tracking-[0.4em] uppercase text-accent mb-8 font-bold flex items-center gap-4">
                  <span className="h-px w-12 bg-accent/30" />
                  {FINANCE_PRODUCTS[hoveredIndex].tier}
                </div>

                <h3 className="font-display text-6xl xl:text-7xl leading-[0.85] tracking-tighter mb-8 flex flex-wrap gap-x-4">
                  {(() => {
                    const words = FINANCE_PRODUCTS[hoveredIndex].name.split(' ');
                    if (words.length > 3) {
                      const firstPart = words.slice(0, words.length - 2).join(' ');
                      const lastPart = words.slice(words.length - 2).join(' ');
                      return (
                        <>
                          <span className="block w-full">{firstPart}</span>
                          <span className="italic text-accent block mt-2">{lastPart}</span>
                        </>
                      );
                    } else if (words.length === 3) {
                      return (
                        <>
                          <span className="block w-full">{words[0]} {words[1]}</span>
                          <span className="italic text-accent block mt-2">{words[2]}</span>
                        </>
                      );
                    } else {
                      return words.map((word, i, arr) => (
                        <span key={i} className={i === arr.length - 1 ? "italic text-accent block mt-2" : "block"}>
                          {word}
                        </span>
                      ));
                    }
                  })()}
                </h3>

                <div className="mono text-xs text-muted-foreground uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-accent" />
                  {FINANCE_PRODUCTS[hoveredIndex].type}
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-12 font-light">
                  {FINANCE_PRODUCTS[hoveredIndex].description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border pt-10">
                  <div>
                    <div className="mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">Amount</div>
                    <div className="font-display text-xl text-foreground">{FINANCE_PRODUCTS[hoveredIndex].amount}</div>
                  </div>
                  <div>
                    <div className="mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">Tenure</div>
                    <div className="font-display text-xl text-foreground">{FINANCE_PRODUCTS[hoveredIndex].tenure}</div>
                  </div>
                  <div>
                    <div className="mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">Rate</div>
                    <div className="font-display text-xl text-accent">{FINANCE_PRODUCTS[hoveredIndex].rate}</div>
                  </div>
                  <div>
                    <div className="mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">Processing</div>
                    <div className="font-display text-xl text-foreground">{FINANCE_PRODUCTS[hoveredIndex].processing}</div>
                  </div>
                </div>


              </div>
            </div>

            {/* Right Headings */}
            <div className="flex flex-col bg-background h-full">
              {FINANCE_PRODUCTS.slice(6, 12).map((product, i) => {
                const actualIndex = i + 6;
                return (
                  <div
                    key={actualIndex}
                    onMouseEnter={() => setHoveredIndex(actualIndex)}
                    className={`flex-1 py-6 px-10 min-h-[100px] flex flex-col justify-center border-b border-border last:border-b-0 cursor-pointer transition-all duration-500 group relative overflow-hidden ${hoveredIndex === actualIndex ? 'bg-secondary' : 'bg-background hover:bg-secondary/30'}`}
                  >
                    <div className="absolute top-4 left-6 font-display text-6xl text-accent/5 group-hover:text-accent/10 transition-colors pointer-events-none select-none leading-none">
                      {String(actualIndex + 1).padStart(2, '0')}
                    </div>
                    <h3 className={`font-display text-2xl leading-tight text-right transition-colors duration-300 ${hoveredIndex === actualIndex ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                      {product.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES (Redesigned as clean technical list) */}
      <section className="border-b border-border bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {FINANCE_FEATURES.map((feature, i) => (
              <div key={i} className="border-l border-border pl-8 relative">

                <h3 className="font-display text-2xl mb-8 tracking-tight">{feature.title}</h3>
                <ul className="space-y-5">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 FINANCIAL POWER ENGINE */}
      <FinancialPowerEngine />

      {/* 5. TARGET USERS & STRATEGIC BENEFITS */}
      <section className="border-b border-border bg-background py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.02]" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-end mb-20">
            <div>
              <div className="mono text-[12px] tracking-widest uppercase text-accent mb-4">Ecosystem Support</div>
              <h2 className="font-display text-4xl lg:text-7xl leading-[0.85] tracking-tighter">Strategic <br /><span className="italic text-accent">Advantage.</span></h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We bridge the gap between large-scale industrial requirements and specialized financial instruments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Target Users Table */}
            <div className="border border-border">
              <div className="grid grid-cols-12 bg-secondary/50 p-6 border-b border-border mono text-[12px] uppercase tracking-widest text-accent">
                <div className="col-span-5">Category</div>
                <div className="col-span-7">Support Strategy</div>
              </div>
              <div className="divide-y divide-border bg-background">
                {TARGET_USERS.map((user, i) => (
                  <div key={i} className="grid grid-cols-12 p-6 text-sm items-center hover:bg-secondary/10 transition-colors">
                    <div className="col-span-5 font-display text-lg">{user.category}</div>
                    <div className="col-span-7 text-muted-foreground leading-relaxed">{user.support}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Benefits List */}
            <div className="space-y-px bg-border border border-border">
              {STRATEGIC_BENEFITS.map((benefit, i) => (
                <div key={i} className="bg-background p-10 group hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-4 mb-6">

                    <h3 className="font-display text-2xl">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-12">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTITUTIONAL PILLARS (Redesigned: Technical Manifest Table) */}
      <section className="border-b border-border bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="w-full">
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b-2 border-accent/20 pb-4 mb-0 px-6 mono text-[11px] tracking-[0.3em] text-accent uppercase font-bold">
              <div className="col-span-1">ID</div>
              <div className="col-span-3">Institutional Pillar</div>
              <div className="col-span-8 text-right">Operational Framework & Protocols</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {PILLARS.map((pillar, i) => (
                <div key={i} className="grid grid-cols-12 py-10 px-6 group hover:bg-secondary/10 transition-colors items-start">
                  {/* ID Column */}
                  <div className="col-span-1 mono text-[12px] text-muted-foreground pt-1">
                    0{i + 1}.
                  </div>

                  {/* Title & Icon Column */}
                  <div className="col-span-3 flex items-start gap-4">
                    <div className="w-6 h-6 mt-1 opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
                      {renderIcon(pillar.icon)}
                    </div>
                    <div>
                      <h3 className="font-display text-xl leading-none mb-2">{pillar.title}</h3>
                      <div className="mono text-[8px] tracking-widest text-muted-foreground uppercase">
                        Status: {i === 0 ? "Verified" : i === 1 ? "Active" : "Upstream"}
                      </div>
                    </div>
                  </div>

                  {/* Items Column */}
                  <div className="col-span-8">
                    <div className="flex flex-wrap justify-end gap-x-8 gap-y-3">
                      {pillar.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground/80 hover:text-foreground transition-colors">
                          <div className="w-1 h-[1px] bg-accent/40" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INFIN SPOTLIGHT */}
      <InfinSpotlight />

      <CTASection />
    </PageShell>
  );
}

function FinancialPowerEngine() {
  const infinFlow = [
    {
      step: "01",
      title: "Industrial Credit Access",
      desc: "Enable businesses to procure materials and machinery with flexible credit lines and deferred payment models."
    },
    {
      step: "02",
      title: "Vendor Financing",
      desc: "Empowering suppliers with early payment cycles and working capital support against verified orders."
    },
    {
      step: "03",
      title: "Project Financing",
      desc: "Milestone-based funding aligned with execution phases like installation, commissioning and maintenance."
    },
    {
      step: "04",
      title: "Equipment Leasing",
      desc: "Access high-value machinery through EMI and leasing models without upfront capital burden."
    }
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-gradient-to-br from-primary to-[#050508] overflow-hidden border-b border-border">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent mb-6 mono text-[11px] tracking-widest uppercase">
            <Zap className="w-3 h-3" /> Core Mechanics
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-white leading-[0.9]">
            The Financial <span className="italic text-accent">Power Engine.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-32 mb-16 hidden lg:block">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />

          <div className="grid grid-cols-4 gap-4">
            {infinFlow.map((item, i) => (
              <div key={i} className="relative group flex flex-col items-center cursor-default">
                {/* Top Content (Title) */}
                <div className="absolute bottom-full mb-8 text-center w-full transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mono text-xs text-accent tracking-widest mb-2">{item.step}</div>
                  <h3 className="font-display text-xl text-white whitespace-nowrap">{item.title}</h3>
                </div>

                {/* Glowing Node */}
                <div className="relative w-6 h-6 z-10 flex items-center justify-center">
                  {/* Ping effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-all duration-500" />
                  {/* Outer circle */}
                  <div className="w-6 h-6 rounded-full bg-[#121218] border-2 border-accent/40 group-hover:border-accent transition-colors duration-300 z-10" />
                  {/* Inner glow dot */}
                  <div className="absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_rgba(var(--color-accent),1)] opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                {/* Bottom Content (Expandable Description) */}
                <div className="absolute top-full mt-8 w-[120%] text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm shadow-2xl relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#121218] border-t border-l border-white/10 rotate-45" />
                    <p className="text-sm text-gray-300 leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-12 relative border-l-2 border-accent/20 ml-4 mt-12">
          {infinFlow.map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-[#121218] border-2 border-accent shadow-[0_0_10px_rgba(var(--color-accent),0.5)]" />
              <div className="mono text-[11px] text-accent tracking-widest mb-1">{item.step}</div>
              <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function InfinSpotlight() {
  const infinSpotlight = {
    tag: "Jigisha Infin",
    title: "The Financial Engine Behind Execution.",
    subtitle: "Powering procurement, projects and industrial growth through intelligent financing.",
    description: "Jigisha Infin enables businesses to access flexible credit, vendor financing, and project-based funding — seamlessly integrated with supply chain and engineering services.",
    points: [
      "Deferred payment & credit lines",
      "Vendor & supply chain financing",
      "Project-based funding models",
      "Equipment leasing & capital support"
    ],
    website: "https://jigishainfin.com",
    cta: "Explore Infin"
  };

  return (
    <section className="relative overflow-hidden bg-background border-b border-border py-24 lg:py-48">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-accent),0.03)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-border bg-background mb-10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="mono text-[12px] tracking-widest uppercase text-muted-foreground">{infinSpotlight.tag}</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.85] tracking-tighter mb-10">
              The Engine <br />
              <span className="italic text-accent">Behind.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
              {infinSpotlight.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {infinSpotlight.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-4">

                  <span className="text-sm font-medium leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>

            {/* BOTTOM CTAs */}
            <div className="flex flex-wrap items-center gap-8">
              <a
                href={infinSpotlight.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 mono text-xs tracking-[0.2em] uppercase hover:bg-accent transition-colors group"
              >
                {infinSpotlight.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={infinSpotlight.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors"
              >
                Visit jigishainfin.com
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Structured Industrial Display */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] flex gap-6 group">
            {/* Primary Visual Panel */}
            <div className="flex-[1.5] relative overflow-hidden border border-border bg-secondary shadow-2xl">
              <img
                src="/images/metro_blue.png"
                alt="Industrial Infrastructure"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="mono text-[10px] text-accent tracking-[0.4em] mb-2 uppercase">Core Asset // 01</div>
                <div className="font-display text-2xl text-white">Project Infrastructure</div>
              </div>
            </div>

            {/* Technical Dashboard Panel */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Top Detail Image */}
              <div className="flex-1 relative overflow-hidden border border-border bg-secondary shadow-xl">
                <img
                  src="/images/rail_smart.png"
                  alt="Technical Detail"
                  className="w-full h-full object-cover grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Card */}
              <div className="bg-background border border-border p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blueprint opacity-[0.05]" />
                <div className="mono text-[10px] tracking-widest uppercase text-accent mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  Live Sync
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mono text-[9px] uppercase text-muted-foreground mb-1">Latency Protocol</div>
                    <div className="font-display text-3xl leading-none">0.024ms</div>
                  </div>

                  <div className="flex gap-1 items-end h-8">
                    {[0.4, 0.7, 0.3, 0.9, 0.5, 0.8].map((h, i) => (
                      <div key={i} className="flex-1 bg-accent/20" style={{ height: `${h * 100}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Alignment Markers */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-accent/40 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-accent/40 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
