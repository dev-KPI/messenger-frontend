import IconChange from '@/ui/icons/IconChange'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-baseline gap-5">
      <div className="flex flex-col items-center">
        This is Image:{' '}
        <Image
          alt="change"
          className="fill-blue-500"
          height={24}
          src="/icons/change.svg"
          width={24}
        />
      </div>
      <div className="flex flex-col items-center">
        This is an IconChange component:{' '}
        <IconChange
          className="text-base-gray-1 hover:text-bright-orange transition-colors"
          size="lg"
        />
        <p>Hover me!</p>
      </div>
      <div>GOLUB</div>
      <div>🚀</div>
    </div>
  )
}
