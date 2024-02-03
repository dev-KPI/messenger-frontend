import AuthContent from '@/components/pages/auth-content'
import OtpControl from '@/components/pages/verification/otp-control'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'
import { ThemeToggler } from '@/components/ui/theme-toggler'

export default function Verification() {
  return (
    <AuthContent className="verification-page">
      <ImageCard className="bg-none px-0 pb-[0.25rem] pt-[2.75rem] md:hidden">
        <Icons.messages />
      </ImageCard>
      <ImageCard className="-my-[4.375rem] hidden md:flex">
        <Icons.golub />
      </ImageCard>
      <article>
        <header className="flex justify-center items-center md:justify-between">
          <h1 className="title-lg">Check your Email</h1>
          <div className="hidden md:block">
            <ThemeToggler />
          </div>
        </header>
        <OtpControl />
      </article>
    </AuthContent>
  )
}
