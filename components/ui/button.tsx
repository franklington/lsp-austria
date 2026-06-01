import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: false
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
  asChild: true
  href: string
}

type Props = ButtonProps | ButtonLinkProps

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-[var(--radius-md)] transition-all duration-150 focus-ring cursor-pointer select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent hover:bg-accent-light text-accent-fg shadow-sm hover:shadow-md active:scale-[0.98]',
  ghost:
    'text-foreground-muted hover:text-foreground hover:bg-elevated active:scale-[0.98]',
  outline:
    'border border-border-strong text-foreground-muted hover:text-foreground hover:border-border-bright hover:bg-elevated active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-6 py-3',
}

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, ...rest } = props
  const classes = twMerge(base, variants[variant], sizes[size], className)

  if ('asChild' in props && props.asChild) {
    const { asChild: _a, href, ...linkRest } = rest as ButtonLinkProps & { asChild: true }
    return (
      <Link href={href} className={classes} {...(linkRest as object)}>
        {linkRest.children}
      </Link>
    )
  }

  return <button className={classes} {...(rest as ButtonProps)} />
}
