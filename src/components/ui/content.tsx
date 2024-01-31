import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
  className?: string
}

const Content: FC<ContentProps> = ({ children, className }) => {
  return <div className={cn('px-5 w-full h-full', className)}>{children}</div>
}

export default Content
