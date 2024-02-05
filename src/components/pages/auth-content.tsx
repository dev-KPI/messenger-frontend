import Content from '@/components/ui/content'
import { ThemeToggler } from '@/components/ui/theme-toggler'
import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type AuthContentProps = {
  children: ReactNode
  className?: string
}

const AuthContent: FC<AuthContentProps> = ({ children, className }) => {
  return (
    <div className={cn('h-screen w-screen bg-gradient-blue-white', className)}>
      <Content className="flex items-start justify-center dark:bg-base-gray-9 md:items-center">
        {children}
        <div className="absolute top-5 right-5">
          <ThemeToggler />
        </div>
      </Content>
    </div>
  )
}

export default AuthContent
