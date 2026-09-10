import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * Soft radial gradient that follows the cursor (desktop only).
 */
export function MouseGlow() {
  const { x, y, fine } = useMousePosition();

  if (!fine) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[5] h-[560px] w-[560px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.16) 0%, rgba(20,184,166,0.08) 42%, transparent 70%)",
      }}
      animate={{ x: x - 280, y: y - 280 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
    />
  );
}