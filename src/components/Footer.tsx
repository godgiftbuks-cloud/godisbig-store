import { Link } from "react-router-dom";
import SocialLinks from "@/components/SocialLinks";
import { collections } from "@/data/catalog";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-paper pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink/40 mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {collections.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/collection/${c.slug}`}
                    className="text-sm hover:text-ink/60 transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/cart" className="text-sm hover:text-ink/60 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink/40 mb-6">
              Info
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-sm hover:text-ink/60 transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-ink/60 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@godisbig.co"
                  className="text-sm hover:text-ink/60 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-ink/40 mb-6">
              Manifesto
            </h4>
            <p className="text-sm leading-relaxed text-pretty opacity-80 mb-6">
              GodIsBig is a wearable collective built on faith — heavyweight essentials made for the
              everyday believer. Clothing as a quiet confession.
            </p>
            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-ink/5">
          <div className="flex flex-col gap-2">
            <img src={logo} alt="GOD IS BIG" className="h-4 w-auto opacity-15" />
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/40">
              Wearable Collective, Built on Faith
            </div>
          </div>
          <div className="text-[10px] uppercase tracking-widest text-ink/40">
            © 2026 GodIsBig — godisbig.co
          </div>
        </div>
      </div>
    </footer>
  );
}
