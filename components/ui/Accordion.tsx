'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Icon } from '@/components/ui/Icon'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface AccordionProps {
  id: string
  title: string
  icon?: string
  color?: string
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
    'thermal-orange': {
      bg: 'bg-thermal-orange/10',
      border: 'border-thermal-orange',
      text: 'text-thermal-orange',
      hover: 'hover:bg-thermal-orange/20',
    },
    'compute-blue': {
      bg: 'bg-compute-blue/10',
      border: 'border-compute-blue',
      text: 'text-compute-blue',
      hover: 'hover:bg-compute-blue/20',
    },
    'grid-green': {
      bg: 'bg-grid-green/10',
      border: 'border-grid-green',
      text: 'text-grid-green',
      hover: 'hover:bg-grid-green/20',
    },
    'sihl-red': {
      bg: 'bg-sihl-red/10',
      border: 'border-sihl-red',
      text: 'text-sihl-red',
      hover: 'hover:bg-sihl-red/20',
    },
    'industrial-gold': {
      bg: 'bg-industrial-gold/10',
      border: 'border-industrial-gold',
      text: 'text-industrial-gold',
      hover: 'hover:bg-industrial-gold/20',
    },
    'historic-sepia': {
      bg: 'bg-historic-sepia/10',
      border: 'border-historic-sepia',
      text: 'text-historic-sepia',
      hover: 'hover:bg-historic-sepia/20',
    },
  }
  return colorMap[color || 'thermal-orange'] || colorMap['thermal-orange']
}

export function Accordion({ 
  id, 
  title, 
  icon, 
  color = 'thermal-orange', 
  children, 
  defaultOpen = false,
  className 
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const colors = getColorClasses(color)

  return (
    <div
      className={cn(
        'border-2 rounded-xl overflow-hidden transition-all',
        colors.border,
        isOpen ? colors.bg : 'bg-white',
        className
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between p-5 text-left transition-colors',
          colors.hover
        )}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <div className="flex items-center gap-3">
          {icon && <Icon emoji={icon} size="lg" color={`text-${color}`} />}
          <span className="font-display font-semibold text-brand-black">
            {title}
          </span>
        </div>
        <span
          className={cn(
            'flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronDownIcon className="w-4 h-4 text-gray-600" aria-hidden="true" />
        </span>
      </button>

      <div
        id={`accordion-content-${id}`}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        )}
        style={{
          transitionProperty: 'max-height, opacity',
        }}
      >
        <div className="px-5 pb-5">
          {children}
        </div>
      </div>
    </div>
  )
}
