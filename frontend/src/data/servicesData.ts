export interface ServiceDomain {
  id: string;
  title: string;
  services: string[];
  imageSuggestion: string;
}

export interface ProductCategory {
  category: string;
  items: string;
}

export interface ServiceData {
  title: string;
  hero: {
    heading: string;
    subheading: string;
    description: string;
    extraPoints: string[];
    image: string;
  };
  domains: ServiceDomain[];
  productCategories: ProductCategory[];
  whyChooseUs: string[];
  cta: {
    heading: string;
    text: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "railway": {
    title: "Services For Railway",
    hero: {
      heading: "Jigisha Enterprises – Complete Solution Partner for Indian Railways",
      subheading: "End-to-End Services Across Railway Infrastructure, Rolling Stock, Electrical Systems & Modernization Projects",
      description: "Jigisha Enterprises provides a comprehensive portfolio of railway solutions including supply, installation, testing, commissioning, maintenance, ICBMRO, and AMC contracts. The company works with production units, maintenance sheds, railway zones, and modernization departments across India.",
      extraPoints: [
        "Covers coaches, wagons, locomotives, bogies",
        "Works on track machines, tower wagons, SPART",
        "Includes S&T systems, OHE, and station infrastructure"
      ],
      image: "/images/train.png"
    },
    domains: [
      {
        id: "rollingStock",
        title: "Rolling Stock (Passenger Coaches, Wagons, Locomotives & Bogies)",
        services: [
          "Supply of wheels, axles, bearings, brakes, interiors",
          "Installation & retrofitting (HVAC, LED, fire systems)",
          "Testing (load, brake, vibration, structural)",
          "ICBMRO (inspection, repair & overhaul)",
          "AMC services (predictive & preventive)"
        ],
        imageSuggestion: "/images/rail_rolling_stock.png"
      },
      {
        id: "productionSupport",
        title: "Support for Production & Maintenance Units",
        services: [
          "Supply of tools, jigs, fixtures",
          "Installation of depot equipment (wheel lathes, presses)",
          "Maintenance platforms & pit lines setup",
          "Automation systems for sheds & depots"
        ],
        imageSuggestion: "/images/rail_maintenance.png"
      },
      {
        id: "signalingTelecom",
        title: "Railway Signaling & Telecom (S&T)",
        services: [
          "Trackside & station signaling installation",
          "Interlocking systems & relay testing",
          "Fiber optics & telecom setup",
          "Maintenance of GSM-R, Wi-Fi, EI systems"
        ],
        imageSuggestion: "/images/rail_smart.png"
      },
      {
        id: "oheElectrical",
        title: "Overhead Equipment (OHE) & Electrical Works",
        services: [
          "Design & installation of OHE systems",
          "Masts, wires, insulators setup",
          "Electrification & speed upgrade modifications",
          "AMC & maintenance of OHE assets"
        ],
        imageSuggestion: "/images/rail_electrical.png"
      },
      {
        id: "stationElectrification",
        title: "Station Electrification, Lighting & Smart Energy",
        services: [
          "Lighting systems, panels, cabling",
          "LED retrofits & energy-efficient solutions",
          "Earthing & switchboards",
          "Solar integration & energy audits"
        ],
        imageSuggestion: "/images/rail_electrical.png"
      },
      {
        id: "smartRailway",
        title: "KAVACH, Gati Shakti & Smart Railway Projects",
        services: [
          "KAVACH (collision avoidance system) deployment",
          "PM Gati Shakti infrastructure support",
          "IoT, AI sensors, SCADA systems integration"
        ],
        imageSuggestion: "/images/rail_smart.png"
      },
      {
        id: "trackMachines",
        title: "Track Machines, Tower Wagons & SPART",
        services: [
          "Maintenance of tamping machines, regulators",
          "Tower wagon & SPART servicing",
          "Supply of hydraulics, engines, lifting systems"
        ],
        imageSuggestion: "/images/rail_maintenance.png"
      }
    ],
    productCategories: [
      { category: "Rolling Stock", items: "Coaches, Locos, Wagons" },
      { category: "Mechanical Parts", items: "Wheels, Axles, Brakes" },
      { category: "Electrical", items: "Panels, Cables, Lights" },
      { category: "S&T Equipment", items: "Relays, Telecom" },
      { category: "Depot Machinery", items: "Turntables, Tools" },
      { category: "Station Infra", items: "HVAC, Furniture" },
      { category: "Digital Systems", items: "KAVACH, IoT" },
      { category: "Industrial Supplies", items: "PPE, Bearings" }
    ],
    whyChooseUs: [
      "Deep railway domain expertise",
      "Proven support in metro & high-speed rail",
      "End-to-end project ownership",
      "Centralized procurement (GeM, IREPS, OEM)",
      "Nationwide support teams & warehouses"
    ],
    cta: {
      heading: "A project? A question?",
      text: "Our teams are ready to assist you with any queries or project requirements."
    }
  },
  "metro": {
    title: "Service for Metro Project",
    hero: {
      heading: "Jigisha Enterprises – Urban Mobility & Metro Solutions",
      subheading: "Advanced Infrastructure, Rolling Stock, and AFC Systems for Modern Metro Networks",
      description: "Jigisha Enterprises is at the forefront of urban transit modernization, offering end-to-end solutions for metro rail corporations. From station electrification to high-tech automated fare collection systems, we ensure urban mobility is safe, efficient, and technologically advanced.",
      extraPoints: [
        "Covers underground and elevated metro networks",
        "Expertise in Automated Fare Collection (AFC)",
        "End-to-end station facilities and platform screen doors"
      ],
      image: "/images/metro.png"
    },
    domains: [
      {
        id: "metroRollingStock",
        title: "Metro Rolling Stock Services",
        services: [
          "Supply of critical metro coach components",
          "HVAC and interior retrofits",
          "Propulsion system testing and maintenance",
          "Overhaul of braking and suspension systems"
        ],
        imageSuggestion: "/images/rail_rolling_stock.png"
      },
      {
        id: "afcSystems",
        title: "Automated Fare Collection (AFC) & IT",
        services: [
          "Installation of AFC gates and validators",
          "Ticketing server setup and networking",
          "Smart card and QR code system integration",
          "Maintenance of station IT infrastructure"
        ],
        imageSuggestion: "/images/rail_smart.png"
      },
      {
        id: "metroElectrical",
        title: "Metro Electrification & Traction",
        services: [
          "Third rail and rigid OCS installation",
          "Traction substation setup",
          "Power supply and distribution networks",
          "Energy optimization audits"
        ],
        imageSuggestion: "/images/rail_electrical.png"
      },
      {
        id: "stationFacilities",
        title: "Station Facilities & MEP",
        services: [
          "Platform Screen Doors (PSD) installation",
          "Escalators, elevators, and HVAC maintenance",
          "Fire detection and suppression systems",
          "Station lighting and security cameras (CCTV)"
        ],
        imageSuggestion: "/images/about_vision.png"
      },
      {
        id: "cbtcSignaling",
        title: "Signaling & Train Control (CBTC)",
        services: [
          "Installation of CBTC systems for driverless operations",
          "Trackside transponders and wayside equipment",
          "Integration with central control centers",
          "Safety validation and ongoing maintenance"
        ],
        imageSuggestion: "/images/rail_smart.png"
      },
      {
        id: "depotEquipment",
        title: "Trackwork & Depot Equipment",
        services: [
          "Supply of automated train wash plants",
          "Under-floor wheel lathes and lifting jacks",
          "Depot workshop layout and machinery installation",
          "Plinth and ballastless track maintenance"
        ],
        imageSuggestion: "/images/rail_maintenance.png"
      },
      {
        id: "metroOnM",
        title: "Comprehensive Operation & Maintenance",
        services: [
          "24/7 technical support and rapid response teams",
          "Station facility management and cleaning",
          "Predictive maintenance utilizing IoT sensors",
          "Staff training and operational auditing"
        ],
        imageSuggestion: "/images/about_leadership.png"
      }
    ],
    productCategories: [
      { category: "Rolling Stock", items: "Coach Shells, Bogies, Traction" },
      { category: "Passenger Systems", items: "PIS, PA Systems, AFC Gates" },
      { category: "Electrification", items: "Third Rail, Switchgears, Transformers" },
      { category: "Safety", items: "PSD, Fire Alarms, CCTV" },
      { category: "Depot", items: "Wash Plants, Lifting Jacks" }
    ],
    whyChooseUs: [
      "Specialized in high-density urban transit",
      "Partnerships with global metro OEMs",
      "Strict adherence to international safety standards",
      "Rapid response maintenance teams",
      "Proven track record in major metropolitan cities"
    ],
    cta: {
      heading: "Building the cities of tomorrow?",
      text: "Partner with us to deploy cutting-edge metro solutions."
    }
  },
  "commercial": {
    title: "Commercial Services",
    hero: {
      heading: "Jigisha Enterprises – Strategic Commercial Services",
      subheading: "Project Management, Supply Chain Optimization, and Corporate Governance",
      description: "Navigating complex industrial landscapes requires robust commercial management. Jigisha provides specialized consulting, procurement, and project lifecycle management services to ensure large-scale industrial projects are delivered on time, within budget, and fully compliant with regulations.",
      extraPoints: [
        "Procurement strategy and GeM/IREPS bidding",
        "Financial auditing and project cost control",
        "Legal compliance and risk management"
      ],
      image: "/images/commersiacl.png"
    },
    domains: [
      {
        id: "procurement",
        title: "Centralized Procurement & Tendering",
        services: [
          "Bid preparation for government portals (GeM, IREPS)",
          "Vendor evaluation and onboarding",
          "Strategic sourcing for heavy engineering",
          "Contract negotiation and management"
        ],
        imageSuggestion: "/images/about_overview.png"
      },
      {
        id: "projectManagement",
        title: "Project Management Consultancy (PMC)",
        services: [
          "End-to-end lifecycle management",
          "Site supervision and quality control",
          "Milestone tracking and reporting",
          "Resource allocation and logistics planning"
        ],
        imageSuggestion: "/images/about_leadership.png"
      },
      {
        id: "auditCompliance",
        title: "Audit, Finance & Compliance",
        services: [
          "Supply chain and operational audits",
          "Budget forecasting and cost control",
          "Statutory and regulatory compliance",
          "Risk mitigation strategies"
        ],
        imageSuggestion: "/images/about_overview.png"
      },
      {
        id: "supplyChain",
        title: "Supply Chain & Logistics",
        services: [
          "Multimodal transport coordination",
          "Warehouse management and inventory control",
          "Customs clearance and international freight",
          "Last-mile delivery optimization"
        ],
        imageSuggestion: "/images/about_vision.png"
      },
      {
        id: "vendorManagement",
        title: "Vendor & Contract Management",
        services: [
          "SLA creation and enforcement",
          "Performance tracking and KPI dashboards",
          "Dispute resolution and mediation",
          "Long-term supplier relationship building"
        ],
        imageSuggestion: "/images/about_overview.png"
      },
      {
        id: "businessStrategy",
        title: "Business Strategy & Expansion",
        services: [
          "Market entry analysis and feasibility studies",
          "Mergers, acquisitions, and joint ventures",
          "Diversification into new industrial sectors",
          "Corporate restructuring and modernization"
        ],
        imageSuggestion: "/images/about_hero.png"
      },
      {
        id: "legalAdvisory",
        title: "Regulatory & Legal Advisory",
        services: [
          "Industrial licensing and permits",
          "Environmental compliance and ESG reporting",
          "Labor law adherence for massive workforces",
          "IP protection and technology transfer agreements"
        ],
        imageSuggestion: "/images/about_leadership.png"
      }
    ],
    productCategories: [
      { category: "Consulting", items: "Strategy, PMC, Audits" },
      { category: "Tendering", items: "GeM, IREPS, Private Bids" },
      { category: "Supply Chain", items: "Logistics, Vendor Management" },
      { category: "Legal", items: "Contracts, Dispute Resolution" }
    ],
    whyChooseUs: [
      "Extensive experience with government contracts",
      "Highly qualified financial and legal experts",
      "Transparent reporting and cost efficiency",
      "Integrated approach with engineering teams",
      "Technology-driven project tracking"
    ],
    cta: {
      heading: "Need strategic project support?",
      text: "Let our commercial experts streamline your next major initiative."
    }
  },
  "industrial": {
    title: "Industrial Services",
    hero: {
      heading: "Jigisha Enterprises – Core Industrial Engineering",
      subheading: "Heavy Fabrication, Plant Setup, and Next-Gen Automation for Indian Industry",
      description: "Beyond transportation, Jigisha powers the core sectors of the economy. We offer heavy engineering, plant commissioning, and maintenance services for sectors including defense, agriculture, renewable energy, and manufacturing, driving operational excellence through automation and IoT.",
      extraPoints: [
        "Turnkey plant setup and commissioning",
        "Heavy metal fabrication and machining",
        "Industrial IoT and preventive maintenance"
      ],
      image: "/images/industrial.png"
    },
    domains: [
      {
        id: "heavyFabrication",
        title: "Heavy Engineering & Fabrication",
        services: [
          "Custom steel and alloy fabrication",
          "Precision machining and assembly",
          "Structural frameworks for plants",
          "Welding, casting, and forging support"
        ],
        imageSuggestion: "/images/about_hero.png"
      },
      {
        id: "plantSetup",
        title: "Plant Setup & Commissioning",
        services: [
          "Turnkey industrial facility construction",
          "Installation of heavy machinery",
          "Electrical, plumbing, and HVAC systems",
          "Testing and safety certifications"
        ],
        imageSuggestion: "/images/about_vision.png"
      },
      {
        id: "industrialAutomation",
        title: "Industrial IoT & Automation",
        services: [
          "SCADA and PLC programming",
          "Robotic assembly line integration",
          "Sensors for predictive maintenance",
          "Centralized monitoring dashboards"
        ],
        imageSuggestion: "/images/rail_smart.png"
      },
      {
        id: "maintenance",
        title: "Operations & Maintenance (O&M)",
        services: [
          "24/7 breakdown and preventive maintenance",
          "Asset lifecycle management",
          "Supply of industrial consumables and PPE",
          "Energy efficiency upgrades"
        ],
        imageSuggestion: "/images/rail_maintenance.png"
      },
      {
        id: "materialHandling",
        title: "Material Handling & Logistics",
        services: [
          "Installation of overhead cranes and hoists",
          "Automated Guided Vehicles (AGV) integration",
          "Conveyor belt systems for heavy industry",
          "Warehouse automation and racking systems"
        ],
        imageSuggestion: "/images/about_hero.png"
      },
      {
        id: "renewableEnergy",
        title: "Renewable Energy & Power",
        services: [
          "Industrial solar panel array installation",
          "Battery energy storage systems (BESS)",
          "High-voltage sub-station construction",
          "Grid integration and load balancing"
        ],
        imageSuggestion: "/images/rail_electrical.png"
      },
      {
        id: "industrialSafety",
        title: "Industrial Safety & Fire Protection",
        services: [
          "Advanced fire suppression systems for factories",
          "Gas detection and toxic leak monitoring",
          "Safety audits and hazard zone mapping",
          "Installation of emergency shutdown protocols"
        ],
        imageSuggestion: "/images/about_overview.png"
      }
    ],
    productCategories: [
      { category: "Fabrication", items: "Structures, Castings, Machined Parts" },
      { category: "Machinery", items: "Presses, Lathes, CNCs" },
      { category: "Automation", items: "PLCs, Sensors, Robotics" },
      { category: "Consumables", items: "Lubricants, Welding Rods, PPE" },
      { category: "Renewables", items: "Solar Panels, Wind Components" }
    ],
    whyChooseUs: [
      "Capability to handle massive scale projects",
      "Cross-sector industrial expertise",
      "Focus on Industry 4.0 integration",
      "Uncompromising safety standards",
      "Agile teams for minimal downtime"
    ],
    cta: {
      heading: "Scaling your industrial operations?",
      text: "Connect with us for heavy engineering and automation solutions."
    }
  }
};

export const SERVICES_NAV = [
  { to: "/services/railway", label: "Services For Railway" },
  { to: "/services/metro", label: "Service for Metro Project" },
  { to: "/services/commercial", label: "Commercial Services" },
  { to: "/services/industrial", label: "Industrial Services" }
];

export const servicesData = Object.values(SERVICES_DATA);

