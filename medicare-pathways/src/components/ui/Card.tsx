import { cn } from './cn'
import type { ReactNode } from 'react'

export function Card({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/60',
        className
      )}
    >
      {children}
    </div>
  )
}

