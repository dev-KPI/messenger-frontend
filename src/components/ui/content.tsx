import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type ContentProps = {
  children: ReactNode
  className?: string
}

const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <div className={classnames('px-5 w-full h-full', className)}>
      {children}
    </div>
  )
}

export default Content
