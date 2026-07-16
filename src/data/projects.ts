export interface ProjectReview {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  scope: string[];
  materials: string[];
  productsUsed: string[];
  timeline: string;
  highlights: string[];
  review: ProjectReview;
  images: string[];
}

export const projectCategories = [
  { slug: "residential", name: "Residential" },
  { slug: "commercial", name: "Commercial" },
  { slug: "office", name: "Office" },
  { slug: "showroom", name: "Showroom" },
  { slug: "glass", name: "Glass" },
  { slug: "plywood", name: "Plywood" },
  { slug: "interior", name: "Interior" },
  { slug: "kitchen", name: "Kitchen" },
  { slug: "bathroom", name: "Bathroom" },
  { slug: "wardrobe", name: "Wardrobe" }
];

const unsplashProjectPool = [
  "photo-1600585154340-be6161a56a0c", // villa interior
  "photo-1600573472591-ee6b68d14c68", // luxury dinning
  "photo-1600607687939-ce8a6c25118c", // modern kitchen
  "photo-1600566753190-17f0baa2a6c3", // wooden doors
  "photo-1600210492486-724fe5c67fb0", // wardrobe master
  "photo-1600566752355-35792bedcfea", // bathroom vanity
  "photo-1486406146926-c627a92ad1ab", // glass facade
  "photo-1497366216548-37526070297c", // conference room
  "photo-1497215728101-856f4ea42174", // office cabin
  "photo-1545324418-cc1a3fa10c00", // building facade
  "photo-1513694203232-719a280e022f", // skylight panel
  "photo-1507652313519-d4e9174996dd", // bathroom glass
  "photo-1505691938895-1758d7feb511", // wardrobe closet
  "photo-1582268611958-ebfd161ef9cf", // sliding glass doors
  "photo-1581858726788-75bc0f6a952d", // wood cabinets
  "photo-1513519245088-0e12902e5a38", // designer door hardware
  "photo-1600607687920-4e2a09cf159d", // premium entrance doors
  "photo-1618221195710-dd6b41faaea6", // office partition
  "photo-1615529182904-14819c35db37", // modular kitchen setup
  "photo-1617806118233-18e1db207f62"  // led mirrors bathroom
];

