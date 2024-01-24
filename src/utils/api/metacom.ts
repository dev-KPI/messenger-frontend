'use client'

import { URL_PRODUCT_API } from '@/constants'
import { useToast } from '@/hooks/use-toast'
import { Metacom } from 'metacom'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const units = ['example']
const metacom = Metacom.create(URL_PRODUCT_API)

export const useApiLoader = () => {
  const [api, setApi] = useState<any>({})
  const { toast } = useToast()
  const isApiReady = useMemo(
    () => Object.keys(api).length === units.length,
    [api]
  )
  const loadApi = useCallback(async () => {
    try {
      await metacom.load(...units)
    } catch (e) {
      toast({
        title: 'Metacom loading error',
        variant: 'destructive',
      })
    }
    setApi(metacom.api)
  }, [toast])

  useEffect(() => {
    if (!isApiReady) loadApi()
  }, [isApiReady, loadApi])

  return { api, isApiReady }
}

export const ApiContext = createContext<any>(null)
export const useApiContext = () => useContext(ApiContext)
