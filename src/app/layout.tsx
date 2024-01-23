'use client'

import { text, title } from '@/app/fonts'
import '@/app/globals.css'
import { Toaster } from '@/components/ui/toaster'
import Providers from '@/store/providers'
import { FC, ReactNode } from 'react'

interface PageProps {
  children: ReactNode
}

const Layout: FC<PageProps> = ({ children } = { children: [] }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${title.variable} ${text.variable}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