const baseProjects = [
  {
    name: "Luxury Villa Interior",
    category: "residential",
    location: "Colachel, Tamil Nadu",
    year: "2025",
    description: "Complete luxury architectural fitout for a 5-bedroom premium residential villa utilizing BWP Gurjan plywood, custom wood veneers, and gold-mesh decorative glass partitions.",
    overview: "This project represents the pinnacle of residential design in Colachel. Our team collaborated with leading architects to select materials that offer maximum structural strength while achieving a pristine, Apple-inspired minimal luxury layout. From moisture-proof structural baseboards to high-gloss mirror laminates, Nesam provided a complete turnkey materials supply.",
    scope: ["Custom veneer wall paneling systems", "Boiling Water Proof kitchen cabinet structures", "LED backlight vanity mirrors", "Custom wardrobe modular fittings"],
    materials: ["IS:710 Marine Gurjan Plywood", "Natural Ash Wood Veneer", "High Gloss Acrylic Laminates", "Soft-Close Drawer Channels"],
    productsUsed: ["NES-1017 Premium Gurjan Plywood", "NES-1077 Heavy-Duty Soft-Close Drawer Slide", "NES-1122 LED Backlit Anti-Fog Mirror", "NES-1052 Anti-Fingerprint Matte Laminate"],
    timeline: "5 Months",
    highlights: ["Symmetric walnut grain matching across 8-foot tall wardrobe faces", "Integrated warm LED sensor hanging rods", "Grout-free back-painted glass kitchen Hob backsplash"],
    review: {
      name: "Er. Vigneshwaran Pillai",
      role: "Homeowner & Structural Engineer",
      comment: "Nesam materials transformed our villa blueprint into a stunning physical reality. The Gurjan marine plywood is of incredible density and thickness, and the wardrobe soft-close sliders feel exceptionally solid.",
      rating: 5
    }
  },
  {
    name: "Modern Glass Office",
    category: "office",
    location: "Nagercoil, Tamil Nadu",
    year: "2024",
    description: "Sleek corporate office fitout featuring frameless double-glazed acoustic partitions, point-supported glass facades, and digital biometric door lock entries.",
    overview: "For this premium corporate office, the requirement was simple: open ambient light with zero acoustic compromise. We installed STC 42dB acoustic double-glazed glass partitions with matching black-anodized lockset handles, bringing a modern industrial loft look to life.",
    scope: ["Frameless double-glazed partitions", "Acoustic glass doors with hydraulic pivot pivots", "Biometric card smart access locks", "Modern G-profile handle furniture cabinets"],
    materials: ["12mm Toughened Safety Glass", "Acoustic PVB Laminated Glass", "Anodized Aluminum Tracks", "Biometric Smart Glass Locks"],
    productsUsed: ["NES-1005 Toughened Glass", "NES-1006 Laminated Glass", "NES-1104 Digital Biometric Lock Elite", "NES-1094 Anodized Gold Pivot Hinge"],
    timeline: "3 Months",
    highlights: ["Soundproofing levels verified to STC 42dB for executive privacy", "Concealed bottom-track sliding rollers", "Instant biometric lock access logs on App"],
    review: {
      name: "Dr. Anand Krishnan",
      role: "Managing Director, AK Software Hub",
      comment: "The glass cabin solutions supplied by Nesam are flawless. Even with high activity in the lobby, our boardrooms remain completely silent. The visual aesthetic is incredibly clean.",
      rating: 5
    }
  },
  {
    name: "Premium Showroom",
    category: "showroom",
    location: "Trivandrum, Kerala",
    year: "2025",
    description: "High-end luxury retail showroom facade featuring 19mm ultra-clear low-iron float glass storefront panels and heavy-duty hydraulic floor spring pivot doors.",
    overview: "This jewelry flagship retail showroom demanded absolute transparency. We supplied 19mm low-iron ultra-clear glass panels (free of green edge tint) coupled with point standoffs and heavy-duty floor springs to support massive 150kg pivoting glass entries.",
    scope: ["19mm Low-iron glass facade panels", "Heavy duty floor springs and patches", "High-security triple-bolt main locks", "Gold-foil mesh decorative partition walls"],
    materials: ["19mm Ultra Clear Low-Iron Glass", "SS 316 Patch Fittings", "Heavy-Duty Floor Springs", "Gold-Mesh Interlaid Decorative Glass"],
    productsUsed: ["NES-1002 Ultra Clear Glass", "NES-1085 Heavy-Duty Hydraulic Floor Spring", "NES-1115 Triple-Bolt Security Mortise", "NES-1012 Decorative Glass Panels"],
    timeline: "2 Months",
    highlights: ["True-color crystal reflections with low-iron glass chemistry", "Wind-load certified facade brackets", "Heavy-duty SS 316 point standoffs"],
    review: {
      name: "Meera Nair",
      role: "Lead Architect, Signature Spaces Studio",
      comment: "We specified Nesam's low-iron structural glass for the Trivandrum flagship storefront. The glass clarity is outstanding, creating the perfect zero-reflection effect for jewelry displays.",
      rating: 5
    }
  },
  {
    name: "Corporate Office",
    category: "office",
    location: "Kanyakumari, Tamil Nadu",
    year: "2024",
    description: "State-of-the-art office infrastructure with WPC fire-retardant doors, pre-laminated HDHMR desk systems, and soft-close cabinet drawers.",
    overview: "A clean, modern workspace environment designed for maximum durability. We utilized high-density pre-laminated green HDHMR boards for the modular desk assemblies to ensure zero swelling or water damage from coffee cup rings.",
    scope: ["WPC waterproof toilet doors", "Pre-laminated HDHMR office cubicles", "Concealed 3D adjustable door hinges", "Under-mount drawer slides"],
    materials: ["High Density HDHMR Board", "Wood Plastic Composite (WPC)", "Cold Rolled Steel Slides", "Zinc Alloy hinges"],
    productsUsed: ["NES-1037 HDHMR Waterproof Board", "NES-1024 Waterproof WPC Door", "NES-1076 Soft Close Under-mount Slide", "NES-1086 Concealed 3D Adjustable Hinge"],
    timeline: "4 Months",
    highlights: ["Anti-fingerprint workstation surfaces", "Waterproof WPC toilet entries that will never decay", "Concealed wiring drawer channels"],
    review: {
      name: "Rajesh Pillai",
      role: "Operations Head, Kanyakumari Shipping Co.",
      comment: "The material choices Nesam suggested solved our maintenance issues. The desk edges are protected with metal profile bands and the drawers are completely wobble-free.",
      rating: 5
    }
  },
  {
    name: "Luxury Apartment",
    category: "residential",
    location: "Chennai, Tamil Nadu",
    year: "2025",
    description: "Premium sea-facing apartment remodel incorporating anti-humidity calibrated birch plywood, high gloss acrylic panels, and sliding barn closet doors.",
    overview: "Located directly on the coast, this apartment required materials that could withstand humid sea breezes. Nesam supplied premium calibrated Baltic birch plywood and anti-corrosion cabinet hardware to ensure long-term integrity.",
    scope: ["Calibrated Baltic birch plywood wardrobe carcasses", "High-gloss acrylic kitchen shutters", "Sliding glass partition doors", "Modern matte black lever locks"],
    materials: ["Imported Baltic Birch Plywood", "Acrylic Gloss Boards", "Tempered Fluted Glass", "Matte Black Zamak Hardware"],
    productsUsed: ["NES-1014 Imported Birch Plywood", "NES-1045 Acrylic Gloss Board", "NES-1009 Pattern Glass", "NES-1098 Black Lever Handle Classic"],
    timeline: "3.5 Months",
    highlights: ["Sleek sliding fluted glass partition that expands living zones", "Corrosion-resistant SS 316 kitchen hinges", "E0 low-emission wood certification for family safety"],
    review: {
      name: "Sanjay Shah",
      role: "Homeowner, Chennai Beachside",
      comment: "Coastal humidity ruins wood quickly, but the calibrated birch ply from Nesam has stood up beautifully. The high gloss acrylic kitchen cabinet finish is very easy to wipe clean.",
      rating: 5
    }
  },
  {
    name: "Hotel Lobby Grand Entry",
    category: "commercial",
    location: "Kovalam, Kerala",
    year: "2025",
    description: "Luxury resort lobby refurbishment featuring a massive 3-meter tall pivot teak entrance door, glass balustrades, and brushed brass designer pull handles.",
    overview: "The hotel lobby serves as the first impression for international travelers. We supplied a grand teak pivot door with offset pivot hardware and 1.2-meter long brushed brass pulls to establish a sense of modern grandeur.",
    scope: ["3-meter solid teak door leaf", "Toughened laminated glass balcony balustrades", "Brushed brass designer door handles", "Antique silver mirror wall grids"],
    materials: ["Burma Teak Wood", "SentryGlas Laminated Glass", "Solid Brass pulls", "Double-coated copper free mirrors"],
    productsUsed: ["NES-1022 Premium Teak Wood Door", "NES-1020 Balcony Glass Balustrade", "NES-1082 Premium Entrance Pull Handle", "NES-1013 Mirror Glass"],
    timeline: "2.5 Months",
    highlights: ["Heavy-duty pivot hinge rated for 250kg door weights", "SentryGlas interlayer guarantees balcony storm protection", "Antique silver grid wall enhances lobby light"],
    review: {
      name: "Chef Anil Kumar",
      role: "General Manager, Coco Beach Resort",
      comment: "Our guests are wowed by the massive teak pivot door at the entry. The brass hardware handles have a heavy, expensive weight and look outstanding.",
      rating: 5
    }
  }
];

