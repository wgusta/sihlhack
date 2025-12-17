'use client'

import { cn } from '@/lib/utils'

const DATA_TYPES = [
  { value: null, label: 'Alle' },
  { value: 'photograph', label: 'Fotografien' },
  { value: 'ledger', label: 'Geschäftsbücher' },
  { value: 'blueprint', label: 'Baupläne' },
  { value: 'document', label: 'Dokumente' },
  { value: 'other', label: 'Andere' },
]

interface DataFilterBarProps {
  selectedType: string | null
  onTypeChange: (type: string | null) => void
}

export function DataFilterBar({ selectedType, onTypeChange }: DataFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {DATA_TYPES.map((type) => (
        <button
          key={type.value ?? 'all'}
          onClick={() => onTypeChange(type.value)}
          className={cn(
            'px-4 py-2 text-sm font-mono rounded-full transition-colors',
            selectedType === type.value
              ? 'bg-sihl-red text-white'
              : 'bg-white text-historic-sepia hover:bg-historic-cream'
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  )
}
