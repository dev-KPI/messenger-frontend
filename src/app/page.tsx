import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center">
      <Image
        alt="change"
        className="fill-blue-500"
        height={24}
        src="/icons/change.svg"
        width={24}
      />
      <div>GOLUB</div>
      <div>🚀</div>
    </div>
  )
}
