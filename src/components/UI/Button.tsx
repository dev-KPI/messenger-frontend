import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
}

const THEMES = {
  dark: 'disabled:bg-none disabled:text-base-gray-8 disabled:bg-base-gray-7',
  light: 'disabled:bg-none disabled:text-base-gray-4 disabled:bg-base-gray-3',
}

const Button: FC<ButtonProps> = ({ children, className, disabled, type }) => {
  return (
    <button
      className={classnames(
        'inline-block py-3.5 px-5 text-center text-base-white rounded-2xl bg-gradient-purple-blue',
        THEMES['light'],
        className
      )}
      disabled={disabled}
      type={type || 'button'}
    >
      {children}
    </button>
  )
}

export default Button
