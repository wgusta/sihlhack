'use client'

import { useEffect, useMemo, useState } from 'react'
import type { SimChallengeId } from '@/types/sim'
import { getFeatureById } from '@/lib/sim/featureRegistry'

interface ResolvedAnchor {
  path: string
  line: number
  challengeId?: SimChallengeId
}

interface DevInspectorOverlayProps {
  enabled: boolean
  challengeId: SimChallengeId
  onOpenCode: (path: string, line: number) => void
}

export function DevInspectorOverlay({ enabled, challengeId, onOpenCode }: DevInspectorOverlayProps) {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null)
  const [resolvedAnchors, setResolvedAnchors] = useState<ResolvedAnchor[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const selectedFeature = useMemo(() => {
    if (!selectedFeatureId) {
      return null
    }
    return getFeatureById(selectedFeatureId) || null
  }, [selectedFeatureId])

  useEffect(() => {
    if (!enabled) {
      setSelectedFeatureId(null)
      setResolvedAnchors([])
      return
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) {
        return
      }
      const featureNode = target.closest<HTMLElement>('[data-feature]')
      if (!featureNode) {
        return
      }
      const featureId = featureNode.dataset.feature
      if (featureId) {
        setSelectedFeatureId(featureId)
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [enabled])

  useEffect(() => {
    if (!enabled || !selectedFeature) {
      setResolvedAnchors([])
      return
    }

    const anchors = selectedFeature.codeAnchors.filter((anchor) => !anchor.challengeId || anchor.challengeId === challengeId)
    if (anchors.length === 0) {
      setResolvedAnchors([])
      return
    }

    let cancelled = false
    const resolveAnchors = async () => {
      setIsLoading(true)
      const resolved = await Promise.all(
        anchors.map(async (anchor) => {
          try {
            const params = new URLSearchParams({
              challengeId,
              path: anchor.path,
              anchor: anchor.matchString,
            })
            const response = await fetch(`/api/sim/dev/file?${params.toString()}`, { credentials: 'include' })
            if (!response.ok) {
              return null
            }
            const payload = await response.json()
            return {
              path: anchor.path,
              line: payload.line || 1,
              challengeId: anchor.challengeId,
            } satisfies ResolvedAnchor
          } catch {
            return null
          }
        })
      )
      if (!cancelled) {
        const cleaned: ResolvedAnchor[] = []
        for (const item of resolved) {
          if (!item) {
            continue
          }
          cleaned.push({
            path: item.path,
            line: Number(item.line) || 1,
            challengeId: item.challengeId,
          })
        }
        setResolvedAnchors(cleaned)
        setIsLoading(false)
      }
    }

    void resolveAnchors()

    return () => {
      cancelled = true
    }
  }, [challengeId, enabled, selectedFeature])

  if (!enabled) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[340px] rounded-lg border border-compute-blue/40 bg-white p-3 shadow-2xl" data-feature="sim.dev-inspector-overlay">
      <p className="font-mono text-xs text-compute-blue">Dev Inspector</p>
      {!selectedFeature ? (
        <p className="mt-2 text-xs font-mono text-historic-sepia">
          {selectedFeatureId ? `No mapping found for feature: ${selectedFeatureId}` : 'Click any tagged UI element to inspect feature mapping.'}
        </p>
      ) : (
        <div className="mt-2 space-y-2">
          <p className="text-sm font-semibold text-brand-black">{selectedFeature.label}</p>
          <p className="text-xs text-historic-sepia">{selectedFeature.description}</p>
          {isLoading ? <p className="text-xs font-mono text-historic-sepia">Resolving code anchors...</p> : null}
          <div className="space-y-1">
            {resolvedAnchors.map((anchor) => (
              <button
                key={`${anchor.path}:${anchor.line}`}
                className="block w-full rounded border border-historic-sepia/20 px-2 py-1 text-left font-mono text-xs text-brand-black hover:bg-historic-cream"
                onClick={() => onOpenCode(anchor.path, anchor.line)}
              >
                {anchor.path}:{anchor.line}
              </button>
            ))}
            {resolvedAnchors.length === 0 && !isLoading ? (
              <p className="text-xs font-mono text-historic-sepia">No anchors available for this challenge.</p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
