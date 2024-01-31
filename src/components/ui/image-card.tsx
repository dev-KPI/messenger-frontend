import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type ImageCardProps = {
  children: ReactNode
  className?: string
}

const ImageCard: FC<ImageCardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex-shrink-0 flex items-center justify-center rounded-3xl bg-gradient-purple-blue pt-24 pr-8 pb-36 pl-5',
        className
      )}
    >
      {children}
    </div>
  )
}
export default ImageCard
