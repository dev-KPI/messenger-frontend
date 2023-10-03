'use client'

import { createContext, useCallback, useEffect, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'dark',
  toggle: () => {},
})

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark')

  const checkTheme = useCallback(() => {
    const isLightPreferred = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches
    const isThemeStored = localStorage.theme
    const isLightStored = localStorage.theme === 'light'

    if (isLightStored || (!isThemeStored && isLightPreferred)) {
      if (!isThemeStored) {
        localStorage.setItem('theme', 'light')
      }
      document.documentElement.classList.remove('dark')
      setCurrentTheme('light')
      return
    }

    if (!isThemeStored) {
      localStorage.setItem('theme', 'dark')
    }
    document.documentElement.classList.add('dark')
    setCurrentTheme('dark')
  }, [])

  const toggleThemeHandler = useCallback(() => {
    const current = localStorage.getItem('theme')
    const next = current === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    setCurrentTheme(next)
  }, [])

  useEffect(() => {
    checkTheme()
  }, [checkTheme, currentTheme])

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, toggle: toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
