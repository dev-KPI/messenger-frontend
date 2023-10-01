import Image from 'next/image'
import { ThemeContext } from '@/store/theme-context'
import { useContext } from 'react'

const iconSize = 28

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <button className="w-fit mx-auto" onClick={toggle}>
      {theme === 'light' ? (
        <Image
          src="/icons/moon.svg"
          width={iconSize}
          height={iconSize}
          alt="Dark Theme Icon"
        />
      ) : (
        <Image
          src="/icons/sun.svg"
          width={iconSize}
          height={iconSize}
          alt="Light Theme Icon"
        />
      )}
    </button>
  )
}
