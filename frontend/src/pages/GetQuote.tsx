import { useState, useEffect, useRef, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CheckCircle, ChevronDown, Clock, Loader2, Mail, MapPin, Paperclip, Phone, RefreshCw, Shield, Truck, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { servicesData } from "@/data/servicesData";
import { productsData } from "@/data/productsData";

/* ── Static data ───────────────────────────────────────────────────────── */

const SERVICE_NAMES = servicesData.map((s) => s.title);
const PRODUCT_NAMES = productsData.map((p) => p.title);

const ORDER_SCALES = [
  "Sample / Prototype Order",
  "Small Order (1–50 units / <₹5L)",
  "Medium Order (50–500 units / ₹5L–₹50L)",
  "Large Order (500+ units / ₹50L–₹5Cr)",
  "Bulk / Enterprise (₹5Cr+)",
  "Annual Rate Contract",
  "To be discussed",
];

const BUDGET_RANGES = [
  "Under ₹5 Lakhs",
  "₹5L – ₹25L",
  "₹25L – ₹1 Crore",
  "₹1Cr – ₹5Cr",
  "₹5Cr+",
  "To be discussed",
];

const TIMELINE_OPTIONS = [
  "Urgent (within 2 weeks)",
  "Standard (1–2 months)",
  "Flexible (3+ months)",
  "Recurring / Rate Contract",
];

const DESIGNATIONS = [
  "CEO / MD / Director",
  "General Manager",
  "DGM / AGM",
  "Project Manager",
  "Procurement Officer",
  "Government / PSU Official",
  "Railway Official",
  "Defence / Armed Forces",
  "Engineer / Technical Lead",
  "Vendor / Supplier",
  "Other",
];

const COUNTRIES = [
  "India", "United Arab Emirates", "Saudi Arabia", "Qatar", "Bahrain",
  "Oman", "Kuwait", "United States", "United Kingdom", "Germany",
  "Singapore", "Malaysia", "Kenya", "South Africa", "Nigeria",
  "Bangladesh", "Nepal", "Sri Lanka", "Australia", "Canada", "Other",
];

const BENEFITS = [
  { Icon: Clock,     title: "24-Hour Response",   desc: "Dedicated team reviews and responds to every quote request within one business day." },
  { Icon: RefreshCw, title: "Zero Commitment",     desc: "Receive detailed pricing with no obligation. Compare before you decide." },
  { Icon: Shield,    title: "Fully Confidential",  desc: "Your procurement requirements are treated with strict NDA-level confidentiality." },
  { Icon: Truck,     title: "PAN-India Delivery",  desc: "Warehousing and logistics across all 17 railway zones and major industrial hubs." },
];

const WHY_JIGISHA = [
  "RDSO-approved vendor base with full item approvals",
  "GeM & IREPS empanelled for government procurement",
  "ISO 9001 / 14001 / 45001 certified processes",
  "3M+ product SKUs under single-window supply",
  "On-time delivery with real-time order tracking",
  "AMC and post-supply support contracts available",
];

/* ── Types ─────────────────────────────────────────────────────────────── */

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  country: string;
  pincode: string;
  city: string;
  state: string;
  quoteType: "service" | "product" | "";
  serviceCategory: string;
  productCategory: string;
  productItem: string;
  orderScale: string;
  budget: string;
  timeline: string;
  details: string;
  acceptPrivacy: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  fullName: "", email: "", phone: "", company: "", designation: "",
  country: "", pincode: "", city: "", state: "",
  quoteType: "", serviceCategory: "", productCategory: "",
  productItem: "", orderScale: "", budget: "", timeline: "", details: "",
  acceptPrivacy: false,
};

