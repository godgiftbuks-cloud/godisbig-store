import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { allProducts, type Product } from "@/data/catalog";

export type CartLine = { slug: string; qty: number };

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  detailedLines: Array<{ product: Product; qty: number; lineTotal: number }>;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const STORAGE_KEY = "godisbig-cart-v1";
const CartContext = createContext<CartState | null>(null);

function loadLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    // keep only lines that still exist in the catalog
    return parsed.filter((l) => allProducts.some((p) => p.slug === l.slug));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(loadLines);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore write failures (private mode, quota, etc.)
    }
  }, [lines]);

  const value = useMemo<CartState>(() => {
    const detailedLines = lines
      .map((l) => {
        const product = allProducts.find((p) => p.slug === l.slug);
        if (!product) return null;
        return { product, qty: l.qty, lineTotal: product.price * l.qty };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const count = lines.reduce((n, l) => n + l.qty, 0);
    const subtotal = detailedLines.reduce((sum, l) => sum + l.lineTotal, 0);

    return {
      lines,
      isOpen,
      count,
      subtotal,
      detailedLines,
      add: (slug, qty = 1) => {
        setLines((prev) => {
          const existing = prev.find((l) => l.slug === slug);
          if (existing) {
            return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
          }
          return [...prev, { slug, qty }];
        });
        setIsOpen(true);
      },
      setQty: (slug, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.slug !== slug)
            : prev.map((l) => (l.slug === slug ? { ...l, qty } : l)),
        ),
      remove: (slug) => setLines((prev) => prev.filter((l) => l.slug !== slug)),
      clear: () => setLines([]),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    };
  }, [lines, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
