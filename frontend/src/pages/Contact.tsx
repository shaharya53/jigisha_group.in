import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone, Mail, MapPin, ArrowRight, ChevronDown,
  CheckCircle, ExternalLink,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { AnimatedStat } from "@/components/ui/AnimatedStat";

const ContactMap = lazy(() =>
  import("@/components/ContactMap").then(m => ({ default: m.ContactMap }))
);

/* ── Toast ── */
function useToast() {
  const [toasts, setToasts] = useState<{ id: number; msg: string; type: "success" | "error" }[]>([]);
  const show = (msg: string, type: "success" | "error") => {
    const id = Date.now();
    setToasts(t => [...t, { id, msg, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3500);
  };
  return { toasts, success: (m: string) => show(m, "success"), error: (m: string) => show(m, "error") };
}

const inquiryTypes = [
  "Product / Supply Enquiry", "Partnership / JV", "Vendor Registration",
  "Railway & Metro Solutions", "Defence & Aerospace", "Green Energy Projects",
  "Industrial Services", "Investor Relations", "Career Opportunities",
];

const faqs = [
  { q: "Where is your company located?", a: "Our national headquarters are at F 904, 10th Floor, Rachna Tower, Rachna Nagar, Bhopal, Madhya Pradesh – 462023. We also have a registered office in Ahmedabad and plants in Bhopal." },
  { q: "Can I visit your office?", a: "Yes! We welcome partners, vendors and potential clients. Business hours are 24×7 — we are available round the clock including Sundays and public holidays." },
  { q: "How do I get directions to your office?", a: "Click the blue marker on our map and select 'Open in Google Maps' for real-time turn-by-turn directions to our HQ in Bhopal." },
  { q: "What is your typical response time?", a: "We guarantee a response within 12–24 business hours. Partnership, railway, and corporate queries are typically answered even faster." },
  { q: "What is your minimum project size?", a: "We work with businesses of all scales — from small vendors seeking GeM listing to enterprise-level EPC and long-term AMC contracts across every industrial vertical." },
  { q: "Do you provide end-to-end logistics?", a: "Absolutely. Through Jigisha Logistics Pvt. Ltd. we offer multimodal freight, PAN-India warehousing, cold chain, hazardous goods transport, and fleet management." },
];

const EMPTY = {
  name: "", email: "", phone: "", company: "",
  inquiryType: "", message: "", pincode: "", city: "", state: "", country: "",
};

export default function Contact() {
  const { toasts, success, error } = useToast();
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [pinLoading, setPinLoading] = useState(false);

  const splitRef = useRef(null);
  const mapRef = useRef(null);
  const faqRef = useRef(null);
  const splitIn = useInView(splitRef, { once: true, margin: "-80px" });
  const mapIn = useInView(mapRef, { once: true, margin: "-80px" });
  const faqIn = useInView(faqRef, { once: true, margin: "-80px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  /* PIN auto-lookup */
  useEffect(() => {
    const pin = form.pincode.trim();
    if (!/^\d{5,6}$/.test(pin)) return;

    setPinLoading(true);
    const t = setTimeout(async () => {
      try {
        const country = pin.length === 6 ? "India" : "United States";
        const cc = pin.length === 6 ? "IN" : "US";

        // Nominatim (OpenStreetMap) — reliable, free
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?postalcode=${pin}&country=${cc}&format=json&limit=1&addressdetails=1`,
          { headers: { "User-Agent": "JigishaGroupWebsite/1.0" } }
        );
        const data = await res.json();

        if (data.length > 0) {
          const addr = data[0].address ?? {};
          const city =
            addr.city || addr.town || addr.village ||
            addr.state_district || addr.county || "";
          const state = addr.state || "";
          const ctry = addr.country || country;
          if (city || state) {
            setForm(p => ({ ...p, city, state, country: ctry }));
            setPinLoading(false);
            return;
          }
        }

        // Fallback: postalpincode.in for Indian PINs
        if (pin.length === 6) {
          const r2 = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
          const d2 = await r2.json();
          if (d2[0]?.Status === "Success" && d2[0].PostOffice?.[0]) {
            const po = d2[0].PostOffice[0];
            setForm(p => ({ ...p, city: po.District, state: po.State, country: "India" }));
          }
        }
      } catch { /* silent — user can fill manually */ }
      finally { setPinLoading(false); }
    }, 900);

    return () => { clearTimeout(t); setPinLoading(false); };
  }, [form.pincode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const apiBase = (import.meta as any).env?.VITE_API_URL ?? "";
      const res = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          // Optional fields the backend might ignore but are good for context
          company: form.company,
          enquiryType: form.inquiryType,
          pincode: form.pincode,
          city: form.city,
          state: form.state,
          country: form.country,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        if (Array.isArray(data?.errors)) {
          data.errors.forEach((e: { message: string }) => error(e.message));
        } else {
          error(data?.error || "Could not send your message. Please try again.");
        }
        return;
      }
      setSubmitted(true);
      success("Message sent! We will contact you soon.");
      setTimeout(() => { setSubmitted(false); setForm(EMPTY); }, 4000);
    } catch (err) {
      error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ── shared style helpers ── */
  const PRIMARY = "#2563eb";
  const BG_DARK = "#0a192f";
  const TEXT_MUTED = "#94a3b8";
  const BORDER = "rgba(255,255,255,0.1)";

  const fieldInput: React.CSSProperties = {
    width: "100%", padding: "1.125rem 1.25rem",
    background: "#f1f5f9", border: "2px solid transparent",
    borderRadius: "1rem", fontSize: "1rem", fontWeight: 600,
    color: "#0f172a", outline: "none", transition: "all 0.3s",
    boxSizing: "border-box",
  };

  return (
    <PageShell>
      <div style={{ background: "white", minHeight: "100vh" }}>

        {/* ── TOASTS ── */}
        <div style={{ position: "fixed", top: "2rem", right: "2rem", zIndex: 1000, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {toasts.map(t => (
            <motion.div key={t.id}
              initial={{ opacity: 0, y: 16, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                padding: "1rem 1.5rem", background: "white", borderRadius: "1rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)", fontSize: "0.875rem", fontWeight: 700,
                display: "flex", alignItems: "center", gap: "0.75rem",
                borderLeft: `4px solid ${t.type === "success" ? "#10b981" : "#ef4444"}`,
                color: t.type === "success" ? "#065f46" : "#991b1b",
              }}>
              {t.type === "success" && <CheckCircle size={14} />}{t.msg}
            </motion.div>
          ))}
        </div>

        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden", background: BG_DARK }} className="pt-32 pb-24 md:pt-40 md:pb-40 lg:pt-48 lg:pb-48">
          {/* BG */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <img src="/images/about_hero.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.3, filter: "grayscale(1)" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${BG_DARK} 30%, transparent 100%)` }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          </div>

          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", width: "100%", position: "relative", zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl" style={{ fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.05em", color: "white", textTransform: "uppercase", marginBottom: "2rem" }}>
                Let's Build<br />Something<br />
                <span style={{ background: "linear-gradient(to right, #3b82f6, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Great Together.
                </span>
              </h1>
              <p className="text-lg md:text-xl" style={{ fontWeight: 500, color: TEXT_MUTED, maxWidth: 500, marginBottom: "3rem", lineHeight: 1.6 }}>
                Whether you're looking to scale your industrial operations or inquire about our procurement network — our team is here to help.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <a href="mailto:info@jigisha.in"
                  style={{ padding: "1rem 2rem", background: PRIMARY, color: "white", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.75rem", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", boxShadow: "0 10px 20px -10px rgba(37,99,235,0.5)", transition: "all 0.3s" }}>
                  <Mail size={16} /> Email Us Directly
                </a>
                <a href="tel:+919824724364"
                  style={{ padding: "1rem 2rem", background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}`, color: "white", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.75rem", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", transition: "all 0.3s" }}>
                  <Phone size={16} /> Call Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(10,25,47,0.8)", backdropFilter: "blur(20px)", borderTop: `1px solid ${BORDER}`, padding: "2rem 1rem", zIndex: 20, gap: "1.5rem" }}>
            {[
              { num: "24h", label: "Response Guarantee" },
              { num: "7,500+", label: "Verified Vendors" },
              { num: "28+", label: "Industry Sectors" },
              { num: "99%", label: "Delivery Success" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                  <AnimatedStat value={s.num} className="text-white" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 900, lineHeight: 1 }} />
                </div>
                <span style={{ fontSize: "0.625rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: "#3b82f6", marginTop: "0.5rem" }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── FORM SECTION ── */}
        <section ref={splitRef} className="py-16 md:py-32" style={{ background: "#f8fbff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]" style={{ background: "white", borderRadius: "3rem", overflow: "hidden", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>

              {/* LEFT — branded panel */}
              <motion.div initial={{ opacity: 0, x: -32 }} animate={splitIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
                className="p-8 md:p-12 lg:p-20"
                style={{ background: BG_DARK, display: "flex", flexDirection: "column", justifyContent: "space-between", color: "white" }}>
                <div>
                  <span style={{ display: "inline-block", fontSize: "0.625rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", color: PRIMARY, marginBottom: "2rem" }}>
                    Connect with Experts
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                    Let's Start<br />a Partnership
                  </h2>
                  <p style={{ fontSize: "1.125rem", color: TEXT_MUTED, lineHeight: 1.6 }}>
                    Tell us about your business goals and we'll connect you with a specialist tailored to your industry.
                  </p>
                </div>

                <div style={{ margin: "4rem 0", display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {[
                    { icon: <Phone size={16} />, label: "Call Us Directly", val: "(+91) 9824724364" },
                    { icon: <Mail size={16} />, label: "Email Address", val: "info@jigisha.in" },
                    { icon: <MapPin size={16} />, label: "National Headquarters", val: "Bhopal, MP, India" },
                  ].map((c, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                      <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.05)", border: `1px solid ${BORDER}`, borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", color: PRIMARY }}>
                        {c.icon}
                      </div>
                      <div>
                        <span style={{ display: "block", fontSize: "0.625rem", fontWeight: 900, textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.25rem" }}>{c.label}</span>
                        <span style={{ fontSize: "1rem", fontWeight: 700 }}>{c.val}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontStyle: "italic", fontSize: "0.875rem", color: TEXT_MUTED }}>
                  <p>"The future of commerce belongs to those who build bridges today."</p>
                  <span style={{ display: "block", marginTop: "0.5rem", fontWeight: 800, fontStyle: "normal", color: PRIMARY }}>
                    — Jigisha Group Executive Board
                  </span>
                </div>
              </motion.div>

              {/* RIGHT — form */}
              <motion.div initial={{ opacity: 0, x: 32 }} animate={splitIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
                className="p-8 md:p-12 lg:p-20">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                    <div style={{ width: 80, height: 80, background: "#ecfdf5", color: "#10b981", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                      <CheckCircle size={36} />
                    </div>
                    <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", marginBottom: "1rem" }}>Registration Received!</h3>
                    <p style={{ color: "#64748b", fontSize: "1rem" }}>Thank you — a dedicated consultant will be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField label="Full Name" required>
                        <input style={fieldInput} type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Rahul Sharma" onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                      </FormField>
                      <FormField label="Corporate Email" required>
                        <input style={fieldInput} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="rahul@company.com" onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                      </FormField>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField label="Mobile Number">
                        <input style={fieldInput} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9824724364" onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                      </FormField>
                      <FormField label="Company / Brand Name">
                        <input style={fieldInput} type="text" name="company" value={form.company} onChange={handleChange} placeholder="Jigisha Industries Ltd" onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                      </FormField>
                    </div>
                    <FormField label="ZIP / PIN Code" hint={pinLoading ? "— looking up…" : "— auto-populates location"}>
                      <div style={{ position: "relative" }}>
                        <input style={fieldInput} type="text" name="pincode" value={form.pincode} onChange={handleChange} placeholder="e.g. 462001" maxLength={6} onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                        {pinLoading && (
                          <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)" }}>
                            <span className="inline-block w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                          </div>
                        )}
                      </div>
                    </FormField>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {(["city", "state", "country"] as const).map(f => (
                        <FormField key={f} label={f.charAt(0).toUpperCase() + f.slice(1)}>
                          <input style={fieldInput} type="text" name={f} value={form[f]} onChange={handleChange} placeholder={f.charAt(0).toUpperCase() + f.slice(1)} onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                        </FormField>
                      ))}
                    </div>
                    <FormField label="Interest Area" required>
                      <select style={{ ...fieldInput, appearance: "none" as any, cursor: "pointer" }} name="inquiryType" value={form.inquiryType} onChange={handleChange} required onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }}>
                        <option value="">Select an interest area</option>
                        {inquiryTypes.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </FormField>
                    <FormField label="Inquiry Details" required>
                      <textarea style={{ ...fieldInput, resize: "none" }} name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Briefly describe your requirements..." onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.background = "white"; }} onBlur={e => { e.target.style.borderColor = "transparent"; e.target.style.background = "#f1f5f9"; }} />
                    </FormField>
                    <button type="submit" disabled={submitting}
                      style={{ marginTop: "1rem", padding: "1.25rem", background: BG_DARK, color: "white", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", transition: "all 0.3s", cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.7 : 1, border: "none", fontSize: "0.875rem" }}>
                      {submitting
                        ? <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" /> Validating…</>
                        : <><span>Submit Inquiry</span><ArrowRight size={16} /></>
                      }
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MAP SECTION ── */}
        <section ref={mapRef} style={{ padding: "120px 0", background: "white" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={mapIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-4xl md:text-6xl" style={{ fontWeight: 900, letterSpacing: "-0.04em", color: "#0f172a" }}>
                  Global <span style={{ color: PRIMARY }}>Footprint</span>
                </h2>
                <p style={{ fontSize: "1.125rem", color: "#64748b", marginTop: "1rem", fontWeight: 500 }}>
                  Find us at our national headquarters or regional delivery centers.
                </p>
              </div>
              <a href="https://www.google.com/maps?q=23.2599,77.4126" target="_blank" rel="noopener noreferrer"
                className="w-fit"
                style={{ padding: "1rem 1.75rem", background: "#f1f5f9", color: "#0f172a", fontWeight: 800, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", transition: "all 0.3s" }}>
                <ExternalLink size={15} /> OPEN NAVIGATION
              </a>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 items-start">
              {/* LEFT — Info Cards */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={mapIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-6">
                {[
                  {
                    icon: <MapPin size={20} />,
                    title: "India HQ",
                    tag: "CORPORATE HQ",
                    details: [
                      { i: <MapPin size={14} />, text: "Bhopal, MP" },
                      { i: <Mail size={14} />, text: "india@jigisha.in" },
                      { i: <Phone size={14} />, text: "Mon–Fri, 9AM–6PM IST" },
                    ]
                  },
                  {
                    icon: <Phone size={20} />,
                    title: "Digital",
                    tag: "VIRTUAL SUPPORT",
                    details: [
                      { i: <MapPin size={14} />, text: "Across India" },
                      { i: <Mail size={14} />, text: "support@jigisha.in" },
                      { i: <Phone size={14} />, text: "24/7 Global Desk" },
                    ]
                  },
                  {
                    icon: <ArrowRight size={20} />,
                    title: "Logistics",
                    tag: "FULFILLMENT",
                    details: [
                      { i: <MapPin size={14} />, text: "Inter-state Hubs" },
                      { i: <Mail size={14} />, text: "logistics@jigisha.in" },
                      { i: <Phone size={14} />, text: "Mon–Sat Ops" },
                    ]
                  }
                ].map((card, idx) => (
                  <div key={idx} style={{ background: "white", padding: "2.5rem", borderRadius: "2.5rem", border: "1px solid #f1f5f9", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.03)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                      <div style={{ width: 48, height: 48, background: "#eff6ff", color: PRIMARY, borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {card.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>{card.title}</h3>
                          <span style={{ fontSize: "0.625rem", fontWeight: 900, background: "#f1f5f9", color: "#64748b", padding: "0.25rem 0.625rem", borderRadius: "0.5rem", letterSpacing: "0.05em" }}>
                            {card.tag}
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          {card.details.map((d, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#64748b", fontSize: "0.875rem", fontWeight: 500 }}>
                              <span style={{ color: PRIMARY, opacity: 0.6 }}>{d.i}</span>
                              {d.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* RIGHT — Map */}
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={mapIn ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
                style={{ height: "100%", minHeight: 600 }}>
                <Suspense fallback={<div style={{ minHeight: 600, background: "#f1f5f9", borderRadius: "3rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>Loading map…</div>}>
                  <ContactMap mapIn={mapIn} />
                </Suspense>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section ref={faqRef} style={{ padding: "120px 0", background: "#f8fbff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">

              {/* Left — sticky */}
              <motion.div initial={{ opacity: 0, y: 24 }} animate={faqIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
                className="lg:sticky lg:top-32 h-fit">
                <span style={{ display: "block", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", color: PRIMARY, marginBottom: "1.5rem" }}>
                  Assistance
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
                  Frequently<br /><span style={{ color: PRIMARY }}>Asked Questions</span>
                </h2>
                <p style={{ fontSize: "1.125rem", color: "#64748b", marginBottom: "3rem", maxWidth: 380 }}>
                  Need a quick answer? Check our FAQ or reach out to our helpdesk.
                </p>
                <a href="mailto:info@jigisha.in"
                  style={{ fontSize: "0.875rem", fontWeight: 800, color: "#0f172a", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Contact Support <ArrowRight size={14} />
                </a>
              </motion.div>

              {/* Right — accordion */}
              <div>
                {faqs.map((faq, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 20 }} animate={faqIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.07 }}
                    style={{ marginBottom: "1rem", background: "white", borderRadius: "1.5rem", border: "1px solid #e2e8f0", overflow: "hidden", transition: "all 0.3s" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.125rem", fontWeight: 700, textAlign: "left", color: "#0f172a", background: openFaq === i ? "#f1f5f9" : "white", border: "none", cursor: "pointer" }}>
                      <span>{faq.q}</span>
                      <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>
                    {openFaq === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.25 }}
                        style={{ padding: "0 2rem 2rem", fontSize: "1rem", lineHeight: 1.6, color: "#64748b" }}>
                        {faq.a}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageShell>
  );
}

/* ── Helper ── */
function FormField({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "#1e293b", marginBottom: "0.75rem" }}>
        {label}
        {required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
        {hint && <span style={{ textTransform: "none", fontWeight: 500, letterSpacing: 0, color: "#94a3b8", fontSize: "0.625rem", marginLeft: "0.5rem" }}>{hint}</span>}
      </label>
      {children}
    </div>
  );
}

