'use client'

import Content from '@/components/ui/content'
import IconGolub from '@/components/ui/icons/IconGolub'
import { ApiContext, useApiLoader } from '@/utils'
import { FC, ReactNode } from 'react'

import ThemeProvider from './theme-provider'

type ProvidersProps = {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const { api, isApiReady } = useApiLoader()
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      {isApiReady && api ? (
        <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
      ) : (
        // TODO: handle initial metacom loading state
        <Content className="flex items-center justify-center w-screen h-screen gap-20 text-white">
          <IconGolub />
        </Content>
      )}
    </ThemeProvider>
  )
}

export default Providers
