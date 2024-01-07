import FormAuth from '@/components/Pages/Auth/FormAuth'
import ImageCard from '@/components/Pages/Auth/ImageCard'
import Container from '@/components/UI/Container'
import Image from 'next/image'

export default function Auth() {
  return (
    <section className="h-screen w-screen bg-gradient-blue-white">
      <Container className="flex items-center justify-center">
        <div className="card p-7 sm:p-10 flex gap-7 md:gap-[3.75rem] bg-white">
          <ImageCard className="hidden sm:block -my-[4.375rem] flex-shrink-0">
            <Image
              alt="Golub"
              height={161}
              src="/images/golub.png"
              width={196}
            />
          </ImageCard>
          <div>
            <h1 className="title-lg">Authentication</h1>
            <FormAuth />
          </div>
        </div>
      </Container>
    </section>
  )
}
