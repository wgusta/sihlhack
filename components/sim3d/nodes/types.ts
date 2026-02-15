'use client'

import type { SimSceneNodeState } from '@/types/sim'

export interface SceneNodeProps {
  node: SimSceneNodeState
  position: [number, number, number]
  selected: boolean
  onHover: (nodeId: SimSceneNodeState['id'] | null) => void
  onSelect: (nodeId: SimSceneNodeState['id']) => void
}

export function nodeColor(status: SimSceneNodeState['status']): string {
  if (status === 'critical') {
    return '#ef4444'
  }
  if (status === 'warning') {
    return '#f59e0b'
  }
  if (status === 'active') {
    return '#22c55e'
  }
  return '#64748b'
}
