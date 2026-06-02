import { Link } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { formatPrice } from "@/lib/money";

export default function CartDrawer() {
  const { isOpen, close, detailedLines, subtotal, count, setQty, remove } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-ink/30 backdrop-blur-[1px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Cart"
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-paper flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-14 md:h-16 border-b border-ink/10">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-tight">
            Cart <span className="text-ink/40">/ {count}</span>
          </span>
          <button
            onClick={close}
            className="text-xs uppercase tracking-tight hover:opacity-60 transition-opacity cursor-pointer"
          >
            Close
          </button>
        </div>

        {detailedLines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm text-ink/60">Your cart is empty.</p>
            <button
              onClick={close}
              className="text-xs uppercase tracking-tight underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-ink/10">
              {detailedLines.map(({ product, qty, lineTotal }) => (
                <div key={product.slug} className="flex gap-4 py-4">
                  <Link
                    to={`/product/${product.slug}`}
                    onClick={close}
                    className="size-20 shrink-0 overflow-hidden rounded-md bg-surface"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={close}
                        className="text-sm font-medium hover:opacity-60 transition-opacity"
                      >
                        {product.name}
                      </Link>
                      <span className="text-sm font-medium whitespace-nowrap">
                        {formatPrice(lineTotal)}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase font-semibold text-ink/40 mt-1">
                      No. {product.id}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-ink/15 rounded-md">
                        <button
                          onClick={() => setQty(product.slug, qty - 1)}
                          className="size-7 grid place-items-center text-sm hover:bg-surface transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm tabular-nums">{qty}</span>
                        <button
                          onClick={() => setQty(product.slug, qty + 1)}
                          className="size-7 grid place-items-center text-sm hover:bg-surface transition-colors cursor-pointer"
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

            <div className="border-t border-ink/10 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="uppercase tracking-tight text-ink/60">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-ink/40">
                Shipping & taxes calculated at checkout
              </p>
              <Link
                to="/cart"
                onClick={close}
                className="block w-full text-center bg-ink text-paper px-8 py-3 text-sm font-medium uppercase tracking-tight rounded-md hover:opacity-90 transition-opacity"
              >
                View cart
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
