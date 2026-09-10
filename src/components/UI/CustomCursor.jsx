import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * Animated custom cursor: a small dot with a trailing ring.
 * Grows over interactive elements via `data-cursor-scale` or link/button
 * detection, and only activates for fine pointers.
 */
export function CustomCursor() {
  const { x, y, fine } = useMousePosition();
  const [hot, setHot] = useState(false);
  const [textMode, setTextMode] = useState(false);

  useEffect(() => {
    if (!fine) return;
    const update = (e) => {
      const el = e.target instanceof Element ? e.target : null;
      if (!el) return;
      const isText =
        (el.closest?.("p, h1, h2, h3, h4, li, span, .cursor-text") && !el.closest("a, button")) || false;
      setTextMode(!!isText);
      let node = el;
      while (node && node !== document.body) {
        const scale = node.dataset?.cursorScale;
        if (scale) {
          setHot(true);
          return;
        }
        const tag = node.tagName;
        if (["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "SUMMARY"].includes(tag)) {
          setHot(true);
          return;
        }
        node = node.parentElement;
      }
      setHot(false);
    };
    window.addEventListener("mouseover", update);
    return () => {
      window.removeEventListener("mouseover", update);
    };
  }, [fine]);

  if (!fine) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[70] h-2 w-2 rounded-full bg-[#8b5cf6]"
        style={{ marginLeft: -1, marginTop: -1 }}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 1200, damping: 55, mass: 0.35 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[69] rounded-full border"
        style={{
          width: textMode ? 2.5 : 34,
          height: textMode ? 26 : 34,
          borderWidth: textMode ? 0 : 1.5,
          borderRadius: textMode ? 8 : 9999,
          marginLeft: textMode ? -1.25 : -17,
          marginTop: textMode ? -13 : -17,
        }}
        animate={{
          x,
          y,
          scale: hot ? (textMode ? 1 : 2.0) : 1,
          opacity: hot ? 0.45 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 32, mass: 0.5 }}
      />
    </>
  );
}