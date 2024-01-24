'use client'

import { useToast } from '@/utils/api/hooks/use-toast'
import { useCallback, useEffect, useRef, useState } from 'react'

export const useApi = <T extends Promise<any>>(
  fetcher: () => '' | T | false | null | undefined,
  options: {
    autofetch?: boolean
    onBeforeFetch?: () => Promise<void> | void
    onError?: () => void
    onResponse?: (res: Awaited<T>) => Promise<void> | void
    onSuccess?: () => void
  } = {}
) => {
  const { toast } = useToast()
  const [isLoading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const optionsRef = useRef(options)
  optionsRef.current = options

  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher

  const refetch = useCallback(async () => {
    setLoading(true)
    await optionsRef.current.onBeforeFetch?.()
    const res = await fetcherRef.current()
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
        toast({
          description: 'Request failed.',
          title: 'Network Error',
        })
        console.error(e)
      }
    }
    setLoading(false)
  }, [toast])

  useEffect(() => {
    if (optionsRef.current.autofetch) {
      refetch()
    }
  }, [refetch])

  return {
    fetch: refetch,
    isLoading,
    response,
  }
}
