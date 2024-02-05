import AuthContent from '@/components/pages/auth-content'
import OtpControl from '@/components/pages/verification/otp-control'
import { Icons } from '@/components/ui/icons'
import ImageCard from '@/components/ui/image-card'

export default function Verification() {
  return (
    <AuthContent className="verification-page">
      <section className="justify-center flex-col pb-7 px-0 pt-20 flex gap-8 rounded-3xl md:dark:bg-base-black md:flex-row md:pt-7 md:px-7 md:bg-base-white md:gap-[1.75rem] lg:gap-16">
        <ImageCard className="bg-none px-0 pt-0 pb-1 md:hidden">
          <Icons.messages />
        </ImageCard>
        <ImageCard className="-my-[4.375rem] hidden md:flex">
          <Icons.golub />
        </ImageCard>
        <article>
          <header className="flex justify-center items-center md:justify-between">
            <h1 className="title-lg">Check your Email</h1>
          </header>
          <OtpControl />
        </article>
      </section>
    </AuthContent>
  )
}
