import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-14 md:pt-16">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-baseline gap-3 mb-3">
          <h1 className="font-display text-4xl md:text-6xl uppercase leading-none">{title}</h1>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-12">
          Last updated {updated}
        </p>

        <div className="legal space-y-8 text-sm leading-relaxed text-ink/80">{children}</div>

        <div className="mt-16 pt-12 border-t border-ink/5">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
          >
            ← Back to index
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-base uppercase tracking-tight text-ink mb-3">{heading}</h2>
      <div className="space-y-3 text-pretty">{children}</div>
    </div>
  );
}
