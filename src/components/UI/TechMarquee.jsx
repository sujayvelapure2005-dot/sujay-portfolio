import { Sparkles } from "lucide-react";

/**
 * Infinite scrolling strip of tech keywords (duplicated for a seamless loop).
 */
export function TechMarquee({ items = [], duration = 28 }) {
  const row = [...items, ...items];
  return (
    <div className="mask-fade-x relative overflow-hidden py-4" aria-hidden="true">
      <div className="marquee-track gap-4" style={{ "--marquee-duration": `${duration}s` }}>
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-card/50 px-4 py-2 text-sm font-medium text-muted backdrop-blur"
          >
            <Sparkles size={14} className="text-[#8b5cf6]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}