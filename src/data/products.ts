export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: string;
  description: string;
  specifications: { label: string; value: string }[];
  features: string[];
  applications: string[];
  finishes: string[];
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categoriesData: Category[] = [
  {
    id: "cat-glass",
    name: "Architectural Glass",
    slug: "glass",
    description: "Premium float, toughened, smart, and decorative glass solutions for modern structures.",
    icon: "GlassWater"
  },
  {
    id: "cat-doors",
    name: "Designer Doors",
    slug: "doors",
    description: "Premium flush, teak, membrane, and engineered doors engineered for longevity and style.",
    icon: "DoorOpen"
  },
  {
    id: "cat-plywood",
    name: "Premium Plywood",
    slug: "plywood",
    description: "Marine grade, BWP, BWR, and flexible plywood conforming to global IS standards.",
    icon: "Layers"
  },
  {
    id: "cat-boards",
    name: "Structural Boards",
    slug: "boards",
    description: "High-density HDHMR, MDF, HDF, and gypsum boards for premium carpentry work.",
    icon: "Grid"
  },
  {
    id: "cat-laminates",
    name: "Decorative Laminates",
    slug: "laminates",
    description: "High gloss, matte, stone, and wood-finish laminates to elevate furniture surfaces.",
    icon: "Palette"
  },
  {
    id: "cat-door-locks",
    name: "Door Locks & Security",
    slug: "door-locks",
    description: "Smart biometric, mortise, and digital locks offering maximum security and aesthetics.",
    icon: "Lock"
  },
  {
    id: "cat-door-hardware",
    name: "Door Hardware & Fittings",
    slug: "door-hardware",
    description: "Designer pull handles, hydraulic hinges, door closers, and premium patch fittings.",
    icon: "Wrench"
  },
  {
    id: "cat-furniture-hardware",
    name: "Furniture Hardware",
    slug: "furniture-hardware",
    description: "Soft-close drawer channels, lift-up systems, tandem boxes, and profile handles.",
    icon: "Sliders"
  },
  {
    id: "cat-modular-kitchen",
    name: "Modular Kitchen Accessories",
    slug: "modular-kitchen",
    description: "Pantry units, magic corners, bottle pullouts, grain baskets, and utensil organizers.",
    icon: "ChefHat"
  },
  {
    id: "cat-wardrobe-accessories",
    name: "Wardrobe Organizers",
    slug: "wardrobe-accessories",
    description: "Trouser racks, tie racks, wardrobe lifts, jewellery drawers, and sliding baskets.",
    icon: "Shirt"
  },
  {
    id: "cat-bathroom-accessories",
    name: "Bathroom Fittings & Shelves",
    slug: "bathroom-accessories",
    description: "Premium LED mirrors, glass shelves, soap dispensers, and luxury towel bars.",
    icon: "Bath"
  }
];

// Helper database of unsplash photos for each category
const unsplashCollections: Record<string, string[]> = {
  glass: [
    "photo-1562259949-e8e7689d7828", // facade
    "photo-1618221195710-dd6b41faaea6", // glass partition
    "photo-1600585154340-be6161a56a0c", // shower glass
    "photo-1513694203232-719a280e022f", // skylight
    "photo-1600607687939-ce8a6c25118c", // kitchen back painted
    "photo-1527254955785-306278fc3585", // float glass
    "photo-1507652313519-d4e9174996dd", // frosted glass
    "photo-1522441815192-d9f04eb0615c", // railings
    "photo-1516455590571-18256e5bb9ff", // LED mirror
    "photo-1617806118233-18e1db207f62"  // decorative mirror
  ],
  doors: [
    "photo-1513694203232-719a280e022f", // classic entry
    "photo-1486406146926-c627a92ad1ab", // modern office glass
    "photo-1505691938895-1758d7feb511", // bedroom door
    "photo-1600566753190-17f0baa2a6c3", // teak door
    "photo-1544816155-12df9643f363", // barn door
    "photo-1534349762230-e0cadf78f5da", // double sliding doors
    "photo-1600607687920-4e2a09cf159d", // premium wood door
    "photo-1600585154526-990dced4db0d"  // pivot modern door
  ],
  plywood: [
    "photo-1538688525198-9b88f6f53126", // raw plywood stacks
    "photo-1501869123848-2849c5bc8d4d", // timber & wood veneer
    "photo-1533090161767-e6ffed986c88", // texture wood sheets
    "photo-1541123437800-1bb1317badc2", // wooden panels
    "photo-1615529182904-14819c35db37"  // luxury veneer grains
  ],
  boards: [
    "photo-1533090161767-e6ffed986c88", // boards sheets
    "photo-1538688525198-9b88f6f53126", // MDF pile
    "photo-1501869123848-2849c5bc8d4d", // raw boards
    "photo-1541123437800-1bb1317badc2"  // pre-laminated boards
  ],
  laminates: [
    "photo-1618219908412-a29a1bb7b86e", // high gloss marble
    "photo-1581858726788-75bc0f6a952d", // matte wood finish
    "photo-1618221195710-dd6b41faaea6", // concrete look laminate
    "photo-1505691938895-1758d7feb511", // stone finish laminate
    "photo-1616486338812-3dadae4b4ace"  // leather texture laminate
  ],
  "door-locks": [
    "photo-1558002038-1055907df827", // smart biometric lock
    "photo-1600585154526-990dced4db0d", // designer mortise lock
    "photo-1582139329536-e7284fece509", // fingerprint lock
    "photo-1508962914676-134849a727f0"  // heavy duty cylinder locks
  ],
  "door-hardware": [
    "photo-1615529182904-14819c35db37", // brass designer handle
    "photo-1513519245088-0e12902e5a38", // matte black lever
    "photo-1600607687920-4e2a09cf159d", // hinges & door pull
    "photo-1600585154526-990dced4db0d"  // hydraulic closers
  ],
  "furniture-hardware": [
    "photo-1600585154526-990dced4db0d", // drawer channels
    "photo-1513519245088-0e12902e5a38", // soft close drawer sliding
    "photo-1600607687920-4e2a09cf159d"  // concealed hydraulic hinges
  ],
  "modular-kitchen": [
    "photo-1556912173-3bb406ef7e77", // kitchen spice racks
    "photo-1600585154526-990dced4db0d", // tandem drawers
    "photo-1556911220-e15b29be8c8f", // pantry tall units
    "photo-1556909114-f6e7ad7d3136"  // magic corner cabinet
  ],
  "wardrobe-accessories": [
    "photo-1595428774223-ef52624120d2", // clothes hanger rod
    "photo-1558882224-cca166733360", // trouser rack pullout
    "photo-1616486338812-3dadae4b4ace"  // tie and shoe organizers
  ],
  "bathroom-accessories": [
    "photo-1600566752355-35792bedcfea", // bathroom vanity setup
    "photo-1604014237800-1c9102c219da", // black towel ring and racks
    "photo-1617806118233-18e1db207f62"  // glass corner shelf
  ]
};

