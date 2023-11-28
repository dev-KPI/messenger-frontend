import { useCallback, useEffect, useRef, useState } from 'react'

import { notify } from '..'

export const useApi = <Args extends any, T extends Promise<any>>(
  fetcher: (args: Args) => '' | T | false | null | undefined,
  options: {
    autofetch?: boolean
    onBeforeFetch?: () => Promise<void> | void
    onError?: () => void
    onResponse?: (res: Awaited<T>) => Promise<void> | void
    onSuccess?: () => void
  } = {}
) => {
  const [isLoading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const optionsRef = useRef(options)
  optionsRef.current = options

  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher

  const refetch = useCallback(async (args: Args) => {
    setLoading(true)
    await optionsRef.current.onBeforeFetch?.()
    const res = await fetcherRef.current(args)
    if (!res) {
      setLoading(false)
      return
    }
    await optionsRef.current.onResponse?.(res)
    if (res.error) {
      if (optionsRef.current.onError) {
        await optionsRef.current.onError?.()
      }
    } else {
      setResponse(res)
      try {
        await optionsRef.current.onSuccess?.()
      } catch (e) {
        notify('Network error', { type: 'error' })
        console.error(e)
      }
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (optionsRef.current.autofetch) {
      refetch({} as any)
    }
  }, [refetch])

  return {
    fetch: refetch,
    isLoading,
    response,
  }
}
