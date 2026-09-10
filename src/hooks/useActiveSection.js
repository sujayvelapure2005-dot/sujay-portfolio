import { useEffect, useState } from "react";

/**
 * Scroll-spy that reports which section id is most visible.
 *
 * Uses the native IntersectionObserver API with the same visibility
 * contract react-intersection-observer provides, without relying on
 * its low-level `observe` helper.
 */
export function useActiveSection(ids, options = {}) {
  const [active, setActive] = useState(ids[0] ?? null);
  const key = ids.join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: options.rootMargin ?? "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // Re-observe only when the id list changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}