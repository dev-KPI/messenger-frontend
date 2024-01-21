'use client'

import { classnames } from '@/utils'
import { FC, FormEvent, ReactNode } from 'react'

type FormProps = {
  children: ReactNode
  className?: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form: FC<FormProps> = ({ children, className, onSubmit }) => {
  const onSubmitInternal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form className={classnames('', className)} onSubmit={onSubmitInternal}>
      {children}
    </form>
  )
}

export default Form
