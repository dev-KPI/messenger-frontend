import { classnames } from '@/utils'
import { FC, InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const FormInput: FC<FormInputProps> = ({
  className,
  placeholder,
  ...props
}) => {
  return (
    <div className="relative">
      <input
        className={classnames(
          'peer pt-5 pb-2.5 px-4 w-full rounded-2xl border border-gray-3 placeholder:opacity-0',
          className
        )}
        placeholder={placeholder}
        {...props}
      />
      <span className="input-placeholder absolute top-1/2 peer-focus:top-[0.375rem] left-4 -translate-y-1/2 peer-focus:translate-y-0 peer-focus:text-[0.6875rem] peer-focus:leading-[0.8125rem] text-base-gray-5 transition-all">
        {placeholder}
      </span>
    </div>
  )
}

export default FormInput
