/**
 * Professional footer — quick links, socials, resume + back-to-top pill.
 */
import { hero } from "@/data/hero";
import { navLinks, socials } from "@/data/socials";
import { Icon } from "./UI/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-[rgba(5,8,22,0.7)] backdrop-blur" aria-label="Footer">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#14b8a6] font-display text-sm font-extrabold text-white shadow-glow">
              {hero.monogram}
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Sujay<span className="text-gradient">.</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Software Engineer & Data Analyst building practical AI, analytics and full-stack solutions from {hero.location}.
          </p>
          <div className="mt-5 flex gap-3">
            {[socials.github, socials.linkedin, socials.email].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card/60 text-muted transition hover:border-[#8b5cf6]/50 hover:text-[#a78bfa]"
              >
                <Icon name={s.label === "GitHub" ? "Github" : s.label === "LinkedIn" ? "Linkedin" : "Mail"} size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-sm text-ink-soft transition hover:text-[#a78bfa]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Resume</p>
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href={hero.cta.downloadResume.href}
              download={hero.cta.downloadResume.download}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-[#a78bfa]"
            >
              <Icon name="Download" size={16} />
              {hero.cta.downloadResume.label}
            </a>
            <a
              href={hero.cta.viewResume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-[#a78bfa]"
            >
              <Icon name="Eye" size={16} />
              {hero.cta.viewResume.label}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-[#a78bfa]"
            >
              <Icon name="Send" size={16} />
              {hero.cta.contact.label}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-muted">
          <p>© {year} {hero.name}. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-1.5 font-semibold transition hover:text-[#a78bfa]" aria-label="Back to top">
            <Icon name="ArrowUp" size={14} />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
