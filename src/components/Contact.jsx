import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { socials } from "@/data/socials";
import { SectionHeading } from "./UI/SectionHeading";
import { Icon } from "./UI/Icon";
import { buildMailto } from "@/utils/mailto";
import { fadeUp, staggerParent } from "@/utils/animations";

const cardHref = {
  email: socials.email.url,
  phone: socials.phone.url,
  location: socials.location.url,
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const href = buildMailto({
      to: contact.email,
      subject: `Portfolio inquiry from ${form.name || "a visitor"}`,
      body: `${form.message}\n\n— ${form.name} (${form.email})`,
    });
    window.location.href = href;
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell" aria-label="Contact">
      <div className="blob animate-blob right-[-5rem] top-24 h-72 w-72 bg-[#8b5cf6]/20" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.subtitle}
          icon="Mail"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info cards + socials */}
          <motion.div
            variants={staggerParent(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contact.cards.map((card) => {
              const info = socials[card.key];
              return (
                <motion.a
                  key={card.id}
                  variants={fadeUp}
                  href={cardHref[card.id]}
                  target={card.id === "location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass card-glow gradient-border group flex items-center gap-4 rounded-2xl p-5"
                  data-cursor-scale="1.3"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#14b8a6]/20 text-[#a78bfa] ring-1 ring-line">
                    <Icon name={card.icon} size={22} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                      {card.label}
                    </span>
                    <span className="block font-display text-sm font-semibold text-ink">
                      {info.handle}
                    </span>
                  </span>
                </motion.a>
              );
            })}

            <motion.div variants={fadeUp} className="glass card-glow gradient-border rounded-2xl p-5">
              <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                Find me online
              </span>
              <div className="mt-3 flex gap-3">
                {[
                  { icon: "Github", ...socials.github },
                  { icon: "Linkedin", ...socials.linkedin },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-card/60 text-muted transition hover:border-[#8b5cf6]/50 hover:text-[#a78bfa]"
                    data-cursor-scale="1.5"
                  >
                    <Icon name={s.icon} size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <ContactFormInner form={form} update={update} handleSubmit={handleSubmit} sent={sent} />
        </div>
      </div>
    </section>
  );
}

function ContactFormInner({ form, update, handleSubmit, sent }) {
  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit}
      className="glass card-glow gradient-border flex flex-col gap-4 rounded-2xl p-6 sm:p-8" aria-label="Send a message"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
          Your name
          <input
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Smith"
            autoComplete="name"
            className="rounded-xl border border-line bg-[rgba(148,163,184,0.08)] px-4 py-3 text-ink placeholder:text-muted focus:border-[#8b5cf6] focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
          Your email
          <input
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@company.com"
            autoComplete="email"
            className="rounded-xl border border-line bg-[rgba(148,163,184,0.08)] px-4 py-3 text-ink placeholder:text-muted focus:border-[#8b5cf6] focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-ink-soft">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Hi Sujay — I saw your portfolio and would love to talk about…"
          className="resize-y rounded-xl border border-line bg-[rgba(148,163,184,0.08)] px-4 py-3 text-ink placeholder:text-muted focus:border-[#8b5cf6] focus:outline-none"
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="btn-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] active:scale-95"
          data-cursor-scale="1.6"
        >
          <Icon name="Send" size={16} />
          Send Message
        </button>
        {sent ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#4ade80]">
            <Icon name="Check" size={16} />
            Opening your email app…
          </span>
        ) : null}
      </div>
      <p className="text-xs leading-relaxed text-muted">
        This form opens your email client addressed to {contact.email} — no account or backend needed.
      </p>
    </motion.form>
  );
}
