'use client'

import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-300">
        <main>{children}</main>
      </body>
    </html>
  )
}
