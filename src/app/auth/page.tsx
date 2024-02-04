import AuthForm from '@/components/pages/auth/auth-form'
import AuthContent from '@/components/pages/auth-content'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Auth() {
  return (
    <AuthContent className="auth-page">
      <section className="justify-center py-36 px-0 flex gap-7 rounded-3xl md:dark:bg-base-black md:py-10 md:px-7 md:bg-base-white md:gap-[1.75rem] lg:gap-16">
        <ImageCard className="-my-[4.375rem] hidden md:flex">
          <Icons.golub />
        </ImageCard>
        <article>
          <header className="flex justify-between">
            <h1 className="title-lg">Authentication</h1>
            <div className="hidden md:block">
              <ThemeToggler />
            </div>
          </header>
          <AuthForm className="mt-8 md:mt-5" />
        </article>
      </section>
    </AuthContent>
  )
}
