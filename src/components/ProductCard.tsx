import { Link } from "react-router-dom";
import { useCart } from "@/cart/CartContext";
import { formatPrice } from "@/lib/money";
import type { Product } from "@/data/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group">
      <Link
        to={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden mb-3 rounded-[min(1vw,12px)] bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            add(product.slug);
          }}
          className="absolute bottom-3 left-3 right-3 bg-paper/90 backdrop-blur-sm text-ink text-xs font-medium uppercase tracking-tight py-2.5 rounded-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-ink hover:text-paper cursor-pointer"
        >
          Add to cart
        </button>
      </Link>
      <Link to={`/product/${product.slug}`} className="flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase font-semibold text-ink/40 mb-1">No. {product.id}</p>
          <h4 className="text-sm font-medium">{product.name}</h4>
        </div>
        <p className="text-sm font-medium">{formatPrice(product.price)}</p>
      </Link>
    </div>
  );
}
