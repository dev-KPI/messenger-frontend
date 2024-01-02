export const ICON_SIZE = {
  lg: 32,
  md: 24,
  sm: 16,
} as const

type IconSize = keyof typeof ICON_SIZE

export default IconSize
