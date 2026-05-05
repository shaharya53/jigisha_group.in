export const MEDIA_NAV = [
  { to: "/media/news", label: "News" },
  { to: "/media/portfolio", label: "Portfolio" },
  { to: "/media/magazine", label: "Magazine" },
  { to: "/media/catalogue", label: "Catalogue" },
];

export const MEDIA_DATA = {
  news: {
    layout: "grid",
    hero: {
      title: "Latest News & Updates",
      subtitle: "Stay Updated With Our Milestones, Announcements & Industry Impact",
      description: "This section highlights company progress, industry contributions, and major developments across railway, metro, and industrial sectors.",
      image: "/images/about_vision.png"
    },
    intro: {
      heading: "About Our News Platform",
      content: [
        "Covers milestones, innovations, partnerships, and expansion",
        "Keeps stakeholders informed and engaged",
        "Reflects company growth and transparency"
      ],
      image: "/images/finance_hero.png"
    },
    categories: [
      {
        title: "Project Announcements",
        points: ["Railway & metro project wins", "Infrastructure tenders", "ICBMRO contracts"],
      },
      {
        title: "Business Expansion",
        points: ["200+ workshops & warehouses", "Industrial malls launch", "Regional offices setup"],
      },
      {
        title: "Partnerships & Collaborations",
        points: ["OEM tie-ups", "Vendor ecosystem", "PSU & metro collaborations"],
      },
      {
        title: "Technology & Innovation",
        points: ["AI-based supply chain", "Industrial e-commerce platforms", "Product innovation"],
      },
      {
        title: "Financial & Growth Updates",
        points: ["Revenue growth", "Investments", "Government funding (PLI schemes)"],
      },
      {
        title: "Awards & Certifications",
        points: ["ISO certifications", "Industry awards", "Government recognition"],
      },
      {
        title: "Media Coverage",
        points: ["Press releases", "Interviews", "Industry features"],
      },
      {
        title: "Thought Leadership",
        points: ["Insights on Gati Shakti", "Railway modernization", "Supply chain trends"],
      },
      {
        title: "CSR & Culture",
        points: ["Employee stories", "Training & internships", "Sustainability initiatives"],
      }
    ],
    future: ["Social media live feed", "Email newsletter", "Video news content", "Client-specific updates"],
    importance: ["Transparency", "Trust building", "Industry credibility"],
    stats: [
      { value: "15M+", label: "Monthly Impressions" },
      { value: "50+", label: "Press Features" },
      { value: "10+", label: "Industry Awards" },
      { value: "24/7", label: "Media Desk" }
    ],
    testimonials: [
      { quote: "Jigisha Group's rapid expansion and transparent communication have set a new benchmark in the heavy engineering sector.", author: "Economic Times", role: "Industry Analyst" },
      { quote: "Their regular updates and comprehensive press kits make tracking their infrastructural impact incredibly efficient.", author: "Infrastructure Today", role: "Editorial Board" }
    ],
    downloads: [
      { title: "Corporate Press Kit 2024", size: "12 MB PDF", link: "#" },
      { title: "Brand Guidelines & Logos", size: "8 MB ZIP", link: "#" }
    ],
    featuredVideo: {
      title: "Year in Review: 2023-2024",
      description: "Watch our massive leaps in railway modernization and industrial supply over the last fiscal year.",
      thumbnail: "/images/rail_smart.png",
      duration: "04:15"
    }
  },
  magazine: {
    layout: "grid",
    hero: {
      title: "Jigisha Insights Magazine",
      subtitle: "Expert Perspectives on Industrial Growth & Technology",
      description: "Dive deep into our quarterly publication featuring industry trends, expert interviews, and technological advancements.",
      image: "/images/about_leadership.png"
    },
    intro: {
      heading: "Our Editorial Vision",
      content: [
        "Highlighting technological breakthroughs in Heavy Engineering",
        "Spotlighting visionary leadership and employee success",
        "Promoting sustainability and modern infrastructure"
      ],
      image: "/images/about_overview.png"
    },
    categories: [
      {
        title: "Cover Stories",
        points: ["Future of Automated Transit", "Building Smart Depots", "The MSME Ecosystem"],
      },
      {
        title: "Expert Interviews",
        points: ["Director's vision", "Lead Engineer insights", "Supply chain gurus"],
      },
      {
        title: "Tech Spotlight",
        points: ["IoT in manufacturing", "Predictive maintenance", "Renewable energy shifts"],
      },
      {
        title: "Policy & Economy",
        points: ["Make in India impact", "Gati Shakti analysis", "Global supply chains"],
      },
      {
        title: "Project Deep-Dives",
        points: ["Mega factory setups", "150km OHE projects", "CBTC implementation"],
      },
      {
        title: "Community & CSR",
        points: ["Skill development", "Green initiatives", "Local empowerment"],
      }
    ],
    future: ["Interactive digital editions", "Audio article podcasts", "Guest columns", "Mobile app access"],
    importance: ["Thought leadership", "Knowledge sharing", "Brand authority"],
    stats: [
      { value: "100K+", label: "Digital Readers" },
      { value: "4", label: "Editions Annually" },
      { value: "20+", label: "Expert Contributors" },
      { value: "15+", label: "Sectors Covered" }
    ],
    testimonials: [
      { quote: "Jigisha Insights provides unparalleled depth into the modernization of Indian infrastructure.", author: "Railway Board", role: "Senior Advisor" },
      { quote: "The go-to publication for understanding the intersection of heavy engineering and digital tech.", author: "Tech in Asia", role: "Supply Chain Editor" }
    ],
    downloads: [
      { title: "Q3 2024 Edition (Latest)", size: "28 MB PDF", link: "#" },
      { title: "Annual Innovation Report", size: "15 MB PDF", link: "#" }
    ],
    featuredVideo: {
      title: "Behind the Cover: Automated Transit",
      description: "A 5-minute documentary accompanying our latest cover story on the future of metro networks.",
      thumbnail: "/images/rail_maintenance.png",
      duration: "05:30"
    }
  },
  portfolio: {
    layout: "tabs",
    hero: {
      title: "Our Portfolio",
      subtitle: "Empowering Railway, Metro & Industrial Infrastructure",
      description: "A diversified, technology-driven portfolio covering supply, services, and infrastructure lifecycle.",
      image: "/images/about_hero.png"
    },
    intro: {
      content: [
        "Covers complete lifecycle (ICBMRO)",
        "Focus on innovation & national development",
        "Multi-sector expertise"
      ]
    },
    sections: [
      {
        id: "portfolioRailway",
        title: "Railway Sector",
        image: "/images/rail_rolling_stock.png",
        points: ["Rolling stock components", "Mechanical & electrical systems", "ICBMRO services", "Track infrastructure", "Signaling & telecom", "OHE electrification"]
      },
      {
        id: "portfolioMetro",
        title: "Metro Rail Projects",
        image: "/images/rail_smart.png",
        points: [
          "Rolling stock support & spares",
          "Depot maintenance systems",
          "SCADA & remote monitoring",
          "Station infrastructure components",
          "AFC gate integration",
          "Platform screen door systems"
        ]
      },
      {
        id: "portfolioIndustrial",
        title: "Industrial Supply",
        image: "/images/about_hero.png",
        points: [
          "5000+ raw materials & grades",
          "Bearings, fasteners & specialized hardware",
          "Industrial chemicals & coatings",
          "Heavy machinery & tooling",
          "Fabrication structures",
          "Consumables management"
        ]
      },
      {
        id: "portfolioEngineering",
        title: "Engineering Services",
        image: "/images/rail_maintenance.png",
        points: [
          "AMC & long-term maintenance",
          "Advanced diagnostics & testing",
          "Reverse engineering services",
          "Specialized manpower supply",
          "Refurbishment & overhauling",
          "Design & technical consultancy"
        ]
      },
      {
        id: "portfolioDigital",
        title: "Digital Industrial Mall",
        image: "/images/about_vision.png",
        points: [
          "3M+ products in digital index",
          "Transparent vendor onboarding",
          "B2B e-commerce platform",
          "Inventory management tools",
          "Digital RFQ workflow",
          "Supply chain analytics"
        ]
      },
      {
        id: "portfolioQuality",
        title: "Safety & Certification",
        image: "/images/about_overview.png",
        points: [
          "NABL accredited testing",
          "ISO quality management systems",
          "Safety audits & inspections",
          "Material certification desk",
          "Compliance tracking",
          "Third-party inspection support"
        ]
      },
      {
        id: "portfolioExpansion",
        title: "Expansion Projects",
        image: "/images/rail_electrical.png",
        points: [
          "Smart depot development",
          "Gati Shakti infra alignment",
          "PPP model infrastructure",
          "Regional logistics hubs",
          "Cross-border supply chains",
          "Future-ready workshops"
        ]
      }
    ],
    projects: [
      { title: "Indian Railways supply & AMC", desc: "Long-term maintenance and critical parts supply across multiple railway zones." },
      { title: "Metro station projects", desc: "Turnkey infrastructure, AFC gates, and electrification for new corridors." },
      { title: "PSU collaborations", desc: "Strategic partnerships with BHEL, NTPC, and other core government sectors." }
    ],
    model: [
      { category: "Product Supply", data: "3M+ items" },
      { category: "Engineering", data: "ICBMRO" },
      { category: "Digital Platform", data: "Marketplace" },
      { category: "Warehousing", data: "200+ units" },
      { category: "Network", data: "OEM + MSME" }
    ],
    why: ["Complete industrial coverage", "Tech-enabled execution", "Government alignment (Make in India, Gati Shakti)"],
    stats: [
      { value: "500+", label: "Completed Projects" },
      { value: "₹2000Cr+", label: "Project Value Delivered" },
      { value: "15+", label: "Railway Zones Served" },
      { value: "3M+", label: "Products Supplied" }
    ],
    testimonials: [
      { quote: "Jigisha Enterprises executed the smart depot modernization with zero disruption to our ongoing operations.", author: "Chief Engineer", role: "Indian Railways" },
      { quote: "Their turnkey solutions for our heavy fabrication unit were delivered three months ahead of the project deadline.", author: "Project Director", role: "Metro Rail Corporation" }
    ],
    downloads: [
      { title: "Complete Portfolio Deck", size: "25 MB PDF", link: "#" },
      { title: "Technical Capabilities Profile", size: "18 MB PDF", link: "#" }
    ],
    featuredVideo: {
      title: "Project Spotlight: 150km OHE Stringing",
      description: "A cinematic look at our engineering teams executing one of the fastest overhead electrification projects in the country.",
      thumbnail: "/images/rail_electrical.png",
      duration: "06:30"
    }
  },
  catalogue: {
    layout: "tabs",
    hero: {
      title: "Product Catalogues",
      subtitle: "Comprehensive Guides to Our Industrial & Transit Offerings",
      description: "Browse detailed specifications, certifications, and application guides for our massive inventory.",
      image: "/images/rail_maintenance.png"
    },
    intro: {
      content: [
        "Detailed technical specifications",
        "Compliance & ISO standards verified",
        "Direct RFQ integration"
      ]
    },
    sections: [
      {
        id: "catRollingStock",
        title: "Rolling Stock Spares",
        image: "/images/rail_rolling_stock.png",
        points: [
          "Bogie assemblies & frames",
          "Air brake & suspension units",
          "HVAC systems & retrofits",
          "Couplers and draft gears",
          "Axle boxes & bearing housings",
          "Wheelset components"
        ]
      },
      {
        id: "catElectrical",
        title: "Electrical & OHE",
        image: "/images/rail_electrical.png",
        points: [
          "Catenary wires & insulators",
          "Traction substations",
          "Earthing components",
          "Switchgears and relays",
          "Pantograph assemblies",
          "Transformer components"
        ]
      },
      {
        id: "catSignaling",
        title: "Signaling & Telecom",
        image: "/images/rail_smart.png",
        points: [
          "CBTC transponders",
          "Fiber optic networking",
          "Control room panels",
          "Trackside signals",
          "Axle counters",
          "Point machines"
        ]
      },
      {
        id: "catMachinery",
        title: "Heavy Machinery",
        image: "/images/about_hero.png",
        points: [
          "CNC wheel lathes",
          "Automated wash plants",
          "Overhead gantry cranes",
          "Hydraulic lifting jacks",
          "Re-railing equipment",
          "Depot workshop tools"
        ]
      },
      {
        id: "catSafety",
        title: "Safety & Protective Gear",
        image: "/images/about_overview.png",
        points: [
          "Industrial PPE kits",
          "Fire suppression systems",
          "Safety signage & lighting",
          "Emergency rescue tools",
          "Fall protection systems",
          "High-visibility gear"
        ]
      },
      {
        id: "catCivil",
        title: "Infrastructure & Civil",
        image: "/images/rail_maintenance.png",
        points: [
          "Pre-cast structures",
          "Drainage systems",
          "Platform furnishings",
          "Fencing & perimeter security",
          "Waterproofing solutions",
          "Foundation bolts & anchors"
        ]
      },
      {
        id: "catConsumables",
        title: "Consumables & Tools",
        image: "/images/about_vision.png",
        points: [
          "Industrial lubricants",
          "Specialized fasteners",
          "Pneumatic tools",
          "Precision gauges",
          "Cleaning chemicals",
          "Welding supplies"
        ]
      }
    ],
    projects: [
      { title: "Annual Procurement Guide", desc: "The definitive guide for railway zones planning their annual material indents." },
      { title: "Metro Component Index", desc: "A specialized index cross-referencing OEM parts for various metro rolling stock." },
      { title: "Safety Gear Catalogue", desc: "Comprehensive listing of industrial PPE and fire suppression systems." }
    ],
    model: [
      { category: "Categories", data: "150+ Sub-categories" },
      { category: "Formats", data: "PDF, Digital, Print" },
      { category: "Updates", data: "Quarterly Revisions" },
      { category: "Access", data: "Public & Client-Portal" },
      { category: "Languages", data: "English & Hindi" }
    ],
    why: ["Streamlined procurement process", "Accurate technical validation", "Instant digital availability"],
    stats: [
      { value: "150+", label: "Product Categories" },
      { value: "10,000+", label: "SKUs Listed" },
      { value: "100%", label: "ISO Certified" },
      { value: "24h", label: "RFQ Response Time" }
    ],
    testimonials: [
      { quote: "The digital catalogue has completely streamlined our annual procurement indent process.", author: "Procurement Head", role: "PSU Manufacturing" },
      { quote: "Extremely detailed technical specifications make finding exact rolling stock spares a breeze.", author: "Maintenance Supervisor", role: "Loco Shed" }
    ],
    downloads: [
      { title: "Rolling Stock Spares 2024", size: "45 MB PDF", link: "#" },
      { title: "OHE & Electrical Components", size: "30 MB PDF", link: "#" }
    ],
    featuredVideo: {
      title: "Navigating the Digital Industrial Mall",
      description: "Learn how to use our online portal to generate instant RFQs and access technical drawings.",
      thumbnail: "/images/about_vision.png",
      duration: "03:45"
    }
  }
};
