import { Link, useParams } from "react-router-dom";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import NotFound from "@/pages/NotFound";
import { findCollection } from "@/data/catalog";

export default function Collection() {
  const { slug = "" } = useParams();
  const collection = findCollection(slug);

  if (!collection) return <NotFound />;

  return (
    <>
      {/* Collection banner */}
      <section className="relative pt-14 md:pt-16">
        <div className="relative aspect-[4/5] md:aspect-[21/9] w-full overflow-hidden bg-surface">
          <img
            src={collection.heroImage}
            alt={`${collection.label} collection`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-6 animate-fade-up">
            <div className="text-center text-paper">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
                Collection {collection.number}
              </p>
              <h1 className="font-display text-4xl md:text-7xl leading-[0.9] text-balance uppercase">
                {collection.label}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl md:text-4xl uppercase leading-tight mb-6 text-balance">
            {collection.tagline}
          </h2>
          <p className="text-sm leading-relaxed text-ink/80 text-pretty">
            {collection.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collection.products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-ink/5">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
          >
            ← Back to index
          </Link>
        </div>
      </section>
    </>
  );
}
