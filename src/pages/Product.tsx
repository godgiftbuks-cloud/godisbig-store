import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import NotFound from "@/pages/NotFound";
import { useCart } from "@/cart/CartContext";
import { formatPrice } from "@/lib/money";
import { findProduct, collectionForProduct } from "@/data/catalog";

export default function Product() {
  const { slug = "" } = useParams();
  const product = findProduct(slug);
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return <NotFound />;

  const collection = collectionForProduct(slug);
  const related = collection?.products.filter((p) => p.slug !== slug).slice(0, 4) ?? [];

  return (
    <>
      <div className="pt-14 md:pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink/40">
            <Link to="/" className="hover:text-ink transition-colors">
              Index
            </Link>
            <span>/</span>
            {collection && (
              <>
                <Link
                  to={`/collection/${collection.slug}`}
                  className="hover:text-ink transition-colors"
                >
                  {collection.label}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-ink/70">{product.name}</span>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="aspect-[4/5] overflow-hidden rounded-[min(1vw,12px)] bg-surface">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col md:py-4">
              <p className="text-[10px] uppercase font-semibold text-ink/40 mb-3">
                No. {product.id}
              </p>
              <h1 className="font-display text-3xl md:text-5xl uppercase leading-[0.95] mb-4 text-balance">
                {product.name}
              </h1>
              <p className="text-xl font-medium mb-8">{formatPrice(product.price)}</p>

              <p className="text-sm leading-relaxed text-ink/80 text-pretty max-w-[48ch] mb-8">
                {product.description}
              </p>

              <button
                onClick={() => {
                  add(product.slug);
                  setAdded(true);
                  window.setTimeout(() => setAdded(false), 1500);
                }}
                className="bg-ink text-paper px-8 py-4 text-sm font-medium uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity cursor-pointer mb-10"
              >
                {added ? "Added ✓" : "Add to cart"}
              </button>

              <div className="border-t border-ink/10 pt-6">
                <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink/40 mb-4">
                  Specifications
                </h4>
                <ul className="space-y-2">
                  {product.details.map((d) => (
                    <li key={d} className="text-sm text-ink/80 flex gap-3">
                      <span className="text-ink/30">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Marquee />

      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-ink/40">More from</span>
            <span className="text-xs uppercase tracking-widest font-medium">
              {collection?.label}
            </span>
            <span className="h-px flex-1 bg-ink/10"></span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