/* ── Validation ────────────────────────────────────────────────────────── */

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (!v.fullName.trim())                                          e.fullName = "Full name is required.";
  if (!v.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "A valid email address is required.";
  if (!/^\d{10}$/.test(v.phone))                                   e.phone = "Enter a valid 10-digit mobile number.";
  if (!v.company.trim())                                           e.company = "Company / organisation name is required.";
  if (!v.country)                                                  e.country = "Please select your country.";
  if (!v.quoteType)                                                e.quoteType = "Please select Service or Product.";
  if (v.quoteType === "service" && !v.serviceCategory)            e.serviceCategory = "Please select a service.";
  if (v.quoteType === "product" && !v.productCategory)            e.productCategory = "Please select a product category.";
  if (!v.orderScale)                                               e.orderScale = "Please select an order scale.";
  if (v.details.trim().length < 20)                               e.details = "Please provide at least 20 characters.";
  if (!v.acceptPrivacy)                                            e.acceptPrivacy = "You must accept the privacy policy.";
  return e;
}

/* ── Toast ─────────────────────────────────────────────────────────────── */

interface Toast { id: number; msg: string; type: "success" | "error" }

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show = (msg: string, type: Toast["type"]) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4500);
  };
  return { toasts, success: (m: string) => show(m, "success"), error: (m: string) => show(m, "error") };
}

/* ── Field helper ──────────────────────────────────────────────────────── */

const inputCls =
  "w-full h-11 px-4 rounded-xl border border-input bg-background text-sm text-foreground " +
  "placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent " +
  "hover:border-gold/40 transition-colors";

const selectCls =
  "w-full h-11 px-4 pr-10 rounded-xl border border-input bg-background text-sm text-foreground appearance-none cursor-pointer " +
  "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent hover:border-gold/40 transition-colors";

function Field({
  label, required, error, children,
}: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 min-w-0">
      <label className="text-xs font-bold text-foreground/80 tracking-wide">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1">
          <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-black shrink-0">!</span>
          {error}
        </span>
      )}
    </div>
  );
}

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
    </div>
  );
}

