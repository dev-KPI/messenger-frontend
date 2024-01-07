import FormAuth from '@/components/Pages/Auth/FormAuth'
import ImageCard from '@/components/Pages/Auth/ImageCard'
import ButtonThemeToggle from '@/components/UI/ButtonThemeToggle'
import IconGolub from '@/components/UI/Icons/IconGolub'
import Layout from '@/components/UI/Layout'

export default function Auth() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Layout className="flex items-center justify-center dark:bg-none dark:bg-base-gray-8">
        <div className="card p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] bg-base-white dark:bg-base-black">
          <ImageCard className="hidden sm:block -my-[4.375rem] flex-shrink-0">
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
