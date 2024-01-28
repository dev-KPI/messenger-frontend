import { cn } from '@/lib/utils'
import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, type, ...props }, ref) => {
    return (
      <>
        {placeholder ? (
          <div className="relative">
            <input
              className={cn(
                'relative z-[5] peer pt-5 px-4 pb-2.5 w-full outline-none rounded-2xl border border-base-gray-3 focus:border-base-gray-5 dark:border-base-gray-7 bg-transparent placeholder:opacity-0 transition-colors',
                className
              )}
              placeholder={placeholder}
              ref={ref}
              type={type}
              {...props}
            />
            <span className="absolute z-0 top-1/2 peer-focus:top-[0.375rem] left-4 -translate-y-1/2 peer-focus:translate-y-0 peer-focus:text-[0.6875rem] peer-focus:leading-[0.8125rem] text-base-gray-5 transition-all peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:top-[0.375rem] peer-[:not(:placeholder-shown)]:text-[0.6875rem] peer-[:not(:placeholder-shown)]:leading-[0.8125rem];">
              {placeholder}
            </span>
          </div>
        ) : (
          <input
            className={cn(
              'relative z-[5] peer pt-5 px-4 pb-2.5 w-full outline-none rounded-2xl border border-base-gray-3 focus:border-base-gray-5 dark:border-base-gray-7 bg-transparent placeholder:opacity-0 transition-colors',
              className
            )}
            ref={ref}
            type={type}
            {...props}
          />
        )}
      </>
    )
  }
)
Input.displayName = 'Input'

export { Input }
