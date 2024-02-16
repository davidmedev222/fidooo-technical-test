'use client'
import { cn } from '@/utils/function/tailwind.function'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { forwardRef } from 'react'

type SeparatorElementRef = React.ElementRef<typeof SeparatorPrimitive.Root>
type SeparatorPropsWithoutRef = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>

interface SeparatorProps extends SeparatorPropsWithoutRef {}

const Separator = forwardRef<SeparatorElementRef, SeparatorProps>((props, ref) => {
  const { className, orientation = 'horizontal', decorative = true, ...rest } = props

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-slate-200 dark:bg-slate-800',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...rest}
    />
  )
})

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
