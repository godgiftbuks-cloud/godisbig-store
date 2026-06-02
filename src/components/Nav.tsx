import { Link } from "react-router-dom";
import { useCart } from "@/cart/CartContext";

export default function Nav() {
  const { count, open } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-14 md:h-16">
        <div className="flex-1 flex items-center"></div>
        <div className="flex-none">
          <Link to="/" className="font-display text-xl md:text-2xl">
            GodIsBig
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end gap-6">
          <button onClick={open} className="relative group cursor-pointer">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-tight">Cart</span>
            <span className="absolute -top-1 -right-3 text-[10px] font-bold">{count}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
