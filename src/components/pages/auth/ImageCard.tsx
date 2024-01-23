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
        'pt-24 pr-8 pb-36 pl-5 flex items-center justify-center rounded-3xl bg-gradient-purple-blue',
        className
      )}
    >
      {children}
    </div>
  )
}
export default ImageCard
