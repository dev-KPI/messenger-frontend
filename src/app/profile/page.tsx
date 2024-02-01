import AuthContent from '@/components/pages/auth-content'
import FileInput from '@/components/pages/profile/file-input'
import ProfileForm from '@/components/pages/profile/profile-form'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Profile() {
  return (
    <AuthContent>
      <ImageCard className="-my-[4.375rem] hidden sm:flex py-32 px-[3.25rem]">
        <FileInput />
      </ImageCard>
      <article>
        <header className="flex justify-between pb-2 mt-8">
          <h1 className="title-lg">Profile</h1>
          <ThemeToggler />
        </header>
        <ProfileForm className="mt-5" />
      </article>
    </AuthContent>
  )
}
