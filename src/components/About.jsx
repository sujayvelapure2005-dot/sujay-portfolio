import { motion } from "framer-motion";
import { about } from "@/data/about";
import { SectionHeading } from "./UI/SectionHeading";
import { GlassCard } from "./UI/GlassCard";
import { Chip } from "./UI/Chip";
import { Icon } from "./UI/Icon";
import { Reveal } from "./UI/Reveal";
import { fadeUp, staggerParent } from "@/utils/animations";

export function About() {
  return (
    <section id="about" className="section-shell" aria-label="About me">
      {/* ambient blobs */}
      <div className="blob animate-blob left-[-8rem] top-24 h-72 w-72 bg-[#8b5cf6]/25" aria-hidden="true" />
      <div className="blob animate-blob right-[-6rem] bottom-24 h-64 w-64 bg-[#14b8a6]/20 [animation-delay:-6s]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          subtitle={about.lead}
          icon="Sparkles"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Left column — objective + journey */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Reveal>
              <GlassCard className="relative overflow-hidden p-7 sm:p-8">
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#8b5cf6] to-[#14b8a6]" />
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#8b5cf6]/15 text-[#a78bfa] ring-1 ring-[#8b5cf6]/30">
                    <Icon name="Target" size={20} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink">{about.objective.label}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{about.objective.text}</p>
              </GlassCard>
            </Reveal>

            <motion.div
              variants={staggerParent(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4"
            >
              {about.journey.map((step, i) => (
                <motion.div key={step.heading} variants={fadeUp}>
                  <GlassCard className="flex gap-5 p-6">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#14b8a6] font-display text-sm font-bold text-white shadow-glow">
                        {i + 1}
                      </span>
                      {i < about.journey.length - 1 ? (
                        <span className="mt-2 w-px flex-1 bg-gradient-to-b from-[#8b5cf6]/50 to-transparent" />
                      ) : null}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-ink">{step.heading}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>


          {/* Right column — interests, soft skills, quote */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal variant="slideRight">
              <GlassCard className="p-7">
                <div className="flex items-center gap-2.5">
                  <Icon name="Sparkles" size={18} className="text-[#2dd4bf]" />
                  <h3 className="font-display text-lg font-bold text-ink">Interests</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {about.interests.map((item) => (
                    <Chip key={item} tone="secondary">{item}</Chip>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal variant="slideRight" delay={0.1}>
              <GlassCard className="p-7">
                <div className="flex items-center gap-2.5">
                  <Icon name="Users" size={18} className="text-[#a78bfa]" />
                  <h3 className="font-display text-lg font-bold text-ink">Soft Skills</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {about.softSkills.map((item) => (
                    <Chip key={item} tone="primary">{item}</Chip>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal variant="slideRight" delay={0.2}>
              <GlassCard className="relative overflow-hidden p-7">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#f59e0b]/15 blur-2xl" aria-hidden="true" />
                <Icon name="Quote" size={28} className="text-[#fbbf24]" />
                <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  {about.highlighted}
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>

        {/* Strength / feature cards */}
        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {about.strengths.map((card) => (
            <motion.div key={card.title} variants={fadeUp}>
              <GlassCard className="card-glow group h-full p-6" as="article">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#8b5cf6]/25 to-[#14b8a6]/20 text-[#c4b5fd] ring-1 ring-[#8b5cf6]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={card.icon} size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
