import { motion } from "framer-motion";
import { fadeUp, staggerChild } from "@/utils/animations";
import { Icon } from "./Icon";

/**
 * Reusable section header: eyebrow pill + title + subtitle with a
 * staggered reveal.
 */
export function SectionHeading({ eyebrow, title, subtitle, icon, align = "center" }) {
  const alignment = align === "left" ? "left" : "center";
  return (
    <motion.div
      variants={staggerChild(fadeUp)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`max-w-2xl ${alignment === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      <span className="eyebrow">{icon ? <Icon name={icon} size={14} /> : null}{eyebrow}</span>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}