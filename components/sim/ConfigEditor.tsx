'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

interface ConfigEditorProps {
  value: string
  onChange: (value: string) => void
  error?: string | null
}

export function ConfigEditor({ value, onChange, error }: ConfigEditorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Simulation Config (JSON)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full min-h-[300px] rounded-md border border-historic-sepia/30 bg-white p-3 font-mono text-xs text-brand-black focus:outline-none focus:ring-2 focus:ring-compute-blue/30"
          spellCheck={false}
          aria-label="Simulation configuration"
          data-feature="sim.config-editor"
        />
        {error ? (
          <p className="text-sm font-mono text-sihl-red">{error}</p>
        ) : (
          <p className="text-xs font-mono text-historic-sepia">Config-only by default. Dev mode can attach file overrides.</p>
        )}
      </CardContent>
    </Card>
  )
}
