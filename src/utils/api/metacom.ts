import { URL_PRODUCT_API } from '@/constants'
import { Metacom } from 'metacom'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

const units = ['example']
const metacom = Metacom.create(URL_PRODUCT_API)

export const useApiLoader = () => {
  const [api, setApi] = useState<any>({})
  const isApiReady = useCallback(
    () => Object.keys(api).length === units.length,
    [api]
  )
  const loadApi = useCallback(async () => {
    await metacom.load(...units)
    setApi(metacom.api)
  }, [])

  useEffect(() => {
    if (!isApiReady()) loadApi()
  }, [isApiReady, loadApi])

  return { api, isApiReady }
}

export const ApiContext = createContext<any>(null)
export const useApiContext = () => useContext(ApiContext)
