export interface Product {
  id: string;
  slug: string;
  name: string;
  name2?: string;
  brand?: string;
  code?: string;
  category: string;
  description?: string;
  specifications?: { label: string; value: string }[];
  features?: string[];
  applications?: string[];
  finishes?: string[];
  images: string[];
  isImageOnly?: boolean;
  cardBg?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image?: string;
}

export const categoriesData: Category[] = [
  {
    id: "cat-glass",
    name: "Architectural Glass",
    slug: "glass",
    description: "Premium float, toughened, smart, and decorative glass solutions for modern structures.",
    icon: "GlassWater",
    image: "/images/glass-category.png"
  },
  {
    id: "cat-doors",
    name: "Designer Doors",
    slug: "doors",
    description: "Premium flush, teak, membrane, and engineered doors engineered for longevity and style.",
    icon: "DoorOpen",
    image: "/images/doors-category.png"
  },
  {
    id: "cat-plywood",
    name: "Premium Plywood",
    slug: "plywood",
    description: "Marine grade, BWP, BWR, and flexible plywood conforming to global IS standards.",
    icon: "Layers",
    image: "/images/plywood-category.png"
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
    icon: "Wrench",
    image: "/images/hardware-category.png"
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
    id: "cat-bathroom-accessories",
    name: "Bathroom Fittings & Shelves",
    slug: "bathroom-accessories",
    description: "Premium LED mirrors, glass shelves, soap dispensers, and luxury towel bars.",
    icon: "Bath"
  }
];

