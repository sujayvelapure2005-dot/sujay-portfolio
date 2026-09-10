import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionHeading } from "./UI/SectionHeading";
import { GlassCard } from "./UI/GlassCard";
import { Icon } from "./UI/Icon";
import { fadeUp, staggerParent } from "@/utils/animations";

const ACCENTS = {
  primary: { bg: "bg-[#8b5cf6]/15", text: "text-[#a78bfa]", ring: "ring-[#8b5cf6]/30" },
  secondary: { bg: "bg-[#14b8a6]/15", text: "text-[#2dd4bf]", ring: "ring-[#14b8a6]/30" },
  accent: { bg: "bg-[#f59e0b]/15", text: "text-[#fbbf24]", ring: "ring-[#f59e0b]/30" },
};

export function Skills() {
  return (
    <section id="skills" className="section-shell" aria-label="Skills">
      <div className="blob animate-blob left-[10%] top-10 h-64 w-64 bg-[#f59e0b]/15" aria-hidden="true" />
      <div className="blob animate-blob right-[6%] bottom-16 h-72 w-72 bg-[#8b5cf6]/20 [animation-delay:-9s]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={skills.eyebrow}
          title={skills.title}
          subtitle={skills.subtitle}
          icon="Wrench"
        />

        <motion.div
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.categories.map((category) => {
            const accent = ACCENTS[category.color] || ACCENTS.primary;
            return (
              <motion.div key={category.id} variants={fadeUp} className="h-full">
                <GlassCard className="card-glow group flex h-full flex-col p-6" as="article">
                  <div className="flex items-center gap-3">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${accent.bg} ${accent.text} ring-1 ${accent.ring} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon name={category.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{category.title}</h3>
                      <p className="text-xs text-muted">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                    {category.chips.map((chip) => (
                      <span key={chip} className="chip">{chip}</span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
