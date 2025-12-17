import { cn } from '@/lib/utils'

type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero'
type HackColor = 'white' | 'black'

interface LogoProps {
  size?: LogoSize
  hackColor?: HackColor
  className?: string
}

const sizeClasses: Record<LogoSize, { sihl: string; hack: string; leading: string }> = {
  sm: {
    sihl: 'text-lg',
    hack: 'text-lg',
    leading: 'leading-[0.85]',
  },
  md: {
    sihl: 'text-2xl',
    hack: 'text-2xl',
    leading: 'leading-[0.85]',
  },
  lg: {
    sihl: 'text-4xl',
    hack: 'text-4xl',
    leading: 'leading-[0.85]',
  },
  xl: {
    sihl: 'text-5xl sm:text-6xl',
    hack: 'text-5xl sm:text-6xl',
    leading: 'leading-[0.85]',
  },
  hero: {
    sihl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    hack: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    leading: 'leading-[0.85]',
  },
}

export function Logo({ size = 'md', hackColor = 'black', className }: LogoProps) {
  const sizes = sizeClasses[size]

  return (
    <span className={cn('inline-flex flex-col', sizes.leading, className)}>
      {/* sihl on first row */}
      <span
        className={cn(
          'font-display font-bold text-sihl-red',
          sizes.sihl
        )}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        sihl
      </span>
      {/* hack on second row, indented to align h with h in sihl */}
      <span
        className={cn(
          'font-bold tracking-tight',
          hackColor === 'white' ? 'text-white' : 'text-brand-black',
          sizes.hack
        )}
        style={{
          fontFamily: 'var(--font-futuristic)',
          marginLeft: '0.5em',
        }}
      >
        hack
      </span>
    </span>
  )
}
