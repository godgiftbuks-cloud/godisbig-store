import { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import ProductCard from "@/components/ProductCard";
import { collections } from "@/data/catalog";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";

const looks = [
  { img: look1, alt: "Layered olive and gray outerwear on a park bench", className: "" },
  { img: look2, alt: "Hiking boots on mossy asphalt", className: "md:mt-20" },
  { img: look3, alt: "Trees growing through brutalist architecture", className: "" },
];

export default function Home() {
  const [soundOn, setSoundOn] = useState(false);
  const hero = collections[0]?.heroImage;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-14 md:pt-16">
        <div className="relative aspect-[4/5] md:aspect-[21/9] w-full overflow-hidden bg-surface">
          <img
            src={hero}
            alt="Model wearing the Terrain Shell jacket in an urban park at dawn"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-8 px-6 animate-fade-up">
            <div className="text-center text-paper">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
                Collection 01 / Fall Winter
              </p>
              <h2 className="font-display text-4xl md:text-7xl leading-[0.9] text-balance mb-8 uppercase">
                Subsurface
                <br />
                Exploration
              </h2>
              <a
                href="#shop"
                className="inline-block bg-paper text-ink px-8 py-3 rounded-full text-sm font-medium uppercase tracking-tight hover:bg-ink hover:text-paper transition-colors duration-500"
              >
                Shop Collection
              </a>
            </div>
          </div>
          <button
            onClick={() => setSoundOn((s) => !s)}
            className="absolute bottom-6 left-6 hidden md:flex items-center gap-2 text-paper/70 text-[10px] uppercase tracking-widest cursor-pointer hover:text-paper transition-colors"
          >
            <span
              className={`size-1.5 rounded-full bg-paper/70 ${soundOn ? "animate-pulse !bg-paper" : ""}`}
            ></span>
            Sound / {soundOn ? "On" : "Off"}
          </button>
        </div>
      </section>

      <Marquee />

      {/* Collections */}
      <div id="shop">
        {collections.map((collection) => (
          <section key={collection.slug} className="py-16 md:py-24 px-6 bg-paper">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-5 flex flex-col">
                  <div className="mb-8 flex items-baseline gap-2">
                    <span className="text-sm font-medium font-display">{collection.number}</span>
                    <span className="h-px flex-1 bg-ink/10"></span>
                    <Link
                      to={`/collection/${collection.slug}`}
                      className="text-xs uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
                    >
                      {collection.label}
                    </Link>
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl leading-tight mb-8 text-balance uppercase">
                    {collection.tagline}
                  </h3>
                  <div className="w-full aspect-[4/5] overflow-hidden rounded-[min(1vw,12px)] mb-6">
                    <img
                      src={collection.detailImage}
                      alt={`${collection.label} editorial`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm leading-relaxed max-w-[48ch] text-pretty text-ink/80">
                    {collection.description}
                  </p>
                </div>
                <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
                  {collection.products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Visual Record */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:items-end mb-12">
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-none shrink-0">
              Visual Record
            </h2>
            <div className="h-px flex-1 bg-ink/10 mb-2 hidden md:block"></div>
            <p className="text-xs uppercase tracking-widest text-ink/50">Vol. 04 / Autumn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {looks.map((look, i) => (
              <div
                key={i}
                className={`aspect-[3/4] overflow-hidden rounded-[min(1vw,12px)] ${look.className}`}
              >
                <img
                  src={look.img}
                  alt={look.alt}
                  width={800}
                  height={1066}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      <SocialProof />

      {/* Field Reports */}
      <section className="border-y border-ink py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl md:text-3xl uppercase mb-6">Field Reports</h3>
          <p className="text-sm mb-8 text-pretty text-ink/70">
            Register for limited release alerts and editorial features from our global network of
            urban naturalists.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Email Address"
              className="flex-1 bg-surface border-none px-4 py-3 text-sm focus:ring-1 focus:ring-ink outline-none rounded-md"
            />
            <button className="bg-ink text-paper px-8 py-3 text-sm font-medium uppercase tracking-tight cursor-pointer rounded-md hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
