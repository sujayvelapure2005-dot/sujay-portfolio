import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/data/hero";

/**
 * Full-screen loading splash shown on first paint.
 * Fades out once the app is ready and a minimum brand beat has played.
 */
export function LoadingScreen({ ready }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const minTime = useRef(false);

  useEffect(() => {
    // Fake progress so the loader feels alive even offline.
    const tick = window.setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.round(Math.random() * 14) + 6));
    }, 110);

    const minTimer = window.setTimeout(() => {
      minTime.current = true;
    }, 1300);

    // Hard fallback: never trap the user on the splash.
    const finishTimer = window.setTimeout(() => setVisible(false), 2400);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(minTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  useEffect(() => {
    if (ready && minTime.current) setVisible(false);
  }, [ready]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[90] grid place-items-center"
      style={{ background: "radial-gradient(circle at 50% 40%, #101426 0%, #050816 100%)" }}
      animate={{ opacity: visible ? 1 : 0, display: visible ? "grid" : "none" }}
      transition={{ duration: 0.5 }}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative grid h-20 w-20 place-items-center">
          <motion.div
            className="h-20 w-20 rounded-full border-2 border-transparent border-t-[#8b5cf6] border-r-[#14b8a6]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
          />
          <span className="text-gradient font-display text-3xl font-extrabold">{hero.monogram}</span>
        </div>
        <div className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Sujay Velapure
        </div>
        <div className="h-1 w-44 overflow-hidden rounded-full bg-card">
          <div
            className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#14b8a6]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}