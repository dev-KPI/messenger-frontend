'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/ui/icons'
import { useTheme } from 'next-themes'
import * as React from 'react'

export function ThemeToggler() {
  const { setTheme } = useTheme()

  const setThemeLight = () => setTheme('light')
  const setThemeDark = () => setTheme('dark')
  const setThemeSystem = () => setTheme('system')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="theme_icon" variant="outline">
          <Icons.sun className="scale-100 dark:scale-0" />
          <Icons.moon className="absolute scale-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={setThemeLight}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={setThemeDark}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={setThemeSystem}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
