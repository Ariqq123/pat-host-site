import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

export const THEME_KEY = 'pat-theme'
export type Theme = 'white' | 'old'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'white',
  setTheme: () => undefined,
})

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('old-mode', theme === 'old')
  localStorage.setItem(THEME_KEY, theme)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.classList.contains('old-mode') ? 'old' : 'white',
  )

  const value = useMemo(
    () => ({
      theme,
      setTheme: (next: Theme) => {
        setThemeState(next)
        applyTheme(next)
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
