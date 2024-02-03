import Content from '@/components/ui/content'
import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type AuthContentProps = {
  children: ReactNode
  className?: string
}

const AuthContent: FC<AuthContentProps> = ({ children, className }) => {
  return (
    <div className={cn('h-screen w-screen bg-gradient-blue-white', className)}>
      <Content className="flex items-start justify-center dark:bg-none dark:bg-base-gray-8 md:items-center">
        <section className="justify-center pb-7 px-0 pt-11 flex gap-7 rounded-3xl md:dark:bg-base-black md:pt-7 md:px-7 md:bg-base-white md:gap-[1.75rem] lg:gap-16">
          {children}
        </section>
      </Content>
    </div>
  )
}

export default AuthContent
