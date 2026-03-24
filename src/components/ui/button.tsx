import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EFE6] disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default:
          'bg-[#C97C2A] text-white hover:bg-[#AE6820] shadow-[0_2px_12px_rgba(201,124,42,0.4)] hover:shadow-[0_4px_20px_rgba(201,124,42,0.6)]',
        green:
          'bg-[#C97C2A] text-white hover:bg-[#AE6820] shadow-[0_2px_12px_rgba(201,124,42,0.4)] hover:shadow-[0_4px_20px_rgba(201,124,42,0.6)]',
        outline:
          'border border-[#C97C2A] text-[#C97C2A] hover:bg-[#C97C2A]/10 active:bg-[#C97C2A]/20',
        'outline-light':
          'border border-[#F2EDE4]/40 text-[#F2EDE4] hover:bg-[#F2EDE4]/10 active:bg-[#F2EDE4]/20',
        ghost:
          'text-[#211E18] hover:bg-[#DDD0BE]/50 active:bg-[#DDD0BE]',
        secondary:
          'bg-[#EBE3D5] text-[#211E18] hover:bg-[#DDD0BE] active:bg-[#CFC3AF]',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        sm:      'h-8 px-4 py-2 text-xs',
        lg:      'h-12 px-7 py-3 text-base',
        xl:      'h-14 px-8 py-4 text-lg',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
