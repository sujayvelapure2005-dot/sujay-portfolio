import { motion } from "framer-motion";
import { education } from "@/data/education";
import { SectionHeading } from "./UI/SectionHeading";
import { GlassCard } from "./UI/GlassCard";
import { Chip } from "./UI/Chip";
import { Icon } from "./UI/Icon";
import { fadeUp, staggerParent } from "@/utils/animations";

const TONES = {
  success: "bg-[#22c55e]/15 text-[#4ade80] ring-[#22c55e]/30",
  accent: "bg-[#f59e0b]/15 text-[#fbbf24] ring-[#f59e0b]/30",
  primary: "bg-[#8b5cf6]/15 text-[#a78bfa] ring-[#8b5cf6]/30",
};

export function Education() {
  return (
    <section id="education" className="section-shell" aria-label="Education">
      <div className="blob animate-blob left-[-6rem] top-40 h-64 w-64 bg-[#8b5cf6]/20" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={education.eyebrow}
          title={education.title}
          subtitle={education.subtitle}
          icon="GraduationCap"
        />

        <motion.ol
          variants={staggerParent(0.16)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto mt-16 flex max-w-3xl flex-col gap-8"
        >
          <span
            className="absolute left-5 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-[#14b8a6] via-[#8b5cf6] to-transparent sm:left-6"
            aria-hidden="true"
          />
          {education.items.map((item) => (
            <motion.li key={item.id} variants={fadeUp} className="relative pl-14 sm:pl-18">
              <span
                className={`pulse-dot absolute left-5 top-8 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full sm:left-6 ${
                  item.color === "secondary" ? "bg-[#14b8a6]" : "bg-[#8b5cf6]"
                }`}
                aria-hidden="true"
              />
              <GlassCard className="card-glow p-6 sm:p-8" as="article">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`grid h-13 w-13 shrink-0 place-items-center rounded-xl p-3 ring-1 ${
                        item.color === "secondary"
                          ? "bg-[#14b8a6]/15 text-[#2dd4bf] ring-[#14b8a6]/30"
                          : "bg-[#8b5cf6]/15 text-[#a78bfa] ring-[#8b5cf6]/30"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon name={item.icon} size={24} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{item.degree}</h3>
                      <p className="text-sm font-semibold text-muted">{item.course}</p>
                      <p className="mt-0.5 text-sm text-muted">{item.institution} · {item.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <Chip tone={item.color === "secondary" ? "secondary" : "primary"}>{item.period}</Chip>
                    {item.score ? (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold tabular-nums ring-1 ${
                          TONES[item.score.tone] || TONES.primary
                        }`}
                      >
                        {item.score.value} {item.score.label}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Relevant Coursework</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {item.practices.map((p) => (
                      <span key={p} className="chip">{p}</span>
                    ))}
                  </div>
                  {item.note ? (
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.note}</p>
                  ) : null}
                </div>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
