import type { LucideIcon } from "lucide-react";
import {
  Globe, Package, ShieldCheck, Truck,
  BarChart3, FileText, Search, Factory,
  Link2, Cpu, Users, TrendingUp,
  ShoppingCart, Warehouse, Handshake,
  Share2, Lock, Monitor, Network,
  Building2, Store, GitBranch, Activity,
  Bot, ClipboardList, ClipboardCheck,
  Workflow, Star, Receipt,
} from "lucide-react";

/* ─── PILLAR TYPES ────────────────────────────────────────────── */

export interface Offering {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface WhyPoint {
  title: string;
  desc: string;
}

export interface PillarData {
  slug: string;
  code: string;
  label: string;
  hero: { title: string; subtitle: string };
  overview: string;
  offerings: Offering[];
  process: ProcessStep[];
  industries: string[];
  whyUs: WhyPoint[];
}

/* ─── SERVICE TYPES (comprehensive) ─────────────────────────────── */

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface FeatureCategory {
  category: string;
  icon: LucideIcon;
  items: FeatureItem[];
}

export interface Module {
  title: string;
  icon: LucideIcon;
  desc: string;
  features: string[];
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  other: string[];
}

export interface ServiceData {
  slug: string;
  code: string;
  label: string;
  hero: { title: string; subtitle: string };
  overview: { body: string; dealIn: string[] };
  coreFeatures: FeatureCategory[];
  modules: Module[];
  integrations: string[];
  techStack: TechStack;
  security: string[];
  advancedFeatures: FeatureItem[];
  analytics: string[];
  benefits: FeatureItem[];
  useCases: string[];
}

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE A — PILLAR PAGES
   ═══════════════════════════════════════════════════════════════ */

export const PILLARS: PillarData[] = [
  {
    slug: "import",
    code: "IMP",
    label: "Import",
    hero: {
      title: "Global Import Solutions",
      subtitle: "Seamless sourcing and procurement of international goods with reliability, compliance, and efficiency.",
    },
    overview: "Our import division enables businesses to access global markets with ease. From sourcing high-quality products to managing logistics and compliance, we provide end-to-end import solutions tailored to industry needs — backed by Jigisha's international network across 5 global regions.",
    offerings: [
      { icon: Search, title: "Global Sourcing & Vendor Identification", desc: "Identify and qualify reliable international vendors across key manufacturing regions globally." },
      { icon: ShieldCheck, title: "Customs Clearance & Compliance", desc: "Navigate complex customs regulations with expert documentation and compliance support across all active trade lanes." },
      { icon: Truck, title: "Supply Chain Coordination", desc: "End-to-end supply chain management ensuring timely and cost-efficient delivery of goods." },
      { icon: Package, title: "Quality Assurance & Inspection", desc: "Multi-stage QA on every consignment with third-party inspection before shipment clearance." },
    ],
    process: [
      { step: "01", title: "Requirement Analysis", desc: "Understanding your sourcing needs, product specifications and target markets in detail." },
      { step: "02", title: "Vendor Sourcing", desc: "Identifying, screening and validating reliable international suppliers and manufacturers." },
      { step: "03", title: "Documentation & Compliance", desc: "Preparing all customs, legal and trade documentation for smooth clearance and regulatory compliance." },
      { step: "04", title: "Shipping & Logistics", desc: "Coordinating freight booking, marine insurance and multi-modal transportation." },
      { step: "05", title: "Delivery & Support", desc: "Last-mile delivery coordination with full post-delivery support and dispute resolution." },
    ],
    industries: ["Manufacturing", "Retail & FMCG", "Infrastructure", "Technology", "Pharmaceuticals", "Energy"],
    whyUs: [
      { title: "Strong Global Network", desc: "Established supplier and partner relationships across USA, UK, UAE, Australia and Canada." },
      { title: "Reliable Logistics Partners", desc: "Tie-ups with global freight, customs and last-mile delivery specialists for complete coverage." },
      { title: "Compliance Expertise", desc: "Deep knowledge of import regulations, tariffs and trade compliance frameworks across all active regions." },
      { title: "Cost Optimisation", desc: "Strategic sourcing to minimize landed cost while maintaining strict quality standards." },
    ],
  },
  {
    slug: "export",
    code: "EXP",
    label: "Export",
    hero: {
      title: "Expanding Your Business Globally",
      subtitle: "Export solutions designed to take your products to international markets with efficiency and scale.",
    },
    overview: "We empower businesses to expand beyond borders by providing structured export solutions, market access, and logistics support across multiple international regions. Jigisha's export division bridges Indian manufacturing excellence with global market demand.",
    offerings: [
      { icon: BarChart3, title: "Market Research & Entry Strategy", desc: "Data-driven market analysis and entry roadmaps for new international territories and buyer segments." },
      { icon: FileText, title: "Export Documentation", desc: "Complete export documentation — certificates of origin, LC handling, trade compliance and regulatory filings." },
      { icon: Globe, title: "International Logistics", desc: "Multi-modal freight solutions tailored for international cargo movement across active trade routes." },
      { icon: ShieldCheck, title: "Trade Compliance", desc: "Expert handling of export controls, sanctions screening and regulatory compliance in destination markets." },
    ],
    process: [
      { step: "01", title: "Market Identification", desc: "Researching and prioritising international markets for your product category and price point." },
      { step: "02", title: "Product Positioning", desc: "Adapting product, packaging, pricing and messaging for the target market." },
      { step: "03", title: "Documentation", desc: "Handling all export licensing, certifications and trade documentation end-to-end." },
      { step: "04", title: "Shipping", desc: "Freight booking, insurance, tracking and cargo movement to the destination port." },
      { step: "05", title: "Market Entry Support", desc: "On-ground distribution activation and partner management in the target market." },
    ],
    industries: ["Agriculture", "Industrial Goods", "Consumer Products", "Technology", "Textiles", "Engineering"],
    whyUs: [
      { title: "Global Market Expertise", desc: "Deep understanding of international trade dynamics, tariffs and market entry frameworks." },
      { title: "Strong Distribution Network", desc: "Established distribution and logistics partners across USA, UK, UAE, Australia and Canada." },
      { title: "End-to-End Support", desc: "From market research through to in-market activation — we manage the full export lifecycle." },
      { title: "Faster Time-to-Market", desc: "Leveraging existing market relationships to accelerate your international launch timeline." },
    ],
  },
  {
    slug: "icbmro",
    code: "ICB",
    label: "ICBMRO",
    hero: {
      title: "Industrial Collaboration & Business Models",
      subtitle: "Strategic partnerships and collaborative frameworks for scalable industrial growth across borders.",
    },
    overview: "ICBMRO — Integrated Cross-Border MRO — focuses on building strong industrial collaborations by connecting businesses, technologies, and markets through structured partnership models. Jigisha acts as the orchestrator of cross-border industrial relationships, delivering sustainable and scalable outcomes.",
    offerings: [
      { icon: Link2, title: "Strategic Alliances", desc: "Building long-horizon strategic alliances between industrial leaders for mutual and compounding growth." },
      { icon: Cpu, title: "Technology Partnerships", desc: "Connecting technology providers with industrial buyers for digital transformation and IoT integration." },
      { icon: Factory, title: "Industrial Collaborations", desc: "Structured industrial collaboration frameworks across manufacturing, services and supply chain verticals." },
      { icon: Users, title: "Joint Development Programs", desc: "Co-development of products, processes and capabilities with aligned cross-border partners." },
    ],
    process: [
      { step: "01", title: "Opportunity Identification", desc: "Mapping potential collaboration opportunities across industries, geographies and technology domains." },
      { step: "02", title: "Partner Matching", desc: "Identifying and rigorously vetting partners with aligned goals, complementary capabilities and shared values." },
      { step: "03", title: "Agreement Structuring", desc: "Designing partnership frameworks, governance structures and commercial agreements." },
      { step: "04", title: "Execution & Scaling", desc: "Activating the collaboration, managing ongoing relationships and scaling operations." },
    ],
    industries: ["Manufacturing", "Infrastructure", "Energy", "Technology", "Defence", "Railways"],
    whyUs: [
      { title: "Strong Industry Network", desc: "Extensive connections across Indian and global industrial ecosystems built over years of active operations." },
      { title: "Strategic Expertise", desc: "Experienced team in structuring complex multi-party industrial agreements and governance frameworks." },
      { title: "Scalable Models", desc: "Partnership frameworks designed for rapid scaling and long-term compounding value creation." },
      { title: "Cross-Border Capability", desc: "Active operations across 5 international regions with regulatory and compliance know-how." },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   TEMPLATE B — VENTURE / SERVICE PAGES (comprehensive)
   ═══════════════════════════════════════════════════════════════ */

export const VENTURES: ServiceData[] = [
  /* ── 1. E-COMMERCE ─────────────────────────────────────────── */
  {
    slug: "e-commerce",
    code: "ECM",
    label: "E-Commerce",
    hero: {
      title: "Industrial E-Commerce Platform",
      subtitle: "A centralized B2B marketplace connecting buyers and sellers across railway, metro, and industrial supply chains — with end-to-end vendor management.",
    },
    overview: {
      body: "This e-commerce platform acts as a centralized marketplace that connects buyers (railway/industrial companies) with sellers (OEMs, spare parts manufacturers, service providers, and suppliers). Built for B2B procurement at industrial scale, the platform integrates product catalogues, RFQ workflows, vendor management, ERP connectivity and AI-powered recommendations into a single ecosystem.",
      dealIn: [
        "Heavy industrial machinery",
        "Railway equipment & infrastructure components",
        "Metro rail systems",
        "Spare parts & MRO items",
        "Maintenance, Repair & Operations services",
        "Project-based & AMC services",
      ],
    },
    coreFeatures: [
      {
        category: "Product & Services Catalogue",
        icon: Store,
        items: [
          { title: "Dynamic Product Listing", desc: "Category-based listings with industry type, HS codes and inventory code integration for precision search." },
          { title: "Specification Sheets & Drawings", desc: "Upload and browse CAD drawings, manuals, ISO certifications and technical specification sheets." },
          { title: "Service Listings", desc: "Support for services like installation, commissioning, retrofitting and AMC alongside physical products." },
          { title: "Advanced Filters", desc: "Filter by OEM, model compatibility, availability, price band and certification status." },
        ],
      },
      {
        category: "Order Management System (OMS)",
        icon: ClipboardList,
        items: [
          { title: "RFQ & Bidding Mechanism", desc: "Request for Quotation workflows with multi-vendor bidding, counter-offers and e-auction support." },
          { title: "Purchase Order Generation", desc: "Auto-generate POs from approved quotes with digital signatures and ERP push." },
          { title: "Real-Time Order Tracking", desc: "End-to-end shipment tracking with geo-fencing and ETA notifications for oversized cargo." },
          { title: "Multi-Vendor Cart Checkout", desc: "Single-cart, multi-vendor checkout with consolidated invoicing and payment allocation." },
        ],
      },
      {
        category: "Procurement Workflow Support",
        icon: Workflow,
        items: [
          { title: "Multi-Level Approval Systems", desc: "Configurable approval hierarchies aligned with organizational procurement policies and budget controls." },
          { title: "Budget Control & Cost Centers", desc: "Real-time budget tracking, cost center allocation and spend analytics for procurement teams." },
          { title: "E-Auctions & Reverse Auctions", desc: "Competitive bidding mechanisms to drive cost efficiency across high-volume procurement." },
          { title: "Framework Contract Uploads", desc: "Upload and manage rate contracts, empanelment agreements and DGS&D schedules." },
        ],
      },
      {
        category: "Search & Recommendation Engine",
        icon: Bot,
        items: [
          { title: "AI/ML Part Number Recognition", desc: "Intelligent search that recognises obscure part numbers, cross-references and alternate SKUs." },
          { title: "Predictive Part Replacement", desc: "Suggest replacement parts based on usage patterns, service history and predictive wear models." },
          { title: "Cross-Sell & Up-Sell Engine", desc: "Context-aware recommendations for complementary products and service bundles." },
          { title: "Natural Language Search", desc: "Search by description, function or specifications — not just codes and part numbers." },
        ],
      },
    ],
    modules: [
      {
        title: "Vendor Management System (VMS)",
        icon: Users,
        desc: "A comprehensive VMS ensuring procurement transparency, quality assurance and vendor lifecycle governance.",
        features: [
          "KYC, GST, PAN, MSME documentation & verification",
          "NDA, policy agreements & digital signature integration",
          "Delivery timeline & quality-based vendor rating",
          "Automated feedback collection post-order",
          "Star rating, performance heatmaps & scorecards",
          "Inquiry management & dispute resolution portal",
          "Document exchange — ISO certs, QA reports, audit trails",
          "Blacklisting module with ESG compliance tracking",
        ],
      },
      {
        title: "Logistics & Delivery Management",
        icon: Truck,
        desc: "End-to-end logistics coordination for bulky, oversized and time-critical industrial cargo.",
        features: [
          "3PL API integration for real-time rate comparison",
          "Tracking for rail wagons, bogies and oversized equipment",
          "Geo-fencing alerts and automated ETA notifications",
          "Warehouse inventory sync across fulfillment centers",
          "Cold chain and hazardous goods compliance support",
          "Proof of delivery (PoD) with digital sign-off",
        ],
      },
      {
        title: "Security & Compliance",
        icon: Lock,
        desc: "Enterprise-grade security architecture for sensitive B2B procurement data and transactions.",
        features: [
          "SSL/TLS + AES data encryption at rest and in transit",
          "Multi-factor authentication (MFA) for all roles",
          "Role-based access control (RBAC) across all modules",
          "GDPR and Indian IT Act 2000 compliance",
          "Complete transaction audit logs and tamper detection",
          "Penetration testing and vulnerability scanning schedule",
        ],
      },
      {
        title: "Analytics & Reporting Dashboard",
        icon: BarChart3,
        desc: "Real-time procurement intelligence and vendor performance analytics for strategic decision-making.",
        features: [
          "Procurement cost trend analysis with drill-down",
          "Vendor performance dashboards and scorecards",
          "Inventory aging reports and reorder alerts",
          "Service SLA compliance tracking and breach alerts",
          "Spend analytics by category, department and vendor",
          "Executive summary dashboards and automated reports",
        ],
      },
    ],
    integrations: [
      "Indian Railways IREPS procurement system",
      "SAP / Oracle / Zoho ERP integration",
      "GIS & Rail Infrastructure Planning Tools",
      "UPI and banking gateway (B2B payments)",
      "GSTN for automated GST computation",
      "DGFT for import/export compliance",
      "3PL logistics APIs (DHL, FedEx, Blue Dart)",
      "Digital signature platforms (eMudhra, DocuSign)",
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Django (Python)", "REST + GraphQL APIs"],
      database: ["PostgreSQL", "MongoDB", "Elasticsearch"],
      cloud: ["AWS (EC2, S3, RDS)", "Azure (Backup & DR)", "Docker + Kubernetes"],
      other: ["OAuth 2.0 + JWT", "Web Application Firewall (WAF)", "Redis Cache"],
    },
    security: [
      "SSL/TLS encryption on all data transmissions",
      "AES-256 data encryption at rest",
      "Multi-factor authentication (MFA) enforced platform-wide",
      "Role-based access control (RBAC)",
      "GDPR and Indian IT Act 2000 compliance",
      "Complete audit trail for all transactions and approvals",
      "Annual third-party penetration testing",
    ],
    advancedFeatures: [
      { title: "AI Predictive Maintenance", desc: "Suggest replacement parts based on vibration data, usage hours, and predictive wear algorithms — reducing unplanned downtime." },
      { title: "Digital Twin Integration", desc: "Sync procurement workflows with railway asset digital twin systems for real-time asset-to-order mapping." },
      { title: "IoT Sensor Auto-PO", desc: "Auto-generate Purchase Orders when IoT sensors detect threshold triggers — zero-touch reordering for critical spares." },
      { title: "Blockchain-Based Traceability", desc: "Track provenance of critical components from manufacturer to site — immutable, auditable supply chain records." },
      { title: "Mobile App for Field Technicians", desc: "iOS/Android app enabling field engineers to raise spares requests, scan barcodes and approve POs on-site." },
    ],
    analytics: [
      "Procurement cost trend analysis with period-over-period comparison",
      "Vendor performance dashboards with delivery, quality and support scores",
      "Inventory aging reports with reorder point triggers",
      "Service SLA compliance tracking and breach management",
      "Spend analytics segmented by category, vendor and cost center",
      "Savings realisation tracking vs. market benchmarks",
      "Executive procurement summary with board-ready visualizations",
    ],
    benefits: [
      { title: "Centralized Procurement", desc: "Single platform for all industrial procurement — eliminating fragmented, email-based buying." },
      { title: "Cost Reduction", desc: "Competitive bidding, spend analytics and framework contracts drive measurable cost savings." },
      { title: "Vendor Transparency", desc: "Rated vendor ecosystem with performance history, certifications and compliance records." },
      { title: "Regulatory Compliance", desc: "Built-in GSTN, IREPS and trade compliance ensures audit-ready procurement at all times." },
    ],
    useCases: [
      "Railway Production Units procuring spares and AMC services at scale",
      "Metro rail contractors managing multi-vendor project procurement",
      "Industrial plant managers ordering MRO items with zero paperwork",
      "PSU procurement teams running compliant e-auctions and tender management",
    ],
  },

  /* ── 2. OVERSEAS LOGISTICS ──────────────────────────────────── */
  {
    slug: "overseas-logistics",
    code: "OVL",
    label: "Overseas Logistics",
    hero: {
      title: "Global Logistics Management Platform",
      subtitle: "End-to-end international logistics orchestration — from freight booking to last-mile delivery — for industrial, railway and infrastructure cargo.",
    },
    overview: {
      body: "Our Overseas Logistics platform is a centralized digital ecosystem for managing international cargo movement. Built for the complexity of industrial and railway goods — including oversized, hazardous and time-critical shipments — the platform integrates freight booking, customs management, 3PL coordination and real-time tracking into a unified command centre.",
      dealIn: [
        "International freight forwarding (air, sea, road, rail)",
        "Oversized & project cargo management",
        "Bonded warehousing & distribution",
        "Customs clearance & trade compliance",
        "3PL partner management",
        "Dangerous goods & temperature-controlled logistics",
      ],
    },
    coreFeatures: [
      {
        category: "Freight Management",
        icon: Truck,
        items: [
          { title: "Multi-Modal Booking Engine", desc: "Compare and book air, sea, road and rail freight from a single interface with real-time rate cards." },
          { title: "Carrier Selection & Optimization", desc: "AI-powered carrier recommendations based on cost, transit time, reliability and cargo type." },
          { title: "Consolidation & LCL Management", desc: "Group smaller shipments for cost-efficient LCL (Less than Container Load) international movements." },
          { title: "Project Cargo Coordination", desc: "Specialized handling for oversized and out-of-gauge cargo including rail wagons, bogies and heavy machinery." },
        ],
      },
      {
        category: "Customs & Compliance",
        icon: ShieldCheck,
        items: [
          { title: "Customs Documentation Engine", desc: "Auto-generate Bill of Lading, Packing Lists, Certificates of Origin and customs declarations." },
          { title: "HS Code Classification", desc: "AI-assisted HS code determination with duty calculation and drawback identification." },
          { title: "EXIM Compliance Management", desc: "Track import/export licenses, RoDTEP credits, and advance authorization compliance." },
          { title: "Sanctions & Restricted Party Screening", desc: "Automated screening against international restricted party and sanctions databases." },
        ],
      },
      {
        category: "Warehousing & Storage",
        icon: Warehouse,
        items: [
          { title: "Bonded Warehouse Management", desc: "Manage duty-deferred storage across bonded warehouses at key international trade hubs." },
          { title: "Inventory Visibility", desc: "Real-time stock levels across all storage locations with automatic reorder notifications." },
          { title: "Cross-Docking Operations", desc: "Rapid transfer of goods between inbound and outbound carriers for time-critical shipments." },
          { title: "Value-Added Services", desc: "Relabeling, repackaging, kitting and quality inspection at warehouse level." },
        ],
      },
      {
        category: "Tracking & Visibility",
        icon: Monitor,
        items: [
          { title: "Real-Time Shipment Tracking", desc: "End-to-end visibility from origin pickup to final delivery with live map tracking." },
          { title: "Geo-Fencing Alerts", desc: "Automated alerts when cargo enters or exits defined geographic zones or checkpoints." },
          { title: "ETA Predictions", desc: "AI-powered ETA calculations accounting for weather, port congestion and carrier delays." },
          { title: "Exception Management", desc: "Proactive alerts for delays, damage events, customs holds and documentation issues." },
        ],
      },
    ],
    modules: [
      {
        title: "3PL Partner Management",
        icon: Network,
        desc: "A comprehensive portal for managing logistics partner relationships, SLAs and performance.",
        features: [
          "Partner onboarding with KYC and rate card management",
          "SLA definition and real-time compliance monitoring",
          "Performance scorecards — on-time, damage rate, cost variance",
          "Automated invoice reconciliation with freight bills",
          "Dispute management and resolution workflow",
          "Partner capacity and availability planning",
        ],
      },
      {
        title: "Trade Finance Integration",
        icon: Receipt,
        desc: "Seamless integration with trade finance instruments to support cross-border payments.",
        features: [
          "Letter of Credit (LC) documentation management",
          "Bank guarantee and advance payment tracking",
          "FOREX rate integration for cost forecasting",
          "Export incentive tracking (RoDTEP, MEIS)",
          "Insurance claim management for cargo damage",
          "Multi-currency invoice and payment processing",
        ],
      },
      {
        title: "Dangerous Goods Management",
        icon: ShieldCheck,
        desc: "Specialized handling protocols for IMDG, IATA and ADR regulated cargo.",
        features: [
          "Dangerous goods classification and labeling support",
          "Carrier compliance screening for DG cargo",
          "Emergency response documentation (ERG guides)",
          "Segregation rules engine for multi-commodity loads",
          "Regulatory reporting to port and customs authorities",
        ],
      },
      {
        title: "Analytics & Intelligence",
        icon: BarChart3,
        desc: "Logistics performance intelligence for continuous improvement and cost optimization.",
        features: [
          "Freight cost analysis by lane, carrier and commodity",
          "Transit time benchmarking and trend analysis",
          "Carbon footprint tracking per shipment",
          "Carrier performance rankings and quarterly reviews",
          "Procurement savings identification across logistics spend",
        ],
      },
    ],
    integrations: [
      "ICEGATE (Indian Customs EDI) integration",
      "IEC (Importer Exporter Code) portal",
      "Major shipping line APIs (MSC, Maersk, CMA CGM)",
      "Air cargo IATA e-AWB platforms",
      "GPS / IoT tracking device APIs",
      "SAP TM (Transportation Management) module",
      "Banking APIs for LC and trade finance",
      "India Post, FedEx, DHL, Blue Dart last-mile APIs",
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Progressive Web App (PWA)"],
      backend: ["Node.js", "Python (FastAPI)", "Microservices architecture"],
      database: ["PostgreSQL", "MongoDB", "Redis (caching)"],
      cloud: ["AWS (ECS, RDS, S3)", "Docker + Kubernetes", "CloudFront CDN"],
      other: ["Elasticsearch (shipment search)", "Kafka (event streaming)", "JWT + OAuth 2.0"],
    },
    security: [
      "End-to-end TLS 1.3 encryption on all data flows",
      "Role-based access for freight, customs and finance teams",
      "Multi-factor authentication for all external portals",
      "Data residency compliance (India and EU GDPR)",
      "Automated sanctions screening on every shipment",
      "Complete audit trail for all bookings and approvals",
    ],
    advancedFeatures: [
      { title: "IoT Container Monitoring", desc: "Temperature, humidity and shock sensors within containers for real-time cargo condition alerts." },
      { title: "AI Route Optimization", desc: "Dynamic route planning considering cost, transit time, port congestion and geopolitical risk." },
      { title: "Blockchain Bill of Lading", desc: "Immutable, tamper-proof digital Bill of Lading with instant multi-party access and e-signature." },
      { title: "Predictive Delay Engine", desc: "ML models predicting shipment delays 48–72 hours in advance using port and carrier pattern data." },
      { title: "Carbon Emissions Tracker", desc: "Per-shipment carbon footprint calculation with offset recommendations for ESG reporting." },
    ],
    analytics: [
      "Freight cost by lane, mode, carrier and commodity",
      "Transit time analysis against SLA benchmarks",
      "On-time delivery rate by partner and origin-destination pair",
      "Customs clearance time and duty spend analytics",
      "Inventory turn and warehouse utilisation reports",
      "Carbon footprint by shipment, lane and product",
    ],
    benefits: [
      { title: "Complete Visibility", desc: "Track every shipment in real-time from origin to delivery — no blind spots in your supply chain." },
      { title: "Cost Savings", desc: "AI-powered carrier selection and consolidation drive measurable freight cost reductions." },
      { title: "Compliance Assurance", desc: "Automated customs documentation and sanctions screening eliminate costly delays and penalties." },
    ],
    useCases: [
      "Industrial manufacturers exporting heavy capital goods to 5 international markets",
      "Railway procurement teams managing critical spare parts import timelines",
      "Infrastructure project companies coordinating multi-origin shipments to Indian project sites",
    ],
  },

  /* ── 3. CONTRACT MANUFACTURING ──────────────────────────────── */
  {
    slug: "contract-manufacturing",
    code: "CMF",
    label: "Contract Manufacturing",
    hero: {
      title: "Manufacturing Management Platform",
      subtitle: "Connect with verified contract manufacturers globally — manage production, quality, and supply chain from a single digital platform.",
    },
    overview: {
      body: "The Jigisha Contract Manufacturing Platform is a comprehensive B2B marketplace and production management system connecting businesses with verified OEM-grade manufacturers across India and internationally. The platform covers manufacturer discovery, capacity planning, production tracking, multi-stage quality control and supply chain coordination — delivering end-to-end manufacturing execution visibility.",
      dealIn: [
        "OEM & ODM manufacturing",
        "Component & sub-assembly production",
        "Industrial machinery fabrication",
        "Railway & metro rail component manufacturing",
        "Precision engineering & machined parts",
        "Electrical panels, switchgear & control systems",
      ],
    },
    coreFeatures: [
      {
        category: "Manufacturer Discovery",
        icon: Search,
        items: [
          { title: "AI-Powered Matching Engine", desc: "Match your BOM requirements with verified manufacturers based on capability, capacity, certification and location." },
          { title: "Capability Assessment Portal", desc: "Browse manufacturer profiles including machinery list, industry focus, production capacity and quality certifications." },
          { title: "Facility Audit Integration", desc: "Schedule and track third-party facility audits with digital audit reports and certification tracking." },
          { title: "Quote Comparison Engine", desc: "Receive and compare structured quotes from multiple manufacturers with cost breakdown analysis." },
        ],
      },
      {
        category: "Production Management",
        icon: Factory,
        items: [
          { title: "Work Order Management", desc: "Create, assign and track work orders with milestone-based progress monitoring and alerts." },
          { title: "BOM & Material Procurement", desc: "Bill of Materials management with material sourcing, inventory tracking and shortage alerts." },
          { title: "Production Scheduling", desc: "Capacity-aligned production scheduling with Gantt chart visibility and bottleneck identification." },
          { title: "Real-Time Progress Tracking", desc: "Stage-wise production progress with photographic evidence uploads and approval workflows." },
        ],
      },
      {
        category: "Quality Management System (QMS)",
        icon: ClipboardCheck,
        items: [
          { title: "Incoming Material QC", desc: "Define inspection criteria for raw materials and track acceptance/rejection with documented records." },
          { title: "In-Process Quality Checks", desc: "Stage-gate inspection checkpoints with digital QC checklists and defect logging." },
          { title: "Final Inspection & Testing", desc: "Pre-dispatch inspection scheduling with third-party lab integration and test certificate management." },
          { title: "Non-Conformance Management", desc: "Track defects, corrective actions and prevent-recurrence measures with root cause analysis." },
        ],
      },
      {
        category: "Supply Chain & Logistics",
        icon: Truck,
        items: [
          { title: "Raw Material Sourcing", desc: "Approved vendor database for raw materials with price benchmarking and quality history." },
          { title: "Inbound Logistics Coordination", desc: "Manage material delivery schedules, GRN processing and warehouse intake across facilities." },
          { title: "Finished Goods Dispatch", desc: "Packing, documentation, freight booking and dispatch coordination with tracking integration." },
          { title: "Inventory Management", desc: "Real-time inventory levels across manufacturing locations with low-stock alerts and reorder automation." },
        ],
      },
    ],
    modules: [
      {
        title: "Manufacturer Onboarding & KYC",
        icon: Building2,
        desc: "Rigorous onboarding to ensure only verified, capable manufacturers join the platform.",
        features: [
          "GST, PAN, MSME and factory license verification",
          "Quality certification uploads (ISO 9001, IATF, etc.)",
          "Machinery and equipment list with capacity declaration",
          "Bank account and financial standing verification",
          "NDA and platform agreement with e-signing",
          "Periodic reverification and compliance audits",
        ],
      },
      {
        title: "Production Analytics Dashboard",
        icon: BarChart3,
        desc: "Live production intelligence for buyers and manufacturers to track performance.",
        features: [
          "On-time production rate by manufacturer and product",
          "Defect rate trending with Pareto analysis",
          "Capacity utilization tracking across facilities",
          "Cost variance analysis vs. quoted price",
          "Lead time benchmarking and improvement tracking",
          "Yield analysis and material consumption reports",
        ],
      },
      {
        title: "Document & Certification Management",
        icon: FileText,
        desc: "Centralized repository for all manufacturing and quality documentation.",
        features: [
          "Test certificates, inspection reports and COAs",
          "Drawing version control with change management",
          "Regulatory compliance certificates (BIS, CE, etc.)",
          "Factory audit reports and CAPA tracking",
          "Customer-specific documentation templates",
          "Automatic expiry alerts for certifications",
        ],
      },
      {
        title: "Financial & Payment Management",
        icon: Receipt,
        desc: "Milestone-linked payment processing with complete financial visibility.",
        features: [
          "Advance payment and milestone payment scheduling",
          "LC and bank guarantee management for large orders",
          "Invoice verification and three-way matching (PO, GRN, Invoice)",
          "Multi-currency support for international manufacturing",
          "TDS deduction and GST invoice management",
          "Payment status tracking and dispute resolution",
        ],
      },
    ],
    integrations: [
      "SAP Manufacturing Module (PP, QM, MM)",
      "Oracle Manufacturing Cloud",
      "ERP systems (Tally, Microsoft Dynamics)",
      "CAD/CAM drawing platforms (AutoCAD, SolidWorks)",
      "Third-party inspection agencies (TÜVR, SGS, Bureau Veritas)",
      "Logistics APIs for dispatch management",
      "GST portal and e-invoicing (IRN generation)",
      "BIS and regulatory certification portals",
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Mobile PWA for shop floor"],
      backend: ["Node.js", "Django REST Framework", "Microservices (Docker)"],
      database: ["PostgreSQL", "MongoDB (document store)", "Elasticsearch"],
      cloud: ["AWS (EC2, S3, RDS)", "Kubernetes orchestration", "CloudFront CDN"],
      other: ["IoT middleware for machine connectivity", "JWT + RBAC security", "Redis for real-time updates"],
    },
    security: [
      "IP and drawing protection with watermarking and access controls",
      "Role-based access — buyer, manufacturer, QC, logistics",
      "NDA enforcement with digital audit trail",
      "Data encryption for all design and technical documents",
      "Multi-factor authentication for all platform users",
      "Annual security audits and penetration testing",
    ],
    advancedFeatures: [
      { title: "Digital Twin for Production Monitoring", desc: "Sync production schedules with digital twins of manufacturing assets for real-time OEE (Overall Equipment Effectiveness) visibility." },
      { title: "AI Quality Prediction", desc: "Machine learning models predict defect probability from sensor data, production parameters and historical quality records." },
      { title: "IoT Shop-Floor Connectivity", desc: "Connect CNC machines, presses and assembly lines to the platform for automated progress updates and downtime alerts." },
      { title: "AR-Assisted Remote Inspection", desc: "Augmented reality tools enable remote quality inspection by buyers without on-site travel." },
      { title: "Predictive Lead Time Engine", desc: "Forecast delivery dates accounting for material availability, machine capacity and logistics lead times." },
    ],
    analytics: [
      "On-time delivery rate by manufacturer, product and region",
      "Defect rate analysis with Pareto and trend charts",
      "Cost per unit tracking vs. quoted and benchmark prices",
      "Capacity utilization across the manufacturing network",
      "Quality rejection root cause analysis and CAPA tracking",
      "Savings vs. in-house manufacturing cost benchmarks",
    ],
    benefits: [
      { title: "Access Verified Manufacturers", desc: "Pre-screened, audited manufacturers with certified quality systems — zero onboarding risk." },
      { title: "End-to-End Visibility", desc: "Real-time production progress from order to dispatch — complete supply chain transparency." },
      { title: "Scalable Capacity", desc: "Flex production up or down instantly across a network of manufacturers — without capital commitment." },
    ],
    useCases: [
      "OEMs requiring certified component manufacturing without building new capacity",
      "Railway suppliers needing quality-compliant manufacturing partners quickly",
      "Startups launching industrial products without a manufacturing facility",
    ],
  },

  /* ── 4. JOINT VENTURE ───────────────────────────────────────── */
  {
    slug: "joint-venture",
    code: "JVN",
    label: "Joint Venture",
    hero: {
      title: "Joint Venture Management Platform",
      subtitle: "Structure, launch and govern strategic joint ventures — with partner discovery, due diligence, legal management and performance tracking in one platform.",
    },
    overview: {
      body: "The Jigisha Joint Venture Platform is a comprehensive digital ecosystem for forming and managing strategic industrial partnerships. From AI-powered partner matching through due diligence, agreement structuring, regulatory setup and ongoing performance governance — the platform manages the full JV lifecycle for Indian and cross-border ventures.",
      dealIn: [
        "Industrial manufacturing joint ventures",
        "Technology and innovation partnerships",
        "Infrastructure and project joint ventures",
        "Cross-border market entry partnerships",
        "Research & development collaborations",
        "Service delivery consortiums and SPVs",
      ],
    },
    coreFeatures: [
      {
        category: "Partner Discovery & Matching",
        icon: Search,
        items: [
          { title: "AI Partner Matching Engine", desc: "Score and rank potential JV partners based on industry alignment, capability gaps, financial strength and cultural fit." },
          { title: "Industry & Capability Mapping", desc: "Map your competency gaps to partner strengths across technology, market access, capital and operations." },
          { title: "Financial Health Scoring", desc: "Automated financial health assessment using public data, credit reports and submitted financial statements." },
          { title: "Strategic Alignment Assessment", desc: "Structured questionnaires to assess vision alignment, risk appetite and long-term strategic objectives." },
        ],
      },
      {
        category: "Due Diligence Management",
        icon: ClipboardCheck,
        items: [
          { title: "Structured DD Framework", desc: "Industry-standard due diligence checklists covering legal, financial, operational and technical dimensions." },
          { title: "Virtual Data Room", desc: "Secure, permission-controlled data room for exchanging sensitive documents during DD." },
          { title: "Regulatory Compliance Check", desc: "Automated screening for sector-specific licensing, compliance status and litigation history." },
          { title: "Third-Party Expert Integration", desc: "Invite legal, financial and technical advisors to collaborate on DD within the platform." },
        ],
      },
      {
        category: "Agreement & Legal Management",
        icon: FileText,
        items: [
          { title: "JV Agreement Templates", desc: "Industry-specific JV agreement templates covering equity structure, governance, exit clauses and IP." },
          { title: "Digital Negotiation & Redlining", desc: "Collaborate on agreement terms with version control, redlining and change tracking." },
          { title: "e-Signing & Execution", desc: "Legally binding digital signatures with multi-party signing workflows and court-admissible audit trails." },
          { title: "Regulatory Filing Tracking", desc: "Track MCA filings, RBI approvals, FEMA compliance and sector-specific regulatory submissions." },
        ],
      },
      {
        category: "Governance & Performance",
        icon: BarChart3,
        items: [
          { title: "Board & Committee Management", desc: "Schedule board meetings, track resolutions, manage minutes and maintain governance calendar." },
          { title: "KPI & Milestone Tracking", desc: "Define, monitor and report on agreed JV performance KPIs and milestone targets." },
          { title: "Financial Reporting", desc: "Consolidated JV financials with contribution tracking, P&L and balance sheet visibility." },
          { title: "Exit Management", desc: "Structured exit planning with buyout valuation, share transfer and winding-up workflow support." },
        ],
      },
    ],
    modules: [
      {
        title: "Partner Relationship Portal",
        icon: Handshake,
        desc: "A secure shared workspace for all JV partner communication, documentation and decision-making.",
        features: [
          "Secure messaging and video conferencing integration",
          "Shared task management and action item tracking",
          "Document library with granular access permissions",
          "Dispute logging and resolution workflow",
          "Partner performance feedback and rating system",
          "Communication audit trail for legal compliance",
        ],
      },
      {
        title: "Financial Management Module",
        icon: Receipt,
        desc: "End-to-end financial management for JV contributions, distributions and reporting.",
        features: [
          "Capital contribution schedule and payment tracking",
          "Profit sharing calculation per JV agreement terms",
          "Multi-entity consolidation and inter-company elimination",
          "Dividend declaration and distribution management",
          "Tax compliance (TDS, GST, transfer pricing) support",
          "Annual audit preparation and auditor access portal",
        ],
      },
      {
        title: "Regulatory & Compliance Tracker",
        icon: ShieldCheck,
        desc: "Ensure ongoing regulatory compliance for the JV entity across all applicable laws.",
        features: [
          "MCA annual compliance calendar (ROC filings, AGM)",
          "FEMA and RBI approvals for cross-border JVs",
          "Sector licensing renewal tracking",
          "Tax filing deadlines and GST compliance calendar",
          "ESG reporting and sustainability compliance",
          "Automated alerts for upcoming compliance deadlines",
        ],
      },
      {
        title: "IP & Technology Management",
        icon: Star,
        desc: "Protect and manage intellectual property within the JV framework.",
        features: [
          "IP ownership definition per JV agreement",
          "Technology licensing terms and royalty tracking",
          "Patent and trademark monitoring",
          "Know-how and trade secret access controls",
          "IP contribution valuation and accounting",
          "Post-JV IP ownership transition management",
        ],
      },
    ],
    integrations: [
      "Ministry of Corporate Affairs (MCA21) portal",
      "Reserve Bank of India (RBI) FEMA compliance portals",
      "GST portal and e-filing integration",
      "Credit rating agencies (CIBIL, ICRA, CRISIL)",
      "Legal databases (Manupatra, SCC Online)",
      "Digital signature platforms (eMudhra, NeSL)",
      "Banking APIs for capital transfers and escrow",
      "SEBI portals for listed entity JVs",
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Secure document viewer"],
      backend: ["Node.js", "Django", "Encrypted API layer"],
      database: ["PostgreSQL (relational)", "Encrypted document store", "Audit log DB"],
      cloud: ["Azure (enterprise-grade security)", "Azure Key Vault", "Microsoft 365 integration"],
      other: ["DocuSign / eMudhra e-signing", "Zero-trust security architecture", "End-to-end encryption"],
    },
    security: [
      "Zero-trust security model with no implicit trust",
      "End-to-end encryption for all sensitive deal documents",
      "Granular access control for each document and module",
      "Legal-grade audit trail for all negotiations and decisions",
      "Multi-party digital signing with identity verification",
      "Data residency compliance for cross-border ventures",
    ],
    advancedFeatures: [
      { title: "AI Risk Assessment", desc: "Predictive risk scoring for JV partners using financial, legal and operational data — flag red flags before commitment." },
      { title: "Predictive Performance Modelling", desc: "Simulate JV financial performance under various market and operational scenarios before signing." },
      { title: "Automated Compliance Monitoring", desc: "AI monitors regulatory changes and automatically flags impact on existing JV compliance obligations." },
      { title: "Blockchain Deal Records", desc: "Immutable blockchain record of all JV agreements, amendments and key decisions for legal certainty." },
    ],
    analytics: [
      "JV performance vs. agreed KPIs and milestones",
      "Partner contribution and equity position tracking",
      "Financial performance — revenue, EBITDA, returns",
      "Compliance calendar adherence and overdue tracking",
      "IP utilization and royalty income analytics",
      "Exit readiness assessment and valuation estimates",
    ],
    benefits: [
      { title: "Structured Process", desc: "Replace ad-hoc JV formation with a rigorous, structured digital process — reducing errors and deal risk." },
      { title: "Faster Formation", desc: "AI-powered partner matching and digital agreement workflows cut JV formation time by up to 60%." },
      { title: "Ongoing Governance", desc: "Structured governance tools ensure the JV is managed professionally through its full lifecycle." },
    ],
    useCases: [
      "Indian companies entering international markets via local JV partnerships",
      "Industrial groups combining technology and manufacturing capabilities",
      "Infrastructure developers forming project-specific SPVs with foreign investors",
    ],
  },

  /* ── 5. COLLABORATION ───────────────────────────────────────── */
  {
    slug: "collaboration",
    code: "COL",
    label: "Collaboration",
    hero: {
      title: "Business Collaboration Ecosystem",
      subtitle: "A digital platform for structured industrial partnerships — strategic tie-ups, co-development, resource sharing and market access collaboration.",
    },
    overview: {
      body: "The Jigisha Collaboration Platform connects industrial businesses, technology companies and market leaders through structured digital collaboration frameworks. From identifying the right co-development partner to managing shared resources, IP and project milestones — the platform orchestrates every dimension of business collaboration from first contact to commercial outcome.",
      dealIn: [
        "Strategic business tie-ups & MOUs",
        "Technology licensing & co-development",
        "Shared infrastructure & resource agreements",
        "Market access & channel partnerships",
        "Industry consortium & working groups",
        "Co-branded product & service development",
      ],
    },
    coreFeatures: [
      {
        category: "Opportunity Discovery",
        icon: Search,
        items: [
          { title: "AI Collaboration Matchmaking", desc: "AI identifies high-value collaboration opportunities by analysing your capabilities, market position and strategic gaps." },
          { title: "Industry Consortium Access", desc: "Join or form industry working groups and consortia across sectors for collective advocacy and development." },
          { title: "Market Gap Analysis", desc: "Identify white spaces where collaboration with a complementary partner can unlock new revenue streams." },
          { title: "Partner Intent Scoring", desc: "Gauge potential partner willingness and strategic fit before formal outreach — reducing wasted effort." },
        ],
      },
      {
        category: "Co-Development Management",
        icon: GitBranch,
        items: [
          { title: "Shared Project Workspace", desc: "Collaborative digital workspace with task management, file sharing, version control and communication tools." },
          { title: "Milestone & Deliverable Tracking", desc: "Define joint deliverables, assign responsibilities and track progress against agreed milestones." },
          { title: "IP Contribution Management", desc: "Document each partner's IP contributions with automated valuation and ownership record-keeping." },
          { title: "Joint Testing & Validation", desc: "Coordinate joint testing protocols, lab scheduling and validation documentation for co-developed products." },
        ],
      },
      {
        category: "Resource Sharing Framework",
        icon: Share2,
        items: [
          { title: "Talent Exchange Portal", desc: "Structured secondment and cross-company talent sharing with role definitions and compensation frameworks." },
          { title: "Equipment & Facility Sharing", desc: "Manage shared use of laboratories, manufacturing equipment, testing facilities and real estate." },
          { title: "Knowledge Repository", desc: "Shared knowledge base with controlled access for technical know-how, process documentation and research." },
          { title: "Resource Utilisation Tracking", desc: "Track shared resource consumption per partner for accurate cost allocation and billing." },
        ],
      },
      {
        category: "Agreement & IP Management",
        icon: FileText,
        items: [
          { title: "MOU & Collaboration Agreement Templates", desc: "Industry-standard templates covering scope, IP ownership, exclusivity, confidentiality and exit terms." },
          { title: "NDA Management", desc: "Digital NDA signing and management with automatic expiry alerts and renewal workflows." },
          { title: "IP Registration Support", desc: "Track jointly developed IP, coordinate patent filings and manage licensing royalty structures." },
          { title: "Change Management & Amendments", desc: "Version-controlled agreement amendments with multi-party approval and audit trails." },
        ],
      },
    ],
    modules: [
      {
        title: "Collaboration Health Dashboard",
        icon: Activity,
        desc: "Real-time health monitoring of all active collaborations and partnerships.",
        features: [
          "Partnership KPI tracking against agreed objectives",
          "Milestone achievement rate and delay tracking",
          "Partner engagement score — communication, responsiveness",
          "Revenue generated through each collaboration",
          "Relationship health alerts and intervention recommendations",
          "Portfolio view of all active, pipeline and completed collaborations",
        ],
      },
      {
        title: "Communication & Governance",
        icon: Monitor,
        desc: "Structured communication and governance tools for managing multi-party collaborations.",
        features: [
          "Secure messaging with document annotation",
          "Video conferencing integration (Zoom, Teams)",
          "Steering committee meeting management and minutes",
          "Decision log with attribution and audit trail",
          "Escalation workflows for collaboration disputes",
          "External advisor access with limited permissions",
        ],
      },
      {
        title: "Financial Management",
        icon: Receipt,
        desc: "Transparent financial management for shared investments and revenue sharing.",
        features: [
          "Co-investment tracking and cost allocation",
          "Revenue sharing calculation per agreement terms",
          "Shared resource billing and reconciliation",
          "Milestone-linked payment triggers",
          "Tax compliance for inter-party transactions",
          "ROI measurement by collaboration initiative",
        ],
      },
      {
        title: "Market Access Enablement",
        icon: Globe,
        desc: "Tools to activate and manage market access partnerships and channel collaborations.",
        features: [
          "Channel partner onboarding and territory management",
          "Co-marketing campaign management and asset sharing",
          "Lead sharing and referral tracking between partners",
          "Joint customer success management",
          "Market penetration reporting by partner and region",
          "Collaborative pricing and bundling management",
        ],
      },
    ],
    integrations: [
      "Microsoft Teams and Zoom for collaboration communication",
      "WIPO (World Intellectual Property Organization) database",
      "Indian Patent Office (IPO) application tracking",
      "SAP and Oracle ERP for financial management",
      "Project management tools (Jira, Asana, Monday.com)",
      "CRM systems (Salesforce, HubSpot) for market partnerships",
      "Digital signature platforms for agreement execution",
      "Cloud storage (SharePoint, Google Workspace, Dropbox)",
    ],
    techStack: {
      frontend: ["React.js", "Angular", "Real-time collaboration UI (WebSocket)"],
      backend: ["Node.js", "Python (FastAPI)", "Event-driven microservices"],
      database: ["PostgreSQL", "MongoDB", "Redis (real-time sync)"],
      cloud: ["AWS (enterprise)", "Microsoft 365 integration", "CDN for global access"],
      other: ["WebSocket for real-time collaboration", "End-to-end encrypted messaging", "SSO / SAML 2.0 for enterprise login"],
    },
    security: [
      "Zero-trust architecture with partner-specific access boundaries",
      "End-to-end encrypted messaging and document sharing",
      "IP watermarking and access-controlled document views",
      "Granular permission model per partnership and module",
      "Data sovereignty controls for cross-border collaborations",
      "Full audit trail for all decisions and document exchanges",
    ],
    advancedFeatures: [
      { title: "AI Collaboration Opportunity Scoring", desc: "Continuously scan market data and partner updates to surface new high-value collaboration opportunities automatically." },
      { title: "Blockchain IP Provenance", desc: "Immutable record of IP creation dates, contributor identities and ownership shares — court-admissible provenance." },
      { title: "Virtual Collaboration Rooms", desc: "Real-time co-editing, co-design and virtual whiteboarding for geographically distributed collaboration teams." },
      { title: "Automated ROI Attribution", desc: "AI attributes revenue and cost impact to specific collaborations — enabling data-driven portfolio decisions." },
    ],
    analytics: [
      "Collaboration portfolio performance vs. agreed KPIs",
      "Partner engagement and responsiveness metrics",
      "Revenue generated per collaboration vs. investment",
      "Milestone achievement rate and delay root causes",
      "IP portfolio value and licensing income tracking",
      "Market share gained through channel partnerships",
    ],
    benefits: [
      { title: "Structured Partnerships", desc: "Replace informal, email-driven collaborations with structured, governed digital partnerships." },
      { title: "Innovation Acceleration", desc: "Shared resources and co-development frameworks cut innovation timelines and reduce R&D cost." },
      { title: "Market Expansion", desc: "Access partner customer bases and geographies for faster, lower-risk market penetration." },
    ],
    useCases: [
      "Industrial companies co-developing next-generation railway components",
      "Technology firms partnering with manufacturers for industrial IoT deployment",
      "MSME clusters forming industry consortia for collective market access",
    ],
  },

  /* ── 6. OUTSOURCING ─────────────────────────────────────────── */
  {
    slug: "outsourcing",
    code: "OUT",
    label: "Outsourcing",
    hero: {
      title: "Managed Outsourcing Platform",
      subtitle: "A comprehensive digital platform to outsource, manage and govern industrial operations — with real-time SLA tracking, workforce management and compliance assurance.",
    },
    overview: {
      body: "The Jigisha Outsourcing Platform is an end-to-end managed services ecosystem enabling industrial companies to outsource non-core processes with complete visibility and governance. From defining service scope and SLAs to managing workforce, tracking performance and ensuring regulatory compliance — the platform delivers outsourcing with the rigour of in-house management.",
      dealIn: [
        "Industrial operations & facilities management",
        "Technical staffing & skilled workforce deployment",
        "Business process outsourcing (BPO)",
        "IT operations & infrastructure management",
        "Procurement & supply chain outsourcing",
        "Compliance, legal & regulatory process management",
      ],
    },
    coreFeatures: [
      {
        category: "Service Catalogue & SLA Management",
        icon: ClipboardList,
        items: [
          { title: "Standardized Service Definitions", desc: "Pre-built, industry-standard service definitions with deliverable specs, SLA parameters and pricing models." },
          { title: "SLA Configuration Engine", desc: "Configure custom SLAs — uptime, response time, quality metrics — with automated measurement and breach alerts." },
          { title: "Service Level Reporting", desc: "Real-time SLA dashboards with automated weekly and monthly compliance reports for all stakeholders." },
          { title: "Penalty & Credit Management", desc: "Automate SLA breach penalty calculation and credit issuance per contract terms." },
        ],
      },
      {
        category: "Workforce Management",
        icon: Users,
        items: [
          { title: "Resource Profile Library", desc: "Searchable database of skilled resources with competency profiles, certifications and deployment history." },
          { title: "Smart Allocation Engine", desc: "AI-powered resource allocation matching skills, availability, location and cost requirements." },
          { title: "Attendance & Timesheet Management", desc: "Digital attendance tracking, timesheet submission, approval workflows and payroll integration." },
          { title: "Skill Development Tracking", desc: "Track certifications, training completion and skill upgrades for all deployed resources." },
        ],
      },
      {
        category: "Process & Operations Management",
        icon: Workflow,
        items: [
          { title: "Process Documentation Portal", desc: "Standardized SOP library with version control, acknowledgment tracking and update workflows." },
          { title: "Work Order Management", desc: "Create, assign and track work orders with priority classification, escalation rules and completion workflows." },
          { title: "Quality & Compliance Checks", desc: "Scheduled and ad-hoc quality audits with digital checklists, photographic evidence and CAPA management." },
          { title: "Incident & Escalation Management", desc: "Structured incident reporting, root cause analysis, resolution tracking and post-incident review." },
        ],
      },
      {
        category: "Financial & Contract Management",
        icon: Receipt,
        items: [
          { title: "Contract Lifecycle Management", desc: "Manage outsourcing contracts from RFP through award, execution, renewal and termination." },
          { title: "Invoice Verification & Processing", desc: "Three-way matching (PO, service log, invoice) with automated approval and ERP posting." },
          { title: "Cost Analytics", desc: "Detailed cost analysis by service category, vendor, location and time period vs. benchmarks." },
          { title: "Budget Tracking & Forecasting", desc: "Real-time budget utilization with variance analysis and forward-looking cost forecasts." },
        ],
      },
    ],
    modules: [
      {
        title: "Vendor Management System",
        icon: Building2,
        desc: "Comprehensive management of outsourcing service providers from onboarding to performance evaluation.",
        features: [
          "Vendor KYC, compliance and financial verification",
          "Capability assessment and empanelment workflow",
          "Performance scorecards — SLA, quality, responsiveness",
          "Vendor risk classification and monitoring",
          "Annual performance review and contract renewal management",
          "Strategic vendor relationship management (SVRM)",
        ],
      },
      {
        title: "Real-Time SLA Dashboard",
        icon: Monitor,
        desc: "Live visibility into outsourcing performance with automated escalation for at-risk SLAs.",
        features: [
          "Real-time SLA compliance gauge across all contracts",
          "Traffic light (RAG) status for at-risk service areas",
          "Automated escalation to relationship managers on breach",
          "Historical SLA trend analysis and comparison",
          "Multi-vendor SLA comparison in a unified view",
          "Customer-specific SLA portals for self-service visibility",
        ],
      },
      {
        title: "Compliance & Audit Management",
        icon: ShieldCheck,
        desc: "End-to-end compliance management for statutory, contractual and regulatory obligations.",
        features: [
          "Statutory compliance calendar (PF, ESIC, contract labour)",
          "Digital audit workflow with findings and CAPA tracking",
          "Safety compliance monitoring and incident reporting",
          "Third-party audit integration and report management",
          "ESG and sustainability metrics for outsourcing operations",
          "Compliance certificate repository with expiry alerts",
        ],
      },
      {
        title: "Reporting & Intelligence",
        icon: BarChart3,
        desc: "Comprehensive outsourcing intelligence for governance, cost control and strategic decisions.",
        features: [
          "Executive outsourcing performance dashboard",
          "Cost savings tracking vs. in-house benchmarks",
          "Headcount and capacity utilization analytics",
          "Quality trend analysis and defect rate tracking",
          "Contract value and renewal pipeline reports",
          "Risk heat map across outsourcing portfolio",
        ],
      },
    ],
    integrations: [
      "HRMS and payroll systems (Keka, Darwinbox, SAP HCM)",
      "ERP systems (SAP, Oracle, Tally) for financial integration",
      "Labour compliance portals (PF, ESIC, CLRA)",
      "Project management tools (Jira, ServiceNow)",
      "Field service management systems (Salesforce FSM)",
      "IoT and facility management platforms for real-time data",
      "GST portal for tax compliance and e-invoicing",
      "Banking APIs for automated vendor payments",
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Mobile app for field teams (iOS/Android)"],
      backend: ["Node.js", "Django", "Microservices with API gateway"],
      database: ["PostgreSQL", "MongoDB", "Time-series DB for SLA metrics"],
      cloud: ["AWS (Auto-scaling)", "Azure (enterprise)", "Docker + Kubernetes"],
      other: ["RPA integration (UiPath, Automation Anywhere)", "AI/ML for resource matching", "SAML 2.0 / SSO for enterprise login"],
    },
    security: [
      "Role-based access control aligned to organizational hierarchy",
      "Data segregation between vendors and business units",
      "Secure field mobile app with offline capability",
      "GDPR and Indian data protection law compliance",
      "Encrypted SLA and performance data with audit trails",
      "Third-party security audit and ISO 27001 alignment",
    ],
    advancedFeatures: [
      { title: "RPA Process Automation", desc: "Integrate Robotic Process Automation (RPA) to automate repetitive outsourced tasks — invoice processing, report generation, data entry." },
      { title: "AI Process Optimization", desc: "ML models identify inefficiencies in outsourced processes and recommend restructuring for cost and quality improvement." },
      { title: "Predictive SLA Breach Detection", desc: "AI models predict SLA breaches 24–48 hours in advance based on leading indicators — enabling proactive intervention." },
      { title: "Digital Workforce Analytics", desc: "Behavioural analytics on deployed workforce productivity, identifying top performers and underperformers automatically." },
    ],
    analytics: [
      "SLA compliance rate by service, vendor and time period",
      "Cost savings vs. in-house and benchmark comparisons",
      "Workforce utilisation and productivity analytics",
      "Quality defect rate and CAPA closure tracking",
      "Contract renewal pipeline and value at risk",
      "Outsourcing portfolio risk heat map",
    ],
    benefits: [
      { title: "Complete Visibility", desc: "Real-time SLA dashboards eliminate the black box of outsourcing — full accountability at all times." },
      { title: "Proven Cost Savings", desc: "Analytics-driven outsourcing with benchmark comparisons delivers measurable and documented cost reductions." },
      { title: "Focus on Core Business", desc: "Free leadership and operational capacity to focus on high-value strategic activities." },
    ],
    useCases: [
      "Large enterprises managing multi-vendor outsourcing contracts across India",
      "PSUs requiring compliance-grade managed services under CAG audit standards",
      "Industrial plants outsourcing facility management, security and technical services",
    ],
  },
];

/* ─── NAV HELPER ─────────────────────────────────────────────────── */

export const IB_NAV = {
  pillars: PILLARS.map((p) => ({ label: p.label, to: `/international-business/${p.slug}` })),
  ventures: VENTURES.map((v) => ({ label: v.label, to: `/international-business/${v.slug}` })),
};
