/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-bg)",
        card: "var(--color-card)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        primary: {
          DEFAULT: "#8B5CF6",
          soft: "rgba(139,92,246,0.14)",
          glow: "rgba(139,92,246,0.45)",
        },
        secondary: {
          DEFAULT: "#14B8A6",
          soft: "rgba(20,184,166,0.14)",
          glow: "rgba(20,184,166,0.4)",
        },
        accent: {
          DEFAULT: "#F59E0B",
          soft: "rgba(245,158,11,0.12)",
        },
        success: {
          DEFAULT: "#22C55E",
          soft: "rgba(34,197,94,0.12)",
        },
      },
      fontFamily: {
        display: ['"Sora"', '"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(139,92,246,0.35)",
        "glow-teal": "0 0 24px rgba(20,184,166,0.35)",
        card: "0 12px 28px -12px rgba(2,6,23,0.55), 0 2px 8px rgba(2,6,23,0.35)",
        "card-light": "0 12px 28px -12px rgba(15,23,42,0.22), 0 2px 8px rgba(15,23,42,0.12)",
      },
      backgroundImage: {
        "grid-pattern": "url('/grid.svg')",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};