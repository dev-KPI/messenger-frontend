import FormAuth from '@/components/pages/auth/form-auth'
import ImageCard from '@/components/pages/auth/image-card'
import Content from '@/components/ui/content'
import IconGolub from '@/components/ui/icons/IconGolub'
import ThemeToggler from '@/components/ui/index/theme-toggler'

export default function Auth() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <div className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          <ImageCard className="-my-[4.375rem] flex-shrink-0 hidden sm:flex items-center justify-center">
            <IconGolub />
          </ImageCard>
          <div>
            <h1 className="title-lg">Authentication</h1>
            <FormAuth className="mt-5" />
            <ThemeToggler />
          </div>
        </div>
      </Content>
    </section>
  )
}
