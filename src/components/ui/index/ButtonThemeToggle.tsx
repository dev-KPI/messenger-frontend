'use client'

import { Button } from '@/components/ui/button'
import Theme, { THEME } from '@/types/enums/Theme'
import { useTheme } from 'next-themes'

const ButtonThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(
      (resolvedTheme as Theme) === THEME.light ? THEME.dark : THEME.light
    )
  }

  return (
    <Button className="mt-4 w-full" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  )
}

export default ButtonThemeToggle
