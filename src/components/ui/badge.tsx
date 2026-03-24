import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        amber:
          'bg-[#d97706]/15 text-[#f59e0b] border border-[#d97706]/30',
        outline:
          'border border-[#332e28] text-[#9e9187]',
        success:
          'bg-emerald-900/30 text-emerald-400 border border-emerald-700/30',
      },
    },
    defaultVariants: {
      variant: 'amber',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
