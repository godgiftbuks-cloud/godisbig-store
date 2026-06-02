import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position to the top whenever the route changes,
// unless the URL points at an in-page anchor (e.g. #shop).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
