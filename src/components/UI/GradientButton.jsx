import { Icon } from "./Icon";

const STYLES = {
  primary: "bg-gradient-to-r from-[#8B5CF6] via-[#7c4bd8] to-[#6d28d9] text-white shadow-glow",
  teal: "bg-gradient-to-r from-[#0d9488] via-[#14B8A6] to-[#2dd4bf] text-white shadow-glow-teal",
  ghost: "bg-transparent text-white border border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/10",
  outline: "bg-card/60 text-ink border border-line backdrop-blur-sm hover:border-[#14b8a6]",
  soft: "bg-[#8b5cf6]/10 text-[#a78bfa] border border-[#8b5cf6]/25 hover:bg-[#8b5cf6]/20",
};

const SIZES = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const VARIANTS = {
  primary: ["text-ink", "text-white"],
  teal: ["text-ink", "text-white"],
  ghost: ["text-ink", "text-white"],
  outline: ["text-ink", "text-ink"],
  soft: ["text-ink", "text-[#a78bfa]"],
};

/**
 * Gradient / glass CTA buttons used across the whole site.
 * Renders an <a> when `href` is present, otherwise a <button>.
 */
export function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconEnd,
  download,
  target,
  className = "",
  ariaLabel,
  type = "button",
}) {
  const Tag = href ? "a" : "button";
  const btn = `btn-glow inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 active:scale-[0.97] ${STYLES[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <Tag
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={btn}
        aria-label={ariaLabel}
        data-cursor-scale="2.4"
      >
        {icon ? <Icon name={icon} size={18} /> : null}
        <span className={VARIANTS[variant][1]}>{children}</span>
        {iconEnd ? <Icon name={iconEnd} size={18} /> : null}
      </Tag>
    );
  }

  return (
    <Tag type={type} onClick={onClick} className={btn} aria-label={ariaLabel} data-cursor-scale="2.4">
      {icon ? <Icon name={icon} size={18} /> : null}
      <span className={VARIANTS[variant][1]}>{children}</span>
      {iconEnd ? <Icon name={iconEnd} size={18} /> : null}
    </Tag>
  );
}