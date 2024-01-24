import FormAuth from '@/components/pages/auth/form-auth'
import ImageCard from '@/components/pages/auth/image-card'
import Content from '@/components/ui/content'
import { Icons } from '@/components/ui/icons'
import { ModeToggle } from '@/components/ui/theme-toggler'

export default function Auth() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <div className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          <ImageCard className="-my-[4.375rem] flex-shrink-0 hidden sm:flex items-center justify-center">
            <Icons.golub />
          </ImageCard>
          <div>
            <div className="flex justify-between pb-2">
              <h1 className="title-lg">Authentication</h1>
              <ModeToggle />
            </div>
            <FormAuth className="mt-5" />
          </div>
        </div>
      </Content>
    </section>
  )
}
