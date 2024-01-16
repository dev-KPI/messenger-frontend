import IconSize, { ICON_SIZE } from '@/types/enums/IconSize'

export const classnames = (
  ...names: (boolean | null | number | string | undefined)[]
): string => names.filter((n): n is string => typeof n === 'string').join(' ')

export const getIconDimension = (size?: IconSize) => {
  if (size) return ICON_SIZE[size]
  return ICON_SIZE['md']
}