/* ── Section title ─────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
      <span className="w-1 h-3.5 rounded-full bg-linear-to-b from-blue-500/60 to-blue-600 shrink-0" />
      <span className="text-[11px] font-extrabold text-blue-600 tracking-[0.18em] uppercase">{children}</span>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function GetQuotePage() {
  const { toasts, success, error: toastError } = useToast();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [attachError, setAttachError] = useState<string | null>(null);
  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "loading" | "found" | "error">("idle");
  const pincodeAbort = useRef<AbortController | null>(null);

  /* Pre-fill from URL search params */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const product = params.get("product");
    const item = params.get("item");
    if (service) {
      setValues((v) => ({ ...v, quoteType: "service", serviceCategory: service }));
    } else if (product) {
      setValues((v) => ({ ...v, quoteType: "product", productCategory: product, productItem: item ?? "" }));
    }
  }, []);

  /* Pincode lookup */
  useEffect(() => {
    if (values.pincode.length < 6) {
      setPincodeStatus(values.pincode.length === 0 ? "idle" : "idle");
      return;
    }
    pincodeAbort.current?.abort();
    const ctrl = new AbortController();
    pincodeAbort.current = ctrl;
    setPincodeStatus("loading");
    setValues((v) => ({ ...v, city: "", state: "", country: "" }));

    fetch(`https://api.postalpincode.in/pincode/${values.pincode}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((data) => {
        const po = data?.[0]?.PostOffice?.[0];
        if (data?.[0]?.Status === "Success" && po) {
          setValues((v) => ({
            ...v,
            city: po.District ?? "",
            state: po.State ?? "",
            country: po.Country ?? "India",
          }));
          setPincodeStatus("found");
        } else {
          setPincodeStatus("error");
        }
      })
      .catch((err) => { if (err.name !== "AbortError") setPincodeStatus("error"); });

    return () => ctrl.abort();
  }, [values.pincode]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    let next: string | boolean = type === "checkbox" ? target.checked : value;

    if (name === "phone" && typeof next === "string") {
      next = next.replace(/\D/g, "").slice(0, 10);
    }
    if (name === "pincode" && typeof next === "string") {
      next = next.replace(/\D/g, "").slice(0, 6);
      if ((next as string).length < 6) setPincodeStatus("idle");
    }

    if (name === "quoteType") {
      setValues((v) => ({ ...v, quoteType: next as "service" | "product" | "", serviceCategory: "", productCategory: "", productItem: "" }));
    } else if (name === "productCategory") {
      setValues((v) => ({ ...v, productCategory: next as string, productItem: "" }));
    } else {
      setValues((v) => ({ ...v, [name]: next }));
    }

    if (errors[name as keyof FormValues]) {
      setErrors((errs) => { const c = { ...errs }; delete c[name as keyof FormValues]; return c; });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      setSending(true);
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        let key = k;
        if (k === "pincode") key = "pinCode";
        if (k === "orderScale") key = "projectScale";
        if (k === "productItem") key = "product";
        fd.append(key, String(v));
      });
      if (attachment) fd.append("attachment", attachment);

      const apiBase = (import.meta as any).env?.VITE_API_URL || "";
      const res = await fetch(`${apiBase}/api/quote`, { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        if (Array.isArray(data?.errors)) {
          const serverErrs: FormErrors = {};
          for (const err of data.errors) {
            let field = err.field;
            if (field === "pinCode") field = "pincode";
            if (field === "projectScale") field = "orderScale";
            if (field === "product") field = "productItem";
            if (field) serverErrs[field as keyof FormValues] = err.message;
          }
          setErrors(serverErrs);
        }
        toastError(data?.error || "Could not submit your request. Please try again.");
        return;
      }

      success("Quote request submitted! Our team will contact you within 24 hours.");
      setSubmitted(true);
      setAttachment(null);
      setTimeout(() => { setSubmitted(false); setValues(EMPTY); }, 6000);
    } catch {
      toastError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageShell>
      {/* ── TOASTS ─────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-2.5 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white shadow-xl pointer-events-auto
              ${t.type === "success" ? "bg-green-700" : "bg-red-700"}`}
          >
            <CheckCircle className="w-4 h-4 shrink-0" /> {t.msg}
          </div>
        ))}
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative bg-[#0a192f] overflow-hidden py-20 lg:py-40">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-blue-500/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-100 h-100 rounded-full bg-blue-500/3 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-blue-500 text-[11px] font-bold tracking-[0.22em] uppercase mb-4">Request Pricing</p>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight mb-5">
            Get a Quote
          </h1>
          <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl">
            Competitive pricing for industrial procurement, railway services, defence supply,
            green energy and more — tailored to your project or order requirements.
          </p>
        </div>
      </section>

      {/* ── BENEFIT BADGES ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          {BENEFITS.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className={`flex items-start gap-3.5 p-5 hover:bg-blue-500/3 transition-colors
                ${i % 2 === 0 ? "border-r border-border" : "sm:border-r sm:border-border"}
                ${i < 2 ? "border-b border-border" : "md:border-b-0"}
                ${i === 2 ? "border-b md:border-b-0" : ""}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#0a192f] flex items-center justify-center shrink-0 shadow-sm">
                <Icon className="w-4.5 h-4.5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-foreground mb-0.5">{title}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────────── */}
      <section className="py-10 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">

            {/* ── FORM ─────────────────────────────────────────── */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-1.5">Fill In Your Requirements</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                Please complete the form below so we can tailor a quote to your specific industrial procurement or service needs.
              </p>

              {submitted ? (
                <div className="bg-card rounded-2xl border border-border shadow-sm p-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2">Quote Request Submitted!</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Thank you — our procurement team will review your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="bg-card rounded-2xl border border-border shadow-sm p-6 lg:p-10">
                  <form onSubmit={handleSubmit} noValidate>

                    {/* ── 1. Contact Information ─────────────── */}
                    <div className="mb-8">
                      <SectionLabel>Contact Information</SectionLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Full Name" required error={errors.fullName}>
                          <input className={inputCls} name="fullName" value={values.fullName}
                            onChange={handleChange} placeholder="Your full name" />
                        </Field>
                        <Field label="Business Email" required error={errors.email}>
                          <input className={inputCls} type="email" name="email" value={values.email}
                            onChange={handleChange} placeholder="you@company.com" />
                        </Field>
                        <Field label="Phone Number" required error={errors.phone}>
                          <input
                            className={inputCls}
                            type="tel"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                              if (["Backspace","Delete","ArrowLeft","ArrowRight","Tab","Home","End"].includes(e.key)) return;
                              if (!/^\d$/.test(e.key)) e.preventDefault();
                            }}
                            inputMode="numeric"
                            maxLength={10}
                            placeholder="10-digit mobile number"
                          />
                        </Field>
                        <Field label="Company / Organisation" required error={errors.company}>
                          <input className={inputCls} name="company" value={values.company}
                            onChange={handleChange} placeholder="Your company name" />
                        </Field>
                        <Field label="Designation / Role">
                          <SelectWrapper>
                            <select className={selectCls} name="designation" value={values.designation} onChange={handleChange}>
                              <option value="">Select your role</option>
                              {DESIGNATIONS.map((d) => <option key={d}>{d}</option>)}
                            </select>
                          </SelectWrapper>
                        </Field>

                        {/* Pincode lookup */}
                        <Field label="PIN Code" error={pincodeStatus === "error" ? "Pincode not found. Please check and retry." : undefined}>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                            <input
                              className={`${inputCls} pl-9 pr-10`}
                              name="pincode"
                              value={values.pincode}
                              onChange={handleChange}
                              onKeyDown={(e) => {
                                if (["Backspace","Delete","ArrowLeft","ArrowRight","Tab","Home","End"].includes(e.key)) return;
                                if (!/^\d$/.test(e.key)) e.preventDefault();
                              }}
                              inputMode="numeric"
                              maxLength={6}
                              placeholder="6-digit PIN code"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              {pincodeStatus === "loading" && <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />}
                              {pincodeStatus === "found"   && <CheckCircle className="w-4 h-4 text-green-500" />}
                              {pincodeStatus === "error"   && <X className="w-4 h-4 text-red-500" />}
                            </div>
                          </div>
                        </Field>

                        {/* City — auto-filled by pincode API */}
                        <Field label="City / District">
                          <input
                            className={`${inputCls} ${values.city ? "border-green-400/50 bg-green-50/30" : ""}`}
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            placeholder={pincodeStatus === "loading" ? "Fetching…" : "Auto-filled from PIN or enter manually"}
                          />
                        </Field>

                        {/* State — auto-filled by pincode API */}
                        <Field label="State">
                          <input
                            className={`${inputCls} ${values.state ? "border-green-400/50 bg-green-50/30" : ""}`}
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            placeholder={pincodeStatus === "loading" ? "Fetching…" : "Auto-filled from PIN or enter manually"}
                          />
                        </Field>

                        {/* Country — auto-filled by pincode API, below PIN */}
                        <Field label="Country" required error={errors.country}>
                          <SelectWrapper>
                            <select
                              className={`${selectCls} ${values.country ? "border-green-400/50" : ""}`}
                              name="country"
                              value={values.country}
                              onChange={handleChange}
                            >
                              <option value="">Select country</option>
                              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                            </select>
                          </SelectWrapper>
                        </Field>
                      </div>
                    </div>

                    {/* ── 2. Procurement Details ──────────────── */}
                    <div className="mb-8">
                      <SectionLabel>Procurement Details</SectionLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Quote type radio */}
                        <div className="sm:col-span-2 flex flex-col gap-1.5">
                          <span className="text-xs font-bold text-foreground/80 tracking-wide">
                            Request Type <span className="text-red-500">*</span>
                          </span>
                          <div className="flex flex-wrap gap-4 mt-0.5">
                            {(["service", "product"] as const).map((type) => (
                              <label
                                key={type}
                                className={`flex items-center gap-2.5 cursor-pointer px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200
                                  ${values.quoteType === type
                                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                    : "bg-card text-muted-foreground border-border hover:border-blue-500/30"}`}
                              >
                                <input
                                  type="radio"
                                  name="quoteType"
                                  value={type}
                                  checked={values.quoteType === type}
                                  onChange={handleChange}
                                  className="accent-blue-500 w-4 h-4"
                                />
                                {type === "service" ? "Service" : "Product / Material"}
                              </label>
                            ))}
                          </div>
                          {errors.quoteType && (
                            <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1 mt-0.5">
                              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-black shrink-0">!</span>
                              {errors.quoteType}
                            </span>
                          )}
                        </div>

                        {/* Service category */}
                        {values.quoteType === "service" && (
                          <Field label="Service" required error={errors.serviceCategory}>
                            <SelectWrapper>
                              <select className={selectCls} name="serviceCategory" value={values.serviceCategory} onChange={handleChange}>
                                <option value="">Select a service</option>
                                {SERVICE_NAMES.map((s) => <option key={s}>{s}</option>)}
                              </select>
                            </SelectWrapper>
                          </Field>
                        )}

                        {/* Product category */}
                        {values.quoteType === "product" && (
                          <Field label="Product Category" required error={errors.productCategory}>
                            <SelectWrapper>
                              <select className={selectCls} name="productCategory" value={values.productCategory} onChange={handleChange}>
                                <option value="">Select a product category</option>
                                {PRODUCT_NAMES.map((p) => <option key={p}>{p}</option>)}
                              </select>
                            </SelectWrapper>
                          </Field>
                        )}

                        {/* Specific product — shown once a category is selected */}
                        {values.quoteType === "product" && values.productCategory && (() => {
                          const items = productsData.find((p) => p.title === values.productCategory)?.productItems ?? [];
                          if (items.length === 0) return null;
                          return (
                            <Field label="Specific Product">
                              <SelectWrapper>
                                <select className={selectCls} name="productItem" value={values.productItem} onChange={handleChange}>
                                  <option value="">Select a specific product (optional)</option>
                                  {items.map((item) => (
                                    <option key={item.name} value={item.name}>{item.name}</option>
                                  ))}
                                </select>
                              </SelectWrapper>
                            </Field>
                          );
                        })()}

                        <Field label="Order / Project Scale" required error={errors.orderScale}>
                          <SelectWrapper>
                            <select className={selectCls} name="orderScale" value={values.orderScale} onChange={handleChange}>
                              <option value="">Select order scale</option>
                              {ORDER_SCALES.map((s) => <option key={s}>{s}</option>)}
                            </select>
                          </SelectWrapper>
                        </Field>
                        <Field label="Budget Range">
                          <SelectWrapper>
                            <select className={selectCls} name="budget" value={values.budget} onChange={handleChange}>
                              <option value="">Select budget range</option>
                              {BUDGET_RANGES.map((b) => <option key={b}>{b}</option>)}
                            </select>
                          </SelectWrapper>
                        </Field>
                        <Field label="Required Timeline">
                          <SelectWrapper>
                            <select className={selectCls} name="timeline" value={values.timeline} onChange={handleChange}>
                              <option value="">Select timeline</option>
                              {TIMELINE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                            </select>
                          </SelectWrapper>
                        </Field>
                      </div>
                    </div>

                    {/* ── 3. Requirements ─────────────────────── */}
                    <div className="mb-6">
                      <SectionLabel>Requirements &amp; Specifications</SectionLabel>

                      <Field label="Detailed Requirements" required error={errors.details}>
                        <textarea
                          className={`${inputCls} h-auto! min-h-32.5 py-3 resize-vertical leading-relaxed`}
                          name="details"
                          value={values.details}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Describe your requirements — item specifications, quantities, delivery location, compliance needs, project context… (min. 20 characters)"
                        />
                      </Field>

                      {/* Attachment */}
                      <div className="mt-4">
                        <label className="text-xs font-bold text-foreground/80 tracking-wide block mb-1.5">
                          Attachment
                          <span className="ml-1.5 text-[10px] font-normal text-muted-foreground normal-case tracking-normal">
                            optional · PDF, Word, Excel, JPG, PNG · max 2 MB
                          </span>
                        </label>
                        <label
                          className={`flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl border-2 border-dashed transition-all duration-200
                            ${attachError ? "border-red-400 bg-red-50" : attachment ? "border-green-400 bg-green-50" : "border-border bg-background hover:border-blue-500/40"}`}
                        >
                          <Paperclip className={`w-4 h-4 shrink-0 ${attachment ? "text-green-600" : "text-muted-foreground"}`} />
                          <span className={`text-sm flex-1 truncate ${attachment ? "text-green-700 font-medium" : "text-muted-foreground"}`}>
                            {attachment ? attachment.name : "Click to attach a document…"}
                          </span>
                          {attachment && (
                            <button
                              type="button"
                              onClick={(e) => { e.preventDefault(); setAttachment(null); setAttachError(null); }}
                              className="text-red-500 hover:text-red-700 font-bold text-lg leading-none"
                            >
                              ×
                            </button>
                          )}
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0] ?? null;
                              if (!file) return;
                              if (file.size > 2 * 1024 * 1024) {
                                setAttachError("File exceeds 2 MB limit."); setAttachment(null);
                              } else {
                                setAttachError(null); setAttachment(file);
                              }
                              e.target.value = "";
                            }}
                          />
                        </label>
                        {attachError && (
                          <span className="text-[11px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-black shrink-0">!</span>
                            {attachError}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ── 4. Actions ──────────────────────────── */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-border">
                      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                        <label className="flex items-start gap-2.5 cursor-pointer text-sm text-muted-foreground leading-relaxed">
                          <input
                            type="checkbox"
                            name="acceptPrivacy"
                            checked={values.acceptPrivacy}
                            onChange={handleChange}
                            className="mt-0.5 w-4 h-4 shrink-0 accent-[#0a192f] cursor-pointer"
                          />
                          <span>
                            I consent to this website storing and processing my submitted information
                            in accordance with the{" "}
                            <Link to="/contact" className="text-blue-600 underline hover:text-blue-500 transition-colors">
                              Privacy Policy
                            </Link>.
                          </span>
                        </label>
                        {errors.acceptPrivacy && (
                          <span className="text-[11px] text-red-500 font-semibold flex items-center gap-1 ml-6">
                            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-black shrink-0">!</span>
                            {errors.acceptPrivacy}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:opacity-90 active:scale-[0.98] transition-all text-sm shadow-lg shadow-blue-500/20 disabled:opacity-60 shrink-0"
                      >
                        {sending ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                        ) : (
                          <>Submit Quote Request <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}
            </div>

            {/* ── SIDEBAR ──────────────────────────────────────── */}
            <aside className="flex flex-col gap-5 lg:sticky lg:top-24">

              {/* Why Jigisha */}
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="text-base font-extrabold text-foreground mb-4">Why Choose Jigisha?</h3>
                <ul className="flex flex-col gap-3">
                  {WHY_JIGISHA.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/70 leading-snug">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="text-base font-extrabold text-foreground mb-4">Need Assistance?</h3>
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Call us directly</p>
                      <a href="tel:+919624724362" className="text-sm font-bold text-foreground hover:text-blue-500 transition-colors">
                        (+91) 9624724362
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email enquiries</p>
                      <a href="mailto:info@jigisha.in" className="text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                        info@jigisha.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Availability</p>
                      <p className="text-sm font-semibold text-foreground">24 Hours · 7 Days a Week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GeM / IREPS / B2B */}
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <h3 className="text-base font-extrabold text-foreground mb-1">
                  Government & <span className="text-blue-600">Enterprise Procurement</span>
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  For GeM, IREPS, DGS&D or large institutional orders requiring dedicated account management and custom SLAs.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="w-5 h-5 rounded-md bg-blue-600/8 text-blue-600 text-[9px] font-extrabold flex items-center justify-center shrink-0">G</span>
                    GeM-listed vendor — all departments & PSUs
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="w-5 h-5 rounded-md bg-blue-600/8 text-blue-600 text-[9px] font-extrabold flex items-center justify-center shrink-0">IR</span>
                    IREPS empanelled — all 17 railway zones
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="w-5 h-5 rounded-md bg-blue-600/8 text-blue-600 text-[9px] font-extrabold flex items-center justify-center shrink-0">B2</span>
                    Direct B2B — BoQ, bulk pricing, rate contracts
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all text-sm shadow-md"
              >
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Link>

            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
