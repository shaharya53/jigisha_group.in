import { CTASection } from "@/components/site/CTASection";
import { PageShell, PageHero } from "@/components/site/PageShell";

const STREAMS = [
  ["Engineering", "Mechanical · Electrical · Civil · Automation"],
  ["Operations", "Manufacturing · Plant · Maintenance · QA"],
  ["Service Delivery", "Field engineers · AMC teams · RRT crews"],
  ["Finance", "Treasury · Credit · Compliance · Audit"],
  ["Technology", "ERP · BI · Software · IoT · Cybersecurity"],
  ["Corporate", "HR · Legal · Procurement · Strategy"],
];

const LOCATIONS = {
  india: ["Bhopal (HQ)", "Delhi NCR", "Mumbai", "Chennai", "Hyderabad", "Kolkata", "Pune", "Vadodara", "Ranchi", "Bhilai", "Coimbatore"],
  global: ["USA", "UK", "Australia", "Canada", "UAE"],
};

export default function Career() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Career / Section 06"
        title="Build the future of"
        italic="industrial India."
        intro="Jigisha is not just a company — it is a rapidly growing industrial ecosystem driven by technology, service excellence, national mission alignment and human potential."
        meta="6 Streams · 16+ Locations · India & International"
      />

      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-36">
          <div className="font-display text-4xl lg:text-7xl leading-[1.05] max-w-5xl">
            <span className="text-accent">"</span>At Jigisha, we are not just offering you a job — we are giving you a <span className="italic">mission</span>. Join us if you believe in building a new India powered by industrial innovation.<span className="text-accent">"</span>
          </div>
          <div className="mt-12 mono text-[11px] tracking-[0.25em] uppercase text-primary-foreground/60">
            — Founder, Jigisha Enterprises
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
          <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[0.95]">Six paths in.</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {STREAMS.map(([t, d], i) => (
              <div key={t} className="bg-background p-10 group hover:bg-accent hover:text-accent-foreground transition-colors">
                <div className="mono text-xs">STREAM {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-3xl mt-3">{t}</h3>
                <p className="mt-5 text-sm text-muted-foreground group-hover:text-accent-foreground/80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[0.95]">
              Compensation,<br />culture &<br /><span className="italic text-accent">consequence.</span>
            </h2>
          </div>
          <ul className="lg:col-span-7 space-y-8">
            {[
              ["Quarterly Appraisal", "Performance reviewed and rewarded every quarter."],
              ["Site & Travel Allowance", "Field engineers and crews supported on-site."],
              ["Performance Bonuses", "Outcome-linked variable pay across streams."],
              ["Employee Equity", "Long-term wealth alignment with the group."],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-12 gap-4 border-b border-border pb-7">
                <div className="col-span-1 mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-11">
                  <div className="font-display text-2xl">{t}</div>
                  <p className="mt-2 text-muted-foreground text-sm">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
          <h2 className="font-display text-4xl lg:text-6xl mt-6 leading-[0.95]">An atlas of opportunity.</h2>
          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground mb-5">India · {LOCATIONS.india.length} cities</div>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.india.map((c) => (
                  <span key={c} className="border border-border px-4 py-2 font-display text-lg hover:border-accent hover:text-accent transition-colors">{c}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="mono text-[11px] tracking-widest uppercase text-accent mb-5">International</div>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.global.map((c) => (
                  <span key={c} className="border-2 border-accent px-4 py-2 font-display text-lg text-accent">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
          <CTASection />
    </PageShell>
  );
}
