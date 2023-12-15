'use client'

import { ApiContext, useApiLoader } from '@/utils'
import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

import './globals.css'

interface PageProps {
  children: React.ReactNode
}

const Layout: FC<PageProps> = ({ children } = { children: [] }) => {
  const { api, isApiReady } = useApiLoader()

  return (
    <html lang="en">
      <head></head>
      <body className="bg-black">
        <ApiContext.Provider value={api}>
          {isApiReady() && children}
          <Toaster position="top-right" />
        </ApiContext.Provider>
      </body>
    </html>
  )
}

export default Layout
