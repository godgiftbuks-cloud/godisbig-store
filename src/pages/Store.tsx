import { Link } from "react-router-dom";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { collections } from "@/data/catalog";

const totalProducts = collections.reduce((count, collection) => count + collection.products.length, 0);

export default function Store() {
  return (
    <>
      <section className="pt-24 md:pt-32 px-6 pb-12 md:pb-16 border-b border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-ink/45 mb-5">
                Complete Store
              </p>
              <h1 className="font-display text-4xl md:text-7xl uppercase leading-[0.9] text-balance">
                Every drop in one place
              </h1>
            </div>
            <div className="md:text-right">
              <p className="text-xs uppercase tracking-widest text-ink/45 mb-2">
                {collections.length} collections
              </p>
              <p className="text-sm font-medium">{totalProducts} products available</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-[10px] uppercase tracking-widest text-ink/40">Jump to</span>
          {collections.map((collection) => (
            <a
              key={collection.slug}
              href={`#${collection.slug}`}
              className="rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-tight hover:border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              {collection.label}
            </a>
          ))}
        </div>

        <div className="space-y-20 md:space-y-24">
          {collections.map((collection) => (
            <section key={collection.slug} id={collection.slug} className="scroll-mt-24">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
                <div className="max-w-2xl">
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-sm font-medium font-display">{collection.number}</span>
                    <span className="h-px w-12 bg-ink/10"></span>
                    <Link
                      to={`/collection/${collection.slug}`}
                      className="text-xs uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
                    >
                      {collection.label}
                    </Link>
                  </div>
                  <h2 className="font-display text-2xl md:text-4xl uppercase leading-tight text-balance">
                    {collection.tagline}
                  </h2>
                </div>
                <p className="text-xs uppercase tracking-widest text-ink/45">
                  {collection.products.length} pieces
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {collection.products.map((product) => (
                  <ProductCard key={`${collection.slug}-${product.slug}`} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
