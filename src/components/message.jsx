import { timeFormatter } from '@/utils/getFormattedDate'
import Image from 'next/image'
import Link from 'next/link'

export default function Message({ sentAt, children }) {
  const { format: formatTime } = timeFormatter()

  return (
    <div className="flex items-end gap-2">
      <Link className="rounded-full overflow-hidden" href="/">
        <Image
          className="object-center object-cover"
          src="/icons/avatar.svg"
          width={38}
          height={38}
          alt="Picture of the author"
        />
      </Link>
      <div className="bg-primary dark:bg-dark text-light flex justify-between gap-2 rounded-lg rounded-bl-none w-fit max-w-md py-2 px-3 bg-orange-100">
        <p className="break-words">{children}</p>
        <span className="text-xs self-end">{formatTime(sentAt)}</span>
      </div>
    </div>
  )
}
