import FileInput from '@/components/pages/profile/file-input'
import FormProfile from '@/components/pages/profile/form-profile'
import Content from '@/components/ui/content'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Profile() {
  return (
    <div className="h-screen w-screen bg-gradient-blue-white">
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <section className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          <ImageCard className="-my-[4.375rem] flex-shrink-0 hidden sm:flex py-32 px-[3.25rem]">
            <FileInput />
          </ImageCard>
          <article>
            <header className="flex justify-between pb-2 mt-8">
              <h1 className="title-lg">Profile</h1>
              <ThemeToggler />
            </header>
            <FormProfile className="mt-5" />
          </article>
        </section>
      </Content>
    </div>
  )
}
