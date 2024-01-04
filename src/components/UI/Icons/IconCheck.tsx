import IconProps from '@/types/IconProps'
import { ICON_SIZE } from '@/types/enums/IconSize'
import { FC } from 'react'

const IconCheck: FC<IconProps> = ({ className, size }) => {
  const dimension = size ? ICON_SIZE[size] : ICON_SIZE['md']

  return (
    <svg
      className={className}
      fill="none"
      height={dimension}
      viewBox="0 0 20 20"
      width={dimension}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6829 6.97652C16.8881 6.76125 17 6.48728 17 6.16438C17 5.51859 16.515 5 15.8995 5C15.5917 5 15.3119 5.13699 15.0974 5.36204L8.71795 12.2114L5.90263 9.11204C5.68812 8.88699 5.399 8.75 5.10054 8.75C4.48498 8.75 4 9.26859 4 9.91438C4 10.2373 4.11192 10.5113 4.31711 10.7265L7.8599 14.589C8.10239 14.863 8.40084 14.9902 8.72727 15C9.0537 15 9.3335 14.863 9.58532 14.589L16.6829 6.97652Z"
        fill="white"
      />
    </svg>
  )
}
export default IconCheck
