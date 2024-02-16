import { cn } from '@/utils/function/tailwind.function'
import { forwardRef } from 'react'

type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>

export interface InputProps extends InputHTMLAttributes {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
        className
      )}
      ref={ref}
      {...rest}
    />
  )
})

Input.displayName = 'Input'

export { Input }
