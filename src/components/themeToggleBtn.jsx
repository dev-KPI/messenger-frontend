import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleThemeHandler = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className="w-fit mx-auto" onClick={toggleThemeHandler}>
      {resolvedTheme === 'light' ? (
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
