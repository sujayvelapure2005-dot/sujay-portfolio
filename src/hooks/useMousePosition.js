import { useEffect, useRef, useState } from "react";

/**
 * Tracks the pointer position (CSS px) and whether the device has a
 * fine pointer (mouse). Falls back gracefully when `matchMedia` is
 * not available: a real mousemove event implies a fine pointer.
 */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [fine, setFine] = useState(false);
  const moveCount = useRef(0);

  useEffect(() => {
    let mmFine = null; // null = unknown
    let mmListen = false;

    try {
      const mq = window.matchMedia?.("(pointer: fine)");
      if (mq) {
        mmFine = mq.matches;
        mmListen = true;
        setFine(mmFine);
        const onChange = (e) => {
          mmFine = e.matches;
          setFine(mmFine);
        };
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
      }
    } catch {
      mmFine = null;
    }

    const wrapped = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      moveCount.current += 1;
      if (mmFine === null && moveCount.current >= 2) setFine(true);
    };

    window.addEventListener("mousemove", wrapped, { passive: true });
    return () => window.removeEventListener("mousemove", wrapped);
  }, []);

  return { x: pos.x, y: pos.y, fine };
}