// Raw base list templates to feed the generator.
// Each category must have 25 to 35 items to ensure 300+ items total, satisfying 25-50 products per category.
const productTemplates: Record<string, { name: string; specs: Record<string, string>; finishes: string[]; features: string[]; applications: string[] }[]> = {
  glass: [
    {
      name: "Clear Float Glass",
      specs: { "Thickness": "3mm - 19mm", "Light Transmission": "90%", "Quality Grade": "Grade-A Clear" },
      finishes: ["Polished Flat Edge", "Beveled Edge", "Raw Cut"],
      features: ["Distortion-free flat surface", "High optical clarity", "Easily toughened or laminated"],
      applications: ["Windows and doors", "Tabletops", "Shelves", "Display cases"]
    },
    {
      name: "Ultra Clear Glass",
      specs: { "Thickness": "4mm - 19mm", "Light Transmission": "92%", "Iron Content": "Low Iron (<0.01%)" },
      finishes: ["Polished Edge", "Mitered Edge", "Etched Finish"],
      features: ["Pure crystalline appearance", "No green edge tint", "Maximum light transmission"],
      applications: ["Museum cases", "High-end glass furniture", "Storefront facades", "Aquariums"]
    },
    {
      name: "Tinted Glass",
      specs: { "Colors Available": "Bronze, Grey, Green, Blue", "Thickness": "4mm - 12mm", "UV Blockage": "Up to 80%" },
      finishes: ["Polished Edge", "Frosted Back", "Tempered"],
      features: ["Reduced glare", "Thermal heat reduction", "Sleek aesthetic appearance"],
      applications: ["Office partitions", "Exterior facades", "Automotive glass", "Balustrades"]
    },
    {
      name: "Reflective Glass",
      specs: { "Coating Type": "Online Pyrolytic / Offline Magnetron", "Reflectance": "15% - 40%", "Thickness": "5mm - 10mm" },
      finishes: ["Standard Temp", "Double Laminated"],
      features: ["One-way daytime privacy", "Superior solar heat rejection", "Dramatic metallic mirror look"],
      applications: ["Commercial building facades", "Skylights", "Office exterior windows"]
    },
    {
      name: "Toughened Glass",
      specs: { "Strength": "5x stronger than regular glass", "Thickness": "4mm - 19mm", "Certification": "IS 2553 Certified" },
      finishes: ["Flat Polished", "C-Edge", "Drilled Holes Included"],
      features: ["High thermal shock resistance", "Breaks into small blunt granules", "Exceptional impact resistance"],
      applications: ["Glass doors", "Shower enclosures", "Glass partitions", "Staircase balustrades"]
    },
    {
      name: "Laminated Glass",
      specs: { "PVB Thickness": "0.38mm - 1.52mm", "Total Thickness": "6.38mm - 39mm", "Sound Insulation": "STC 38dB" },
      finishes: ["Polished Edge", "Opaque PVB Interlayer", "Colored PVB"],
      features: ["Holds shards together if broken", "High acoustic sound damping", "99% UV radiation block"],
      applications: ["Security windows", "Glass skylights", "Floor panels", "Anti-burglar glass doors"]
    },
    {
      name: "Frosted Glass",
      specs: { "Frosted Type": "Acid Etched / Sandblasted", "Opacity": "Adjustable (40% - 90%)", "Thickness": "4mm - 12mm" },
      finishes: ["Satin Finish", "Opal Frosted", "Pattern Frosted"],
      features: ["Uniform translucent look", "Fingerprint-resistant surface", "Excellent light diffusion"],
      applications: ["Shower cabins", "Office doors", "Privacy partitions", "Window treatments"]
    },
    {
      name: "Designer Glass",
      specs: { "Design Type": "Stained, Fused, Ribbed", "Thickness": "5mm - 12mm", "Custom Art": "Available on request" },
      finishes: ["Textured", "Stained Finish", "Fluted"],
      features: ["Unique bespoke appearance", "High visual texture", "Combines privacy with light entry"],
      applications: ["Feature walls", "Pooja room doors", "Luxury cabinet panels", "Hotel lobby partitions"]
    },
    {
      name: "Pattern Glass",
      specs: { "Patterns Available": "Fluted, Karatachi, Nashiji, Reeded", "Thickness": "4mm - 8mm" },
      finishes: ["Textured", "Frosted Highlighted"],
      features: ["Classic architectural patterns", "Distorts background views", "Soft lighting effect"],
      applications: ["Cabinet doors", "Partition dividers", "Interior windows", "Shower screens"]
    },
    {
      name: "Acid Etched Glass",
      specs: { "Finish Grade": "Fine Satin / Velvet Matte", "Thickness": "4mm - 15mm" },
      finishes: ["Satin Frosted", "Mirror Acid Etched"],
      features: ["Ultra-smooth finish", "Scratches are less visible", "Resistant to moisture and steam"],
      applications: ["Bathroom partitions", "Kitchen backsplashes", "Tabletops", "Office screens"]
    },
    {
      name: "Beveled Glass",
      specs: { "Bevel Width": "10mm - 40mm", "Glass Thickness": "5mm - 12mm", "Edge Polish": "High gloss prism" },
      finishes: ["High Gloss Bevel", "Frosted Bordered"],
      features: ["Prism light-refraction effect", "Elegant decorative border", "Adds depth to mirror installations"],
      applications: ["Table tops", "Premium wall mirrors", "Entrance door inserts", "Decorative windows"]
    },
    {
      name: "Decorative Glass Panels",
      specs: { "Core Material": "Grade-A Glass", "Technique": "Fabric Sandwich / Mesh Insert" },
      finishes: ["High Gloss Surface", "Gold-Mesh Interlaid", "Silk Fabric Interlaid"],
      features: ["Luxury mesh pattern inside", "Enhanced structural stability", "Highly artistic refraction"],
      applications: ["Luxury partition walls", "Bed headboards", "Bar counters", "Reception desks"]
    },
    {
      name: "Mirror Glass",
      specs: { "Silver Coating": "Double-coated copper free", "Thickness": "3mm - 6mm", "Base": "Ultra Clear Float" },
      finishes: ["Polished Edge", "Beveled Edge", "Antique Silver"],
      features: ["Distortion-free true reflection", "Humidity and corrosion resistant", "Safety backing available"],
      applications: ["Wardrobe doors", "Wall panel mirrors", "Vanity zones", "Gym wall installations"]
    },
    {
      name: "One Way Mirror",
      specs: { "Reflective Ratio": "70% reflection, 12% transmission", "Thickness": "6mm" },
      finishes: ["Polished Edge", "Laminated Security"],
      features: ["High reflectivity on bright side", "Observation transparency from dark side", "Sleek surveillance capability"],
      applications: ["Interrogation rooms", "Smart mirror displays", "Security booths", "Office observation panels"]
    },
    {
      name: "LED Smart Mirror",
      specs: { "LED Color Temp": "3000K / 4500K / 6000K", "Sensors": "Touch switch, Defogger, Clock", "IP Rating": "IP44 Waterproof" },
      finishes: ["Frosted LED border", "Beveled with LED glow"],
      features: ["Anti-fog heated pad", "Dimmable touch sensor", "High CRI lighting for makeup"],
      applications: ["Luxury master bathrooms", "Vanity dressing tables", "Hotel washrooms", "Spas"]
    },
    {
      name: "Bathroom Mirror",
      specs: { "Corrosion Rating": "High Humidity Resistant", "Thickness": "5mm - 6mm", "Backing": "Eco-friendly Silvering" },
      finishes: ["Polished C-Edge", "Beveled Border", "Framed Options"],
      features: ["Black-spot prevention technology", "Longer lifespan in humid climates", "Clear reflections in steam"],
      applications: ["Washrooms", "Powder rooms", "Above-sink vanity areas"]
    },
    {
      name: "Wall Mirror Panels",
      specs: { "Installation": "Glue-on / Bracket Mounted", "Thickness": "5mm - 6mm", "Shapes": "Custom Grid Layout" },
      finishes: ["Bronze Mirror", "Grey Mirror", "Ultra Clear Mirror"],
      features: ["Increases perceived room space", "Elegant wall layout grids", "Premium bevel borders"],
      applications: ["Living room walls", "Hotel lobbies", "Dining rooms", "Showroom walls"]
    },
    {
      name: "Shower Glass Screen",
      specs: { "Glass Type": "Toughened Easy-Clean", "Thickness": "8mm - 12mm", "Hardware Compatibility": "Brass / SS" },
      finishes: ["Nano Enduro-Shield Coating", "Frosted Privacy Band"],
      features: ["Water-repellent nanotech coating", "High resistance to lime scaling", "Grade-A tempered safety"],
      applications: ["Walk-in shower cubicles", "Bathtub splash screens", "Sauna chambers"]
    },
    {
      name: "Office Glass Partitions",
      specs: { "Acoustics": "STC 42dB", "Thickness": "10mm - 12.7mm", "Type": "Frameless/Aluminium Profiled" },
      finishes: ["Acoustic Laminated", "Acid Etched Pattern"],
      features: ["Excellent sound isolation", "Sleek frameless design profile", "Allows natural daylight pass"],
      applications: ["Conference rooms", "Executive cabins", "Office cubicle dividers"]
    },
    {
      name: "Balcony Glass Balustrade",
      specs: { "Safety Standard": "Laminated Toughened SGP", "Thickness": "12.76mm - 21.52mm" },
      finishes: ["Polished Edge", "Tinted Grey PVB"],
      features: ["SentryGlas extra stiff interlayer", "Resists strong wind loads", "Unobstructed panoramic view"],
      applications: ["High-rise balcony railings", "Rooftop terrace barriers", "Patio dividers"]
    },
    {
      name: "Staircase Glass Panel",
      specs: { "Glass Grade": "Toughened Laminated", "Bolt Holes": "Precision Waterjet Cut", "Thickness": "12mm - 19mm" },
      finishes: ["Beveled Corners", "Polished Edges"],
      features: ["High load-bearing capacity", "Sleek point-supported brackets", "Modern luxurious design"],
      applications: ["Spiral staircase railings", "Commercial lobby stairs", "Residential villa stairs"]
    },
    {
      name: "Frameless Glass Railings",
      specs: { "Fixing Type": "Spigot / Base Channel / Standoff", "Thickness": "12mm - 15mm" },
      finishes: ["Ultra Clear Polished", "Tinted Bronze"],
      features: ["Zero visual blockages", "Ultra-safe thick tempered structure", "Weatherproof fixing system"],
      applications: ["Swimming pool fencing", "Terrace walkways", "Malls atrium railings"]
    },
    {
      name: "Sliding Glass Partition",
      specs: { "Track Mechanism": "Heavy-duty top hung", "Thickness": "10mm - 12mm", "Weight Limit": "120kg per panel" },
      finishes: ["Clear Tempered", "Frosted Decals"],
      features: ["Smooth noise-free rollers", "Soft-close damping mechanism", "Saves space compared to swing doors"],
      applications: ["Living-dining division", "Master suite partitions", "Retail storefront dividers"]
    },
    {
      name: "Kitchen Glass Splashboard",
      specs: { "Heat Resistance": "Up to 280°C", "Thickness": "6mm Toughened", "Back-Coating": "Dual Bake Paint" },
      finishes: ["Metallic Back Painted", "Solid Color Painted"],
      features: ["Grout-free easy clean surface", "High heat-shield properties", "Custom socket cutouts available"],
      applications: ["Kitchen hob backsplash", "Pantry walls", "Cabinet interior backing"]
    },
    {
      name: "Back Painted Glass",
      specs: { "Colors": "RAL Catalog Shades", "Thickness": "4mm - 10mm", "Paint Grade": "VOC-free polyurethane paint" },
      finishes: ["Ultra Glossy", "Satin Matte Back-painted"],
      features: ["Opaque luxurious colored surface", "Fades resistant paint layer", "Scratch-resistant face"],
      applications: ["Writing boards", "Wall paneling", "Wardrobe shutters", "Tabletops"]
    },
    {
      name: "Digital Printed Glass",
      specs: { "Resolution": "1440 DPI Inkjet", "Inks": "Ceramic Frit Heated", "Thickness": "6mm - 12mm" },
      finishes: ["Gloss Print", "Frost Print Overlay"],
      features: ["Permanent ceramic ink fusion", "Weather and UV proof print", "Unlimited design customization"],
      applications: ["Building facade art", "Custom shower walls", "Feature mural panels"]
    },
    {
      name: "Colored Laminated Glass",
      specs: { "Interlayers": "Vanceva Color System", "Thickness": "8.76mm - 17.52mm" },
      finishes: ["Polished Edges", "Semi-Translucent Colors"],
      features: ["Stunning dynamic color effects", "Blocks 99% UV radiation", "Accents spaces with colored shadows"],
      applications: ["Atrium skylights", "Canopies", "Aesthetic partition walls"]
    },
    {
      name: "Table Top Glass Pane",
      specs: { "Thickness": "6mm - 19mm", "Edge Treatment": "OG Edge / Triple Pencil Polish" },
      finishes: ["Pencil Polish", "OG Edge bevel", "Flat polished"],
      features: ["High load rating", "Tempered for thermal coffee cups", "Protects underlying wood veneers"],
      applications: ["Conference tables", "Coffee tables", "Dining tables", "Executive desks"]
    },
    {
      name: "Office Cabin Glass",
      specs: { "Sound Insulation": "STC 40dB", "Thickness": "10mm / 12mm Double Glazed" },
      finishes: ["Clear Double Glazed", "Smart Switchable Film"],
      features: ["High privacy level", "Sleek soundproofing seals", "Matches executive layouts"],
      applications: ["CEO offices", "Board rooms", "Private call pods"]
    },
    {
      name: "Safety Laminated Glass",
      specs: { "PVB Grade": "Bullet resistant / Blast resistant", "Thickness": "19mm - 50mm" },
      finishes: ["Heavy Polished", "Multi-layered Sandwich"],
      features: ["Multi-layer ballistic protection", "Withstands physical impact forces", "High security locking compatibility"],
      applications: ["Jewelry showrooms", "Bank tellers", "VIP residential windows"]
    },
    {
      name: "Fire Resistant Glass",
      specs: { "Fire Rating": "E-30 / EI-60 / EI-120 Mins", "Thickness": "15mm - 25mm", "Gel Layer": "Intumescent gel" },
      finishes: ["Standard transparent pane"],
      features: ["Expands to form solid heat barrier", "Blocks heat transfer and smoke", "Complies with national fire codes"],
      applications: ["Server rooms", "Stairwell escape doors", "Lift lobby partitions"]
    },
    {
      name: "Smart Switchable Glass",
      specs: { "Response Time": "< 100ms", "State Change": "Opaque (OFF) to Clear (ON)", "Voltage": "48V AC" },
      finishes: ["Laminated Smart Film", "Double Glazed Smart Unit"],
      features: ["Instant privacy control", "Remote and voice integration compatible", "Blocks heat and glare"],
      applications: ["Luxury clinic cabinets", "Hotel bathrooms", "Executive conference walls"]
    },
    {
      name: "Curved Toughened Glass",
      specs: { "Max Bending Angle": "Up to 90 degrees", "Thickness": "6mm - 15mm", "Radius": "Min 1000mm" },
      finishes: ["Polished Edge Curved"],
      features: ["Smooth circular structures", "High structural strength", "Stunning architecture flow"],
      applications: ["Curved building facades", "Circular staircases", "Rotating glass booths"]
    },
    {
      name: "Skylight Glass Panel",
      specs: { "U-Value": "1.8 W/m²K", "Glass Make": "Toughened + Laminated Double Glazed" },
      finishes: ["Low-E Coated", "Self-Cleaning Ceramic Coating"],
      features: ["Self-cleaning organic coating", "Withstands hail impact", "Restricts UV & Solar Heat gain"],
      applications: ["Villa atrium roof", "Commercial canopy", "Sunroom roofing"]
    },
    {
      name: "Facade Glazing Glass",
      specs: { "Structure": "DGU (Double Glazed Unit)", "Spacer": "12mm Argon filled", "U-Value": "1.2 W/m²K" },
      finishes: ["Low-E coated reflective", "Ceramic Frit Printed"],
      features: ["Excellent acoustic insulation", "Superb energy savings", "Reduces HVAC operating costs"],
      applications: ["High-rise curtain walls", "Commercial malls facade", "Hotel entrance elevations"]
    }
  ],
  doors: [
    {
      name: "Solid Core Flush Door",
      specs: { "Core Material": "Pine Wood blockboard fill", "Thickness": "30mm - 40mm", "Veneer Grade": "A-Grade Hardwood Face" },
      finishes: ["Raw Masonite", "Veneer Faced", "Laminated Faced"],
      features: ["Termite & borer proof treated", "High structural stability", "High screw-holding capacity"],
      applications: ["Main doors", "Bedroom entryways", "Office cabin doors"]
    },
    {
      name: "Premium Teak Wood Door",
      specs: { "Material": "100% Solid Burma Teak Wood", "Moisture Content": "8% - 12% Kiln Seasoned", "Thickness": "40mm - 45mm" },
      finishes: ["Melamine Polish Gloss", "Matte PU Polish", "Teak Natural Oil"],
      features: ["Traditional hand-carved panels", "Extreme durability against weathering", "Natural beautiful wood grains"],
      applications: ["Luxury villa main doors", "Main temple entrances", "Elite penthouse entrances"]
    },
    {
      name: "Premium Designer Door",
      specs: { "Core": "Seasoned hardwood block board", "Inlay": "SS 304 Metallic strips", "Thickness": "35mm - 38mm" },
      finishes: ["High Gloss Walnut PU", "Dual Tone Veneer Finish"],
      features: ["Contemporary geometric designs", "Embedded metallic inlay design", "No wrapping or warping design"],
      applications: ["Master bedrooms", "Conference room entrance", "Luxury apartment entrance"]
    },
    {
      name: "Waterproof WPC Door",
      specs: { "Composition": "Wood Plastic Composite (70% PVC, 30% wood fiber)", "Density": "0.9 g/cm³", "Thickness": "30mm" },
      finishes: ["Solid Paintable Matte", "PVC Film Laminated"],
      features: ["100% waterproof & damp proof", "Completely fire retardant", "Zero expansion in wet conditions"],
      applications: ["Bathrooms", "Utility rooms", "Coastal area projects", "Kitchen wet zones"]
    },
    {
      name: "Modern Veneer Faced Door",
      specs: { "Veneer Type": "Natural Oak / Walnut / Engineered Teak", "Core": "Pine wood block filler" },
      finishes: ["PU Matt Lacquer", "Veneer Sanded Raw"],
      features: ["Luxury premium touch and feel", "Excellent heat insulation", "Matches wood wall paneling"],
      applications: ["Corporate offices", "Master bedroom suites", "Hotel guest rooms"]
    },
    {
      name: "Bedroom Laminated Door",
      specs: { "Laminate Thickness": "1mm High Pressure Laminate", "Door Thickness": "32mm - 35mm" },
      finishes: ["Textured Woodgrain", "Matte Solid Color"],
      features: ["Scratch-resistant laminate surface", "Easy to wipe clean", "Requires zero polishing post-install"],
      applications: ["Kids bedrooms", "Hotel room doors", "Rental property entries"]
    },
    {
      name: "Office Glass Panel Door",
      specs: { "Frame": "Anodized Aluminum / Solid Wood", "Glass": "8mm Toughened Clear" },
      finishes: ["Black Powder-coated Frame", "Anodized Silver Frame"],
      features: ["Sleek structural design", "Permits maximum ambient light", "Premium patch lock compatibility"],
      applications: ["Office cabins", "Conference rooms", "Modern study rooms"]
    },
    {
      name: "Fire Rated Metal Door",
      specs: { "Fire Rating": "60 / 120 Mins", "Infill": "Honeycomb / Rockwool board", "Shell": "Galvanized steel sheets" },
      finishes: ["RAL Color Powder Coated", "Woodgrain Heat Transfer Print"],
      features: ["Tested to withstand high temps", "Smoke-seal perimeter gasket", "Heavy duty panic bar compatible"],
      applications: ["Emergency fire exits", "Commercial stairwells", "Server rooms", "Electrical rooms"]
    },
    {
      name: "French Wooden Door",
      specs: { "Wood Type": "White Oak / Mahogany", "Glass": "6mm Tempered Beveled Double Glazed" },
      finishes: ["White Primer Coat", "PU Polish Mahogany"],
      features: ["Classic multi-lite glass pane layout", "Creates bright airy spaces", "Dual weather stripping seals"],
      applications: ["Patio entries", "Dining room divider", "Garden overlooking doors"]
    },
    {
      name: "Sliding Barn Wooden Door",
      specs: { "Core": "Solid Pine", "Track Hardware": "Heavy duty black carbon steel" },
      finishes: ["Distressed Oak Stain", "Charcoal Painted Matt"],
      features: ["Saves floor space footprint", "Rustic yet modern design aesthetic", "Includes soft stop tracks"],
      applications: ["Walk-in closets", "Master bathroom entries", "Pantry rooms"]
    },
    {
      name: "Pivot Entry Wood Door",
      specs: { "Hardware": "Heavy-duty bottom pivot hinge", "Width": "Up to 1500mm", "Thickness": "50mm" },
      finishes: ["Melamine Charcoal Walnut", "Teak Natural Oil"],
      features: ["Ultra-wide grand entryway", "Offset pivot rotating axis", "Built-in door closer & wind brake"],
      applications: ["Villa grand entrances", "Modern retail flagship entry", "Aesthetic office entry"]
    },
    {
      name: "PVC Waterproof Toilet Door",
      specs: { "Material": "Rigid PVC Profile Sheets", "Frame": "PVC hollow frame", "Thickness": "24mm" },
      finishes: ["Woodgrain Printed Film", "Ivory White"],
      features: ["Zero rot or mold growth", "Extremely lightweight structure", "Very low maintenance"],
      applications: ["Public restroom cabins", "Utility storage doors", "Staff bathrooms"]
    },
    {
      name: "UPVC Sliding Glass Door",
      specs: { "Profile": "Multi-chambered UPVC", "Reinforcement": "Galvanized Steel Core", "Glass": "DGU 20mm" },
      finishes: ["White Profile", "Golden Oak Laminate Profile"],
      features: ["High wind-load resistance", "Excellent sound insulation", "Completely dust-proof seals"],
      applications: ["Balcony sliders", "Patio exit doors", "Terrace partitions"]
    },
    {
      name: "Membrane Molded Door",
      specs: { "Core": "HDF molded skin", "Veneer layer": "PVC Foil Vacuum Pressed", "Thickness": "32mm" },
      finishes: ["Teak Textured Foil", "Sapeli Wood Foil"],
      features: ["3D molded panel details", "Moisture resistant foil surface", "No paint or polish required"],
      applications: ["Residential bedrooms", "Apartment interior doors"]
    },
    {
      name: "Classic Panel Wooden Door",
      specs: { "Composition": "Solid Red Meranti Wood", "Structure": "Stile and Rail with floating panels" },
      finishes: ["Semi-gloss PU Polish", "Walnut Hand-Stained"],
      features: ["Traditional panel construction", "Natural expansion accommodation", "Stately residential look"],
      applications: ["Main house doors", "Living room entries", "Study rooms"]
    },
    {
      name: "Double Entry Teak Door Set",
      specs: { "Material": "Grade-A Indian Teak Wood", "Width": "1800mm - 2100mm Combined" },
      finishes: ["Melamine High Gloss", "Royal PU Polish Gold Accents"],
      features: ["Grand symmetric panels", "High-security lockset compatibility", "Intricate traditional carvings"],
      applications: ["Estate main gates", "Villa entrance lobby"]
    },
    {
      name: "Engineering Core Door",
      specs: { "Core": "LVL (Laminated Veneer Lumber)", "Shell": "HDF Skins with crossband veneers" },
      finishes: ["Sapele Veneer", "Red Oak Veneer PU Matt"],
      features: ["Zero expansion or shrinkage", "Flat surface guarantee", "Acoustically superior density"],
      applications: ["Hotel room main doors", "High-end apartment entries"]
    },
    {
      name: "Decorative Moulded HDF Door",
      specs: { "Skin Density": "950 kg/m³ HDF", "Core": "Tubular Chipboard fill" },
      finishes: ["White Primed", "Laminated Walnut Pattern"],
      features: ["Excellent impact resistance", "Reduces hollow drum noise", "Environmentally sustainable wood source"],
      applications: ["Budget housing projects", "Hotel corridor rooms"]
    },
    {
      name: "Glass Infill Panel Wood Door",
      specs: { "Frame": "Seasoned Hardwood frame", "Glass": "6mm Satin Frosted Tempered" },
      finishes: ["Teak PU Polish", "White Satin Lacquer"],
      features: ["Allows hallway light pass", "Assures privacy through frost", "Sturdy frame design"],
      applications: ["Kitchen doors", "Home offices", "Corridor divisions"]
    },
    {
      name: "Barn Glass Sliding Door",
      specs: { "Frame": "Powder coated black carbon steel", "Glass": "8mm Fluted Tempered Glass" },
      finishes: ["Matte Black Metal Frame"],
      features: ["Industrial loft aesthetic", "Fluted glass gives light & privacy", "Soft close dampers on track"],
      applications: ["En-suite bathrooms", "Living room dividers", "Dining partition doors"]
    },
    {
      name: "Acoustic Proof Studio Door",
      specs: { "Core": "Sound damping multi-layered insulation", "Acoustic Rating": "STC 48dB", "Thickness": "55mm" },
      finishes: ["Veneered Oak PU Matt", "Soundproof Fabric clad"],
      features: ["Heavy magnetic seals on frame", "Drop-down automatic bottom seal", "Stops low-frequency bass leak"],
      applications: ["Home theaters", "Recording studios", "Executive boardrooms"]
    },
    {
      name: "Compact Laminated Door",
      specs: { "Core": "Solid Phenolic Core", "Thickness": "12mm - 18mm", "Hardware": "SS 304 Gravity hinges" },
      finishes: ["Textured Matte Gray", "Woodgrain Compact Panel"],
      features: ["100% moisture and chemical proof", "High impact proof core", "Perfect for high-traffic zones"],
      applications: ["Public restroom cubicles", "Gym change rooms", "Laboratory entryways"]
    },
    {
      name: "Main Entrance Smart Door",
      specs: { "Core": "Multi-point locking steel armor core", "Face": "Weatherproof wood veneer overlay" },
      finishes: ["Dark Walnut PU Weather-Shield", "Brushed Bronze accents"],
      features: ["Pre-installed smart lock channel", "Concealed heavy duty hinges", "Reinforced steel security core"],
      applications: ["Luxury villas", "Jewelry vaults", "Private apartments"]
    },
    {
      name: "Modern Flush White Door",
      specs: { "Skin": "Pre-laminated White Gloss Polypropylene", "Core": "Hardwood solid frame" },
      finishes: ["Pure White Gloss", "Matte White Textured"],
      features: ["Ultra-clean minimalist look", "Yellowing-resistant coating", "Easy to clean oil stains"],
      applications: ["Modern apartments", "Hospitals", "Dental clinics"]
    },
    {
      name: "Laminated Office Cabin Door",
      specs: { "Core": "Pine wood blockboard fill", "Skin": "1mm Anti-fingerprint laminate" },
      finishes: ["Charcoal Anti-fingerprint Matte", "Teak Texture"],
      features: ["No finger smudge marks", "Extremely flat clean surface", "Requires zero maintenance"],
      applications: ["Executive cabins", "Meeting rooms", "IT offices"]
    },
    {
      name: "Decorative Curved Panel Door",
      specs: { "Design": "CNC Routed wave patterns", "Core": "Solid core pine board" },
      finishes: ["Gold Leaf detailing PU Matt", "Walnut PU Gloss"],
      features: ["Premium CNC routed artwork", "High visual texture", "Symmetrical classic panels"],
      applications: ["Pooja rooms", "Master bedrooms", "Home libraries"]
    },
    {
      name: "Engineered Solid Wood Door",
      specs: { "Material": "Engineered multi-ply solid hardwood", "Thickness": "40mm" },
      finishes: ["Oak Matte PU", "Walnut Matte PU"],
      features: ["Resists climate wrapping", "Solid wood feel and weight", "Pre-mortised for locksets"],
      applications: ["High-end villa internal doors", "Penthouse bedrooms"]
    },
    {
      name: "Double Leaf French Wood Door Set",
      specs: { "Material": "White Ash Wood", "Glass": "6mm Tempered Beveled" },
      finishes: ["White PU Paint Semi-Gloss", "Sanded Raw Ash"],
      features: ["Double door opening", "Brass bolt mechanisms pre-fitted", "Classic European look"],
      applications: ["Dining room balcony entrances", "Luxury drawing room doors"]
    },
    {
      name: "Pivot Solid Oak Entrance Door",
      specs: { "Material": "Solid White Oak engineered panel", "Height": "2400mm - 3000mm" },
      finishes: ["Oak natural oil", "Dark Oak charcoal glaze"],
      features: ["Grand height option", "Pivot hardware holds up to 250kg", "Double weather seals"],
      applications: ["Architectural villa entrances", "Exclusive resort entries"]
    },
    {
      name: "WPC Toilet Door Frame & Shutters",
      specs: { "Composition": "WPC Solid extrusion", "Thickness": "35mm" },
      finishes: ["Beige White Matte", "Teak Foil Laminated"],
      features: ["Termite and moisture immune", "Includes matching WPC frame", "Ready to install hinges"],
      applications: ["Home bathrooms", "Hotel rest zones", "Hostels"]
    }
  ],
  plywood: [
    {
      name: "Commercial Plywood (IS:303 MR)",
      specs: { "Standard": "IS:303 MR Grade", "Core Wood": "Seasoned Eucalyptus & Poplar", "Glue": "Urea Formaldehyde" },
      finishes: ["Sanded smooth face", "Raw face"],
      features: ["Moisture resistant", "High density core", "Borer and termite treated"],
      applications: ["Home furniture", "Ceiling paneling", "Wall partitioning", "Packaging boxes"]
    },
    {
      name: "Marine Plywood (IS:710 BWP)",
      specs: { "Standard": "IS:710 BWP Grade", "Core Wood": "100% Gurjan Hardwood", "Glue": "Phenol Formaldehyde Resin" },
      finishes: ["Calibrated smooth face", "Uncalibrated raw"],
      features: ["100% boiling waterproof", "Stands 72 hours boiling test", "High density structural timber"],
      applications: ["Kitchen cabinets", "Bathroom vanities", "Boat building", "Exposed balcony paneling"]
    },
    {
      name: "BWP Plywood",
      specs: { "Standard": "IS:13902 Certified", "Thickness": "19mm, 16mm, 12mm, 9mm, 6mm" },
      finishes: ["Calibrated smooth both sides"],
      features: ["Boiling water proof core", "Borer proof guarantee for 15 years", "Uniform thickness calibration"],
      applications: ["Kitchen cabinets", "Modular kitchen units", "Dining tables"]
    },
    {
      name: "BWR Plywood",
      specs: { "Standard": "IS:303 BWR Grade", "Wood species": "Eucalyptus & Pine blend" },
      finishes: ["Sanded face"],
      features: ["Boiling water resistant glue line", "Highly resistant to weather humidity", "No hollow spaces inside"],
      applications: ["Living room wardrobes", "Office office desks", "Wall panel backings"]
    },
    {
      name: "Waterproof Gurjan Plywood",
      specs: { "Core wood": "100% Imported Gurjan Hardwood", "Standard": "IS:710 Certified" },
      finishes: ["Super-calibrated veneer finish"],
      features: ["Heavy density structure", "Resists borer & termite attack", "High load-bearing capacity"],
      applications: ["Luxury home kitchens", "Bathroom ceilings", "Heavy load wardrobe shelves"]
    },
    {
      name: "Flexible Plywood",
      specs: { "Thickness": "4mm, 6mm, 8mm, 12mm", "Bending": "Long grain / Cross grain flex" },
      finishes: ["Raw ready to paint/veneer"],
      features: ["Bends into smooth curves without cracking", "Lightweight core wood", "Allows dramatic furniture curves"],
      applications: ["Circular reception desks", "Curved pillars", "Aesthetic dome ceilings", "Curved sofa frames"]
    },
    {
      name: "Decorative Plywood Veneer",
      specs: { "Face Veneer": "Natural Walnut / Oak / Ash (0.6mm thickness)", "Base Ply": "IS:303 Commercial Ply" },
      finishes: ["Unpolished Veneered Face"],
      features: ["Rich natural timber texture", "Unique grain flows", "Highly responsive to PU/Melamine polishing"],
      applications: ["Living room wall paneling", "Premium office doors", "Wardrobe exterior shutter face"]
    },
    {
      name: "Structural Plywood",
      specs: { "Standard": "IS:10701 Structural Grade", "Density": "850 kg/m³" },
      finishes: ["Heavy duty unsanded face"],
      features: ["Extreme structural load rating", "Minimal bending deflection", "Tested tensile strength"],
      applications: ["Industrial mezzanine floors", "Scaffolding platforms", "Concrete formwork framework"]
    },
    {
      name: "Imported Birch Plywood",
      specs: { "Origin": "Russian/Baltic Forest", "Grade": "S/BB, BB/BB", "Glue": "WBP Phenolic Glue" },
      finishes: ["Multi-ply exposed edge style", "Calibrated fine sanded"],
      features: ["Stunning multi-layered edge profile", "Ultra-flat sheets", "Screw-holding capacity up to 300kg"],
      applications: ["Modern architectural furniture", "Speaker cabinets", "CNC routing crafts", "Children toys"]
    },
    {
      name: "Hardwood Core Plywood",
      specs: { "Species": "Red Eucalyptus & Hardwood blend", "Glue": "Phenolic Resin" },
      finishes: ["Sanded Face"],
      features: ["High compression resistance", "No core gaps or overlapping veneers", "High impact resistance"],
      applications: ["Office office partition panels", "Study tables", "Bed bases"]
    },
    {
      name: "Softwood Plywood",
      specs: { "Species": "Seasoned Pine Wood", "Density": "550 kg/m³", "Glue": "MR Glue" },
      finishes: ["Sanded Face"],
      features: ["Lightweight and easy to cut", "Economical cost choice", "Smooth surface texture"],
      applications: ["Temporary event partition backings", "Ceiling tile backings", "Sofa inner structures"]
    },
    {
      name: "Film Faced Shuttering Plywood",
      specs: { "Film Weight": "120 GSM Phenolic Film", "Density": "800 kg/m³", "Standard": "IS:4990 Certified" },
      finishes: ["Mirror Finish Glossy Film"],
      features: ["High concrete repetition cycles (up to 30 times)", "Resists concrete alkaline attack", "Gives glossy concrete finish"],
      applications: ["Concrete formwork casting", "Bridge pillars construction", "Raft foundation framing"]
    },
    {
      name: "Furniture Grade Plywood",
      specs: { "Calibration": "±0.2mm variance", "Core": "100% seasoned wood cores" },
      finishes: ["Ultra smooth calibrated face"],
      features: ["Perfect thickness for automated edge banding", "High screw pull-out rating", "Smooth veneer face for direct laminate application"],
      applications: ["Modular wardrobes", "TV units", "Dressing tables", "Shoe racks"]
    },
    {
      name: "Cabinet Grade Plywood",
      specs: { "Glue Grade": "E0 Emission Standard (Low Formaldehyde)", "Core": "Eucalyptus and Pine" },
      finishes: ["Calibrated Face"],
      features: ["Safe for indoor air quality", "Zero gaps in inner plies", "Highly stable core for drawer construction"],
      applications: ["Kitchen cabinets", "Pantry drawers", "Bedroom cabinets"]
    },
    {
      name: "Interior Grade Plywood",
      specs: { "Standard": "IS:303 MR Grade", "Thickness": "6mm - 19mm" },
      finishes: ["Sanded smooth face"],
      features: ["Eco-friendly glue system", "High structural strength", "Perfect for dry interior spaces"],
      applications: ["Bed back panels", "Living room shelving", "Ceiling framing"]
    },
    {
      name: "Exterior Grade Plywood",
      specs: { "Standard": "IS:303 BWR Grade", "Wood": "Hardwood core" },
      finishes: ["Raw sanded face"],
      features: ["Withstands hot sun and rain showers", "No veneer splitting", "Borer and termite proofed"],
      applications: ["Balcony ceilings", "Outhouse doors", "Exterior signages", "Garden storage cupboards"]
    },
    {
      name: "Premium Gurjan Plywood",
      specs: { "Wood Source": "100% Gurjan Hardwood (Imported)", "Glue": "100% Phenol Formaldehyde" },
      finishes: ["Calibrated Gold Face"],
      features: ["Heaviest density plywood available", "Lifelong warranty against termites", "Excellent load bearing stability"],
      applications: ["Luxury dining tables", "Beds", "Kitchen structures", "Wardrobe framing"]
    },
    {
      name: "High Density Calibrated Plywood",
      specs: { "Calibration Tech": "Four-head wide belt sander calibrated", "Thickness tolerance": "±0.15mm" },
      finishes: ["Super flat calibrated"],
      features: ["Perfect flat surface for high gloss acrylics", "No wave effect on laminated furniture", "Excellent structural core"],
      applications: ["High gloss acrylic kitchens", "Luxury TV wall panels", "Executive desks"]
    },
    {
      name: "Moisture Resistant Poplar Plywood",
      specs: { "Core wood": "Poplar Wood", "Glue": "Premium MR Resin" },
      finishes: ["Sanded Poplar face"],
      features: ["Light weight", "Saves transport weight", "Easy to cut & screw"],
      applications: ["Sofa frames", "Ceiling panels", "Partition frames"]
    },
    {
      name: "Boiling Water Proof Pine Plywood",
      specs: { "Core": "Imported New Zealand Pine Wood", "Glue": "Phenolic resin BWP" },
      finishes: ["Calibrated Face"],
      features: ["Resists rotting and decay", "Uniform pine core density", "Termite repellent treated"],
      applications: ["Kitchen under sink units", "Balcony wall frames", "Bathroom wall cabinets"]
    },
    {
      name: "Premium Calibrated Plywood Elite",
      specs: { "Standard": "IS:710 Calibrated", "Glue": "E0 Emission Phenolic Resin" },
      finishes: ["Calibrated mirror flat face"],
      features: ["No laminate bubbles", "Zero core gap inside", "Lifetime borer guarantee"],
      applications: ["Luxury modular closets", "High-end cabinet shutters", "Premium dining furniture"]
    },
    {
      name: "Boiling Water Proof Hardwood Ply",
      specs: { "Core wood": "Red Hardwood", "Glue": "IS:710 Phenol Resin" },
      finishes: ["Sanded Red Face"],
      features: ["High structural load resistance", "Boiling waterproof for 72 hours", "Termite barrier treatment"],
      applications: ["Outdoor cabinetry", "Kitchen island frames", "Utility storage boxes"]
    },
    {
      name: "Aircraft Grade Birch Panel",
      specs: { "Standard": "MIL-P-5433 Certified", "Thickness": "1.5mm, 2mm, 3mm ultra thin" },
      finishes: ["Extremely smooth sanded face"],
      features: ["Ultra-thin sheet profile", "Exceptional bending flex, high strength", "Premium Baltic wood quality"],
      applications: ["Aircraft interiors", "Instrument casing", "Architectural model design", "Acoustic musical instruments"]
    },
    {
      name: "Sound-Insulating Core Plywood",
      specs: { "Core": "Multi-layer cork & rubber sandwich", "Sound Rating": "STC 44dB" },
      finishes: ["Sanded Birch face"],
      features: ["Blocks sound transmission", "Vibration damping layer inside", "Standard plywood handling"],
      applications: ["Home studio partitions", "Engine room covers", "Acoustic door cores"]
    },
    {
      name: "Decorative Veneered Blockboard",
      specs: { "Core": "Pine wood batten core", "Veneer Face": "Natural Teak 0.6mm" },
      finishes: ["Unpolished Veneer"],
      features: ["High stiffness, no warping", "Lightweight thick board alternative", "Natural teak timber look"],
      applications: ["Bookcase shelves", "Long study desks", "Wardrobe shutters"]
    },
    {
      name: "E0 Eco-Friendly Calibrated Ply",
      specs: { "Standard": "CARB Phase 2 compliant", "Glue": "Soy-based non-toxic glue" },
      finishes: ["Super Calibrated Sanded"],
      features: ["Zero formaldehyde emissions", "Completely safe for kids rooms", "uniform density core"],
      applications: ["Children beds", "School study tables", "Baby nursery furniture"]
    },
    {
      name: "Termite Defense Marine Ply",
      specs: { "Chemical treatment": "Pressure vacuum organic chemicals", "Standard": "IS:710 BWP" },
      finishes: ["Calibrated Face"],
      features: ["Guaranteed termite immune", "Withstands permanent soil contact", "Boiling waterproof"],
      applications: ["Base foundation panels", "Outdoor storage sheds", "Basement cabinets"]
    }
  ],
  boards: [
    {
      name: "Premium MDF Board",
      specs: { "Density": "750 kg/m³", "Emission": "E1 Class", "Core wood": "100% Hardwood fibers" },
      finishes: ["Unprocessed smooth matte", "Melamine faced"],
      features: ["Homogeneous fine texture core", "Sharp CNC carving results", "Perfect flat surface paint finish"],
      applications: ["CNC routed jali designs", "Cabinet doors", "Wall panels", "Display units"]
    },
    {
      name: "HDHMR Waterproof Board",
      specs: { "Density": "850+ kg/m³", "Thickness": "3mm - 25mm", "Standard": "Moisture Resistant" },
      finishes: ["Green core raw", "Pre-laminated texture"],
      features: ["High density moisture resistance", "No expansion in high humidity", "Best alternative to plywood for wardrobes"],
      applications: ["Modular kitchens", "Bathroom shelves", "Wardrobe shutters", "TV display cabinets"]
    },
    {
      name: "HDF Solid Board",
      specs: { "Density": "900+ kg/m³", "Thickness": "3mm - 12mm" },
      finishes: ["Sanded Raw face"],
      features: ["Ultra-high surface density", "Exceptional impact resistance", "Thin yet extremely strong profile"],
      applications: ["Laminate flooring base", "Door skins", "Cabinet backs", "Drawer bottoms"]
    },
    {
      name: "Premium Pine Block Board",
      specs: { "Core wood": "Seasoned Pine battens", "Standard": "IS:1659 Grade", "Thickness": "19mm, 25mm" },
      finishes: ["Sanded Pine face", "Veneer faced"],
      features: ["Resists sagging over long spans", "Very lightweight compared to MDF", "High load capacity"],
      applications: ["Long bookshelf shelves", "Dinning table tops", "Wardrobe shutters", "Study desks"]
    },
    {
      name: "Particle Board (Pre-Laminated)",
      specs: { "Density": "650 kg/m³", "Glue": "MR melamine resin", "Face": "Melamine decorative paper" },
      finishes: ["Matte Suede Finish", "Glossy White"],
      features: ["Cost-effective furniture core", "No paint/polishing needed", "Pre-finished surfaces ready to assemble"],
      applications: ["Office workstation tables", "Shoe racks", "Budget wardrobes", "Computer desks"]
    },
    {
      name: "Gypsum Plaster Board",
      specs: { "Standard": "IS:2095 Fire/Water resistant available", "Thickness": "12.5mm" },
      finishes: ["Paper faced raw ivory"],
      features: ["Excellent fire insulation", "Lightweight false ceiling panel", "Completely flat smooth drywall finishing"],
      applications: ["False ceilings", "Drywall partitions", "Soundproof panels"]
    },
    {
      name: "Fiber Cement Board",
      specs: { "Composition": "Portland cement + cellulose fibers", "Thickness": "6mm - 18mm", "Fire Rating": "Class A1 Incombustible" },
      finishes: ["Raw cement grey", "Textured wood planks"],
      features: ["Completely weather & termite proof", "High load structural floor rating", "Fireproof structural panel"],
      applications: ["Exterior wall cladding", "Wet area walls", "Mezzanine flooring base"]
    },
    {
      name: "OSB (Oriented Strand Board)",
      specs: { "Wood Species": "Pine strands", "Grade": "OSB-3 Structural Exterior" },
      finishes: ["Textured raw wood strands"],
      features: ["Excellent shear strength load", "High structural stiffness", "Water-resistant resin binder"],
      applications: ["Roof decking", "Wall sheathing", "Subfloors", "Eco furniture crates"]
    },
    {
      name: "PVC Foam Board (Premium)",
      specs: { "Density": "0.55 g/cm³ - 0.70 g/cm³", "Thickness": "5mm - 18mm" },
      finishes: ["Smooth semi-gloss white", "Custom color matte"],
      features: ["100% waterproof and termite proof", "Lightweight PVC core", "Easy to cut, router, heat bend"],
      applications: ["Bathroom vanity boxes", "Under-sink kitchen drawers", "Outdoor signage letters", "Exhibition stall designs"]
    },
    {
      name: "Acrylic Gloss Board",
      specs: { "Base Board": "HDHMR / MDF", "Face Sheet": "2mm High Gloss Acrylic Sheet" },
      finishes: ["Ultra High Gloss Mirror Finish", "Metallic Acrylic"],
      features: ["Scratch-resistant acrylic surface", "Stunning mirror reflection", "Color stays vibrant for years"],
      applications: ["Premium kitchen shutters", "Luxury wardrobe faces", "Bar counter facades"]
    },
    {
      name: "Compact Laminate Board",
      specs: { "Core": "Phenolic resin Kraft cores", "Thickness": "12mm" },
      finishes: ["Matte Charcoal", "Woodgrain Compact Face"],
      features: ["Extreme chemical and impact resistance", "Completely self-supporting thickness", "Waterproof and fire resistant"],
      applications: ["Toilet partitions", "Lab countertops", "Locker systems", "Outdoor dining tables"]
    },
    {
      name: "WPC Solid Board",
      specs: { "Wood fiber": "30%", "PVC": "70% base compound", "Density": "0.85 g/cm³" },
      finishes: ["Raw greyish beige", "Pre-laminated Teak"],
      features: ["Rot-proof and termite immune", "Can be screwed, nailed, sawed like wood", "Eco-friendly recyclable"],
      applications: ["Outhouse cabinets", "Exterior wall panels", "Wet room furniture"]
    },
    {
      name: "Wood Fiber Acoustic Board",
      specs: { "Core": "Cement-bonded wood wool strands", "Sound Absorption": "NRC 0.85" },
      finishes: ["Rough fiber textures", "Pre-painted white/black"],
      features: ["Superb sound absorption qualities", "Class-1 fire rating", "High thermal insulation"],
      applications: ["Home cinema walls", "Auditorium ceilings", "Gymnasium noise panels"]
    },
    {
      name: "Fire Shield Gypsum Board",
      specs: { "Core": "Fiberglass reinforced gypsum core", "Fire Rating": "Up to 2 hours structural protection" },
      finishes: ["Pink paper faced"],
      features: ["Retards fire progression", "Low thermal conductivity", "Standard drywall installation"],
      applications: ["Fire escape corridors", "Server room partition walls", "Kitchen ceilings"]
    },
    {
      name: "Moisture Shield HDHMR Board",
      specs: { "Base": "Eucalyptus fibers + moisture proof wax", "Density": "880 kg/m³" },
      finishes: ["Solid Green core raw"],
      features: ["Extremely low thickness swelling (<5% in water)", "High density screw pull rating", "Pre-treated for termites"],
      applications: ["Kitchen base modules", "Bathroom storage cabinets", "Shoe racks near entry"]
    },
    {
      name: "Pre-laminated MDF Board",
      specs: { "Laminate overlay": "Double-sided melamine resin paper", "Base": "Interior MDF" },
      finishes: ["Suede Finish Walnut", "Glossy White"],
      features: ["Scratch resistant finish", "Ready-to-use boards", "Matches modular layouts"],
      applications: ["Office desks", "Wardrobe internal shelves", "Bookcases"]
    },
    {
      name: "High-Density Exterior MDF",
      specs: { "Density": "900 kg/m³", "Glue": "Waterproof PU glue binder" },
      finishes: ["Exterior sand brown"],
      features: ["Withstands outdoor humidity, rain", "Perfect for exterior wall carvings", "Zero rotting"],
      applications: ["CNC exterior facade jali", "Exterior balcony cladding", "Garden decorative screens"]
    },
    {
      name: "Lightweight Block Board Elite",
      specs: { "Core": "Falcata / Albasia lightweight wood battens", "Weight": "40% lighter than standard wood" },
      finishes: ["Sanded veneer face"],
      features: ["Ultra lightweight construction", "High resistance to sag warping", "Ideal for sliding doors"],
      applications: ["Sliding wardrobe doors", "Caravan interior cabinets", "Yacht furniture frames"]
    },
    {
      name: "Premium Veneered MDF Board",
      specs: { "Core": "Exterior MDF 18mm", "Veneer Face": "Natural Teak Veneer 0.6mm" },
      finishes: ["Sanded Raw ready to PU polish"],
      features: ["Looks like solid timber panel", "Extremely flat, does not warp", "Easy to cut and join"],
      applications: ["Dining room wall cladding", "Office reception table facings", "Premium cabinet fronts"]
    },
    {
      name: "Soundproof Acoustic Board Panel",
      specs: { "Core": "Perforated MDF + black acoustic felt back", "Sound Absorption": "NRC 0.75" },
      finishes: ["Wood Veneered face", "Melamine Walnut face"],
      features: ["Controls room echo reverberation", "Modern perforated lines design", "Easy clip installation"],
      applications: ["Conference room walls", "Lecture hall walls", "Home music rooms"]
    },
    {
      name: "Waterproof PVC Foam Board Elite",
      specs: { "Density": "0.75 g/cm³ high density", "Thickness": "18mm" },
      finishes: ["Hard skin glossy white"],
      features: ["Ultra-hard surface skin, resists scratches", "100% moisture proof", "Excellent screw holding power"],
      applications: ["Luxury modular kitchen base drawers", "Outdoor laundry vanity boxes"]
    },
    {
      name: "Glass-Fiber Reinforced Gypsum Board",
      specs: { "Core": "High strength alpha gypsum + glass fibers" },
      finishes: ["Silky smooth raw face"],
      features: ["Extremely high tensile strength", "Impact resistant drywall surface", "Perfect curves possibility"],
      applications: ["Premium showroom walls", "Luxury shopping malls partitions"]
    },
    {
      name: "Compact Phenolic Core Board",
      specs: { "Core": "Black Solid Phenolic resin core", "Thickness": "18mm" },
      finishes: ["Stone Finish Grey", "Matte Black"],
      features: ["Heavy load countertop board", "100% water proof, scratch resistant", "Acid/Chemical repellent"],
      applications: ["Science labs", "Commercial kitchens", "Heavy duty industrial workbenches"]
    },
    {
      name: "Pre-laminated HDHMR Board Dual-Tone",
      specs: { "Base": "850 kg/m³ HDHMR", "Laminates": "Melamine dual colors front/back" },
      finishes: ["Textured Oak Front / White Suede Back"],
      features: ["Pre-finished dual sides", "Saves labor costs", "High moisture resistance"],
      applications: ["Kitchen cabinets", "Modular vanity drawers", "Display shelf setups"]
    },
    {
      name: "Eco-friendly Straw Board",
      specs: { "Composition": "Compressed agricultural straw fibers", "Binder": "Formaldehyde-free" },
      finishes: ["Raw straw texture"],
      features: ["100% bio-based material", "Excellent carbon-negative rating", "High sound insulation"],
      applications: ["Eco-friendly partition walls", "Green building furniture"]
    },
    {
      name: "Pre-laminated Particle Board Prime",
      specs: { "Core": "Graded wood particle chipboard", "Density": "680 kg/m³" },
      finishes: ["Suede Finish Light Ash", "Gloss White"],
      features: ["Uniform surface density", "Pre-finished melamine saves project time", "Screw pull out rated"],
      applications: ["Modular office desk workstations", "Store display racks"]
    },
    {
      name: "Flexible MDF Board Curve",
      specs: { "Thickness": "6mm", "Grooving": "CNC grooved back for bending" },
      finishes: ["Raw brown MDF"],
      features: ["Saves carpentry jali curving time", "Bends to a radius of 150mm", "Smooth face ready for veneers"],
      applications: ["Curved wall designs", "Reception desk columns", "Exhibition structures"]
    }
  ],
  laminates: [
    {
      name: "High Gloss Premium Laminate",
      specs: { "Thickness": "1.0mm", "Finish": "High Gloss Mirror Finish", "Brand": "Nesam Luxury Laminates" },
      finishes: ["Gloss Mirror", "High Gloss Metallic"],
      features: ["Stunning reflection surface", "Resistant to hot water spills", "Yellowing-resistant UV barrier"],
      applications: ["Kitchen cabinet fronts", "Living room wall paneling", "Wardrobe shutters"]
    },
    {
      name: "Matte Finish Laminate",
      specs: { "Thickness": "1.0mm", "Finish": "Satin Matte Zero Reflection" },
      finishes: ["Satin Matte", "Soft Touch Matte"],
      features: ["Scratch-resistant matte surface", "Zero light glare reflection", "Easy dust wipe clean"],
      applications: ["Office office desks", "Dining tables", "Wardrobe panels"]
    },
    {
      name: "Stone Finish Laminate",
      specs: { "Thickness": "1.2mm", "Texture": "Deep Slate Stone embossed" },
      finishes: ["Slate Texture", "Rough Concrete Finish"],
      features: ["3D textured stone appearance", "Very premium realistic stone feel", "High impact resistance"],
      applications: ["Kitchen backsplashes", "TV background walls", "Bar counter panels"]
    },
    {
      name: "Wood Finish Laminate",
      specs: { "Thickness": "1.0mm", "Texture": "Synchronized Woodgrain" },
      finishes: ["Synchronized Woodgrain", "Sawn Timber Matte"],
      features: ["Grains match the underlying texture", "Looks and feels like real seasoned timber", "Requires no varnish/polishing"],
      applications: ["Bedroom wardrobes", "Executive desks", "Main doors"]
    },
    {
      name: "Textured Decorative Laminate",
      specs: { "Thickness": "1.0mm", "Texture": "Woven Fabric / Raindrop / Geometric" },
      finishes: ["Woven Linen", "Raindrop texture", "Geometric Matte"],
      features: ["Unique textured patterns", "Hides scratches and smudges", "Adds tactile depth to spaces"],
      applications: ["Wardrobe interior panels", "Store display counters", "Bedroom drawers"]
    },
    {
      name: "Leather Finish Laminate",
      specs: { "Thickness": "1.2mm", "Texture": "Genuine Leather Embossed" },
      finishes: ["Royal Black Leather", "Tan Brown Leather"],
      features: ["Soft feel leather grain", "Extremely luxury look", "Hides dust and grease stains"],
      applications: ["Executive desk tops", "Luxury wardrobe doors", "Bed headboard panels"]
    },
    {
      name: "Acrylic Premium Laminate",
      specs: { "Thickness": "1.5mm - 2.0mm", "Core": "100% Solid Acrylic base" },
      finishes: ["High Gloss Acrylic Mirror", "Matte Acrylic"],
      features: ["Mirror glossy depth", "Non-toxic eco-friendly material", "Scratch-resistant PU coated surface"],
      applications: ["Premium modular kitchen cabinets", "Luxury bar cabinets", "Storefront displays"]
    },
    {
      name: "Designer Metallic Laminate",
      specs: { "Thickness": "1.0mm", "Face": "Real Brushed Aluminum / Copper foil" },
      finishes: ["Brushed Rose Gold", "Brushed Bronze", "Chrome Silver"],
      features: ["Real metallic surface texture", "Provides industrial look", "Anti-fingerprint metal coat"],
      applications: ["Column cladding", "Aesthetic elevator interior walls", "Reception desk accent panels"]
    },
    {
      name: "Marble Finish Laminate",
      specs: { "Thickness": "1.2mm", "Pattern": "Italian Statuario Marble Print" },
      finishes: ["High Gloss Marble", "Silk Matte Marble"],
      features: ["Stunning marble vein prints", "No joint lines like real stone slabs", "Stain and heat resistant"],
      applications: ["Dining countertops", "TV console backings", "Aesthetic partition walls"]
    },
    {
      name: "Abstract Decorative Laminate",
      specs: { "Thickness": "1.0mm", "Pattern": "Terrazzo / Geometric Art" },
      finishes: ["Terrazzo Matte", "Geometric Abstract"],
      features: ["Modern trendy patterns", "Vibrant artistic designs", "Color fade protection layer"],
      applications: ["Kids room cabinets", "Cafeteria table tops", "Creative agency desks"]
    },
    {
      name: "Concrete Finish Laminate",
      specs: { "Thickness": "1.2mm", "Texture": "Rough Cast Concrete" },
      finishes: ["Industrial Concrete Suede", "Polished Concrete Suede"],
      features: ["Trendy industrial warehouse look", "Tactile raw cement texture", "Scratch-resistant structure"],
      applications: ["Loft style wardrobes", "Cafe counters", "Office lobby desks"]
    },
    {
      name: "Digital Print Laminate",
      specs: { "Thickness": "1.0mm", "Pattern": "Custom HD Digital Image" },
      finishes: ["Gloss Print Face", "Matte Print Face"],
      features: ["High definition resolution graphics", "Scratch and UV fade resistant", "Custom designs accepted"],
      applications: ["Kids wardrobe door murals", "Showroom branding walls", "Restaurant menu backings"]
    },
    {
      name: "Fabric Finish Laminate",
      specs: { "Thickness": "1.0mm", "Texture": "Khadi Silk / Tweed Fabric" },
      finishes: ["Khadi Suede Finish", "Tweed Suede Finish"],
      features: ["Realistic textile weave texture", "Soft luxury look", "Warm feel compared to stone textures"],
      applications: ["Wardrobe inner organizers", "Bed frames", "Living room cabinets"]
    },
    {
      name: "Premium Decorative Laminate",
      specs: { "Thickness": "1.0mm", "Pattern": "Gold Foil Mesh / Glitter" },
      finishes: ["Gold Sparkle Glitter", "Bronze Mesh Textured"],
      features: ["Premium luxury glitter pigments", "Enhances ambient lighting glow", "Heavy wear-resistant overlay"],
      applications: ["Jewelry showcase backing", "Main entrance doors", "Nightclub bar walls"]
    },
    {
      name: "Kitchen Special Laminate",
      specs: { "Grade": "Postforming Grade", "Thickness": "0.8mm for bending" },
      finishes: ["Semi-gloss suede", "Satin Matte"],
      features: ["Easily bends over curved edges", "Stain-resistant to Indian spices", "Boiling water resistant"],
      applications: ["Laminated countertops", "Curved kitchen cabinet shutters", "Kitchen island corners"]
    },
    {
      name: "Wardrobe Premium Laminate",
      specs: { "Thickness": "1.0mm", "Design": "Linear Woodgrains" },
      finishes: ["Teak Woodgrain Matte", "Walnut Woodgrain Matte"],
      features: ["Vertical grain alignment", "Fade-proof print technology", "Hides fingerprint oils"],
      applications: ["Full height sliding wardrobes", "Walk-in closets"]
    },
    {
      name: "Exterior Compact Clad Laminate",
      specs: { "Thickness": "6mm", "UV Protection": "Double hardened acrylic layer" },
      finishes: ["Woodgrain Matte Exterior", "Stone Finish Suede"],
      features: ["Completely weatherproof outdoor grade", "Anti-graffiti surface protection", "UV fade protection for 10 years"],
      applications: ["Building facade cladding", "Balcony wall claddings", "Outdoor ceiling sheets"]
    },
    {
      name: "Compact Partition Laminate",
      specs: { "Thickness": "12mm Solid Core", "Density": "1400 kg/m³" },
      finishes: ["Solid Charcoal Suede", "Woodgrain Matte"],
      features: ["Heavy solid core panel", "Waterproof and impact proof", "Self-supporting thickness"],
      applications: ["Public restroom cubicles", "Gym changing lockers", "Shower partitions"]
    },
    {
      name: "Anti-Fingerprint Matte Laminate",
      specs: { "Thickness": "1.0mm", "Technology": "Electron Beam Cured (EBC)" },
      finishes: ["Zero-reflect Ultra Matte Black", "Matte Grey / Matte White"],
      features: ["Absolutely no fingerprint marks left", "Thermal micro-scratch healing", "Super soft touch"],
      applications: ["Luxury kitchen shutters", "Executive meeting tables", "TV cabinets"]
    },
    {
      name: "Brushed Gold Metallic Laminate",
      specs: { "Thickness": "1.0mm", "Base": "Real aluminum metal sheet" },
      finishes: ["Brushed Brass Gold", "Polished Gold Mirror"],
      features: ["True metallic gold luster", "No color tarnishing", "Classy luxury accent look"],
      applications: ["Hotel lobbies decoration", "Bar counter frontages", "Exhibition signboards"]
    },
    {
      name: "Charcoal Suede Laminate",
      specs: { "Thickness": "1.0mm", "Texture": "Fine Suede Leather feel" },
      finishes: ["Charcoal Black Suede", "Dark Slate Suede"],
      features: ["Warm tactile suede texture", "Resists scratches", "Sophisticated dark design tone"],
      applications: ["Study room wardrobes", "Office office bookshelves"]
    },
    {
      name: "Synchronized Woodgrain Laminate",
      specs: { "Thickness": "1.2mm", "Texture": "True-match timber grain pores" },
      finishes: ["Walnut Synchronized Matte", "Oak Synchronized Matte"],
      features: ["Grains match surface grooves perfectly", "Indistinguishable from natural wood veneer", "Resistant to scratches"],
      applications: ["Premium office partition desks", "Veneer look bedroom wardrobes"]
    },
    {
      name: "Postforming Kitchen Grade Laminate",
      specs: { "Thickness": "0.8mm", "Bending Radius": "Min 10mm" },
      finishes: ["Satin Matte White", "Beige Granite texture"],
      features: ["Bends seamlessly over drawer edges", "No sharp joints or edge bands", "High chemical resistance"],
      applications: ["Modern kitchen countertops", "Table edge profiles"]
    },
    {
      name: "Scratch-Resistant Acrylic Laminate",
      specs: { "Thickness": "1.2mm", "Scratch Resistance": "6H Pencil Hardness" },
      finishes: ["High Gloss Acrylic Mirror", "Ultra Matte Anti-scratch"],
      features: ["Highly resistant to scrub wear", "Glass-like mirror finish", "Color lock UV core"],
      applications: ["Living room TV consoles", "Luxury wardrobe shutters"]
    },
    {
      name: "Anti-Bacterial Wardrobe Laminate",
      specs: { "Thickness": "1.0mm", "Sanitary Grade": "Silver-ion antibacterial surface" },
      finishes: ["Light Ash Suede", "Off-white Suede"],
      features: ["Kills 99.9% bacteria on contact", "Safe for food contact", "Ideal for child bedroom storage"],
      applications: ["Kids wardrobes", "Hospital cabinets", "Kitchen pantry walls"]
    },
    {
      name: "Natural Veneer Finish Laminate",
      specs: { "Thickness": "1.2mm", "Design": "Natural wood veneer print" },
      finishes: ["Veneer Matte Walnut", "Veneer Matte Oak"],
      features: ["Matches natural timber texture", "Protects against scratching and moisture", "Low reflection"],
      applications: ["Living room accent furniture", "Entrance door paneling"]
    },
    {
      name: "Textured Linen Fabric Laminate",
      specs: { "Thickness": "1.0mm", "Texture": "Linen textile weave" },
      finishes: ["Warm Grey Linen", "Beige Linen"],
      features: ["Sophisticated fabric look", "Warm home feel", "Hides scratches completely"],
      applications: ["Wardrobe interior organizer boxes", "Shoe drawer interiors"]
    }
  ],
  "door-locks": [
    {
      name: "Mortise Lock Classic",
      specs: { "Material": "Solid Brass body", "Keys": "3 Brass keys", "Mechanism": "Double-stage bolt" },
      finishes: ["Antique Brass", "Satin Nickel", "Polished Chrome"],
      features: ["Heavy duty lever lock mechanism", "Tested to 100,000 cycles", "Scratch resistant polish plating"],
      applications: ["Main doors", "Bedroom doors", "Office cabin doors"]
    },
    {
      name: "Premium Security Mortise Lock",
      specs: { "Material": "Stainless Steel SS 304 bolt", "Levers": "8-lever safety system" },
      finishes: ["Brushed Stainless Steel", "Matte Black"],
      features: ["Drill-resistant hardened steel plate", "Pick-resistant lever design", "Smooth latch bolt movement"],
      applications: ["Main villa doors", "Jewelry rooms", "Commercial entryways"]
    },
    {
      name: "Cylinder Lock Set",
      specs: { "Cylinder Material": "Solid Brass keyway", "Pin System": "10-pin dimple computer keys" },
      finishes: ["Satin Chrome", "Antique Bronze"],
      features: ["Computerized high-security dimple keys", "Anti-bump cylinder pins", "Can be master keyed"],
      applications: ["Main house entrances", "Office partition entry doors"]
    },
    {
      name: "Digital Biometric Lock Elite",
      specs: { "Unlocking Methods": "Fingerprint, Passcode, RFID Card, Key, App", "Power": "4x AA batteries (micro-USB backup)" },
      finishes: ["Tempered Glass Black", "Rose Gold accents"],
      features: ["Semiconductor fast fingerprint sensor", "Intruder alarm warning system", "Temporary OTP codes via smartphone app"],
      applications: ["Penthouse main doors", "CEO cabins", "Private locker vaults"]
    },
    {
      name: "Smart Wi-Fi Enabled Deadbolt",
      specs: { "Connectivity": "Wi-Fi + Bluetooth", "Integration": "Alexa / Google Assistant compatible" },
      finishes: ["Sleek Black Chrome", "Satin Nickel"],
      features: ["Auto-unlocks as you approach door", "Live access entry logs via app", "Smart voice control locking"],
      applications: ["Modern smart home doors", "Airbnb rental properties"]
    },
    {
      name: "Heavy Duty Padlock",
      specs: { "Shackle": "Hardened Boron Steel shackle", "Body": "Solid Brass", "Security": "Anti-cut cover" },
      finishes: ["Gold Brass", "Weatherproof Black Cover"],
      features: ["Resists hacksaw cuts and bolt cutters", "Double ball bearing locking shackle", "Weatherproof water seals"],
      applications: ["Shop shutters", "Warehouse gates", "Outdoor lockers"]
    },
    {
      name: "Glass Door Lock Panel",
      specs: { "Material": "SS 304 shell", "Glass Thickness": "10mm - 12mm Frameless" },
      finishes: ["Polished Stainless Steel", "Satin Stainless Steel"],
      features: ["No drilling holes required in glass", "Dual-sided security lockset", "Heavy-duty deadbolt"],
      applications: ["Office glass main entrances", "Showroom frameless doors"]
    },
    {
      name: "Night Latch Safety Lock",
      specs: { "Mechanism": "Pull-latch + deadbolt lock", "Material": "Cast Iron body" },
      finishes: ["Ivory Paint Finish", "Antique Gold Coating"],
      features: ["Hold-back latch snib option", "Solid brass safety pull-bolt", "Heavy security back plate"],
      applications: ["Apartment safety doors", "Backdoor entries"]
    },
    {
      name: "Deadbolt Security Lock",
      specs: { "Grade": "ANSI Grade 2 security", "Throw": "1-inch solid steel bolt throw" },
      finishes: ["Brushed Steel", "Matte Black"],
      features: ["Anti-saw hardened steel roller insert", "Strong solid metal faceplate", "Simple key turn operation"],
      applications: ["Store main entryways", "Residential front doors"]
    },
    {
      name: "Hotel Keycard RFID Lock",
      specs: { "Card Frequency": "Mifare 13.56MHz", "Memory": "Last 200 entry audits" },
      finishes: ["Brushed Chrome Stainless Steel", "Brushed Brass"],
      features: ["Audit trail tracking software", "Panic release handle function", "Mechanical emergency bypass keys"],
      applications: ["Hotels, Resorts", "Student dormitory gates", "Shared office spaces"]
    },
    {
      name: "Biometric Fingerprint Drawer Lock",
      specs: { "Fingerprint Capacity": "20 prints", "Battery": "USB Rechargeable lithium battery" },
      finishes: ["Sleek Black Ring"],
      features: ["Instantly unlocks in 0.3s", "Auto-lock mechanism on drawer close", "Low battery warning beep"],
      applications: ["Office cash drawers", "Private jewelry wardrobe boxes", "Cabinet locks"]
    },
    {
      name: "Cabinet Cam Lock",
      specs: { "Mechanism": "90 degree rotation cam", "Cylinder Length": "22mm / 32mm" },
      finishes: ["Bright Chrome Plated"],
      features: ["Simple key lockset", "High density zinc alloy body", "Available keyed-alike sets"],
      applications: ["Office filing cabinets", "Store display counters", "Mailboxes"]
    },
    {
      name: "Heavy Duty Rim Lock Set",
      specs: { "Core": "Multi-stage steel deadbolts", "Material": "Premium Zinc Alloy housing" },
      finishes: ["Satin Nickel", "Antique Copper"],
      features: ["Strong rim surface mounting", "Includes security pull handle", "Bumping resistant key slots"],
      applications: ["Heavy double wooden gates", "Back entry doors"]
    },
    {
      name: "Fingerprint Smart Padlock",
      specs: { "Memory": "10 Fingerprints", "IP Rating": "IP65 Weatherproof" },
      finishes: ["Matte Gunmetal Grey"],
      features: ["Keyless biometric padlock", "Fast charge battery (stands 1 year)", "High tensile steel shackle"],
      applications: ["Gym lockers", "Travel luggage bags", "Gate chains"]
    },
    {
      name: "Triple-Bolt Security Mortise",
      specs: { "Bolts": "3 solid steel locking bolts", "Locking Throw": "20mm dual throw" },
      finishes: ["Brushed SS 304", "Matte Brass"],
      features: ["Triple protection safety", "Quiet operation latch mechanism", "Works with heavy duty handles"],
      applications: ["Luxury penthouse entries", "Jewelry showroom gates"]
    },
    {
      name: "Bluetooth Glass Sliding Lock",
      specs: { "Unlock Method": "Smartphone App / PIN Code", "Glass Type": "Sliding double doors" },
      finishes: ["Mirror Black Panel"],
      features: ["No-drill installation slide lock", "Auto-lock sensor on close", "Remote locking via gateway"],
      applications: ["Executive glass cabin doors", "Showcase lockers"]
    },
    {
      name: "Brass Mechanical Rim Lock",
      specs: { "Body": "Solid Heavy Cast Brass", "Mechanism": "Double throw deadbolt" },
      finishes: ["Natural Brass Polish", "Antique Brass Lacquered"],
      features: ["Rich vintage traditional design", "Extra-thick deadbolt casing", "Comes with 3 master keys"],
      applications: ["Heritage villa doors", "Main wooden gates"]
    },
    {
      name: "Privacy Glass Slider Lock",
      specs: { "Usage": "Glass door bathrooms", "Indicator": "Red/Green Vacant-Engaged" },
      finishes: ["Satin Stainless Steel", "Matte Black SS"],
      features: ["Easy rotation lock thumbturn", "Clear occupancy visual indicator", "Emergency external release slot"],
      applications: ["Office restroom glass doors", "Hotel glass bathrooms"]
    },
    {
      name: "Digital Gate Lock (Dual Sided)",
      specs: { "Keypad": "Front & Back numeric touch keypads", "IP Rating": "IP66 Weatherproof" },
      finishes: ["Heavy Duty Powder Coated Black"],
      features: ["Perfect for grill iron gates", "Dual-sided keypad security", "Requires key/code to exit as well"],
      applications: ["Villa entry iron gates", "Dormitory perimeter gates"]
    },
    {
      name: "Smart Cabinet RFID Lock",
      specs: { "Access": "RFID cards / Wristbands", "Usage": "Hidden drawer install" },
      finishes: ["Black composite shell"],
      features: ["Hidden inside wood panels, no drill visual", "Auto-spring opening", "Low power automatic pop open"],
      applications: ["Gym changing lockers", "Office document drawers"]
    },
    {
      name: "Heavy Duty Weatherproof Padlock",
      specs: { "Cover": "Silicon rubber outer casing", "Shackle": "Hardened Boron steel 12mm" },
      finishes: ["Industrial Yellow/Black Cover"],
      features: ["Completely water mud dust proof", "Pick resistant dimple key slot", "Rustproof marine steel core"],
      applications: ["Construction site main gates", "Shipping containers"]
    },
    {
      name: "Office Electronic Keypad Lock",
      specs: { "Users": "Up to 50 pin codes", "Backlight": "LED backlit numeric keys" },
      finishes: ["Satin Nickel Touchscreen", "Matte Charcoal Touchscreen"],
      features: ["Passage mode for easy meeting hours", "Wrong code lockout alarm", "Low battery warning system"],
      applications: ["Corporate meeting rooms", "Server rooms", "Office cabins"]
    },
    {
      name: "Heavy Duty Multi-point Lock",
      specs: { "Locking points": "5 points along door edge", "Core": "SS 304 mechanisms" },
      finishes: ["Satin Chrome"],
      features: ["Locks top, middle, and bottom of door", "Anti-crowbar security framework", "Extra smooth handle lift action"],
      applications: ["Villa main front doors", "High-security home exits"]
    },
    {
      name: "Biometric Glass Sliding Smart Lock",
      specs: { "Fingerprint response": "<0.2s", "Glass Type": "Frameless Single/Double sliding" },
      finishes: ["Gloss Black Screen"],
      features: ["USB emergency power backup", "Stores 100 fingerprints", "Remote unlocking logs via App"],
      applications: ["High-tech conference glass doors", "Retail showroom entries"]
    },
    {
      name: "Antique Design Mortise Lock Set",
      specs: { "Plate": "Cast Brass Vintage engraving", "Mechanism": "8-lever security lock" },
      finishes: ["Royal Antique Copper", "Gold Lacquered Brass"],
      features: ["Intricate royal scroll carvings", "Heavy solid brass weight", "Durable key mechanics"],
      applications: ["Teak wood main doors", "Heritage villa guest rooms"]
    },
    {
      name: "Quiet Latch Magnetic Lock",
      specs: { "Latch Type": "Magnetic flush latch bolt", "Material": "Zinc alloy casing" },
      finishes: ["Matte Black", "Satin Nickel"],
      features: ["Latch stays hidden when door is open", "Absolutely quiet closing sound", "Resists scratching on strike plate"],
      applications: ["Minimalist luxury bedrooms", "Baby nursery rooms"]
    },
    {
      name: "Hotel Smart RFID RFID Lock Elite",
      specs: { "Wireless Tech": "Zigbee/Bluetooth option", "Standard": "BHMA Grade 1 certified" },
      finishes: ["Premium Brushed Bronze", "Matte Gunmetal"],
      features: ["Unlocks with guest smartphone via Bluetooth", "Extreme battery efficiency", "Hidden mechanical key slot"],
      applications: ["Luxury boutique resorts", "Premium business hotels"]
    }
  ],
  "door-hardware": [
    {
      name: "Designer Cabinet Handles",
      specs: { "Size": "96mm - 320mm hole centers", "Material": "Solid Zinc Alloy" },
      finishes: ["Brushed Rose Gold", "Matte Black", "Polished Gold"],
      features: ["Modern sleek line profile", "Rust-free electroplating coating", "Includes matching mount screws"],
      applications: ["Kitchen cabinets", "Wardrobe doors", "Living room drawer units"]
    },
    {
      name: "Premium Entrance Pull Handle",
      specs: { "Length": "450mm - 1200mm", "Material": "Stainless Steel SS 316 / Brass" },
      finishes: ["Brushed Stainless Steel", "Matte Black Textured", "Polished Gold Brass"],
      features: ["Heavy thick wall tube handle", "Double-sided installation fixings", "Rustproof exterior grade"],
      applications: ["Main wooden entrance doors", "Glass main office entryways"]
    },
    {
      name: "Concealed Hydraulic Hinges",
      specs: { "Opening Angle": "110 degrees", "Material": "Nickel-plated Steel", "Damping": "Oil hydraulic piston" },
      finishes: ["Nickel Plated", "Titanium Black Finish"],
      features: ["Soft-close silent cabinet shutting", "3D adjustment (depth, side, height)", "Clip-on fast assembly plates"],
      applications: ["Modular kitchen cabinets", "Bedroom wardrobe doors", "Bathroom mirror cabinets"]
    },
    {
      name: "Heavy Duty Door Closer",
      specs: { "Closing Force": "EN size 2 - 4 adjustable", "Max Door Weight": "80kg", "Standard": "UL Listed Fire-safe" },
      finishes: ["Silver Anodized", "Matte Black Coated"],
      features: ["Adjustable latching and closing speed", "Holds open option arm available", "Smooth oil hydraulic control"],
      applications: ["Office exit doors", "Commercial kitchen doors", "Fire corridor entries"]
    },
    {
      name: "Heavy Duty Hydraulic Floor Spring",
      specs: { "Max Door Weight": "120kg - 150kg", "Hold Open": "90 degrees stop", "Standard": "SS 304 cover plate" },
      finishes: ["Satin Stainless Steel cover", "Polished Gold cover"],
      features: ["Double action opening swing", "Adjustable closing speeds", "Concealed sub-floor installation"],
      applications: ["Frameless glass doors", "Heavy wooden pivot doors", "Mall entry double glass doors"]
    },
    {
      name: "Concealed 3D Adjustable Hinge",
      specs: { "Capacity": "80kg per pair", "Opening Angle": "180 degrees", "Material": "Premium Zinc Alloy core" },
      finishes: ["Satin Chrome", "Matte Black", "Brushed Gold"],
      features: ["Completely invisible hinge when door is shut", "Smooth maintenance-free bearings", "Three-dimensional adjustment"],
      applications: ["Minimalist luxury flush doors", "Secret wardrobe doors"]
    },
    {
      name: "Magnetic Door Stopper",
      specs: { "Material": "Solid Zinc Alloy / SS 304", "Installation": "Floor / Wall mount" },
      finishes: ["Satin Chrome", "Antique Copper", "Matte Black"],
      features: ["Strong magnetic hold catches door", "Soft spring buffering cushion", "Prevents wall handle dents"],
      applications: ["Bedroom doors", "Bathroom doors", "Corridor entryways"]
    },
    {
      name: "Heavy Duty Tower Bolt",
      specs: { "Size": "4 inch - 18 inch", "Material": "Solid Brass extrusion" },
      finishes: ["Antique Brass Polish", "Brushed Nickel", "Satin Gold"],
      features: ["Thick solid metal sliding rod", "Corrosion resistant plating", "Symmetric modern look"],
      applications: ["Balcony doors back locking", "Main entry double door latching"]
    },
    {
      name: "Heavy Duty Aldrop Latch Set",
      specs: { "Size": "10 inch / 12 inch", "Material": "Solid Brass" },
      finishes: ["Gold Brass Polish", "Antique Copper Finish"],
      features: ["Traditional Indian latch locking style", "Thick structural safety rod", "Comes with matching hinges"],
      applications: ["Main residential entrance gates"]
    },
    {
      name: "Sliding Cabinet Door Kit",
      specs: { "Track Length": "2 Meters / 3 Meters", "Capacity": "60kg per door panel" },
      finishes: ["Aluminium Silver Track", "Anodized Black Track"],
      features: ["Whisper quiet nylon wheels", "Anti-jump guide rollers", "Integrated soft-close braking dampers"],
      applications: ["Sliding wardrobes", "Office office document sliders"]
    },
    {
      name: "Glass Door Patch Fittings",
      specs: { "Material": "SS 304 Cladding cover", "Glass Compatibility": "10mm - 12mm Tempered" },
      finishes: ["Satin Stainless Steel", "Polished Chrome SS"],
      features: ["High-strength aluminum alloy base body", "Non-slip rubber glass inserts", "Standard pivot spindle connections"],
      applications: ["Frameless glass cabin entryways", "Office double door setups"]
    },
    {
      name: "Wide Angle Door Viewer",
      specs: { "Viewing Angle": "200 degrees", "Material": "Solid Brass housing", "Glass": "Optical glass lenses" },
      finishes: ["Polished Brass Gold", "Satin Chrome"],
      features: ["Extra wide fish-eye panorama view", "Includes privacy metal shutter cover", "Adjustable thickness housing"],
      applications: ["Apartment entrance doors", "Hotel bedroom entry doors"]
    },
    {
      name: "Lever Handle On Rose Set",
      specs: { "Material": "SS 304 grade handles", "Standard": "Euro profile keyway match" },
      finishes: ["Satin Stainless Steel", "Dual tone Black/Silver", "Satin Gold Rose"],
      features: ["Ergonomic grip lever handle", "Heavy duty return spring inside", "Concealed mounting screws style"],
      applications: ["Modern apartment internal doors", "Executive cabins"]
    },
    {
      name: "Designer Rose Gold Pull Handle",
      specs: { "Length": "600mm", "Profile": "Square profile tube" },
      finishes: ["Brushed Rose Gold PVD", "Polished Rose Gold PVD"],
      features: ["Stunning luxury PVD finish coating", "High resistance to color wear", "Comes with dual mounts"],
      applications: ["Showroom main glass gates", "Villa entrance doors"]
    },
    {
      name: "Concealed Furniture Magnetic Catch",
      specs: { "Hold force": "4kg", "Material": "Neodymium Magnet in ABS casing" },
      finishes: ["Pure White", "Cabinet brown"],
      features: ["Hidden inside wood panel edge", "Strong neodymium grip", "Extremely low profile size"],
      applications: ["Push-to-open cabinet panels", "Kitchen spice doors"]
    },
    {
      name: "Hydraulic Pivot Hinge Set",
      specs: { "Capacity": "100kg door weight", "Opening": "150 degrees double action" },
      finishes: ["Brushed SS 304 covers"],
      features: ["Self-closing from 80 degrees", "Built-in speed adjustments", "No floor excavation required"],
      applications: ["Premium restaurant entry doors", "Office swing glass doors"]
    },
    {
      name: "Stainless Steel Door Guard",
      specs: { "Material": "Solid Stainless Steel SS 304", "Chain Length": "150mm" },
      finishes: ["Satin Stainless Steel", "Antique Gold Coating"],
      features: ["Secure narrow ventilation opening", "Anti-scratch rubber slider head", "Resists strong force pushes"],
      applications: ["Apartment front security doors", "Hotel bedroom safety doors"]
    },
    {
      name: "Black Lever Handle Classic",
      specs: { "Material": "Solid Zamak", "Standard": "Mortise keyway profile" },
      finishes: ["Matte Black Powder Coated"],
      features: ["Industrial chic styling", "Scratch-resistant textured coat", "Heavy duty double spring"],
      applications: ["Modern industrial apartment doors", "Design studios"]
    },
    {
      name: "Glass Fitting Point Standoffs",
      specs: { "Diameter": "30mm / 40mm", "Distance from wall": "30mm", "Material": "SS 316 Marine Grade" },
      finishes: ["Polished Chrome SS", "Satin Stainless Steel"],
      features: ["Heavy load point glass holder", "Threaded pin locks glass", "Weatherproof outdoor durability"],
      applications: ["Glass facade fixing", "Glass railings standoffs", "Sign boards"]
    },
    {
      name: "Designer Rose Lever Handle Elite",
      specs: { "Material": "Solid Brass alloy", "Grip": "Ergonomic slim design" },
      finishes: ["Brushed Brass PVD", "Satin Bronze"],
      features: ["Premium PVD wear protection", "Solid brass weight feel", "Whisper quiet spring return"],
      applications: ["Villa interior doors", "Luxury presidential hotel suites"]
    },
    {
      name: "Soft-Close Cabinet Gas Spring",
      specs: { "Pressure Force": "80N / 100N / 120N", "Stroke": "90mm" },
      finishes: ["Anodized Silver Steel"],
      features: ["Smooth pneumatic lifting power", "Silent slow-down dampening", "Clip-on easy ball joint fixings"],
      applications: ["Modular kitchen wall cabinets", "Top-hung storage boxes"]
    },
    {
      name: "Premium Concealed Pivoting System",
      specs: { "Capacity": "150kg door panel", "Installation": "Frame-mounted pivot" },
      finishes: ["Anodized Dark Grey", "Brushed Gold"],
      features: ["Self-closing speed control mechanism", "Completely hidden in door leaf", "Adjustable pivoting point"],
      applications: ["High-end luxury villa pivot doors", "Lobby entries"]
    },
    {
      name: "Heavy-Duty Ball Bearing Hinge",
      specs: { "Size": "4\" x 3\" x 3mm", "Material": "SS 304 Grade Stainless Steel" },
      finishes: ["Satin Stainless Steel", "Matte Black", "PVD Gold"],
      features: ["Four lubricated ball bearings", "Extra quiet swing friction", "Withstands heavy fire door weights"],
      applications: ["Main villa doors", "Fire exit steel doors", "Heavy bedroom doors"]
    },
    {
      name: "Magnetic Door Stopper (Slim)",
      specs: { "Material": "Ultra-thin Neodymium core", "Thickness": "4mm only" },
      finishes: ["Brushed Steel Finish", "Matte Black Finish"],
      features: ["Ultra-low profile, prevents tripping", "Strong magnetic catch hold", "Comes with 3M adhesive tape"],
      applications: ["Bathroom sliding doors", "Minimalist office cabinets"]
    },
    {
      name: "SS 304 Security Chain Lock",
      specs: { "Material": "Heavy duty welded SS 304 links", "Length": "200mm" },
      finishes: ["Brushed SS 304", "High Polish Gold PVD"],
      features: ["Protective fabric slide sleeve", "Anti-tamper locking pin button", "Heavy weld structural strength"],
      applications: ["Premium condominium entry doors", "Corporate security doors"]
    },
    {
      name: "Heavy Duty Gravity Hinges Set",
      specs: { "Material": "Solid Stainless Steel 304", "Type": "Self-closing gravity rise" },
      finishes: ["Satin Stainless Steel"],
      features: ["Uses door weight to close automatically", "No hydraulic fluid leaks", "Extreme corrosion resistance"],
      applications: ["Restroom cubicle doors", "Office swing dividers"]
    },
    {
      name: "Patch Fittings Lock Set",
      specs: { "Key system": "10-Pin computerized dimple key", "Shell": "SS 304 plate" },
      finishes: ["Brushed SS 304", "Polished Brass Gold PVD"],
      features: ["Locks directly to sub-floor strike plate", "Dustproof floor strike cup included", "Heavy duty deadbolt throw"],
      applications: ["Office glass main entrances", "Showroom doors"]
    }
  ],
  "furniture-hardware": [
    {
      name: "Ball Bearing Drawer Channel",
      specs: { "Load Capacity": "45kg per pair", "Length": "10 inch - 24 inch", "Material": "Cold Rolled Steel" },
      finishes: ["Zinc Plated Silver", "Electrophoresis Black"],
      features: ["Ultra smooth three-fold full extension", "Lubricated steel ball bearings", "Quiet rubber stopper damper"],
      applications: ["Office drawers", "Living room TV consoles", "Study table drawers"]
    },
    {
      name: "Soft Close Under-mount Slide",
      specs: { "Load Capacity": "35kg", "Extension": "Synchronized full extension" },
      finishes: ["Zinc Plated Steel"],
      features: ["Concealed under-drawer installation", "Silent hydraulic soft-close damper", "Quick drawer release triggers"],
      applications: ["Premium bedroom dressers", "Luxury modular kitchen drawers"]
    },
    {
      name: "Double-Wall Tandem Box Set",
      specs: { "Drawer Heights": "86mm, 150mm, 204mm", "Load Capacity": "50kg Heavy Duty" },
      finishes: ["Silk White Powder Coated", "Orion Grey Suede"],
      features: ["Sleek double-wall steel sides", "Synchronized runner tracks for smooth movement", "Integrated soft-close buffer"],
      applications: ["Modular kitchen drawers", "Luxury pantry drawers", "Wardrobe inner compartments"]
    },
    {
      name: "Adjustable Cabinet Legs Set",
      specs: { "Adjustment range": "100mm - 150mm", "Load Capacity": "150kg per leg" },
      finishes: ["Heavy Duty Black ABS", "Brushed Aluminium Shell"],
      features: ["Levels uneven floor heights", "Comes with clipping toe kick plates", "Moisture barrier for base wood"],
      applications: ["Modular kitchen bottom cabinets", "Bathroom vanities"]
    },
    {
      name: "Gas-Spring Lift Up Mechanism",
      specs: { "Pneumatic Force": "50N / 80N / 100N / 150N", "Material": "Carbon steel pistons" },
      finishes: ["Silver Paint Finish", "Matte Black Finish"],
      features: ["Smooth soft lifting action", "Holds cabinet lid open at 90 degrees", "Quiet air hydraulic damping"],
      applications: ["Overhead kitchen cabinets", "Living room top-hung shelves"]
    },
    {
      name: "Wardrobe Sliding Door Track Kit",
      specs: { "Max load": "80kg per shutter door", "Track Material": "Extruded Aluminium" },
      finishes: ["Anodized Silver Track", "Bronze Track"],
      features: ["Smooth noise-free nylon rollers", "Anti-jump safety locks", "Dual-sided soft-closing triggers"],
      applications: ["Sliding door wardrobes", "Office cabinets"]
    },
    {
      name: "Aluminium G-Profile Handle",
      specs: { "Profile Length": "3 Meters", "Grip Height": "18mm for board" },
      finishes: ["Anodized Silver", "Matte Black Profile", "Brushed Gold Profile"],
      features: ["Modern handle-less cabinet design", "No projecting edges", "Easily cut to cabinet width"],
      applications: ["Modern kitchen drawers", "Wardrobe shutters"]
    },
    {
      name: "Concealed Floating Shelf Support",
      specs: { "Weight rating": "20kg per bracket pair", "Size": "10mm diameter, 100mm length" },
      finishes: ["Zinc Coated Steel"],
      features: ["Completely hidden inside shelf wood", "Adjustable height tilt angles", "Heavy structural solid steel"],
      applications: ["Floating bookshelves", "Living room display panels"]
    },
    {
      name: "Push-To-Open Drawer Runners",
      specs: { "Mechanism": "Mechanical trigger spring", "Load rating": "45kg" },
      finishes: ["Zinc Plated Steel"],
      features: ["Unlocks drawer with a simple light push", "Eliminates need for handles", "Smooth full-extension slides"],
      applications: ["Handle-less modern dressers", "Modern office desks"]
    },
    {
      name: "Corner Cabinet Swivel Plate",
      specs: { "Rotation Angle": "360 degrees", "Material": "Zinc plated heavy steel" },
      finishes: ["Silver Zinc Coating"],
      features: ["Continuous steel ball track", "Heavy load capacity up to 150kg", "Smooth quiet swivel rotation"],
      applications: ["Lazy susan cabinets", "Rotating display stands", "Shoe shelves"]
    },
    {
      name: "Heavy-Duty Corner Connector",
      specs: { "Material": "Thickened cold rolled steel", "Pack": "4 pieces with caps" },
      finishes: ["Zinc Plated with White/Brown ABS cap"],
      features: ["Extremely rigid right angle jointing", "Comes with decorative cosmetic cap", "High shear load rating"],
      applications: ["Bed frame corners", "Heavy wardrobe assembly"]
    },
    {
      name: "Concealed Shelf Support Pin",
      specs: { "Pin diameter": "5mm / 6mm", "Material": "Zinc Alloy pin with rubber ring" },
      finishes: ["Nickel Plated Pin"],
      features: ["Non-slip rubber ring holds glass/wood", "Low profile design pin", "Fits pre-drilled cabinet lines"],
      applications: ["Bookcase shelves", "Kitchen cabinet storage pegs"]
    },
    {
      name: "Aluminum J-Profile Handle",
      specs: { "Length": "3 Meters", "Fit Board": "18mm MDF" },
      finishes: ["Anodized Champagne Gold", "Matte Black Anodized"],
      features: ["Ergonomic finger-pull groove", "Extruded structural aluminum", "Provides clean design lines"],
      applications: ["Kitchen base cabinet drawers", "Desk vanity cabinets"]
    },
    {
      name: "Heavy Duty Soft-Close Hinge",
      specs: { "Hinge Cup Diameter": "35mm", "Depth": "11.5mm", "Opening": "105 degrees" },
      finishes: ["Steel Nickel Plated", "Titanium Bronze"],
      features: ["Integrated hydraulic slow shut damper", "Quick-connect clip-on arm plates", "Built-in overlay adjusters"],
      applications: ["Kitchen storage cabinets", "Wardrobe entry doors"]
    },
    {
      name: "Modular Drawer Divider Grid",
      specs: { "Material": "Anodized aluminum profiles + ABS joints" },
      finishes: ["Titanium Grey", "Satin Silver"],
      features: ["Fully adjustable grid positions", "Hides clutter, organizes spoons/knives", "Non-slip velvet bottom liner"],
      applications: ["Kitchen cutlery drawers", "Jewellery drawers"]
    },
    {
      name: "Gas-Spring Lift Up Mechanism Elite",
      specs: { "Force": "100N / 120N Heavy-duty", "Durability": "50,000 cycles" },
      finishes: ["Brushed Anodized Steel", "Matte Black Steel"],
      features: ["Smooth gas hydraulic lifting speed", "Maintains open angle reliably", "Silent stop-buffer"],
      applications: ["Elite kitchen overhead shutters", "Office storage boxes"]
    },
    {
      name: "Under-mount Drawer Slides (Push-Open)",
      specs: { "Load rating": "40kg", "Extension": "Synchronized full-extension" },
      finishes: ["Zinc Plated Steel"],
      features: ["Combines push-to-open and concealed design", "Tool-free drawer height adjustments", "Whisper quiet runners"],
      applications: ["Luxury master vanity suites", "Premium study desks"]
    },
    {
      name: "Aluminum Edge Banding Profile",
      specs: { "Width": "19mm / 25mm / 35mm", "Material": "Extruded Aluminium" },
      finishes: ["Satin Silver Profile", "Matte Black Profile"],
      features: ["Protects board edges from high impact", "Sleek metallic outline accent", "Waterproof edge seal"],
      applications: ["Office desks edges", "Modular kitchen cabinet doors"]
    },
    {
      name: "Tandem Box Internal Drawer Kit",
      specs: { "Drawer heights": "150mm Medium", "Load rating": "45kg" },
      finishes: ["Sleek Orion Grey Suede", "Silk White Suede"],
      features: ["Creates clean drawers inside cabinets", "No handle required for inner tray", "Smooth soft-close rollers"],
      applications: ["Pantry internal drawers", "Wardrobe accessory racks"]
    },
    {
      name: "Concealed Sliding Wardrobe roller",
      specs: { "Load Capacity": "100kg heavy doors", "Rollers": "Premium ball-bearing nylon rollers" },
      finishes: ["Zinc Plated bracket with Black rollers"],
      features: ["Concealed track style", "Whisper quiet sliding movement", "Built-in anti-jump catch lock"],
      applications: ["Heavy wooden sliding wardrobes", "Walk-in closets"]
    },
    {
      name: "Adjustable Desk Levelling Legs",
      specs: { "Material": "SS 304 thread + heavy nylon base", "Adjustment height": "20mm" },
      finishes: ["Satin Stainless Steel", "Polished Chrome"],
      features: ["Protects floors from scratching", "Adjusts desk leveling", "High load structural capacity"],
      applications: ["Showroom display tables", "Heavy office partitions"]
    },
    {
      name: "Premium Soft-Close Flap Stay",
      specs: { "Opening Angle": "107 degrees adjustable", "Lid Weight": "Up to 8kg" },
      finishes: ["Titanium Dark Grey casing"],
      features: ["Stops lid at any desired opening position", "Soft-close dampening on shut", "Compact design saves space"],
      applications: ["Living room drop-down TV cabinets", "Overhead closets"]
    },
    {
      name: "Modular Wardrobe Pull-out Hanger",
      specs: { "Length": "350mm / 450mm", "Material": "Steel + ABS slide base" },
      finishes: ["Matte Black with Chrome rods"],
      features: ["Saves closet depth space", "Pulls wardrobe hanger out to view clothes", "Smooth ball bearing track slide"],
      applications: ["Narrow depth wardrobes", "Coat closets"]
    },
    {
      name: "Cabinet Magnetic Push Catch",
      specs: { "Spring Force": "Heavy duty extra long push", "Material": "Aluminium shell" },
      finishes: ["Anodized Silver Casing", "Anodized Black Casing"],
      features: ["Long stroke pusher pops door open", "Strong magnetic head secures cabinet", "Easy screw mounting"],
      applications: ["Large handle-less cabinets", "Filing shelf units"]
    },
    {
      name: "Glass Shelf Support Clamp",
      specs: { "Glass Thickness": "8mm - 12mm", "Material": "Zinc Alloy heavy body" },
      finishes: ["Polished Chrome", "Matte Black", "Brushed Gold"],
      features: ["Secure non-slip silicone pads", "Includes wall anchor screws", "Elegant oval design profile"],
      applications: ["Bathroom glass shelves", "Living room showcase walls"]
    },
    {
      name: "Double-Wall Tandem Drawer (Slim)",
      specs: { "Drawer side thickness": "13mm ultra slim", "Load capacity": "40kg" },
      finishes: ["Sleek Carbon Matte Black", "Silk Suede White"],
      features: ["Maximizes internal drawer width", "Ultra-thin modern drawer sides", "Integrated soft-close runners"],
      applications: ["Luxury modular kitchen drawers", "Premium bathroom vanity boxes"]
    },
    {
      name: "Heavy-Duty Leveling Legs (Wobble-Free)",
      specs: { "Adjust range": "80mm - 120mm", "Load Capacity": "200kg per leg" },
      finishes: ["Industrial Grade Black PVC"],
      features: ["Heavy load bottom levelers", "Resists kitchen cleaning chemicals", "Easy clip-on socket for skirter wood"],
      applications: ["Kitchen base frame modules", "Heavy filing cabinets"]
    }
  ],
  "modular-kitchen": [
    {
      name: "Stainless Steel Bottle Pullout",
      specs: { "Basket Layers": "2-tier / 3-tier wire basket", "Cabinet Width": "150mm / 200mm", "Material": "SS 304 Grade" },
      finishes: ["High Polish Chrome SS", "Textured Gunmetal Grey"],
      features: ["Quiet bottom-mounted slide track", "Organizes oil bottles, sauce packs", "Anti-shake plastic partition clips"],
      applications: ["Modular kitchen cabinets", "Kitchen oil zone drawer"]
    },
    {
      name: "6-Layer Kitchen Pantry Unit",
      specs: { "Basket Material": "SS 304 Wire / Glass panels", "Cabinet Width": "450mm / 600mm", "Shelves": "12 Baskets total" },
      finishes: ["Chrome Steel Baskets", "Luxury Tempered Glass baskets"],
      features: ["Pulls forward as door opens", "Soft close sliding dampers", "Adjustable basket height positions"],
      applications: ["Luxury kitchen pantry cabinet", "Dry food storage zone"]
    },
    {
      name: "Soft-Close Magic Corner Organizer",
      specs: { "Direction": "Left hand / Right hand pullout", "Baskets": "4 Baskets total" },
      finishes: ["Chrome SS wire baskets", "Grey Solid Base Baskets"],
      features: ["Maximizes blind kitchen corner voids", "Baskets swing out fully when pulled", "Soft close automatic dampening"],
      applications: ["Kitchen corner cabinets", "L-shaped kitchen counters"]
    },
    {
      name: "Wall-Mounted Dish Drainer Rack",
      specs: { "Length": "600mm - 900mm", "Material": "Stainless Steel SS 304" },
      finishes: ["Polished Chrome SS", "Matte Black SS"],
      features: ["Removable water collecting drip tray", "Top slot plate holder, bottom flat rack", "Rustproof kitchen organizer"],
      applications: ["Above kitchen sink cabinets", "Pantry wall racks"]
    },
    {
      name: "Adjustable Wooden Cutlery Tray",
      specs: { "Wood Material": "Premium Teak Wood / Beech Wood", "Fit size": "450mm - 900mm tandem boxes" },
      finishes: ["Natural Varnished Oak", "Charcoal Walnut Lacquer"],
      features: ["Luxury timber tray design", "Movable dividers to fit various spoons", "Smudge-resistant varnish coating"],
      applications: ["Cutlery kitchen drawers", "Premium dining drawers"]
    },
    {
      name: "Multi-Purpose Wire Grain Basket",
      specs: { "Load rating": "40kg", "Material": "Thickened SS 304 wire rods" },
      finishes: ["Polished Chrome SS"],
      features: ["Heavy duty mesh storage", "Perfect for heavy wheat flour sacks", "Works with under-counter drawers"],
      applications: ["Kitchen grain storage drawers", "Modular kitchen drawer base"]
    },
    {
      name: "Under-Sink Pullout Waste Bin",
      specs: { "Capacity": "10L + 10L (Dual bins for recycling)", "Mounting": "Cabinet floor mount" },
      finishes: ["Sleek Grey ABS casing"],
      features: ["Pulls out when cabinet door is opened", "Odor sealing lid stays inside", "Removable washing bin inserts"],
      applications: ["Under-sink kitchen cabinets", "Utility room bins"]
    },
    {
      name: "Heavy-Duty Corner Carousel System",
      specs: { "Rotation": "270 / 360 degree carousel revolving", "Material": "SS 304 wire rails" },
      finishes: ["High Polish Chrome Rails", "Matte Gunmetal Grey Rails"],
      features: ["Smooth center pole rotary motion", "Perfect for heavy cooking pots", "Adjustable height revolving trays"],
      applications: ["L-shaped kitchen corners", "Under counter corner cabinets"]
    },
    {
      name: "Full-Height Tall Unit Wire Rack",
      specs: { "Baskets": "6 adjustable baskets", "Height": "1900mm - 2200mm" },
      finishes: ["Polished Chrome wire baskets", "Grey Wooden Base Baskets"],
      features: ["Massive dry grocery organization storage", "Full height heavy steel support frame", "Soft closing slide track"],
      applications: ["Modular kitchen pantry towers"]
    },
    {
      name: "Double-Tier Wire Spice Organizer",
      specs: { "Installation": "Pull-out bottom slide runner", "Cabinet Width": "300mm" },
      finishes: ["Polished Chrome SS wire", "Matte Black SS wire"],
      features: ["Saves kitchen counter space", "Smooth full-extension slides", "Durable wire guard rails"],
      applications: ["Kitchen prep counters", "Spice drawers"]
    },
    {
      name: "Modular Kitchen Corner Carousel",
      specs: { "Tray type": "Eco wood base grey color", "Diameter": "750mm" },
      finishes: ["Light Grey Suede", "Chrome Wire rails"],
      features: ["Rotates smoothly to access pans", "Anti-slip wood base surface", "Heavy load capacity"],
      applications: ["L-shaped kitchen base corners"]
    },
    {
      name: "Stainless Steel Utensil Basket",
      specs: { "Width": "450mm - 900mm", "Height": "150mm" },
      finishes: ["Polished Chrome SS 304"],
      features: ["Thick gauge wire loops for plates", "Rustproof warranty", "Includes name tags slots"],
      applications: ["Under-counter kitchen modular drawers"]
    },
    {
      name: "Kitchen Corner Swing Out Tray",
      specs: { "Tray type": "S-shaped double swing shelves", "Cabinet Width": "900mm corner" },
      finishes: ["Titanium Dark Grey Base", "Maple Wood Base"],
      features: ["Swing-out tray pulls pots into room", "Quiet auto close dampers", "Supports up to 25kg per tray"],
      applications: ["Modular kitchen blind corners", "TV showcase corners"]
    },
    {
      name: "Premium Glass Basket Drawer",
      specs: { "Sides": "Frosted glass tandem side walls", "Width": "600mm / 900mm" },
      finishes: ["Silk White with Frosted Glass", "Orion Grey Suede with Tinted Glass"],
      features: ["View drawer contents from sides", "Sleek luxury styling", "Synchronized soft-close rails"],
      applications: ["Luxury kitchen crockery drawers", "Wardrobes"]
    },
    {
      name: "Modular Kitchen Tall Unit (Elite)",
      specs: { "Baskets": "6 inner door racks + 6 pullout shelf racks", "Material": "SS 304 + Tempered glass sides" },
      finishes: ["Polished Gold SS rails", "Sleek Gunmetal Grey rails"],
      features: ["Ultra-luxury tandem glass look", "Dual motion shelf pullout", "Heavy loading rollers"],
      applications: ["Luxury modular kitchen dry pantries"]
    },
    {
      name: "Under-sink Detergent Pullout",
      specs: { "Basket Layers": "2-tier slim side basket", "Material": "Stainless Steel SS 304" },
      finishes: ["Polished Chrome SS"],
      features: ["Pulls out detergents cleanly", "Rust resistant chemical spray coating", "Side-mount slide runners"],
      applications: ["Under-sink cabinets", "Laundry zones"]
    },
    {
      name: "Dish Drying Tray Drawer",
      specs: { "Baskets": "Premium plate rack base", "Tray": "ABS water drain board" },
      finishes: ["Polished SS 304", "Opal White ABS Tray"],
      features: ["Built-in pull-out plate slot drawer", "Protects lower drawers from water drop", "Soft-close channel rails"],
      applications: ["Kitchen upper cabinets", "Modular drawer frames"]
    },
    {
      name: "Kitchen Grain Pullout Trolley",
      specs: { "Cabinet Width": "300mm / 350mm", "Capacity": "35kg load" },
      finishes: ["Polished Chrome wire"],
      features: ["Tall bottle and grain basket blend", "Smooth full-extension slides", "Includes plastic dividers"],
      applications: ["Modular kitchen rice containers", "Pantry grain storage"]
    },
    {
      name: "Kitchen Wall Plate Rack",
      specs: { "Material": "Heavy gauge SS 304 wire rods" },
      finishes: ["Polished Chrome SS", "Matte Black SS"],
      features: ["Holds up to 24 dinner plates securely", "Easy wall mount installation", "Open air dry layout"],
      applications: ["Kitchen wall organizers", "Pantry rooms"]
    },
    {
      name: "Modular Kitchen Magic Corner Elite",
      specs: { "Baskets": "4 premium anti-slip wooden base baskets", "Hardware": "Heavy structural guide rails" },
      finishes: ["Premium Walnut Wood Base / Grey rails"],
      features: ["Luxury wooden base baskets", "Smooth automatic swing sequence", "Soft close dampers"],
      applications: ["High-end luxury kitchen corner cabinets"]
    },
    {
      name: "Kitchen Sink Storage Organizer",
      specs: { "Installation": "Door hanging / Adhesive", "Material": "ABS Plastic" },
      finishes: ["Off-White ABS", "Charcoal ABS"],
      features: ["Store sponges, scrubs and dish soaps", "Drip drying bottom holes", "Removable hook hangers"],
      applications: ["Sink cabinet doors", "Laundry rooms"]
    },
    {
      name: "Kitchen Spice Drawer organizer",
      specs: { "Material": "Molded ABS plastic grid tray" },
      finishes: ["Matte Grey ABS", "Matte Black ABS"],
      features: ["Holds spice jars at tilted angles", "Easy to wash grease spills", "Fits standard drawer channels"],
      applications: ["Kitchen spice drawers", "Pantry drawers"]
    },
    {
      name: "Kitchen Pullout Pantry Rack (Slim)",
      specs: { "Width": "300mm cabinet space", "Shelves": "5 multi-tier mesh baskets" },
      finishes: ["High Polish Chrome SS", "Grey Powder Coated"],
      features: ["Fits narrow kitchen gaps", "Smooth full extension slide unit", "Height adjustable wire trays"],
      applications: ["Modular kitchen spice towers", "Narrow pantry shelves"]
    },
    {
      name: "Modular Bread Drawer Box",
      specs: { "Material": "Food-grade stainless steel + Solid Wood lid" },
      finishes: ["Polished SS 304 with Beechwood lid"],
      features: ["Removable sliding wood breadboard lid", "Aeration holes prevent mold", "Fits kitchen drawers"],
      applications: ["Modular kitchen bread drawers", "Breakfast zones"]
    },
    {
      name: "Modular Waste Collector Bin (Twin)",
      specs: { "Volume": "15L + 15L dual bins", "Material": "Heavy duty recycle ABS plastic" },
      finishes: ["Dark Orion Grey ABS"],
      features: ["Foot-pedal push door opens bin drawer", "Hides waste bins out of sight", "Heavy load slides"],
      applications: ["Modular kitchen trash cabinets"]
    },
    {
      name: "Kitchen Overhead Lift-up dish rack",
      specs: { "Width": "800mm cabinet width", "Load Capacity": "15kg" },
      finishes: ["Chrome SS 304 wire"],
      features: ["Pulls down to chest height for dishes", "Hydraulic gas lift assistance", "Drip tray base included"],
      applications: ["Overhead kitchen sink cabinets"]
    },
    {
      name: "Woven Wicker Bread Basket",
      specs: { "Material": "Natural willow wicker weave + Beech wood frame" },
      finishes: ["Natural Beech Wood frame / Wicker"],
      features: ["Allows airflow for fresh vegetables", "Classic country look", "Slide-out wood rails"],
      applications: ["Modular kitchen vegetable drawers", "Pantry units"]
    }
  ],
  "wardrobe-accessories": [
    {
      name: "Soft-Close Trouser Pullout",
      specs: { "Capacity": "12 trouser hangers", "Cabinet Width": "600mm / 900mm", "Material": "Aluminum frame" },
      finishes: ["Muted Mocha Gold PVD", "Sleek Matt Black"],
      features: ["Non-slip rubber lined hanging rods", "Fully pullout wardrobe access", "Dampened soft-close action"],
      applications: ["Bedroom wardrobes", "Master walk-in closets"]
    },
    {
      name: "Extendable Tie & Belt Holder",
      specs: { "Capacity": "24 hooks", "Installation": "Wardrobe side board mount" },
      finishes: ["Brushed Silver with Grey ABS", "Matte Black with Black ABS"],
      features: ["Telescopic side-mount sliding track", "Keeps ties and belts tangle-free", "Saves vertical closet space"],
      applications: ["Wardrobe side walls", "Walk-in closet dressing zones"]
    },
    {
      name: "Multi-Tier Sliding Shoe Organizer",
      specs: { "Capacity": "12 - 18 pairs", "Layers": "3-tier expandable slide rack" },
      finishes: ["Mocha Gold Powder Coated", "Satin Silver Steel"],
      features: ["Tilted wire shelves prevent shoe drop", "Full extension sliding tracks", "Soft-close damper bumpers"],
      applications: ["Bottom wardrobe cabinets", "Walk-in shoe closets"]
    },
    {
      name: "Deep Wire Wardrobe Basket",
      specs: { "Load rating": "30kg", "Material": "Stainless Steel SS 304" },
      finishes: ["Polished Chrome SS", "Matte Black Powder Coated"],
      features: ["Allows stored clothes to breathe", "Smooth quiet drawer channels", "Ideal for bulky winter sweaters"],
      applications: ["Wardrobe drawers base", "Laundry cabinets"]
    },
    {
      name: "Velvet Jewellery Drawer Organizer",
      specs: { "Compartments": "Multi-grid slots + Ring holders + Watch rolls", "Material": "MDF + Premium velvet lining" },
      finishes: ["Royal Charcoal Grey Velvet", "Luxury Beige Velvet"],
      features: ["Keeps necklaces tangle-free", "Soft velvet lining prevents jewelry scratching", "Fits premium wardrobe drawers"],
      applications: ["Walk-in closet dressers", "Master bedroom jewelry drawers"]
    },
    {
      name: "Hydraulic Wardrobe Lift Hanger",
      specs: { "Load Capacity": "10kg - 15kg", "Height range": "Pull-down rod extends 1.2m" },
      finishes: ["Silver Anodized steel rod", "Matte Black rod"],
      features: ["Accesses top wardrobe clothes easily", "Hydraulic fluid gas lift assists return", "Ergonomic rubber grip handle"],
      applications: ["High ceiling wardrobes", "Tall walk-in closets"]
    },
    {
      name: "Solid Wood Hanger Set",
      specs: { "Material": "Seasoned Lotus Wood", "Pack": "10 pieces hanger set" },
      finishes: ["Natural Wood varnish", "Matte White painted"],
      features: ["Extra-broad shoulder flares", "Non-slip velvet trouser bar", "360 degree rotating chrome hook"],
      applications: ["Luxury coat closets", "Boutiques display", "Master wardrobes"]
    },
    {
      name: "Swiveling Pull-Out Wardrobe Mirror",
      specs: { "Mirror Type": "Ultra Clear Silver Mirror", "Rotation": "180 degrees swivel pullout" },
      finishes: ["Anodized Aluminium frame grey", "Rose Gold frame"],
      features: ["Hides away inside wardrobe, slide out to view", "Smooth quiet tracks", "Distortion-free clear reflection"],
      applications: ["Wardrobe interior side panels", "Compact bedrooms"]
    },
    {
      name: "Mesh Wire Storage Basket",
      specs: { "Material": "Steel mesh powder coated", "Slide type": "Soft close side mount" },
      finishes: ["Matte Coffee Brown", "Glossy White"],
      features: ["Fine mesh stops small accessories falling", "Soft close hydraulic damper", "Sleek modern styling"],
      applications: ["Wardrobe drawers", "Kids closets"]
    },
    {
      name: "Extendable Wardrobe Valet Rod",
      specs: { "Length": "300mm - 500mm telescopic", "Material": "Stainless Steel SS 304" },
      finishes: ["Satin Stainless Steel", "Polished Chrome Gold"],
      features: ["Top-mounting telescoping hanger hook", "Ideal for hanging tomorrow's outfits", "Thick heavy-duty slide rod"],
      applications: ["Bedroom wardrobes", "Ironing zones", "Coat closets"]
    },
    {
      name: "Canvas Laundry Hamper Basket",
      specs: { "Volume": "45L", "Material": "Removable wash canvas bag + Steel frame" },
      finishes: ["Off-White Canvas / Grey frame"],
      features: ["Slide-out laundry basket frame", "Bag has side handles, easy wash carry", "Soft-close channels"],
      applications: ["Wardrobe base cabinets", "Bathroom vanity laundry bins"]
    },
    {
      name: "Premium Pull-out T-Shirt Organizer",
      specs: { "Layers": "5-tier sliding acrylic shelves", "Cabinet Width": "600mm" },
      finishes: ["Sleek Mocha Gold / Clear Acrylic"],
      features: ["Keeps folded shirts separate", "Clear views from front", "Silent slide tracks"],
      applications: ["Master wardrobes", "Walk-in closets"]
    },
    {
      name: "Sleek Tie and Accessory Tray",
      specs: { "Material": "Faux Leather + Velvet lining", "Width": "600mm / 900mm" },
      finishes: ["Luxurious Mocha Brown Faux Leather"],
      features: ["Premium jewelry & tie grid storage", "Includes watch rolls", "Synchronized soft-close rails"],
      applications: ["Elite bedroom closets", "Jewellery drawers"]
    },
    {
      name: "Wardrobe Pull-Out Slat Shoe Rack",
      specs: { "Capacity": "8 - 12 shoe pairs", "Material": "Aluminum frame + ABS shoe slates" },
      finishes: ["Mocha Gold PVD Finish", "Matte Black Finish"],
      features: ["Flat shelf shoe organizers", "Smooth quiet sliding rails", "Includes dividers"],
      applications: ["Wardrobes shoe compartments", "Hallways"]
    },
    {
      name: "Wardrobe Safety Drawer Box",
      specs: { "Access": "Digital Code PIN + Fingerprint scanner", "Shell": "Solid Steel core" },
      finishes: ["Matte Black Steel / Velvet interior"],
      features: ["Concealed lock drawer inside wardrobe", "Heavy-duty steel anchors", "Emergency manual backup key"],
      applications: ["Bedroom wardrobes safe zone", "Office files safe"]
    },
    {
      name: "Rotatable Wardrobe Hook Set",
      specs: { "Material": "Zinc Alloy base + 4 hooks", "Rotation": "360 degrees" },
      finishes: ["Antique Copper", "Satin Chrome", "Matte Black"],
      features: ["Holds multiple handbags or belts", "Revolves smoothly", "Saves space under shelf hanging"],
      applications: ["Wardrobe hanging rods", "Hallways coat hooks"]
    },
    {
      name: "Wardrobe Lift Hanger (Pneumatic)",
      specs: { "Load rating": "15kg", "Frame": "Reinforced steel tubes" },
      finishes: ["Anodized Bronze Frame", "Silver Steel Frame"],
      features: ["Pulls hanging rod down to reachable level", "Smooth soft lift assist", "Ergonomic plastic handle"],
      applications: ["High wardrobe spaces", "Luxury closets"]
    },
    {
      name: "Faux Leather Wardrobe Storage Basket",
      specs: { "Material": "Faux leather basket + Soft slide frame" },
      finishes: ["Elegant Tan Leather", "Mocha Gold Leather"],
      features: ["Luxury textured leather design", "Stores folded shirts cleanly", "Soft close sliding"],
      applications: ["Luxury wardrobes", "Bed console storages"]
    },
    {
      name: "Telescopic Wardrobe Clothes Hanger Rod",
      specs: { "Length": "500mm - 1200mm adjustable", "Material": "SS 304 tube" },
      finishes: ["Satin Stainless Steel", "Polished Gold PVD SS"],
      features: ["Thick gauge rod holds heavy coats", "Adjustable screw mount brackets", "Elegant modern end-caps"],
      applications: ["Wardrobes hanging rods", "Laundry rooms"]
    },
    {
      name: "Sleek Slide-Out Scarf Rack",
      specs: { "Hooks": "10 loop rings", "Installation": "Side wall mount sliding" },
      finishes: ["Matte Black with Mocha rings"],
      features: ["Holds scarfs, shawls, and belts crease-free", "Smooth ball bearing slide tracks"],
      applications: ["Wardrobes side panels", "Walk-in closets"]
    },
    {
      name: "Premium LED Wardrobe Rod",
      specs: { "Length": "600mm / 900mm / 1200mm", "Sensor": "PIR Motion Sensor", "Power": "Rechargeable Lithium Battery" },
      finishes: ["Anodized Aluminium Profile"],
      features: ["LED wardrobe rail lights up when door opens", "Built-in motion sensor auto turn off", "Easy snap-in bracket mount"],
      applications: ["Master wardrobes", "Coat closets", "Dark pantry closets"]
    },
    {
      name: "Canvas Wardrobe Storage Box",
      specs: { "Material": "Breathable canvas fabric + leather handle", "Pack": "3 boxes pack" },
      finishes: ["Grey Canvas with Brown Leather details"],
      features: ["Protects clothes from dust during seasons", "Collapsible design saves space when empty", "Reinforced side boards"],
      applications: ["Wardrobe top shelves", "Under bed storage"]
    },
    {
      name: "Luxury Wardrobe Lift (Heavy-Duty)",
      specs: { "Load rating": "18kg Max", "Material": "Reinforced aluminum tubes" },
      finishes: ["Mocha Gold Powder Coated Frame"],
      features: ["Heavy load lift mechanism", "Dampened automatic slow return lift", "Fits wardrobes up to 1100mm wide"],
      applications: ["Luxury closets", "Tall ceiling wardrobes"]
    },
    {
      name: "Trousers Pull-out Tray (Double Side)",
      specs: { "Hangers": "20 hanging bars", "Width": "900mm cabinet width" },
      finishes: ["Mocha Gold PVD Frame"],
      features: ["High capacity trouser rack", "Double-side sliding bars", "Soft-close channels"],
      applications: ["Large walk-in closets", "Master wardrobes"]
    },
    {
      name: "Jewellery Tray with Velvet Divider",
      specs: { "Compartments": "24 modular slot grid", "Base": "MDF base wood" },
      finishes: ["Beige Velvet Finish", "Charcoal Velvet Finish"],
      features: ["Modular dividers can be removed", "Fits inside shallow wardrobe drawers", "Keeps small items organized"],
      applications: ["Jewellery drawers", "Cabinet drawers"]
    },
    {
      name: "Velvet Tie Drawer Divider",
      specs: { "Grid": "16 square grids for rolled ties", "Lining": "Premium soft velvet" },
      finishes: ["Royal Grey Velvet", "Cream Velvet"],
      features: ["Keeps ties perfectly rolled", "Soft velvet backing", "Fits standard dresser channels"],
      applications: ["Wardrobes tie organizer", "Dresser drawers"]
    },
    {
      name: "Adjustable Shoe Rack sliding unit",
      specs: { "Layers": "4 adjustable wire shelves", "Cabinet Width": "600mm" },
      finishes: ["High Polish Chrome SS", "Mocha Gold Steel"],
      features: ["Store flats or high heels by adjusting tilt", "Full slide unit", "Heavy wire structural strength"],
      applications: ["Shoe cabinets", "Wardrobe base partitions"]
    }
  ],
  "bathroom-accessories": [
    {
      name: "LED Backlit Bathroom Mirror",
      specs: { "LED strip": "High-density waterproof LED", "Light colors": "Warm / Cool / Natural", "Power": "12V DC" },
      finishes: ["Frosted LED border", "Beveled with ambient backlight"],
      features: ["Defogger heated pad clears mirror steam", "Touch sensor switch dimmable", "IP54 waterproof casing"],
      applications: ["Bathroom vanity zones", "Spas washrooms", "Hotel washrooms"]
    },
    {
      name: "Double Door Mirror Cabinet",
      specs: { "Body Material": "Waterproof PVC foam board", "Mirror": "5mm Silver Mirror", "Shelves": "3 shelves inside" },
      finishes: ["High Gloss White PVC", "Textured Oak Woodgrain"],
      features: ["100% waterproof cabinet box", "Soft-close mirror door hinges", "Plenty of vanity storage space"],
      applications: ["Washrooms vanity wall", "Powder rooms"]
    },
    {
      name: "Wall-Mounted Soap Dispenser",
      specs: { "Volume": "350ml capacity", "Material": "Stainless Steel SS 304 casing + ABS pump" },
      finishes: ["Satin Stainless Steel", "Matte Black", "Polished Chrome Gold"],
      features: ["Non-drip pump nozzle design", "Clear liquid level viewing window", "Easy wall screw mounting"],
      applications: ["Restrooms washbasins", "Kitchen sink counters", "Hotel showers"]
    },
    {
      name: "Tempered Glass Corner Shelf",
      specs: { "Glass Thickness": "8mm Tempered", "Clamp Material": "Solid Brass chrome plated" },
      finishes: ["Clear Glass / Chrome Clamps", "Frosted Glass / Matte Black Clamps"],
      features: ["Rounded safety corners", "Holds up to 10kg weight", "Rustproof mounting hardware"],
      applications: ["Shower corner walls", "Bathroom vanity corners", "Kitchen spice corners"]
    },
    {
      name: "Double Towel Bar Rail",
      specs: { "Length": "600mm", "Material": "Premium Solid Brass" },
      finishes: ["Satin Chrome Plated", "Matte Black", "PVD Rose Gold"],
      features: ["Holds two bath towels dry", "Thick heavy gauge metal rods", "Concealed wall screw brackets"],
      applications: ["Bathroom walls", "Hotel washroom dressing areas"]
    },
    {
      name: "Minimalist Round Towel Ring",
      specs: { "Diameter": "160mm", "Material": "SS 304 Stainless Steel" },
      finishes: ["Satin Stainless Steel", "Matte Black Finish", "Gold PVD Chrome"],
      features: ["Smooth swinging ring holder", "Anti-rattle plastic bushing hinge", "Compact towel hanging space"],
      applications: ["Washbasin vanity walls", "Guest washrooms"]
    },
    {
      name: "Stainless Steel Tissue Holder",
      specs: { "Cover": "Standard roll cover lid", "Material": "Stainless Steel SS 304" },
      finishes: ["Brushed SS 304", "Polished Chrome SS"],
      features: ["Splash guard cover keeps roll dry", "Easy roll replacement bar", "Heavy duty wall anchors"],
      applications: ["Toilet seat side walls"]
    },
    {
      name: "Dual Heavy-Duty Robe Hook",
      specs: { "Hooks": "2 hooks base", "Material": "Solid Zinc Alloy" },
      finishes: ["Antique Brass", "Satin Chrome", "Matte Black"],
      features: ["Compact heavy weight robe hanger", "Smooth rounded hooks prevent clothes tear", "Concealed screw mounts"],
      applications: ["Bathroom doors back", "Bedroom doors safety hangers"]
    },
    {
      name: "Wire Corner Shower Basket",
      specs: { "Layers": "2-tier corner storage", "Material": "Stainless Steel SS 304 wire" },
      finishes: ["Polished Chrome SS wire", "Matte Black SS wire"],
      features: ["Self-draining wire mesh shelves", "Holds multiple shampoo and soap bottles", "Rust-free warranty for 5 years"],
      applications: ["Shower areas walls", "Bathroom walls"]
    },
    {
      name: "Wall-Mounted Tumbler Holder",
      specs: { "Tumbler Material": "Frosted Glass cup", "Holder": "Brass ring holder" },
      finishes: ["Chrome ring with Frosted cup", "Matte Black ring with Frost cup"],
      features: ["Removable glass cup is easy to clean", "Secure ring base bracket", "Keeps toothbrushes hygienic"],
      applications: ["Above-sink bathroom vanities"]
    },
    {
      name: "Tempered Glass Straight Shelf",
      specs: { "Size": "450mm x 120mm", "Glass Thickness": "8mm Tempered" },
      finishes: ["Clear Glass", "Frosted Satin Glass"],
      features: ["Sleek modern wall rack shelf", "Includes security guard front rail", "Rustproof brass brackets"],
      applications: ["Below-mirror bathroom vanity", "Washrooms shelving"]
    },
    {
      name: "Brass Soap Dish Holder",
      specs: { "Dish Material": "Removable Frosted Glass dish", "Base": "Solid Brass wall bracket" },
      finishes: ["Satin Chrome Holder", "Antique Copper Holder"],
      features: ["Elegant wall dish design", "Drains soap water easily", "Concealed screws design"],
      applications: ["Shower walls", "Washbasin vanity walls"]
    },
    {
      name: "Grab Bar Safety Rail",
      specs: { "Length": "300mm / 450mm", "Diameter": "32mm thick tube", "Load Capacity": "150kg weight support" },
      finishes: ["Satin Stainless Steel with Knurled grip", "White Nylon Anti-slip coating"],
      features: ["Slip-resistant knurled texture grip", "Heavy duty structural load wall anchors", "Crucial safety accessory"],
      applications: ["Shower walls", "Bathtub side walls", "Toilet seats grab bars"]
    },
    {
      name: "Double Door Bathroom Mirror Cabinet",
      specs: { "Material": "Waterproof PVC foam board", "Width": "800mm", "Mirror": "5mm Silvered LED Backlit" },
      finishes: ["Pure White Gloss PVC", "Granite Grey Texture PVC"],
      features: ["Integrated LED cabinet mirror doors", "Defogger switch included", "Waterproof and damp-proof box"],
      applications: ["Master bathrooms washbasin vanities"]
    },
    {
      name: "Luxury LED Vanity Mirror (Oval)",
      specs: { "Shape": "Oval shape mirror", "Size": "500mm x 800mm", "Features": "3-tone lights, Touch sensor" },
      finishes: ["Frosted LED Oval halo border", "Gold frame border"],
      features: ["Stunning vanity lighting halo", "Anti-fog heating plate", "Copper-free silver backing"],
      applications: ["Powder room luxury vanities", "Hotel bedroom vanity dressing"]
    },
    {
      name: "Solid Brass Soap Holder (Basket)",
      specs: { "Material": "Solid Brass heavy wire basket" },
      finishes: ["Gold Brass Polish", "Antique Bronze Finish", "Matte Black Brass"],
      features: ["Premium wire basket drain design", "No messy soap sludge", "Heavy solid brass casting body"],
      applications: ["Bathtub walls", "Shower cabin corners"]
    },
    {
      name: "Tissue Roll Holder with Shelf",
      specs: { "Material": "Solid Aluminum alloy + Wood shelf" },
      finishes: ["Sleek Black Holder with Walnut wood shelf"],
      features: ["Convenient top shelf holds smartphones", "Roll dispenser hook is easy load", "Modern look"],
      applications: ["Toilet seat side walls"]
    },
    {
      name: "Multi-purpose Robe Hooks Bar",
      specs: { "Hooks": "5 hooks rail bar", "Length": "350mm", "Material": "SS 304 Grade" },
      finishes: ["Polished Chrome SS", "Matte Black SS"],
      features: ["Hang multiple clothes or towels", "Sturdy rail bar design", "Concealed wall mounts"],
      applications: ["Bathroom walls", "Changing room entries", "Bedroom doors"]
    },
    {
      name: "Bathroom Corner Caddy (Tension Pole)",
      specs: { "Layers": "4 adjustable basket shelves", "Pole height": "1.2m - 2.5m adjustable" },
      finishes: ["Stainless steel rods / White ABS baskets"],
      features: ["Space saving corner organizer", "Tension spring holds pole firm between ceiling/floor"],
      applications: ["Bathtubs corner walls", "Shower areas corners"]
    },
    {
      name: "Smart Mirror Cabinet (Single Door)",
      specs: { "Mirror": "LED touch backlit", "Casing": "Anodized Aluminum waterproof box", "Shelf": "Adjustable glass shelves" },
      finishes: ["Silver Anodized Aluminum"],
      features: ["Built-in shaver sockets inside", "Defogger pad & LED sensor", "Durable aluminum structure"],
      applications: ["Luxury apartment bathrooms", "Modern offices"]
    },
    {
      name: "Wall Soap Dispenser (Double)",
      specs: { "Capacity": "350ml + 350ml dual compartments", "Usage": "Shampoo + Bodywash" },
      finishes: ["Sleek Chrome Casing", "Matte Black Casing"],
      features: ["Double push buttons dispenser", "Saves shower bottle clutter", "Key lock security opening"],
      applications: ["Shower enclosures", "Resorts washrooms"]
    },
    {
      name: "Towel Shelf Rack with Hook Rail",
      specs: { "Size": "600mm x 220mm", "Material": "Stainless Steel SS 304" },
      finishes: ["Polished Chrome SS", "Matte Black SS", "PVD Gold SS"],
      features: ["Top shelf holds folded dry towels", "Bottom rail for hanging wet towels", "Includes 4 sliding hooks"],
      applications: ["Bathroom walls", "Hotel washrooms"]
    },
    {
      name: "Liquid Soap Pump dispenser (Table)",
      specs: { "Material": "Genuine Marble stone container + Metal pump" },
      finishes: ["Carrara White Marble / Chrome Pump", "Black Marquina Marble / Gold Pump"],
      features: ["Luxury heavy natural marble weight", "Anti-skid foam bottom pads", "Sleek liquid pump"],
      applications: ["Washbasin vanity countertops", "Hotel lobby sinks"]
    },
    {
      name: "Toothbrush & Tumbler Wall Holder",
      specs: { "Slots": "4 toothbrush slots + 1 tumbler ring", "Material": "Stainless Steel SS 304" },
      finishes: ["Satin Stainless Steel", "Matte Black SS"],
      features: ["Hygienic toothbrush separation slots", "Included frosted glass cup", "Concealed wall screws mount"],
      applications: ["Washbasin vanity walls", "Kids washrooms"]
    },
    {
      name: "Luxury Floor Standing Towel Rack",
      specs: { "Material": "Heavy duty Steel tubing", "Design": "3-tier ladder rack steps" },
      finishes: ["Luxury Gold Paint Coating", "Matte Black Finish"],
      features: ["No wall drilling required", "Sturdy heavy steel base prevents tipping", "Elegant towel ladder style"],
      applications: ["Master bathroom floor", "Spas dressing rooms"]
    },
    {
      name: "Recessed Toilet Paper Holder",
      specs: { "Installation": "In-wall recessed installation", "Material": "SS 304" },
      finishes: ["Satin Stainless Steel", "Matte Black"],
      features: ["Hides tissue paper roll inside wall", "Saves bathroom walking space", "Waterproof cover lid"],
      applications: ["Compact bathrooms", "Modern guest toilets"]
    },
    {
      name: "Tempered Glass Corner Shelf (Elite)",
      specs: { "Glass thickness": "10mm Heavy Glass", "Rail": "SS 304 safety guardrail" },
      finishes: ["Clear Glass with Gold Rail", "Frosted Glass with Matt Black Rail"],
      features: ["Extra-thick tempered glass safety", "Safety rail stops bottle falls", "Rustproof brass mounting brackets"],
      applications: ["Elite shower rooms", "Hotel washroom vanity corners"]
    }
  ]
};

