'use client'

import { Button } from '@/components/ui/button'
import { useApi, useApiContext } from '@/utils'
import { useToast } from '@/utils/api/hooks/use-toast'

const Home = () => {
  const api = useApiContext()
  const condition = true
  const { toast } = useToast()

  const { fetch, response: calculated } = useApi(
    () => condition && api.example.add({ a: 1, b: 2 }),
    {
      onSuccess: () =>
        toast({
          title: '🚀 Two numbers added',
        }),
    }
  )
  const { response: data } = useApi(() => condition && api.example.data(), {
    autofetch: true,
  })

  return (
    <div className="flex items-center justify-center w-screen h-screen gap-20 text-black dark:text-white">
      <div>{data}</div>
      <Button onClick={fetch}>Calculate 1 + 2</Button>
      {calculated}
    </div>
  )
}

export default Home
