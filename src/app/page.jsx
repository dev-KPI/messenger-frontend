'use client'

import { useEffect, useState } from 'react'
import Message from '@/components/Message'
import ThemeToggle from '@/components/ThemeToggle'
import InputMessage from '@/components/inputMessage'

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
  const [messages, setMessages] = useState(MOCK_MESSAGES)

  const addMessage = (newMessage) => {
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    console.log(updatedMessages)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col gap-3 p-3">
      {messages.map(({ sentAt, content }, i) => (
        <Message key={i} sentAt={sentAt}>
          {content}
        </Message>
      ))}
      <InputMessage addMessage={addMessage}></InputMessage>

      <ThemeToggle />
    </div>
  )
}
