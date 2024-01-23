'use client'

import { FC, ReactNode } from 'react'

import ThemeProvider from './theme-provider'

type ProvidersProps = {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
