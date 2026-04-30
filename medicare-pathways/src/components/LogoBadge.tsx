import logoImg from '../assets/5.png'
import { cn } from './ui/cn'

export function LogoBadge({
  className
}: {
  className?: string
  size?: 'sm' | 'md'
}) {
  return (
    <span
      className={cn(
        'relative flex items-center justify-start w-full h-12',
        className
      )}
      aria-hidden="true"
    >
      <img
        src={logoImg}
        alt="Medicare Pathways Logo"
        className="absolute left-[-10px] w-[150px] max-w-none object-contain h-auto scale-[1.15]"
        loading="eager"
      />
    </span>
  )
}
