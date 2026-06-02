import { Link } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import logo from "@/assets/logo.png";

export default function Nav() {
  const { count, open } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-14 md:h-16">
        <div className="flex-1 flex items-center"></div>
        <div className="flex-none">
          <Link to="/" aria-label="GodIsBig — home" className="block">
            <img src={logo} alt="GOD IS BIG" className="h-3.5 md:h-4 w-auto" />
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
