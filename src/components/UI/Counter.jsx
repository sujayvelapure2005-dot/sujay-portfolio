import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "@/hooks/useCountUp";
import { Icon } from "./Icon";

/**
 * Animated stat counter — starts counting up when scrolled into view.
 * Uses react-intersection-observer (InView hook) for the trigger.
 */
export function Counter({ value, suffix = "", label, icon, note }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true, fallbackInView: true });
  const count = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className="glass card-glow group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-7 text-center"
      data-cursor-scale="1.2"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#8b5cf6]/12 text-[#a78bfa] ring-1 ring-[#8b5cf6]/25 transition-transform duration-300 group-hover:scale-110">
        <Icon name={icon} size={22} />
      </span>
      <div className="leading-none">
        <span className="text-gradient font-display text-4xl font-bold tabular-nums sm:text-5xl">
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-sm font-semibold text-ink">{label}</p>
      {note ? <p className="text-xs text-muted">{note}</p> : null}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#8b5cf6]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    </div>
  );
}