'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-sihl-red text-white hover:bg-sihl-red/90 active:scale-[0.98] shadow-historic',
      secondary: 'bg-industrial-gold text-white hover:bg-industrial-gold/90 active:scale-[0.98] border-2 border-industrial-gold',
      ghost: 'bg-transparent text-brand-black hover:bg-historic-cream border-2 border-historic-sepia',
      danger: 'bg-sihl-red text-white hover:bg-sihl-red/90 active:scale-[0.98]',
    }

    const sizes = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-5 py-2.5',
      lg: 'text-lg px-8 py-3',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Laden...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
