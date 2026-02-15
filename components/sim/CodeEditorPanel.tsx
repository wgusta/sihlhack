'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { SimChallengeId, SimDevOverrides } from '@/types/sim'

interface OpenCodeTarget {
  path: string
  line?: number
  nonce: number
}

interface CodeEditorPanelProps {
  enabled: boolean
  challengeId: SimChallengeId
  overrides: SimDevOverrides
  onOverridesChange: (overrides: SimDevOverrides) => void
  openTarget: OpenCodeTarget | null
}

export function CodeEditorPanel({
  enabled,
  challengeId,
  overrides,
  onOverridesChange,
  openTarget,
}: CodeEditorPanelProps) {
  const [files, setFiles] = useState<string[]>([])
  const [selectedPath, setSelectedPath] = useState<string>('')
  const [originalContent, setOriginalContent] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const hasOverride = useMemo(() => !!selectedPath && Object.prototype.hasOwnProperty.call(overrides, selectedPath), [overrides, selectedPath])

  useEffect(() => {
    if (!enabled) {
      setFiles([])
      setSelectedPath('')
      setOriginalContent('')
      setContent('')
      return
    }

    let cancelled = false
    const loadFiles = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/sim/dev/file?challengeId=${encodeURIComponent(challengeId)}`, { credentials: 'include' })
        if (!response.ok) {
          return
        }
        const payload = await response.json()
        if (!cancelled) {
          const list = (payload.files || []) as string[]
          setFiles(list)
          if (list.length > 0) {
            setSelectedPath((prev) => prev || list[0])
          }
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    void loadFiles()
    return () => {
      cancelled = true
    }
  }, [challengeId, enabled])

  useEffect(() => {
    if (!enabled || !selectedPath) {
      return
    }

    let cancelled = false
    const loadFile = async () => {
      setIsLoading(true)
      try {
        const params = new URLSearchParams({ challengeId, path: selectedPath })
        const response = await fetch(`/api/sim/dev/file?${params.toString()}`, { credentials: 'include' })
        if (!response.ok) {
          return
        }
        const payload = await response.json()
        if (!cancelled) {
          const loaded = payload.content || ''
          setOriginalContent(loaded)
          setContent(overrides[selectedPath] ?? loaded)
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    void loadFile()
    return () => {
      cancelled = true
    }
  }, [challengeId, enabled, overrides, selectedPath])

  useEffect(() => {
    if (!enabled || !openTarget) {
      return
    }
    setSelectedPath(openTarget.path)
    if (!openTarget.line || !textareaRef.current) {
      return
    }

    const lines = content.split('\n')
    const targetIndex = Math.max(0, Math.min(lines.length - 1, openTarget.line - 1))
    const charIndex = lines.slice(0, targetIndex).reduce((sum, line) => sum + line.length + 1, 0)
    requestAnimationFrame(() => {
      const element = textareaRef.current
      if (!element) {
        return
      }
      element.focus()
      element.setSelectionRange(charIndex, charIndex)
    })
  }, [content, enabled, openTarget])

  if (!enabled) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dev Code Overrides</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3" data-feature="sim.dev-code-editor">
        <div className="flex gap-2">
          <select
            value={selectedPath}
            onChange={(event) => setSelectedPath(event.target.value)}
            className="flex-1 rounded-md border border-historic-sepia/30 px-2 py-2 font-mono text-xs"
          >
            {files.map((filePath) => (
              <option key={filePath} value={filePath}>{filePath}</option>
            ))}
          </select>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              if (!selectedPath) {
                return
              }
              const next = { ...overrides }
              delete next[selectedPath]
              onOverridesChange(next)
              setContent(originalContent)
            }}
            disabled={!selectedPath || !hasOverride}
          >
            Revert
          </Button>
        </div>

        <textarea
          ref={textareaRef}
          value={content}
          onChange={(event) => {
            const nextContent = event.target.value
            setContent(nextContent)
            if (!selectedPath) {
              return
            }
            onOverridesChange({
              ...overrides,
              [selectedPath]: nextContent,
            })
          }}
          className="w-full min-h-[260px] rounded-md border border-historic-sepia/30 bg-white p-3 font-mono text-xs text-brand-black"
          spellCheck={false}
        />

        <p className="text-xs font-mono text-historic-sepia">
          {isLoading ? 'Loading...' : hasOverride ? 'Override staged for next run.' : 'No override applied.'}
        </p>
      </CardContent>
    </Card>
  )
}