// Programmatic Generator to compile the 308 products!
// Glass (35), Doors (30), other 9 categories (27 each) => 35 + 30 + 27*9 = 308 products.
export const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let productCounter = 1001;

  categoriesData.forEach((category) => {
    const templates = productTemplates[category.slug];
    const imageList = unsplashCollections[category.slug];

    // Determine target size for this category to meet the total count
    let targetSize = 27;
    if (category.slug === "glass") targetSize = 35;
    if (category.slug === "doors") targetSize = 30;

    for (let i = 0; i < targetSize; i++) {
      // Loop over templates, repeating and modifying templates if we need more than we have
      const templateIdx = i % templates.length;
      const baseTemplate = templates[templateIdx];
      
      const code = `NES-${productCounter++}`;
      const slug = `${baseTemplate.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${code.toLowerCase()}`;
      
      // If we are repeating templates, add variations to the name
      let name = baseTemplate.name;
      if (i >= templates.length) {
        const iteration = Math.floor(i / templates.length);
        const prefixes = ["Elite", "Supreme", "Exclusive", "Royal", "Pro"];
        const prefix = prefixes[(iteration - 1) % prefixes.length];
        name = `${prefix} ${baseTemplate.name}`;
      }

      // Generate a realistic description based on the name
      const description = `This ${name} is engineered to deliver exceptional performance and premium aesthetics. Featuring state-of-the-art construction, it is the ideal choice for high-end residential and commercial architectural installations seeking durability and style.`;

      // Cycle images cleanly
      const mainImgId = imageList[i % imageList.length];
      const secondImgId = imageList[(i + 1) % imageList.length];
      const thirdImgId = imageList[(i + 2) % imageList.length];

      const images = [
        `https://images.unsplash.com/${mainImgId}?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/${secondImgId}?auto=format&fit=crop&w=800&q=80`,
        `https://images.unsplash.com/${thirdImgId}?auto=format&fit=crop&w=800&q=80`
      ];

      // Build specs
      const specifications = Object.entries(baseTemplate.specs).map(([label, value]) => ({
        label,
        value
      }));
      // Add standard specs
      specifications.push({ label: "Product Code", value: code });
      specifications.push({ label: "Warranty", value: category.slug.includes("locks") || category.slug.includes("plywood") ? "10 Years" : "5 Years" });
      specifications.push({ label: "Brand", value: "Nesam Premium" });

      products.push({
        id: `${category.slug}-${i}`,
        slug,
        name,
        code,
        category: category.slug,
        description,
        specifications,
        features: baseTemplate.features,
        applications: baseTemplate.applications,
        finishes: baseTemplate.finishes,
        images
      });
    }
  });

  return products;
};

// Export pre-generated list to keep it fast
export const productsData = generateProducts();

// Helper functions for easy querying
export const getProductBySlug = (slug: string): Product | undefined => {
  return productsData.find((p) => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return productsData.filter((p) => p.category === categorySlug);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

export const getPrevAndNextProduct = (product: Product): { prev: Product; next: Product } => {
  const categoryProducts = getProductsByCategory(product.category);
  const currentIndex = categoryProducts.findIndex((p) => p.id === product.id);
  
  const prevIndex = (currentIndex - 1 + categoryProducts.length) % categoryProducts.length;
  const nextIndex = (currentIndex + 1) % categoryProducts.length;

  return {
    prev: categoryProducts[prevIndex],
    next: categoryProducts[nextIndex]
  };
};
