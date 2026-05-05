import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { CTASection } from "@/components/site/CTASection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow=""
        title="Let's build"
        italic="something durable."
        intro="Whether it's a railway production unit, a metro depot, an industrial AMC or a financing partnership — start the conversation here."
        meta="Response within 1 business day · info@jigisha.in"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-5 space-y-12">
            <div>
              <p className="font-display text-2xl mt-5 leading-snug">
                I-Square Corporate Park,<br />Ahmedabad, Gujarat<br />India
              </p>
            </div>
            <div>
              <p className="font-display text-2xl mt-5 leading-snug">
                Bhopal,<br />Madhya Pradesh
              </p>
            </div>
            <div>
              <ul className="mt-5 space-y-3 text-lg">
                <li><a href="mailto:info@jigisha.in" className="border-b border-border hover:border-accent hover:text-accent">info@jigisha.in</a></li>
                <li><a href="https://www.jigisha.in" className="border-b border-border hover:border-accent hover:text-accent">www.jigisha.in</a></li>
              </ul>
            </div>
            <div className="bg-secondary/50 border border-border p-6">
              <div className="mono text-[11px] tracking-widest uppercase text-muted-foreground">Network</div>
              <p className="font-display text-3xl mt-2 leading-tight">
                <AnimatedStat value="2,000+" className="text-accent" /> service nodes across India.
              </p>
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="lg:col-span-7 border border-border bg-card p-8 lg:p-12 relative"
          >
            <div className="absolute top-0 left-0 mono text-[12px] tracking-widest uppercase text-accent border-r border-b border-border px-3 py-1">FORM · 01</div>

            {submitted ? (
              <div className="py-20 text-center">
                <div className="eyebrow justify-center">Received</div>
                <h3 className="font-display text-4xl mt-6">Thank you.</h3>
                <p className="mt-4 text-muted-foreground">A team member will respond within one business day.</p>
              </div>
            ) : (
              <div className="space-y-7 mt-6">
                <h2 className="font-display text-3xl">Start a conversation.</h2>

                <Field label="Full name" name="name" required />
                <div className="grid sm:grid-cols-2 gap-7">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Organisation" name="org" />
                </div>
                <SelectField label="I'm interested in" name="topic" options={[
                  "Railway / Metro Services",
                  "Industrial Services & AMC",
                  "International Business",
                  "Finance & Credit",
                  "Career",
                  "Media & Press",
                ]} />
                <Field label="Message" name="message" textarea required />

                <button type="submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 mono text-xs tracking-[0.25em] uppercase hover:bg-accent transition-colors">
                  Send Message <span aria-hidden>→</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}

function Field({ label, name, type = "text", textarea, required }: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  return (
    <label className="block group">
      <div className="mono text-[12px] tracking-[0.25em] uppercase text-muted-foreground mb-2 group-focus-within:text-accent">{label}{required && " *"}</div>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 font-display text-xl resize-none" />
      ) : (
        <input name={name} type={type} required={required} className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 font-display text-xl" />
      )}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <div className="mono text-[12px] tracking-[0.25em] uppercase text-muted-foreground mb-2">{label}</div>
      <select name={name} className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-2 font-display text-xl">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