// Helper to compile all 30 projects
export const generateProjectsData = (): Project[] => {
  const projects: Project[] = [];
  const projectListNames = [
    "Luxury Villa Interior", "Modern Glass Office", "Premium Showroom", "Corporate Office", "Luxury Apartment",
    "Hotel Lobby", "Restaurant Interior", "Hospital Renovation", "Glass Staircase", "Glass Facade",
    "Bathroom Remodel", "Modular Kitchen", "Wardrobe Installation", "Retail Store", "Bank Interior",
    "School Office", "Reception Area", "Conference Room", "Luxury Home", "Contemporary Villa",
    "Premium Office Cabin", "Glass Partition Project", "Frameless Glass Project", "Designer Door Project", "Commercial Renovation",
    "Wood Interior Project", "Kitchen Upgrade", "Bathroom Glass Project", "Luxury Wardrobe", "Modern Workspace"
  ];

  for (let i = 0; i < 30; i++) {
    const baseTemplateIdx = i % baseProjects.length;
    const base = baseProjects[baseTemplateIdx];
    const name = projectListNames[i];
    
    const codeNum = 2001 + i;
    const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    
    // Cycle categories nicely across categories pool
    const catObj = projectCategories[i % projectCategories.length];
    
    // Build 8 to 12 image URLs
    const imageList: string[] = [];
    const imageCount = 8 + (i % 5); // 8 to 12
    for (let j = 0; j < imageCount; j++) {
      const imgId = unsplashProjectPool[(i + j) % unsplashProjectPool.length];
      imageList.push(`https://images.unsplash.com/${imgId}?auto=format&fit=crop&w=800&q=80`);
    }

    // Adapt descriptions based on the specific project name
    const description = `A prestigious ${name} project located in Southern India, showcasing elite installations of Nesam building materials. Completed with pristine craftsmanship, integrating luxury aesthetics with industrial grade durability.`;
    const overview = `The ${name} project was executed to provide a showcase-worthy installation balancing strict engineering guidelines and Apple-inspired sleek aesthetics. Nesam worked as the primary materials supply partner, providing bespoke decorative glass, seasoned plywood boards, high-pressure laminates, and premium biometric lock systems.`;

    projects.push({
      id: `proj-${i + 1}`,
      slug,
      name,
      location: base.location,
      category: catObj.slug,
      year: base.year,
      description,
      overview,
      scope: base.scope,
      materials: base.materials,
      productsUsed: base.productsUsed,
      timeline: base.timeline,
      highlights: base.highlights,
      review: base.review,
      images: imageList
    });
  }

  return projects;
};

export const projectsData = generateProjectsData();

// Query helpers
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((p) => p.slug === slug);
};

export const getProjectsByCategory = (categorySlug: string): Project[] => {
  return projectsData.filter((p) => p.category === categorySlug);
};

export const getPrevAndNextProject = (project: Project): { prev: Project; next: Project } => {
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
  const nextIndex = (currentIndex + 1) % projectsData.length;

  return {
    prev: projectsData[prevIndex],
    next: projectsData[nextIndex]
  };
};

export const getRelatedProjects = (project: Project, limit: number = 3): Project[] => {
  return projectsData
    .filter((p) => (p.category === project.category || p.location === project.location) && p.id !== project.id)
    .slice(0, limit);
};
