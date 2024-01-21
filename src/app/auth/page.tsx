import FormAuth from '@/components/pages/auth/FormAuth'
import ImageCard from '@/components/pages/auth/ImageCard'
import IconGolub from '@/components/ui/icons/IconGolub'
import ButtonThemeToggle from '@/components/ui/index/ButtonThemeToggle'
import Layout from '@/components/ui/index/Layout'

export default function Auth() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Layout className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <div className="card p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] bg-base-white dark:bg-base-black">
          <ImageCard className="-my-[4.375rem] flex-shrink-0 hidden sm:flex items-center justify-center">
            <IconGolub />
          </ImageCard>
          <div>
            <h1 className="title-lg">Authentication</h1>
            <FormAuth />
            <ButtonThemeToggle />
          </div>
        </div>
      </Layout>
    </section>
  )
}
