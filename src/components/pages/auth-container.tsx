import Content from '@/components/ui/content'
import { cn } from '@/lib/utils'
import { FC, ReactNode } from 'react'

type AuthContainerProps = {
  children: ReactNode
  className?: string
}

const AuthContainer: FC<AuthContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('h-screen w-screen bg-gradient-blue-white', className)}>
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <section className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          {children}
        </section>
      </Content>
    </div>
  )
}

export default AuthContainer
