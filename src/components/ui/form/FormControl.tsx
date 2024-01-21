import { classnames } from '@/utils'
import { FC, ReactNode } from 'react'

type FormControlProps = {
  children: ReactNode
  className?: string
  horizontal?: boolean
}

const FormControl: FC<FormControlProps> = ({
  children,
  className,
  horizontal,
}) => {
  return (
    <div
      className={classnames(
        'flex gap-3',
        className,
        horizontal ? 'flex-row' : 'flex-col'
      )}
    >
      {children}
    </div>
  )
}

export default FormControl
