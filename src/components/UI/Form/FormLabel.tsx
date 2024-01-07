import { FC, LabelHTMLAttributes } from 'react'

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel: FC<FormLabelProps> = ({ children, ...props }) => {
  return (
    <label className="text-base-gray-6" {...props}>
      {children}
    </label>
  )
}

export default FormLabel
