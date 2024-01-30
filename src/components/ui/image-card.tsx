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
        'flex items-center justify-center rounded-3xl bg-gradient-purple-blue',
        className
      )}
    >
      {children}
    </div>
  )
}
export default ImageCard
