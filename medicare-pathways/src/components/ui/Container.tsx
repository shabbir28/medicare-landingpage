import { cn } from './cn'
import type { ReactNode } from 'react'

export function Container({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16', className)}>
      {children}
    </div>
  )
}

