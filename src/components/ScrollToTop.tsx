"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Next scrolls a new page to its own top, which leaves the layout's header scrolled out of view.
// Glide to the very top instead, header included (instant for prefers-reduced-motion via CSS).
// Skipped on first load, on back/forward (the browser restores the old position) and for #hash links.
export default function ScrollToTop() {
  const pathname = usePathname();
  const first = useRef(true);
  const history = useRef(false);

  useEffect(() => {
    const onPop = () => (history.current = true);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (history.current) {
      history.current = false;
      return;
    }
    if (!location.hash) window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}
