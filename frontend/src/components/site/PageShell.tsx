import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  intro,
  meta,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  intro?: string;
  meta?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-blueprint opacity-50" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 lg:pt-36 pb-20 lg:pb-28">
        {/* <div className="eyebrow">{eyebrow}</div> */}
        <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.92] max-w-5xl">
          {title}
          {italic && <span className="italic text-accent"> {italic}</span>}
        </h1>
        {intro && (
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
        )}
        {meta && (
          <div className="mt-14 mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground border-t border-border pt-4 max-w-md">
            {meta}
          </div>
        )}
      </div>
    </section>
  );
}