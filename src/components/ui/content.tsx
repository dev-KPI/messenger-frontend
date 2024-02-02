import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
  className?: string
}

const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={cn('px-4 w-full h-full sm:px-5', className)}>
      {children}
    </div>
  )
}

export default Content
