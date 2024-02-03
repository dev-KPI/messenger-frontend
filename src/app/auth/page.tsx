import AuthForm from '@/components/pages/auth/auth-form'
import AuthContent from '@/components/pages/auth-content'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Auth() {
  return (
    <AuthContent className="*:*:pt-36 md:*:*:pt-10">
      <ImageCard className="-my-[4.375rem] hidden md:flex">
        <Icons.golub />
      </ImageCard>
      <article>
        <header className="flex justify-between pb-2">
          <h1 className="title-lg">Authentication</h1>
          <div className="hidden md:block">
            <ThemeToggler />
          </div>
        </header>
        <AuthForm className="mt-5" />
      </article>
    </AuthContent>
  )
}
