import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Accessible modal shell: portal-rendered, ESC/backdrop close,
 * scroll lock + focus return.
 */
export function Modal({ open, onClose, children, labelledBy, maxWidth = "max-w-4xl" }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={typeof children !== "undefined" && labelledBy ? undefined : "Certificate viewer"}
          className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* backdrop */}
          <div className="fixed inset-0 bg-[rgba(2,5,15,0.85)] backdrop-blur-md" aria-hidden="true" />
          <motion.div
            className={`relative z-10 w-full ${maxWidth} my-4 glass-strong rounded-3xl p-2 shadow-card`}
            initial={{ scale: 0.92, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-line bg-card/80 text-muted backdrop-blur transition hover:rotate-90 hover:text-white"
              data-cursor-scale="1.6"
            >
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}