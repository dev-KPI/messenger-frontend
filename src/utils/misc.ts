export const classnames = (
  ...names: (boolean | null | number | string | undefined)[]
): string => names.filter((n): n is string => typeof n === 'string').join(' ')
