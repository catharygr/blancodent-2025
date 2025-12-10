import { useState, useRef, useEffect } from "react";

export function useHandleHeaderScroll() {
  const [scrollDirection, setScrollDirection] = useState(null);

  const lastScrollY = useRef(null);
  const lastDirection = useRef(null);

  // Hide on scroll down (stable handler using refs, passive listener)
  useEffect(() => {
    // initialize last positions
    lastScrollY.current =
      typeof window !== "undefined" ? window.pageYOffset : 0;
    lastDirection.current = null;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const delta = scrollY - lastScrollY.current;
      const direction = delta > 0 ? "down" : "up";

      if (Math.abs(delta) > 10 && direction !== lastDirection.current) {
        lastDirection.current = direction;
        setScrollDirection(direction);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);
  return scrollDirection;
}
