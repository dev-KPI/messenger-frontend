import FormAuth from '@/components/pages/auth/form-auth'
import Content from '@/components/ui/content'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Auth() {
  return (
    <div className="h-screen w-screen bg-gradient-blue-white">
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <section className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          <ImageCard className="-my-[4.375rem] flex-shrink-0 hidden sm:flex pt-24 pr-8 pb-36 pl-5">
            <Icons.golub />
          </ImageCard>
          <article>
            <header className="flex justify-between pb-2">
              <h1 className="title-lg">Authentication</h1>
              <ThemeToggler />
            </header>
            <FormAuth className="mt-5" />
          </article>
        </section>
      </Content>
    </div>
  )
}
