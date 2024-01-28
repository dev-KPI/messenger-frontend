import FileInput from '@/components/pages/profile/file-input'
import FormProfile from '@/components/pages/profile/form-profile'
import Content from '@/components/ui/content'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Profile() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <div className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          <FileInput />
          <div>
            <div className="flex justify-between pb-2 mt-8">
              <h1 className="title-lg">Profile</h1>
              <ThemeToggler />
            </div>
            <FormProfile className="mt-5" />
          </div>
        </div>
      </Content>
    </section>
  )
}
