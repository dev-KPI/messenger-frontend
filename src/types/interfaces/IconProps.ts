import IconSize from '@/types/enums/IconSize'
import { HTMLAttributes } from 'react'

interface IconProps extends HTMLAttributes<SVGElement> {
  size?: IconSize
}

export default IconProps
