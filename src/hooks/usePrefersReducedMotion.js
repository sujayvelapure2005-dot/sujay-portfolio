import { useEffect, useState } from "react";

/** Respects the user's `prefers-reduced-motion` OS setting. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    setReduced(!!mq?.matches);
    mq?.addEventListener?.("change", onChange);

    function onChange(e) {
      setReduced(e.matches);
    }

    return () => mq?.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}