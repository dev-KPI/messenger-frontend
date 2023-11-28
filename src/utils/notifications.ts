import toast from 'react-hot-toast'

interface NotifyProps {
  duration?: number
  type?: 'error' | 'info' | 'success'
}

export const notify = (
  message: Parameters<typeof toast>[0],
  { duration = 4000, type = 'info' }: NotifyProps = {}
) => {
  const options = { duration }

  if (type === 'info') {
    toast(message, {
      ...options,
    })
  } else if (type === 'error') {
    toast.error(message, options)
  } else {
    toast.success(message, options)
  }
}
