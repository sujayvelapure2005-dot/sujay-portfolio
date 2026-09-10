import { useState, useRef, useEffect } from "react";

/**
 * Animated counter that runs once when `active` flips to true.
 * Uses a simple easing so the count-up feels premium (no dependency).
 */
export function useCountUp(value, active, duration = 1600) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const start = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOut(t) * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value, duration]);

  return display;
}