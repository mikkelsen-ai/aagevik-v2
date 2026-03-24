import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex w-full rounded-lg border border-[#cce0cc] bg-white px-4 py-2.5 text-sm text-[#1a2b1a] placeholder:text-[#8fa98f]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b2e] focus-visible:border-[#2d6b2e]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'resize-none transition-colors min-h-[80px]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
