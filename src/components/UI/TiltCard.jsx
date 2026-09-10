import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * 3D tilt card with an animated glare highlight — a lightweight,
 * dependency-free take on React Tilt built on Framer Motion.
 */
export function TiltCard({ children, className = "", max = 10, glare = true, scale = 1.02 }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const springRx = useSpring(rx, { stiffness: 260, damping: 22 });
  const springRy = useSpring(ry, { stiffness: 260, damping: 22 });
  const glareX = useTransform(gx, (v) => `${v}%`);
  const glareY = useTransform(gy, (v) => `${v}%`);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.55), transparent 55%)`
  );

  const onMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
    gx.set((px + 0.5) * 100);
    gy.set((py + 0.5) * 100);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: springRx, rotateY: springRy, transformStyle: "preserve-3d" }}
      whileHover={reduced ? {} : { scale }}
      className={`relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-30 mix-blend-overlay"
          style={{
            background: glareBg,
            transform: "translateZ(1px)",
          }}
        />
      )}
    </motion.div>
  );
}