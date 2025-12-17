'use client'

import { cn } from '@/lib/utils'
import { DATA_TYPE_LABELS, type DataType } from '@/types/proposal'

interface FilterBarProps {
  selectedDataType: string | null
  onDataTypeChange: (dataType: string | null) => void
  selectedStatus: string | null
  onStatusChange: (status: string | null) => void
}

const statusOptions = [
  { value: null, label: 'Alle' },
  { value: 'submitted', label: 'Eingereicht' },
  { value: 'accepted', label: 'Akzeptiert' },
  { value: 'in_progress', label: 'In Bearbeitung' },
  { value: 'completed', label: 'Abgeschlossen' },
]

const dataTypeOptions = [
  { value: null, label: 'Alle Datentypen' },
  ...Object.entries(DATA_TYPE_LABELS).map(([value, label]) => ({ value, label })),
]

export function FilterBar({
  selectedDataType,
  onDataTypeChange,
  selectedStatus,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm">
      {/* Status filter */}
      <div className="flex-1">
        <label className="block text-xs font-mono text-historic-sepia mb-2">
          Status
        </label>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <button
              key={option.value ?? 'all'}
              onClick={() => onStatusChange(option.value)}
              className={cn(
                'px-3 py-1.5 text-sm font-mono rounded-full transition-colors',
                selectedStatus === option.value
                  ? 'bg-sihl-red text-white'
                  : 'bg-historic-cream text-historic-sepia hover:bg-historic-sepia/20'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Data type filter */}
      <div className="flex-1">
        <label className="block text-xs font-mono text-historic-sepia mb-2">
          Datentyp
        </label>
        <select
          value={selectedDataType ?? ''}
          onChange={(e) => onDataTypeChange(e.target.value || null)}
          className="w-full px-3 py-2 bg-historic-cream border-0 rounded-lg font-mono text-sm text-brand-black focus:ring-2 focus:ring-sihl-red"
        >
          {dataTypeOptions.map((option) => (
            <option key={option.value ?? 'all'} value={option.value ?? ''}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
