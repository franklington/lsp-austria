import { twMerge } from 'tailwind-merge'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  /** dark = base-dark bg, surface = surface bg, default = base bg */
  bg?: 'default' | 'dark' | 'surface'
}

export function Section({ children, className, id, bg = 'default' }: SectionProps) {
  const bgClasses = {
    default: 'bg-base',
    dark: 'bg-base-dark',
    surface: 'bg-surface',
  }

  return (
    <section
      id={id}
      className={twMerge('section-gap', bgClasses[bg], className)}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={twMerge(
        'mb-12 lg:mb-16',
        centered && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-foreground-muted text-lg max-w-2xl text-balance leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
