import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { IB_NAV } from "@/data/international";
import { SERVICES_NAV } from "@/data/servicesData";
import { MEDIA_NAV } from "@/data/mediaData";

const NAV_LEFT = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "https://jigisha.group/", label: "Who we are", external: true },
];

const NAV_RIGHT = [
  { to: "https://careers.jigisha.group/", label: "Career", external: true },
  { to: "https://registration.jigisha.store/login", label: "Join Us", external: true },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIBOpen, setMobileIBOpen] = useState(false);
  const [mobileVentureOpen, setMobileVentureOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  /* Desktop dropdown state */
  const [ibOpen, setIbOpen] = useState(false);
  const [ventureOpen, setVentureOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const ibCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ventureCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mediaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openIB = () => {
    if (ibCloseTimer.current) clearTimeout(ibCloseTimer.current);
    setIbOpen(true);
  };
  const closeIB = () => {
    ibCloseTimer.current = setTimeout(() => {
      setIbOpen(false);
      setVentureOpen(false);
    }, 120);
  };
  const openVenture = () => {
    if (ventureCloseTimer.current) clearTimeout(ventureCloseTimer.current);
    setVentureOpen(true);
  };
  const closeVenture = () => {
    ventureCloseTimer.current = setTimeout(() => setVentureOpen(false), 120);
  };
  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };
  const openMedia = () => {
    if (mediaCloseTimer.current) clearTimeout(mediaCloseTimer.current);
    setMediaOpen(true);
  };
  const closeMedia = () => {
    mediaCloseTimer.current = setTimeout(() => setMediaOpen(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "backdrop-blur bg-background/90 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/all_company/JGC.png"
            alt="Jigisha Group of Companies"
            className="h-7 lg:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {NAV_LEFT.map((n) => 
            n.external ? (
              <a
                key={n.to}
                href={n.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium transition-colors text-foreground/80 hover:text-accent"
              >
                {n.label}
              </a>
            ) : (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `text-[13px] font-medium transition-colors ${isActive ? "text-accent" : "text-foreground/80 hover:text-accent"}`
                }
              >
                {n.label}
              </NavLink>
            )
          )}

          {/* International Business Dropdown */}
          <div
            className="relative"
            onMouseEnter={openIB}
            onMouseLeave={closeIB}
          >
            <button
              className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                ibOpen ? "text-accent" : "text-foreground/80 hover:text-accent"
              }`}
            >
              International
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${ibOpen ? "rotate-180" : ""}`} />
            </button>

            {ibOpen && (
              <div
                className="absolute top-full left-0 pt-3 z-50"
                onMouseEnter={openIB}
                onMouseLeave={closeIB}
              >
                <div className="bg-[#1c2c3e] text-white border border-[#2a3f54] shadow-2xl min-w-[200px]">
                  {/* Pillars */}
                  {IB_NAV.pillars.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIbOpen(false)}
                      className="flex items-center px-5 py-3.5 text-[14px] font-semibold border-b border-[#2a3f54] hover:bg-[#162333] hover:text-[#00aeef] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Business Venture with nested submenu */}
                  <div
                    className="relative"
                    onMouseEnter={openVenture}
                    onMouseLeave={closeVenture}
                  >
                    <div
                      className={`flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold cursor-pointer transition-colors ${
                        ventureOpen ? "bg-[#162333] text-[#00aeef]" : "hover:bg-[#162333] hover:text-[#00aeef]"
                      }`}
                    >
                      <span>Business Venture</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>

                    {ventureOpen && (
                      <div
                        className="absolute left-full top-0 bg-[#1c2c3e] text-white border border-[#2a3f54] shadow-2xl min-w-[200px]"
                        onMouseEnter={openVenture}
                        onMouseLeave={closeVenture}
                      >
                        {IB_NAV.ventures.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => { setIbOpen(false); setVentureOpen(false); }}
                            className="flex items-center px-5 py-3.5 text-[14px] font-semibold border-b border-[#2a3f54] last:border-b-0 hover:bg-[#162333] hover:text-[#00aeef] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                servicesOpen ? "text-accent" : "text-foreground/80 hover:text-accent"
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 pt-3 z-50"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <div className="bg-[#1c2c3e] text-white border border-[#2a3f54] shadow-2xl min-w-[220px]">
                  {SERVICES_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center px-5 py-3.5 text-[14px] font-semibold border-b border-[#2a3f54] last:border-b-0 hover:bg-[#162333] hover:text-[#00aeef] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Finance Link */}
          <NavLink
            to="/finance"
            className={({ isActive }) =>
              `flex items-center gap-1 text-[13px] font-medium transition-colors ${isActive ? "text-accent" : "text-foreground/80 hover:text-accent"}`
            }
          >
            Finance
          </NavLink>

          {/* Media Dropdown */}
          <div
            className="relative"
            onMouseEnter={openMedia}
            onMouseLeave={closeMedia}
          >
            <button
              className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                mediaOpen ? "text-accent" : "text-foreground/80 hover:text-accent"
              }`}
            >
              Media
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mediaOpen ? "rotate-180" : ""}`} />
            </button>

            {mediaOpen && (
              <div
                className="absolute top-full left-0 pt-3 z-50"
                onMouseEnter={openMedia}
                onMouseLeave={closeMedia}
              >
                <div className="bg-[#1c2c3e] text-white border border-[#2a3f54] shadow-2xl min-w-[200px]">
                  {MEDIA_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMediaOpen(false)}
                      className="flex items-center px-5 py-3.5 text-[14px] font-semibold border-b border-[#2a3f54] last:border-b-0 hover:bg-[#162333] hover:text-[#00aeef] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_RIGHT.map((n) => 
            n.external ? (
              <a
                key={n.to}
                href={n.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium transition-colors text-foreground/80 hover:text-accent"
              >
                {n.label}
              </a>
            ) : (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-[13px] font-medium transition-colors ${isActive ? "text-accent" : "text-foreground/80 hover:text-accent"}`
                }
              >
                {n.label}
              </NavLink>
            )
          )}
        </nav>

        <Link
          to="/get-quote"
          className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-[12px] mono tracking-widest uppercase hover:bg-accent transition-colors"
        >
          Get a Quote <span aria-hidden>→</span>
        </Link>

        {/* Mobile Actions */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            aria-label="Menu"
            className="p-2 text-foreground/80 hover:text-accent transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Full Screen Cinematic Overlay */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-[64px] z-[100] bg-background/98 backdrop-blur-xl overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="px-6 py-10 flex flex-col gap-0 min-h-[calc(100vh-64px)]">
            <div className="mono text-[10px] tracking-[0.4em] uppercase text-accent mb-6">Navigation_Desk</div>
            {NAV_LEFT.map((n) => 
              n.external ? (
                <a
                  key={n.to}
                  href={n.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-4 border-b border-border/60 font-display text-2xl flex items-center justify-between group"
                >
                  {n.label}
                  <ChevronRight className="h-5 w-5 text-accent opacity-40 group-hover:opacity-100 transition-all" />
                </a>
              ) : (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-4 border-b border-border/60 font-display text-2xl flex items-center justify-between group ${isActive ? "text-accent" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {n.label}
                      <ChevronRight className={`h-5 w-5 transition-all ${isActive ? "text-accent opacity-100" : "text-accent opacity-40 group-hover:opacity-100"}`} />
                    </>
                  )}
                </NavLink>
              )
            )}

            {/* International Business accordion */}
            <div className="border-b border-border/60">
              <button
                className="w-full flex items-center justify-between py-4 font-display text-2xl text-left"
                onClick={() => setMobileIBOpen((o) => !o)}
              >
                International
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileIBOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileIBOpen && (
                <div className="pb-3 pl-4 space-y-0 bg-secondary/30">
                  {/* Pillars */}
                  <div className="mono text-[12px] tracking-widest uppercase text-muted-foreground py-2 pl-2">Pillars</div>
                  {IB_NAV.pillars.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2 pl-2 text-base font-medium border-b border-border/30 hover:text-accent transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      {item.label}
                    </Link>
                  ))}

                  {/* Ventures */}
                  <button
                    className="w-full flex items-center justify-between py-2 pl-2 text-base font-medium mt-1"
                    onClick={() => setMobileVentureOpen((o) => !o)}
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      Business Venture
                    </span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileVentureOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileVentureOpen && (
                    <div className="pl-6 space-y-0 bg-secondary/50">
                      {IB_NAV.ventures.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-2 text-sm border-b border-border/20 hover:text-accent transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Services accordion */}
            <div className="border-b border-border/60">
              <button
                className="w-full flex items-center justify-between py-4 font-display text-2xl text-left"
                onClick={() => setMobileServicesOpen((o) => !o)}
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pb-3 pl-4 space-y-0 bg-secondary/30">
                  {SERVICES_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2 pl-2 text-base font-medium border-b border-border/30 hover:text-accent transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Finance Link */}
            <NavLink
              to="/finance"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-3.5 border-b border-border/60 font-display text-xl ${isActive ? "text-accent" : ""}`
              }
            >
              Finance
            </NavLink>

            {/* Media accordion */}
            <div className="border-b border-border/60">
              <button
                className="w-full flex items-center justify-between py-4 font-display text-2xl text-left"
                onClick={() => setMobileMediaOpen((o) => !o)}
              >
                Media
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileMediaOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileMediaOpen && (
                <div className="pb-3 pl-4 space-y-0 bg-secondary/30">
                  {MEDIA_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2 pl-2 text-base font-medium border-b border-border/30 hover:text-accent transition-colors"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_RIGHT.map((n) => 
              n.external ? (
                <a
                  key={n.to}
                  href={n.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="py-4 border-b border-border/60 font-display text-2xl flex items-center justify-between group"
                >
                  {n.label}
                  <ChevronRight className="h-5 w-5 text-accent opacity-40 group-hover:opacity-100 transition-all" />
                </a>
              ) : (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-4 border-b border-border/60 font-display text-2xl flex items-center justify-between group ${isActive ? "text-accent" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {n.label}
                      <ChevronRight className={`h-5 w-5 transition-all ${isActive ? "text-accent opacity-100" : "text-accent opacity-40 group-hover:opacity-100"}`} />
                    </>
                  )}
                </NavLink>
              )
            )}

            {/* Mobile Footer Area */}
            <div className="mt-auto pt-16 pb-10">
              <div className="flex flex-col gap-6">
                <Link
                  to="/get-quote"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground font-display text-xl tracking-wide uppercase hover:bg-accent transition-all"
                >
                  Get a Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="flex items-center justify-between border-t border-border/60 pt-6">
                  <div className="flex flex-col gap-1">
                    <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">Support_Desk</span>
                    <a href="mailto:info@jigisha.in" className="text-sm font-semibold text-accent">info@jigisha.in</a>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">Live_Status</span>
                    <span className="text-sm font-semibold flex items-center justify-end gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
