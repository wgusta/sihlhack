import { cn } from '@/lib/utils'

type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero'
type HackColor = 'white' | 'black'

interface LogoProps {
  size?: LogoSize
  hackColor?: HackColor
  className?: string
}

const sizeClasses: Record<LogoSize, { container: string; sihl: string; hack: string }> = {
  sm: {
    container: 'gap-0.5',
    sihl: 'text-lg',
    hack: 'text-lg',
  },
  md: {
    container: 'gap-0.5',
    sihl: 'text-2xl',
    hack: 'text-2xl',
  },
  lg: {
    container: 'gap-1',
    sihl: 'text-4xl',
    hack: 'text-4xl',
  },
  xl: {
    container: 'gap-1',
    sihl: 'text-5xl sm:text-6xl',
    hack: 'text-5xl sm:text-6xl',
  },
  hero: {
    container: 'gap-1',
    sihl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    hack: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
  },
}

export function Logo({ size = 'md', hackColor = 'black', className }: LogoProps) {
  const sizes = sizeClasses[size]

  return (
    <span className={cn('inline-flex items-baseline', sizes.container, className)}>
      <span
        className={cn(
          'font-display font-bold text-sihl-red',
          sizes.sihl
        )}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        sihl
      </span>
      <span
        className={cn(
          'font-bold tracking-tight',
          hackColor === 'white' ? 'text-white' : 'text-brand-black',
          sizes.hack
        )}
        style={{ fontFamily: 'var(--font-futuristic)' }}
      >
        hack
      </span>
    </span>
  )
}
