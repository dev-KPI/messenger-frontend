import FormAuth from '@/components/pages/auth/form-auth'
import AuthContent from '@/components/pages/auth-content'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Auth() {
  return (
    <AuthContent>
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
    </AuthContent>
  )
}
