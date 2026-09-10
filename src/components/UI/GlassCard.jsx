/**
 * Glassmorphic card with soft shadow and hover lift.
 */
export function GlassCard({ children, className = "", as = "div", hoverable = true, ...rest }) {
  const Tag = as;
  const base = hoverable ? "card-surface" : "glass rounded-2xl shadow-card";
  return (
    <Tag className={`${base} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}