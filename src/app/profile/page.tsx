import FormAuth from '@/components/pages/auth/form-auth'
import FileInput from '@/components/pages/profile/file-input'
import Content from '@/components/ui/content'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Profile() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Content className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <div className="p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] rounded-3xl bg-base-white dark:bg-base-black">
          <FileInput />
          <div>
            <div className="flex justify-between pb-2">
              <h1 className="title-lg">Authentication</h1>
              <ThemeToggler />
            </div>
            <FormAuth className="mt-5" />
          </div>
        </div>
      </Content>
    </section>
  )
}
