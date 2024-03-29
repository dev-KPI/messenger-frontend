import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva('overflow-hidden inline-block text-center', {
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default: 'py-3.5 px-5 rounded-2xl',
      icon: 'p-[0.1875rem] rounded-lg text-xs',
    },
    variant: {
      default:
        'relative z-0 text-base-white bg-gradient-purple-blue after:absolute after:-z-[1] after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-purple-blue-dark after:opacity-0 after:transition-opacity hover:after:opacity-100',
      disabled:
        'text-base-gray-4 bg-base-gray-3 dark:text-base-gray-8 dark:bg-base-gray-7',
      icon: 'text-base-gray-8 bg-base-gray-2',
      outline:
        'border border-base-gray-3 text-base-gray-9 dark:border-base-gray-4 dark:text-base-gray-4 hover:bg-base-gray-1 dark:hover:bg-base-gray-9',
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
