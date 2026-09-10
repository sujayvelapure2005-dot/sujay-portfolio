import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import { navLinks, socials } from "@/data/socials";
import { hero } from "@/data/hero";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "./UI/ThemeToggle";
import { Icon } from "./UI/Icon";

export function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-[65]"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass-strong border-b border-line shadow-card" : "border-b border-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label="Sujay Velapure — home"
            data-cursor-scale="1.4"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#14b8a6] font-display text-sm font-extrabold text-white shadow-glow transition-transform duration-300 group-hover:rotate-6">
              {hero.monogram}
            </span>
            <span className="hidden font-display text-lg font-bold tracking-tight sm:block">
              Sujay<span className="text-gradient">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-[#a78bfa]" : "text-muted hover:text-ink"
                    }`}
                    data-cursor-scale="1.5"
                  >
                    {link.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#14b8a6]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#contact"
              className="btn-glow hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95 sm:inline-flex"
              data-cursor-scale="1.6"
            >
              <Send size={14} />
              Hire Me
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card/70 text-ink backdrop-blur lg:hidden"
              onClick={() => setOpen((o) => !o)}
              data-cursor-scale="1.6"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>
{/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 z-[64] overflow-y-auto p-5 lg:hidden"
            style={{ background: "rgba(5,8,22,0.94)", backdropFilter: "blur(18px)" }}
          >
            <ul className="mt-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl border px-5 py-3.5 text-base font-medium transition ${
                      active === link.id
                        ? "border-[#8b5cf6]/40 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                        : "border-line bg-card/50 text-ink"
                    }`}
                  >
                    {link.label}
                    <Icon name="ChevronRight" size={16} className="text-muted" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-center gap-4">
              {[socials.github, socials.linkedin].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card/60 text-muted transition hover:border-[#8b5cf6]/50 hover:text-[#a78bfa]"
                >
                  <Icon name={s.label === "GitHub" ? "Github" : "Linkedin"} size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}