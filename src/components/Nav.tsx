import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { collections } from "@/data/catalog";
import logo from "@/assets/logo.png";

export default function Nav() {
  const { count, open } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((openMenu) => !openMenu);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-14 md:h-16">
        <div className="flex-1 flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="group flex size-10 items-center justify-center rounded-md hover:bg-surface transition-colors cursor-pointer"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-ink transition-transform ${
                  isMenuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              ></span>
              <span
                className={`h-px w-full bg-ink transition-transform ${
                  isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              ></span>
            </span>
          </button>
        </div>
        <div className="flex-none">
          <Link to="/" aria-label="GodIsBig home" className="block">
            <img src={logo} alt="GOD IS BIG" className="h-3.5 md:h-4 w-auto" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end gap-6">
          <button type="button" onClick={open} className="relative group cursor-pointer">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-tight">Cart</span>
            <span className="absolute -top-1 -right-3 text-[10px] font-bold">{count}</span>
          </button>
        </div>
      </div>
      <div
        id="site-menu"
        className={`border-t border-ink/5 bg-paper/95 transition-[max-height,opacity] duration-300 ${
          isMenuOpen
            ? "max-h-[calc(100vh-3.5rem)] overflow-y-auto opacity-100 md:max-h-[calc(100vh-4rem)]"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-ink/40">Menu</p>
              <div className="flex flex-col items-start gap-3">
                <NavLink
                  to="/store"
                  className={({ isActive }) =>
                    `font-display text-3xl uppercase leading-none transition-colors hover:text-ink ${
                      isActive ? "text-ink" : "text-ink/45"
                    }`
                  }
                >
                  Store
                </NavLink>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest transition-colors hover:text-ink ${
                      isActive ? "text-ink" : "text-ink/45"
                    }`
                  }
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-ink/40">
                Collections
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {collections.map((collection) => (
                  <NavLink
                    key={collection.slug}
                    to={`/collection/${collection.slug}`}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-md border px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/10 hover:border-ink/30 hover:bg-surface"
                      }`
                    }
                  >
                    <span>{collection.label}</span>
                    <span className="text-[10px] uppercase tracking-widest opacity-60">
                      {collection.products.length} pieces
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
