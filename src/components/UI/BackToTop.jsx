import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Floating "back to top" pill that appears after scrolling down. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = (document.scrollingElement?.scrollHeight || 0) - window.innerHeight;
      setShow(y > 480);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const deg = progress * 360;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[55] grid h-11 w-11 place-items-center rounded-full text-white shadow-glow transition-transform hover:scale-110"
          style={{
            background: `conic-gradient(#8b5cf6 ${deg}deg, rgba(148,163,184,0.22) 0deg)`,
          }}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          data-cursor-scale="1.8"
        >
          <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#0b1220]">
            <ArrowUp size={16} className="text-[#a78bfa]" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}