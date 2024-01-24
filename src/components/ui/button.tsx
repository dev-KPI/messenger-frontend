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
      icon: 'py-1 px-2 rounded-lg text-xs',
      theme_icon: 'h-10 w-10',
    },
    variant: {
      default:
        'relative z-0 text-base-white bg-gradient-purple-blue after:absolute after:-z-[1] after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-purple-blue-dark after:opacity-0 after:transition-opacity hover:after:opacity-100',
      disabled:
        'text-base-gray-4 bg-base-gray-3 dark:text-base-gray-8 dark:bg-base-gray-7',
      icon: 'text-base-gray-8 bg-base-gray-2',
      outline:
        'border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
