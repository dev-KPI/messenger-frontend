export const THEME = {
  dark: 'dark',
  light: 'light',
} as const

type Theme = keyof typeof THEME

export default Theme
