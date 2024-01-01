import { FC } from 'react'

type IconChangeProps = {
  className?: string
  height?: number
  width?: number
}

const IconChange: FC<IconChangeProps> = ({ className, height, width }) => {
  return (
    <svg
      className={className}
      fill="none"
      height={height || 24}
      viewBox="0 0 24 24"
      width={width || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16.5H16M4 16.5L7.5 13M4 16.5L7.5 20M7 7.5H20M20 7.5L16.5 4M20 7.5L16.5 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}
export default IconChange
