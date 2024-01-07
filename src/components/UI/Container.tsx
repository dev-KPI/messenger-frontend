import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classnames('px-5 w-full h-full', className)}>
      {children}
    </div>
  )
}

export default Container
