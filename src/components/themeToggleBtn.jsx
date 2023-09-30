import { ThemeContext } from '@/store/theme-context'
import Image from 'next/image'
import { useContext } from 'react'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className="w-fit mx-auto" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Image
          src="/icons/moon.svg"
          width={28}
          height={28}
          alt="Dark Theme Icon"
        />
      ) : (
        <Image
          src="/icons/sun.svg"
          width={28}
          height={28}
          alt="Light Theme Icon"
        />
      )}
    </button>
  )
}
