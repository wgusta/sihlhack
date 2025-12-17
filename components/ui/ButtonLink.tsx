import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonLinkProps {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
}: ButtonLinkProps) {
  const baseStyles = 'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus-ring'

  const variants = {
    primary: 'bg-deep-pink text-white hover:bg-deep-pink/90 active:scale-[0.98] shadow-historic',
    secondary: 'bg-teal text-white hover:bg-teal/90 active:scale-[0.98] border-2 border-teal',
    ghost: 'bg-transparent text-brand-black hover:bg-historic-cream border-2 border-historic-sepia',
    danger: 'bg-sun-red text-white hover:bg-sun-red/90 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-8 py-3',
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  )
}
