import { memo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "./UI/SectionHeading";
import { GlassCard } from "./UI/GlassCard";
import { Chip } from "./UI/Chip";
import { Icon } from "./UI/Icon";
import { TiltCard } from "./UI/TiltCard";
import { fadeUp, staggerParent } from "@/utils/animations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const TONES = {
  "AI / Web App": "accent",
  "Process Mining": "primary",
  "Business Intelligence": "secondary",
  "Data Analysis": "primary",
  "Data Visualization": "secondary",
};

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-[rgba(148,163,184,0.08)]">
      {!loaded ? <div className="skeleton absolute inset-0" aria-hidden="true" /> : null}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,8,22,0.85)] via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}


const ProjectCard = memo(function ProjectCard({ project, githubBase, reduced }) {
  const githubUrl = `${githubBase}/`;
  return (
    <motion.div variants={fadeUp} className="h-full">
      <TiltCard max={reduced ? 0 : 6} glare={false} scale={1.01} className="h-full">
        <GlassCard
          className="gradient-border group flex h-full flex-col overflow-hidden !p-0"
          as="article"
        >
          <div className="relative">
            <LazyImage src={project.image} alt={project.imageAlt} />
            {project.featured ? (
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-3 py-1 text-xs font-bold text-[#050816] shadow-glow">
                <Icon name="Star" size={12} />
                Featured
              </span>
            ) : null}
            <span className="absolute right-4 top-4 rounded-full border border-line bg-[rgba(5,8,22,0.7)] px-2.5 py-1 text-xs font-semibold text-muted backdrop-blur">
              {project.year}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa]">
              {project.kicker}
            </p>
            <h3 className="mt-1.5 font-display text-xl font-bold text-ink">{project.name}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-4 flex flex-col gap-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2 text-xs leading-relaxed text-ink-soft">
                  <Icon name="Check" size={13} className="mt-0.5 shrink-0 text-[#22c55e]" />
                  {f}
                </li>
              ))}
            </ul>

            <dl className="mt-4 grid gap-2 text-xs">
              <div className="flex gap-2">
                <dt className="shrink-0 font-semibold text-[#fbbf24]">Challenge:</dt>
                <dd className="text-muted">{project.challenges}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 font-semibold text-[#2dd4bf]">Outcome:</dt>
                <dd className="text-muted">{project.outcome}</dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Chip key={t} tone={TONES[project.tag] || "primary"}>{t}</Chip>
              ))}
            </div>

            <div className="mt-auto flex gap-3 pt-5">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-card/60 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-[#8b5cf6]/50 hover:text-[#c4b5fd]"
                data-cursor-scale="1.5"
              >
                <Icon name="Github" size={16} />
                GitHub
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
                data-cursor-scale="1.5"
              >
                <Icon name="ExternalLink" size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </GlassCard>
      </TiltCard>
    </motion.div>
  );
});


export function Projects() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="projects" className="section-shell" aria-label="Projects">
      <div className="blob animate-blob right-[-7rem] top-24 h-72 w-72 bg-[#f59e0b]/15" aria-hidden="true" />
      <div className="blob animate-blob left-[8%] bottom-24 h-64 w-64 bg-[#8b5cf6]/20 [animation-delay:-8s]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          subtitle={projects.subtitle}
          icon="FolderKanban"
        />

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.items.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              githubBase={projects.githubBase}
              reduced={reduced}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
