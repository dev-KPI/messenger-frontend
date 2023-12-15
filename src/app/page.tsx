'use client'

import { useApi, useApiContext } from '@/utils'
import { notify } from '@/utils/notifications'

const Home = () => {
  const api = useApiContext()
  const condition = true

  const { response } = useApi(
    () => condition && api.example.add({ a: 1, b: 2 }),
    {
      autofetch: true,
      onSuccess: () => {
        notify('Two numbers are added', { type: 'success' })
      },
    }
  )

  return (
    <div className="flex items-center gap-20 text-white">
      {response ? `Yeah, it works: 1 + 2 = ${response}` : 'Loading...'}
    </div>
  )
}

export default Home
