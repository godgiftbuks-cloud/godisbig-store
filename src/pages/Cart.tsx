import { Link } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { formatPrice } from "@/lib/money";

export default function Cart() {
  const { detailedLines, subtotal, setQty, remove, clear } = useCart();
  const empty = detailedLines.length === 0;

  return (
    <section className="pt-14 md:pt-16">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-baseline gap-3 mb-10">
          <h1 className="font-display text-4xl md:text-6xl uppercase leading-none">Cart</h1>
          <span className="h-px flex-1 bg-ink/10"></span>
        </div>

        {empty ? (
          <div className="py-20 text-center">
            <p className="text-sm text-ink/60 mb-6">Your cart is empty.</p>
            <Link
              to="/"
              className="inline-block bg-ink text-paper px-8 py-3 text-sm font-medium uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {detailedLines.map(({ product, qty, lineTotal }) => (
                <div key={product.slug} className="flex gap-4 md:gap-6 py-6">
                  <Link
                    to={`/product/${product.slug}`}
                    className="size-24 md:size-28 shrink-0 overflow-hidden rounded-md bg-surface"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase font-semibold text-ink/40 mb-1">
                          No. {product.id}
                        </p>
                        <Link
                          to={`/product/${product.slug}`}
                          className="text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-ink/60 mt-1">{formatPrice(product.price)} each</p>
                      </div>
                      <span className="text-sm md:text-base font-medium whitespace-nowrap">
                        {formatPrice(lineTotal)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-ink/15 rounded-md">
                        <button
                          onClick={() => setQty(product.slug, qty - 1)}
                          className="size-8 grid place-items-center hover:bg-surface transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
                        <button
                          onClick={() => setQty(product.slug, qty + 1)}
                          className="size-8 grid place-items-center hover:bg-surface transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(product.slug)}
                        className="text-[10px] uppercase tracking-widest text-ink/40 hover:text-ink transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-24 h-max space-y-5">
              <div className="flex justify-between text-sm">
                <span className="uppercase tracking-tight text-ink/60">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="uppercase tracking-tight text-ink/60">Shipping</span>
                <span className="text-ink/60">
                  {subtotal >= 200 ? "Free" : "Calculated at checkout"}
                </span>
              </div>
              <div className="flex justify-between text-base font-medium border-t border-ink/10 pt-5">
                <span className="uppercase tracking-tight">Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button className="w-full bg-ink text-paper px-8 py-4 text-sm font-medium uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity cursor-pointer">
                Checkout
              </button>
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="text-xs uppercase tracking-widest text-ink/40 hover:text-ink transition-colors"
                >
                  ← Continue shopping
                </Link>
                <button
                  onClick={clear}
                  className="text-xs uppercase tracking-widest text-ink/40 hover:text-ink transition-colors cursor-pointer"
                >
                  Clear cart
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
