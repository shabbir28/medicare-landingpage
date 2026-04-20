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
      ? 'h-10'
      : 'h-12'

  return (
    <span
      className={cn(
        'inline-flex flex-shrink-0 items-center justify-center',
        sizes,
        className
      )}
      aria-hidden="true"
    >
      <img
        src={logoImg}
        alt="Medicare Pathways Logo"
        className="h-full w-auto object-contain scale-[1.35] origin-center"
        loading="eager"
      />
    </span>
  )
}
