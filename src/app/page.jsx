'use client'

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
  return (
    <main className="flex flex-col gap-3 p-3">
      {MOCK_MESSAGES.map(({ sentAt, content }, i) => (
        <Message key={i} sentAt={sentAt}>
          {content}
        </Message>
      ))}
    </main>
  )
}
