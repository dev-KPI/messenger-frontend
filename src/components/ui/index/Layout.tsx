import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  className?: string
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={classnames('px-5 w-full h-full', className)}>
      {children}
    </div>
  )
}

export default Layout
