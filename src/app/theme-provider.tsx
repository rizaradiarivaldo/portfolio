"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  isReady: boolean
}

const STORAGE_KEY = "portfolio-theme"

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "dark"

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches
  return prefersLight ? "light" : "dark"
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [isReady, setIsReady] = useState(false)

  // Resolve the user preference on the client after hydration.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const preferred = getPreferredTheme()
    setTheme(preferred)
    document.documentElement.dataset.theme = preferred
    setIsReady(true)
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!isReady) return

    const root = document.documentElement
    root.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, isReady])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      isReady,
    }),
    [theme, isReady],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
