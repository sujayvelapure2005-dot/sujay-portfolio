import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./UI/SectionHeading";
import { Modal } from "./UI/Modal";
import { Icon } from "./UI/Icon";
import { fadeUp, staggerParent } from "@/utils/animations";

function CertLogo({ logo, size = "h-14 w-14" }) {
  return (
    <span
      className={`grid ${size} shrink-0 place-items-center rounded-xl font-display text-sm font-extrabold ring-1`}
      style={{ backgroundColor: logo.bg, color: logo.color, ["--tw-ring-color"]: logo.ring }}
      aria-hidden="true"
    >
      {logo.text}
    </span>
  );
}

export function Certifications() {
  const [index, setIndex] = useState(null);
  const open = index !== null;
  const cert = open ? certifications.items[index] : null;

  const navigate = useCallback(
    (dir) => {
      setIndex((i) =>
        i === null ? i : (i + dir + certifications.items.length) % certifications.items.length
      );
    },
    []
  );

  return (
    <section id="certifications" className="section-shell" aria-label="Certifications">
      <div className="blob animate-blob left-[-6rem] top-32 h-64 w-64 bg-[#14b8a6]/20" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          subtitle={certifications.subtitle}
          icon="BadgeCheck"
        />

        <motion.div
          variants={staggerParent(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.items.map((item, i) => (
            <motion.div key={item.id} variants={fadeUp} className="h-full">
              <article className="glass card-glow gradient-border group flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-start justify-between gap-3">
                  <CertLogo logo={item.logo} />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs font-medium text-muted">
                    <Icon name="CalendarClock" size={12} />
                    {item.issuedDate}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold leading-snug text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#a78bfa]">{item.issuer}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {item.category}
                </p>

                <div className="mt-4 flex flex-1 flex-wrap content-start gap-2">
                  {item.skills.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>

                <div className="mt-5 flex gap-2.5 border-t border-line pt-4">
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    className="btn-glow inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-3 py-2 text-xs font-semibold text-white shadow-glow transition hover:scale-[1.03]"
                    data-cursor-scale="1.5"
                  >
                    <Icon name="Eye" size={14} />
                    View Certificate
                  </button>
                  <a
                    href={item.href}
                    download
                    className="btn-glow inline-flex items-center justify-center gap-1.5 rounded-lg border border-line bg-card/60 px-3 py-2 text-xs font-semibold text-ink transition hover:border-[#14b8a6]/50 hover:text-[#2dd4bf]"
                    data-cursor-scale="1.5"
                  >
                    <Icon name="Download" size={14} />
                    Download
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate viewer modal */}
      <Modal open={open} onClose={() => setIndex(null)} maxWidth="max-w-5xl">
        {cert ? (
          <div className="p-3 sm:p-5">
            <img
              src={cert.href}
              alt={`${cert.name} certificate`}
              className="mx-auto max-h-[68vh] w-auto rounded-xl object-contain"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1 pb-1">
              <div>
                <h3 className="font-display text-base font-bold text-ink">{cert.name}</h3>
                <p className="text-xs text-muted">
                  {cert.issuer} · {cert.issuedDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  aria-label="Previous certificate"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card/70 text-muted transition hover:text-white"
                  data-cursor-scale="1.5"
                >
                  <Icon name="ChevronLeft" size={18} />
                </button>
                <span className="text-xs tabular-nums text-muted">
                  {(index ?? 0) + 1} / {certifications.items.length}
                </span>
                <button
                  type="button"
                  onClick={() => navigate(1)}
                  aria-label="Next certificate"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card/70 text-muted transition hover:text-white"
                  data-cursor-scale="1.5"
                >
                  <Icon name="ChevronRight" size={18} />
                </button>
                <a
                  href={cert.href}
                  download
                  aria-label="Download certificate"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line bg-card/70 text-muted transition hover:text-white"
                  data-cursor-scale="1.5"
                >
                  <Icon name="Download" size={18} />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
