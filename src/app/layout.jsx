'use client'

import { ThemeProvider } from 'next-themes'
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-lightAccent dark:bg-darkAccent flex flex-col bg-slate-300">
        <ThemeProvider attribute="class">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
