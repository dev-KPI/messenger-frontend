import AuthContent from '@/components/pages/auth-content'
import FileInput from '@/components/pages/profile/file-input'
import ProfileForm from '@/components/pages/profile/profile-form'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Profile() {
  return (
    <AuthContent className="*:*:flex-col *:*:grow bg-white md:*:*:grow-0 md:*:*:flex-row md:bg-gradient-blue-white">
      <h3 className="text-lg font-medium text-center py-[0.4375rem] md:hidden">
        Profile
      </h3>
      <ImageCard className="p-0 bg-none md:-my-[4.375rem] md:py-32 md:px-[3.25rem] md:bg-gradient-purple-blue">
        <FileInput />
      </ImageCard>
      <article className="flex justify-center md:block">
        <header className="hidden justify-between pb-2 mt-8 md:flex">
          <h1 className="title-lg">Profile</h1>
          <div className="hidden md:block">
            <ThemeToggler />
          </div>
        </header>
        <ProfileForm className="grow mt-8 md:mt-5" />
      </article>
    </AuthContent>
  )
}
