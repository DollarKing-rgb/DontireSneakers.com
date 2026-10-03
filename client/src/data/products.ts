export type BestSeller = {
  name: string;
  slug: string;
  type: string;
  price: string;
  accent: string;
  image: string;
  description: string;
  sizes: string[];
};

export type FeaturedProduct = BestSeller & {
  badge?: string;
  category: string;
};

export const bestSellers: BestSeller[] = [
  {
    name: "Court Classic",
    slug: "court-classic",
    type: "Everyday sneakers",
    price: "KES 6,500",
    accent: "#d87955",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90",
    description:
      "A clean everyday pair with a comfortable sole for commutes, campus days and weekend rotation.",
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    name: "The City Runner",
    slug: "the-city-runner",
    type: "Sports shoes",
    price: "KES 7,800",
    accent: "#2c2926",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90",
    description:
      "Lightweight support for daily walks, training sessions and an active Nairobi routine.",
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    name: "Terrain Lace-Up",
    slug: "terrain-lace-up",
    type: "Casual boots",
    price: "KES 9,200",
    accent: "#7d8873",
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=1000&q=90",
    description:
      "A dependable lace-up boot with a grounded profile for cooler days and outdoor plans.",
    sizes: ["40", "41", "42", "43"],
  },
  {
    name: "Clean Line Loafer",
    slug: "clean-line-loafer",
    type: "Official shoes",
    price: "KES 8,400",
    accent: "#ba825d",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1000&q=90",
    description:
      "A polished essential for office dressing, events and smart-casual occasions.",
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    name: "Weekend Slide",
    slug: "weekend-slide",
    type: "Open shoes",
    price: "KES 3,200",
    accent: "#8d7868",
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=1000&q=90",
    description:
      "An easy slip-on option for relaxed weekends, errands and warm-weather plans.",
    sizes: ["39", "40", "41", "42"],
  },
];

const featuredOnlyProducts: BestSeller[] = [
  {
    name: "Urban Hiker",
    slug: "urban-hiker",
    type: "Outdoor shoes",
    price: "KES 10,500",
    accent: "#6e7a68",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=90",
    description:
      "A practical outdoor pair for weekend trails, travel and everyday movement beyond the city.",
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    name: "Campus Motion",
    slug: "campus-motion",
    type: "Everyday sneakers",
    price: "KES 4,800",
    accent: "#d87955",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=90",
    description:
      "A versatile low-profile sneaker for campus, errands and relaxed daily styling.",
    sizes: ["38", "39", "40", "41", "42"],
  },
  {
    name: "Office Walk",
    slug: "office-walk",
    type: "Official shoes",
    price: "KES 7,600",
    accent: "#ba825d",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=90",
    description:
      "A polished pair for workdays, meetings and occasions that call for a sharper finish.",
    sizes: ["39", "40", "41", "42", "43"],
  },
  {
    name: "Trail Runner",
    slug: "trail-runner",
    type: "Sports shoes",
    price: "KES 8,900",
    accent: "#2c2926",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=90",
    description:
      "Cushioned support for training, running and active weekends across town and beyond.",
    sizes: ["40", "41", "42", "43", "44"],
  },
];

export const featuredProducts: FeaturedProduct[] = [
  { ...bestSellers[0], badge: "Featured", category: "Sneakers" },
  { ...bestSellers[1], badge: "Featured", category: "Sports Shoes" },
  { ...bestSellers[2], badge: "Featured", category: "Boots" },
  { ...bestSellers[3], badge: "Featured", category: "Official Shoes" },
  { ...bestSellers[4], badge: "Featured", category: "Open Shoes" },
  { ...featuredOnlyProducts[0], badge: "Featured", category: "Boots" },
  { ...featuredOnlyProducts[1], badge: "Featured", category: "Sneakers" },
  { ...featuredOnlyProducts[2], badge: "Featured", category: "Official Shoes" },
  { ...featuredOnlyProducts[3], badge: "Featured", category: "Sports Shoes" },
];

export const allProducts: BestSeller[] = [...bestSellers, ...featuredOnlyProducts];
