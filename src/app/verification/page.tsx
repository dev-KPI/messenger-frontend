import AuthContent from '@/components/pages/auth-content'
import OtpControl from '@/components/pages/verification/otp-control'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Verification() {
  return (
    <AuthContent>
      <ImageCard className="-my-[4.375rem] hidden sm:flex">
        <Icons.golub />
      </ImageCard>
      <article>
        <header className="flex justify-between items-center">
          <h1 className="title-lg">Check your Email</h1>
          <ThemeToggler />
        </header>
        <OtpControl className="mt-5" />
      </article>
    </AuthContent>
  )
}
