import { useState } from "react";

/**
 * Theme management — persistent dark/light switcher.
 * The colour palette itself lives in src/index.css as CSS custom properties.
 */
const THEME_KEY = "sv-portfolio-theme";

function getStored() {
  try {
    return window.localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

function applyThemeClass(theme) {
  const root = document.documentElement;
  if (theme === "light") root.classList.add("light");
  else root.classList.remove("light");
  root.setAttribute("data-theme", theme);
}

export function initTheme() {
  const stored = getStored();
  const theme = stored === "light" || stored === "dark" ? stored : "dark";
  applyThemeClass(theme);
  return theme;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => initTheme());

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
    applyThemeClass(next);
    setTheme(next);
  }

  return { theme, toggle };
}