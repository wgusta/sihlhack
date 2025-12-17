import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-historic-cream text-historic-sepia border-historic-sepia',
    success: 'bg-fund-green/10 text-fund-green border-fund-green',
    warning: 'bg-refund-amber/10 text-refund-amber border-refund-amber',
    danger: 'bg-sun-red/10 text-sun-red border-sun-red',
    info: 'bg-insight-cyan/10 text-teal border-teal',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
