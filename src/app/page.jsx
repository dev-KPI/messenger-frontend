'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Message from '@/components/message'

const now = Date.now()
const MOCK_MESSAGES = [
  { sentAt: now - 1000 * 60 * 30, content: `...` },
  { sentAt: now - 1000 * 60 * 10, content: `Hello, i\'m a message! 😎` },
  {
    sentAt: now,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro',
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleThemeHandler = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="flex flex-col gap-3 p-3">
      {MOCK_MESSAGES.map(({ sentAt, content }, i) => (
        <Message key={i} sentAt={sentAt}>
          {content}
        </Message>
      ))}
      <button
        className="w-fit mx-auto rounded text-light p-2 bg-primary border border-dark dark:border-lightAccent"
        onClick={toggleThemeHandler}
      >
        Toggle Theme
      </button>
    </main>
  )
}
