// ─────────────────────────────────────────────────────────────────────────
//  CATALOG — edit this file to add/remove products and collections.
//
//  To add a product:    add an object to a collection's `products` array.
//  To add a collection:  add an object to the `collections` array below.
//  Drop new images into src/assets/ and import them at the top.
//  Every `slug` must be unique across the whole catalog (used in URLs).
// ─────────────────────────────────────────────────────────────────────────

import hero from "@/assets/hero.jpg";
import detailKnit from "@/assets/detail-knit.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productTrouser from "@/assets/product-trouser.jpg";
import productBeanie from "@/assets/product-beanie.jpg";

export type Product = {
  id: string; // catalog reference, e.g. "021A"
  slug: string; // URL slug, must be unique, e.g. "silt-heavyweight-hoodie"
  name: string;
  price: number; // in dollars
  image: string;
  description: string;
  details: string[]; // short spec bullets shown on the product page
};

export type Collection = {
  slug: string; // URL slug, e.g. "the-foundation"
  number: string; // display number, e.g. "01"
  label: string; // e.g. "The Foundation"
  tagline: string; // the large heading on the home block
  description: string;
  heroImage: string; // banner image for the collection page
  detailImage: string; // editorial image shown in the home block
  products: Product[];
};

export const collections: Collection[] = [
  {
    slug: "the-fountain",
    number: "01",
    label: "The Fountain",
    tagline: "Tactile armor for the everyday naturalist.",
    description:
      "Our latest drop explores the intersection of high-performance technical silhouettes and the raw, unrefined textures of the natural world. Each piece is constructed from traceable organic fibers designed to patina with time.",
    heroImage: hero,
    detailImage: detailKnit,
    products: [
      {
        id: "021A",
        slug: "silt-heavyweight-hoodie",
        name: "Silt Heavyweight Hoodie",
        price: 165,
        image: productHoodie,
        description:
          "A 480gsm loopback hoodie spun from traceable organic cotton. Garment-dyed in a silt grey that softens and fades with every wash.",
        details: [
          "480gsm organic loopback cotton",
          "Garment-dyed, pre-shrunk",
          "Boxed double-layer hood",
          "Made in Portugal",
        ],
      },
      {
        id: "044C",
        slug: "terrain-shell-jacket",
        name: "Terrain Shell Jacket",
        price: 295,
        image: productJacket,
        description:
          "A weather-sealed shell built for the urban perimeter. Three-layer recycled membrane with fully taped seams and a stowaway hood.",
        details: [
          "3-layer recycled waterproof membrane",
          "Fully taped seams, 10k/10k rating",
          "Stowaway hood, storm cuffs",
          "Made in Portugal",
        ],
      },
      {
        id: "012E",
        slug: "gravel-cargo-trouser",
        name: "Gravel Cargo Trouser",
        price: 185,
        image: productTrouser,
        description:
          "A relaxed utility trouser in a rugged organic canvas. Articulated knees and bellowed cargo pockets for everyday carry.",
        details: [
          "Organic cotton ripstop canvas",
          "Articulated knee panels",
          "Bellowed cargo pockets",
          "Adjustable hem drawcord",
        ],
      },
      {
        id: "088Z",
        slug: "foliage-knit-beanie",
        name: "Foliage Knit Beanie",
        price: 45,
        image: productBeanie,
        description:
          "A chunky rib-knit beanie in undyed merino wool. Naturally insulating and built to hold its shape through the season.",
        details: [
          "100% undyed merino wool",
          "Chunky 5-gauge rib knit",
          "Fold-over cuff",
          "Made in Scotland",
        ],
      },
    ],
  },
  {
    slug: "the-foundation",
    number: "01",
    label: "The Foundation",
    tagline: "Tactile armor for the everyday naturalist.",
    description:
      "Our latest drop explores the intersection of high-performance technical silhouettes and the raw, unrefined textures of the natural world. Each piece is constructed from traceable organic fibers designed to patina with time.",
    heroImage: hero,
    detailImage: detailKnit,
    products: [
      {
        id: "021A",
        slug: "silt-heavyweight-hoodie",
        name: "Silt Heavyweight Hoodie",
        price: 165,
        image: productHoodie,
        description:
          "A 480gsm loopback hoodie spun from traceable organic cotton. Garment-dyed in a silt grey that softens and fades with every wash.",
        details: [
          "480gsm organic loopback cotton",
          "Garment-dyed, pre-shrunk",
          "Boxed double-layer hood",
          "Made in Portugal",
        ],
      },
      {
        id: "044C",
        slug: "terrain-shell-jacket",
        name: "Terrain Shell Jacket",
        price: 295,
        image: productJacket,
        description:
          "A weather-sealed shell built for the urban perimeter. Three-layer recycled membrane with fully taped seams and a stowaway hood.",
        details: [
          "3-layer recycled waterproof membrane",
          "Fully taped seams, 10k/10k rating",
          "Stowaway hood, storm cuffs",
          "Made in Portugal",
        ],
      },
      {
        id: "012E",
        slug: "gravel-cargo-trouser",
        name: "Gravel Cargo Trouser",
        price: 185,
        image: productTrouser,
        description:
          "A relaxed utility trouser in a rugged organic canvas. Articulated knees and bellowed cargo pockets for everyday carry.",
        details: [
          "Organic cotton ripstop canvas",
          "Articulated knee panels",
          "Bellowed cargo pockets",
          "Adjustable hem drawcord",
        ],
      },
      {
        id: "088Z",
        slug: "foliage-knit-beanie",
        name: "Foliage Knit Beanie",
        price: 45,
        image: productBeanie,
        description:
          "A chunky rib-knit beanie in undyed merino wool. Naturally insulating and built to hold its shape through the season.",
        details: [
          "100% undyed merino wool",
          "Chunky 5-gauge rib knit",
          "Fold-over cuff",
          "Made in Scotland",
        ],
      },
    ],
  },
];



// ── Derived lookups (no need to edit below) ──────────────────────────────
export const allProducts: Product[] = collections.flatMap((c) => c.products);

export function findProduct(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function findCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function collectionForProduct(slug: string): Collection | undefined {
  return collections.find((c) => c.products.some((p) => p.slug === slug));
}
