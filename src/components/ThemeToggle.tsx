"use client"

import { useTheme } from "@/app/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme, isReady } = useTheme()

  const isDark = theme === "dark"
  const label = isReady ? (isDark ? "Dark" : "Light") : "Theme"
  const icon = isReady ? (isDark ? "🌙" : "☀️") : "🌗"

  return (
    <button
      type="button"
      aria-pressed={isReady ? isDark : undefined}
      aria-label="Toggle dark mode"
      disabled={!isReady}
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-surface px-3 py-1.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-foreground/30 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span className="text-lg">{icon}</span>
      <span>{label} mode</span>
    </button>
  )
}
