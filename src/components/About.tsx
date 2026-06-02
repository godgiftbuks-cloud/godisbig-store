import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";

export default function About() {
  return (
    <section className="bg-paper py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Copy */}
        <div className="md:max-w-[34rem]">
          <h2 className="text-xl md:text-2xl font-medium uppercase tracking-[0.3em] mb-10">
            About GodIsBig
          </h2>
          <div className="space-y-6 text-sm md:text-[15px] leading-relaxed text-ink/80 text-pretty">
            <p>
              GodIsBig started with a simple conviction — that what we wear can carry what we
              believe. It's a wearable collective built on faith, making heavyweight essentials for
              people who move through the world grounded in something greater than themselves.
            </p>
            <p>
              Every piece is designed as a quiet confession: understated garments cut from durable,
              traceable fabrics, built to be worn daily and to last. We draw inspiration from the
              rhythm of devotion — the discipline, the stillness, the sense of community — and
              translate it into clothing that feels honest, considered, and made to be lived in.
            </p>
            <p>
              This is only the foundation. The collective grows from here — one drop, one story, one
              wearer at a time.
            </p>
          </div>

          <a
            href="#shop"
            className="inline-flex items-center gap-3 mt-10 border border-ink/20 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-ink hover:text-paper hover:border-ink transition-colors duration-300"
          >
            <span className="grid place-items-center size-4 rounded-full border border-current">
              <svg viewBox="0 0 24 24" className="size-2 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Our Story
          </a>
        </div>

        {/* Image collage */}
        <div className="relative w-full">
          <div className="relative ml-auto w-[78%] aspect-[4/5] overflow-hidden rounded-[min(1vw,12px)] bg-surface">
            <img
              src={look1}
              alt="GodIsBig essentials worn in the city"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-[-8%] left-0 w-[52%] aspect-square overflow-hidden rounded-[min(1vw,12px)] bg-surface ring-8 ring-paper">
            <img
              src={look2}
              alt="A detail from the GodIsBig collection"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
