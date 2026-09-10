import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/**
 * Fixed gradient progress bar pinned to the top edge.
 */
export function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px]"
      style={{
        background:
          "linear-gradient(90deg, #8b5cf6 0%, #14b8a6 55%, #f59e0b 100%)",
        transformOrigin: "left top",
      }}
      animate={{ scaleX: Math.max(progress, 0.004) }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      aria-hidden="true"
    />
  );
}