export const generateProducts = (): Product[] => {
  const products: Product[] = [];

  // Add Korakkar Designer Doors Catalog Product
  products.unshift(
    {
      id: "cat-doors-korakkar-alex-black-gold-1",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-1",
      name: "ALEX - Black Gold ",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/2.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-2",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-2",
      name: "ALEX - Black Silver",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/3.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-3",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-3",
      name: "ALEX - Cherry",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/4.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-4",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-4",
      name: "Antique-Cherry",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/5.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-5",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-5",
      name: "Antique-Walnut",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/6.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-6",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-6",
      name: "KH601-sandal",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/7.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-doors-korakkar-alex-black-gold-7",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-7",
      name: "KH602-cherry",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/8.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-8",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-8",
      name: "KH604-walnut",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/9.jpeg"],
      isImageOnly: true
    },

    {
      id: "cat-doors-korakkar-alex-black-gold-11",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-11",
      name: "KH605-Black magic",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/12.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-12",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-12",
      name: "KH614-black silver",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/13.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-13",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-13",
      name: "Kh615-black gold",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/14.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-14",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-14",
      name: "kh801-sandal",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/15.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-15",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-15",
      name: "kh1802-cherry",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/16.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-16",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-16",
      name: "kh-1804 walnut",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/17.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-17",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-17",
      name: "kh-1805 black magic",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/18.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-18",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-18",
      name: "kh-1807 satin white",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/19.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-19",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-19",
      name: "kh-1808 white beach",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/20.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-20",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-20",
      name: "kh-1811 blue",
      name2:"noyyal",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/21.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-21",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-21",
      name: "kpipl 1452",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/22.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-22",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-22",
      name: "kpipl 1501",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/23.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-23",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-23",
      name: "kpipl 1502",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/24.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-24",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-24",
      name: "kpipl 1505",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/25.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-25",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-25",
      name: "kpipl 1511",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/26.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-26",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-26",
      name: "kpipl 1524",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/27.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-27",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-27",
      name: "kpipl 1528",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/28.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-28",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-28",
      name: "kpipl 1538",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/29.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-29",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-29",
      name: "kpipl 1539",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/30.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-30",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-30",
      name: "kpipl 1540",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/31.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-31",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-31",
      name: "kpipl 1549",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/32.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-32",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-32",
      name: "kpipl 1632",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/33.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-33",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-33",
      name: "kpipl 1636",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/34.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-34",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-34",
      name: "kpipl 1651",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/35.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-35",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-35",
      name: "kpipl 1652",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/36.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-36",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-36",
      name: "kpipl 1653",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/37.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-37",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-37",
      name: "kpipl 1654",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/38.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-38",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-38",
      name: "kpipl 1660",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/39.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-39",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-39",
      name: "kpipl 1673",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/40.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-40",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-40",
      name: "kpipl 1674",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/41.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-41",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-41",
      name: "kpipl 1697",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/42.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-42",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-42",
      name: "kpipl 1699",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/43.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-43",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-43",
      name: "kpipl 1708",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/44.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-44",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-44",
      name: "kpipl 1714",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/45.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-45",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-45",
      name: "kpipl 1736",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/46.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-46",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-46",
      name: "kpipl 1749",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/47.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-47",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-47",
      name: "kpipl 1752",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/48.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-48",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-48",
      name: "kpipl 1753",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/49.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-49",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-49",
      name: "kpipl 1758",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/50.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-50",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-50",
      name: "kpipl 1759",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/51.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-51",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-51",
      name: "kpipl 1763",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/52.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-52",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-52",
      name: "kpipl 1764",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/53.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-53",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-53",
      name: "kpipl 1768",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/54.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-54",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-54",
      name: "kpipl 1769",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/55.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-55",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-55",
      name: "kpipl 1803",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/56.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-56",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-56",
      name: "kpipl 1804",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/57.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-57",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-57",
      name: "kpipl 1805",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/58.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-58",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-58",
      name: "kpipl 1822",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/59.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-59",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-59",
      name: "kpipl 1832",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/60.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-60",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-60",
      name: "kpipl 1837",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/61.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-61",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-61",
      name: "kpipl 1867",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/62.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-62",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-62",
      name: "kpipl 1873",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/63.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-63",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-63",
      name: "kpipl 1877",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/64.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-64",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-64",
      name: "kpipl 1879",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/65.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-65",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-65",
      name: "kpipl 1889",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/66.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-66",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-66",
      name: "kpipl 1893",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/67.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-67",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-67",
      name: "kpipl 1894",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/68.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-68",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-68",
      name: "kpipl 1897",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/69.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-69",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-69",
      name: "kpipl 1899",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/70.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-70",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-70",
      name: "kpipl 1900",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/71.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-71",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-71",
      name: "emb-005",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/72.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-72",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-72",
      name: "emb-007",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/73.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-73",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-73",
      name: "emb-008",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/74.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-74",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-74",
      name: "emb-012",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/75.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-75",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-75",
      name: "emb-013",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/76.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-76",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-76",
      name: "emb-016",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/77.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-77",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-77",
      name: "emb-042 ",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/78.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-78",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-78",
      name: "emb-060",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/79.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-79",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-79",
      name: "emb-126",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/80.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-80",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-80",
      name: "emb-127",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/81.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-81",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-81",
      name: "emb-129",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/82.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-82",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-82",
      name: "emb-132",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/83.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-doors-korakkar-alex-black-gold-83",
      slug: "designer-doors-catalog-korakkar-alex-black-gold-83",
      name: "emb-134",
      brand: "KORAKKAR®",
      category: "doors",
      images: ["/images/korakkar/84.jpeg"],
      isImageOnly: true
    },

























    {
      id: "cat-furniture-hardware-bonus-drawer-slide-1",
      slug: "furniture-hardware-catalog-bonus-drawer-slide-1",
      name: "Drawer Slide",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/1 drawer slide.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-drawer-slide-2",
      slug: "furniture-hardware-catalog-bonus-drawer-slide-2",
      name: "Drawer Slide - Soft Close",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/2 drawer.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-slip-on",
      slug: "furniture-hardware-catalog-bonus-slip-on",
      name: "Slip-On-Hinge",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/2 slip on.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-2d-clip",
      slug: "furniture-hardware-catalog-bonus-2d-clip",
      name: "2D Clip-On Soft Close Hinge",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/2 2d clip.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-3d-heavy",
      slug: "furniture-hardware-catalog-bonus-3d-heavy",
      name: "3D Heavy Duty Hinge",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/2 3d heavy.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-c-type-handles",
      slug: "furniture-hardware-catalog-bonus-c-type-handles",
      name: "C Type Profile Handle",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/22 C type handles.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-compact-profile",
      slug: "furniture-hardware-catalog-bonus-compact-profile",
      name: "Compact Aluminum Profile",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/22 compact profile.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-furniture-hardware-bonus-pull-handles",
      slug: "furniture-hardware-catalog-bonus-pull-handles",
      name: "Cabinet Pull Handles",
      brand: "BONUS®",
      category: "furniture-hardware",
      images: ["/images/bonus/22 pull handles.jpeg"],
      isImageOnly: true
    },
    // BONUS Door Hardware Catalog Products
    {
      id: "cat-door-hardware-bonus-ruby-mortice",
      slug: "door-hardware-catalog-bonus-ruby-mortice",
      name: "Ruby Mortice Lock Set",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/3 ruby.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-premium-mortice",
      slug: "door-hardware-catalog-bonus-premium-mortice",
      name: "Premium Mortice Lock Set",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/3 premium.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-marvel-mortice",
      slug: "door-hardware-catalog-bonus-marvel-mortice",
      name: "Marvel Mortice Lock Set",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/3 marvel.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-pearl-mortice",
      slug: "door-hardware-catalog-bonus-pearl-mortice",
      name: "Pearl Mortice Lock Set",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/3 pearl.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-hercules-handle",
      slug: "door-hardware-catalog-bonus-hercules-handle",
      name: "Hercules Handle Set",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/4 hercules.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-hercules2-rose",
      slug: "door-hardware-catalog-bonus-hercules2-rose",
      name: "Hercules Rose Handle Set",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/4 hercules2.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-round-rose",
      slug: "door-hardware-catalog-bonus-round-rose",
      name: "Round Rose Mortice Handle",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/4 round.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-hardware-bonus-square-rose",
      slug: "door-hardware-catalog-bonus-square-rose",
      name: "Square Rose Mortice Handle",
      brand: "BONUS®",
      category: "door-hardware",
      images: ["/images/bonus/4 square.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-slim-tandem",
      slug: "modular-kitchen-catalog-hablo-slim-tandem",
      name: "Slim tandem ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/2 first.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-slim-glass-tandem",
      slug: "modular-kitchen-catalog-hablo-slim-glass-tandem",
      name: "Slim glass tandem ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/2 slim glass.jpeg"],
      isImageOnly: true
    },
    { 
      id: "cat-modular-kitchen-hablo-bottle-pullout-2-shelf",
      slug: "modular-kitchen-catalog-hablo-bottle-pullout-2-shelf",
      name: "bottle pullout-2 shelf",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/2 sheif.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-pantry-unit",
      slug: "modular-kitchen-catalog-hablo-pantry-unit",
      name: "pantry unit",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/2 unit.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-glass-pantry-unit",
      slug: "modular-kitchen-catalog-hablo-glass-pantry-unit",
      name: "glass pantry unit",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/3 first.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-straight-pull-out-unit",
      slug: "modular-kitchen-catalog-hablo-straight-pull-out-unit",
      name: "straight pull out unit ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/3 pull out.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-swing-corner",
      slug: "modular-kitchen-catalog-hablo-swing-corner",
      name: "swing corner  ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/3 swing corner.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-universal-magic-corner",
      slug: "modular-kitchen-catalog-hablo-universal-magic-corner",
      name: "universal magic corner ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/3 universal.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-glass-liftor-unit",
      slug: "modular-kitchen-catalog-hablo-glass-liftor-unit",
      name: "glass liftor unit ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/4 first.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-wooden-wicker-basket",
      slug: "modular-kitchen-catalog-hablo-wooden-wicker-basket",
      name: "wooden wicker basket ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/4 wooden .jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-pvc-wicker-basket",
      slug: "modular-kitchen-catalog-hablo-pvc-wicker-basket",
      name: "pvc wicker basket ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/4 pvc.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-dustbin",
      slug: "modular-kitchen-catalog-hablo-dustbin",
      name: "dustbin ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/4 dustbin.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-dish-rack-gtpt",
      slug: "modular-kitchen-catalog-hablo-dish-rack-gtpt",
      name: "dish rack-gtpt",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/4 dish.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-anti-skid-mat",
      slug: "modular-kitchen-catalog-hablo-anti-skid-mat",
      name: "anti skid mat",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/5 first.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-pvc-rolling-shutter",
      slug: "modular-kitchen-catalog-hablo-pvc-rolling-shutter",
      name: "pvc rolling shutter ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/5 pvc roll.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-glass-rolling-shutter",
      slug: "modular-kitchen-catalog-hablo-glass-rolling-shutter",
      name: "glass rolling shutter ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/5 glass roll.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-pan-pullout",
      slug: "modular-kitchen-catalog-hablo-pan-pullout",
      name: "pan pullout",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/5 pan.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-premium-abs-cutlery",
      slug: "modular-kitchen-catalog-hablo-premium-abs-cutlery",
      name: "premium abs cutlery",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/6 first.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-wooden-cutlery-with-spice-rack",
      slug: "modular-kitchen-catalog-hablo-wooden-cutlery-with-spice-rack",
      name: " wooden cutlery with spice rack ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/6 wooden.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-thali-plate-cup-saucer-stand",
      slug: "modular-kitchen-catalog-hablo-thali-plate-cup-saucer-stand",
      name: "thali plate/cup & saucer stand ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/6 thali.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-gas-pump",
      slug: "modular-kitchen-catalog-hablo-gas-pump",
      name: "gas pump",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/6 gas.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-buffering-support",
      slug: "modular-kitchen-catalog-hablo-buffering-support",
      name: "buffering support",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/7 first.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-heavy-duty-push-open",
      slug: "modular-kitchen-catalog-hablo-heavy-duty-push-open",
      name: "heavy duty push open ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/7 heavy duty.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-hydraulic-bed-fitting",
      slug: "modular-kitchen-catalog-hablo-hydraulic-bed-fitting",
      name: "hydraulic bed fitting",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/7 hydralic.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-g-profile",
      slug: "modular-kitchen-catalog-hablo-g-profile",
      name: "g  -  profile  ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/7 gprofile.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-modular-kitchen-hablo-j-profile",
      slug: "modular-kitchen-catalog-hablo-j-profile",
      name: "j  -  profile  ",
      brand: "HABLO®",
      category: "modular-kitchen",
      images: ["/images/hablo/7 jprofile.jpeg"],
      isImageOnly: true
    },
























    // MOBaj Padlocks
    {
      id: "cat-door-locks-mobaj-zabardast",
      slug: "door-locks-catalog-mobaj-zabardast",
      name: "Zabardast",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 zabardast.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-mobaj-premium",
      slug: "door-locks-catalog-mobaj-premium",
      name: "Premium",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 premium.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-mobaj-classic",
      slug: "door-locks-catalog-mobaj-classic",
      name: "Classic",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 classic.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-mobaj-phantom",
      slug: "door-locks-catalog-mobaj-phantom",
      name: "Phantom",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 phantom.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-mobaj-champion",
      slug: "door-locks-catalog-mobaj-champion",
      name: "Champion",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 champion.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-mobaj-mobaj",
      slug: "door-locks-catalog-mobaj-mobaj",
      name: "MOBaj",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 mobraj.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-mobaj-bonus",
      slug: "door-locks-catalog-mobaj-bonus",
      name: "MOBaj Bonus",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 mobraj bonus.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-furniture-hardware-mobaj-drawer-slides",
      slug: "door-locks-catalog-mobaj-drawer-slides",
      name: "Drawer Slides",
      brand: "bonus-MOBaj®",
      category: "door-locks",
      images: ["/images/bonus/1 drawer slide.jpeg"],
      isImageOnly: true
    },























    //quba 
    {
      id: "cat-door-locks-quantum",
      slug: "door-locks-catalog-quantum",
      name: "Quantum",
      category: "door-locks",
      images: ["/images/quba/quantum.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-artis",
      slug: "door-locks-catalog-artis",
      name: "Artis",
      category: "door-locks",
      images: ["/images/quba/artis.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-aspire",
      slug: "door-locks-catalog-aspire",
      name: "Aspire",
      category: "door-locks",
      images: ["/images/quba/aspire.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-aries",
      slug: "door-locks-catalog-aries",
      name: "Aries",
      category: "door-locks",
      images: ["/images/quba/Aries.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-quad-pro",
      slug: "door-locks-catalog-quad-pro",
      name: "Quad Pro",
      category: "door-locks",
      images: ["/images/quba/quad-pro.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-quad",
      slug: "door-locks-catalog-quad",
      name: "Quad",
      category: "door-locks",
      images: ["/images/quba/quad.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-quill",
      slug: "door-locks-catalog-quill",
      name: "Quill",
      category: "door-locks",
      images: ["/images/quba/quill.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-spectra",
      slug: "door-locks-catalog-spectra",
      name: "Spectra",
      category: "door-locks",
      images: ["/images/quba/spectra.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-quatro",
      slug: "door-locks-catalog-quatro",
      name: "Quatro",
      category: "door-locks",
      images: ["/images/quba/quatro.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qrystal",
      slug: "door-locks-catalog-qrystal",
      name: "Qrystal",
      category: "door-locks",
      images: ["/images/quba/qrystal.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qtron-pro",
      slug: "door-locks-catalog-qtron-pro",
      name: "Qtron Pro",
      category: "door-locks",
      images: ["/images/quba/qtron-pro.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qlick",
      slug: "door-locks-catalog-qlick",
      name: "Qlick",
      category: "door-locks",
      images: ["/images/quba/qlick.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-door-locks-qlick-lite",
      slug: "door-locks-catalog-qlick-lite",
      name: "Qlick Lite",
      category: "door-locks",
      images: ["/images/quba/qlick-lite.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qraft",
      slug: "door-locks-catalog-qraft",
      name: "Qraft",
      category: "door-locks",
      images: ["/images/quba/qraft.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qdot",
      slug: "door-locks-catalog-qdot",
      name: "Qdot",
      category: "door-locks",
      images: ["/images/quba/qdot.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qs001f",
      slug: "door-locks-catalog-qs001f",
      name: "QS001F",
      category: "door-locks",
      images: ["/images/quba/5 QS001F.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qs002p",
      slug: "door-locks-catalog-qs002p",
      name: "QS002P",
      category: "door-locks",
      images: ["/images/quba/5 QS002 P.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qs003fp",
      slug: "door-locks-catalog-qs003fp",
      name: "QS003FP",
      category: "door-locks",
      images: ["/images/quba/5 QS003fp.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-door-locks-qs004f",
      slug: "door-locks-catalog-qs004f",
      name: "QS004f",
      category: "door-locks",
      images: ["/images/quba/5 QS004f.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qs004fslb",
      slug: "door-locks-catalog-qs004fslb",
      name: "QS004FSLB",
      category: "door-locks",
      images: ["/images/quba/5 QS004fslb.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-door-locks-qs005f",
      slug: "door-locks-catalog-qs005f",
      name: "QS005F",
      category: "door-locks",
      images: ["/images/quba/5 QS005f.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-door-locks-atom001f",
      slug: "door-locks-catalog-atom001f",
      name: "atom001f",
      category: "door-locks",
      images: ["/images/quba/5 atom001f.jpeg"],
      isImageOnly: true
    },
     {
      id: "cat-door-locks-atom002p",
      slug: "door-locks-catalog-atom002p",
      name: "atom002p",
      category: "door-locks",
      images: ["/images/quba/5 atom002p.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-atom003fsw",
      slug: "door-locks-catalog-atom003fsw",
      name: "atom003fsw",
      category: "door-locks",
      images: ["/images/quba/5 atom003fsw.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhl003",
      slug: "door-locks-catalog-qhl003",
      name: "qh-l003",
      category: "door-locks",
      images: ["/images/quba/6 qhl003.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhlencoder2",
      slug: "door-locks-catalog-qhlencoder2",
      name: "qhl-encoder2",
      category: "door-locks",
      images: ["/images/quba/6 qhl encoder2.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-qhlhhd1",
      slug: "door-locks-catalog-qhlhhd1",
      name: "qhl-hhd1",
      category: "door-locks",
      images: ["/images/quba/6 qhl hhd1.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhlhls-v3.5",
      slug: "door-locks-catalog-qhlhls-v3.5",
      name: "qhl-hls v3.5",
      category: "door-locks",
      images: ["/images/quba/6 qhl hls v3.5.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhlrf2",
      slug: "door-locks-catalog-qhlrf2",
      name: "qhl-rf2",
      category: "door-locks",
      images: ["/images/quba/6 qhl rf2.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhless1",
      slug: "door-locks-catalog-qhless1",
      name: "qhl-ess1",
      category: "door-locks",
      images: ["/images/quba/6 qhl ess 1.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhless2",
      slug: "door-locks-catalog-qhless2",
      name: "qhl-ess2",
      category: "door-locks",
      images: ["/images/quba/6 qhl ess2.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhl004",
      slug: "door-locks-catalog-qhl004",
      name: "qhl-004",
      category: "door-locks",
      images: ["/images/quba/7 qhl 004.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-qhl005",
      slug: "door-locks-catalog-qhl005",
      name: "qhl-005",
      category: "door-locks",
      images: ["/images/quba/7 qhl 005.jpeg"],
      isImageOnly: true
    }, 
    {
      id: "cat-door-locks-qhlencoder3",
      slug: "door-locks-catalog-qhlencoder3",
      name: "qhl-encoder3",
      category: "door-locks",
      images: ["/images/quba/7 qhl encoder 3.jpeg"],
      isImageOnly: true
    }, 
    {
      id: "cat-door-locks-qhlhhd2",
      slug: "door-locks-catalog-qhlhhd2",
      name: "qhl-hhd2",
      category: "door-locks",
      images: ["/images/quba/7 qhl hhd2.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-qhless3",
      slug: "door-locks-catalog-qhless3",
      name: "qhl-ess-3",
      category: "door-locks",
      images: ["/images/quba/7 qhl ess 3.jpeg"],
      isImageOnly: true
    } ,
     {
      id: "cat-door-locks-qhless4",
      slug: "door-locks-catalog-qhless4",
      name: "qhl-ess-4",
      category: "door-locks",
      images: ["/images/quba/7 qhl ess 4.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-qhlhls-v4.2",
      slug: "door-locks-catalog-qhlhls-v4.2",
      name: "qhl-hls-v4.2",
      category: "door-locks",
      images: ["/images/quba/7 qhl hls v4.2 software for hotel.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-qhlrf3",
      slug: "door-locks-catalog-qhlrf3",
      name: "qhl-rf3",
      category: "door-locks",
      images: ["/images/quba/7 qhl rf3.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-qastrix-001",
      slug: "door-locks-catalog-qastrix-001",
      name: "astrix-001",
      category: "door-locks",
      images: ["/images/quba/8 astrix 001.jpeg"],
      isImageOnly: true
    } ,
      {
      id: "cat-door-locks-qastrix-002",
      slug: "door-locks-catalog-qastrix-002",
      name: "astrix-002",
      category: "door-locks",
      images: ["/images/quba/8 astrix 002.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-alpha",
      slug: "door-locks-catalog-alpha",
      name: "alpha",
      category: "door-locks",
      images: ["/images/quba/8 alpha .jpeg"],
      isImageOnly: true
    } ,
     {
      id: "cat-door-locks-magnus-8-1",
      slug: "door-locks-catalog-magnus-8-1",
      name: "magnus",
      category: "door-locks",
      images: ["/images/quba/8 magnus.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-magnus-8-2",
      slug: "door-locks-catalog-magnus-8-2",
      name: "magnus 2",
      category: "door-locks",
      images: ["/images/quba/8 magnus 2.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-magnus-9",
      slug: "door-locks-catalog-magnus-9",
      name: "magnus 9",
      category: "door-locks",
      images: ["/images/quba/9 magnus.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-maximus",
      slug: "door-locks-catalog-maximus",
      name: "maximus",
      category: "door-locks",
      images: ["/images/quba/9 maximus.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-qeye",
      slug: "door-locks-catalog-qeye",
      name: "qeye",
      category: "door-locks",
      images: ["/images/quba/9 queye.jpeg"],
      isImageOnly: true
    } , 
    {
      id: "cat-door-locks-qview",
      slug: "door-locks-catalog-qview",
      name: "qview",
      category: "door-locks",
      images: ["/images/quba/9 qview.jpeg"],
      isImageOnly: true
    } ,
     {
      id: "cat-door-locks-rfidcard",
      slug: "door-locks-catalog-rfidcard",
      name: "rfidcard",
      category: "door-locks",
      images: ["/images/quba/10 rfid card.jpeg"],
      isImageOnly: true
    } , 
     {
      id: "cat-door-locks-digitalsafe",
      slug: "door-locks-catalog-digitalsafe",
      name: "digitalsafe",
      category: "door-locks",
      images: ["/images/quba/10 digital safe trolly.jpeg"],
      isImageOnly: true
    } , 
     {
      id: "cat-door-locks-q151",
      slug: "door-locks-catalog-q151",
      name: "Q 151",
      category: "door-locks",
      images: ["/images/quba/fingerpck.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-q152",
      slug: "door-locks-catalog-q152",
      name: "Q 152",
      category: "door-locks",
      images: ["/images/quba/19 q 152.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q153",
      slug: "door-locks-catalog-q153",
      name: "Q 153",
      category: "door-locks",
      images: ["/images/quba/19 q 153.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-q154",
      slug: "door-locks-catalog-q154",
      name: "Q 154",
      category: "door-locks",
      images: ["/images/quba/19 q 154.jpeg"],
      isImageOnly: true
    },
    {
      id: "cat-door-locks-q410",
      slug: "door-locks-catalog-q410",
      name: "Q 410",
      category: "door-locks",
      images: ["/images/quba/19 q 410.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q428",
      slug: "door-locks-catalog-q428",
      name: "Q 428",
      category: "door-locks",
      images: ["/images/quba/20 q 428.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q452",
      slug: "door-locks-catalog-q452",
      name: "Q 452",
      category: "door-locks",
      images: ["/images/quba/20 q 452.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q455",
      slug: "door-locks-catalog-q455",
      name: "Q 455",
      category: "door-locks",
      images: ["/images/quba/20 q 455.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q456",
      slug: "door-locks-catalog-q456",
      name: "Q 456",
      category: "door-locks",
      images: ["/images/quba/20 q 456.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q457",
      slug: "door-locks-catalog-q457",
      name: "Q 457",
      category: "door-locks",
      images: ["/images/quba/21 q 457.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q460",
      slug: "door-locks-catalog-q460",
      name: "Q 460",
      category: "door-locks",
      images: ["/images/quba/21 q 460.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q461",
      slug: "door-locks-catalog-q461",
      name: "Q 461",
      category: "door-locks",
      images: ["/images/quba/21 q 461  .jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q462",
      slug: "door-locks-catalog-q462",
      name: "Q 462",
      category: "door-locks",
      images: ["/images/quba/21 q 462.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q463",
      slug: "door-locks-catalog-q463",
      name: "Q 463",
      category: "door-locks",
      images: ["/images/quba/22 q 463.jpeg"],
      isImageOnly: true
    } ,

    {
      id: "cat-door-locks-q464",
      slug: "door-locks-catalog-q464",
      name: "Q 464",
      category: "door-locks",
      images: ["/images/quba/22 q 464.jpeg"],
      isImageOnly: true
    } ,     
    {
      id: "cat-door-locks-q465",
      slug: "door-locks-catalog-q465",
      name: "Q 465",
      category: "door-locks",
      images: ["/images/quba/22 q 465.jpeg"],
      isImageOnly: true
    } ,       
    {
      id: "cat-door-locks-q466",
      slug: "door-locks-catalog-q466",
      name: "Q 466",
      category: "door-locks",
      images: ["/images/quba/22 q 466.jpeg"],
      isImageOnly: true
    } , 
    {
      id: "cat-door-locks-q467",
      slug: "door-locks-catalog-q467",
      name: "Q 467",
      category: "door-locks",
      images: ["/images/quba/23 q 467.jpeg"],
      isImageOnly: true
    } ,
    {
      id: "cat-door-locks-q468",
      slug: "door-locks-catalog-q468",
      name: "Q 468",
      category: "door-locks",
      images: ["/images/quba/23 q 468.jpeg"],
      isImageOnly: true
    } ,
      {
        id: "cat-door-locks-q801",
        slug: "door-locks-catalog-q801",
        name: "Q 801",
        category: "door-locks",
        images: ["/images/quba/23 q 801.jpeg"],
        isImageOnly: true
      } ,   
        {
          id: "cat-door-locks-q803",
          slug: "door-locks-catalog-q803",
          name: "Q 803",
          category: "door-locks",
          images: ["/images/quba/23 q 803.jpeg"],
          isImageOnly: true
        } ,   
            {
            id: "cat-door-locks-q808",
            slug: "door-locks-catalog-q808",
            name: "Q 808",
            category: "door-locks",
            images: ["/images/quba/24 q 808.jpeg"],
            isImageOnly: true
          } ,  
          {
            id: "cat-door-locks-q809",
            slug: "door-locks-catalog-q809",
            name: "Q 809",
            category: "door-locks",
            images: ["/images/quba/24 q 809.jpeg"],
            isImageOnly: true
          } ,  
          {
            id: "cat-door-locks-q810",
            slug: "door-locks-catalog-q810",
            name: "Q 810",
            category: "door-locks",
            images: ["/images/quba/24 q 810.jpeg"],
            isImageOnly: true
          } ,  
            {
            id: "cat-door-locks-q811",
            slug: "door-locks-catalog-q811",
            name: "Q 811",
            category: "door-locks",
            images: ["/images/quba/24 q 811.jpeg"],
            isImageOnly: true
          } ,  
           {
            id: "cat-door-locks-q812",
            slug: "door-locks-catalog-q812",
            name: "Q 812",
            category: "door-locks",
            images: ["/images/quba/24 q 812.jpeg"],
            isImageOnly: true
          } ,  
          {
            id: "cat-door-locks-q813",
            slug: "door-locks-catalog-q813",
            name: "Q 813",
            category: "door-locks",
            images: ["/images/quba/24 q 813.jpeg"],
            isImageOnly: true
          } ,  
          {
            id: "cat-door-locks-q814",
            slug: "door-locks-catalog-q814",
            name: "Q 814",
            category: "door-locks",
            images: ["/images/quba/25 q 814.jpeg"],
            isImageOnly: true
          } ,  
            {
            id: "cat-door-locks-q815",
            slug: "door-locks-catalog-q815",
            name: "Q 815",
            category: "door-locks",
            images: ["/images/quba/25 q 815.jpeg"],
            isImageOnly: true
          } ,    
            {
            id: "cat-door-locks-q416",
            slug: "door-locks-catalog-q416",
            name: "Q 416",
            category: "door-locks",
            images: ["/images/quba/26 q 416.jpeg"],
            isImageOnly: true
          } ,    
          {
            id: "cat-door-locks-q426",
            slug: "door-locks-catalog-q426",
            name: "Q 426",
            category: "door-locks",
            images: ["/images/quba/26 q 426.jpeg"],
            isImageOnly: true
          } ,    
          {
            id: "cat-door-locks-q801-26",
            slug: "door-locks-catalog-q801-26",
            name: "Q 801",
            category: "door-locks",
            images: ["/images/quba/26 q 801.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q803-26",
            slug: "door-locks-catalog-q803-26",
            name: "Q 803",
            category: "door-locks",
            images: ["/images/quba/26 q 803.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q806",
            slug: "door-locks-catalog-q806",
            name: "Q 806",
            category: "door-locks",
            images: ["/images/quba/26 q 806.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q807",
            slug: "door-locks-catalog-q807",
            name: "Q 807",
            category: "door-locks",
            images: ["/images/quba/26 q 807.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q808-26",
            slug: "door-locks-catalog-q808-26",
            name: "Q 808",
            category: "door-locks",
            images: ["/images/quba/26 q 808.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q809-26",
            slug: "door-locks-catalog-q809-26",
            name: "Q 809",
            category: "door-locks",
            images: ["/images/quba/26 q 809.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q810-26",
            slug: "door-locks-catalog-q810-26",
            name: "Q 810",
            category: "door-locks",
            images: ["/images/quba/26 q 810.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q466-26",
            slug: "door-locks-catalog-q466-26",
            name: "Q 466",
            category: "door-locks",
            images: ["/images/quba/26 q 466.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q811-27",
            slug: "door-locks-catalog-q811-27",
            name: "Q 811",
            category: "door-locks",
            images: ["/images/quba/27 q 811.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q812-27",
            slug: "door-locks-catalog-q812-27",
            name: "Q 812",
            category: "door-locks",
            images: ["/images/quba/27 q 812.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q813-27",
            slug: "door-locks-catalog-q813-27",
            name: "Q 813",
            category: "door-locks",
            images: ["/images/quba/27 q 813.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q814-27",
            slug: "door-locks-catalog-q814-27",
            name: "Q 814",
            category: "door-locks",
            images: ["/images/quba/27 q 814.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q815-27",
            slug: "door-locks-catalog-q815-27",
            name: "Q 815",
            category: "door-locks",
            images: ["/images/quba/27 q 815.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q1001-28",
            slug: "door-locks-catalog-q1001-28",
            name: "Q 1001",
            category: "door-locks",
            images: ["/images/quba/28 q 1001.jpeg"],
            isImageOnly: true
          },
           {
            id: "cat-door-locks-q1002-28",
            slug: "door-locks-catalog-q1002-28",
            name: "Q 1002",
            category: "door-locks",
            images: ["/images/quba/28 q 1002.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q1004-28",
            slug: "door-locks-catalog-q1004-28",
            name: "Q 1004",
            category: "door-locks",
            images: ["/images/quba/28 q 1004.jpeg"],
            isImageOnly: true
          },
          {
            id: "cat-door-locks-q1005-28",
            slug: "door-locks-catalog-q1005-28",
            name: "Q 1005",
            category: "door-locks",
            images: ["/images/quba/28 q 1005.jpeg"],
            isImageOnly: true
          },  
          {
            id: "cat-door-locks-q1006-28",
            slug: "door-locks-catalog-q1006-28",
            name: "Q 1006",
            category: "door-locks",
            images: ["/images/quba/28 q 1006.jpeg"],
            isImageOnly: true
          },  
          {
            id: "cat-door-locks-q1008-28",
            slug: "door-locks-catalog-q1008-28",
            name: "Q 1008",
            category: "door-locks",
            images: ["/images/quba/28 q 1008.jpeg"],
            isImageOnly: true
          }, 
          {
            id: "cat-door-locks-q1009-28",
            slug: "door-locks-catalog-q1009-28",
            name: "Q 5060,5070,5080",
            name2: "Q 6060,6070,6080",
            category: "door-locks",
            images: ["/images/quba/q1009.jpeg"],
            isImageOnly: true
          },    
          {
            id: "cat-door-locks-q1008-35qq",
            slug: "door-locks-catalog-q1008-35qq",
            name: "Construction Key Cylinder",
            category: "door-locks",
            images: ["/images/quba/35qq.jpeg"],
            isImageOnly: true
          }, 
          {  
            id: "cat-door-locks-36qq",
            slug: "door-locks-catalog-36qq",
            name: "septabolt",
            category: "door-locks",
            images: ["/images/quba/36 qq.jpeg"],
            isImageOnly: true,
            cardBg: "bg-[#282828]"
          },   
          
          
          
  );

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
