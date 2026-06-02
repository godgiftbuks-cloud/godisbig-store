import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CartProvider } from "@/cart/CartContext";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Collection from "@/pages/Collection";
import Store from "@/pages/Store";
import Cart from "@/pages/Cart";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";

function Layout() {
  return (
    <div className="bg-paper text-ink selection:bg-surface selection:text-ink min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/collection/:slug" element={<Collection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
