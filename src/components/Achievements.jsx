/**
 * Achievements + animated stats — derived entirely from the resume.
 */
import { motion } from "framer-motion";
import { achievements, stats } from "@/data/achievements";
import { SectionHeading } from "./UI/SectionHeading";
import { GlassCard } from "./UI/GlassCard";
import { Counter } from "./UI/Counter";
import { Icon } from "./UI/Icon";
import { fadeUp, staggerParent } from "@/utils/animations";

const ACCENTS = {
  primary: "bg-[#8b5cf6]/15 text-[#a78bfa] ring-[#8b5cf6]/30",
  secondary: "bg-[#14b8a6]/15 text-[#2dd4bf] ring-[#14b8a6]/30",
  accent: "bg-[#f59e0b]/15 text-[#fbbf24] ring-[#f59e0b]/30",
};

export function Achievements() {
  return (
    <section id="achievements" className="section-shell" aria-label="Achievements and stats">
      <div className="blob animate-blob right-[-6rem] top-24 h-72 w-72 bg-[#8b5cf6]/20" aria-hidden="true" />
      <div className="blob animate-blob left-[6%] bottom-16 h-64 w-64 bg-[#14b8a6]/15 [animation-delay:-6s]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={achievements.eyebrow}
          title={achievements.title}
          subtitle={achievements.subtitle}
          icon="Trophy"
        />

        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.groups.flatMap((group) =>
            group.items.map((item) => (
              <motion.div key={`${group.title}-${item.title}`} variants={fadeUp} className="h-full">
                <GlassCard className="card-glow group flex h-full flex-col gap-3 p-6" as="article">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-110 ${
                      ACCENTS[item.color] || ACCENTS.primary
                    }`}
                  >
                    <Icon name={item.icon} size={22} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{group.title}</p>
                  <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </GlassCard>
              </motion.div>
            ))
          )}
        </motion.div>

        <div className="mt-16">
          <SectionHeading
            eyebrow={stats.eyebrow}
            title={stats.title}
            subtitle={stats.subtitle}
            icon="Activity"
          />
          <motion.div
            variants={staggerParent(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {stats.items.map((s) => (
              <motion.div key={s.id} variants={fadeUp} className="h-full">
                <Counter value={s.value} suffix={s.suffix} label={s.label} icon={s.icon} note={s.note} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
