import { Link } from "react-router-dom";

const ALL_LOGOS = [
  "AGRO","AUTOMOBILES","DEFENSE","ENGINEERING","ENVIROCARE",
  "GO GLOBAL","GREEN","INDUSTRIES","INFIN","INFOTECH","INFRA",
  "INTERNATIONAL","JE","JEEPL","JGC","JISPL","JIU",
  "LOGISTICS","MEDIA","PHARMA","RAILTECH","RETAIL","TECHNOLOGIES",
];

export function Footer() {
  const row = [...ALL_LOGOS, ...ALL_LOGOS];

  return (
    <footer className="bg-foreground text-primary-foreground">

      {/* ── Main footer content ── */}
      <div className="mx-auto max-w-350 px-6 lg:px-10 pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <img
              src="/images/all_company/JGC.png"
              alt="Jigisha Group of Companies"
              className="h-12 w-auto object-contain mb-6"
            />
            <h3 className="font-display text-4xl lg:text-6xl leading-[0.95]">
              Built in India.<br />
              <span className="italic text-accent">Engineered for the world.</span>
            </h3>
            <p className="mt-8 text-primary-foreground/70 max-w-md text-sm leading-relaxed">
              23 entities. 72 verticals. Pan-India footprint with a global
              mandate — orchestrating design-to-delivery outcomes across
              industry, mobility and infrastructure.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-10 text-sm">
            <div>
              <div className="mono text-[12px] tracking-[0.25em] text-accent uppercase">Explore</div>
              <ul className="mt-5 space-y-3">
                {[
                  ["/about", "About"],
                  ["/services", "Services"],
                  ["/international-business", "International"],
                  ["/finance", "Finance"],
                ].map(([h, l]) => (
                  <li key={h}>
                    <Link to={h} className="hover:text-accent transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mono text-[12px] tracking-[0.25em] text-accent uppercase">Engage</div>
              <ul className="mt-5 space-y-3">
                {[
                  ["/career", "Careers"],
                  ["/media", "Media"],
                  ["/contact", "Contact"],
                ].map(([h, l]) => (
                  <li key={h}>
                    <Link to={h} className="hover:text-accent transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mono text-[12px] tracking-[0.25em] text-accent uppercase">Headquarters</div>
              <address className="not-italic mt-5 space-y-2 text-primary-foreground/80">
                <p>I-Square Corporate Park,<br />Ahmedabad, Gujarat</p>
                <p>Registered Office: Bhopal, MP</p>
                <p className="pt-2"><a href="mailto:info@jigisha.in" className="hover:text-accent">info@jigisha.in</a></p>
                <p><a href="https://www.jigisha.in" className="hover:text-accent">www.jigisha.in</a></p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] mono tracking-widest text-primary-foreground/50 uppercase">
          <div>© {new Date().getFullYear()} Jigisha Group of Companies</div>
          <div>JIGISHA-WEB-DPR-2026-001 · v1.0</div>
        </div>
      </div>
    </footer>
  );
}
