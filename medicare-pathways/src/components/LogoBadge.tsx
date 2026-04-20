import logoImg from '../assets/logo.jpeg'
import { cn } from './ui/cn'

export function LogoBadge({
  className,
  size = 'md'
}: {
  className?: string
  size?: 'sm' | 'md'
}) {
  const sizes =
    size === 'sm'
      ? 'h-9 w-9 rounded-xl'
      : 'h-10 w-10 rounded-2xl'

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center overflow-hidden bg-white ring-1 ring-slate-200/80 shadow-soft',
        sizes,
        className
      )}
      aria-hidden="true"
    >
      <img
        src={logoImg}
        alt="Medicare Pathways Logo"
        className="h-full w-full object-contain"
        loading="eager"
      />
    </span>
  )
}

