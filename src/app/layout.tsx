import type { Metadata } from 'next'

import { text, title } from '@/app/fonts'
import '@/app/globals.css'
import Providers from '@/store/Providers'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${title.variable} ${text.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
