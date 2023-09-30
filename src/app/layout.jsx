'use client'

import ThemeProvider from '@/store/theme-context'
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-lightAccent dark:bg-darkAccent flex flex-col bg-slate-300">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
