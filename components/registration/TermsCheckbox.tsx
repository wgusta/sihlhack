'use client'

import { cn } from '@/lib/utils'

interface TermsCheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string
}

export function TermsCheckbox({ checked, onChange, error }: TermsCheckboxProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div
            className={cn(
              'w-5 h-5 border-2 rounded transition-colors',
              checked
                ? 'bg-sihl-red border-sihl-red'
                : 'border-historic-sepia group-hover:border-brand-black',
              error && !checked && 'border-sihl-red'
            )}
          >
            {checked && (
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-sm font-mono text-brand-black">
          Ich akzeptiere die{' '}
          <a href="/agb" target="_blank" className="text-sihl-red hover:underline">
            Teilnahmebedingungen
          </a>{' '}
          und habe die{' '}
          <a href="/datenschutz" target="_blank" className="text-sihl-red hover:underline">
            Datenschutzerklärung
          </a>{' '}
          gelesen.
        </span>
      </label>
      {error && (
        <p className="text-sm text-sihl-red font-mono pl-8">{error}</p>
      )}
    </div>
  )
}
