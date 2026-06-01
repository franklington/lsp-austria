import { twMerge } from 'tailwind-merge'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'accent' | 'muted' | 'success'
  className?: string
}

const variants = {
  accent: 'bg-accent-subtle text-accent-light border-accent-subtle',
  muted: 'bg-elevated text-foreground-muted border-border',
  success: 'bg-success/10 text-success border-success/20',
}

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
