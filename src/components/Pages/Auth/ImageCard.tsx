import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type ImageCardProps = {
  children: ReactNode
  className?: string
}

const ImageCard: FC<ImageCardProps> = ({ children, className }) => {
  return (
    <div
      className={classnames(
        'card pt-24 pb-36 pl-5 pr-8 flex items-center justify-center bg-gradient-purple-blue',
        className
      )}
    >
      {children}
    </div>
  )
}
export default ImageCard
