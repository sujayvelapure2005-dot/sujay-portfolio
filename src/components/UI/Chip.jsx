/**
 * Small pill chip used for technologies, tags and keywords.
 */
export function Chip({ children, tone = "primary", className = "" }) {
  const tones = {
    primary: "rgba(139,92,246,0.12) rgba(139,92,246,0.26) rgba(167,139,250,1)",
    secondary: "rgba(20,184,166,0.12) rgba(20,184,166,0.26) rgba(45,212,191,1)",
    accent: "rgba(245,158,11,0.12) rgba(245,158,11,0.28) rgba(251,191,36,1)",
  };
  const [bg, border, fg] = (tones[tone] || tones.primary).split(" ");
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-250 ${className}`}
      style={{
        backgroundColor: bg,
        border: `1px solid ${border}`,
        color: fg,
      }}
    >
      {children}
    </span>
  );
}