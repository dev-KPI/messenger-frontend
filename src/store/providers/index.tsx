'use client'

import Content from '@/components/ui/content'
import { Icons } from '@/components/ui/icons'
import ThemeProvider from '@/store/providers/theme-provider'
import { ApiContext, useApiLoader } from '@/utils'
import { FC, ReactNode } from 'react'

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
          <Icons.golub />
        </Content>
      )}
    </ThemeProvider>
  )
}

export default Providers
