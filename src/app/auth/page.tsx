import FormAuth from '@/components/Pages/Auth/FormAuth'
import ImageCard from '@/components/Pages/Auth/ImageCard'
import Image from 'next/image'

export default function Auth() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gradient-blue-white">
      <div className="card p-10 flex gap-[3.75rem] bg-white">
        <ImageCard className="-my-[4.375rem] flex-shrink-0">
          <Image alt="Golub" height={161} src="/images/golub.png" width={196} />
        </ImageCard>
        <div>
          <h1 className="title-lg">Authentication</h1>
          <FormAuth />
        </div>
      </div>
    </section>
  )
}
