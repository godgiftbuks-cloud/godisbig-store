import SocialLinks from "@/components/SocialLinks";

const stats = [
  { value: "12K+", label: "Collective members" },
  { value: "48 hrs", label: "Drop 01 sold out" },
  { value: "30+", label: "Countries shipped" },
  { value: "4.9 / 5", label: "Average review" },
];

const testimonials = [
  {
    quote:
      "The quality is unreal — this hoodie feels like it'll outlast me. And it actually means something to wear it.",
    name: "Marcus T.",
    location: "London",
  },
  {
    quote:
      "Finally a faith brand that doesn't feel corny. Clean, heavy, considered. I get asked about it constantly.",
    name: "Aaliyah R.",
    location: "Toronto",
  },
  {
    quote:
      "Wore the shell jacket every day this winter. It's become part of how I show up in the world.",
    name: "Daniel K.",
    location: "New York",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-surface py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 pb-16 border-b border-ink/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-5xl leading-none mb-2">{s.value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-ink/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <div className="text-ink/30 font-display text-4xl leading-none mb-4">&ldquo;</div>
              <blockquote className="text-sm md:text-base leading-relaxed text-ink/90 text-pretty flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-widest text-ink/50">
                {t.name} — {t.location}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-16 pt-12 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl uppercase leading-none mb-2">
              Join the collective
            </h3>
            <p className="text-sm text-ink/60">Follow along for drops, stories, and the people behind them.</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
