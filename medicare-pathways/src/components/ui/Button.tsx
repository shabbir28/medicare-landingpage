import { cn } from './cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-900 text-white shadow-soft hover:bg-brand-950 hover:shadow-lift active:translate-y-px',
  secondary:
    'bg-white text-brand-900 ring-1 ring-slate-200 shadow-soft hover:shadow-lift hover:ring-slate-300 active:translate-y-px',
  ghost: 'bg-transparent text-slate-700 hover:bg-surface-100'
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}

