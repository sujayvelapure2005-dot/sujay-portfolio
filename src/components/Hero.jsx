import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MapPin, Mail, ChevronDown, Sparkles, Github, Linkedin } from "lucide-react";
import { hero } from "@/data/hero";
import { socials } from "@/data/socials";
import { ParticleField } from "./UI/ParticleField";
import { GradientButton } from "./UI/GradientButton";
import { TiltCard } from "./UI/TiltCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

export function Hero() {
  const typingSequence = hero.roles.flatMap((role) => [role, 1700]);
  const [imgSrc, setImgSrc] = useState(hero.image.src);

  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24">
      {/* Layered background */}
      <div className="grid-bg" aria-hidden="true" />
      <div className="blob animate-blob left-[-140px] top-[-80px] h-[420px] w-[420px] bg-[#8b5cf6]/45" />
      <div className="blob animate-blob right-[-160px] top-[24%] h-[380px] w-[380px] bg-[#14b8a6]/35" style={{ animationDelay: "-6s" }} />
      <div className="blob animate-blob bottom-[-120px] left-[28%] h-[360px] w-[360px] bg-[#f59e0b]/25" style={{ animationDelay: "-12s" }} aria-hidden="true" />
      <ParticleField className="opacity-80" />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------- Left: copy ---------- */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* availability badge */}
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-3.5 py-1.5 text-xs font-semibold text-[#4ade80]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
              </span>
              {hero.availability.text}
            </span>
          </motion.div>

          {/* name */}
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{hero.firstName}</span>
            <span className="text-ink"> {hero.lastName}</span>
          </motion.h1>

          {/* typing role */}
          <motion.div variants={item} className="mt-4 flex items-center gap-2.5 text-xl sm:text-2xl">
            <Sparkles size={20} className="shrink-0 text-[#f59e0b]" />
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={55}
              deletionSpeed={35}
              repeat={Infinity}
              cursor={true}
              className="font-display font-semibold text-[#a78bfa] sm:text-2xl lg:text-[1.65rem]"
            />
          </motion.div>

          {/* summary */}
          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.summary}
          </motion.p>

          {/* meta */}
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-[#14b8a6]" /> {hero.location}
            </span>
            <a href={socials.email.url} className="inline-flex items-center gap-2 text-muted transition hover:text-[#a78bfa]" data-cursor-scale="1.4">
              <Mail size={16} className="text-[#8b5cf6]" /> {hero.email}
            </a>
            <a href={socials.github.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted transition hover:text-[#a78bfa]" aria-label="GitHub profile" data-cursor-scale="1.4">
              <Github size={16} className="text-[#94a3b8]" /> GitHub
            </a>
            <a href={socials.linkedin.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted transition hover:text-[#14b8a6]" aria-label="LinkedIn profile" data-cursor-scale="1.4">
              <Linkedin size={16} className="text-[#14b8a6]" /> LinkedIn
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <GradientButton href={hero.cta.downloadResume.href} download={hero.cta.downloadResume.download} icon="Download" size="md">
              {hero.cta.downloadResume.label}
            </GradientButton>
            <GradientButton href={hero.cta.viewResume.href} target="_blank" variant="soft" iconEnd="ExternalLink" size="md">
              {hero.cta.viewResume.label}
            </GradientButton>
            <GradientButton href={hero.cta.contact.href} variant="outline" icon="MessageCircle" size="md">
              {hero.cta.contact.label}
            </GradientButton>
            <GradientButton href={hero.cta.projects.href} variant="outline" iconEnd="ArrowRight" size="md" className="hidden sm:inline-flex">
              {hero.cta.projects.label}
            </GradientButton>
          </motion.div>
        </motion.div>
{/* ---------- Right: visual ---------- */}
        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay: 0.45 }}
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-tr from-[#8b5cf6]/30 via-[#14b8a6]/20 to-[#f59e0b]/20 blur-3xl" />
            <TiltCard className="overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-card">
                <img
                  src={imgSrc}
                  alt={hero.image.alt}
                  className="h-full w-full rounded-[2rem] object-contain"
                  loading="eager"
                  fetchpriority="high"
                  onError={() => setImgSrc(hero.image.fallback)}
                />
                {/* Soft inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_rgba(139,92,246,0.15)]" />
              </div>
            </TiltCard>

            {/* floating chips */}
            <motion.div
              className="glass absolute -left-4 top-10 hidden items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold sm:flex"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" /> Python · SQL
            </motion.div>
            <motion.div
              className="glass absolute -right-3 top-1/3 hidden items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold sm:flex"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#14b8a6]" /> Power BI
            </motion.div>
            <motion.div
              className="glass absolute bottom-12 -left-2 hidden items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold sm:flex"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" /> FastAPI
            </motion.div>
          </div>
          </motion.div>{/* end floating wrapper */}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted transition hover:text-[#a78bfa]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.span
          className="flex h-9 w-6 items-start justify-center rounded-full border border-line p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={12} />
        </motion.span>
      </motion.a>
    </section>
  );
}