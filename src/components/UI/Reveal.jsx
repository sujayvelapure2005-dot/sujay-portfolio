import { motion } from "framer-motion";
import { fadeUp, staggerParent, VIEWPORT } from "@/utils/animations";

/**
 * Reveal-on-scroll wrapper — the core "scroll animation" primitive.
 * - `as`      : HTML element to render
 * - `variant` : fadeUp, fadeIn, scaleIn, slideLeft/Right/Up
 * - `stagger` : pass to make direct children animate as a group
 */
export function Reveal({
  children,
  as = "div",
  variant = "fadeUp",
  delay = 0,
  stagger = 0,
  className = "",
  amount = 0.2,
  once = true,
  ...rest
}) {
  const map = {
    fadeUp,
    fadeIn: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.7, delay } } },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      show: { opacity: 1, scale: 1, transition: { duration: 0.55, delay } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -48 },
      show: { opacity: 1, x: 0, transition: { duration: 0.7, delay } },
    },
    slideRight: {
      hidden: { opacity: 0, x: 48 },
      show: { opacity: 1, x: 0, transition: { duration: 0.7, delay } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 56 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
    },
  };
  const v = map[variant] || fadeUp;

  if (stagger > 0) {
    return (
      <motion.div
        variants={staggerParent(stagger, delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount }}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}