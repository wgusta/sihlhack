'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { SimSeries } from '@/types/sim'

interface LineChartProps {
  series: SimSeries[]
  title?: string
}

const COLORS = ['#2563EB', '#10B981', '#DC2626', '#F59E0B', '#7C3AED']

export function LineChart({ series, title = 'Time Series' }: LineChartProps) {
  const width = 680
  const height = 240
  const padding = 24

  const allPoints = series.flatMap((entry) => entry.points)
  const maxT = Math.max(...allPoints.map((point) => point.t), 1)
  const minY = Math.min(...allPoints.map((point) => point.value), 0)
  const maxY = Math.max(...allPoints.map((point) => point.value), 1)
  const spanY = Math.max(maxY - minY, 1)

  const toPath = (points: SimSeries['points']) => {
    return points
      .map((point, idx) => {
        const x = padding + (point.t / maxT) * (width - 2 * padding)
        const y = height - padding - ((point.value - minY) / spanY) * (height - 2 * padding)
        return `${idx === 0 ? 'M' : 'L'}${x},${y}`
      })
      .join(' ')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent data-feature="sim.line-chart">
        {series.length === 0 ? (
          <p className="text-sm font-mono text-historic-sepia">No time-series data.</p>
        ) : (
          <>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full rounded-md border border-historic-sepia/20 bg-white">
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#ddd" strokeWidth="1" />
              <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#ddd" strokeWidth="1" />
              {series.map((entry, idx) => (
                <path key={entry.key} d={toPath(entry.points)} fill="none" stroke={COLORS[idx % COLORS.length]} strokeWidth="2" />
              ))}
            </svg>
            <div className="mt-3 flex flex-wrap gap-3">
              {series.map((entry, idx) => (
                <span key={entry.key} className="text-xs font-mono text-brand-black">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }} /> {entry.label}
                </span>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
