/**
 * Shared Framer Motion variants — used across every section so the
 * animation language stays consistent and premium.
 */
export const easeOut = [0.22, 0.61, 0.36, 1];
export const spring = { type: "spring", stiffness: 380, damping: 30 };
export const STAGGER = 0.09;
export const VIEWPORT = { once: true, amount: 0.18 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

export const slideIn = (dir = "left") => ({
  hidden: {
    opacity: 0,
    x: dir === "left" ? -40 : dir === "right" ? 40 : 0,
    y: dir === "up" ? 40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const staggerParent = (stagger = STAGGER, delayChildren = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerChild = (variant = fadeUp) => ({
  ...variant,
  show: {
    ...variant.show,
    transition: { ...variant.show.transition, ease: easeOut },
  },
});

/** Elevates any component on hover with a soft lift + glow. */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3 } },
};