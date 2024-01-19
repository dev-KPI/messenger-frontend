import FormLabel from '@/ui/form/FormLabel'
import IconCheck from '@/ui/icons/IconCheck'
import { classnames } from '@/utils'
import { FC, InputHTMLAttributes, ReactNode } from 'react'

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  className?: string
}

const FormCheckbox: FC<FormCheckboxProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  return (
    <>
      <input
        className={classnames('peer sr-only', className)}
        id={id}
        type="checkbox"
        {...props}
      />
      <FormLabel
        className="label-checkbox cursor-pointer flex gap-3"
        htmlFor={id}
      >
        <span className="flex-shrink-0 relative w-5 h-5 rounded-md border border-base-gray-3 transition-colors">
          <IconCheck
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity"
            size="sm"
          />
        </span>
        {children}
      </FormLabel>
    </>
  )
}

export default FormCheckbox
