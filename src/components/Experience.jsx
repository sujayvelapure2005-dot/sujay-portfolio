import { motion } from "framer-motion";
import { experience, highlights } from "@/data/experience";
import { SectionHeading } from "./UI/SectionHeading";
import { GlassCard } from "./UI/GlassCard";
import { Chip } from "./UI/Chip";
import { Icon } from "./UI/Icon";
import { fadeUp, staggerParent } from "@/utils/animations";

export function Experience() {
  return (
    <section id="experience" className="section-shell" aria-label="Work experience">
      <div className="blob animate-blob right-[-8rem] top-32 h-72 w-72 bg-[#14b8a6]/20" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={experience.eyebrow}
          title={experience.title}
          subtitle={experience.subtitle}
          icon="BriefcaseBusiness"
        />

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <span
            className="absolute left-5 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#8b5cf6] via-[#14b8a6] to-transparent sm:left-6"
            aria-hidden="true"
          />
          <motion.ol
            variants={staggerParent(0.16)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-8"
          >
            {experience.items.map((item) => (
              <motion.li key={item.id} variants={fadeUp} className="relative pl-14 sm:pl-18">
                {/* Node */}
                <span
                  className={`pulse-dot absolute left-5 top-7 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full sm:left-6 ${
                    item.color === "secondary" ? "bg-[#14b8a6]" : "bg-[#8b5cf6]"
                  }`}
                  aria-hidden="true"
                />
                <GlassCard className="card-glow p-6 sm:p-7" as="article">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {/* Company logo placeholder */}
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ring-1 ${
                          item.color === "secondary"
                            ? "bg-[#14b8a6]/15 text-[#2dd4bf] ring-[#14b8a6]/30"
                            : "bg-[#8b5cf6]/15 text-[#a78bfa] ring-[#8b5cf6]/30"
                        }`}
                        aria-hidden="true"
                      >
                        <Icon name={item.icon} size={24} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink">{item.role}</h3>
                        <p className="text-sm font-semibold text-muted">{item.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 sm:items-end">
                      <Chip tone={item.color === "secondary" ? "secondary" : "primary"}>{item.period}</Chip>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                        <Icon name="MapPin" size={12} />
                        {item.location} · {item.type}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-col gap-2">
                    {item.achievements.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <Icon name="BadgeCheck" size={16} className="mt-0.5 shrink-0 text-[#22c55e]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                    {item.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </GlassCard>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Career highlights strip */}
        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((h) => (
            <motion.div key={h.id} variants={fadeUp}>
              <GlassCard className="flex h-full items-start gap-3 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#8b5cf6]/15 text-[#a78bfa] ring-1 ring-[#8b5cf6]/25">
                  <Icon name={h.icon} size={17} />
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">{h.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
