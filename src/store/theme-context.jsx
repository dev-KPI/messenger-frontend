'use client'

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggle: () => {},
})

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('light')

  useEffect(() => {
    checkTheme()
  }, [currentTheme])

  const checkTheme = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      setCurrentTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setCurrentTheme('light')
    }
  }

  const toggleThemeHandler = () => {
    const theme = localStorage.getItem('theme')

    if (theme) {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    } else {
      localStorage.setItem('theme', 'dark')
    }

    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, toggle: toggleThemeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
