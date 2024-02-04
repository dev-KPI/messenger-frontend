import AuthContent from '@/components/pages/auth-content'
import FileInput from '@/components/pages/profile/file-input'
import ProfileForm from '@/components/pages/profile/profile-form'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Profile() {
  return (
    <AuthContent className="bg-base-white md:bg-gradient-blue-white">
      <section className="justify-center pb-7 px-0 pt-14 flex gap-7 rounded-3xl flex-col grow md:dark:bg-base-black md:flex-row md:grow-0 md:pt-7 md:px-7 md:bg-base-white md:gap-[1.75rem] lg:gap-16">
        <h2 className="title-sm text-center md:hidden">Profile</h2>
        <ImageCard className="p-0 bg-none -mt-2 md:mt-0 md:-my-[4.375rem] md:py-32 md:px-[3.25rem] md:bg-gradient-purple-blue">
          <FileInput />
        </ImageCard>
        <article className="flex justify-center md:block">
          <header className="hidden justify-between mt-8 md:flex">
            <h1 className="title-lg">Profile</h1>
            <div className="hidden md:block">
              <ThemeToggler />
            </div>
          </header>
          <ProfileForm className="grow mt-9 md:mt-5" />
        </article>
      </section>
    </AuthContent>
  )
}
