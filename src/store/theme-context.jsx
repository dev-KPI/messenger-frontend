'use client'

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'dark',
  toggle: () => {},
})

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    checkTheme()
  }, [currentTheme])

  const checkTheme = () => {
    const isDarkPreferred = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const isDarkStored = localStorage.theme === 'dark'

    if (isDarkStored || (!localStorage.theme && isDarkPreferred)) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      setCurrentTheme('dark')
      return
    }

    document.documentElement.classList.remove('dark')
    setCurrentTheme('light')
  }

  const toggleThemeHandler = () => {
    const current = localStorage.getItem('theme')
    const next = current === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    setCurrentTheme(next)
  }

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, toggle: toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  )
}